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

  new_project_name: string;

  createNewProject() : void {
    this.CreateNewProjectService.create_new_project(this.new_project_name,$("#input")[0])
  }
  check_uploaded_data_format(): void {
    // here use R to check the format of the dataset.
    console.log("good")
    this.CheckUploadedDataFormatService.check_uploaded_data_format($("#input")[0])

  }

}
