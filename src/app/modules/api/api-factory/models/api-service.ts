import { ApiRequest } from './api-request';
import { Observable } from 'rxjs';

export abstract class ApiService {
  abstract send<T, D, AR extends ApiRequest<T, D>>(apiRequest: AR): Observable<D>;
}
