import { configure } from '@kadira/storybook'

function loadStories() {
  const req = require.context('../../src', true, /.stories.js$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
