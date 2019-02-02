import {Injectable} from '@angular/core';
import Web3 from 'web3';
import {Square} from '../map/square';
import {SquareManager} from '../map/square-manager';


@Injectable({
  providedIn: 'root'
})
export class MarsNationService {
  private squareManager = new SquareManager();
  private web3: Web3;
  private web3Provider;
  private contractAddress = '0x92Ed993F5489af9306978e0211A439A40D496e45';
  private abi: Array<any> = [
    {
      'constant': true,
      'inputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'name': 'adopters',
      'outputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function',
      'signature': '0x43ae80d3'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'petId',
          'type': 'uint256'
        }
      ],
      'name': 'adopt',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function',
      'signature': '0x8588b2c5'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'getAdopters',
      'outputs': [
        {
          'name': '',
          'type': 'address[16]'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function',
      'signature': '0x3de4eb17'
    }
  ];
  private contract;
  private accountAddress: string;

  constructor() {
    if (typeof (<any>window).web3 !== undefined) {
      this.web3Provider = (<any>window).web3.currentProvider;
    } else {
      console.warn('no metamask');
    }
    this.web3 = new Web3(this.web3Provider);
    this.contract = this.web3.eth.contract(this.abi).at(this.contractAddress);
    this.pullAccount();
  }


  private pullAccount() {
    this.web3.eth.getAccounts((error, accounts) => {
      if (error) {
        console.warn('Couldnt get accounts. Error.');
        return;
      } else {
        console.log(accounts);
        this.accountAddress = accounts[0];
        this.web3.defaultAccount = this.accountAddress;
        // this.contract.options.from = this.accountAddress;
        // this.contract.options.gas = 200000;
      }
    });
  }

  public call() {
    console.log('call adopt', this.contract, this.accountAddress);
    const transactionObject = {
      from: this.accountAddress,
      gas: 200000,
      gasPrice: 2000000000
    };
    this.contract.adopt(1, transactionObject, (error, result) => {
      console.log(error, result);
    });
  }

  public getOwnedSquares(): Array<Square> {
    const ret = [];
    for (const square of this.squareManager.allSquares) {
      if (square.id < 10) {
        ret.push(square);
      }
    }
    return ret;
  }


}
