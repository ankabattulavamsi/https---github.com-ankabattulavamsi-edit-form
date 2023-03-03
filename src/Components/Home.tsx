import {
  Button,
  Dialog,
  Divider,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
import OtpInput from "react-otp-input";
import CloseIcon from "@mui/icons-material/Close";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";

class Home extends Component {
  state = {
    open: false,
    oldPassword: "",
    password: "",
    confirmPassword: "",
  };

  handleChangeOldPassword = (password: any) => {
    this.setState({ oldPassword: password });
  };

  handleChangePassword = (password: any) => {
    this.setState({ password });
  };

  confirmPassChangehandle = (password: any) => {
    this.setState({ confirmPassword: password });
    if (password !== this.state.password) {
      this.setState({
        errrorConfirmPassword:
          "please password and confirm password is not matched",
      });
    } else {
      this.setState({
        errrorConfirmPassword: "",
      });
    }
  };

  onClickOpenModel = () => {
    this.setState({ open: true });
  };

  handleCloseAddOffer = () => {
    this.setState({ open: false });
  };

  handleNavigate = () => {
    this.setState({
      password: "",
      changePassword: "",
      open: false
    });
    console.log("login success");
  };

  registeredSchema = Yup.object().shape({
    oldPassword: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Please fill this field old password"),

    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Please fill this field password"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must be match")
      .required("Required"),
  });

  render() {
    const { open } = this.state;
    return (
      <>
        <Box>
          <Button onClick={this.onClickOpenModel}>Dialouge</Button>
        </Box>

        <Dialog
          open={open}
          maxWidth="md"
          sx={{ m: 12 }}
          className="dialog-box-change"
        >
          <Box
            sx={{
              bgcolor: "transparent",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              width: "100%",
              position: "relative",
              height: "3rem",
              background: "transparent",
            }}
          >
            <IconButton
              aria-label="close"
              onClick={this.handleCloseAddOffer}
              sx={{
                position: "absolute",
                right: 0,
                top: "-10%",
                color: "#fff",
              }}
            >
              <CloseIcon style={{ width: "36px" }} />
            </IconButton>
          </Box>
          <Divider />
          <Box sx={{ backgroundColor: "#fff" }}>
            <Box sx={{ p: 3, m: 2 }}>
              <Typography
                sx={{
                  fontFamily: "Fira Sans",
                  fontStyle: " normal",
                  fontWeight: 700,
                  fontSize: "28px",
                  lineHeight: "48px",
                }}
              >
                Change Your Passcode
              </Typography>
              <Formik
                enableReinitialize={true}
                initialValues={{
                  password: this.state.password,
                  confirmPassword: this.state.confirmPassword,
                }}
                validationSchema={this.registeredSchema}
                onSubmit={values => {
                    this.handleNavigate();
                  }}
              >
                 <Form >
                      <Box>
                        <Box>
                          <Typography
                            sx={{
                              color: "#272522",
                              fontSize: "17px",
                              textTransform: "capitalize",
                            }}
                          >
                            Old Password
                          </Typography>
                        </Box>
                        <OtpInput
                          value={this.state.oldPassword}
                          onChange={this.handleChangeOldPassword}
                          numInputs={6}
                          placeholder="******"
                          inputStyle={{
                            width: "50px",
                            height: "40px",
                            borderRadius: "5%",
                            border: "none",
                            margin: "0 3px",
                            fontSize: "15px",
                            backgroundColor: "#f0f0f0",
                            marginBottom: "5px",
                          }}
                        />
                        <ErrorMessage component={"p"} className="error-message" name='oldPassword' />
                      </Box>

                      <Box>
                        <Typography
                          sx={{
                            color: "#272522",
                            fontSize: "17px",
                            textTransform: "capitalize",
                          }}
                        >
                          New Password
                        </Typography>
                        <OtpInput
                          value={this.state.password}
                          onChange={this.handleChangePassword}
                          numInputs={6}
                          placeholder="******"
                          inputStyle={{
                            width: "50px",
                            height: "40px",
                            borderRadius: "5%",
                            border: "none",
                            margin: "0 3px",
                            fontSize: "15px",
                            backgroundColor: "#f0f0f0",
                            marginBottom: "5px",
                          }}
                        />
                         <ErrorMessage component={"p"} className="error-message" name='password' />
                      </Box>

                      <Box>
                        <Typography
                          sx={{
                            color: "#272522",
                            fontSize: "17px",
                            textTransform: "capitalize",
                          }}
                        >
                          Conform Password
                        </Typography>
                        <OtpInput
                          value={this.state.confirmPassword}
                          onChange={this.confirmPassChangehandle}
                          numInputs={6}
                          placeholder="******"
                          inputStyle={{
                            width: "50px",
                            height: "40px",
                            borderRadius: "5%",
                            border: "none",
                            margin: "0 3px",
                            fontSize: "15px",
                            backgroundColor: "#f0f0f0",
                          }}
                        />
                        <ErrorMessage component={"p"} className="error-message" name='confirmPassword' />
                      </Box>

                      <Box sx={{ mt: 2, backgroundColor: "#E7A356" }}>
                        <Button
                          type="submit"
                          style={{
                            backgroundColor: "#E7A356",
                            color: "#fff",
                            borderRadius: "5px",
                            textAlign: "center",
                            fontFamily: "Fira Sans",
                            fontStyle: "normal",
                            fontWeight: "700",
                            fontSize: "20px",
                            letterSpacing: "0.02em",
                            textTransform: "uppercase",
                          }}
                          fullWidth
                        >
                          Change Passcode
                        </Button>
                      </Box>
                    </Form>
              </Formik>
            </Box>
          </Box>
        </Dialog>
      </>
    );
  }
}

export default Home;
