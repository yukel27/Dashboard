import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from '../dashboard.service';
import { CasescreateComponent } from './casescreate/casescreate.component';

export interface PeriodicElement {
  id: number;
  casename: string;
}

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'description'];
  
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dashboardService: DashboardService, private dialog: MatDialog) {
   }

  ngOnInit() { 
    this.fetchData()
  }   
 
  fetchData() {
    this.dashboardService.getCaseList().subscribe(res => {
      let result:any = res
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }
  
  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "65%";
    const dialogRef = this.dialog.open(CasescreateComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.fetchData();
      }
    });
  }

}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {id: 1, casename: 'Heal'},
//   {id: 2, casename: 'H2O'},
//   {id: 3, casename: 'CO2'},
//   {id: 4, casename: 'Fe3O5'},
//   {id: 5, casename: 'Cool'},
//   {id: 6, casename: 'C'},
//   {id: 7, casename: 'N'},
//   {id: 8, casename: 'O'},
//   {id: 9, casename: 'F'},
//   {id: 10, casename: 'Ne'}
// ];
