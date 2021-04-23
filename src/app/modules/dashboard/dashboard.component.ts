import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


export interface PeriodicElement {
  firstname: string;
  lastname: string;
  id: number;
  email: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  
  // bigChart = [];
  // cards = [];
  // pieChart = [];

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    // this.bigChart = this.dashboardService.bigChart();
    // this.cards = this.dashboardService.cards();
    // this.pieChart = this.dashboardService.pieChart();

    this.dataSource.paginator = this.paginator;
  }

}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, firstname: 'Hydrogen', lastname:'Aaa', email: 'H'},
  {id: 2, firstname: 'Helium', lastname:'BB', email: 'He'},
  {id: 3, firstname: 'Lithium', lastname:'Caa', email: 'Li'},
  {id: 4, firstname: 'Beryllium', lastname:'Daa', email: 'Be'},
  {id: 5, firstname: 'Boron', lastname:'Eab', email: 'B'},
  {id: 6, firstname: 'Carbon', lastname:'Eac', email: 'C'},
  {id: 7, firstname: 'Nitrogen', lastname:'Ead', email: 'N'},
  {id: 8, firstname: 'Oxygen', lastname:'Eae', email: 'O'},
  {id: 9, firstname: 'Fluorine', lastname:'Faa', email: 'F'},
  {id: 10, firstname: 'Neon', lastname:'Gaa', email: 'Ne'},
  {id: 11, firstname: 'Sodium', lastname:'Haa', email: 'Na'},
  {id: 12, firstname: 'Magnesium', lastname:'Iaa', email: 'Mg'},
  {id: 13, firstname: 'Aluminum', lastname:'Jaa', email: 'Al'},
];



