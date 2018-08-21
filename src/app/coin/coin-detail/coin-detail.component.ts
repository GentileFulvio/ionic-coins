import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {CoinService} from '../services/coin.service';

@Component({
	selector: 'app-coin-detail',
	templateUrl: './coin-detail.component.html',
	styleUrls: ['./coin-detail.component.scss']
})
export class CoinDetailComponent implements OnInit {
	coin$ = this.route.params.pipe(
		map(params => params.id),
		distinctUntilChanged(),
		switchMap(id => this.coinService.getCoin(id))
	);
	constructor(private route: ActivatedRoute, private coinService: CoinService) {}

	ngOnInit() {}
}
