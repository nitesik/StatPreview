import "./styles.css";
import desktop from "./images/image-header-desktop.jpg"
import mobile from "./images/image-header-mobile.jpg"

function Home() {

  return (
    <div className="container">
      <div className="text">
        <div className="title">Get <span style={{color: "hsl(277, 64%, 61%)"}}>insights</span> that help your business grow.</div>
        <p className="description">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
        <div className="stat">
          <div>
            <div className="subtitle">10k+</div>
            <div className="stat-text">COMPANIES</div>
          </div>
          <div>
            <div className="subtitle">314</div>
            <div className="stat-text">TEMPLATES</div>
          </div>
          <div>
            <div className="subtitle">12M+</div>
            <div className="stat-text">QUERIES</div>
          </div>
        </div>
      </div>
      <div className="image">
        <div className="overlay">
        </div>
      </div>

      <style>{`
        @media (min-width: 738px) {
          .image {
            background-image: url(${desktop});
            background-size: cover;  
  
          }
        }
        @media (max-width: 738px) {
          .image {
            background-image: url(${mobile});
            background-size: contain;  
  
          }
        }
      `}</style>
    </div>
  )
}

export default Home;