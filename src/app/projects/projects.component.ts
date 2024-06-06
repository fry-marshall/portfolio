import { Component, HostListener } from '@angular/core';
import { Project } from '../interfaces/interfaces';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      id: 1,
      name: 'FChat',
      year: 2024,
      type: 'Personal project',
      cover: 'cover-fchat.png',
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
          type: 'Backend',
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
    }
  ]

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const elements = document.getElementsByClassName('animate')
    for(let i = 0; i < elements.length;i++){

      if(elements[i] !== null){
        const element = elements[i] as HTMLElement

        const isInViewport = (
          element.getBoundingClientRect().top >= 0 &&
          element.getBoundingClientRect().left >= 0 &&
          element.getBoundingClientRect().bottom <= document.documentElement.clientHeight &&
          element.getBoundingClientRect().right <= document.documentElement.clientWidth
        );
        if(isInViewport){
          element.style.animation = "spanFadeIn 500ms ease forwards"
          element.style.animationDelay = (i*50)+'ms'
        }
      }

    }
  }
}
