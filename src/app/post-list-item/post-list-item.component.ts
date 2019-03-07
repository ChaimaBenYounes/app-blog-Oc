import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../class/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input() post : Post;
  classRed: boolean = false; 
  classGreen : boolean = false;

  constructor() {}

  ngOnInit() {}

  LoverIT(){
    this.post.loveIts +=1; 
    this.LovetItCount();
  }

  dontLove(){
    this.post.loveIts -=1; 
    this.LovetItCount();
  }

  LovetItCount(){
    if (this.post.loveIts == 0) { 
        this.classRed=false;
        this.classGreen=false;
    } else if(this.post.loveIts < 0){
        this.classRed=true;
        this.classGreen=false;
    } else if(this.post.loveIts > 0){
        this.classRed=false;
        this.classGreen=true;
    }
  }

}
