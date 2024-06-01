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
      type: 'Personal project'
    },
    {
      id: 2,
      name: 'FMorpion',
      year: 2024,
      type: 'Personal project'
    },
    {
      id: 3,
      name: 'Apigen',
      year: 2022,
      type: 'Personal project'
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
          element.style.animation = "spanFadeIn 1s ease forwards"
          element.style.animationDelay = (i*50)+'ms'
        }
      }

    }
  }
}
