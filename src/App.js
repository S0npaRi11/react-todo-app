import {useState} from 'react'
import './App.css';

function App() {

  const [input,setInput] = useState('')
  const [list, setList] = useState([])

  const addItem = () => {
    const task = {
      content: input,
      id: Date.now()
    }
    setList(list.concat(task))
  }

  const removeItem = (id) => {
    setList(list.filter(i => i.id !== id))
  }



  return (
    <>
      <h1> To-do List app </h1>

      <div className='flex flex-row'>
        <input type={'text'}  onChange={ (e) => setInput(e.target.value)} />
        <button onClick={addItem}> Add to list </button>
      </div>

      <div className='list'>
          {list.map(item => (
            <div key={item.id} onClick={() => removeItem(item.id)} style={{border: '1px solid #000', padding: '10px', margin: '10px'}}> {item.content} </div>
          ))}
      </div>
    </>
  );
}

export default App;
