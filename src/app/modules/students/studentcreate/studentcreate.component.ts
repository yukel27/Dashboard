import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-studentcreate',
  templateUrl: './studentcreate.component.html',
  styleUrls: ['./studentcreate.component.scss']
})

export class StudentcreateComponent implements OnInit {

  constructor(private dashboardService: DashboardService, public dialogRef: MatDialogRef<StudentcreateComponent>, public snackBar: MatSnackBar) { }

  studentForm: FormGroup = new FormGroup({
    firstname: new FormControl(null),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });


  ngOnInit(): void {
  }

  addStudent(){
    console.log(this.studentForm.value);
    this.dashboardService.createStudent(this.studentForm.value).subscribe(
      data => {
        setTimeout(() => {
          this.snackBar.dismiss()
        }, 2000);
        this.dialogRef.close("check");
        this.snackBar.open('::Submited successfully')
      },
      error => {
        this.snackBar.open('::Something goes wrong')
      }
    ); 
  }

}

