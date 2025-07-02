import "./Loader.css";
import logo from "../../assets/Ananta Technology.png"; 

const Loader = () => (
  <div id="loader-container">
    <div className="loading">
      <div className="loading_circle loading_blue"></div>
      <div className="loading_circle loading_coral"></div>
      <div className="loading_circle loading_orange"></div>
      {/* centered logo */}
      <img src={logo} alt="logo" className="loading_logo" />
    </div>
  </div>
);

export default Loader;
