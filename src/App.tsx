import { Button } from './components/Button'

export function App() {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button>primary</Button>
      <Button active>active</Button>
      <Button focused>focused</Button>
      <Button disabled>disabled</Button>
    </div>
  )
}
