#!/usr/bin/env node

/*
Usage: yarn build [component name...] [options] [lerna options]
  By default, only updated packages will be built.
  All lerna options will be forwarded onto lerna commands.
  Options:
    [component name...]       space separated list of package names to build
    -a, --all                 build all packages
*/

const { spawnSync, exec } = require('child_process')
const { userPackageNames, tdsOptions, lernaOptions } = require('./parseArgs')

const getPackageNames = (callback) => {
  if (userPackageNames.length > 0) {
    callback(userPackageNames)
    return
  }

  const command = tdsOptions.all ? 'ls' : 'updated'

  exec(
    `yarn -s lerna ${command} --json ${lernaOptions.join(' ')}`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`)
        return
      }

      if (stdout === '') {
        console.log('No components have been changed, nothing to do. Exiting.')
        process.exit(0)
      } else {
        const updatedPackages = JSON.parse(stdout)
        const packageNames = updatedPackages.map(
          (packageObject) => packageObject.name
        )

        callback(packageNames)
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`)
      }
    }
  )
}

const arrayToGlob = (arr) => {
  return arr.length === 1 ? arr[0] : `{${arr.join(',')}}`
}

getPackageNames((packageNames) => {
  const scopeGlob = arrayToGlob(packageNames)

  spawnSync(
    'npx',
    ['lerna', 'exec', '--scope', scopeGlob, '--no-private', '--', 'rollup -c'],
    {
      stdio: 'inherit',
    }
  )
  spawnSync(
    'npx',
    ['lerna', 'run', '--scope', scopeGlob, '--no-private', 'build'],
    {
      stdio: 'inherit',
    }
  )
})
