import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../../PostInterface';
import { Subscription } from 'rxjs';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit{

  posts: Post[] = []

  // @Output() onAddPost: EventEmitter<Post> = new EventEmitter;

  title!:string;
  author!:string;
  category!:string;
  description!:string;
  subscription!: Subscription;

  constructor(private postService: PostService){ }

  ngOnInit(): void {}

  onSubmit(){
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
