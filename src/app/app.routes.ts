import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SallesComponent } from './salles/salles.component';
import { NewReservationComponent } from './new-reservation/new-reservation.component';
import { ReservationsComponent } from './reservations/reservations.component';

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
            {
                path:'salles',
                component:SallesComponent
            },
            {
                path:'newReservations',
                component:NewReservationComponent
            },
            {
                path:'reservations',
                component:ReservationsComponent
            },

        ]
    }
];
