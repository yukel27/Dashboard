import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from '../dashboard.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StudentcreateComponent } from './studentcreate/studentcreate.component';
import { MatSort } from '@angular/material/sort';

export interface PeriodicElement {
  firstname: string;
  lastname: string;
  id: number;
  email: string;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

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
    this.dashboardService.getStudentList().subscribe(res => {
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
    const dialogRef = this.dialog.open(StudentcreateComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.fetchData();
            }
        });
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
