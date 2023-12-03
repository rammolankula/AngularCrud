# AngularCrud 
<pre>
&#8594; Implementation of Crud By using Java Rest Backend API's
</pre>
# Installation Of Angular
# =======================
<pre>
&#8594; 1. Download and install NodeJs
											
&#8594; goto :Https:nodejs.org/en/download
											
&#8594; click on: windows installer (.msi) 64 bit
&#8594; Double click>next>next>finish
&#8594; 2. cross verify installation of nodejs
&#8594; cmd> node -v
&#8594; cmd> npm -v
&#8594; 3. install Angular CLI
&#8594; cmd> npm install -g @angular/cli
&#8594; 4 Angular cross check
&#8594; cmd> ng version
&#8594; 5 Downlaod and install visual studio code
&#8594; Link: https://code.visualstudio.com
&#8594; click & download
</pre>
#### creating project and generating required files:
<pre
&#8594; open  --->Terminal>open terminal (ctrl+`)

&#8594; create new Project: (on terminal execute below commands)

&#8594; ng new Student-ui-app
&#8594; press y for routing option
&#8594; press enter at css option
</pre>
#### Generate files in order
<pre>
&#8594; Model(class)
&#8594; ng g class student
&#8594; service (HTTP calls)
&#8594; -->ng g s student
</pre>
#### *)component
<pre>
&#8594; ng g c student-all [For display all and delete view]
&#8594; ng g c student-create [Student Register page view]
&#8594; ng g c student-edit [Student edit page view]
</pre>
#### =========================Level-3========================
<pre>
&#8594; Configuration for activating  Forms and Routing 
&#8594; Open'apps.module.ts' file
&#8594; Under import section add below lines
</pre>
####    FormsModule,
<pre>
&#8594; HttpClientModule,
</pre>
#### -->add import lines
<pre>
&#8594; import {FormsModule} from '@angular/forms';
&#8594; import {HttpClientModule} from '@angular/common/http'
</pre>
#### ** Delete Operation **
###  ========================
![Delete Angular](https://user-images.githubusercontent.com/53596726/233992683-c89276e5-8adc-41ce-b6c9-ad6c4d191232.png)
<pre>
&#8594; 1.service code [Student.service.ts]
&#8594; Add one method that will make DELETE HTTP call based on ID.
 
 
&#8594; deleteOnStudent(id : number): Observable<any>{
&#8594;    return this.http.delete(`${this.basePath}/remove/${id}`,{responseType : `text`});
&#8594; }


&#8594; Response given by this method is like a message
&#8594; 2.In Student-all.component.ts

&#8594; >Declare one more variable for  display message
&#8594; message: String;
&#8594; >Write one methode for delete based on id
</pre>
<pre></pre>
### Student Register Process
### =========================
<pre>
&#8594; 1. Add one method at service for post method cell
&#8594;   student.service.ts
   
&#8594;     createStudent(student: Student):Observable<any>{
&#8594;    return this.http.post(`${this.basePath}/save`,student,{responseType:'text'});
&#8594;  }


&#8594; 2. create one register page at UI(HTML) and link form with submit event
&#8594;   and link every input with one model class object variable.
</pre>
## SOME POINTS
## ==========
<pre>
&#8594; 1).Link one on click event to one TS methode
&#8594; <div (click)="functionname()">___</div>
&#8594; functionname(){....in TS file..}
&#8594; 2). link same click event for submit operation
&#8594; <form (ngSubmit)="onSubmitFun()">..</form>
&#8594; onSubmitFun(){..in TS file}
&#8594; 3).use ngModel for data binding in two ways(UI-TS and TS-UI)
&#8594; <input..[(ngModel)]="objectName.variable"....>
&#8594; 4). HttpClient class is used to make HTTP calls like DELETE,POST,GET..etc
&#8594; delete(url,params)
&#8594;  post(url,body,params)
&#8594;  get(url)
&#8594; 5). Observable<T> it is like memory that holds results given by HTTP calls
&#8594;     this data can read at any component (such process is called as subscribe - read data).
&#8594; 	[it behaves like PUB-SUB models]
&#8594;  6). In angular object means JSON and (List/set)Collection means Array.
&#8594;  Here we can  create even object without class.
&#8594;  var v= {"sid":10} : //valid
&#8594;  7). Our Function in TS files are internally JavaScript only. 
</pre>
## Update Operation using Angular Edit Page
### =================================
#### Angular Routing : Angular Application contains multiple components
####                To move one components to another component(with or without data)
#### use Routing concept.
				
#### URL:[EDIT] button ====>/edit/101
				
#### Code Steps
#### s#1 Define Edit Button in student-all.component.html
####     and link with (click) event.
	 
#### s#2 On click Edit button, it should call editStudent(id) which is
####     defined in student-all.component.ts
				
#### s#3  editStudent(id) function should read as dynamic value

#### S#4 it should make Router.Navigation ie move from current component to another component
####     ie. student-edit.component.ts
	 
#### ex URL :/edit/101

#### S#5 when student-edit.component.ts is loaded  to the method is executed after constructor
     
#### Here, read id from URL using
#### activateedRout-Param[id]
	 
#### s#6 By using this id, make servcie call to get one student by id


#### s#7 student-servcie.ts is making HTTP git call to get one object data /get/{101}ct


#### s#8 returning  student JSON object to component file 

#### s#9 store the data in student object defined in component class

#### s#10 Create one HTML Edit form that makes binding with student object.

### Stage#2 DO Update Operation 
### ================================

#### s#11 Fill/Modify data at edit form

#### s#12 Link with onsubmit and definr a method in student-edit.component.ts file

#### s#13 Read id and student in TS and make servcie call data update

#### s#14 Make service call data update using id and student object

#### s#15 Service using HTTP PUT method and making n/w call to backend app

#### s#16 It is returning text message back to componentTs

#### S#17 use Router to navigate from edit component to all component


## ALL ABOVE POINTS Might be zigzac need to clarify while code go through
