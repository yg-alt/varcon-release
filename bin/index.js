#!/usr/bin/env node
import { release, publish, changelog, commitLint } from '../dist/index.js'
import { Command } from 'commander'

const program = new Command()

program
  .command('release')
  .option('-r --remote <remote>', 'Remote name')
  .option('-s --skip-npm-publish', 'Skip npm publish')
  .option('-sc --skip-changelog', 'Skip generate changelog')
  .option('-sgt --skip-git-tag', 'Skip git tag')
  .option('-nt --npm-tag <npmTag>', 'Npm tag')
  .option('-c --check-remote-version', 'Check remote version')
  .description('Release all packages and generate changelogs')
  .action(async (options) => release(options))

program
  .command('publish')
  .option('-c --check-remote-version', 'Check remote version')
  .option('-nt --npm-tag <npmTag>', 'Npm tag')
  .description('Publish to npm')
  .action(async (options) => publish(options))

program
  .command('changelog')
  .option('-rc --releaseCount <releaseCount>', 'Release count')
  .option('-f --file <file>', 'Changelog filename')
  .description('Generate changelog')
  .action(async (options) => changelog(options))

program
  .command('commit-lint')
  .option('-p --commitMessagePath <path>', 'Git commit message path')
  .option('-r --commitMessageRe <reg>', 'Validate the regular of whether the commit message passes')
  .option('-e --errorMessage <message>', 'Validation failed to display error messages')
  .option('-w --warningMessage <message>', 'Validation failed to display warning messages')
  .description('Lint commit message')
  .action(async (option) => commitLint(option))

program.parse()
