import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import {Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class HeroService {

    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });

    constructor (private http: Http) {}

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    // Get hero with delay for simulate load time on network
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
    setTimeout(resolve, 2000)) // delay 2 seconds
        .then(() => this.getHeroes());
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
        .then(heroes => heroes.find(hero => hero.id === id));
    }

    getTopHeroes(): Promise<Hero[]> {
        return this.getHeroes()
        .then(heroes => heroes.slice(1, 5));
    }

    getPersons() {
        return this.http.get('/persons').map(res => res.json());
    }

    getPerson(id: Number) {
        console.log(id);
        return this.http.get('/person/' + id).map(res => res.json());
    }

    getRoot() {
        return this.http.get('/root').map(res => res.json());
    }
}


