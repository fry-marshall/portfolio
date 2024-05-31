import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AtomesModule } from 'library_v2/src/app/components/atomes/atomes.module';
import { DescriptionComponent } from './description/description.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    DescriptionComponent,
    ProjectsComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AtomesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
