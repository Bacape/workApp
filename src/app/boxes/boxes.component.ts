import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { Posts } from '../posts';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css'],
})
export class BoxesComponent implements OnInit {
  users!: User[];
  posts!: Posts[];

  constructor(private userService: UserService, private router: Router) {}
  getPostUserName(userId: number) {
    const postUser = this.users.find((user) => user?.id === userId);
    return postUser ? postUser.name : 'Neznámy autor';
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });

    this.userService.getPosts().subscribe((data) => {
      this.posts = data;
      console.log(this.posts);
    });
  }
}
