import './polyfills';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HomeComponent} from './home.component';
import {AboutComponent} from './about.component';
import {CatService} from './cat.service';
import { HeroesComponent }  from './heroes.component';
import { MenuComponent }  from './menu.component';
import { HeaderComponent }  from './header.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService } from './hero.service';

import {enableProdMode} from '@angular/core';
// enableProdMode();

import { routing } from './app.routing';


@NgModule({
    imports: [BrowserModule,
                routing,
                HttpModule,
                FormsModule,
                ReactiveFormsModule],
    declarations: [AppComponent,
                    HeroDetailComponent,
                    HeroesComponent,
                    MenuComponent,
                    HeaderComponent,
                    AboutComponent,
                    HomeComponent],
    providers: [CatService, HeroService],
    bootstrap: [AppComponent]
})

export class AppModule {}