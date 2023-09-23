import { Component, Input, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductsService } from './services/products.service';
export interface User {
  id: string;
  name: string;
  date: number;
  quantity: number;
  price: number;
  expireDate: number;
  status: string;
  person: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // products!: Product[];
  users: User[] = [];
  isVisible = false;
  userCopy = [
    {
      id: 'ID-5432',
      name: 'جهاز لابتوب 256 SSD',
      date: Date.now(),
      quantity: 200,
      price: 2000,
      expireDate: Date.now(),
      status: 'شراء',
      person: 'محمد هنيدى',
    },
    {
      id: 'ID-5432',
      name: 'جهاز لابتوب 256 SSD',
      date: Date.now(),
      quantity: 200,
      price: 2000,
      expireDate: Date.now(),
      status: 'مرتجع',
      person: 'محمد هنيدى',
    },
    {
      id: 'ID-5432',
      name: 'جهاز لابتوب 256 SSD',
      date: Date.now(),
      quantity: 200,
      price: 2000,
      expireDate: Date.now(),
      status: 'شراء',
      person: 'محمد هنيدى',
    },
    {
      id: 'ID-5432',
      name: 'جهاز لابتوب 256 SSD',
      date: Date.now(),
      quantity: 200,
      price: 2000,
      expireDate: Date.now(),
      status: 'مبيعات',
      person: 'محمد هنيدى',
    },
    {
      id: 'ID-5432',
      name: 'جهاز لابتوب 256 SSD',
      date: Date.now(),
      quantity: 200,
      price: 2000,
      expireDate: Date.now(),
      status: 'شراء',
      person: 'محمد هنيدى',
    },
    {
      id: 'ID-5432',
      name: 'جهاز لابتوب 256 SSD',
      date: Date.now(),
      quantity: 200,
      price: 2000,
      expireDate: Date.now(),
      status: 'شراء',
      person: 'محمد هنيدى',
    },
    {
      id: 'ID-5432',
      name: 'جهاز لابتوب 256 SSD',
      date: Date.now(),
      quantity: 200,
      price: 2000,
      expireDate: Date.now(),
      status: 'شراء',
      person: 'محمد هنيدى',
    },
    {
      id: 'ID-5432',
      name: 'جهاز لابتوب 256 SSD',
      date: Date.now(),
      quantity: 200,
      price: 2000,
      expireDate: Date.now(),
      status: 'شراء',
      person: 'محمد هنيدى',
    },
  ];
  ngOnInit(): void {
    this.users = this.userCopy;
  }
  // return all
  filterAll() {
    this.users = this.userCopy;
  }
  //filtering by sales:
  filterBuy() {
    const filter = this.userCopy.filter((user) => {
      return user.status == 'شراء';
    });
    this.users = filter;
  }
  //filterBy returns
  filterReturns() {
    const filter = this.userCopy.filter((user) => {
      return user.status == 'مرتجع';
    });
    this.users = filter;
  }
  // filter by sales
  filterSales() {
    const filter = this.userCopy.filter((user) => {
      return user.status == 'مبيعات';
    });
    this.users = filter;
  }
  // columns: any[] = [
  //   {
  //     name: 'Sector',
  //     field: 'sector',
  //   },
  //   {
  //     name: 'Company',
  //     field: 'name',
  //   },
  //   {
  //     name: 'This Year Sales',
  //     field: 'thisYearSales',
  //   },
  //   {
  //     name: 'Last Year Sales',
  //     field: 'lastYearSales',
  //   },
  // ];
  // constructor(private Service: ProductsService) {}
  // ngOnInit(): void {
  //   this.Service.getProducts().subscribe((data) => {
  //     this.products = data;
  //   });
  // }
}
