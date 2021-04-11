import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  template: `
    <ng-template #tpl>
      Hello,ng-template！
    </ng-template>

    <!-- let-parm 取的是绑定对象 myContext 的 $implicit 字段的职， let-parm和let-parm="$implicit"是等价的 -->
    <!-- let-name="name" 取的是绑定对象myContext里面name字段对应的值 -->
    <!-- let-xx="yy" xx是在ng-template内部使用的变量名字，xx 对应的是上下文对象yy属性的值 -->
    <ng-template #inputTemplateWithContent let-parm let-name="name">
      <div>{{ parm }} - {{ name }}</div>
    </ng-template>
    <ng-container *ngTemplateOutlet="inputTemplateWithContent; context: myContext">

    </ng-container>
  `,
  styleUrls: ['./ng-template.component.less']
})
export class NgTemplateComponent implements OnInit, AfterViewInit {

  // tplRef 对应 ng-template 的引用
  @ViewChild("tpl") tplRef:TemplateRef<any>;

  myContext = {$implicit:"默认值",name:"jiangzy"}

  constructor(
    private vcRef:ViewContainerRef
  ) { }
  ngAfterViewInit(): void {
    // viewContainerRef 则是 view 容器的引用来操作 DOM 元素
    // 这样 tplRef 对应的 ng-template 内容就显示出来了  
    this.vcRef.createEmbeddedView(this.tplRef);
  }

  ngOnInit(): void {
  }

}
