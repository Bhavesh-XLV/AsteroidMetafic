import "./home.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [num, setNum] = useState("");
  const [id, setID] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=L6AW6ZMaTbURc0Kjh0eEPcbJDQmaqlWDjqVSAiHW"
      )
      .then((res) => {
        setData([res.data]);
      })
      .catch((err) => {
        alert("Please check internet connection");
      });
  }, []);
  console.log(data);
  const generateRandomID = () => {
    let calling_id = Math.floor(Math.random() * 20);
    let id = data[0].near_earth_objects[calling_id].id;
    setID(id);
    getData(id);
  };

  const getID = (num) => {
    let id = +num;
    setID(id);
    getData(id);
  };

  const getData = (id) => {
    console.log(id);
    axios
      .get(
        `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=L6AW6ZMaTbURc0Kjh0eEPcbJDQmaqlWDjqVSAiHW`
      )
      .then((res) => {
        navigate("/asteroidData", { state: res.data });
      })
      .catch(() => {
        alert("please enter valid name");
      });
  };

  return (
    <div className="home">
      <input
        type="number"
        placeholder="Enter Asteroid ID"
        onChange={(e) => setNum(e.target.value)}
      />
      <div className="home">
        <button
          variant="primary"
          onClick={() => getID(num)}
          disabled={num.length === 0 ? true : false}
        >
          Submit
        </button>
        <button
          style={{ marginLeft: "30px" }}
          disabled={data === [] ? true : false}
          onClick={generateRandomID}
        >
          Random Asteroid
        </button>
      </div>
    </div>
  );
};

export default Home;
