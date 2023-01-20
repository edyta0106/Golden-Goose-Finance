import { Container, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { useMutation } from "@apollo/client";
import { ADD_BILL } from "../../utils/mutations";
import Auth from "../../utils/auth";

const StyledTextField = styled(TextField)({
  width: "100%",
  marginTop: "1.2rem",
});

export default function BillsForm() {
  // const [value, setValue] = React.useState(dayjs);

  // const handleChanges = (newValue) => {
  //   setValue(newValue);
  // };

  const [formState, setFormState] = useState({
    billName: "",
    billAmount: 0,
    dueDate: "",
  });
  const [addBill] = useMutation(ADD_BILL);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addBill({
        variables: {
          ...formState,
          billAmount: parseInt(formState.billAmount),
          user: Auth.getProfile().data.username,
        },
      });
      console.log(data);
      setFormState();
      window.location.assign("/bills");
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  return (
    <>
      <Container>
        <Box component="form" onSubmit="">
          <StyledTextField
            name="billname"
            value={formState?.billName || ""}
            onChange={handleChange}
            type="text"
            id="standard-basic"
            label="Bill Name"
            variant="standard"
          />
          <StyledTextField
            name="billamount"
            value={formState?.billAmount || ""}
            onChange={handleChange}
            type="number"
            step="10"
            id="standard-basic"
            label="Bill Amount"
            variant="standard"
          />
          <br></br>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              label="Due Date"
              name="duedate"
              value={formState?.billDueDate || ""}
              onChange={handleChange}
              inputFormat="MM/DD/YYYY"
              // value={value}
              // onChange={handleChanges}
              renderInput={(params) => <StyledTextField {...params} />}
            />
          </LocalizationProvider>
          {/* <StyledTextField
            name="category"
            type="textarea"
            id="standard-basic"
            multiline
            rows={2}
            maxRows={4}
            label="Category Type"
            variant="standard"
          /> */}
          <Box sx={{ textAlign: "center" }}>
            <Link to="/bills">
              <Button
                onClick={handleFormSubmit}
                type="submit"
                variant="outlined"
                sx={{
                  my: 5,
                  bgcolor: "gray",
                  color: "white",
                  border: "none",
                }}
              >
                Submit
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </>
  );
}
