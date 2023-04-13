import { Student } from './student';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private basePath='http://localhost:8087/student';

  constructor(private http:HttpClient) { }
  getAllStudents() :Observable<Student[]>{
   return this.http.get<Student[]>(`${this.basePath}/all`);   
  }

  deleteOneStudent(id : number): Observable<any>{
    return this.http.delete(`${this.basePath}/delete/${id}`,{responseType:'text'});
  }

  createStudent(student: Student):Observable<any>{
    return this.http.post(`${this.basePath}/save`,student,{responseType:'text'});
  }

  getOneStudent(id: number): Observable<Student>{
    return this.http.get<Student>(`${this.basePath}/getone/${id}`);
  }
  updateStudent(id: number,student: Student): Observable<any>{
    return this.http.put(`${this.basePath}/modify/${id}`,student,{responseType:'text'});
  }

  
}
