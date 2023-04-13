import { StudentService } from './../student.service';
import { Student } from './../student';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-all',
  templateUrl: './student-all.component.html',
  styleUrls: ['./student-all.component.css']
})
export class StudentAllComponent implements OnInit{
  //Send this data to UI
  students: Student[];
  message: String;
  //Inject service layer
  constructor(private service:StudentService,private router:   Router){}

  ngOnInit(): void {
    this.getAllStudents(); 
  }
  //fetch data from backend application using service
  getAllStudents(){
    return this.service.getAllStudents()
    .subscribe(
    data=>{
      this.students=data;
    },error =>{
      console.error(error);
    }
    );
}
  deleteStudent(id: number){
    if (confirm('Do you want to delete?')){
      this.service.deleteOneStudent(id).subscribe(data => {
        this.message = data;
        this.getAllStudents();
      }, error =>{;
      console.log(error);
    }); 
  }else{
    this.message='';
  }
  }

  
  editStudent(id: number){
    this.router.navigate(['edit',id]);
  }
}