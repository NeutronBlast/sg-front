import { Component, OnInit } from '@angular/core';

export interface User {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: User[] = [
  {position: 'Frank Hesse', name: '1999-08-01', weight: 'hyperschnell11@outlook.sk', symbol: 'Active'},
  {position: 'Leo Barnes', name: '1999-07-02', weight: 'minoraiolax@gmail.com', symbol: 'Active'},
  {position: 'Thomas Leonhart', name: '1998-01-04', weight: 'th3father@gmx.com', symbol: 'Active'},
  {position: 'Victoria Goldsmichdt', name: '1994-01-02', weight: 'hello777@mail.com', symbol: 'Active'},
  {position: 'Leo Decarriere', name: '1999-01-03', weight: 'coolguy099@outlook.es', symbol: 'Active'}
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'actions'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
