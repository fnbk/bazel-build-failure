# promise spawn demo


```
# prerequisites
npm install -g node-gyp-build

# main act
npm install
npm start

```

The reason for the error message is a trailing slash in one of the paths in the PATH variable: `C:\\Users\\flori\\_bazel_flori\\lteuwioz\\external\\nodejs_windows_amd64\\bin\\;"`


Error Message
```
failed! Error: command failed
    at ChildProcess.<anonymous> (C:\repos\fnbk\bazel-build-failure\promise-spawn-demo\node_modules\@npmcli\promise-spawn\index.js:64:27)
    at ChildProcess.emit (node:events:390:28)
    at maybeClose (node:internal/child_process:1064:16)
    at Process.ChildProcess._handle.onexit (node:internal/child_process:301:5) {
  cmd: 'C:\\WINDOWS\\system32\\cmd.exe',
  args: [ '/d', '/s', '/c', 'node-gyp-build' ],
  code: 1,
  signal: null,
  stdout: '',
  stderr: 'The system cannot find the path specified.\r\n'
}
```