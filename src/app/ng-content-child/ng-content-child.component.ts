import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-content-child',
  template:`
    <h1>
      {{ title1 }}
    </h1>
  `,
  styleUrls: ['./ng-content-child.component.less']
})
export class NgContentChildComponent implements OnInit {

  title1:string = "123";
  constructor() { }

  ngOnInit(): void {
  }

}
