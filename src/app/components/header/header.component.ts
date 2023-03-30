import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post, Category } from '../../PostInterface';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  postCategories: Category[] = [];
  categoriesMenu: any;

  constructor(private postService:PostService) {}

  ngOnInit() {
    this.postService.getCategories().subscribe((category) => this.postCategories = category);
  }

}