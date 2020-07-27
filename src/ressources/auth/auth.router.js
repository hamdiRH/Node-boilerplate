import express from "express";
import { checkSchema } from "express-validator";
import { authValidation } from "./auth.validation";
import {
//   signIn,
  signUp,
//   ConfirmEmail,
//   getUser,
//   resetPassword,
//   ConfirmResetPassword,
//   updatePassword,
} from "./auth.controller";
import { verifyToken } from "./auth.validation";
import { resolvePromises, returnIfNotValid } from "../../utils/validation";
import { auth } from "../../utils/auth";

const router = express.Router();

// router.post(
//   "/signin",
//   checkSchema(authValidation.signInSchema),
//   returnIfNotValid,
//   resolvePromises,
//   signIn
// );

router.post(
  "/register",
  checkSchema(authValidation.signUpSchema),
  returnIfNotValid,
  resolvePromises,
  signUp
);

// router.get("/confirmemail/:id", verifyToken, ConfirmEmail);

// router.get("/getuser", auth, getUser);

// router.post(
//   "/resetPassword",
//   checkSchema(authValidation.resetPassword),
//   returnIfNotValid,
//   resolvePromises,
//   resetPassword
// );

// router.post(
//   "/ConfirmResetPassword/:id",
//   verifyToken,
//   checkSchema(authValidation.ConfirmResetPassword),
//   returnIfNotValid,
//   resolvePromises,
//   ConfirmResetPassword
// );

// router.post(
//   "/updatePassword",
//   auth,
//   checkSchema(authValidation.updatePassword),
//   returnIfNotValid,
//   resolvePromises,
//   updatePassword
// );




// export default router;
export default router;
