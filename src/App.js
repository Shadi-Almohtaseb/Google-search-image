import { CssBaseline } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const URL = `https://google-image-search1.p.rapidapi.com/v2/?q=${searchTerm}&hl=en`;
  useEffect(() => {
    FetchData();
  }, [searchTerm]);

  // useEffect(() => {
  //   return searchTerm = 'spain'
  // }, [])

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "google-image-search1.p.rapidapi.com",
    },
  };

  const FetchData = async () => {
    try {
      const response = await fetch(URL, options);
      const data = await response.json();
      console.log("data:", data);
      setData(data.response.images);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <CssBaseline />
      <Navbar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <Cards data={data} />
    </>
  );
}

export default App;
