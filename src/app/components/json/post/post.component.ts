import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../header/header.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css', '../../../app.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post!: Post;

  constructor() {}

  ngOnInit(): void {}
}
