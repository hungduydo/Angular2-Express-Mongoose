import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent }      from './app.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }      from './hero-detail.component';
import {HomeComponent} from './home.component';
import {AboutComponent} from './about.component';

const appRoutes: Routes = [
	{ path: '',      component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'hero/:id', component: HeroesComponent},
	{ path: 'heroes', component: HeroesComponent},
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
