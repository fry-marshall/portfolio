import { Injectable } from '@angular/core';
import { Project } from './interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {

  projects: Project[] = [
    {
      id: 1,
      name: 'FChat',
      year: 2024,
      type: 'Personal project',
      cover: 'cover-fchat.png',
      short_description: 'Fchat is a web chat, where users can sign in and talk to each other with message in realtime. This app is composed of 2 web apps & 1 api. One webapp for authentication and the other is to chat. The users can access the app with their email account and can receive messages in real time.',
      details: {
        link: 'https://fchat.mfry.io',
        github: 'https://github.com/projet-qualite/fchat-project',
        figma: 'https://www.figma.com/design/qX8EkL8HHPewbdGXjGVOvC/Fchat-web-app?node-id=1-2&t=Dkm5CVEVkYpaIds3-0'
      },
      skills: [
        {
          type: '',
          technos: [
            {
              img: 'angular.svg',
              name: 'Angular'
            },
            {
              img: 'rxjs.png',
              name: 'Rxjs'
            },
            {
              img: 'ngrx.svg',
              name: 'Ngrx'
            },
            {
              img: 'ts-logo.png',
              name: 'Typescript'
            }
          ]
        },
        {
          type: '',
          technos: [
            {
              img: 'nodejs.png',
              name: 'Node JS'
            },
            {
              is_asset_text: true,
              name: 'Express JS'
            },
            {
              img: 'socket.svg',
              name: 'Socket io'
            }
          ]
        },
        {
          type: '',
          technos: [
            {
              img: 'docker.png',
              name: 'Docker'
            },
            {
              img: 'jest-logo.png',
              name: 'Jest'
            },
            {
              img: 'figma.svg',
              name: 'Figma'
            }
          ]
        }
      ],
      pictures: [
        'fchat-2.png',
        'fchat-3.png',
        'fchat-4.png'
      ]
    },
    {
      id: 2,
      name: 'FMorpion',
      year: 2024,
      type: 'Personal project',
      cover: 'cover-fmorpion.png',
      short_description: 'FMorpion is a Tic Tac Toe game made in web. In this game, the users can either play against a bot ( made by me ) or between each other. The webapp has been made with Angular & the api made in NodeJS & Express based on Apigen.',
      details: {
        link: 'https://fmorpion.mfry.io',
        github: 'https://github.com/projet-qualite/fmorpion-project',
        figma: 'https://www.figma.com/design/sP46rh5C4CiF7aL2faIqCa/FMorpion?node-id=0-1&t=c122oFgzp8n5pwc0-0'
      },
      skills: [
        {
          type: '',
          technos: [
            {
              img: 'angular.svg',
              name: 'Angular'
            },
            {
              img: 'rxjs.png',
              name: 'Rxjs'
            },
            {
              img: 'ngrx.svg',
              name: 'Ngrx'
            },
            {
              img: 'ts-logo.png',
              name: 'Typescript'
            }
          ]
        },
        {
          type: '',
          technos: [
            {
              img: 'nodejs.png',
              name: 'Node JS'
            },
            {
              is_asset_text: true,
              name: 'Express JS'
            },
            {
              img: 'socket.svg',
              name: 'Socket io'
            }
          ]
        },
        {
          type: '',
          technos: [
            {
              img: 'docker.png',
              name: 'Docker'
            },
            {
              img: 'jest-logo.png',
              name: 'Jest'
            },
            {
              img: 'figma.svg',
              name: 'Figma'
            }
          ]
        }
      ],
      pictures: [
        'fmorpion-1.png',
        'fmorpion-2.png',
        'fmorpion-3.png',
        'fmorpion-4.png',
        'fmorpion-5.png',
        'fmorpion-6.png',
      ]
    },
    {
      id: 3,
      name: 'Apigen',
      year: 2022,
      type: 'Personal project',
      cover: 'cover-apigen.png',
      short_description: 'Apigen is a little tool i’ve created since 2022 in order to easily help me create an api. It’s written in script shell. The api generated is in typescript with some endpoint already pre defined. So the user can easily create a model that he/she wants to add, then it will automatically create the model, controller and basic CRUD associated with this model.',
      details: {
        github: 'https://github.com/projet-qualite/apigen',
      },
      skills: [
        {
          type: '',
          technos: [
            {
              img: 'shell.png',
              name: 'Shell'
            }
          ]
        },
      ],
    }
  ]
  
  constructor() { }
}
