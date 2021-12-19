import React, { useState, useEffect } from "react";
import "../App.css";

function Fetch() {
  useEffect(() => {
    getData();
  }, []);

  const endpointUrl =
    "https://covid-19-data.p.rapidapi.com/country/code?code=nl";
  const rapidApiHost = "covid-19-data.p.rapidapi.com";
  const rapidApiKey = "5662818d8amsh9cf7508a9179565p1f979fjsn215cb579d201";
  const options = {
    headers: {
      "x-rapidapi-host": rapidApiHost,
      "x-rapidapi-key": rapidApiKey,
    },
  };

  const getData = () => {
    const data = fetch(endpointUrl, options)
      .then(response => {
        return response.json();
      })
      .then(body => {
        console.log(body);
      })
      .catch(err => {
        console.log(err);
      });
    console.log(data);
  };

  return <div>Fetching something</div>;
}

export default Fetch;
