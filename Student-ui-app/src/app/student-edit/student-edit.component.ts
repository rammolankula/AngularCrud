import { Student } from './../student';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  
  id: number;
  student: Student;

  constructor(private service :StudentService,private router: Router,private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    //read id sent by all component as edit/id
    this.id =this.activatedRoute.snapshot.params['id'];
    this.service.getOneStudent(this.id).subscribe(
      data =>{
        this.student = data;
      },error =>{
        console.log(error);
      }
    )
     
  }
  updateStudent(){
    this.service.updateStudent(this.id,this.student)
    .subscribe(data =>{
      console.log(data);
      this.router.navigate(['all'])
    })
    
  }
}
