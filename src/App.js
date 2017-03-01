import React from 'react'

import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Page = styled.div`
  background: papayawhip;
  width: 100%;
  height: 100%;
`

export default () => (
  <Page>
    <Title>Hacks – React!</Title>
  </Page>
)
