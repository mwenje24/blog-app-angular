import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../PostInterface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  posts: Post[] = [];
  category!: string;

  constructor( 
    private route: ActivatedRoute,
    private postService:PostService,
    private router:Router
  ) {}

  ngOnInit(): void { }
}
