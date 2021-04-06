import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'first-component',
    component:FirstComponent
  },
  {
    path:'second-component',
    component:SecondComponent
  },
  {
    path:'',
    redirectTo:'/first-component',
    //pathMatch=‘full’ 路由器应该只有在*完整的URL_等于''时，才进行重定向
    pathMatch:'full'
  },
  {
    //设置一个通配符路由
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
