import { Component, OnInit } from '@angular/core';
import { Student, HttpResponse } from '../models/student.model';
import { StudentServiceService } from '../services/student-service.service';




@Component({
  selector: 'app-my-classroom',
  templateUrl: './my-classroom.component.html',
  styleUrls: ['./my-classroom.component.css']
})
export class MyClassroomComponent implements OnInit {

  students: Student[];
  httpResponse = new HttpResponse();

  constructor(public studentService: StudentServiceService) { }

  ngOnInit() {
    console.log(this.httpResponse.ok);
    this.getStudents();
  }

  getStudents = () => {
    return this.studentService.getStudents().subscribe(getStudentsResponse => {
      this.students = getStudentsResponse;
    },
      error => {
        console.log(error);
      });
  }

  deleteStudent = (studentId) => {
    return this.studentService.deleteStudent(studentId).subscribe(studentDeletionResponse => {
      this.httpResponse.ok = true;
      this.httpResponse.message = 'Student Successfully Deleted!';
    },
      error => {
        this.httpResponse = error;
      });
  }


}


