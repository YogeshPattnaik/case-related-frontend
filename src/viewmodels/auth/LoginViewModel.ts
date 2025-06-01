export class LoginViewModel {
  email: string = '';
  password: string = '';
  otp: string = '';

  constructor(data: Partial<LoginViewModel> = {}) {
    this.email = data.email || '';
    this.password = data.password || '';
    this.otp = data.otp || '';
  }

  toJSON() {
    return {
      email: this.email,
      password: this.password,
      otp: this.otp,
    };
  }
} 