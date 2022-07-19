'reach 0.1';

const commonInteract = {
 notifyAddition: Fun([Address, Bytes(16)], Null),
 notifyTransfer: Fun([Bytes(16), UInt], Null),
 notifyFailedTransfer: Fun([Bytes(16), UInt], Null),
};

const deployerInteract = {
 ...commonInteract,
 deployerName: Bytes(16),
 deployNotification: Fun([Bytes(16)], Null),
 ammount: UInt,
 token: Token,
};

const attacherInteract = {
 ...commonInteract,
 attacherName: Bytes(16),
 attachNotification: Fun([Bytes(16), Bytes(16)], Null),
 getAddress: Fun([], Address),
};

export const main = Reach.App(() => {
 setOptions({ untrustworthyMaps: true });

 const D = Participant('Deployer', deployerInteract);

 const A1 = Participant('Attacher1', attacherInteract);

 const A2 = Participant('Attacher2', attacherInteract);

 init();

 D.only(() => {
  const deployerName = declassify(interact.deployerName);
  const ammount = declassify(interact.ammount);
  const token = declassify(interact.token);
 });
 D.publish(deployerName, ammount, token);
 D.interact.deployNotification(deployerName);
 commit();

 A1.only(() => {
  const attacher1Name = declassify(interact.attacherName);
 });
 A1.publish(attacher1Name);
 A1.interact.attachNotification(attacher1Name, deployerName);
 commit();

 A1.only(() => {
  const addressA1 = declassify(interact.getAddress());
 })
 A1.publish(addressA1)
 commit();
 A2.only(() => {
  const attacher2Name = declassify(interact.attacherName);
 });
 A2.publish(attacher2Name);
 A2.interact.attachNotification(attacher2Name, deployerName);
 commit();

 A2.only(() => {
  const addressA2 = declassify(interact.getAddress());
 })
 A2.publish(addressA2)

 const whiteList = new Set();
  whiteList.insert(addressA1);

  const isInwhitelist = (address) => whiteList.member(address);

  const isSufficientBalance = (tok, amt) => balance(tok) > amt;

  if (isInwhitelist(addressA1) && isSufficientBalance(token, ammount)) {
    transfer(ammount, token).to(addressA1);
  }
  if (isInwhitelist(addressA2) && isSufficientBalance(token, ammount)) {
    transfer(ammount, token).to(addressA2);
  }
 commit();

 each([D, A1, A2], () => {
  declassify(interact.notifyAddition(addressA1, attacher1Name));
  declassify(interact.notifyTransfer(attacher1Name, ammount));
  declassify(interact.notifyFailedTransfer(attacher2Name, ammount));

 });

 exit();
})