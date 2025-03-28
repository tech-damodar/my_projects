import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import "./MainComponent.css";
import MainContainer from "./MainContainer";
import {searchContext} from "../context/Context";

const MainComponent = () => {
  const [searchData, setSearchData] = useState("");
  const [result, setResult] = useState(null);
  const [loading,setLoading] = useState(true);
  const [clicked,setClicked] = useState(false)
  const [showQues,setShowQues] = useState(searchData)
  
  const {history,setHistory} = useContext(searchContext); 
  useEffect(() => {
    // console.log(result);
  }, [result]);

  function inputHandle(event) {
    setSearchData(event.target.value);
    
  }

  function submitHandle(event) {
    setClicked(true)
    setLoading(true)
    setShowQues(searchData)
    fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAApxq-JGj6ZrguhuEpRUZePtO2EIB3FYI", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "contents": [{ "parts": [{ "text": searchData }] }]
      })
    }).then((response) => {
      return response.json();
    }).then((data) => {
      let responce = data.candidates[0].content.parts[0].text;
      const lines = responce.split("**");
      let newResponce = ""; // Initialize properly

      for (let i = 0; i < lines.length; i++) {
        if (i % 2 === 0) {
          newResponce += lines[i]; // Non-bold text
        } else {
          newResponce += "<b>" + lines[i] + "</b>"; // Bold text
        }
      }
      let newResponce2 = newResponce.split("*").join("</br>")
      setResult(newResponce2); // Set the processed response
      setLoading(false)
      setHistory((prev)=>{
        return [...prev,searchData]
      })
      setSearchData("")
    });
  }

  // Split the result into lines for display
  // const lines = result ? result.split('\n') : [];

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} className="icon" alt="User Icon" />
      </div>
      {/* Center of body where we display the output */}
      {
        clicked == false ?

          <MainContainer /> :
         
          <div className="result">
          <div className="question"><img src={assets.user_icon} className="icon" alt="User Icon" />{showQues}</div>
            <div className="result-data">
            {
              loading?
              <div className="loading">
                <hr />
                <hr />
                <hr />
              </div>:
                <div dangerouslySetInnerHTML={{ __html: result }} className="p"/>
            }
            
            </div>
          </div>
         
      }
      {/* Bottom search box */}
      <div className="buttom">
        <div className="search-box">
          <input type="text" onChange={inputHandle} value={searchData} placeholder="Enter a prompt here" />
          <div>
            <img src={assets.gallery_icon} alt="Gallery Icon" />
            <img src={assets.mic_icon} alt="Mic Icon" />
            <img src={assets.send_icon} onClick={submitHandle} alt="Send Icon" />
          </div>
        </div>
        <p className="buttom-txt">
          Gemini may display inaccurate info, including about people, so
          double-check its responses. Your privacy and Gemini Apps
        </p>
      </div>
    </div>
  );
};

export default MainComponent;
