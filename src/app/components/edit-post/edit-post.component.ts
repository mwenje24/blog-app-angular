import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/PostInterface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {
  post!:Post;
  posts: Post[] = []


  title!:string;
  author!:string;
  category!:string;
  description!:string;
  subscription!: Subscription;

  constructor(private postService: PostService, @Inject(MAT_DIALOG_DATA) private data:  any){ }

  ngOnInit(): void {
    this.post = this.data.post;
  }
  
  onEditPost(){
    if(!this.title || !this.author || !this.category || !this.description){
      alert('please fill in the required fields')
    }

    const newPost = {
      title: this.title,
      author: this.author,
      category: this.category,
      description: this.description
    }

    this.postService.addPost(newPost).subscribe((post) => this.posts.push(post))

    this.title = '' 
    this.author = '' 
    this.category = '' 
    this.description = '' 
  }

}
