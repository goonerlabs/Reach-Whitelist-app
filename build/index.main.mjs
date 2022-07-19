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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0, ctc2]);
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc6
    });
  const map0_ctc = ctc7;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc4],
      2: [ctc0, ctc1, ctc4, ctc5],
      3: [ctc0, ctc1, ctc4, ctc5],
      4: [ctc0, ctc1, ctc4, ctc5, ctc5]
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
export async function Attacher1(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Attacher1 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Attacher1 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '16'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc3, ctc3, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v172 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v173 = [v172];
  const v180 = stdlib.protect(ctc2, interact.attacherName, 'for Attacher1\'s interact field attacherName');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc2, ctc3, ctc4],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v185, v186, v187], secs: v189, time: v188, didSend: v33, from: v184 } = txn1;
  const v190 = v173[stdlib.checkedBigNumberify('./index.rsh:40:4:dot', stdlib.UInt_max, '0')];
  const v192 = v190[stdlib.checkedBigNumberify('./index.rsh:40:4:dot', stdlib.UInt_max, '1')];
  const v193 = v190[stdlib.checkedBigNumberify('./index.rsh:40:4:dot', stdlib.UInt_max, '2')];
  const v194 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v192, v193];
  const v195 = stdlib.Array_set(v173, stdlib.checkedBigNumberify('./index.rsh:40:4:dot', stdlib.UInt_max, '0'), v194);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v186, v187, v195, v180],
    evt_cnt: 1,
    funcNum: 1,
    lct: v188,
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:47:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v201], secs: v203, time: v202, didSend: v45, from: v200 } = txn2;
      
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc8, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v201], secs: v203, time: v202, didSend: v45, from: v200 } = txn2;
  ;
  stdlib.protect(ctc0, await interact.attachNotification(v201, v185), {
    at: './index.rsh:48:32:application',
    fs: ['at ./index.rsh:48:32:application call to [unknown function] (defined at: ./index.rsh:48:32:function exp)', 'at ./index.rsh:48:32:application call to "liftedInteract" (defined at: ./index.rsh:48:32:application)'],
    msg: 'attachNotification',
    who: 'Attacher1'
    });
  
  const v207 = stdlib.protect(ctc5, await interact.getAddress(), {
    at: './index.rsh:52:51:application',
    fs: ['at ./index.rsh:51:9:application call to [unknown function] (defined at: ./index.rsh:51:13:function exp)'],
    msg: 'getAddress',
    who: 'Attacher1'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v186, v187, v195, v200, v207],
    evt_cnt: 1,
    funcNum: 2,
    lct: v202,
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:54:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v209], secs: v211, time: v210, didSend: v59, from: v208 } = txn3;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc8, ctc5, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v209], secs: v211, time: v210, didSend: v59, from: v208 } = txn3;
  ;
  const v212 = stdlib.addressEq(v200, v208);
  stdlib.assert(v212, {
    at: './index.rsh:54:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Attacher1'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v216], secs: v218, time: v217, didSend: v67, from: v215 } = txn4;
  ;
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 4,
    out_tys: [ctc5],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v224], secs: v226, time: v225, didSend: v81, from: v223 } = txn5;
  ;
  const v227 = stdlib.addressEq(v215, v223);
  stdlib.assert(v227, {
    at: './index.rsh:66:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Attacher1'
    });
  await stdlib.mapSet(map0, v209, null);
  const v233 = v195[stdlib.checkedBigNumberify('./index.rsh:73:52:application', stdlib.UInt_max, '0')];
  const v234 = v233[stdlib.checkedBigNumberify('./index.rsh:73:52:application', stdlib.UInt_max, '0')];
  const v235 = stdlib.gt(v234, v186);
  if (v235) {
    const v242 = stdlib.sub(v234, v186);
    const v245 = v233[stdlib.checkedBigNumberify('./index.rsh:76:32:application', stdlib.UInt_max, '1')];
    const v246 = v233[stdlib.checkedBigNumberify('./index.rsh:76:32:application', stdlib.UInt_max, '2')];
    const v247 = [v242, v245, v246];
    const v248 = stdlib.Array_set(v195, stdlib.checkedBigNumberify('./index.rsh:76:32:application', stdlib.UInt_max, '0'), v247);
    ;
    const v249 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v224), null);
    let v250;
    switch (v249[0]) {
      case 'None': {
        const v251 = v249[1];
        v250 = false;
        
        break;
        }
      case 'Some': {
        const v252 = v249[1];
        v250 = true;
        
        break;
        }
      }
    const v253 = v248[stdlib.checkedBigNumberify('./index.rsh:73:52:application', stdlib.UInt_max, '0')];
    const v254 = v253[stdlib.checkedBigNumberify('./index.rsh:73:52:application', stdlib.UInt_max, '0')];
    const v255 = stdlib.gt(v254, v186);
    const v256 = v250 ? v255 : false;
    if (v256) {
      ;
      stdlib.protect(ctc0, await interact.notifyAddition(v209, v201), {
        at: './index.rsh:84:37:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyAddition',
        who: 'Attacher1'
        });
      stdlib.protect(ctc0, await interact.notifyTransfer(v201, v186), {
        at: './index.rsh:85:37:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyTransfer',
        who: 'Attacher1'
        });
      stdlib.protect(ctc0, await interact.notifyFailedTransfer(v216, v186), {
        at: './index.rsh:86:43:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyFailedTransfer',
        who: 'Attacher1'
        });
      
      return;
      }
    else {
      stdlib.protect(ctc0, await interact.notifyAddition(v209, v201), {
        at: './index.rsh:84:37:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyAddition',
        who: 'Attacher1'
        });
      stdlib.protect(ctc0, await interact.notifyTransfer(v201, v186), {
        at: './index.rsh:85:37:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyTransfer',
        who: 'Attacher1'
        });
      stdlib.protect(ctc0, await interact.notifyFailedTransfer(v216, v186), {
        at: './index.rsh:86:43:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyFailedTransfer',
        who: 'Attacher1'
        });
      
      return;
      }}
  else {
    const v291 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v224), null);
    let v292;
    switch (v291[0]) {
      case 'None': {
        const v293 = v291[1];
        v292 = false;
        
        break;
        }
      case 'Some': {
        const v294 = v291[1];
        v292 = true;
        
        break;
        }
      }
    const v298 = v292 ? false : false;
    if (v298) {
      ;
      stdlib.protect(ctc0, await interact.notifyAddition(v209, v201), {
        at: './index.rsh:84:37:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyAddition',
        who: 'Attacher1'
        });
      stdlib.protect(ctc0, await interact.notifyTransfer(v201, v186), {
        at: './index.rsh:85:37:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyTransfer',
        who: 'Attacher1'
        });
      stdlib.protect(ctc0, await interact.notifyFailedTransfer(v216, v186), {
        at: './index.rsh:86:43:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyFailedTransfer',
        who: 'Attacher1'
        });
      
      return;
      }
    else {
      stdlib.protect(ctc0, await interact.notifyAddition(v209, v201), {
        at: './index.rsh:84:37:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyAddition',
        who: 'Attacher1'
        });
      stdlib.protect(ctc0, await interact.notifyTransfer(v201, v186), {
        at: './index.rsh:85:37:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyTransfer',
        who: 'Attacher1'
        });
      stdlib.protect(ctc0, await interact.notifyFailedTransfer(v216, v186), {
        at: './index.rsh:86:43:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyFailedTransfer',
        who: 'Attacher1'
        });
      
      return;
      }}
  
  
  
  
  
  
  
  
  
  };
