# AngularCrud
Implementation of Crud By using Java Rest Backend API's
# Installation Of Angular

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
####	HttpClientModule,

#### -->add import lines
#### import {FormsModule} from '@angular/forms';
#### import {HttpClientModule} from '@angular/common/http'
