import { Component } from '@angular/core';
import { Post } from 'src/app/PostInterface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-all-posts-page',
  templateUrl: './all-posts-page.component.html',
  styleUrls: ['./all-posts-page.component.css']
})
export class AllPostsPageComponent {
  posts!: Post[];

  constructor( private postService:PostService) {}

  deletePost(post: Post){
    this.postService.deletePost(post).subscribe((item) => this.posts = this.posts.filter(item => item.id !== post.id));
  }

  ngOnInit(){
    this.postService.getPost().subscribe((posts) => this.posts = posts);
  }

}
