# npm.cmd Error

**Given** `@parcel\watcher` as a dependency

**When** executing `<...>/nodejs_windows_amd64/bin/npm.cmd ci`

**Then** the error message `The system cannot find the path specified.` is thrown


The reason is an invalid path in the PATH variable: `C:\\Users\\flori\\_bazel_flori\\lteuwioz\\external\\nodejs_windows_amd64\\bin\\;` (notice the trailing slashes!) 

**Which part of the software is adding `<...>\\nodejs_windows_amd64\\bin\\;` to the PATH variable?**


```
$ C:/users/flori/_bazel_flori/lteuwioz/external/nodejs_windows_amd64/bin/npm.cmd ci

npm ERR! code 1
npm ERR! path C:\repos\fnbk\bazel-build-failure\node_modules\@parcel\watcher
npm ERR! command failed
npm ERR! command C:\WINDOWS\system32\cmd.exe /d /s /c node-gyp-build
npm ERR! The system cannot find the path specified.
```



# Bazel Build Error

```
# build
bazel build //:all --verbose_failures

# manual build
C:/users/flori/_bazel_flori/lteuwioz/external/nodejs_windows_amd64/bin/npm.cmd ci

# full cleanup
bazel clean --expunge
```

full error message
```
C:\repos\fnbk\bazel-build-failure> bazel build //:all --verbose_failures
Starting local Bazel server and connecting to it...
INFO: Repository npm instantiated at:
  C:/repos/fnbk/bazel-build-failure/WORKSPACE.bazel:43:12: in <toplevel>
  C:/users/flori/_bazel_flori/ylq6oodt/external/build_bazel_rules_nodejs/index.bzl:78:17: in npm_install
Repository rule npm_install defined at:
  C:/users/flori/_bazel_flori/ylq6oodt/external/build_bazel_rules_nodejs/internal/npm_install/npm_install.bzl:805:30: in <toplevel>
ERROR: An error occurred during the fetch of repository 'npm':
   Traceback (most recent call last):
        File "C:/users/flori/_bazel_flori/ylq6oodt/external/build_bazel_rules_nodejs/internal/npm_install/npm_install.bzl", line 782, column 13, in _npm_install_impl
                fail("npm_install failed: %s (%s)" % (result.stdout, result.stderr))
Error in fail: npm_install failed:  (npm ERR! code 1
npm ERR! path C:\Users\flori\_bazel_flori\ylq6oodt\external\npm\_\node_modules\@parcel\watcher
npm ERR! command failed
npm ERR! command C:\WINDOWS\system32\cmd.exe /d /s /c node-gyp-build
npm ERR! The system cannot find the path specified.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\flori\AppData\Local\npm-cache\_logs\2022-10-11T18_02_27_531Z-debug.log
)
ERROR: C:/repos/fnbk/bazel-build-failure/WORKSPACE.bazel:43:12: fetching npm_install rule //external:npm: Traceback (most recent call last):
        File "C:/users/flori/_bazel_flori/ylq6oodt/external/build_bazel_rules_nodejs/internal/npm_install/npm_install.bzl", line 782, column 13, in _npm_install_impl
                fail("npm_install failed: %s (%s)" % (result.stdout, result.stderr))
Error in fail: npm_install failed:  (npm ERR! code 1
npm ERR! path C:\Users\flori\_bazel_flori\ylq6oodt\external\npm\_\node_modules\@parcel\watcher
npm ERR! command failed
npm ERR! command C:\WINDOWS\system32\cmd.exe /d /s /c node-gyp-build
npm ERR! The system cannot find the path specified.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\flori\AppData\Local\npm-cache\_logs\2022-10-11T18_02_27_531Z-debug.log
)
ERROR: Skipping '//:all': while parsing '//:all': no such package '@npm//@angular-devkit/architect-cli': npm_install failed:  (npm ERR! code 1
npm ERR! path C:\Users\flori\_bazel_flori\ylq6oodt\external\npm\_\node_modules\@parcel\watcher
npm ERR! command failed
npm ERR! command C:\WINDOWS\system32\cmd.exe /d /s /c node-gyp-build
npm ERR! The system cannot find the path specified.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\flori\AppData\Local\npm-cache\_logs\2022-10-11T18_02_27_531Z-debug.log
)
WARNING: Target pattern parsing failed.
ERROR: while parsing '//:all': no such package '@npm//@angular-devkit/architect-cli': npm_install failed:  (npm ERR! code 1
npm ERR! path C:\Users\flori\_bazel_flori\ylq6oodt\external\npm\_\node_modules\@parcel\watcher
npm ERR! command failed
npm ERR! command C:\WINDOWS\system32\cmd.exe /d /s /c node-gyp-build
npm ERR! The system cannot find the path specified.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\flori\AppData\Local\npm-cache\_logs\2022-10-11T18_02_27_531Z-debug.log
)
INFO: Elapsed time: 7.627s
INFO: 0 processes.
FAILED: Build did NOT complete successfully (0 packages loaded)
    currently loading:
```

# promise-spawn demonstration 

Demo to demonstrate how a trailing slash in one of the PATH variables causes the error message `The system cannot find the path specified.` 

[promise-spawn-demo/README.md](./promise-spawn-demo/README.md)