import { Hero } from './hero';
export const HEROES: Hero[] = [
{id: 11, name: 'Mr. Nice', job: 'Teacher', child: [
    {id: 111, name: 'Mr. Nice Child', job: 'Teacher', child: [
        {id: 18, name: 'Dr IQ', job: 'Teacher', child: [
            {id: 19, name: 'Magma', job: 'Teacher', child: null},
            {id: 20, name: 'Tornado', job: 'Teacher', child: null}]}
        ]},
    {id: 112, name: 'Mr. Nice Child 2', job: 'Teacher', child: [
        {id: 12, name: 'Narco', job: 'Hunter', child: [
            {id: 13, name: 'Bombasto', job: 'Doctor', child: null},
            {id: 14, name: 'Celeritas', job: 'Bussiness', child: null}]},

        {id: 15, name: 'Magneta', job: 'Teacher', child: [
            {id: 16, name: 'RubberMan', job: 'Teacher', child: null},
            {id: 17, name: 'Dynama', job: 'Teacher', child: null}]}
    ]}]},
];
