import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-alert',
  templateUrl: './single-alert.component.html',
  styleUrls: ['./single-alert.component.css']
})
export class SingleAlertComponent implements OnInit {
  @Input() alert: any;
  @Output() onDelete = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  deleteAlert() {
    this.onDelete.emit(this.alert._id);
  }
}
