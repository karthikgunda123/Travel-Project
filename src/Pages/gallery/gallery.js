import ContactHeader from "../../Images/gallery_header.jpg";
import "./gallery.css";
import Img1 from "../../Images/1.jpg";
import Img2 from "../../Images/2.jpg";
import Img3 from "../../Images/3.jpg";
import Img4 from "../../Images/4.jpg";
import Img5 from "../../Images/5.jpg";
import Img6 from "../../Images/6.jpg";
const Gallery = () => {
  return (
    <>
      {/* Gallery Header */}
      <div className="contact gallery">
        <div>
          <div className="img">
            <img src={ContactHeader} alt="" />
          </div>
          <div className="Overlay"></div>
        </div>
      </div>

      {/* Gallery Start */}

      <div className="Customgallery container">
        <div className="row">
          <div className="col-sm-4">
            <div className="box">
              <img src={Img1} className="img-fluid" alt="" title="Australia   1-month  9,19,196 Rs."/>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={Img2} className="img-fluid" alt="" title="Brazil  1-month  12,63,327 Rs" />
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={Img3} className="img-fluid" alt="" title="Kerala  1-month  2,10,000 Rs" />
            </div>
          </div>

          {/* Second Row */}
          <div className="col-sm-4">
            <div className="box">
              <img src={Img4} className="img-fluid" alt="" title="Tamil Nadu  1-month  2,30,000 Rs"/>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={Img5} className="img-fluid" alt="" title="Norway  1-month  4,89,159 Rs" />
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={Img6} className="img-fluid" alt="" title="Switzerland  1-month  9,82,543 Rs" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Gallery;