import { StudentServiceService } from './../services/student-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentServiceService,
  ) { }

  studentId: string;
  student: Student;
  ngOnInit() {
    this.getStudentId();
    this.getStudentById();
  }

  getStudentId = () => {
    this.activatedRoute.url.subscribe(x => {
      const values = x;
      this.studentId = values[1].path;
      return this.studentId;
    });
  }

  getStudentById = () => {
    return this.studentService.getStudentByUniqueId(this.studentId).subscribe(response => {
      this.student = response;
    },
      error => {
        console.log(error);
      });
  }
}
