import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import {ask} from '@reach-sh/stdlib';

if (process.argv.length < 3 || ['deployer', 'attacher1', 'attacher2'].includes(process.argv[2]) == false) {
  console.log('Usage: reach run index [deployer|attacher1|attacher2]');
  process.exit(0);
}

const role = process.argv[2];
console.log(`Your role is ${role}`);

const stdlib = loadStdlib(process.env);
console.log(`The consensus network is ${stdlib.connector}.`);

const suStr = stdlib.standardUnit;
const toSu = (au) => stdlib.formatCurrency(au, 4);
const toAu = (su) => stdlib.parseCurrency(su); 

const initialFunds = toAu(1000);
const showBalance = async (acc) => console.log(`Your balance is ${toSu(await stdlib.balanceOf(acc))} ${suStr}.`);

// deployer
const commonInteract = {
 notifyAddition: (address, name) => {
  console.log(`${name}'s Address ${address} has been added to the whitelist`);
 },
 notifyTransfer: (receiver, amt) => {
  console.log(`${receiver} got ${toSu(amt)} SDPAT tokens`);
 }, 
 notifyFailedTransfer: (receiver, amt) => {
  console.log(`The transfer of ${toSu(amt)} SDPAT tokens was unsuccesful! Because the ${receiver} is not in the whitelist.`);
 }

};

if (role === 'deployer') {

  const acc = await stdlib.newTestAccount(initialFunds);
  const ctc = acc.contract(backend);
  const tok = await stdlib.launchToken(acc, 'Super Dope Awesome Token', 'SDPAT', {supply: 1000000});
  
 const deployerInteract = {
  ...commonInteract,
  deployerName: await ask.ask('Please enter your name, or hit Enter for default:', (n) => {
   let name = !n ? 'Alice' : n;
   return name
  }),
  deployNotification: async (name) => {
   console.log(`Hello ${name}`);
   console.log('Deploying.........');
   console.log(`Your contract has been deployed`);
   console.log(`Contract info: ${JSON.stringify((await ctc.getInfo()))}`);
  },
  ammount: await ask.ask('Please input the transfer amount', stdlib.parseCurrency),
  token: tok.id,
 };
 console.log(`Your new token ${tok.name} has been deployed with ticker ${tok.sym}!!!`);
 await ctc.p.Deployer(deployerInteract);
 await showBalance(acc);

} else if (role == 'attacher1') {
 const attacherInteract = {
  ...commonInteract,
  attacherName: await ask.ask('Please enter your name, or hit Enter for default:', (n) => {
   let name = !n ? 'Bob' : n;
   return name
  }),
  attachNotification: (a1Name, dName) => {
   console.log(`Hello ${a1Name}`);
   console.log('Attaching.........');
   console.log(`You have attached to ${dName}'s contract.`);
  },
  getAddress: async () => await acc.getAddress(),
 }

 const acc = await stdlib.newTestAccount(initialFunds);
 const info = await ask.ask('Paste contract info', (c) => JSON.parse(c));
 const ctc = acc.contract(backend, info);
 await showBalance(acc);
 ctc.p.Attacher1(attacherInteract)
} else {
  const attacherInteract = {
  ...commonInteract,
  attacherName: await ask.ask('Please enter your name, or hit Enter for default:', (n) => {
   let name = !n ? 'Pat' : n;
   return name
  }),
  attachNotification: (a2Name, dName) => {
   console.log(`Hello ${a2Name}`);
   console.log('Attaching.........');
   console.log(`You have attached to ${dName}'s contract.`);
  },
  getAddress: async () => await acc.getAddress(),
 }

 const acc = await stdlib.newTestAccount(initialFunds);
 const info = await ask.ask('Paste contract info', (c) => JSON.parse(c));
 const ctc = acc.contract(backend, info);
 await showBalance(acc);
 ctc.p.Attacher2(attacherInteract)
}

ask.done();

