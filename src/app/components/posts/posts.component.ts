import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../PostInterface';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { EditPostComponent } from '../edit-post/edit-post.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  @Input() post!:Post;

  @Output() onDeletePost:EventEmitter<Post> = new EventEmitter();
  @Output() onEditPost:EventEmitter<Post> = new EventEmitter();

  faTimes = faTimes;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  showMore = false;
  showConfirmDelete = false;
  showEditPost = false;

  onReadMore(){
    this.showMore = !this.showMore;
  }

  onDelete(post: Post){
    this.onDeletePost.emit(post)
  }

  onEdit(post: Post){
    this.onEditPost.emit(post)
  }

  cancelDelete() {
    this.showConfirmDelete = false;
  }

  toggleConfirmDelete(post: Post) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: 'Are you sure you want to delete this post?'
      }
    });
  
    dialogRef.componentInstance.confirmed.subscribe(() => {
      // User confirmed deletion
      this.onDelete(post);
    });
  
    dialogRef.componentInstance.cancelled.subscribe(() => {
      this.cancelDelete();
    });
  }

  toggleEditPost(post: Post){
    const dialogRef = this.dialog.open(EditPostComponent, {
      data: {
        message: 'Edit Post',
        post: post
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onEdit(post);
      }
    });
  }
}
