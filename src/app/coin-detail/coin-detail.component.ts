import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Observable, of} from "rxjs";
import {COINS} from "../mock-coinsData";
import {CoinsDetailsService} from "../services/coins-details.service";
import {CoinsPrototype} from "../coins";

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.css']
})
export class CoinDetailComponent implements OnInit {
  myCoin: CoinsPrototype | undefined;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private coinsService: CoinsDetailsService) {
  }

  ngOnInit(): void {
    this.bringMyCoin()
  }

  bringMyCoin(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.coinsService.getCoin(id)
      .subscribe(hero => this.myCoin = hero);
    console.log(this.myCoin)
  }

  goBack(): void {
    this.location.back();
  }

}
