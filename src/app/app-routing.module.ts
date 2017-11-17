import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from './posts/posts.component';

const ROUTES: Routes = [
  {path: 'posts', component: PostsComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [RouterModule.forRoot(ROUTES)],
})
export class AppRoutingModule {
}
