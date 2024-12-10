import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position1: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position1: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position1: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position1: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position1: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position1: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position1: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position1: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position1: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position1: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position1: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['position',  'weight','name', 'symbol'];
  dataSource =[];
  // [
  //   {position1: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  //   {position1: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  //   {position1: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  //   {position1: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  //   {position1: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  //   {position1: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  //   {position1: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  //   {position1: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  //   {position1: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  //   {position1: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  // ];
}
