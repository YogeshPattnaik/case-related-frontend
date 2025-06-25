import * as yup from 'yup';
import { LoginViewModel } from '../../viewmodels/auth/LoginViewModel';

export const loginValidationSchema = yup.object().shape({
  emailOrMobile: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .when('$isPasswordLogin', {
      is: true,
      then: (schema) => schema.required('Password is required'),
      otherwise: (schema) => schema.optional(),
    }),
});

export type LoginFormValues = yup.InferType<typeof loginValidationSchema>;

export const initialLoginValues: LoginFormValues = new LoginViewModel(); 