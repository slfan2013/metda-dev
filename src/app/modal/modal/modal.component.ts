import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  modalTitle: string;
  initFromChild($event){
    this.modalTitle = $event;
  }



}
