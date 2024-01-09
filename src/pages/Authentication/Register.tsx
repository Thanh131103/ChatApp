import React, { useState } from "react";
import { Alert, Row, Col, Form, Button, UncontrolledTooltip } from "reactstrap";
import { Link, Redirect, useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useRedux } from "../../hooks/index";
import { authRegisterApiResponseSuccess } from "../../redux/actions";
import NonAuthLayoutWrapper from "../../components/NonAutnLayoutWrapper";
import AuthHeader from "../../components/AuthHeader";
import FormInput from "../../components/FormInput";
import Loader from "../../components/Loader";
import { useProfile } from "../../hooks";
interface RegisterProps {}

const Register = (props: RegisterProps) => {
  const history = useHistory();
  const { dispatch, useAppSelector } = useRedux();

  const { user, registrationError, regLoading } = useAppSelector((state) => ({
    user: state.Register.user,
    registrationError: state.Register.registrationError,
    regLoading: state.Register.loading,
    isUserRegistered: state.Register.isUserRegistered,
  }));

  const resolver = yupResolver(
    yup.object().shape({
      email: yup.string().required("Please Enter E-mail."),
      password: yup.string().required("Please Enter Password."),
    })
  );

  const defaultValues: any = {};

  const methods = useForm({ defaultValues, resolver });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = methods;

  const [verificationStep, setVerificationStep] = useState(false);

  const onSubmitForm = async (values: object) => {
    try {
      console.log(values);
      // const userEmail: string = (values as { email: string }).email;

      // Make API request to send email verification code
      const response2 = await fetch("http://localhost:8000/auth/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
        
      });
      if (!response2.ok) {
        const errorData = await response2.json();
        throw new Error(errorData.detail);
      }

      setVerificationStep(true);

    } catch (error: any) {
      console.error("Error sending email verification code:", error.message);
    }
  };

  const onVerificationSubmit = async (verificationData: any) => {
    try {
      // Make API request to register the user with email verification code
      const response = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(verificationData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail);
      }

      const userData = await response.json();
      dispatch(authRegisterApiResponseSuccess(userData, "Registration successful!"));

      // Redirect to login page after a delay
      setTimeout(() => {
        history.push("/auth-login");
      }, 2000);
    } catch (error: any) {
      console.error("Registration error:", error.message);
    }
  };

  const { userProfile, loading } = useProfile();

  if (userProfile && !loading) {
    return <Redirect to={{ pathname: "/dashboard" }} />;
  }

  return (
    <NonAuthLayoutWrapper>
      <Row className=" justify-content-center my-auto">
        <Col sm={8} lg={6} xl={5} className="col-xxl-4">
          <div className="py-md-5 py-4">
            <AuthHeader
              title="Register Account"
              subtitle="Get your free Leaf account now."
            />

            {user && user ? (
              <Alert color="success">Register User Successfully</Alert>
            ) : null}

            {registrationError && registrationError ? (
              <Alert color="danger">{registrationError}</Alert>
            ) : null}

            <Form
              onSubmit={verificationStep ? handleSubmit(onVerificationSubmit) : handleSubmit(onSubmitForm)}
              className="position-relative"
            >
              {regLoading && <Loader />}
              <div className="mb-3">
                <FormInput
                  label="Email"
                  type="text"
                  name="email"
                  register={register}
                  errors={errors}
                  control={control}
                  labelClassName="form-label"
                  placeholder="Enter Email"
                  className="form-control"
                />
              </div>

              {verificationStep && (
                <div className="mb-3">
                  <FormInput
                    label="Verification Code"
                    type="text"
                    name="verificationCode"
                    register={register}
                    errors={errors}
                    control={control}
                    labelClassName="form-label"
                    placeholder="Enter Verification Code"
                    className="form-control"
                  />
                </div>
              )}

              <div className="mb-3">
                <FormInput
                  label="Password"
                  type="password"
                  name="password"
                  register={register}
                  errors={errors}
                  control={control}
                  labelClassName="form-label"
                  className="form-control pe-5"
                  placeholder="Enter Password"
                />
              </div>

              <div className="mb-4">
                <p className="mb-0">
                  By registering you agree to the Leaf{" "}
                  <Link to="#" className="text-primary">
                    Terms of Use
                  </Link>
                </p>
              </div>

              <div className="text-center mb-3">
                <Button
                  color="primary"
                  className="w-100  waves-effect waves-light"
                  type="submit"
                >
                  {verificationStep ? "Submit Verification" : "Register"}
                </Button>
              </div>
              <div className="mt-4 text-center">
                <div className="signin-other-title">
                  <h5 className="font-size-14 mb-4 title">Sign up using</h5>
                </div>
                <Row className="">
                  <div className="col-4">
                    <div>
                      <button
                        type="button"
                        className="btn btn-light w-100"
                        id="facebook"
                      >
                        <i className="mdi mdi-facebook text-indigo"></i>
                      </button>
                    </div>
                    <UncontrolledTooltip placement="top" target="facebook">
                      Facebook
                    </UncontrolledTooltip>
                  </div>
                  <div className="col-4">
                    <div>
                      <button
                        type="button"
                        className="btn btn-light w-100"
                        id="twitter"
                      >
                        <i className="mdi mdi-twitter text-info"></i>
                      </button>
                    </div>
                    <UncontrolledTooltip placement="top" target="twitter">
                      Twitter
                    </UncontrolledTooltip>
                  </div>
                  <div className="col-4">
                    <div>
                      <button
                        type="button"
                        className="btn btn-light w-100"
                        id="google"
                      >
                        <i className="mdi mdi-google text-danger"></i>
                      </button>
                    </div>
                    <UncontrolledTooltip placement="top" target="google">
                      Google
                    </UncontrolledTooltip>
                  </div>
                </Row>
              </div>
            </Form>

            <div className="mt-5 text-center text-muted">
              <p>
                Already have an account ?{" "}
                <Link
                  to="/auth-login"
                  className="fw-medium text-decoration-underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </NonAuthLayoutWrapper>
  );
};

export default Register;
