import { StudentServiceService } from './services/student-service.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BsNavComponent } from './bs-nav/bs-nav.component';
import { GradesComponent } from './grades/grades.component';
import { MyClassroomComponent } from './my-classroom/my-classroom.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import 'hammerjs';
import { EditstudentComponent } from './editstudent/editstudent.component';


@NgModule({
  declarations: [
    AppComponent,
    BsNavComponent,
    HomeComponent,
    GradesComponent,
    MyClassroomComponent,
    AddstudentComponent,
    EditstudentComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'grades', component: GradesComponent},
      {path: 'myclassroom', component: MyClassroomComponent},
      {path: 'addstudent', component: AddstudentComponent},
      {path: 'editstudent/:id', component: EditstudentComponent},



  ]),
    BrowserAnimationsModule
],
  providers: [StudentServiceService],
  bootstrap: [
    AppComponent,
    BsNavComponent
  ]
})
export class AppModule { }
