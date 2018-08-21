import {Component, Input} from '@angular/core';
import {CoinService} from '../services/coin.service';

@Component({
	selector: 'app-coin-list',
	templateUrl: './coin-list.component.html',
	styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent {
	coins$ = this.coinService.coins$;

	constructor(private coinService: CoinService) {}

	hasGoneUpToday(coin) {
		return coin.quotes.USD.percent_change_24h > 0;
	}

	coinClicked(coin) {
		console.log(coin);
	}
}
