import { puppyList } from './data.js'
import { useState } from 'react'
import './App.css'
function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);  

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);

  return (
    <>
    <div className="App">
      <div className='puppyListMani'>
        {
          puppies.map((puppy)=>{
            return <p onClick={() => {
              setFeatPupId(puppy.id)
            }} key={puppy.id}>{puppy.name}</p>
          })
        }
      </div>

      { 
        featPupId && (
          <div className="selectedPuppy">
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
              </ul>
              </div>
        )
      }
    </div>
    </>
  );
}
export default App
