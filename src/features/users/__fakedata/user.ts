
import { faker } from '@faker-js/faker';
import { User } from '../types';

// const users:any[] = []

// const statuses = [
//     "active", "banned"
// ]


// for(let i =0; i<8 ; i++){
//     users.push({
//         id:  parseInt(faker.random.numeric(1129312841)),
//         createdAT: faker.date.between('2010-01-01T00:00:00.000Z', '2022-01-01T00:00:00.000Z'),
//         email: faker.internet.email(),
//         tikets: faker.random.numeric(30),
//         score: faker.random.numeric(6000),
//         status: statuses[parseInt(faker.random.numeric(1))]
//     });
// }


export const  users: User[] = [
    {
        id:  "1324124",
        createdAt: '2010-01-01',
        email: "email@gmail.com",
        tickets:12,
        score: 123,
        status: "active"
    },
    {
        id:  "1324124",
        createdAt: '2010-01-01',
        email: "email@gmail.com",
        tickets:12,
        score: 123,
        status: "active"
    },
    {
        id:  "1324124",
        createdAt: '2010-01-01',
        email: "email@gmail.com",
        tickets:12,
        score: 123,
        status: "banned"
    },
    {
        id:  "1324124",
        createdAt: '2010-01-01',
        email: "email@gmail.com",
        tickets:12,
        score: 123,
        status: "banned"
    },
    {
        id:  "1324124",
        createdAt: '2010-01-01',
        email: "email@gmail.com",
        tickets:12,
        score: 123,
        status: "active"
    },
    {
        id:  "1324124",
        createdAt: '2010-01-01',
        email: "email@gmail.com",
        tickets:12,
        score: 123,
        status: "banned"
    },
    {
        id:  "1324124",
        createdAt: '2010-01-01',
        email: "email@gmail.com",
        tickets:12,
        score: 123,
        status: "banned"
    },
    {
        id:  "1324124",
        createdAt: '2010-01-01',
        email: "email@gmail.com",
        tickets:12,
        score: 123,
        status: "active"
    },

];

