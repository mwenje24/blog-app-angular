import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { FlashSectionComponent } from './components/flash-section/flash-section.component';
import { TitleComponent } from './components/title/title.component';
import { PostsComponent } from './components/posts/posts.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ButtonComponent } from './components/button/button.component';
import { AllPostsPageComponent } from './components/all-posts-page/all-posts-page.component';
import { CategoricalPostsPageComponent } from './components/categorical-posts-page/categorical-posts-page.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AddPostComponent,
    FlashSectionComponent,
    TitleComponent,
    PostsComponent,
    AddPostComponent,
    ConfirmDialogComponent,
    ButtonComponent,
    AllPostsPageComponent,
    CategoricalPostsPageComponent,
    PostFormComponent,
    EditPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
     BrowserAnimationsModule, MatInputModule, MatFormFieldModule, MatSelectModule, HttpClientModule, MatButtonModule, MatGridListModule, MatCardModule, FormsModule, FontAwesomeModule, MatDialogModule, MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
