import { Component } from '@angular/core';
import { StudentServiceService } from '../services/student-service.service';
import { Router } from '@angular/router';
import { JsonpInterceptor } from '@angular/common/http';


@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent {

  students;
  isSuccessful: boolean;
  alertClass: string;
  constructor(public studentService: StudentServiceService) { }

  response$;
  AddStudent(student) {
    return this.studentService.postStudent(student).subscribe(res => {
      this.response$ = res;
      if (this.response$ === 'Student Successfully Added') {
        this.isSuccessful = true;
        this.alertClass = 'alert alert-success';
        if (confirm('Would you like to add annother student?')) {
          window.location.reload();

        }
        else {

        }
      }
      else {
        this.alertClass = 'alert alert-danger';
      }
    });
  }
}
