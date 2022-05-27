import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ButtonComponent } from './components/button/button.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ImageComponent } from './components/image/image.component';
import { TabComponent } from './components/tab/tab.component';
import { TabsetComponent } from './components/tabset/tabset.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { RouterModule } from '@angular/router';
import { BackwardDirective } from './directives/backward.directive';

const SHARED_COMPONENTS = [
  AvatarComponent,
  ButtonComponent,
  GalleryComponent,
  ImageComponent,
  TabComponent,
  TabsetComponent,
  SpinnerComponent
];

const SHARED_DIRECTIVES = [
  BackwardDirective
];

const SHARED_MODULES = [CommonModule];

@NgModule({
  declarations: [
    ...SHARED_COMPONENTS,
    ...SHARED_DIRECTIVES,
  ],
  imports: [
    ...SHARED_MODULES,
    RouterModule
  ],
  exports: [
    ...SHARED_COMPONENTS,
    ...SHARED_DIRECTIVES,
    ...SHARED_MODULES
  ]
})
export class SharedModule { }
