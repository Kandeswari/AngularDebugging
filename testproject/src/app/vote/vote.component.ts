import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  totalvotes:number
  constructor() { 
    this.totalvotes = 0
  }
upvote = function(){
  this.totalvotes++
}
downvote = function(){
  this.totalvotes--
}
  ngOnInit() {
  }

}
