import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinancialDataService {
  getFinancialData() {
    return [
      { provider: 'Proveedor A', country: 'España', revenue: 100000 },
      { provider: 'Proveedor B', country: 'México', revenue: 200000 },
      { provider: 'Proveedor C', country: 'Argentina', revenue: 150000 },
      // ...otros datos...
    ];
  }
}
