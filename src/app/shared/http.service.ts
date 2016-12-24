
import {Injectable} from "@angular/core";
import {Jsonp, URLSearchParams, RequestOptionsArgs, Headers, Http, Response} from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class HttpService {
  constructor(private http: Http) {}

  private headers = new Headers({ 'X-Mashape-Key': 'AuzTGXGvAKmshQmnlmsZ3w19VIeFp158HQQjsn4nqmXDanOLNE'});
  getQuote(search: string) {
    return this.http.get('https://deezerdevs-deezer.p.mashape.com/search?q='+search, {headers: this.headers})
      .map((r: Response) => r.json().data);
  }


}
