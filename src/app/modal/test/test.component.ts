import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  modalTitle: string = 'Create Project';
  @Output() fromChild = new EventEmitter<string>()
  ngOnInit() {
    this.fromChild.emit(this.modalTitle)
  }
  

}
