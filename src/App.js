import "./App.css";
import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

function App() {
  const [search, setSearch] = useState("Allahabad");
  const [temp, setempData] = useState("");
  const [isDayMode, setIsDayMode] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState(
    "https://img.freepik.com/free-photo/beautiful-sunset-sky_74190-2036.jpg?w=1060&t=st=1687294439~exp=1687295039~hmac=f118e76ee37701bb5861778b2de7f3da596fd282af7bb974925d7e548e06fa6a"
  );

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7348430ee1msh0c4c2080227d37cp103d08jsncd53573b7d37",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  useEffect(() => {
    if (search === "") {
      fetch(
        `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Allahabad`,
        options
      )
        .then((res) => res.json())
        .then((res) => setempData(res.temp));
    } else {
      fetch(
        `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${search}`,
        options
      )
        .then((res) => res.json())
        .then((res) => setempData(res.temp));
    }
  }, [search]);

  function addCity(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  function toggleBackground() {
    setIsDayMode(!isDayMode);
    setBackgroundImage(
      isDayMode
        ? "https://img3.wallspic.com/previews/0/2/5/9/39520/39520-night_sky-clip_art-sky-cartoon-star-x750.jpg"
        : "https://img.freepik.com/free-photo/beautiful-sunset-sky_74190-2036.jpg?w=1060&t=st=1687294439~exp=1687295039~hmac=f118e76ee37701bb5861778b2de7f3da596fd282af7bb974925d7e548e06fa6a"
    );
  }

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="top-div">
        <label class="switch">
          <label class="switch">
            <span class="sun">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g fill="#ffd43b">
                  <circle r="5" cy="12" cx="12"></circle>
                  <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
                </g>
              </svg>
            </span>
            <span class="moon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
              </svg>
            </span>
            <input
              type="checkbox"
              className="input"
              onClick={toggleBackground}
            />

            <span class="slider"></span>
          </label>
        </label>
        <div class="input-container">
          <input onChange={addCity} placeholder="search city" />
        </div>
      </div>

      <div className="display">
        <h4>{search === "" ? "Allahabad" : search}</h4>
        <p>
          {day} /{month} /{year}
        </p>
        <div className="temp">
          <h1>
          {temp || (
  <BeatLoader
    size={10}
    aria-label="Loading Spinner"
    data-testid="loader"
    color="#F24C3D"
    style={{
      display: "inline-block",
    }}
  />
)}

            °C
          </h1>
        </div>
        <h2>Clouds</h2>
      </div>
    </div>
  );
}

export default App;
