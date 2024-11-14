import {useState} from 'react'
function App(){
  const [city,changeCity] = useState('');
  const [cityData,updateCityData]= useState({});
  const fetchData =async()=>{
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7aee35e132691031e15ed04f1df57ccd&units=metric`);
    const jsonData =  await data.json();
    // console.log(jsonData);
    updateCityData(jsonData);
  }

  return(
    <>
    <input placeholder='enter your city' onChange={(e)=>{changeCity(e.target.value)}} />
    <button onClick={()=>{fetchData()}}>Submit</button>
    {
      cityData.main&&
      <>
         <p>Temperature:{cityData.main.temp}</p>
         <p>Humidity:{cityData.main.humidity}</p>
         <p>Windspeed:{cityData.wind.speed}</p>
      </>
    }
   
    </>
  )

}
export default App;