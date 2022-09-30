import { Component, OnInit } from '@angular/core';
import { FakestoreService } from '../fakestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private fakestore: FakestoreService) { }
  categories: string[] = [];
  products: any[] = [];


  ngOnInit(): void {
    this.fakestore.GetCategories().subscribe(category => this.categories = category);
    this.fakestore.GetProducts().subscribe((product) =>

      this.products = product);

  }

}
