import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from '../dashboard.service';
import { InsturctorscreateComponent } from './insturctorscreate/insturctorscreate.component';

export interface PeriodicElement {
  firstname: string;
  lastname: string;
  id: number;
  email: string;
}

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email'];
  
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dashboardService: DashboardService, private dialog: MatDialog) {
   }

  ngOnInit() { 
    this.fetchData()
  }   
 
  fetchData() {
    this.dashboardService.getInstructorsList().subscribe(res => {
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
    const dialogRef = this.dialog.open(InsturctorscreateComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.fetchData();
      }
    });
  }

}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, firstname: 'John', lastname: 'Aaa', email: 'H' },
  { id: 2, firstname: 'Casey', lastname: 'BB', email: 'He' },
  { id: 3, firstname: 'Donald', lastname: 'Caa', email: 'Li' },
  { id: 4, firstname: 'Betty', lastname: 'Daa', email: 'Be' },
  { id: 5, firstname: 'Laurence', lastname: 'Eab', email: 'B' },
  { id: 6, firstname: 'Carbon', lastname: 'Eac', email: 'C' },
  { id: 7, firstname: 'Nick', lastname: 'Ead', email: 'N' },
  { id: 8, firstname: 'Olivia', lastname: 'Eae', email: 'O' },
  { id: 9, firstname: 'Helen', lastname: 'Faa', email: 'F' },
  { id: 10, firstname: 'Elsa', lastname: 'Gaa', email: 'Ne' }
];
