import { useEffect } from "react";
import { Box, Button, FormControl, Grid2, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { constants } from "./booking.constants";

const servicesList = constants.services;

const Booking = () => {
  const formValidation = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required")
  });

  const myForm = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "General Inquiry",
      message: ""
    },
    validationSchema: formValidation,
    onSubmit: values => {
      console.log(values);
    }
  });

  useEffect(() => {
    myForm.setFieldTouched("name", true);
  }, []);

  return (
    <div>
      <h1>Booking</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <FormControl>
        <Box component={"form"}>
          <div>
            <Grid2 container spacing={3}>
              <Grid2 container size={12}>
                <Grid2 size={{ xs: 12, lg: 3 }}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    value={myForm.values.firstName}
                    onChange={myForm.handleChange}
                    fullWidth
                  />
                </Grid2>
                <Grid2 size={{ xs: 12, lg: 3 }}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    value={myForm.values.lastName}
                    onChange={myForm.handleChange}
                    fullWidth
                  />
                </Grid2>
              </Grid2>
              <Grid2 container size={12}>
                <Grid2 size={{ xs: 12, lg: 3 }}>
                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    value={myForm.values.email}
                    onChange={myForm.handleChange}
                    error={!!myForm.errors.email}
                    fullWidth
                    required
                  />
                </Grid2>
                <Grid2 size={{ xs: 12, lg: 3 }}>
                  <TextField
                    required
                    id="phone"
                    name="phone"
                    label="Phone"
                    value={myForm.values.phone}
                    onChange={myForm.handleChange}
                    fullWidth
                  />
                </Grid2>
              </Grid2>
              <Grid2 container size={12}>
                <Grid2 size={{ xs: 12, lg: 6 }}>
                  <TextField
                    id="outlined-select-services-native"
                    select
                    label="Service"
                    name="service"
                    onChange={myForm.handleChange}
                    value={myForm.values.service}
                    fullWidth
                    slotProps={{
                      select: {
                        native: true
                      }
                    }}
                    helperText="Please select the service you would like to inquire about"
                  >
                    {servicesList.map(option =>
                      <option key={option} value={option}>
                        {option}
                      </option>
                    )}
                  </TextField>
                </Grid2>
              </Grid2>
              <Grid2 container size={12}>
                <Grid2 size={{ xs: 12, lg: 6 }}>
                  <TextField
                    id="outlined-message-flexible"
                    label="Message"
                    name="message"
                    value={myForm.values.message}
                    onChange={myForm.handleChange}
                    fullWidth
                    multiline
                    rows={9}
                  />
                </Grid2>
              </Grid2>
              <Grid2 container size={12}>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={!myForm.isValid}
                  onClick={myForm.submitForm}
                  sx={{ background: "#3d276f" }}
                >
                  Submit
                </Button>
                {!myForm.isValid &&
                  <p>
                    Please fill out all required fields (marked with a *) before
                    submitting the form.
                  </p>}
              </Grid2>
            </Grid2>
          </div>
        </Box>
      </FormControl>
    </div>
  );
};

export default Booking;
