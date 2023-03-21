import { Component, OnInit, Input } from '@angular/core';
import axios from 'axios';
import Post from 'src/app/interfaces/Post';
import Comment from 'src/app/interfaces/Comment';

@Component({
  selector: 'window-component',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent {

  @Input() inputId!: number
  post!: Post
  comments!: Comment[]

  url: string = "https://jsonplaceholder.typicode.com/posts/"


  async postRequest(id: number) {
    await axios.get(this.url + id)
      .then(res => {
        this.post = res.data;
      })
      .catch(error => {
        console.log(error);
      })
  }
  async commentRequest(id: number) {
    await axios.get(this.url + id + "/comments")
      .then(res => {
        this.comments = res.data;
      })
      .catch(err => {
        console.log(err);

      })
  }

  async fetchPostAndComments(id: number) {
    await this.postRequest(id);
    await this.commentRequest(id);
    console.log(this.post);
    console.log(this.comments);

  }


  ngOnInit(): void {

  }
}
