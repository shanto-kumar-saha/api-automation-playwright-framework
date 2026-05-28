import { env } from '../../env.js';

export class ProductClient {

  constructor(request) {
    this.request = request;
    this.baseURL = env.baseURL + '/products';
  }

  getProducts() {
    return this.request.get(this.baseURL);
  }

  getSingleProduct(id) {
    return this.request.get(`${this.baseURL}/${id}`);
  }

  createProduct(data) {
    return this.request.post(this.baseURL, { data });
  }

  updateProduct(id, data) {
    return this.request.put(`${this.baseURL}/${id}`, { data });
  }
}