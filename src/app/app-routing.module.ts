import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { StudentsComponent } from './modules/students/students.component';
import { InstructorsComponent } from './modules/instructors/instructors.component';
import { CasesComponent } from './modules/cases/cases.component';
import { QrcodeComponent } from './modules/qrcode/qrcode.component';

const routes: Routes = [{
  path : '',
  component : DefaultComponent,
  children: [{
    path:'',
    component: DashboardComponent
  },{
    path:'students',
    component: StudentsComponent
  },{
    path:'instructors',
    component: InstructorsComponent
  },{
    path:'cases',
    component: CasesComponent
  },{
    path:'qrcodes',
    component: QrcodeComponent
  }
  ]
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
