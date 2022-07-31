import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CoinsPrototype} from "../coins";
import {Observable, of} from "rxjs";
import {COINS} from "../mock-coinsData";

const headerDict = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
  'Access-Control-Allow-Credentials': 'true'
}

const requestOptions = {
  headers: new HttpHeaders(headerDict),
};
@Injectable({
  providedIn: 'root'
})

export class CoinsDetailsService {

  private baseURL = 'https://jsonkeeper.com/b/VE7I'; // https://jsonkeeper.com/b/DB32

  constructor(private _http: HttpClient) {
  }
  getAllData() {
    // return this._http.get(this.baseURL,{ withCredentials: true })
    const coinData = of(COINS);
    console.log('Fetched all coins');
    return coinData;
  }
  getCoin(id: number): Observable<CoinsPrototype> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const myCoin = COINS.find(h => h.id === id)!;
    console.log(`Fetched coin id=${id}`);
    return of(myCoin);
  }
}
