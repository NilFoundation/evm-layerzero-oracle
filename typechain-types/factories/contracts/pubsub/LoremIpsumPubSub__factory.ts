/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  LoremIpsumPubSub,
  LoremIpsumPubSubInterface,
} from "../../../contracts/pubsub/LoremIpsumPubSub";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "startSlot",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "endSlot",
        type: "uint64",
      },
    ],
    name: "InvalidSlotRange",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "subscriptionId",
        type: "bytes32",
      },
    ],
    name: "SubscriptionAlreadyActive",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "subscriptionId",
        type: "bytes32",
      },
    ],
    name: "SubscriptionNotActive",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "subscriptionId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "sourceChainId",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sourceAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "callbackAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    name: "Publish",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "subscriptionId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "startSlot",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "endSlot",
        type: "uint64",
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "sourceChainId",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "sourceAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "callbackAddress",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "eventSig",
            type: "bytes32",
          },
        ],
        indexed: false,
        internalType: "struct Subscription",
        name: "subscription",
        type: "tuple",
      },
    ],
    name: "Subscribe",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "subscriptionId",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "sourceChainId",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "sourceAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "callbackAddress",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "eventSig",
            type: "bytes32",
          },
        ],
        indexed: false,
        internalType: "struct Subscription",
        name: "subscription",
        type: "tuple",
      },
    ],
    name: "Unsubscribe",
    type: "event",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "eventsPublished",
    outputs: [
      {
        internalType: "enum PublishStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "srcSlotTxSlotPack",
        type: "bytes",
      },
      {
        internalType: "bytes32[]",
        name: "receiptsRootProof",
        type: "bytes32[]",
      },
      {
        internalType: "bytes32",
        name: "receiptsRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes[]",
        name: "receiptProof",
        type: "bytes[]",
      },
      {
        internalType: "bytes",
        name: "txIndexRLPEncoded",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "logIndex",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "sourceChainId",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "sourceAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "callbackAddress",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "eventSig",
            type: "bytes32",
          },
        ],
        internalType: "struct Subscription",
        name: "subscription",
        type: "tuple",
      },
    ],
    name: "publishEvent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_sourceChainId",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_sourceAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_callbackAddress",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_eventSig",
        type: "bytes32",
      },
      {
        internalType: "uint64",
        name: "_startSlot",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "_endSlot",
        type: "uint64",
      },
    ],
    name: "subscribe",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "subscriptions",
    outputs: [
      {
        internalType: "enum SubscriptionStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_sourceChainId",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_sourceAddress",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_eventSig",
        type: "bytes32",
      },
    ],
    name: "unsubscribe",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620039923803806200399283398101604081905262000034916200005a565b600080546001600160a01b0319166001600160a01b03929092169190911790556200008c565b6000602082840312156200006d57600080fd5b81516001600160a01b03811681146200008557600080fd5b9392505050565b6138f6806200009c6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80633cca331c1461006757806365138959146100a057806394259c6c146100c157806397229719146100f1578063bbe6d64214610104578063ffa1ad7414610119575b600080fd5b61008a610075366004612f1a565b60016020526000908152604090205460ff1681565b6040516100979190612f49565b60405180910390f35b6100b36100ae366004612fa8565b610133565b604051908152602001610097565b6100e46100cf366004612f1a565b60026020526000908152604090205460ff1681565b6040516100979190613019565b6100b36100ff36600461302d565b61029a565b6101176101123660046131be565b6103a4565b005b610121600181565b60405160ff9091168152602001610097565b60008060405180608001604052808963ffffffff168152602001886001600160a01b03168152602001876001600160a01b0316815260200186815250905060008160405160200161018491906132a0565b60408051601f1981840301815291905280516020909101209050600160008281526002602052604090205460ff1660018111156101c3576101c3612f33565b036101e957604051634702100760e11b8152600481018290526024015b60405180910390fd5b6000818152600260205260409020805460ff191660011790556001600160401b03808616908516101561024257604051633c04832160e21b81526001600160401b038087166004830152851660248201526044016101e0565b836001600160401b0316856001600160401b0316827f5c727204c662dd3d053e4f52d9c6872a50938b7af3f1497df385c3b5f4e5eb738560405161028691906132a0565b60405180910390a498975050505050505050565b60008060405180608001604052808663ffffffff168152602001856001600160a01b03168152602001336001600160a01b031681526020018481525090506000816040516020016102eb91906132a0565b60408051601f19818403018152919052805160209091012090506000808281526002602052604090205460ff16600181111561032957610329612f33565b036103495760405162191d2960e11b8152600481018290526024016101e0565b60008181526002602052604090819020805460ff191690555181907f0a82aeeb867dc22c12ad75195fd9acfc1a0f838cd64348e4ed6a25e199def9c8906103919085906132a0565b60405180910390a29150505b9392505050565b6103b96103b460208301836132e2565b6106f1565b6103ce6103c960208301836132e2565b6108d7565b6000816040516020016103e191906132fd565b60405160208183030381529060405280519060200120905060008b8b8686856040516020016104149594939291906133a6565b60408051601f19818403018152919052805160209091012090506000808281526001602052604090205460ff16600281111561045257610452612f33565b1461049f5760405162461bcd60e51b815260206004820152601760248201527f4576656e7420616c7265616479207075626c697368656400000000000000000060448201526064016101e0565b6000806104ae8d8f018f6133f9565b90925090506104c9826104c460208801886132e2565b61098c565b600080546001600160a01b0316637599735c6104e860208901896132e2565b6040516001600160e01b031960e084901b16815263ffffffff919091166004820152602401602060405180830381865afa15801561052a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061054e919061342c565b6040516356f90d7960e01b81526001600160401b03851660048201526001600160a01b0391909116906356f90d7990602401602060405180830381865afa15801561059d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c19190613449565b9050806106085760405162461bcd60e51b8152602060048201526015602482015274486561646572526f6f74206973206d697373696e6760581b60448201526064016101e0565b600061064c8c8f8f80806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250879250899150889050610d4a565b90508061069b5760405162461bcd60e51b815260206004820152601b60248201527f496e76616c696420726563656970747320726f6f742070726f6f66000000000060448201526064016101e0565b6000806106cb6106ab8d8f613462565b8f8d8d8d60200160208101906106c191906134e5565b8e60600135610ef2565b915091506106dd888a89888686611237565b505050505050505050505050505050505050565b60008054604051631d665cd760e21b815263ffffffff841660048201526001600160a01b0390911690637599735c90602401602060405180830381865afa158015610740573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610764919061342c565b6001600160a01b0316036107b55760405162461bcd60e51b81526020600482015260186024820152772634b3b43a1031b634b2b73a1034b9903737ba1039b2ba1760411b60448201526064016101e0565b600054604051631d665cd760e21b815263ffffffff831660048201526001600160a01b0390911690637599735c90602401602060405180830381865afa158015610803573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610827919061342c565b6001600160a01b0316632bcccca56040518163ffffffff1660e01b8152600401602060405180830381865afa158015610864573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108889190613502565b6108d45760405162461bcd60e51b815260206004820152601d60248201527f4c6967687420636c69656e7420697320696e636f6e73697374656e742e00000060448201526064016101e0565b50565b6000546040516306d5cf8360e31b815263ffffffff831660048201526001600160a01b03909116906336ae7c1890602401602060405180830381865afa158015610925573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109499190613502565b156108d45760405162461bcd60e51b815260206004820152601360248201527221b7b73a3930b1ba1034b990333937bd32b71760691b60448201526064016101e0565b60008054604051631d665cd760e21b815263ffffffff841660048201526001600160a01b0390911690637599735c90602401602060405180830381865afa1580156109db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ff919061342c565b6001600160a01b031603610a505760405162461bcd60e51b81526020600482015260186024820152772634b3b43a1031b634b2b73a1034b9903737ba1039b2ba1760411b60448201526064016101e0565b600054604051631d665cd760e21b815263ffffffff831660048201526001600160a01b0390911690637599735c90602401602060405180830381865afa158015610a9e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac2919061342c565b604051638bc33af360e01b81526001600160401b03841660048201526001600160a01b039190911690638bc33af390602401602060405180830381865afa158015610b11573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b359190613449565b600003610b845760405162461bcd60e51b815260206004820152601e60248201527f54696d657374616d70206973206e6f742073657420666f7220736c6f742e000060448201526064016101e0565b60008054604051631d665cd760e21b815263ffffffff841660048201526001600160a01b0390911690637599735c90602401602060405180830381865afa158015610bd3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf7919061342c565b604051638bc33af360e01b81526001600160401b03851660048201526001600160a01b039190911690638bc33af390602401602060405180830381865afa158015610c46573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6a9190613449565b610c74904261353a565b905060008054906101000a90046001600160a01b03166001600160a01b031663e4407b156040518163ffffffff1660e01b8152600401602060405180830381865afa158015610cc7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ceb9190613449565b811015610d455760405162461bcd60e51b815260206004820152602260248201527f4d7573742077616974206c6f6e67657220746f20757365207468697320736c6f6044820152613a1760f11b60648201526084016101e0565b505050565b600080826001600160401b0316846001600160401b031603610d885750600b610d758161020061354d565b610d819061018361356c565b9050610edb565b612000610d95848661357f565b6001600160401b031611610df75750600b610db181602061354d565b610dbc90600661356c565b9050610dd36120006001600160401b0385166135b5565b610ddf6120008361354d565b610de9919061356c565b9050610d758161020061354d565b836001600160401b0316836001600160401b03161015610e895750600b610e1f81602061354d565b610e2a90600761356c565b9050610e3781600261354d565b610e4290600061356c565b9050610e596120006001600160401b0385166135c9565b610e6763010000008361354d565b610e71919061356c565b9050610e7e81600261354d565b610dbc90600161356c565b60405162461bcd60e51b815260206004820152602160248201527f54727573746c657373414d423a20696e76616c69642074617267657420736c6f6044820152601d60fa1b60648201526084016101e0565b610ee78782888861142c565b979650505050505050565b6060806000610f02878a8a611446565b9050600081600081518110610f1957610f196135dd565b01602001516001600160f81b03191690506000600160f81b821480610f4b5750600160f91b6001600160f81b03198316145b15610f5857506001610fbd565b600360fe1b6001600160f81b0319831610610f7557506000610fbd565b60405162461bcd60e51b815260206004820152601c60248201527f556e737570706f72746564207472616e73616374696f6e20747970650000000060448201526064016101e0565b600060208401905060006040518060400160405280848751610fdf919061353a565b8152602001610fee858561356c565b905290506000610ffd82611cbf565b905080516004146110495760405162461bcd60e51b8152602060048201526016602482015275092dcecc2d8d2c840e4cac6cad2e0e840d8cadccee8d60531b60448201526064016101e0565b600061106e82600381518110611061576110616135dd565b6020026020010151611cbf565b905080518c106110c05760405162461bcd60e51b815260206004820152601760248201527f4c6f6720696e646578206f7574206f6620626f756e647300000000000000000060448201526064016101e0565b60006110d7828e81518110611061576110616135dd565b90506000611108611101836000815181106110f4576110f46135dd565b6020026020010151611ee4565b6000612010565b509050806001600160a01b03808216908f16146111785760405162461bcd60e51b815260206004820152602860248201527f4576656e7420776173206e6f7420656d697474656420627920736f757263652060448201526718dbdb9d1c9858dd60c21b60648201526084016101e0565b600061119861119385600181518110611061576110616135dd565b61203a565b90508d816000815181106111ae576111ae6135dd565b6020026020010151146112035760405162461bcd60e51b815260206004820152601e60248201527f4576656e74207369676e617475726520646f6573206e6f74206d61746368000060448201526064016101e0565b600061121b856002815181106110f4576110f46135dd565b919d50909b505050505050505050505050965096945050505050565b6000606081635160951d60e11b8961125260208b018b6132e2565b61126260408c0160208d016134e5565b89898960405160240161127a969594939291906135f3565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925291506112be9060608a01908a016134e5565b6001600160a01b0316816040516112d59190613682565b6000604051808303816000865af19150503d8060008114611312576040519150601f19603f3d011682016040523d82523d6000602084013e611317565b606091505b50805191945092506000915060200361135757600082806020019051810190611340919061369e565b6001600160e01b031916635160951d60e11b149150505b8280156113615750805b15611384576000878152600160205260409020805460ff191660021790556113a1565b6000878152600160208190526040909120805460ff191690911790555b6113b16040890160208a016134e5565b6001600160a01b03166113c760208a018a6132e2565b63ffffffff168a7f47168527703e2b64019824d3deab18f025015c94de1e8bfe6091ab32e02d12ed6113ff60608d0160408e016134e5565b604080516001600160a01b03909216825288151560208301520160405180910390a4505050505050505050565b60008061143a8686866120e3565b90921495945050505050565b606060008451116114915760405162461bcd60e51b81526020600482015260156024820152744d65726b6c65547269653a20656d707479206b657960581b60448201526064016101e0565b600061149c8461227b565b905060006114a986612369565b90506000846040516020016114c091815260200190565b60405160208183030381529060405290506000805b8451811015611c685760008582815181106114f2576114f26135dd565b6020026020010151905084518311156115645760405162461bcd60e51b815260206004820152602e60248201527f4d65726b6c65547269653a206b657920696e646578206578636565647320746f60448201526d0e8c2d840d6caf240d8cadccee8d60931b60648201526084016101e0565b826000036115f257805180516020918201206040516115a19261158c92910190815260200190565b60405160208183030381529060405285612483565b6115ed5760405162461bcd60e51b815260206004820152601d60248201527f4d65726b6c65547269653a20696e76616c696420726f6f74206861736800000060448201526064016101e0565b6116df565b805151602011611678578051805160209182012060405161161c9261158c92910190815260200190565b6115ed5760405162461bcd60e51b815260206004820152602760248201527f4d65726b6c65547269653a20696e76616c6964206c6172676520696e7465726e6044820152660c2d840d0c2e6d60cb1b60648201526084016101e0565b80516116849085612483565b6116df5760405162461bcd60e51b815260206004820152602660248201527f4d65726b6c65547269653a20696e76616c696420696e7465726e616c206e6f646044820152650ca40d0c2e6d60d31b60648201526084016101e0565b6116eb6010600161356c565b8160200151510361188b578451830361182357600061171a82602001516010815181106110f4576110f46135dd565b905060008151116117935760405162461bcd60e51b815260206004820152603b60248201527f4d65726b6c65547269653a2076616c7565206c656e677468206d75737420626560448201527f2067726561746572207468616e207a65726f20286272616e636829000000000060648201526084016101e0565b600187516117a1919061353a565b83146118155760405162461bcd60e51b815260206004820152603a60248201527f4d65726b6c65547269653a2076616c7565206e6f6465206d757374206265206c60448201527f617374206e6f646520696e2070726f6f6620286272616e63682900000000000060648201526084016101e0565b965061039d95505050505050565b6000858481518110611837576118376135dd565b602001015160f81c60f81b60f81c9050600082602001518260ff1681518110611862576118626135dd565b602002602001015190506118758161249f565b955061188260018661356c565b94505050611c55565b600281602001515103611bfc5760006118a3826124c4565b90506000816000815181106118ba576118ba6135dd565b016020015160f81c905060006118d16002836136c8565b6118dc9060026136ea565b905060006118ed848360ff166124e8565b905060006118fb8a896124e8565b90506000611909838361251e565b9050808351146119815760405162461bcd60e51b815260206004820152603a60248201527f4d65726b6c65547269653a20706174682072656d61696e646572206d7573742060448201527f736861726520616c6c206e6962626c65732077697468206b657900000000000060648201526084016101e0565b60ff851660021480611996575060ff85166003145b15611b3c5780825114611a115760405162461bcd60e51b815260206004820152603d60248201527f4d65726b6c65547269653a206b65792072656d61696e646572206d757374206260448201527f65206964656e746963616c20746f20706174682072656d61696e64657200000060648201526084016101e0565b6000611a2d88602001516001815181106110f4576110f46135dd565b90506000815111611aa65760405162461bcd60e51b815260206004820152603960248201527f4d65726b6c65547269653a2076616c7565206c656e677468206d75737420626560448201527f2067726561746572207468616e207a65726f20286c656166290000000000000060648201526084016101e0565b60018d51611ab4919061353a565b8914611b285760405162461bcd60e51b815260206004820152603860248201527f4d65726b6c65547269653a2076616c7565206e6f6465206d757374206265206c60448201527f617374206e6f646520696e2070726f6f6620286c65616629000000000000000060648201526084016101e0565b9c5061039d9b505050505050505050505050565b60ff85161580611b4f575060ff85166001145b15611b8e57611b7b8760200151600181518110611b6e57611b6e6135dd565b602002602001015161249f565b9950611b87818a61356c565b9850611bf1565b60405162461bcd60e51b815260206004820152603260248201527f4d65726b6c65547269653a2072656365697665642061206e6f64652077697468604482015271040c2dc40eadcd6dcdeeedc40e0e4caccd2f60731b60648201526084016101e0565b505050505050611c55565b60405162461bcd60e51b815260206004820152602860248201527f4d65726b6c65547269653a20726563656976656420616e20756e706172736561604482015267626c65206e6f646560c01b60648201526084016101e0565b5080611c6081613703565b9150506114d5565b5060405162461bcd60e51b815260206004820152602560248201527f4d65726b6c65547269653a2072616e206f7574206f662070726f6f6620656c656044820152646d656e747360d81b60648201526084016101e0565b60606000806000611ccf8561259d565b919450925090506001816001811115611cea57611cea612f33565b14611d5d5760405162461bcd60e51b815260206004820152603860248201527f524c505265616465723a206465636f646564206974656d207479706520666f7260448201527f206c697374206973206e6f742061206c697374206974656d000000000000000060648201526084016101e0565b8451611d69838561356c565b14611dd15760405162461bcd60e51b815260206004820152603260248201527f524c505265616465723a206c697374206974656d2068617320616e20696e76616044820152713634b2103230ba30903932b6b0b4b73232b960711b60648201526084016101e0565b6040805160208082526104208201909252600091816020015b6040805180820190915260008082526020820152815260200190600190039081611dea5790505090506000845b8751811015611ed857600080611e5d6040518060400160405280858d60000151611e41919061353a565b8152602001858d60200151611e56919061356c565b905261259d565b509150915060405180604001604052808383611e79919061356c565b8152602001848c60200151611e8e919061356c565b815250858581518110611ea357611ea36135dd565b6020908102919091010152611eb960018561356c565b9350611ec5818361356c565b611ecf908461356c565b92505050611e17565b50815295945050505050565b60606000806000611ef48561259d565b919450925090506000816001811115611f0f57611f0f612f33565b14611f825760405162461bcd60e51b815260206004820152603960248201527f524c505265616465723a206465636f646564206974656d207479706520666f7260448201527f206279746573206973206e6f7420612064617461206974656d0000000000000060648201526084016101e0565b611f8c828461356c565b855114611ff85760405162461bcd60e51b815260206004820152603460248201527f524c505265616465723a2062797465732076616c756520636f6e7461696e732060448201527330b71034b73b30b634b2103932b6b0b4b73232b960611b60648201526084016101e0565b61200785602001518484612c60565b95945050505050565b600080606061202185856014612d00565b901c61202e84601461356c565b915091505b9250929050565b6060600082516001600160401b03811115612057576120576130f1565b604051908082528060200260200182016040528015612080578160200160208202803683370190505b50905060005b83518110156120dc576120a48482815181106110f4576110f46135dd565b6120ad9061371c565b8282815181106120bf576120bf6135dd565b6020908102919091010152806120d481613703565b915050612086565b5092915050565b600082825160016120f4919061356c565b6120ff906002613824565b1161210957600080fd5b8360005b84600114612272576121206002866135b5565b6001036121bf57600284828151811061213b5761213b6135dd565b60200260200101518360405160200161215e929190918252602082015260400190565b60408051601f198184030181529082905261217891613682565b602060405180830381855afa158015612195573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052508101906121b89190613449565b9150612253565b6002828583815181106121d4576121d46135dd565b60200260200101516040516020016121f6929190918252602082015260400190565b60408051601f198184030181529082905261221091613682565b602060405180830381855afa15801561222d573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052508101906122509190613449565b91505b61225e6002866135c9565b94508061226a81613703565b91505061210d565b50949350505050565b80516060906000816001600160401b0381111561229a5761229a6130f1565b6040519080825280602002602001820160405280156122df57816020015b60408051808201909152606080825260208201528152602001906001900390816122b85790505b50905060005b8281101561236157604051806040016040528086838151811061230a5761230a6135dd565b6020026020010151815260200161233987848151811061232c5761232c6135dd565b6020026020010151612d5d565b81525082828151811061234e5761234e6135dd565b60209081029190910101526001016122e5565b509392505050565b8051606090600061237b82600261354d565b6001600160401b03811115612392576123926130f1565b6040519080825280601f01601f1916602001820160405280156123bc576020820181803683370190505b5090506000805b83811015612479578581815181106123dd576123dd6135dd565b6020910101516001600160f81b03198116925060041c60ff60f41b168361240583600261354d565b81518110612415576124156135dd565b60200101906001600160f81b031916908160001a905350600f60f81b82168361243f83600261354d565b61244a90600161356c565b8151811061245a5761245a6135dd565b60200101906001600160f81b031916908160001a9053506001016123c3565b5090949350505050565b6000818051906020012083805190602001201490505b92915050565b606060208260000151106124bb576124b682611ee4565b612499565b61249982612d70565b60606124996124e383602001516000815181106110f4576110f46135dd565b612369565b6060825182106125075750604080516020810190915260008152612499565b61039d8383848651612519919061353a565b612d86565b60008060008351855110612533578351612536565b84515b90505b808210801561258d5750838281518110612555576125556135dd565b602001015160f81c60f81b6001600160f81b03191685838151811061257c5761257c6135dd565b01602001516001600160f81b031916145b1561236157816001019150612539565b6000806000808460000151116125c55760405162461bcd60e51b81526004016101e090613830565b6020840151805160001a607f81116125ea576000600160009450945094505050612c59565b60b781116127475760006125ff60808361353a565b90508087600001511161267f5760405162461bcd60e51b815260206004820152604e60248201526000805160206138a183398151915260448201527f742062652067726561746572207468616e20737472696e67206c656e6774682060648201526d2873686f727420737472696e672960901b608482015260a4016101e0565b6001838101516001600160f81b03191690821415806126ac5750600160ff1b6001600160f81b0319821610155b6127345760405162461bcd60e51b815260206004820152604d60248201527f524c505265616465723a20696e76616c6964207072656669782c2073696e676c60448201527f652062797465203c203078383020617265206e6f74207072656669786564202860648201526c73686f727420737472696e672960981b608482015260a4016101e0565b5060019550935060009250612c59915050565b60bf811161298857600061275c60b78361353a565b9050808760000151116127df5760405162461bcd60e51b815260206004820152605160248201526000805160206138a183398151915260448201527f74206265203e207468616e206c656e677468206f6620737472696e67206c656e60648201527067746820286c6f6e6720737472696e672960781b608482015260a4016101e0565b60018301516001600160f81b03191660008190036128665760405162461bcd60e51b815260206004820152604a60248201526000805160206138a183398151915260448201527f74206e6f74206861766520616e79206c656164696e67207a65726f7320286c6f6064820152696e6720737472696e672960b01b608482015260a4016101e0565b600184015160088302610100031c603781116128e95760405162461bcd60e51b815260206004820152604860248201526000805160206138a183398151915260448201527f742062652067726561746572207468616e20353520627974657320286c6f6e6760648201526720737472696e672960c01b608482015260a4016101e0565b6128f3818461356c565b89511161296b5760405162461bcd60e51b815260206004820152604c60248201526000805160206138a183398151915260448201527f742062652067726561746572207468616e20746f74616c206c656e677468202860648201526b6c6f6e6720737472696e672960a01b608482015260a4016101e0565b61297683600161356c565b9750955060009450612c599350505050565b60f78111612a2a57600061299d60c08361353a565b905080876000015111612a195760405162461bcd60e51b815260206004820152604a60248201526000805160206138a183398151915260448201527f742062652067726561746572207468616e206c697374206c656e677468202873606482015269686f7274206c6973742960b01b608482015260a4016101e0565b600195509350849250612c59915050565b6000612a3760f78361353a565b905080876000015111612ab65760405162461bcd60e51b815260206004820152604d60248201526000805160206138a183398151915260448201527f74206265203e207468616e206c656e677468206f66206c697374206c656e677460648201526c6820286c6f6e67206c6973742960981b608482015260a4016101e0565b60018301516001600160f81b0319166000819003612b3b5760405162461bcd60e51b815260206004820152604860248201526000805160206138a183398151915260448201527f74206e6f74206861766520616e79206c656164696e67207a65726f7320286c6f6064820152676e67206c6973742960c01b608482015260a4016101e0565b600184015160088302610100031c60378111612bbc5760405162461bcd60e51b815260206004820152604660248201526000805160206138a183398151915260448201527f742062652067726561746572207468616e20353520627974657320286c6f6e67606482015265206c6973742960d01b608482015260a4016101e0565b612bc6818461356c565b895111612c3c5760405162461bcd60e51b815260206004820152604a60248201526000805160206138a183398151915260448201527f742062652067726561746572207468616e20746f74616c206c656e67746820286064820152696c6f6e67206c6973742960b01b608482015260a4016101e0565b612c4783600161356c565b9750955060019450612c599350505050565b9193909250565b60606000826001600160401b03811115612c7c57612c7c6130f1565b6040519080825280601f01601f191660200182016040528015612ca6576020820181803683370190505b50905082600003612cb857905061039d565b6000612cc4858761356c565b90506020820160005b85811015612ce5578281015182820152602001612ccd565b85811115612cf4576000868301525b50919695505050505050565b8251600090612d0f838561356c565b1115612d535760405162461bcd60e51b815260206004820152601360248201527242797465733a204f7574206f662072616e676560681b60448201526064016101e0565b5050016020015190565b6060612499612d6b83612ec7565b611cbf565b6060612499826020015160008460000151612c60565b60608182601f011015612dcc5760405162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b60448201526064016101e0565b828284011015612e0f5760405162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b60448201526064016101e0565b81830184511015612e565760405162461bcd60e51b8152602060048201526011602482015270736c6963655f6f75744f66426f756e647360781b60448201526064016101e0565b606082158015612e755760405191506000825260208201604052612272565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015612eae578051835260209283019201612e96565b5050858452601f01601f19166040525050949350505050565b60408051808201909152600080825260208201526000825111612efc5760405162461bcd60e51b81526004016101e090613830565b50604080518082019091528151815260209182019181019190915290565b600060208284031215612f2c57600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b6020810160038310612f5d57612f5d612f33565b91905290565b803563ffffffff81168114612f7757600080fd5b919050565b6001600160a01b03811681146108d457600080fd5b80356001600160401b0381168114612f7757600080fd5b60008060008060008060c08789031215612fc157600080fd5b612fca87612f63565b95506020870135612fda81612f7c565b94506040870135612fea81612f7c565b935060608701359250612fff60808801612f91565b915061300d60a08801612f91565b90509295509295509295565b6020810160028310612f5d57612f5d612f33565b60008060006060848603121561304257600080fd5b61304b84612f63565b9250602084013561305b81612f7c565b929592945050506040919091013590565b60008083601f84011261307e57600080fd5b5081356001600160401b0381111561309557600080fd5b60208301915083602082850101111561203357600080fd5b60008083601f8401126130bf57600080fd5b5081356001600160401b038111156130d657600080fd5b6020830191508360208260051b850101111561203357600080fd5b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171561312f5761312f6130f1565b604052919050565b600082601f83011261314857600080fd5b81356001600160401b03811115613161576131616130f1565b613174601f8201601f1916602001613107565b81815284602083860101111561318957600080fd5b816020850160208301376000918101602001919091529392505050565b6000608082840312156131b857600080fd5b50919050565b6000806000806000806000806000806101408b8d0312156131de57600080fd5b8a356001600160401b03808211156131f557600080fd5b6132018e838f0161306c565b909c509a5060208d013591508082111561321a57600080fd5b6132268e838f016130ad565b909a50985060408d0135975060608d013591508082111561324657600080fd5b6132528e838f016130ad565b909750955060808d013591508082111561326b57600080fd5b506132788d828e01613137565b93505060a08b0135915061328f8c60c08d016131a6565b90509295989b9194979a5092959850565b815163ffffffff1681526020808301516001600160a01b0390811691830191909152604080840151909116908201526060918201519181019190915260800190565b6000602082840312156132f457600080fd5b61039d82612f63565b6080810163ffffffff61330f84612f63565b168252602083013561332081612f7c565b6001600160a01b03908116602084015260408401359061333f82612f7c565b166040830152606092830135929091019190915290565b60005b83811015613371578181015183820152602001613359565b50506000910152565b60008151808452613392816020860160208601613356565b601f01601f19169290920160200192915050565b60808152846080820152848660a0830137600060a086830101526000601f19601f870116820160a08382030160208401526133e460a082018761337a565b60408401959095525050606001529392505050565b6000806040838503121561340c57600080fd5b61341583612f91565b915061342360208401612f91565b90509250929050565b60006020828403121561343e57600080fd5b815161039d81612f7c565b60006020828403121561345b57600080fd5b5051919050565b60006001600160401b038084111561347c5761347c6130f1565b8360051b602061348d818301613107565b8681529185019181810190368411156134a557600080fd5b865b848110156134d9578035868111156134bf5760008081fd5b6134cb36828b01613137565b8452509183019183016134a7565b50979650505050505050565b6000602082840312156134f757600080fd5b813561039d81612f7c565b60006020828403121561351457600080fd5b8151801515811461039d57600080fd5b634e487b7160e01b600052601160045260246000fd5b8181038181111561249957612499613524565b600081600019048311821515161561356757613567613524565b500290565b8082018082111561249957612499613524565b6001600160401b038281168282160390808211156120dc576120dc613524565b634e487b7160e01b600052601260045260246000fd5b6000826135c4576135c461359f565b500690565b6000826135d8576135d861359f565b500490565b634e487b7160e01b600052603260045260246000fd5b86815263ffffffff86166020808301919091526001600160a01b03861660408301526001600160401b038516606083015260c06080830181905284519083018190526000918581019160e0850190845b8181101561365f57845183529383019391830191600101613643565b505084810360a0860152613673818761337a565b9b9a5050505050505050505050565b60008251613694818460208701613356565b9190910192915050565b6000602082840312156136b057600080fd5b81516001600160e01b03198116811461039d57600080fd5b600060ff8316806136db576136db61359f565b8060ff84160691505092915050565b60ff828116828216039081111561249957612499613524565b60006001820161371557613715613524565b5060010190565b805160208083015191908110156131b85760001960209190910360031b1b16919050565b600181815b8085111561377b57816000190482111561376157613761613524565b8085161561376e57918102915b93841c9390800290613745565b509250929050565b60008261379257506001612499565b8161379f57506000612499565b81600181146137b557600281146137bf576137db565b6001915050612499565b60ff8411156137d0576137d0613524565b50506001821b612499565b5060208310610133831016604e8410600b84101617156137fe575081810a612499565b6138088383613740565b806000190482111561381c5761381c613524565b029392505050565b600061039d8383613783565b6020808252604a908201527f524c505265616465723a206c656e677468206f6620616e20524c50206974656d60408201527f206d7573742062652067726561746572207468616e207a65726f20746f206265606082015269206465636f6461626c6560b01b608082015260a0019056fe524c505265616465723a206c656e677468206f6620636f6e74656e74206d7573a26469706673582212204609e3de3cbdc53aff354bdae159bf8c2b0918436e109e0e6e79aa57fc0c303e64736f6c63430008100033";

type LoremIpsumPubSubConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LoremIpsumPubSubConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LoremIpsumPubSub__factory extends ContractFactory {
  constructor(...args: LoremIpsumPubSubConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _router: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LoremIpsumPubSub> {
    return super.deploy(_router, overrides || {}) as Promise<LoremIpsumPubSub>;
  }
  override getDeployTransaction(
    _router: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_router, overrides || {});
  }
  override attach(address: string): LoremIpsumPubSub {
    return super.attach(address) as LoremIpsumPubSub;
  }
  override connect(signer: Signer): LoremIpsumPubSub__factory {
    return super.connect(signer) as LoremIpsumPubSub__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LoremIpsumPubSubInterface {
    return new utils.Interface(_abi) as LoremIpsumPubSubInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LoremIpsumPubSub {
    return new Contract(address, _abi, signerOrProvider) as LoremIpsumPubSub;
  }
}
