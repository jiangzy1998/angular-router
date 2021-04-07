import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
    // ng generate module customers --route customers --module app.module
    // customers 是特性模块的名称
    // --route customers 指定加载 customer 特性模块的路径也是 customers
    // --module 将声明的路由 customers 添加到以 --module 选项指定的模块中申明的 routes 数组中
    path: 'customers', 
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) 
  },
  { 
    path: 'orders', 
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  },
  {
    //设置一个通配符路由
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  // forRoot() 表示这是一个根路由模块
  // 它会配置你传入的所有路由、让你能访问路由器指令并注册 Router
  // forRoot() 在应用中只能使用一次就是在这个 AppRoutingModule 中
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
