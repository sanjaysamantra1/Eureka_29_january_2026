import { Component, inject, signal, WritableSignal } from '@angular/core';
import { CommentService } from '../../services/comment-service';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-comment-list',
  imports: [],
  templateUrl: './comment-list.html',
  styleUrl: './comment-list.css',
})
export class CommentList {
  commentArr: WritableSignal<Comment[]> = signal([]);
  commentService = inject(CommentService);

  ngOnInit() {
    this.commentService.getAllComments().subscribe((response: Comment[]) => {
      this.commentArr.set(response);
    })
  }
}
