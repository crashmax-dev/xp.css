import React from 'react'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'

export function App() {
  return (
    <React.Fragment>
      <Box>
        <Button>primary</Button>
        <Button active>active</Button>
        <Button focused>focused</Button>
        <Button disabled>disabled</Button>
      </Box>
      <Box>
        <Checkbox.Row>
          <Checkbox>primary</Checkbox>
          <Checkbox
            onChange={(event) => console.log(event.currentTarget.checked)}
            checked
          >
            checked
          </Checkbox>
          <Checkbox disabled>disabled</Checkbox>
        </Checkbox.Row>
      </Box>
      <Box>
        <Checkbox.Row>
          <Checkbox>1</Checkbox>
          <Checkbox>2</Checkbox>
          <Checkbox>3</Checkbox>
        </Checkbox.Row>
      </Box>
    </React.Fragment>
  )
}

interface BoxProps {
  children: React.ReactNode
}

function Box({ children }: BoxProps) {
  return <div id="box">{children}</div>
}
