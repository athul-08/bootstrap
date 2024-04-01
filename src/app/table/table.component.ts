
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  
})
export class TableComponent implements OnInit{
  public ngvals= false;
  public red="red";
  public blue="blue";
  public green="green";
  public aqua="aqua";
 public columns=["red","blue","yellow"];
  public value1="";
  shows(){
    this.ngvals=true;
  }
  hides(){
    this.ngvals=false;
  }
  chng(){
    for(let i=0;i<this.columns.length;i++)
    {
      if(this.columns[i]=="red")
      {
        this.columns[i]="reds";
      }
      else if(this.columns[i]=="blue")
      {
        this.columns[i]="blues";
      }
      else if(this.columns[i]=="yellow")
      {
        this.columns[i]="yellows";
      }
    }
  }

  constructor(){}
  ngOnInit(): void {}

}