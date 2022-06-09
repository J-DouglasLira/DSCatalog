import { NavBar } from "components/Navbar";
import "./styles.css";
import { ReactComponent as MainImage} from "assets/images/main-image.svg";
import ButtonIcon from "components/ButtonIcon";

const Home = () => {
  return (
  <>
    <NavBar />
    <div className="home-container">
      <div className="home-card">
        <div className="home-content-container">
          <div>
          <h1>Discover the best product catalog</h1>
          <p>
            We will help you find the
            best products available
            on the market.
          </p>
          </div>
          <ButtonIcon/>
        </div>
        <div className="home-image-container">
          <MainImage />
        </div>
      </div>
    </div>
  </>);
}

export default Home;