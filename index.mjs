import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import {ask} from '@reach-sh/stdlib';

if (process.argv.length < 3 || ['deployer', 'attacher'].includes(process.argv[2]) == false) {
  console.log('Usage: reach run index [deployer|attacher]');
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
 }
};

if (role === 'deployer') {
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
 };

 const acc = await stdlib.newTestAccount(initialFunds);
 await showBalance(acc);
 const ctc = acc.contract(backend);
 await ctc.p.Deployer(deployerInteract);
 await showBalance(acc);

} else {
 const attacherInteract = {
  ...commonInteract,
  attacherName: await ask.ask('Please enter your name, or hit Enter for default:', (n) => {
   let name = !n ? 'Bob' : n;
   return name
  }),
  attachNotification: (aName, dName) => {
   console.log(`Hello ${aName}`);
   console.log('Attaching.........');
   console.log(`You have attached to ${dName}'s contract.`);
  },
  getAddress: async () => await acc.getAddress(),
 }

 const acc = await stdlib.newTestAccount(initialFunds);
 const info = await ask.ask('Paste contract info', (c) => JSON.parse(c));
 const ctc = acc.contract(backend, info);
 await showBalance(acc);
 ctc.p.Attacher(attacherInteract)
};

ask.done();

