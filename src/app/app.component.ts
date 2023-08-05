import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ApiService } from './services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  prodectData: any =[
    { 'id': 1, 'category': 'Fruits' , 'date': '12/03/2023' , 'productName': 'Apple', 'price': 100, 'details': 'Kashmiri Apple'},
    { 'id': 2, 'category': 'Fruits' , 'date': '12/03/2023' , 'productName': 'Mango', 'price': 52, 'details': 'Kashmiri Apple'},
    { 'id': 3, 'category': 'Fruits' , 'date': '12/03/2023' , 'productName': 'Banana', 'price': 100, 'details': 'Kashmiri Apple'},
    { 'id': 4, 'category': 'Fruits' , 'date': '12/03/2023' , 'productName': 'orange', 'price': 200, 'details': 'Kashmiri Apple'},
    { 'id': 5, 'category': 'Fruits' , 'date': '12/03/2023' , 'productName': 'graps', 'price': 80, 'details': 'Kashmiri Apple'},
    { 'id': 6, 'category': 'Fruits' , 'date': '12/03/2023' , 'productName': 'Apple', 'price': 40, 'details': 'Kashmiri Apple'},
    { 'id': 7, 'category': 'Fruits' , 'date': '12/03/2023' , 'productName': 'Apple', 'price': 92, 'details': 'Kashmiri Apple'},
  ];
  title = 'Angular_project';
  displayedColumns: string[] = ['productName', 'category', 'date', 'freshness', 'price', 'comment', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog : MatDialog, private api : ApiService){

  }
  ngOnInit(): void {
    this.getAllProducts();
  }
  openDialog() { 
    this.dialog.open(DialogComponent,  {
      width:'30%'
    });
  }
  getAllProducts(){
    debugger;
    this.dataSource  = this.prodectData;
     
    // this.api.grtProduct()
    // .subscribe({
    //   next:(res)=>{
    //     this.dataSource = new MatTableDataSource(res);
    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort

      

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
