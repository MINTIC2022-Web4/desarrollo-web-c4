import "./footer.css";
import faceIcon from "../../assets/footer/facebook_icon.svg";
import instagramIcon from "../../assets/footer/instagram_icon.svg";
import twitterIcon from "../../assets/footer/twitter_icon.svg";
import youtubeIcon from "../../assets/footer/youtube_icon.svg";
import playStoreIcon from "../../assets/footer/play_store_icon.svg";
import appIcon from "../../assets/footer/app_store_icon.svg";

const Footer = () => {
  const textFooter1 = "FocusDev derechos reservados 2022";
  const textFooter2 = "¡Pide desde tu celular!";
  const textFooter3 = "Información";
  const textFooter4 = "Política de Tratamiento de Datos";
  const textFooter5 = "Términos y condiciones";
  const textFooter6 = "Nosotros ";
  const textFooter7 = "Trabaja con nosotros(Jobs)";

  /*return (
    <footer>
  
      <div className="footer-container">
        <span className="text-footer1">{textFooter1}</span>
        <div className="footer-container-icon">
          <div className="face-icon">
            <a href="#">
              <img src={faceIcon} alt="face icon" />
            </a>
          </div>
          <div className="instagram-icon">
            <a href="#">
              <img src={instagramIcon} alt="instagram icon" />
            </a>
          </div>
          <div className="twitter-icon">
            <a href="#">
              <img src={twitterIcon} alt="twitter icon" />
            </a>
          </div>
          <div className="youtube-icon">
            <a href="#">
              <img src={youtubeIcon} alt="youtube icon" />
            </a>
          </div>
        </div>
        <div className="footer-container-app">
          <div className="textFooter2">{textFooter2}</div>
          <div className="playstore-icon">
            <a href="#">
              <img src={playStoreIcon} alt="youtube icon" />
            </a>
          </div>
          <div className="app-icon">
            <a href="#">
              <img src={appIcon} alt="youtube icon" />
            </a>
          </div>
        </div>
        <div className="footer-container-info">
          <div className="textFooter3">{textFooter3}</div>
          <div className="textFooter4">{textFooter4}</div>
          <div className="textFooter5">{textFooter5}</div>
          <div className="textFooter6">{textFooter6}</div>
          <div className="textFooter7">{textFooter7}</div>
        </div>
      </div>
    </footer>
  );*/
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-col1">
          <div className="row-footer">
            <div className="footer-item1">
              <span>{textFooter1}</span>
            </div>
            <div className="footer-item2">
              <div className="face-icon">
                <a href="#">
                  <img src={faceIcon} alt="face icon" />
                </a>
              </div>
              <div className="instagram-icon">
                <a href="#">
                  <img src={instagramIcon} alt="instagram icon" />
                </a>
              </div>
              <div className="twitter-icon">
                <a href="#">
                  <img src={twitterIcon} alt="twitter icon" />
                </a>
              </div>
              <div className="youtube-icon">
                <a href="#">
                  <img src={youtubeIcon} alt="youtube icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-col2">
          <div className="row-footer">
            <div className="footer-item1">
              <span>{textFooter2}</span>
            </div>
            <div className="footer-item2">
              <span>
                <a href="#">
                  <img src={playStoreIcon} alt="youtube icon" />
                </a>
              </span>
              <span>
                <a href="#">
                  <img src={appIcon} alt="youtube icon" />
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="footer-col3">
          <div className="row-footer">
            <div className="footer-item1">
              <span>{textFooter3}</span>
            </div>
            <div className="footer-item1">
            <span>{textFooter4}</span>
            </div>
            <div className="footer-item2">
            <span>{textFooter5}</span>
            </div>
          </div>
        </div>

        <div className="footer-col4">
          <div className="row-footer">
            <div className="footer-item1">
              <span>{textFooter6}</span>
            </div>
            <div className="footer-item2">
              <span>{textFooter7}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
