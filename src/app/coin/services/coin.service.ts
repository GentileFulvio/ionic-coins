import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, shareReplay, share, publishReplay, refCount} from 'rxjs/operators';

interface Response {
	data: {
		[key: string]: any;
	};
}

@Injectable({
	providedIn: 'root'
})
export class CoinService {
	coins$ = this.http.get<Response>('https://api.coinmarketcap.com/v2/listings/').pipe(
		map(res => res.data)
	);
	constructor(private http: HttpClient) {}

	getCoin(coinId: string) {
		return this.http.get(`https://api.coinmarketcap.com/v2/ticker/${coinId}/`);
	}
}
