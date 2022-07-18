// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    None: ctc1,
    Some: ctc1
    });
  const map0_ctc = ctc2;
  
  
  return {
    infos: {
      },
    views: {
      1: [],
      2: [ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function Attacher(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Attacher expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Attacher expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'));
  const ctc3 = stdlib.T_Address;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v74 = stdlib.protect(ctc2, interact.attacherName, 'for Attacher\'s interact field attacherName');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v78], secs: v80, time: v79, didSend: v28, from: v77 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v74],
    evt_cnt: 1,
    funcNum: 1,
    lct: v79,
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:38:4:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v85], secs: v87, time: v86, didSend: v40, from: v84 } = txn2;
      
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v85], secs: v87, time: v86, didSend: v40, from: v84 } = txn2;
  ;
  stdlib.protect(ctc0, await interact.attachNotification(v85, v78), {
    at: './index.rsh:39:31:application',
    fs: ['at ./index.rsh:39:31:application call to [unknown function] (defined at: ./index.rsh:39:31:function exp)', 'at ./index.rsh:39:31:application call to "liftedInteract" (defined at: ./index.rsh:39:31:application)'],
    msg: 'attachNotification',
    who: 'Attacher'
    });
  
  const v91 = stdlib.protect(ctc3, await interact.getAddress(), {
    at: './index.rsh:43:49:application',
    fs: ['at ./index.rsh:42:8:application call to [unknown function] (defined at: ./index.rsh:42:12:function exp)'],
    msg: 'getAddress',
    who: 'Attacher'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v84, v91],
    evt_cnt: 1,
    funcNum: 2,
    lct: v86,
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:45:4:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v93], secs: v95, time: v94, didSend: v54, from: v92 } = txn3;
      
      ;
      await stdlib.simMapSet(sim_r, 0, v93, null);
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v93], secs: v95, time: v94, didSend: v54, from: v92 } = txn3;
  ;
  const v96 = stdlib.addressEq(v84, v92);
  stdlib.assert(v96, {
    at: './index.rsh:45:4:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Attacher'
    });
  await stdlib.mapSet(map0, v93, null);
  stdlib.protect(ctc0, await interact.notifyAddition(v93, v85), {
    at: './index.rsh:51:55:application',
    fs: ['at ./index.rsh:51:6:application call to [unknown function] (defined at: ./index.rsh:51:18:function exp)'],
    msg: 'notifyAddition',
    who: 'Attacher'
    });
  
  return;
  
  
  
  
  
  
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'));
  const ctc3 = stdlib.T_Address;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v73 = stdlib.protect(ctc2, interact.deployerName, 'for Deployer\'s interact field deployerName');
  
  const txn1 = await (ctc.sendrecv({
    args: [v73],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:31:4:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:31:4:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v78], secs: v80, time: v79, didSend: v28, from: v77 } = txn1;
      
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v78], secs: v80, time: v79, didSend: v28, from: v77 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.deployNotification(v78), {
    at: './index.rsh:32:31:application',
    fs: ['at ./index.rsh:32:31:application call to [unknown function] (defined at: ./index.rsh:32:31:function exp)', 'at ./index.rsh:32:31:application call to "liftedInteract" (defined at: ./index.rsh:32:31:application)'],
    msg: 'deployNotification',
    who: 'Deployer'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v85], secs: v87, time: v86, didSend: v40, from: v84 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v93], secs: v95, time: v94, didSend: v54, from: v92 } = txn3;
  ;
  const v96 = stdlib.addressEq(v84, v92);
  stdlib.assert(v96, {
    at: './index.rsh:45:4:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  await stdlib.mapSet(map0, v93, null);
  stdlib.protect(ctc0, await interact.notifyAddition(v93, v85), {
    at: './index.rsh:51:55:application',
    fs: ['at ./index.rsh:51:6:application call to [unknown function] (defined at: ./index.rsh:51:18:function exp)'],
    msg: 'notifyAddition',
    who: 'Deployer'
    });
  
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiADAAECJgIBAAAiNQAxGEEBLilkSSJbNQGBCFs1AjEZIxJBAAgxACgoZkIA/DYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAAHBJJAxAADYkEkQkNAESRDQESSISTDQCEhFEKGQ1A0k1BTX/gAQ3nYLBNP9QsDQDMQASRDT/KIABAWZCAGVIIzQBEkQ0BEkiEkw0AhIRREk1BTX/gATwVLsGNP9QsDEAKEsBVwAgZ0gkNQEyBjUCQgBNSIGgjQaIAJYiNAESRDQESSISTDQCEhFESTUFNf+ABG+R2nQ0/1CwIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQkMTUSRCIxNhJEIzE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 32,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes12",
                    "name": "elem0",
                    "type": "bytes12"
                  }
                ],
                "internalType": "struct T2",
                "name": "v78",
                "type": "tuple"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes12",
                    "name": "elem0",
                    "type": "bytes12"
                  }
                ],
                "internalType": "struct T2",
                "name": "v78",
                "type": "tuple"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes12",
                    "name": "elem0",
                    "type": "bytes12"
                  }
                ],
                "internalType": "struct T2",
                "name": "v85",
                "type": "tuple"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v93",
                "type": "address"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes12",
                    "name": "elem0",
                    "type": "bytes12"
                  }
                ],
                "internalType": "struct T2",
                "name": "v85",
                "type": "tuple"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v93",
                "type": "address"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000c3738038062000c378339810160408190526200002691620001d5565b600080554360035560408051338152825160208083019190915283015151516001600160a01b0319168183015290517f8e149d9924d27c61ce6ad89f1ef49180a0df2c75dae84b1f88556b53355ca12c9181900360600190a16200008d34156007620000ce565b60016000818155439091556040805160208082018490528251808303820181529183019092528051620000c5926002920190620000f8565b505050620002b6565b81620000f45760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001069062000279565b90600052602060002090601f0160209004810192826200012a576000855562000175565b82601f106200014557805160ff191683800117855562000175565b8280016001018555821562000175579182015b828111156200017557825182559160200191906001019062000158565b506200018392915062000187565b5090565b5b8082111562000183576000815560010162000188565b604051602081016001600160401b0381118282101715620001cf57634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036040811215620001e957600080fd5b604080519081016001600160401b03811182821017156200021a57634e487b7160e01b600052604160045260246000fd5b604052835181526020601f19830112156200023457600080fd5b6200023e6200019e565b91506200024a6200019e565b60208501516001600160a01b0319811681146200026657600080fd5b8152825260208101919091529392505050565b600181811c908216806200028e57607f821691505b60208210811415620002b057634e487b7160e01b600052602260045260246000fd5b50919050565b61097180620002c66000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780633bc5b7bf1461008357806356eddbfb146100b05780637d5bd36b146100c357806383230757146100d6578063ab53f2c6146100eb57005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b34801561008f57600080fd5b506100a361009e3660046106f8565b61010e565b60405161007a9190610732565b61005d6100be366004610791565b61013a565b61005d6100d1366004610791565b610314565b3480156100e257600080fd5b50600154610070565b3480156100f757600080fd5b50610100610473565b60405161007a9291906107ad565b604080516060810182526000808252602082018190529181019190915261013482610510565b92915050565b61014a600260005414600d6105e8565b6101648135158061015d57506001548235145b600e6105e8565b6000808055600280546101769061080a565b80601f01602080910402602001604051908101604052809291908181526020018280546101a29061080a565b80156101ef5780601f106101c4576101008083540402835291602001916101ef565b820191906000526020600020905b8154815290600101906020018083116101d257829003601f168201915b5050505050806020019051810190610207919061083f565b90507f3275e11473974a8d7984f8c42072cfc3d51a905918cc1d978f1596c7113eeddc338360405161023a929190610899565b60405180910390a161024e3415600b6105e8565b8051610266906001600160a01b03163314600c6105e8565b60016004600061027c60408601602087016106f8565b6001600160a01b031681526020810191909152604001600020805460ff1916600183818111156102ae576102ae61071c565b021790555060006004816102c860408601602087016106f8565b6001600160a01b03168152602081019190915260400160009081208054921515620100000262ff0000199093169290921790915580805560018190556103109060029061060d565b5050565b61032460016000541460096105e8565b61033e8135158061033757506001548235145b600a6105e8565b6000808055600280546103509061080a565b80601f016020809104026020016040519081016040528092919081815260200182805461037c9061080a565b80156103c95780601f1061039e576101008083540402835291602001916103c9565b820191906000526020600020905b8154815290600101906020018083116103ac57829003601f168201915b50505050508060200190518101906103e191906108d4565b90507f43a0c6adc10df08a32714f680c5cff6406eed26bdaaaea558af9e8fabf4ffa5533836040516104149291906108f6565b60405180910390a1610428341560086105e8565b6040805160208082018352338083526002600055436001558351918201529091016040516020818303038152906040526002908051906020019061046d92919061064a565b50505050565b6000606060005460028080546104889061080a565b80601f01602080910402602001604051908101604052809291908181526020018280546104b49061080a565b80156105015780601f106104d657610100808354040283529160200191610501565b820191906000526020600020905b8154815290600101906020018083116104e457829003601f168201915b50505050509050915091509091565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561055c5761055c61071c565b14156105d9576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561059d5761059d61071c565b60018111156105ae576105ae61071c565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b816103105760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546106199061080a565b6000825580601f10610629575050565b601f01602090049060005260206000209081019061064791906106ce565b50565b8280546106569061080a565b90600052602060002090601f01602090048101928261067857600085556106be565b82601f1061069157805160ff19168380011785556106be565b828001600101855582156106be579182015b828111156106be5782518255916020019190600101906106a3565b506106ca9291506106ce565b5090565b5b808211156106ca57600081556001016106cf565b6001600160a01b038116811461064757600080fd5b60006020828403121561070a57600080fd5b8135610715816106e3565b9392505050565b634e487b7160e01b600052602160045260246000fd5b815160608201906002811061075757634e487b7160e01b600052602160045260246000fd5b8083525060208301511515602083015260408301511515604083015292915050565b60006040828403121561078b57600080fd5b50919050565b6000604082840312156107a357600080fd5b6107158383610779565b82815260006020604081840152835180604085015260005b818110156107e1578581018301518582016060015282016107c5565b818111156107f3576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061081e57607f821691505b6020821081141561078b57634e487b7160e01b600052602260045260246000fd5b60006020828403121561085157600080fd5b6040516020810181811067ffffffffffffffff8211171561088257634e487b7160e01b600052604160045260246000fd5b6040528251610890816106e3565b81529392505050565b6001600160a01b03838116825282356020808401919091526060830191908401356108c3816106e3565b818116604085015250509392505050565b6000602082840312156108e657600080fd5b8151801515811461071557600080fd5b6001600160a01b0383168152813560208083019190915260608201908301356001600160a01b0319811680821461092c57600080fd5b8060408501525050939250505056fea264697066735822122026a639d89cfb042b278c6b2b16e34738f7be1e05fe20acd936024327deb6274864736f6c634300080c0033`,
  BytecodeLen: 3127,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:33:10:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:40:10:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:50:10:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Attacher": Attacher,
  "Deployer": Deployer
  };
export const _APIs = {
  };
