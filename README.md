# AngularCrud
Implementation of Crud By using Java Rest Backend API's
# Installation Of Angular
# =======================
#### 1. Download and install NodeJs
											
#### goto :Https:nodejs.org/en/download
											
#### click on: windows installer (.msi) 64 bit
#### Double click>next>next>finish
#### 2. cross verify installation of nodejs
#### cmd> node -v
#### cmd> npm -v

#### 3. install Angular CLI
#### cmd> npm install -g @angular/cli

#### 4 Angular cross check
#### cmd> ng version

#### 5 Downlaod and install visual studio code
#### Link: https://code.visualstudio.com
#### click & download

#### creating project and generating required files:

#### open  --->Terminal>open terminal (ctrl+`)

#### create new Project: (on terminal execute below commands)

#### -->ng new Student-ui-app
#### -->press y for routing option
#### -->press enter at css option

#### Generate files in order
#### *)Model(class)
#### -->ng g class student
#### *)service (HTTP calls)
#### -->ng g s student
#### *)component
#### --> ng g c student-all [For display all and delete view]
#### --> ng g c student-create [Student Register page view]
#### --> ng g c student-edit [Student edit page view]

#### =========================Level-3========================
#### Configuration for activating  Forms and Routing 


#### -->Open'apps.module.ts' file
#### -->Under import section add below lines
   
####    FormsModule,
#### HttpClientModule,

#### -->add import lines
#### import {FormsModule} from '@angular/forms';
#### import {HttpClientModule} from '@angular/common/http'
###  ** Delete Operation **
###  ========================
![Delete Angular](https://user-images.githubusercontent.com/53596726/233992683-c89276e5-8adc-41ce-b6c9-ad6c4d191232.png)

#### 1.service code [Student.service.ts]
#### Add one method that will make DELETE HTTP call based on ID.
 
 
#### deleteOnStudent(id : number): Observable<any>{
####    return this.http.delete(`${this.basePath}/remove/${id}`,{responseType : `text`});
#### }


#### Response given by this method is like a message
#### 2.In Student-all.component.ts

#### >Declare one more variable for  display message
#### message: String;
#### >Write one methode for delete based on id

## SOME POINTS
## ==========
#### a.Link one on click event to one TS methode

#### <div (click)="functionname()">___</div>

#### functionname(){....in TS file..}

#### b. link same click event for submit operation

#### <form (ngSubmit)="onSubmitFun()">..</form>
#### onSubmitFun(){..in TS file}

#### c.use ngModel for data binding in two ways(UI-TS and TS-UI)

#### <input..[(ngModel)]="objectName.variable"....>


#### d. HttpClient class is used to make HTTP calls like DELETE,POST,GET..etc
#### delete(url,params)
####  post(url,body,params)
####   get(url)
   
#### e. Observable<T> it is like memory that holds results given by HTTP calls
####     this data can read at any component (such process is called as subscribe - read data).
	
####	[it behaves like PUB-SUB models]
	
#### f. In angular object means JSON and (List/set)Collection means Array.

#### Here we can  create even object without class.

#### var v= {"sid":10} : //valid


#### g. Our Function in TS files are internally JavaScript only. 


## Update Operation using Angular
### =================================
#### Stage#1 show Edit Page

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

#### =========================================
#### Stage#2 DO Update Operation 

#### s#11 Fill/Modify data at edit form

#### s#12 Link with onsubmit and definr a method in student-edit.component.ts file

#### s#13 Read id and student in TS and make servcie call data update

#### s#14 Make service call data update using id and student object

#### s#15 Service using HTTP PUT method and making n/w call to backend app

#### s#16 It is returning text message back to componentTs

#### S#17 use Router to navigate from edit component to all component

