import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.less']
})
export class CustomerComponent implements OnInit {

  items = [
    {
      name:'jiangzy',
      age:12,
      sex:'man',
    },
    {
      name:'jiangzy',
      age:12,
      sex:'man',
    },
  ]

  lessons=false;
  constructor() { }

  ngOnInit(): void {
  }

  load():void{
    this.lessons=true;
  }

}
