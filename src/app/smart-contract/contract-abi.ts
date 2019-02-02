export const abi = [
  {
    'constant': true,
    'inputs': [
      {
        'name': 'interfaceId',
        'type': 'bytes4'
      }
    ],
    'name': 'supportsInterface',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0x01ffc9a7'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'name',
    'outputs': [
      {
        'name': '',
        'type': 'string'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0x06fdde03'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'tokenId',
        'type': 'uint256'
      }
    ],
    'name': 'getApproved',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0x081812fc'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'name': 'tokenIndexToOwner',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0x1d36e06c'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'owner',
        'type': 'address'
      },
      {
        'name': 'index',
        'type': 'uint256'
      }
    ],
    'name': 'tokenOfOwnerByIndex',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0x2f745c59'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'from',
        'type': 'address'
      },
      {
        'name': 'to',
        'type': 'address'
      },
      {
        'name': 'tokenId',
        'type': 'uint256'
      }
    ],
    'name': 'safeTransferFrom',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function',
    'signature': '0x42842e0e'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'name': 'tokens',
    'outputs': [
      {
        'name': 'owner',
        'type': 'address'
      },
      {
        'name': 'id',
        'type': 'uint256'
      },
      {
        'name': 'value',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0x4f64b2be'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'index',
        'type': 'uint256'
      }
    ],
    'name': 'tokenByIndex',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0x4f6ccce7'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'symbol',
    'outputs': [
      {
        'name': '',
        'type': 'string'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0x95d89b41'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'account',
        'type': 'address'
      }
    ],
    'name': 'addMinter',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function',
    'signature': '0x983b2d56'
  },
  {
    'constant': false,
    'inputs': [],
    'name': 'renounceMinter',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function',
    'signature': '0x98650275'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'to',
        'type': 'address'
      },
      {
        'name': 'approved',
        'type': 'bool'
      }
    ],
    'name': 'setApprovalForAll',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function',
    'signature': '0xa22cb465'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'name': 'tokenIndexToApproved',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0xa8bd9c32'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'account',
        'type': 'address'
      }
    ],
    'name': 'isMinter',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0xaa271e1a'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'from',
        'type': 'address'
      },
      {
        'name': 'to',
        'type': 'address'
      },
      {
        'name': 'tokenId',
        'type': 'uint256'
      },
      {
        'name': '_data',
        'type': 'bytes'
      }
    ],
    'name': 'safeTransferFrom',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function',
    'signature': '0xb88d4fde'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'tokenId',
        'type': 'uint256'
      }
    ],
    'name': 'tokenURI',
    'outputs': [
      {
        'name': '',
        'type': 'string'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0xc87b56dd'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'owner',
        'type': 'address'
      },
      {
        'name': 'operator',
        'type': 'address'
      }
    ],
    'name': 'isApprovedForAll',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0xe985e9c5'
  },
  {
    'inputs': [
      {
        'name': 'name',
        'type': 'string'
      },
      {
        'name': 'symbol',
        'type': 'string'
      }
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'constructor',
    'signature': 'constructor'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'name': 'owner',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'tokenId',
        'type': 'uint256'
      }
    ],
    'name': 'Mint',
    'type': 'event',
    'signature': '0x0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': 'account',
        'type': 'address'
      }
    ],
    'name': 'MinterAdded',
    'type': 'event',
    'signature': '0x6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f6'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': 'account',
        'type': 'address'
      }
    ],
    'name': 'MinterRemoved',
    'type': 'event',
    'signature': '0xe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb66692'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': 'from',
        'type': 'address'
      },
      {
        'indexed': true,
        'name': 'to',
        'type': 'address'
      },
      {
        'indexed': true,
        'name': 'tokenId',
        'type': 'uint256'
      }
    ],
    'name': 'Transfer',
    'type': 'event',
    'signature': '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': 'owner',
        'type': 'address'
      },
      {
        'indexed': true,
        'name': 'approved',
        'type': 'address'
      },
      {
        'indexed': true,
        'name': 'tokenId',
        'type': 'uint256'
      }
    ],
    'name': 'Approval',
    'type': 'event',
    'signature': '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': 'owner',
        'type': 'address'
      },
      {
        'indexed': true,
        'name': 'operator',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'approved',
        'type': 'bool'
      }
    ],
    'name': 'ApprovalForAll',
    'type': 'event',
    'signature': '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'totalSupply',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0x18160ddd'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_owner',
        'type': 'address'
      }
    ],
    'name': 'balanceOf',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0x70a08231'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_tokenId',
        'type': 'uint256'
      }
    ],
    'name': 'ownerOf',
    'outputs': [
      {
        'name': 'owner',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0x6352211e'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_to',
        'type': 'address'
      },
      {
        'name': '_tokenId',
        'type': 'uint256'
      }
    ],
    'name': 'approve',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function',
    'signature': '0x095ea7b3'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_to',
        'type': 'address'
      },
      {
        'name': '_tokenId',
        'type': 'uint256'
      }
    ],
    'name': 'transfer',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function',
    'signature': '0xa9059cbb'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_from',
        'type': 'address'
      },
      {
        'name': '_to',
        'type': 'address'
      },
      {
        'name': '_tokenId',
        'type': 'uint256'
      }
    ],
    'name': 'transferFrom',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function',
    'signature': '0x23b872dd'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_owner',
        'type': 'address'
      }
    ],
    'name': 'tokensOfOwner',
    'outputs': [
      {
        'name': '',
        'type': 'uint256[]'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0x8462151c'
  },
  {
    'constant': false,
    'inputs': [],
    'name': 'mint',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function',
    'signature': '0x1249c58b'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'to',
        'type': 'address'
      },
      {
        'name': 'tokenId',
        'type': 'uint256'
      }
    ],
    'name': 'mint',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function',
    'signature': '0x40c10f19'
  }
];
