import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.less']
})
export class ChildBComponent implements OnInit {

  @Input() inputTemplate:TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
