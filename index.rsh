'reach 0.1';

const commonInteract = {
 notifyAddition: Fun([Address, Bytes(12)], Null)
};

const deployerInteract = {
 ...commonInteract,
 deployerName: Bytes(12),
 deployNotification: Fun([Bytes(12)], Null),
};

const attacherInteract = {
 ...commonInteract,
 attacherName: Bytes(12),
 attachNotification: Fun([Bytes(12), Bytes(12)], Null),
 getAddress: Fun([], Address),
};

export const main = Reach.App(() => {
 setOptions({ untrustworthyMaps: true });

 const D = Participant('Deployer', deployerInteract);

 const A = Participant('Attacher', attacherInteract);
 init();

 D.only(() => {
  const deployerName = declassify(interact.deployerName)
 });
 D.publish(deployerName);
 D.interact.deployNotification(deployerName);
 commit();

 A.only(() => {
  const attacherName = declassify(interact.attacherName);
 });
 A.publish(attacherName);
 A.interact.attachNotification(attacherName, deployerName);
 commit();

 A.only(() => {
  const address = declassify(interact.getAddress());
 })
 A.publish(address)
 
 const whiteList = new Set();
 whiteList.insert(address)

 commit();
 each([D, A], () => declassify(interact.notifyAddition(address, attacherName)));

 exit();
})