
import { useState } from 'react';
import './App.css';
import ListData from './LIstData';
function App() {

  const[inputlist,setinputlist] = useState();
  const[items,setitems] = useState([]);

  const itemEvent = (event)=>{
    setinputlist(event.target.value)
  }

  const additem = ()=>{
   let updateitemlist = [inputlist,...items]
    setitems(updateitemlist)
    setinputlist('');

  }
  const deleteItem =  (id)=>{
        console.log(id)
        setitems(olditem=>{
          return olditem.filter((a,index) => {
            return index !==id;
          })
        })
  }
  return (
    <>
      <div className="main_div">
        <div className='center_div'>
          <br/>
          <h1>ToDo List</h1>
          <br/>
          <input type='text' placeholder='Add a item' value={inputlist} onChange={itemEvent}/>
          <button onClick={additem}>+</button>
          <ol>
            {/* <li>{inputlist}</li> */}
            {items.map((item,index)=>{
                return <ListData data = {item} key= {index} id = {index}onselect = {deleteItem}/>

            })}
            
          </ol>

        </div>
      </div>
    </>
  );
}

export default App;
