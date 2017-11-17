import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../post/post';
import {POSTS} from '../posts/posts';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
})
export class PostEditComponent implements OnInit {

  id: number;

  @Input()
  post: Post;

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id')) || POSTS[POSTS.length - 1].id;
    this.post = this.getById(this.id);
  }

  getById(id: number): Post {
    return POSTS.find((post: Post) => {
      return id === post.id;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
