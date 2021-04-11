import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { NgContentComponent } from '../ng-content/ng-content.component'
import { NgContentChildComponent } from '../ng-content-child/ng-content-child.component'
import { NgTemplateComponent } from '../ng-template/ng-template.component';

@NgModule({
  declarations: [
    CustomerComponent,
    NgContentComponent,
    NgContentChildComponent,
    NgTemplateComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
