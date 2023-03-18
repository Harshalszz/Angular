import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../service/auth.service';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private builder: FormBuilder, private service: AuthService, private dialog: MatDialog) {
    this.LoadProduct();
  }
  userlist: any;
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    //this.LoadProduct()

  }
  LoadProduct() {
    this.service.GetAllProduct().subscribe(res => {
      this.userlist = res;
      this.dataSource = new MatTableDataSource(this.userlist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  displayedColumns: string[] = ['id' ,'name', 'price', 'noitem', 'action'];

  // updateuser(code: any) {
  //   this.OpenDialog('1000ms', '600ms', code);
  // }

  // OpenDialog(enteranimation: any, exitanimation: any, code: string) {
  //   const popup = this.dialog.open(UpdatepopupComponent, {
  //     enterAnimationDuration: enteranimation,
  //     exitAnimationDuration: exitanimation,
  //     width: '30%',
  //     data: {
  //       usercode: code
  //     }
  //   });
  //   popup.afterClosed().subscribe(res => {
  //     this.LoadProduct();
  //   });
  // }

}
