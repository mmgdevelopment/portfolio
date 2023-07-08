import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ContactComponent } from './contact/contact.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainComponent } from './main/main.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SinglePortfolioComponent } from './single-portfolio/single-portfolio.component';
import { SkillIconComponent } from './skill-icon/skill-icon.component';
import { SkillsComponent } from './skills/skills.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MenuComponent } from './menu/menu.component';

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
    ContainerComponent,
    MenuComponent,
  ],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
