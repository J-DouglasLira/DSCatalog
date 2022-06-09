import { NavBar } from "components/Navbar";
import "./styles.css";
import { ReactComponent as MainImage} from "assets/images/main-image.svg";

const Home = () => {
  return (
  <>
    <NavBar />
    <div className="home-container">
      <div className="home-card">
        <div className="home-content-container">
          <h1>Discover the best product catalog</h1>
        </div>
        <div className="home-image-container">
          <MainImage />
        </div>
      </div>
    </div>
  </>);
}

export default Home;