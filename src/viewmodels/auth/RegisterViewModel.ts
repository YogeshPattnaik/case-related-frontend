export class RegisterViewModel {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  phone: string = '';
  isNRI: boolean = false;

  constructor(data: Partial<RegisterViewModel> = {}) {
    this.name = data.name || '';
    this.email = data.email || '';
    this.password = data.password || '';
    this.confirmPassword = data.confirmPassword || '';
    this.phone = data.phone || '';
    this.isNRI = data.isNRI || false;
  }

  toJSON() {
    return {
      name: this.name,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
      phone: this.phone,
      isNRI: this.isNRI,
    };
  }
} 