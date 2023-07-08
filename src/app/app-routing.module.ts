import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'imprint', component: ImprintComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollOffset: [0, 75],
    scrollPositionRestoration: 'enabled',
    onSameUrlNavigation: 'reload',
    initialNavigation: 'enabledBlocking'
}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
