import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

export interface IBoard {
  issue: Array<string>;
}

@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bug-tracker.component.html',
  styleUrls: ['./bug-tracker.component.scss']
})
export class BugTrackerComponent implements OnInit {

  board: Array<IBoard> = [];
  value;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addBoard() {
    this.board.push({issue:[]});
  }
  

  removeBoard(index: number) {
    this.board.splice(index,1)
  }

  

  addIssue(e, value) {
    console.log(e, value)
    this.board[e].issue.push(value);
    console.log(this.board)
    this.value =''
  }
}
