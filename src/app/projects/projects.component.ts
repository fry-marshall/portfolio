import { Component } from '@angular/core';
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
}
