#!/usr/bin/env node

const program = require('commander')
const { spawnSync } = require('child_process')

const path = './node_modules/.bin/'

program.description('Startup scripts for Boilerplate')

const startFront = () => {
  const method = `${path}webpack-dev-server`
  const args = [
    '--mode',
    'development',
    '--config',
    './webpack/webpack.dev.config.js',
    '--open',
    '--hot',
    '--port',
    '8080'
  ]
  const command = `${method} ${args.join(' ')}`
  console.log(`Executing ${command}`)

  return spawnSync(method, args, { stdio: 'inherit' })
}

const startBack = () => {
  const method = 'node'
  const args = ['./server/app.js']
  const command = `${method} ${args.join(' ')}`
  console.log(`Executing ${command}`)

  return spawnSync(method, args, { stdio: 'inherit' })
}

const startMongo = () => {
  const method = 'docker'
  const args = ['container', 'start', 'retrodb']
  const command = `${method} ${args.join(' ')}`
  console.log(`Executing ${command}`)

  return spawnSync(method, args, { stdio: 'inherit' })
}

const openAll = () => {
  const method = `gnome-terminal`
  const args = [
    `--tab`,
    '--title',
    'Retroactive Server',
    `-e`,
    'sh -c "docker container start retrodb; sleep 3; node ./server/app.js; exec bash"',
    '--tab',
    '--title',
    'Retroactive Src',
    `-e`,
    'sh -c "./node_modules/.bin/webpack-dev-server --config ./webpack/webpack.dev.config.js --mode development --open --hot --port 8080; exec bash";'
  ]
  const command = `${method} ${args.join(` `)}`
  console.log(`Executing ${command}`)

  return spawnSync(method, args)
}

const runner = job => {
  if (job.status !== 0) {
    console.log('Failed to run the command')
    process.exit(1)
  }
}

program
  .command('frontend')
  .alias('fe')
  .description('Starts the frontend')
  .action(() => {
    runner(startFront())
  })

program
  .command('backend')
  .alias('be')
  .description('Starts the backend')
  .action(() => {
    runner(startBack())
  })

program
  .command('mongo')
  .alias('db')
  .description('Starts the mongo database')
  .action(() => {
    runner(startMongo())
  })

program
  .command('all')
  .description('Starts Retroactive')
  .action(() => {
    runner(openAll())
  })

program.parse(process.argv)
if (!process.argv.slice(2).length) {
  program.outputHelp()
}
