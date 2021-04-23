import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', observe: 'response' })
};

@Injectable({
  providedIn: 'root'
})

export class DashboardService {
  //http://inter.us-east-2.elasticbeanstalk.com/api/student
  private rootUrl = "http://inter.us-east-2.elasticbeanstalk.com/api/";
  constructor(private http: HttpClient) {
  }

  getStudentList() {
    return this.http.get(this.rootUrl + "student");
  }

  getInstructorsList() {
    return this.http.get(this.rootUrl + "teacher");
  }

  getCaseList() {
    return this.http.get(this.rootUrl + "case");
  }

  createStudent(student : any){
    return this.http.post(this.rootUrl + "student", student, httpOptions);
  }

  createTeacher(teacher : any){
    return this.http.post(this.rootUrl + "teacher", teacher, httpOptions);
  }

  createCase(casea : any){
    return this.http.post(this.rootUrl + "case", casea, httpOptions);
  }
  
}
