import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { StudentsComponent } from 'src/app/modules/students/students.component';
import { InstructorsComponent } from 'src/app/modules/instructors/instructors.component';
import { CasesComponent } from 'src/app/modules/cases/cases.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CasescreateComponent } from 'src/app/modules/cases/casescreate/casescreate.component';
import { InsturctorscreateComponent } from 'src/app/modules/instructors/insturctorscreate/insturctorscreate.component';
import { StudentcreateComponent } from 'src/app/modules/students/studentcreate/studentcreate.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatRippleModule } from '@angular/material/core';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { QrcodeComponent } from 'src/app/modules/qrcode/qrcode.component';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    QrcodeComponent,
    StudentsComponent,
    InstructorsComponent,
    CasesComponent,
    CasescreateComponent,
    InsturctorscreateComponent,
    StudentcreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    DashboardService
  ],
  entryComponents: [
    CasescreateComponent,
    InsturctorscreateComponent,
    StudentcreateComponent,
    QrcodeComponent
  ]
})
export class DefaultModule { }
