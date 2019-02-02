export const abi = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "adopters",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x43ae80d3"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "petId",
        "type": "uint256"
      }
    ],
    "name": "adopt",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x8588b2c5"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getAdopters",
    "outputs": [
      {
        "name": "",
        "type": "address[16]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x3de4eb17"
  }
];
