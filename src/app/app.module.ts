import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { FeatureSectionComponent } from './components/feature-section/feature-section.component';
import { HomeComponent } from './pages/home/home.component';
import { SafetyComponent } from './pages/safety/safety.component';
import { AdmissionsComponent } from './pages/admissions/admissions.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    FeatureSectionComponent,
    HomeComponent,
    SafetyComponent,
    AdmissionsComponent,
    JobsComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
