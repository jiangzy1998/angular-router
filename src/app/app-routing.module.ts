import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChildAComponent } from './child/child-a/child-a.component';
import { ChildBComponent } from './child/child-b/child-b.component';

const routes: Routes = [
  {
    path:'first-component',
    component:FirstComponent,
    children:[
      {
        // 访问形式 http://localhost:4200/first-component/child-a/1
        path:"child-a/:id",
         component:ChildAComponent,
      },
      {
        path:'child-b',
        component:ChildBComponent
      }
    ]
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
