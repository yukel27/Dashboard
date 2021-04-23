import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-insturctorscreate',
  templateUrl: './insturctorscreate.component.html',
  styleUrls: ['./insturctorscreate.component.scss']
})
export class InsturctorscreateComponent implements OnInit {

  constructor(private dashboardService: DashboardService, public dialogRef: MatDialogRef<InsturctorscreateComponent>, public snackBar: MatSnackBar) { }

  instructorForm: FormGroup = new FormGroup({
    firstname: new FormControl(null),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }


  addInstructor() {
    console.log(this.instructorForm.value);
    this.dashboardService.createTeacher(this.instructorForm.value).subscribe(
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
