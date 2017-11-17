import {Component, OnInit} from '@angular/core';
import {Post} from '../post/post';
import {POSTS} from './posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {
  last: Post;
  posts: Array<Post>;

  ngOnInit(): void {
    this.posts = this.getPosts();
    this.last = this.getLastPost();
  }

  getPosts(): Array<Post> {
    return POSTS;
  }

  getLastPost(): Post {
    return POSTS[POSTS.length - 1];
  }
}
