import { ApiService } from '../api-factory/models/api-service';
import { ApiRequest } from '../api-factory/models/api-request';
import { Observable } from 'rxjs';
import { ApiServiceFactory } from '../api-factory/api-service-factory.service';
import { Injectable } from '@angular/core';
import { StorePlaystationApiConfig } from './store-playstation-api.config';

@Injectable()
export class StorePlaystationApiService implements ApiService {
  private apiService = this.apiServiceFactory.create(this.storePlaystationApiConfig);
  constructor(
    private readonly apiServiceFactory: ApiServiceFactory,
    private storePlaystationApiConfig: StorePlaystationApiConfig,
  ) {}
  send<T, D, AR extends ApiRequest<T, D>>(apiRequest: AR): Observable<D> {
    return this.apiService.send(apiRequest);
  }
}
