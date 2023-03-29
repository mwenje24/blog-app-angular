import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/PostInterface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-categorical-posts-page',
  templateUrl: './categorical-posts-page.component.html',
  styleUrls: ['./categorical-posts-page.component.css']
})
export class CategoricalPostsPageComponent {

  category!:string;
  posts!:Post[];
  postCategories: { category: string }[] = [];

  constructor(
    private route: ActivatedRoute,
    private postService:PostService
  ){  }

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
        this.category = params['category'];
        this.postService.getPostsByCategory(this.category).subscribe(posts => {
          this.posts = posts;
        });
      });
  }

  deletePost(post: Post){
    this.postService.deletePost(post).subscribe((item) => this.posts = this.posts.filter(item => item.id !== post.id));
  }

}
