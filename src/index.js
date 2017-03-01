import React from 'react'
import { render } from 'react-dom'

import 'reset-css/reset.css'
import './css/main.css'

import App from './App'


const load = () => render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./App', load)
}

load()
