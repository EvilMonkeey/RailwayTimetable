import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes, PreloadAllModules } from '@angular/router';

import { AboutComponent } from './about';
import { ContactComponent } from './contact';
import { TrainsComponent } from './trains';
import { TimetableComponent } from "./timetable";
import { SearchComponent } from "./search";
//import { LoggedInGuard } from './logged-in.guard';
//import { SplitComponent } from './split';
//import { DataComponent } from './data/data.component';
//import { DataResolver } from './data/data.resolver';

const routes: Routes = [
    {
        path: '',
        component: SearchComponent
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'trains',
        component: TrainsComponent
    },
    {
        path: 'timetable',
        component: TimetableComponent
    },
    /*{
        path: 'login2',
        redirectTo: 'login'
    },
    {
        path: 'split',
        component: SplitComponent,
        children: [
            {
                path: ':mailId',
                component: MailComponent,
                outlet: 'left'
            },
            {
                path: ':mailId',
                component: MailComponent,
                outlet: 'right'
            }
        ]
    },
    {
        path: 'user',
        loadChildren: 'app/user/user.module#UserModule'
    },
    {
        path: '**',
        redirectTo: ''
    }*/
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule],
    providers: [/*LoggedInGuard, DataResolver*/]
})
export class AppRoutingModule { }
