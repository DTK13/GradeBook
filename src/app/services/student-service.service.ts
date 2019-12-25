import { Student, HttpResponse } from './../models/student.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  apiBase = 'http://localhost:58952/api/students/';
  constructor(public http: HttpClient) {
  }

  getStudents() {
    return this.http.get<Student[]>(`${this.apiBase}`);
  }

  getStudentByUniqueId = (uniqueId) => {
    return this.http.get<Student>(`${this.apiBase}${uniqueId}`);
  }

  postStudent(student: Student) {
    const endPoint = 'addstudent';
    return this.http.post<Student>(`${this.apiBase}${endPoint}`, student);
  }

  deleteStudent(studentId) {
    const endPoint = 'deletestudent';
    return this.http.delete<HttpResponse>(`${this.apiBase}${endPoint}/${studentId}`);
  }
}
