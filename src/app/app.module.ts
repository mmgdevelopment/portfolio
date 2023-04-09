import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ImprintComponent } from './imprint/imprint.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ButtonComponent } from './button/button.component';
import { SkillIconComponent } from './skill-icon/skill-icon.component';
import { SinglePortfolioComponent } from './single-portfolio/single-portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ImprintComponent,
    WelcomeComponent,
    ButtonComponent,
    SkillIconComponent,
    SinglePortfolioComponent,
    ContactComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
