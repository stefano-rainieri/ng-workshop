import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Post} from './post';
import {POSTS} from '../posts/posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {

  id: number;
  post: Post;
  showForm: boolean;

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute)
  {
    this.showForm = false;
  }

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id')) || POSTS[POSTS.length - 1].id ;
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

  toggleShowForm(): void {
    this.showForm = !this.showForm;
  }
}
