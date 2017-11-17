import {Component, OnInit} from '@angular/core';
import {Post, POSTS} from './post';

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

  /**
   * @return {Array<Post>}
   */
  getPosts() {
    return POSTS;
  }

  /**
   * @return {Post}
   */
  getLastPost(): Post {
    return {
      "userId": 2,
      "id": 13,
      "title": "dolorum ut in voluptas mollitia et saepe quo animi",
      "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
    };
  }
}
