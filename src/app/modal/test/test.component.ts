import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { CreateNewProjectService } from '../../create-new-project.service';
import { CheckUploadedDataFormatService } from '../../check-uploaded-data-format.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private CreateNewProjectService: CreateNewProjectService, private CheckUploadedDataFormatService:CheckUploadedDataFormatService) { }

  modalTitle: string = 'Create Project';
  @Output() emitFromChild = new EventEmitter<string>()
  ngOnInit() {
    this.emitFromChild.emit(this.modalTitle);
  }

 

  data_uploaded:boolean = false;
  remove_uploaded_data = function(){
    $("#input").val(''); 
    this.data_uploaded = false;
  }
  success_messages;
  warning_messages;
  check_uploaded_data_format(): void {
    console.log("checking data format")
    // here use R to check the format of the dataset.
    this.CheckUploadedDataFormatService.check_uploaded_data_format($("#input")[0], (data)=>{
      (window as any).rrr = data;
      this.success_messages = data.success_message
      console.log(this.success_messages)
      this.warning_messages = data.warning_message
      this.data_uploaded = true
    })
  }



  new_project_name: string;

  createNewProject() : void {
    this.CreateNewProjectService.create_new_project(this.new_project_name,$("#input")[0])
  }




}
