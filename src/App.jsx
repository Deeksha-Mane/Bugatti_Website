import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LatestNews from "./components/LatestNews";
import InfoSection from "./components/InfoSection";
import CarSection from "./components/CarSection";
import SurMesure from "./components/SurMesure";
import ScrollingTagline from "./components/ScrollingTagline";
import LiveCardSection from "./components/LiveCardSection";
import Footer from "./components/Footer";

let news_title_style={
  height:"100px",
  textAlign:"center",
  alignSelf:"center",
  paddingTop:"50px",
  backgroundColor:"black",
  color:"white",
  fontSize:"40px",
  fontWeight:"600",
  letterSpacing:"2px",
  wordSpacing:"7px"
}

let la_maison_bugatti={
  height:"100px",
  textAlign:"center",
  alignSelf:"center",
  paddingTop:"50px",
  backgroundColor:"black",
  color:"white",
  fontSize:"40px",
  fontWeight:"600",
  letterSpacing:"2px",
  wordSpacing:"7px"
}

let description={
  height:"50px",
  textAlign:"center",
  alignSelf:"center",
  padding:"15px",
  paddingTop:"30px",
  paddingBottom:"40px",
  backgroundColor:"black",
  color:"white",
  fontSize:"20px",
  fontWeight:"500",
  letterSpacing:"2px",
  wordSpacing:"1px"
}

let hyper_cars={
  height:"100px",
  textAlign:"center",
  alignSelf:"center",
  paddingTop:"50px",
  backgroundColor:"black",
  color:"white",
  fontSize:"50px",
  fontWeight:"600",
  letterSpacing:"2px",
  wordSpacing:"7px"
}

let posts={
    backgroundColor:"black",
    textAlign:"center",
    marginLeft:"auto",
    marginRight:"auto",
    padding:"25px",
}

function App() {
  return (
    <Router >
      <Navbar />
      <Hero/>
      <div className="news-title" style={news_title_style}>OUR LATEST NEWS</div>
      <LatestNews/>
      <div className="la-maison-bugatti" style={la_maison_bugatti}>LA MAISON BUGATTI</div>
      <div className="description" style={description}>Since 1909, the people at BUGATTI Automobiles create incomparable products <br />and experiences by pushing the limits of aesthetics and dynamics.</div>
      <InfoSection/>
      <div className="hyper-cars" style={hyper_cars}>OUR HYPER SPORTS CARS</div>
      <CarSection/>
      <div className="sur-mesure" style={hyper_cars}>BUGATTI SUR MESURE</div>
      <SurMesure/>
      <ScrollingTagline/>
      <div className="live" style={hyper_cars}>Bugatti Live</div>
      <LiveCardSection/>
      <div style={posts}><button type="button">LOAD MORE POSTS</button></div>
      <Footer/>
      <Routes>
        {/* You can add your route pages here */}
      </Routes>
    </Router>
  );
}

export default App;