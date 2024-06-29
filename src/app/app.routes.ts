import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DashbordComponent } from './dashbord/dashbord.component';

export const routes: Routes = [
    {
        path:'',redirectTo:'login',pathMatch:'full'
    },
    {
        path:'login', component:LoginComponent
    },
    {
        //show LayoutComponent and DashbordComponent after login
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'dashbord',
                component:DashbordComponent
            },
           
        ]
    }
];
