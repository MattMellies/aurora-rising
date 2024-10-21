import { useEffect, useState } from "react";
import { Box, Button, FormControl, Grid2, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useFormik } from "formik";
import ContactImage from "../../assets/images/266936504.jpeg";
import PageImage from "../../components/PageImage";
import * as Yup from "yup";
import { constants } from "./contact.constants";

const servicesList = constants.services;

const Contact = () => {
  const [sent, setIsSent] = useState(false);
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
      booking: "",
      service: "General Inquiry",
      message: ""
    },
    validationSchema: formValidation,
    onSubmit: values => {
      console.log(values);
    }
  });

  const handleSend = () => {
    myForm.submitForm();
    setIsSent(true);
  };

  useEffect(() => {
    myForm.setFieldTouched("name", true);
    //eslint-disable-next-line
  }, []);

  return (
    <div>

      <h1>Contact Us</h1>
      <div className="lrContainer">
        <div className="left" style={{textAlign: "left"}}>
          <PageImage image={ContactImage} />
          <h2>Schedule a Virtual Meet & Greet</h2>
          <p>
            At Aurora Rising Ltd., we're excited to partner with you on your
            journey. Scheduling a consultation is simple and designed to meet your
            needs. Here's how to get started:
          </p>
          <h3>How to Schedule Your Appointment</h3>
          <p>
            <strong>Complete the Contact Form:</strong> Fill out our contact form
            with your details and service preferences. This will help us better
            understand your needs and expedite the scheduling process. Don't forget
            to throw in what time of day might work best for a meet and greet!
          </p>
          <p>
            <strong>Select a Date and Time:</strong> Once we receive your form, our
            team will reach out to discuss available dates and times that fit your
            schedule. We offer flexible options to accommodate your busy life.
          </p>
          <p>
            <strong>Confirmation:</strong> After finalizing your appointment, you
            will receive a confirmation email with all the details and any necessary
            instructions.
          </p>
          <h3>Cancellation Policy</h3>
          <p>
            If you need to reschedule or cancel your appointment, please notify us
            at least 24 hours. We your understanding as we work to support all our
            clients.
          </p>
        </div>

        <div className="right">
          <FormControl>
          <Box component={"form"}>
            <div>
              <Grid2 container spacing={3}>
                <Grid2 container size={12}>
                  <Grid2 size={{ xs: 12, lg: 6 }}>
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
                  <Grid2 size={{ xs: 12, lg: 6 }}>
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
                  <Grid2 size={{ xs: 12, lg: 6 }}>
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
                  <Grid2 size={{ xs: 12, lg: 6 }}>
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
                  <Grid2 size={{ xs: 12 }}>
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
                  <Grid2 size={{ xs: 12 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateTimePicker
                        format="DD/MM/YYYY hh:mm a"
                        label="Ideal Booking Date/Time"
                        onChange={value => myForm.setFieldValue("booking", value)}
                        fullWidth
                      />
                    </LocalizationProvider>
                  </Grid2>
                </Grid2>
                <Grid2 container size={12}>
                  <Grid2 size={{ xs: 12 }}>
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
                    disabled={!myForm.isValid && !sent}
                    onClick={handleSend}
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
      </div>
    </div>
  );
};

export default Contact;
