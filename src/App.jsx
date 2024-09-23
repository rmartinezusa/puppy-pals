import { puppyList } from './data.js'
import { useState } from 'react'
function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log("puppyList: ", puppyList);

  return (
    <>
    <div className="App">
      {
        puppies.map((puppy)=>{
          return <p>{puppy.name}</p>
        })
      }
    </div>
    </>
  );
}
  

export default App
