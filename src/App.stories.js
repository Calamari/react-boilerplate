import React from 'react'
import { storiesOf } from '@kadira/storybook'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

storiesOf('Title', module)
  .add('its just a title', () => (
    <Title>Bla bla bla…</Title>
  ))
