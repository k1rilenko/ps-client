import { ApiMethod } from './api-method';
import { ApiQueryParams } from './api-query-params';

export interface ApiRequest<RequestBody, T> {
  url: string;
  method: ApiMethod;
  responseBody?: T;
  body?: RequestBody;
  params?: ApiQueryParams;
}
