import {useEffect, useState} from "react"
import './App.css';
import { mapDistance } from './methods';

function App() {

  const [distance, setDistance] = useState(null)

  useEffect(()=> {
   setDistance(mapDistance({
      lat1:23.760553125947684,
      lon1:90.38927467742258,
      lat2:23.813676977644572,
      lon2:90.42413504023418
    }))
  })

const postRequest = async () => {
  try {
    const response = await fetch('https://care-box-backend.herokuapp.com/api/v1/applicant_test/post_distance', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'APIToken' : 'siamanzir18@gmail.com',
      },
      body: JSON.stringify({distance: distance})
    });
    const content = await response.json();
    console.log(content)
  } catch (error) {
    console.log(error)
  }

}



  return (
    <div className="App">
      <h1>
        {distance && distance}
      </h1>
      <button onClick={postRequest}>
        send data
      </button>
    </div>
  );
}

export default App;
