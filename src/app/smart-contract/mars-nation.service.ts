import {Injectable} from '@angular/core';
import Web3 from 'web3';
import {Square} from '../map/square';
import {SquareManager} from '../map/square-manager';
import {abi} from './contract-abi';


@Injectable({
  providedIn: 'root'
})
export class MarsNationService {
  private squareManager = new SquareManager();
  private web3: Web3;
  private web3Provider;
  private contractAddress = '0xe5969d6592879b8ed89e77852595d434c44220ae';
  private contract;
  private accountAddress: string;

  constructor() {
    if (typeof (<any>window).web3 !== undefined) {
      this.web3Provider = (<any>window).web3.currentProvider;
    } else {
      console.warn('no metamask');
    }
    this.web3 = new Web3(this.web3Provider);
    this.contract = this.web3.eth.contract(abi).at(this.contractAddress);
    this.pullAccount();
  }


  private pullAccount() {
    this.web3.eth.getAccounts((error, accounts) => {
      if (error) {
        console.warn('Couldnt get accounts. Error.');
        return;
      } else {
        this.accountAddress = accounts[0];
        console.log(this.accountAddress);
        this.web3.defaultAccount = this.accountAddress;
      }
    });
  }

  public call() {
    console.log('call buy', this.contract, this.accountAddress);
    const transactionObject = {
      from: this.accountAddress,
      gas: 200000,
      gasPrice: 2000000000
    };
    this.contract.buy(1, transactionObject, (error, result) => {
      console.log(error, result);
    });
  }

  public getOwnedSquares(): Array<Square> {
    return [];

    // const ret = [];
    // for (const square of this.squareManager.allSquares) {
    //   if (square.id < 1000) {
    //     ret.push(square);
    //   }
    // }
    // return ret;
  }


}
