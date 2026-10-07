import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const outputDirectory = 'dist'
const basePath = '/Vu-Tran-Portfolio/'
const html = readFileSync(join(outputDirectory, 'index.html'), 'utf8')

assert(
  html.includes(`https://concavu.github.io${basePath}`),
  'The canonical URL must match the GitHub Pages repository path.',
)

const publishedAssets = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
  .map(([, assetPath]) => assetPath)
  .filter((assetPath) => assetPath.startsWith(basePath))

assert(publishedAssets.length >= 3, 'Expected the base-prefixed JS, CSS, and favicon assets.')

for (const assetPath of publishedAssets) {
  const localPath = join(outputDirectory, assetPath.slice(basePath.length))
  assert(existsSync(localPath), `Published asset is missing from dist: ${assetPath}`)
}

const javascriptPath = publishedAssets.find((assetPath) => assetPath.endsWith('.js'))
assert(javascriptPath, 'The production JavaScript bundle is missing.')

const javascript = readFileSync(
  join(outputDirectory, javascriptPath.slice(basePath.length)),
  'utf8',
)

assert(
  javascript.includes(`${basePath}ảnhps.jpg`),
  'The profile photo URL must use the same case-sensitive base path as the site.',
)
assert(existsSync(join(outputDirectory, 'ảnhps.jpg')), 'The profile photo is missing from dist.')

console.log('GitHub Pages paths and published assets are valid.')
