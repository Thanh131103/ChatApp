import { AuthRegisterActionTypes, AuthRegisterState } from "./types";

const INIT_STATE: AuthRegisterState = {
  registrationError: null,
  message: "",
  loading: false,
  user: null,
};

const Register = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case AuthRegisterActionTypes.API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case AuthRegisterActionTypes.REGISTER_USER:
          return {
            ...state,
            loading: false,
            user: action.payload.data,
            registrationError: null,
            message: "Registration successful!", // Assuming your server sends a message upon success
          };
        default:
          return state;
      }

    case AuthRegisterActionTypes.API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case AuthRegisterActionTypes.REGISTER_USER:
          return {
            ...state,
            loading: false,
            registrationError: action.payload.error,
            message: "", // Resetting the message upon error
          };
        default:
          return state;
      }

    case AuthRegisterActionTypes.REGISTER_USER: {
      return {
        ...state,
        loading: true,
        registrationError: null,
        message: "", // Resetting the message upon initiating registration
      };
    }
    default:
      return state;
  }
};

export default Register;
