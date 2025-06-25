export class LoginViewModel {
  /**
   * The user's email address (used for API submission).
   */
  emailOrMobile: string = '';
  /**
   * The user's password.
   */
  password: string = '';

  constructor(data: Partial<LoginViewModel> = {}) {
    this.emailOrMobile = data.emailOrMobile || '';
    this.password = data.password || '';
  }

  /**
   * Returns the object shape expected by the API for login submission.
   * Use this when sending data to the backend.
   */
  toJSON() {
    return {
      emailOrMobile: this.emailOrMobile,
      password: this.password,
    };
  }

  /**
   * Returns the object shape expected by the Formik login form.
   * Use this for Formik's initialValues.
   */
  static formInitialValues() {
    return {
      emailOrMobile: '',
      password: '',
    };
  }
} 