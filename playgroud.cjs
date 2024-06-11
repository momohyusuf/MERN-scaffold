const path = require("node:path");

console.log(path.basename(__filename));

// Yes, it is possible to run `npm update` from inside a JavaScript file using the `child_process` module. Here's an example:

// ```javascript
// const { exec } = require('child_process');

// exec('npm update', (err, stdout, stderr) => {
//   if (err) {
//     console.error(`exec error: ${err}`);
//     return;
//   }

//   console.log(`stdout: ${stdout}`);
//   console.error(`stderr: ${stderr}`);
// });
// ```
