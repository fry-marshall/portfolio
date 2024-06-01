import { Component, HostListener } from '@angular/core';
import { Book, Experience, Skill } from '../interfaces/interfaces';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  experiences: Experience[] = [
    {
      date_from: '2022',
      date_to: 'Now',
      role: 'Frontend Developper',
      institution: 'Netatmo'
    },
    {
      date_from: '2021',
      date_to: '2021',
      role: 'Frontend Developper',
      institution: 'Ophelia Sensors'
    }
  ]

  skills: Skill[] = [
    {
      type: 'Frontend',
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
      type: 'Others',
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
          img: 'github-actions.png',
          name: 'Github actions'
        },
        {
          img: 'figma.svg',
          name: 'Figma'
        }
      ]
    }
  ]

  educations: Experience[] = [
    {
      date_from: '2020',
      date_to: '2022',
      role: 'Master degree ( MIAGE )',
      institution: 'University of Haute Alsace'
    },
    {
      date_from: '2019',
      date_to: '2020',
      role: 'Bachelor degree ( MIAGE )',
      institution: 'University of Haute Alsace'
    },
    {
      date_from: '2016',
      date_to: '2019',
      role: 'Bachelor degree ( MIAGE )',
      institution: 'FHB University'
    }
  ]

  books: Book[] = [
    {
      title: 'Peau noire masque blanc',
      img: 'pnmb.jpeg'
    },
    {
      title: 'On se reverra',
      img: 'osr.jpeg'
    },
    {
      title: 'Les blessures du silence',
      img: 'lbds.jpeg'
    },
    {
      title: 'L\'ombre des disparus',
      img: 'ldd.jpeg'
    },
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
          element.style.animationDelay = (i*200)+'ms'
        }
      }

    }
  }
}
