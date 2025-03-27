import { Component, OnInit } from '@angular/core';
import { FinancialDataService } from '../services/financial-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  financialData: any[] = [];
  filteredData: any[] = [];
  searchQuery: string = '';
  countryFilter: string = '';
  uniqueCountries: string[] = [];

  constructor(private financialDataService: FinancialDataService) {}

  ngOnInit(): void {
    this.financialData = this.financialDataService.getFinancialData();
    this.filteredData = this.financialData;
    this.uniqueCountries = [...new Set(this.financialData.map(item => item.country))];
  }

  applyFilters(): void {
    this.filteredData = this.financialData.filter(item => 
      (!this.countryFilter || item.country === this.countryFilter) &&
      (!this.searchQuery || item.provider.toLowerCase().includes(this.searchQuery.toLowerCase()))
    );
  }
}
