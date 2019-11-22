#!/usr/bin/env node

/*
Usage: npm run build [component name...] [options] [lerna options]
  By default, only updated packages will be built.
  All lerna options will be forwarded onto lerna commands.
  Options:
    [component name...]       space separated list of package names to build
    -a, --all                 build all packages
*/

const { spawnSync, exec } = require('child_process')
const { userPackageNames, tdsOptions, lernaOptions } = require('./parseArgs')

const getPackageNames = (callback, forceUpdatedPackages) => {
  if (!forceUpdatedPackages && userPackageNames.length > 0) {
    callback(userPackageNames)
    return
  }

  const command = tdsOptions.all ? 'ls' : 'updated'

  exec(`npx lerna ${command} --json ${lernaOptions.join(' ')}`, (error, stdout) => {
    if (stdout === '') {
      console.log('No components have been changed, nothing to do. Exiting.')
      process.exit(0)
    } else {
      const updatedPackages = JSON.parse(stdout)
      const packageNames = updatedPackages.map(packageObject => packageObject.name)

      callback(packageNames)
    }
  })
}


const arrayToGlob = arr => {
  return arr.length === 1 ? arr[0] : `{${arr.join(',')}}`
}



getPackageNames(packageNames => {
  const scopeGlob = arrayToGlob(packageNames)

  spawnSync(
    'npx',
    [
      'lerna',
      'exec',
      '--scope',
      scopeGlob,
      '--no-private',
      '--',
      'rollup -c',
    ],
    {
      stdio: 'inherit',
    }
  )
  spawnSync('npx', ['lerna', 'run', '--scope', scopeGlob, '--no-private', 'build'], {
    stdio: 'inherit',
  })
})
