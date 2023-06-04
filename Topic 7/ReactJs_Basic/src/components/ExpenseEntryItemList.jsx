import React, { useState, useEffect } from "react";
import axios from "axios";

function ExpenseEntryItemList() {
  const [temperatureData, setTemperatureData] = useState([]);
  const [humidityData, setHumidityData] = useState([]);
  const [lightData, setLightData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/data");
        setTemperatureData(response.data.temperature);
        setHumidityData(response.data.humidity);
        setLightData(response.data.light);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Temperature Data</h2>
      <ul>
        {temperatureData.map((data) => (
          <li key={data._id}>
            Timestamp: {data.timestamp}, Value: {data.value}
          </li>
        ))}
      </ul>

      <h2>Humidity Data</h2>
      <ul>
        {humidityData.map((data) => (
          <li key={data._id}>
            Timestamp: {data.timestamp}, Value: {data.value}
          </li>
        ))}
      </ul>

      <h2>Light Data</h2>
      <ul>
        {lightData.map((data) => (
          <li key={data._id}>
            Timestamp: {data.timestamp}, Value: {data.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseEntryItemList;
