import { NgModule } from '@angular/core';
import { ApiServiceFactory } from './api-service-factory.service';

@NgModule({
  providers: [ApiServiceFactory],
})
export class ApiFactoryModule {}
