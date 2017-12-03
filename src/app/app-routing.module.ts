import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes, PreloadAllModules } from '@angular/router';

import { AboutComponent } from './about';
import { ContactComponent } from './contact';
import { TrainsComponent } from './trains';
import { TimetableComponent } from "./timetable";
import { SearchFormComponent } from "./searchForm";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/search',
        pathMatch: 'full'
    },
    {
        path: 'search',
        component: SearchFormComponent

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
        path: 'timetable/:from/:to/:date',
        component: TimetableComponent,
        //loadChildren: 'app/timetable/timetable.module#TimetableModule',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
