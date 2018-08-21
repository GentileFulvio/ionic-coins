import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';

import {CoinPage} from './coin.page';
import {CoinListComponent} from './coin-list/coin-list.component';
import {CoinDetailComponent} from './coin-detail/coin-detail.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild([
			{
				path: '', component: CoinPage, children: [
					{
						path: 'list', component: CoinListComponent
					},
					{
						path: 'detail/:id', component: CoinDetailComponent
					},
					{
						path: '', redirectTo: 'list'
					}
				]
			}
		])
	],
	declarations: [
		CoinPage,
		CoinListComponent,
		CoinDetailComponent
	]
})
export class CoinPageModule {}
