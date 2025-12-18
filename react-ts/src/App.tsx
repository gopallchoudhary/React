import './App.css'
import Button from './components/Button'
import Input from './components/Input'
import { userCounter } from './contexts/Counter'
import Card from './gpt/Card'
function App() {
  const context = userCounter()
  return (
    <>
      <div>
        {/* <Input />
        <h3 onClick={() => context?.setCount(context.count + 1)}>{context?.count}</h3>
        <Button text='Click Me' style={{
          backgroundColor: 'red',
          padding: "2px, 5px",
          fontSize: "30px",
          color: "red",
          borderRadius: "4px"
        }} /> */}
        <Card name='Gopal' age={24}/>
      </div>
    </>
  )
}

export default App
