import {Component, OnInit} from '@angular/core';
import {CoinsDetailsService} from '../services/coins-details.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  responseJson = []
  p: number = 0;
  totalCount: number = this.responseJson.length;
  tags = [];
  arr = [];

  constructor(private coinSrvc: CoinsDetailsService, private route: Router) {
  }

  ngOnInit(): void {
    this.showData()
    this.getTags()
  }


  getTags() {
    this.responseJson.forEach((result: any) => {
      // console.log(result.tags)
      this.tags.push(result.tags)
    })
    // console.log(JSON.stringify(this.tags))

    for (let i = 0; i < this.tags.length; i++) {
      for (let j = 0; j < this.tags[i].length; j++) {
        this.arr.push(this.tags[i]);
      }
    }

    console.log(this.arr)


    // let stringArray = this.tags.map(JSON.stringify);
    // let uniqueStringArray = new Set(stringArray);
    // let uniqueArray = Array.from(uniqueStringArray, JSON.parse);

    // console.log(uniqueArray);


    // this.tags.forEach((res: any) => {
    //   console.log(res)
    // })
    // const newarr = [this.tags[0]];
    // for (var i = 1; i < this.tags.length; i++) {
    //   if (this.tags[i] != this.tags[i - 1]) newarr.push(this.tags[i]);
    // }
    // console.log(newarr)
  }

  showData() {
    this.coinSrvc.getAllData().subscribe(
      (res: any) => {
        console.log(res)
        this.responseJson = res;
      }
    )
  }

}
