import { User } from './../user';
import { Posts } from './../posts';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { Comments } from './../commets';
import { HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  comments!: Comments[];
  user!: User;
  post!: Posts;
  id!: number;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);

    this.userService.getCommnts().subscribe((data) => {
      this.comments = data.filter(
        (comment: Comments) => comment?.postId === this.id
      );
      console.log(this.comments);
    });

    this.userService.getPosts().subscribe((data) => {
      this.post = data.find((post: Posts) => post.id === this.id);
      console.log(this.post);
    });
    this.userService.getUsers().subscribe((data) => {
      this.user = data.find((user: User) => user.id === this.post.userId);
      console.log(this.user);
    });
  }
}
