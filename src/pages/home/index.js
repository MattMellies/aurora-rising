import LargeLogo from "./../../assets/images/logo.png";
import Banner from "./../../assets/images/725261086.jpeg";

const HomePage = () => {
  return (
    <div>
      <div className="centered">
        <img id="homeLogo" src={LargeLogo} style={{paddingTop: '40px', paddingBottom: '10px'}} alt="Aurora Rising"/>
      </div>
      <div className="centered">
        <h4>Providing behavioral and psychological and services in the Calgary area since 2024</h4>
      </div>
      <div className="bannerImage">
        <img src={Banner} alt=""></img>
        <div className="bannerImageText">
          <p>
          <li>Assessment</li>
          <li>Counseling Services</li>
          <li>Behavior Consultation</li>
          <li>Professional Supervision</li>
          <li>...and more</li>
          </p>
        </div>
      </div>
      <div className="centered" style={{textAlign: 'center', maxWidth: '800px', fontSize: 'larger'}}>
        <h1>Mission Statement</h1>
        <p>
          At Aurora Rising Ltd., our mission is to empower individuals of all
          abilities through personalized psychological and behavioral support. We
          are committed to providing a safe, inclusive environment that fosters
          growth, resilience, independence, and well-being. By collaborating with
          clients, families, and communities, we strive to unlock potential,
          enhance quality of life, and promote understanding and acceptance.
          Together, we envision a world where everyone can thrive, celebrating
          their unique strengths and contributions.
        </p>
      </div>

    </div>
  );
};

export default HomePage;
