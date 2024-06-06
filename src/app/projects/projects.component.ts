import { Component } from '@angular/core';
import { Project } from '../interfaces/interfaces';
import { GlobalServiceService } from '../global-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects: Project[] = this.globalService.projects;

  constructor(private globalService: GlobalServiceService){}

}
