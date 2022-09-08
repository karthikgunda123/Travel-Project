import AboutHeader from "../../Images/about_header.jpg";
import AboutCustom from "../../Images/AboutCustom.png";
import "./about.css";
const About = () => {
  return (
    <>
      {/* About Header */}
      <div className="about">
        <div>
          <div className="img">
            <img src={AboutHeader} alt="" />
          </div>
          <div className="Overlay"></div>
        </div>
      </div>

      {/* About Main Custom Section */}
      <div className="about_custom container">
        <div className="content">
          <h6>
            <span>A</span>bout Us
          </h6>
          <p>“Man cannot discover new oceans unless he has the courage to lose sight of the shore.” – Andre Gide</p>
        </div>
        <div className="row">
          <div className="col-sm-5">
            <img src={AboutCustom} alt="" />
          </div>

          <div className="col-sm-7">
            <h6>
              <span>S</span>afe Journey Travel
            </h6>
            <p>
              About "Safe Travel And Journey" is a best website for travelling in 6 different places
              precen in the world where beautiful places are landed<br />
              <br />
              Some of the key influencers on the travel and tourism industry in recent years have been globalization, digitalization, sustainability, and the coronavirus pandemic.
               Ease of mobility, increased awareness of new destinations, and the internet as a source of information and commerce have caused the industry to grow exponentially.
                Yet with this growth has also come increasing public concern about the industry’s impact on the environment, resulting in consumer demand for more sustainable travel options. 
                That being said, the industry’s environmental impact declined significantly during the coronavirus pandemic, with travel bans and social distancing measures having a devastating effect on travel and tourism worldwide. 
                When it comes to the future of the industry, increased domestic tourism, excellent hygiene conditions, and contactless service are all examples of changing consumer interests due to the COVID-19 pandemic.
               <br />
              <br />
              <h6>
                <span>H</span>ow The Website Works?
              </h6>
              In this website there is a section we have mentioned in navbar called images,
              Those are the places we will send our customers to the places. So visit the images section and select the place where you want to go
              and contact us with the information you have in the ContactUs section. Then we will book your tickets and everything regarding your plan and send to your contacts which you are provided.
               <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;