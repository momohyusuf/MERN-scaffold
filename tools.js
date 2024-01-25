import path from 'node:path';

console.log(path.resolve('applications/frontend'));

import globalModules from 'global-modules';

const packageName = 'scalfold-fullstackapp'; // Replace with the name of your global package

const packageDirectory = path.join(globalModules, packageName);

console.log(
  `The directory of the global package '${packageName}' is: ${packageDirectory}`
);
