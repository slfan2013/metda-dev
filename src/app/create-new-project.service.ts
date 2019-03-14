import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateNewProjectService {

  constructor() { }


  create_new_project(new_project_name,file): void {
    // 1. check if the project_name is taken.
    // 2. put the dataset to the DB.
    // 3. after creating dataset, set the new project the activated project.
    console.log(file.files[0])
    console.log("create_new_project triggered: "+new_project_name)



  }

}
