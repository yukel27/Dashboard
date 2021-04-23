import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-casescreate',
  templateUrl: './casescreate.component.html',
  styleUrls: ['./casescreate.component.scss']
})
export class CasescreateComponent implements OnInit {

  constructor(private dashboardService: DashboardService, public dialogRef: MatDialogRef<CasescreateComponent>, public snackBar: MatSnackBar) { }

  caseForm: FormGroup = new FormGroup({
    name: new FormControl(null),
    description: new FormControl('', Validators.required)
  });
  
  ngOnInit(): void {
  }

  addCase() {
    console.log(this.caseForm.value);
    this.dashboardService.createCase(this.caseForm.value).subscribe(
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
