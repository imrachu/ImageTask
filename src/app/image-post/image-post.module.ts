import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ImagePostRoutingModule } from './image-post-routing.module';
import { ImagePostComponent } from './image-post.component';


@NgModule({
  declarations: [
    ImagePostComponent
  ],
  imports: [
    CommonModule,
    ImagePostRoutingModule,
    ReactiveFormsModule
  ]
})
export class ImagePostModule { }
