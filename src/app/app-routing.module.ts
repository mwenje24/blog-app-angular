import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { AllPostsPageComponent } from './components/all-posts-page/all-posts-page.component';
import { CategoricalPostsPageComponent } from './components/categorical-posts-page/categorical-posts-page.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
    {path: 'all', component: AllPostsPageComponent},
    {path: 'category', component: CategoricalPostsPageComponent},
  ]},
  {path: 'add-post', component: AddPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
