
import * as yup from "yup";

const schema = yup.object({

    // email is required with email format
    email: yup.string().email().required(),
  
    // phone number needs to match the regex expression
    phoneNumber: yup
      .string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        
      ).required(),
  
    DoctorName: yup.string().required(),
    Charges: yup.string().required(),
    referral: yup.string(),
  
    // password is required with minimum length of 8
    password: yup.string().min(6).required(),
  }).required();
  export default schema;