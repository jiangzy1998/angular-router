import { AfterContentInit, Component, ContentChild, ContentChildren, OnInit, QueryList } from '@angular/core';
import { NgContentChildComponent } from '../ng-content-child/ng-content-child.component'

@Component({
  selector: 'app-ng-content',
  template:`
    <div>
      <h1>ng content</h1>
      <div style="background-color:#039be5">
        <!-- ngProjectAs -->
        <!-- <ng-content select="app-ng-content-child"></ng-content> -->
      
        <ng-content></ng-content>
      </div>

      
    </div>
  `,
  styleUrls: ['./ng-content.component.less']
})
export class NgContentComponent implements OnInit, AfterContentInit {
  // 通过 section_child_0 获取组件
  @ContentChild('section_child_0') childOne:NgContentChildComponent
  // 通过 NgContentChildComponent 组件名获取组件
  @ContentChildren(NgContentChildComponent) childrenList:QueryList<NgContentChildComponent>


  
  constructor() { }
  ngAfterContentInit(): void {
    console.log(this.childOne);
    this.childrenList.forEach((item)=>{
      console.log(item);
    })
  }

  ngOnInit(): void {
  }

}
