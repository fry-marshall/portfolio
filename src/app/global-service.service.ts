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
      short_description: 'Fchat is a web chat, where users can sign in and talk to each other with message in realtime.',
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
      cover: 'cover-fmorpion.png'
    },
    {
      id: 3,
      name: 'Apigen',
      year: 2022,
      type: 'Personal project',
      cover: 'cover-apigen.png'
    },
    {
      id: 4,
      name: 'Apigen',
      year: 2022,
      type: 'Personal project',
      cover: 'cover-apigen.png'
    }
  ]
  
  constructor() { }
}
