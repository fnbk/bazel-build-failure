
//
// hello world
//

console.log("START START");


//
//
//

import promiseSpawn from '@npmcli/promise-spawn'

await promiseSpawn('C:\\WINDOWS\\system32\\cmd.exe', [
    "/d",
    "/s",
    "/c",
    "node-gyp-build",
], {
  env: {
    Path: [
      "C:\\Users\\flori\\AppData\\Roaming\\npm;",
      "C:\\Users\\flori\\_bazel_flori\\lteuwioz\\external\\nodejs_windows_amd64\\bin\\;",
    ].join("")
  },
    stdioString: true,
    stdio: 'pipe',
  }, {
  }).then(result => {
    console.log('ok!', result)
  }).catch(er => {
    console.error('failed!', er)
  })


//
//
//

console.log("END END");
