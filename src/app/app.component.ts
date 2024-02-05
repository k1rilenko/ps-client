import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StorePlaystationApiService } from './modules/api/store-playstation-api/store-playstation-api.service';
import { categoryGridRequest } from './modules/api/store-playstation-api/requests/category-grid.request';
import { ApiFactoryModule } from './modules/api/api-factory/api-factory.module';
import { StorePlaystationApiModule } from './modules/api/store-playstation-api/store-playstation-api.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ApiFactoryModule, StorePlaystationApiModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private storePlaystationApiService: StorePlaystationApiService) {
    this.storePlaystationApiService.send(categoryGridRequest()).subscribe(value => console.log('categoryGridRequest:', value));
  }
}
