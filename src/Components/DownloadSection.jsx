import "../Style/DownloadSection.css";
const TextBlock = () => (
  <div className="text_block">
    <span>Download </span>
    <span className="mark_star">•</span>
  </div>
);

const DownloadSection = () => {
  return (
    <div
      className="text_list_section row_am downaload_section"
      data-aos="fade-in"
      data-aos-duration="1500"
    >
      
      <div className="container">
        <div
          className="yellow_dotes"
        
     
        >
         
          <img src="/yellow_dotes.png" alt="image" />
        </div>

        <div className="center_screen">
          <div
            className="img"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <img src="/downloadScreen.png" alt="image" />
          </div>

          {/* app buttons */}
          <ul className="app_btn">
            <li
          
            >
              <a href="#">
                <img className="blue_img" src="/googleplay.png" alt="image" />
              </a>
            </li>
            <li
           
            >
              <a href="#">
                <img className="blue_img" src="/appstorebtn.png" alt="image" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="background_slider">
        {/* left static strip */}
        <div
          className="dowanload_slider"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="downlist">
            {Array.from({ length: 5 }).map((_, i) => (
              <TextBlock key={`left-${i}`} />
            ))}
          </div>
        </div>

        <div className="slider_block">
          <div className="marquee_track">
            {[0, 1].map((setIndex) =>
              Array.from({ length: 6 }).map((_, i) => (
                <div className="item" key={`item-${setIndex}-${i}`}>
                  <TextBlock />
                </div>
              )),
            )}
          </div>
        </div>

        {/* right static strip */}
        <div
          className="dowanload_slider"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div className="downlist">
            {Array.from({ length: 4 }).map((_, i) => (
              <TextBlock key={`right-${i}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default DownloadSection;