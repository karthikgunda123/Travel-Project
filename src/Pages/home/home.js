import "./home.css";
import HeaderImg from "../../Images/header.jpg";
import custom1 from "../../Images/custom1.jpg";
import Img2 from "../../Images/2.jpg";
import Img3 from "../../Images/3.jpg";
import Img4 from "../../Images/4.jpg";
import Img5 from "../../Images/5.jpg";
import Img6 from "../../Images/6.jpg";
const Header = () => {
  return (
    <>
      {/* Header Start */}
      <div className="header">
        <div>
          <div className="img">
            <img src={HeaderImg} alt="" />
          </div>
          <div className="Overlay"></div>
        </div>
        <div className="Content">
          <h6>What are You Waiting For ?</h6>
          <button className="btn">Read More</button>
        </div>
      </div>

      {/* Custom Section Start */}
      <div className="custom container">
        <div className="row">
          <div className="col-sm-4">
            <div>
              <h6>Be Happy Start Travelling</h6>
              <p>
                Travel through your favourite places we mentioned
                Here!!!
              </p>
            </div>

            <div>
              <h6>Be Happy Start Travelling</h6>
              <p>
               We have the places you want to like vist are:-
               AUSTRALIA, KERALA, TAMIL NADU, NORWAY, SWITZERLAND.
              </p>
            </div>

            <div>
              <h6>Be Happy Start Travelling</h6>
              <p>
              We confirm, you that 
               We will provide best facilities to enjoy your trip.
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <img src={custom1} className="img-fluid" alt="" />
          </div>
          <div className="col-sm-4">
            <div>
              <h6>Be Happy Start Travelling</h6>
              <p>
              Travel through your favourite places we mentioned
                Here!!!
              </p>
            </div>

            <div>
              <h6>Be Happy Start Travelling</h6>
              <p>
              We have the places you want to like vist are:-
               AUSTRALIA, KERALA, TAMIL NADU, NORWAY, SWITZERLAND.
              </p>
            </div>

            <div>
              <h6>Be Happy Start Travelling</h6>
              <p>
               We confirm, you that 
               We will provide best facilities to enjoy your trip.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2>NOTE:-</h2>
      <p>WE WILL PROVIDE THE ROOM FACILITY, FOOD AND MEDICAL FACILITY. THE COST ALL ARE INCLUDED BASED ON CHARGES AND "GLOBAL TRAVEL CHARGES" SURVEY
        WHICH IS CONDUCTED BY "UNICEF".
      </p>
    </>
  );
};
export default Header;