import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageListRoutingModule } from './image-list-routing.module';
import { ImageListComponent } from './image-list.component';


@NgModule({
  declarations: [
    ImageListComponent
  ],
  imports: [
    CommonModule,
    ImageListRoutingModule
  ]
})
export class ImageListModule { }