export async function Attacher2(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Attacher2 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Attacher2 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '16'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc3, ctc3, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v172 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v173 = [v172];
  const v181 = stdlib.protect(ctc2, interact.attacherName, 'for Attacher2\'s interact field attacherName');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc2, ctc3, ctc4],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v185, v186, v187], secs: v189, time: v188, didSend: v33, from: v184 } = txn1;
  const v190 = v173[stdlib.checkedBigNumberify('./index.rsh:40:4:dot', stdlib.UInt_max, '0')];
  const v192 = v190[stdlib.checkedBigNumberify('./index.rsh:40:4:dot', stdlib.UInt_max, '1')];
  const v193 = v190[stdlib.checkedBigNumberify('./index.rsh:40:4:dot', stdlib.UInt_max, '2')];
  const v194 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v192, v193];
  const v195 = stdlib.Array_set(v173, stdlib.checkedBigNumberify('./index.rsh:40:4:dot', stdlib.UInt_max, '0'), v194);
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v201], secs: v203, time: v202, didSend: v45, from: v200 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc5],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v209], secs: v211, time: v210, didSend: v59, from: v208 } = txn3;
  ;
  const v212 = stdlib.addressEq(v200, v208);
  stdlib.assert(v212, {
    at: './index.rsh:54:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Attacher2'
    });
  const txn4 = await (ctc.sendrecv({
    args: [v186, v187, v195, v209, v181],
    evt_cnt: 1,
    funcNum: 3,
    lct: v210,
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:59:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v216], secs: v218, time: v217, didSend: v67, from: v215 } = txn4;
      
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc8, ctc5, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v216], secs: v218, time: v217, didSend: v67, from: v215 } = txn4;
  ;
  stdlib.protect(ctc0, await interact.attachNotification(v216, v185), {
    at: './index.rsh:60:32:application',
    fs: ['at ./index.rsh:60:32:application call to [unknown function] (defined at: ./index.rsh:60:32:function exp)', 'at ./index.rsh:60:32:application call to "liftedInteract" (defined at: ./index.rsh:60:32:application)'],
    msg: 'attachNotification',
    who: 'Attacher2'
    });
  
  const v222 = stdlib.protect(ctc5, await interact.getAddress(), {
    at: './index.rsh:64:51:application',
    fs: ['at ./index.rsh:63:9:application call to [unknown function] (defined at: ./index.rsh:63:13:function exp)'],
    msg: 'getAddress',
    who: 'Attacher2'
    });
  
  const txn5 = await (ctc.sendrecv({
    args: [v186, v187, v195, v209, v215, v222],
    evt_cnt: 1,
    funcNum: 4,
    lct: v217,
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:66:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v224], secs: v226, time: v225, didSend: v81, from: v223 } = txn5;
      
      ;
      await stdlib.simMapSet(sim_r, 0, v209, null);
      const v233 = v195[stdlib.checkedBigNumberify('./index.rsh:73:52:application', stdlib.UInt_max, '0')];
      const v234 = v233[stdlib.checkedBigNumberify('./index.rsh:73:52:application', stdlib.UInt_max, '0')];
      const v235 = stdlib.gt(v234, v186);
      if (v235) {
        const v242 = stdlib.sub(v234, v186);
        const v245 = v233[stdlib.checkedBigNumberify('./index.rsh:76:32:application', stdlib.UInt_max, '1')];
        const v246 = v233[stdlib.checkedBigNumberify('./index.rsh:76:32:application', stdlib.UInt_max, '2')];
        const v247 = [v242, v245, v246];
        const v248 = stdlib.Array_set(v195, stdlib.checkedBigNumberify('./index.rsh:76:32:application', stdlib.UInt_max, '0'), v247);
        sim_r.txns.push({
          kind: 'from',
          to: v209,
          tok: v187
          });
        const v249 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v224), null);
        let v250;
        switch (v249[0]) {
          case 'None': {
            const v251 = v249[1];
            v250 = false;
            
            break;
            }
          case 'Some': {
            const v252 = v249[1];
            v250 = true;
            
            break;
            }
          }
        const v253 = v248[stdlib.checkedBigNumberify('./index.rsh:73:52:application', stdlib.UInt_max, '0')];
        const v254 = v253[stdlib.checkedBigNumberify('./index.rsh:73:52:application', stdlib.UInt_max, '0')];
        const v255 = stdlib.gt(v254, v186);
        const v256 = v250 ? v255 : false;
        if (v256) {
          sim_r.txns.push({
            kind: 'from',
            to: v224,
            tok: v187
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v187
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          sim_r.txns.push({
            kind: 'halt',
            tok: v187
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      else {
        const v291 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v224), null);
        let v292;
        switch (v291[0]) {
          case 'None': {
            const v293 = v291[1];
            v292 = false;
            
            break;
            }
          case 'Some': {
            const v294 = v291[1];
            v292 = true;
            
            break;
            }
          }
        const v298 = v292 ? false : false;
        if (v298) {
          sim_r.txns.push({
            kind: 'from',
            to: v224,
            tok: v187
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v187
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          sim_r.txns.push({
            kind: 'halt',
            tok: v187
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc8, ctc5, ctc5, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v224], secs: v226, time: v225, didSend: v81, from: v223 } = txn5;
  ;
  const v227 = stdlib.addressEq(v215, v223);
  stdlib.assert(v227, {
    at: './index.rsh:66:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Attacher2'
    });
  await stdlib.mapSet(map0, v209, null);
  const v233 = v195[stdlib.checkedBigNumberify('./index.rsh:73:52:application', stdlib.UInt_max, '0')];
  const v234 = v233[stdlib.checkedBigNumberify('./index.rsh:73:52:application', stdlib.UInt_max, '0')];
  const v235 = stdlib.gt(v234, v186);
  if (v235) {
    const v242 = stdlib.sub(v234, v186);
    const v245 = v233[stdlib.checkedBigNumberify('./index.rsh:76:32:application', stdlib.UInt_max, '1')];
    const v246 = v233[stdlib.checkedBigNumberify('./index.rsh:76:32:application', stdlib.UInt_max, '2')];
    const v247 = [v242, v245, v246];
    const v248 = stdlib.Array_set(v195, stdlib.checkedBigNumberify('./index.rsh:76:32:application', stdlib.UInt_max, '0'), v247);
    ;
    const v249 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v224), null);
    let v250;
    switch (v249[0]) {
      case 'None': {
        const v251 = v249[1];
        v250 = false;
        
        break;
        }
      case 'Some': {
        const v252 = v249[1];
        v250 = true;
        
        break;
        }
      }
    const v253 = v248[stdlib.checkedBigNumberify('./index.rsh:73:52:application', stdlib.UInt_max, '0')];
    const v254 = v253[stdlib.checkedBigNumberify('./index.rsh:73:52:application', stdlib.UInt_max, '0')];
    const v255 = stdlib.gt(v254, v186);
    const v256 = v250 ? v255 : false;
    if (v256) {
      ;
      stdlib.protect(ctc0, await interact.notifyAddition(v209, v201), {
        at: './index.rsh:84:37:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyAddition',
        who: 'Attacher2'
        });
      stdlib.protect(ctc0, await interact.notifyTransfer(v201, v186), {
        at: './index.rsh:85:37:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyTransfer',
        who: 'Attacher2'
        });
      stdlib.protect(ctc0, await interact.notifyFailedTransfer(v216, v186), {
        at: './index.rsh:86:43:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyFailedTransfer',
        who: 'Attacher2'
        });
      
      return;
      }
    else {
      stdlib.protect(ctc0, await interact.notifyAddition(v209, v201), {
        at: './index.rsh:84:37:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyAddition',
        who: 'Attacher2'
        });
      stdlib.protect(ctc0, await interact.notifyTransfer(v201, v186), {
        at: './index.rsh:85:37:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyTransfer',
        who: 'Attacher2'
        });
      stdlib.protect(ctc0, await interact.notifyFailedTransfer(v216, v186), {
        at: './index.rsh:86:43:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyFailedTransfer',
        who: 'Attacher2'
        });
      
      return;
      }}
  else {
    const v291 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v224), null);
    let v292;
    switch (v291[0]) {
      case 'None': {
        const v293 = v291[1];
        v292 = false;
        
        break;
        }
      case 'Some': {
        const v294 = v291[1];
        v292 = true;
        
        break;
        }
      }
    const v298 = v292 ? false : false;
    if (v298) {
      ;
      stdlib.protect(ctc0, await interact.notifyAddition(v209, v201), {
        at: './index.rsh:84:37:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyAddition',
        who: 'Attacher2'
        });
      stdlib.protect(ctc0, await interact.notifyTransfer(v201, v186), {
        at: './index.rsh:85:37:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyTransfer',
        who: 'Attacher2'
        });
      stdlib.protect(ctc0, await interact.notifyFailedTransfer(v216, v186), {
        at: './index.rsh:86:43:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyFailedTransfer',
        who: 'Attacher2'
        });
      
      return;
      }
    else {
      stdlib.protect(ctc0, await interact.notifyAddition(v209, v201), {
        at: './index.rsh:84:37:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyAddition',
        who: 'Attacher2'
        });
      stdlib.protect(ctc0, await interact.notifyTransfer(v201, v186), {
        at: './index.rsh:85:37:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyTransfer',
        who: 'Attacher2'
        });
      stdlib.protect(ctc0, await interact.notifyFailedTransfer(v216, v186), {
        at: './index.rsh:86:43:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyFailedTransfer',
        who: 'Attacher2'
        });
      
      return;
      }}
  
  
  
  
  
  
  
  
  
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
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '16'));
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Address;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v172 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v173 = [v172];
  const v177 = stdlib.protect(ctc2, interact.ammount, 'for Deployer\'s interact field ammount');
  const v178 = stdlib.protect(ctc3, interact.deployerName, 'for Deployer\'s interact field deployerName');
  const v179 = stdlib.protect(ctc4, interact.token, 'for Deployer\'s interact field token');
  
  const txn1 = await (ctc.sendrecv({
    args: [v178, v177, v179],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:40:4:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc2, ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:40:4:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v185, v186, v187], secs: v189, time: v188, didSend: v33, from: v184 } = txn1;
      
      const v190 = v173[stdlib.checkedBigNumberify('./index.rsh:40:4:dot', stdlib.UInt_max, '0')];
      const v192 = v190[stdlib.checkedBigNumberify('./index.rsh:40:4:dot', stdlib.UInt_max, '1')];
      const v193 = v190[stdlib.checkedBigNumberify('./index.rsh:40:4:dot', stdlib.UInt_max, '2')];
      const v194 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v192, v193];
      const v195 = stdlib.Array_set(v173, stdlib.checkedBigNumberify('./index.rsh:40:4:dot', stdlib.UInt_max, '0'), v194);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v187
        });
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc2, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v185, v186, v187], secs: v189, time: v188, didSend: v33, from: v184 } = txn1;
  const v190 = v173[stdlib.checkedBigNumberify('./index.rsh:40:4:dot', stdlib.UInt_max, '0')];
  const v192 = v190[stdlib.checkedBigNumberify('./index.rsh:40:4:dot', stdlib.UInt_max, '1')];
  const v193 = v190[stdlib.checkedBigNumberify('./index.rsh:40:4:dot', stdlib.UInt_max, '2')];
  const v194 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v192, v193];
  const v195 = stdlib.Array_set(v173, stdlib.checkedBigNumberify('./index.rsh:40:4:dot', stdlib.UInt_max, '0'), v194);
  ;
  ;
  stdlib.protect(ctc0, await interact.deployNotification(v185), {
    at: './index.rsh:41:31:application',
    fs: ['at ./index.rsh:41:31:application call to [unknown function] (defined at: ./index.rsh:41:31:function exp)', 'at ./index.rsh:41:31:application call to "liftedInteract" (defined at: ./index.rsh:41:31:application)'],
    msg: 'deployNotification',
    who: 'Deployer'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v201], secs: v203, time: v202, didSend: v45, from: v200 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc5],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v209], secs: v211, time: v210, didSend: v59, from: v208 } = txn3;
  ;
  const v212 = stdlib.addressEq(v200, v208);
  stdlib.assert(v212, {
    at: './index.rsh:54:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v216], secs: v218, time: v217, didSend: v67, from: v215 } = txn4;
  ;
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 4,
    out_tys: [ctc5],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v224], secs: v226, time: v225, didSend: v81, from: v223 } = txn5;
  ;
  const v227 = stdlib.addressEq(v215, v223);
  stdlib.assert(v227, {
    at: './index.rsh:66:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  await stdlib.mapSet(map0, v209, null);
  const v233 = v195[stdlib.checkedBigNumberify('./index.rsh:73:52:application', stdlib.UInt_max, '0')];
  const v234 = v233[stdlib.checkedBigNumberify('./index.rsh:73:52:application', stdlib.UInt_max, '0')];
  const v235 = stdlib.gt(v234, v186);
  if (v235) {
    const v242 = stdlib.sub(v234, v186);
    const v245 = v233[stdlib.checkedBigNumberify('./index.rsh:76:32:application', stdlib.UInt_max, '1')];
    const v246 = v233[stdlib.checkedBigNumberify('./index.rsh:76:32:application', stdlib.UInt_max, '2')];
    const v247 = [v242, v245, v246];
    const v248 = stdlib.Array_set(v195, stdlib.checkedBigNumberify('./index.rsh:76:32:application', stdlib.UInt_max, '0'), v247);
    ;
    const v249 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v224), null);
    let v250;
    switch (v249[0]) {
      case 'None': {
        const v251 = v249[1];
        v250 = false;
        
        break;
        }
      case 'Some': {
        const v252 = v249[1];
        v250 = true;
        
        break;
        }
      }
    const v253 = v248[stdlib.checkedBigNumberify('./index.rsh:73:52:application', stdlib.UInt_max, '0')];
    const v254 = v253[stdlib.checkedBigNumberify('./index.rsh:73:52:application', stdlib.UInt_max, '0')];
    const v255 = stdlib.gt(v254, v186);
    const v256 = v250 ? v255 : false;
    if (v256) {
      ;
      stdlib.protect(ctc0, await interact.notifyAddition(v209, v201), {
        at: './index.rsh:84:37:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyAddition',
        who: 'Deployer'
        });
      stdlib.protect(ctc0, await interact.notifyTransfer(v201, v186), {
        at: './index.rsh:85:37:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyTransfer',
        who: 'Deployer'
        });
      stdlib.protect(ctc0, await interact.notifyFailedTransfer(v216, v186), {
        at: './index.rsh:86:43:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyFailedTransfer',
        who: 'Deployer'
        });
      
      return;
      }
    else {
      stdlib.protect(ctc0, await interact.notifyAddition(v209, v201), {
        at: './index.rsh:84:37:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyAddition',
        who: 'Deployer'
        });
      stdlib.protect(ctc0, await interact.notifyTransfer(v201, v186), {
        at: './index.rsh:85:37:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyTransfer',
        who: 'Deployer'
        });
      stdlib.protect(ctc0, await interact.notifyFailedTransfer(v216, v186), {
        at: './index.rsh:86:43:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyFailedTransfer',
        who: 'Deployer'
        });
      
      return;
      }}
  else {
    const v291 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v224), null);
    let v292;
    switch (v291[0]) {
      case 'None': {
        const v293 = v291[1];
        v292 = false;
        
        break;
        }
      case 'Some': {
        const v294 = v291[1];
        v292 = true;
        
        break;
        }
      }
    const v298 = v292 ? false : false;
    if (v298) {
      ;
      stdlib.protect(ctc0, await interact.notifyAddition(v209, v201), {
        at: './index.rsh:84:37:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyAddition',
        who: 'Deployer'
        });
      stdlib.protect(ctc0, await interact.notifyTransfer(v201, v186), {
        at: './index.rsh:85:37:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyTransfer',
        who: 'Deployer'
        });
      stdlib.protect(ctc0, await interact.notifyFailedTransfer(v216, v186), {
        at: './index.rsh:86:43:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyFailedTransfer',
        who: 'Deployer'
        });
      
      return;
      }
    else {
      stdlib.protect(ctc0, await interact.notifyAddition(v209, v201), {
        at: './index.rsh:84:37:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyAddition',
        who: 'Deployer'
        });
      stdlib.protect(ctc0, await interact.notifyTransfer(v201, v186), {
        at: './index.rsh:85:37:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyTransfer',
        who: 'Deployer'
        });
      stdlib.protect(ctc0, await interact.notifyFailedTransfer(v216, v186), {
        at: './index.rsh:86:43:application',
        fs: ['at ./index.rsh:83:6:application call to [unknown function] (defined at: ./index.rsh:83:23:function exp)'],
        msg: 'notifyFailedTransfer',
        who: 'Deployer'
        });
      
      return;
      }}
  
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAHAAEECAIDoI0GJgIBAAAiNQAxGEEDlSlkSSJbNQElWzUCMRkjEkEACDEAKChmQgNkNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBAxAAiNJIQUMQAG+SSQMQAFcJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUoiWzX/JVs1/lcQETX9VyEgNfxJNQU1+4AEtwG2hzT7ULA0A1dBIDEAEkQ0/CiAAQFmNP1XABFJNfoiW0k1+TT/DUEAlbEisgE0/7ISJLIQNPyyFDT+shGzNPuIAvJJNfciVUAABiI1+EIABiM1+EIAADT4NPk0/wkWNPpXCAhQNPpXEAFQVwARIls0/w0QQQAusSKyATT/shIkshA0+7IUNP6yEbOxIrIBIrISJLIQMgmyFTIKshQ0/rIRs0ICIrEisgEishIkshAyCbIVMgqyFDT+shGzQgIINPuIAnFJNfciVUAABiI1+EIABiM1+EIAADT4FCIQQQAusSKyATT/shIkshA0+7IUNP6yEbOxIrIBIrISJLIQMgmyFTIKshQ0/rIRs0IBubEisgEishIkshAyCbIVMgqyFDT+shGzQgGfSCEFNAESRDQESSISTDQCEhFEKGRJNQNJSiJbNf8lWzX+VxARNf1XISA1/Ek1BTX7gAQylKAVNPtQsDT/FjT+FlA0/VA0/FAxAFAoSwFXAGFnSCQ1ATIGNQJCAV9IIQQ0ARJENARJIhJMNAISEUQoZEk1A0lJIls1/yVbNf5XEBE1/Uk1BTX8gAQ3nYLBNPxQsDQDVyEgMQASRDT/FjT+FlA0/VA0/FAoSwFXAEFnSCEFNQEyBjUCQgEBSSMMQABUSCM0ARJENARJIhJMNAISEUQoZEk1A0lJIls1/yVbNf5XEBE1/Uk1BTX8gARJNIKiNPxQsDT/FjT+FlA0/VAxAFAoSwFXAEFnSCEENQEyBjUCQgCnSCEGiAEAIjQBEkQ0BEkiEkw0AhIRREk1BUlJVwAQNf+BEFs1/oEYWzX9gASD7AmmNP9QNP4WUDT9FlCwgRGvSTX8VwARNfslrzT7VwgIUDT7VxABUDX6IQaIAKqxIrIBIrISJLIQMgqyFDT9shGzNP4WNP0WUDT6UChLAVcAIWdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhBDE1EkQiMTYSRCMxNxJEIjUBIjUCQv+uSTEYYUAAA0goiShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 97,
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
                    "internalType": "bytes16",
                    "name": "elem0",
                    "type": "bytes16"
                  }
                ],
                "internalType": "struct T4",
                "name": "v185",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v186",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v187",
                "type": "address"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
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
                    "internalType": "bytes16",
                    "name": "elem0",
                    "type": "bytes16"
                  }
                ],
                "internalType": "struct T4",
                "name": "v185",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v186",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v187",
                "type": "address"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
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
                    "internalType": "bytes16",
                    "name": "elem0",
                    "type": "bytes16"
                  }
                ],
                "internalType": "struct T4",
                "name": "v201",
                "type": "tuple"
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
                "name": "v209",
                "type": "address"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
                    "internalType": "bytes16",
                    "name": "elem0",
                    "type": "bytes16"
                  }
                ],
                "internalType": "struct T4",
                "name": "v216",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
                "name": "v224",
                "type": "address"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
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
                    "internalType": "bytes16",
                    "name": "elem0",
                    "type": "bytes16"
                  }
                ],
                "internalType": "struct T4",
                "name": "v201",
                "type": "tuple"
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
                "name": "v209",
                "type": "address"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
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
                    "internalType": "bytes16",
                    "name": "elem0",
                    "type": "bytes16"
                  }
                ],
                "internalType": "struct T4",
                "name": "v216",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
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
                "name": "v224",
                "type": "address"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001a0538038062001a05833981016040819052620000269162000453565b6000805543600355620000386200023f565b604080513381528351602080830191909152808501518051516001600160801b031916838501529081015160608301528201516001600160a01b0316608082015290517fbcf577dd37862a732eb4032ab7e88b6fbb05aafdd5df6b8a32d6b5cb4103ac249181900360a00190a18051600090819052815160209081018290528251604090810183905283518285018051919091528185018051859052815151840151815190940193909352805151820151835190151592019190915251905162000103929062000192565b6060820152620001163415600762000215565b62000120620002a6565b602080840180518201518352516040908101516001600160a01b0316838301526060840151818401526001600081905543905551620001629183910162000525565b6040516020818303038152906040526002908051906020019062000188929190620002c7565b50505050620005f5565b6200019c62000356565b60005b6001811015620001f257848160018110620001be57620001be6200050f565b6020020151828260018110620001d857620001d86200050f565b602002015280620001e9816200058e565b9150506200019f565b50818184600181106200020957620002096200050f565b60200201529392505050565b816200023b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160e0810190915260006080820181815260a0830182905260c08301919091528152602081016200027262000356565b81526040805160608101825260008082526020828101829052928201529101908152602001620002a162000356565b905290565b6040805160608101825260008082526020820152908101620002a162000356565b828054620002d590620005b8565b90600052602060002090601f016020900481019282620002f9576000855562000344565b82601f106200031457805160ff191683800117855562000344565b8280016001018555821562000344579182015b828111156200034457825182559160200191906001019062000327565b5062000352929150620003a3565b5090565b60405180602001604052806001905b6200038c604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620003655790505090565b5b80821115620003525760008155600101620003a4565b604080519081016001600160401b0381118282101715620003eb57634e487b7160e01b600052604160045260246000fd5b60405290565b604051606081016001600160401b0381118282101715620003eb57634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b0381118282101715620003eb57634e487b7160e01b600052604160045260246000fd5b600081830360808112156200046757600080fd5b62000471620003ba565b83518152601f198201915060608212156200048b57600080fd5b62000495620003f1565b6020831215620004a457600080fd5b620004ae62000422565b60208601519093506001600160801b031981168114620004cd57600080fd5b8352918252604084015160208301526060840151916001600160a01b0383168314620004f857600080fd5b604081019290925260208101919091529392505050565b634e487b7160e01b600052603260045260246000fd5b815181526020808301516001600160a01b03168183015260408084015160a0840192919081850160005b600181101562000583578251805183528581015186840152840151151584830152918401916060909101906001016200054f565b505050505092915050565b6000600019821415620005b157634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c90821680620005cd57607f821691505b60208210811415620005ef57634e487b7160e01b600052602260045260246000fd5b50919050565b61140080620006056000396000f3fe6080604052600436106100795760003560e01c8063832307571161004b57806383230757146100f95780638cd3c7551461010e578063ab53f2c614610121578063ec3e7ac81461014457005b8063192bebac146100825780631e93b0f1146100955780633bc5b7bf146100b957806356eddbfb146100e657005b3661008057005b005b610080610090366004610e12565b610157565b3480156100a157600080fd5b506003545b6040519081526020015b60405180910390f35b3480156100c557600080fd5b506100d96100d4366004610e43565b61048b565b6040516100b09190610e76565b6100806100f4366004610e12565b6104a2565b34801561010557600080fd5b506001546100a6565b61008061011c366004610e12565b61065b565b34801561012d57600080fd5b506101366107b4565b6040516100b0929190610ee9565b610080610152366004610e12565b610851565b61016760046000541460146109bc565b6101818135158061017a57506001548235145b60156109bc565b60008080556002805461019390610f23565b80601f01602080910402602001604051908101604052809291908181526020018280546101bf90610f23565b801561020c5780601f106101e15761010080835404028352916020019161020c565b820191906000526020600020905b8154815290600101906020018083116101ef57829003601f168201915b5050505050806020019051810190610224919061104a565b905061022e610c45565b7f7f0349471693910a3483f52c74bdb82b47c51d664ba33067e7840f3e6350441f338460405161025f929190611100565b60405180910390a1610273341560126109bc565b608082015161028e906001600160a01b0316331460136109bc565b6060820180516001600160a01b03908116600090815260046020526040808220805460ff1916600117905592519091168152819020805462ff00001916905582519083015151511115610408578151604083015151516102ee9190611149565b8151526040828101805151602090810151845182015290515182015183519015159201919091528201516060830151835161032a9291906109e6565b600061034461033f6040860160208701610e43565b6109fa565b51600181111561035657610356610e60565b1415610368576000602082015261039d565b600161037d61033f6040860160208701610e43565b51600181111561038f5761038f610e60565b141561039d57600160208201525b80602001516103ad5760006103c7565b8151604083015182516103c39190600090610abe565b5151115b156103ed576020808301516103ed916103e69060408701908701610e43565b84516109e6565b6000808055600181905561040390600290610c7f565b505050565b600061041d61033f6040860160208701610e43565b51600181111561042f5761042f610e60565b14156104415760006040820152610476565b600161045661033f6040860160208701610e43565b51600181111561046857610468610e60565b141561047657600160408201525b80604001516104865760006103c7565b6103ed565b610493610cbc565b61049c826109fa565b92915050565b6104b2600260005414600d6109bc565b6104cc813515806104c557506001548235145b600e6109bc565b6000808055600280546104de90610f23565b80601f016020809104026020016040519081016040528092919081815260200182805461050a90610f23565b80156105575780601f1061052c57610100808354040283529160200191610557565b820191906000526020600020905b81548152906001019060200180831161053a57829003601f168201915b505050505080602001905181019061056f91906111e1565b90507f3275e11473974a8d7984f8c42072cfc3d51a905918cc1d978f1596c7113eeddc33836040516105a2929190611100565b60405180910390a16105b63415600b6109bc565b60608101516105d1906001600160a01b03163314600c6109bc565b6105d9610ccf565b815181526020808301516001600160a01b0316818301526040808401518184015261060991908501908501610e43565b6001600160a01b03166060820152600360005543600155604051610631908290602001611279565b60405160208183030381529060405260029080519060200190610655929190610cfb565b50505050565b61066b60016000541460096109bc565b6106858135158061067e57506001548235145b600a6109bc565b60008080556002805461069790610f23565b80601f01602080910402602001604051908101604052809291908181526020018280546106c390610f23565b80156107105780601f106106e557610100808354040283529160200191610710565b820191906000526020600020905b8154815290600101906020018083116106f357829003601f168201915b50505050508060200190518101906107289190611287565b90507fab902d717709cef919611233c0e5cf1c607b6b774bffdf853730eedc377b0b86338360405161075b929190611306565b60405180910390a161076f341560086109bc565b610777610ccf565b815181526020808301516001600160a01b031681830152604080840151818401523360608401526002600055436001555161063191839101611279565b6000606060005460028080546107c990610f23565b80601f01602080910402602001604051908101604052809291908181526020018280546107f590610f23565b80156108425780601f1061081757610100808354040283529160200191610842565b820191906000526020600020905b81548152906001019060200180831161082557829003601f168201915b50505050509050915091509091565b61086160036000541460106109bc565b61087b8135158061087457506001548235145b60116109bc565b60008080556002805461088d90610f23565b80601f01602080910402602001604051908101604052809291908181526020018280546108b990610f23565b80156109065780601f106108db57610100808354040283529160200191610906565b820191906000526020600020905b8154815290600101906020018083116108e957829003601f168201915b505050505080602001905181019061091e91906111e1565b90507fb8511cd6381011db6f462cc1e904563c6c3c5cd6341455cc0f99aedd9c7734523383604051610951929190611306565b60405180910390a16109653415600f6109bc565b61096d610d7f565b815181526020808301516001600160a01b039081168284015260408085015181850152606080860151909216918401919091523360808401526004600055436001555161063191839101611323565b816109e25760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6109f1838383610b32565b61040357600080fd5b610a02610cbc565b60016001600160a01b03831660009081526004602052604090205460ff166001811115610a3157610a31610e60565b1415610aae576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610a7257610a72610e60565b6001811115610a8357610a83610e60565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b610ac6610d9a565b60005b6001811015610b1257848160018110610ae457610ae461111d565b6020020151828260018110610afb57610afb61111d565b602002015280610b0a81611378565b915050610ac9565b5081818460018110610b2657610b2661111d565b60200201529392505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610b9191611393565b60006040518083038185875af1925050503d8060008114610bce576040519150601f19603f3d011682016040523d82523d6000602084013e610bd3565b606091505b5091509150610be482826002610c03565b5080806020019051810190610bf991906113af565b9695505050505050565b60608315610c12575081610c3e565b825115610c225782518084602001fd5b60405163100960cb60e01b8152600481018390526024016109d9565b9392505050565b6040805160c081019091526000606082018181526080830182905260a083019190915281905b815260006020820181905260409091015290565b508054610c8b90610f23565b6000825580601f10610c9b575050565b601f016020900490600052602060002090810190610cb99190610de5565b50565b6040805160608101909152806000610c6b565b6040805160808101825260008082526020820152908101610cee610d9a565b8152600060209091015290565b828054610d0790610f23565b90600052602060002090601f016020900481019282610d295760008555610d6f565b82601f10610d4257805160ff1916838001178555610d6f565b82800160010185558215610d6f579182015b82811115610d6f578251825591602001919060010190610d54565b50610d7b929150610de5565b5090565b6040805160a08101825260008082526020820152908101610c6b5b60405180602001604052806001905b610dcf604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081610da95790505090565b5b80821115610d7b5760008155600101610de6565b600060408284031215610e0c57600080fd5b50919050565b600060408284031215610e2457600080fd5b610c3e8383610dfa565b6001600160a01b0381168114610cb957600080fd5b600060208284031215610e5557600080fd5b8135610c3e81610e2e565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110610e9b57634e487b7160e01b600052602160045260246000fd5b8083525060208301511515602083015260408301511515604083015292915050565b60005b83811015610ed8578181015183820152602001610ec0565b838111156106555750506000910152565b8281526040602082015260008251806040840152610f0e816060850160208701610ebd565b601f01601f1916919091016060019392505050565b600181811c90821680610f3757607f821691505b60208210811415610e0c57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715610f9157610f91610f58565b60405290565b80518015158114610ab957600080fd5b600082601f830112610fb857600080fd5b60408051602080820182811067ffffffffffffffff82111715610fdd57610fdd610f58565b835281606086810188811115610ff257600080fd5b875b8181101561103c5782818b03121561100c5760008081fd5b611014610f6e565b81518152858201518682015261102b888301610f97565b818901528452928401928201610ff4565b509398975050505050505050565b600060e0828403121561105c57600080fd5b60405160a0810181811067ffffffffffffffff8211171561107f5761107f610f58565b60405282518152602083015161109481610e2e565b60208201526110a68460408501610fa7565b604082015260a08301516110b981610e2e565b606082015260c08301516110cc81610e2e565b60808201529392505050565b8035825260208101356110ea81610e2e565b6001600160a01b03166020929092019190915250565b6001600160a01b038316815260608101610c3e60208301846110d8565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008282101561115b5761115b611133565b500390565b600060c0828403121561117257600080fd5b6040516080810181811067ffffffffffffffff8211171561119557611195610f58565b80604052508091508251815260208301516111af81610e2e565b60208201526111c18460408501610fa7565b604082015260a08301516111d481610e2e565b6060919091015292915050565b600060c082840312156111f357600080fd5b610c3e8383611160565b8060005b6001811015610655578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101611201565b80518252602081015160018060a01b0380821660208501526040830151915061126760408501836111fd565b8060608401511660a085015250505050565b60c0810161049c828461123b565b600060a0828403121561129957600080fd5b6112a1610f6e565b8251815260208301516112b381610e2e565b60208201526112c58460408501610fa7565b60408201529392505050565b8035825260208101356fffffffffffffffffffffffffffffffff1981168082146112fa57600080fd5b80602085015250505050565b6001600160a01b038316815260608101610c3e60208301846112d1565b815181526020808301516001600160a01b039081169183019190915260408084015160e08401929091611358908501836111fd565b8060608601511660a08501528060808601511660c0850152505092915050565b600060001982141561138c5761138c611133565b5060010190565b600082516113a5818460208701610ebd565b9190910192915050565b6000602082840312156113c157600080fd5b610c3e82610f9756fea2646970667358221220c677781b28cac8f31a1a95e0c97bff5f7c99adf26e11fffa1ac00b22992aa74764736f6c634300080c0033`,
  BytecodeLen: 6661,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:42:10:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:49:10:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:55:10:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:61:10:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:81:10:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:81:10:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:81:10:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:81:10:after expr stmt semicolon',
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
  "Attacher1": Attacher1,
  "Attacher2": Attacher2,
  "Deployer": Deployer
  };
export const _APIs = {
  };
