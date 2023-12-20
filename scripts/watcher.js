const { spawn } = require('child_process')

const args = process.argv.slice(2)
const buildCommand = ['node', 'scripts/build.js', ...args]

const buildProcess = spawn('yarn', buildCommand, { stdio: 'inherit' })

buildProcess.on('close', (code) => {
  if (code !== 0) {
    console.error(`Build process exited with code ${code}`)
  }
})
