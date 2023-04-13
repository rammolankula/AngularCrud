import { StudentService } from '../student.service';
import { Student } from './../student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

//form backing object
student :Student;
// message to UI
message: String;

//inject service class
constructor(private service: StudentService){}


  ngOnInit(): void {
    //when page is loaded clear data
   this.student=new Student();
  }

  //tslint: disable-next-line: typedef
  createStudent(){
    this.service.createStudent(this.student)
    .subscribe(data =>{
      this.message = data; //read data
      this.student= new Student(); // clear form
    }, error =>{
      console.log(error);
    });
}
}
