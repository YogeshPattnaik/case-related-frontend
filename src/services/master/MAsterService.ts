import axios from '../../config/axios';

export class MasterService {
  static getCountries() {
    return axios.get('/api/v1/masters/countries');
  }

  static createCountry(data: { name: string; isoCode: string }) {
    return axios.post('/api/v1/masters/countries', data);
  }

  static updateCountry(id: string, data: { name: string; isoCode: string }) {
    return axios.put(`/api/v1/masters/countries/${id}`, data);
  }

  static deleteCountry(id: string) {
    return axios.delete(`/api/v1/masters/countries/${id}`);
  }

  // Similarly for states
  static getStates() {
    return axios.get('/api/v1/masters/states');
  }

  static createState(data: { name: string; countryId: string }) {
    return axios.post('/api/v1/masters/states', data);
  }

  static updateState(id: string, data: { name: string; countryId: string }) {
    return axios.put(`/api/v1/masters/states/${id}`, data);
  }

  static deleteState(id: string) {
    return axios.delete(`/api/v1/masters/states/${id}`);
  }

}
