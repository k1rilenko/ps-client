import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from './models/api-config';
import { ApiService } from './models/api-service';
import { ApiRequest } from './models/api-request';
import { Observable } from 'rxjs';

@Injectable()
export class ApiServiceFactory {
  constructor(private readonly httpClient: HttpClient) {}

  create(apiConfig: ApiConfig): ApiService {
    const httpClient = this.httpClient;

    return {
      send<T, D, AR extends ApiRequest<T, D>>(apiRequest: AR): Observable<D> {
        const { host } = apiConfig;
        const url = host + apiRequest.url;
        switch (apiRequest.method) {
          case 'GET':
            return httpClient.get<D>(url, { params: apiRequest?.params });
          default:
            return httpClient.request<D>(apiRequest.method, url, {
              body: apiRequest.body,
            });
        }
      },
    };
  }
}
