import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ButtonComponent } from './components/button/button.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ImageComponent } from './components/image/image.component';
import { TabComponent } from './components/tab/tab.component';
import { TabsetComponent } from './components/tabset/tabset.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

const SHARED_COMPONENTS = [
  AvatarComponent,
  ButtonComponent,
  GalleryComponent,
  ImageComponent,
  TabComponent,
  TabsetComponent,
  SpinnerComponent
];

const SHARED_MODULES = [CommonModule];

@NgModule({
  declarations: [
    ...SHARED_COMPONENTS,
  ],
  imports: [
    ...SHARED_MODULES
  ],
  exports: [
    ...SHARED_COMPONENTS,
    ...SHARED_MODULES
  ]
})
export class SharedModule { }
