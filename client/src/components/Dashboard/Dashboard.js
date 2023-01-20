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
  // add paper proper here
});

const StyledButton = styled(Button)(({ theme }) => ({
  padding: "0",
  [theme.breakpoints.down("sm")]: {
    fontSize: ".8rem",
    padding: ".5rem",
  },
}));

const StyledModalBox = styled(Paper)({
  backgroundColor: "#FAF9F6",
  minHeight: "160px",
  borderRadius: ".6rem",
  width: "80%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  // add paper proper here
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
    <Box sx={{ minHeight: "100vh" }}>
      {/* Change bgColor for containers later */}
      <Container sx={{ mt: 5, p: 2, backgroundColor: "#c1c1c1" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <Item sx={{ minHeight: " 200px" }} elevation={12}>
                <TheGraphComponent chart={chart} />
              </Item>
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Item elevation={12}>
                <StyledButton>
                  {/* <MdOutlineSavings /> */}
                  Savings
                </StyledButton>
              </Item>

              <Item elevation={12}>
                <StyledButton>Bills</StyledButton>
              </Item>

              <Item elevation={12}>
                <StyledButton>Spent</StyledButton>
              </Item>
            </Grid>
            <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
              <Item elevation={16}>
                <Button onClick={handleClick} id="pie">
                  Pie
                </Button>
              </Item>
              <Item elevation={16}>
                <Button onClick={handleClick} id="bar">
                  Bar
                </Button>
              </Item>
              <Item elevation={16}>
                <Button onClick={handleClick} id="line">
                  Line
                </Button>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container sx={{ mt: 3, p: 3, backgroundColor: "#c1c1c1" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
            <Grid item xs={6}>
              <StyledBox elevation={4}>
                <Button onClick={handleOpen}>Update Total</Button>
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
                        {/* Need to bind click event to handle what happens on form submit */}
                        <Button onClick={handleFormSubmit} type="button" sx={{ mt: 5 }}>
                          Submit
                        </Button>
                      </Box>
                    </Box>
                  </StyledModalBox>
                </Modal>
              </StyledBox>
            </Grid>
            <Grid item xs={6}>
              <StyledBox elevation={4}>
                <Link to="/spending">
                  <Button>Spending</Button>
                </Link>
              </StyledBox>
            </Grid>
            <Grid item xs={6}>
              <StyledBox elevation={4}>
                <Link to="/bills">
                  <Button>Bills</Button>
                </Link>
              </StyledBox>
            </Grid>
            <Grid item xs={6}>
              <StyledBox elevation={4}>
                <Link to="/savings">
                  <Button>Savings</Button>
                </Link>
              </StyledBox>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
