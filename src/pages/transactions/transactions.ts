import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Transaction } from '../../database';
import { Adding } from '../adding/adding'
/*
  Generated class for the Transactions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html'
})
export class Transactions {
  title:string = "Movimientos";
  transactions: any;
  addingPage = Adding;

  constructor(public navCtrl: NavController) {}

  ionViewWillEnter() {
    this.loadTransactions();
  }

  loadTransactions(){
    Transaction.all().then((resultados) => {
      this.transactions = resultados;
      console.log(this.transactions);
    });
  }

}
