export class ProfileCompletionViewModel {
  roleId: string = '';
  name: string = '';
  email: string = '';
  phone: string = '';
  addressLine1: string = '';
  addressLine2: string = '';
  city: string = '';
  state: string = '';
  country: string = '';
  postalCode: string = '';
  idTypeId: string = '';
  idNumber: string = '';
  idExpiryDate: string = '';
  idIssuingCountry: string = '';
  isNRI: boolean = false;
  isProfileComplete: boolean = false;
  isAddressComplete: boolean = false;
  isIdentificationComplete: boolean = false;

  constructor(data: Partial<ProfileCompletionViewModel> = {}) {
    this.roleId = data.roleId || '';
    this.name = data.name || '';
    this.email = data.email || '';
    this.phone = data.phone || '';
    this.addressLine1 = data.addressLine1 || '';
    this.addressLine2 = data.addressLine2 || '';
    this.city = data.city || '';
    this.state = data.state || '';
    this.country = data.country || '';
    this.postalCode = data.postalCode || '';
    this.idTypeId = data.idTypeId || '';
    this.idNumber = data.idNumber || '';
    this.idExpiryDate = data.idExpiryDate || '';
    this.idIssuingCountry = data.idIssuingCountry || '';
    this.isNRI = data.isNRI || false;
    this.isProfileComplete = data.isProfileComplete || false;
    this.isAddressComplete = data.isAddressComplete || false;
    this.isIdentificationComplete = data.isIdentificationComplete || false;
  }

  toJSON() {
    return {
      roleId: this.roleId,
      name: this.name,
      email: this.email,
      phone: this.phone,
      addressLine1: this.addressLine1,
      addressLine2: this.addressLine2,
      city: this.city,
      state: this.state,
      country: this.country,
      postalCode: this.postalCode,
      idTypeId: this.idTypeId,
      idNumber: this.idNumber,
      idExpiryDate: this.idExpiryDate,
      idIssuingCountry: this.idIssuingCountry,
      isNRI: this.isNRI,
      isProfileComplete: this.isProfileComplete,
      isAddressComplete: this.isAddressComplete,
      isIdentificationComplete: this.isIdentificationComplete,
    };
  }
} 