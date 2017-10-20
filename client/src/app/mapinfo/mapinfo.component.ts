import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mapinfo',
  templateUrl: './mapinfo.component.html',
  styleUrls: ['./mapinfo.component.css']
})
export class MapinfoComponent implements OnInit {
  @Input() job: any;
  @Output() onClick = new EventEmitter<string>();
  @Output() onApply = new EventEmitter<string>()
  control:boolean = true;
  constructor() { }

  ngOnInit() {}

  getInfo() {
    this.onClick.emit(this.job._id);
    this.control = !this.control;
  }

  apply(id) {
    this.onApply.emit(this.job._id)
  }

}
