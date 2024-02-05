import { NgModule } from '@angular/core';
import { ApiFactoryModule } from '../api-factory/api-factory.module';
import { StorePlaystationApiService } from './store-playstation-api.service';
import { StorePlaystationApiConfig } from './store-playstation-api.config';

@NgModule({
  imports: [ApiFactoryModule],
  providers: [StorePlaystationApiService, StorePlaystationApiConfig],
})
export class StorePlaystationApiModule {}
