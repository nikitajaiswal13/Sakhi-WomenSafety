import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SafetyComponent } from './pages/safety/safety.component';
import { AdmissionsComponent } from './pages/admissions/admissions.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { LegalRightsComponent } from './pages/safety/legal-rights/legal-rights.component';
import { ResourcesComponent } from './pages/safety/resources/resources.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'safety' , component : SafetyComponent},
  {path : 'admissions' , component : AdmissionsComponent},
  {path : 'jobs' , component : JobsComponent},
  {path : 'contact' , component : ContactComponent},
  {path : 'about' , component : AboutComponent},
  {path : 'safety/legal-rights' , component : LegalRightsComponent},
  {path : 'safety/resources' , component : ResourcesComponent},
  {path : '**' , component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
