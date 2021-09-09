import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/imagePost', pathMatch: 'full' },
  { path: 'imageList', loadChildren: () => import('./image-list/image-list.module').then(m => m.ImageListModule) },
  { path: 'imagePost', loadChildren: () => import('./image-post/image-post.module').then(m => m.ImagePostModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
