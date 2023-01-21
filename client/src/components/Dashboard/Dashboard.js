// rfc command for react function

import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box, Paper, Grid, Container, Button, Typography, Modal, TextField } from "@mui/material";
import { MdOutlineSavings } from "react-icons/md";
import { Stack } from "@mui/system";
import { ADD_INCOME } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import Auth from "../../utils/auth";
import { TheGraphComponent } from "../graphComponents/TheGraphComponent";

//1. create use state - income, setIncome
//2. build a function that setsIncome when modal is open
//3. create query to find income on user context
//4. pass that query results to income

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#FAF9F6",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const StyledBox = styled(Paper)({
  backgroundColor: "#FAF9F6",
  minHeight: "160px",
  borderRadius: ".6rem",
  display: "grid",
  justifyContent: "center",
  alignContent: "center",
  "&:hover": {
    transform: "scale(110%)",
    transition: "ease-in-out",
  },
});

const StyledButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  fontSize: "1.2rem",
}));
const GraphButton = styled(Button)(({ theme }) => ({
  "&:hover": { backgroundColor: "rgba(201, 203, 207, .7)" },
}));

const StyledModalBox = styled(Paper)({
  backgroundColor: "#E0F2F1",
  minHeight: "160px",
  borderRadius: ".6rem",
  width: "80%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

const ModalItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: ".5rem",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const StyledTextField = styled(TextField)({
  width: "100%",
});

export default function Dashboard() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [chart, setChart] = useState("");

  const handleClick = (event) => {
    const currentTargetId = event.currentTarget.id;
    if (currentTargetId === "pie") {
      setChart("pie");
    } else if (currentTargetId === "line") {
      setChart("line");
    } else {
      setChart("bar");
    }
  };

  const [formState, setFormState] = useState({
    income: "",
  });
  const [addIncome, { error }] = useMutation(ADD_INCOME);

  if (error) {
    console.log(JSON.stringify(error));
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("handleFormSubmit");
    try {
      const { data } = await addIncome({
        variables: {
          income: parseInt(formState.income),
          user: Auth.getProfile().data.username,
        },
      });
      console.log(data);
      setFormState({ income: "" });
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Box sx={{ minHeight: "85vh" }}>
      {/* Graph Container */}
      <Container sx={{ mt: 5, p: 2 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Item sx={{ minHeight: " 200px" }} elevation={12}>
                <TheGraphComponent chart={chart} />
              </Item>
            </Grid>
            <Grid item xs={12} sx={{ mt: 5, display: "flex", justifyContent: "center", flexDirection: "row", gap: 3 }}>
              <Item elevation={16}>
                <GraphButton onClick={handleClick} id="pie">
                  Pie
                </GraphButton>
              </Item>
              <Item elevation={16}>
                <GraphButton onClick={handleClick} id="bar">
                  Bar
                </GraphButton>
              </Item>
              <Item elevation={16}>
                <GraphButton onClick={handleClick} id="line">
                  Line
                </GraphButton>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
      {/* Card Tile Container */}
      <Container sx={{ mt: 5, p: 3 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
            <Grid item xs={6}>
              <StyledBox elevation={4} sx={{ bgcolor: "rgba(75, 192, 192, 1)" }}>
                <StyledButton onClick={handleOpen}>Update Income</StyledButton>
                <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                  <StyledModalBox>
                    <Typography textAlign="center" sx={{ mt: 5 }} id="modal-modal-title" variant="h6" component="h2">
                      Updated your finances here :
                    </Typography>
                    <Box component="form" spacing={2} sx={{ p: 5 }}>
                      <ModalItem elevation={24}>
                        <StyledTextField
                          onChange={handleChange}
                          value={formState.income}
                          name="income"
                          type="number"
                          id="standard-basic"
                          label="Total Income"
                          variant="standard"
                        />
                      </ModalItem>
                      <Box textAlign="center">
                        <Button onClick={handleFormSubmit} type="button" sx={{ mt: 5, bgcolor: "rgb(75, 192, 192)", color: "white" }}>
                          Submit
                        </Button>
                      </Box>
                    </Box>
                  </StyledModalBox>
                </Modal>
              </StyledBox>
            </Grid>
            <Grid item xs={6}>
              <StyledBox elevation={4} sx={{ bgcolor: "rgba(255, 99, 132, 1)" }}>
                <Link to="/spending">
                  <StyledButton>Expenses</StyledButton>
                </Link>
              </StyledBox>
            </Grid>
            <Grid item xs={6}>
              <StyledBox elevation={4} sx={{ bgcolor: "rgba(54, 162, 235, 1)" }}>
                <Link to="/bills">
                  <StyledButton>Bills</StyledButton>
                </Link>
              </StyledBox>
            </Grid>
            <Grid item xs={6}>
              <StyledBox elevation={4} sx={{ bgcolor: "rgba(255, 206, 86, 1)" }}>
                <Link to="/savings">
                  <StyledButton>Savings</StyledButton>
                </Link>
              </StyledBox>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
