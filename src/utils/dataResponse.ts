export class DataResponse {
  status = 200;

  data: unknown;

  constructor(data: unknown = {}) {
    this.data = data;
  }
}
