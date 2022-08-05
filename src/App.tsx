import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'

export function App() {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button>primary</Button>
      <Button active>active</Button>
      <Button focused>focused</Button>
      <Button disabled>disabled</Button>

      <Checkbox>primary</Checkbox>
      <Checkbox
        onChange={(event) => console.log(event.currentTarget.checked)}
        checked
      >
        checked
      </Checkbox>
      <Checkbox disabled>disabled</Checkbox>
    </div>
  )
}
