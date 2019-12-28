import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../services/student-service.service';
import { Student } from '../models/student.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  students: Student;
  response: any;
  buttonClass: string = 'btn btn-success disabled btn-lg';
  constructor(public studentService: StudentServiceService) { }

  ngOnInit = () => {
  }

  clearForm = (form: NgForm) => {
    form.resetForm();
  }

  checkForm = (studentForm: NgForm) => {
    if (studentForm.status === 'VALID') {
      this.buttonClass = 'btn btn-success btn-lg';
    }
  }

  AddStudent = (student) => {

    return this.studentService.postStudent(student).subscribe(res => {
      this.response = res;
    },
      error => {
        console.log(error);
      });
  }

  log = (model) => {
    console.log(model);
  }
}
