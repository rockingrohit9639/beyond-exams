import './App.css';
import AboutCourse from './Components/AboutCourse/AboutCourse';
import Navbar from './Components/Navbar/Navbar';
import bgLeft from "./assets/images/bg-left.png";
import bgRight from "./assets/images/bg-right.png";
import Review from './Components/Review/Review';
import Card from './Components/Card/Card';
import Feedback from './Components/Feedback/Feedback';

function App()
{
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <AboutCourse />

        <hr />
        <h1 className="heading">What’s inside the course ?</h1>
        <div className="course__content">
          <div className="row">
            
          </div>
        </div>

        <div className="loveContent">
          <img src={bgLeft} className="left" alt="left" />
          <img src={bgRight} className="right" alt="right" />
          <h1>Love the content ?</h1>
          <p>Appreciate the the content creator by making a small contribution</p>
          <button>Klapz</button>
          <p>to Priya sharma</p>
        </div>

        <h1 className="heading">Course Reviews & Feedback</h1>
        <Feedback />

        <h1 className="heading">Reviews</h1>
        <Review
          name="Gautam khan"
          rating={4.5}
          time={3}
          desc="This is a great course for anyone who is learning Figma for the first time. Nima is a very helpful instructor and easy to understand. As a Windows show all"
        />

        <Review
          name="Suryansh Malhan"
          rating={4.5}
          time={2}
          desc="This is a great course for anyone who is learning Figma for the first time. Nima is a very helpful instructor and easy to understand. As a Windows show all"
        />
        <button className="button">Show all reviews</button>

        <hr />

        <h1 className="heading">More courses from “<span>Priya sharma</span>”</h1>

        <div className="cards">
          <Card title="Introduction to UX Design" img="" numVideos={10} />
          <Card title="Building a Brand" img="" numVideos={39} />
          <Card title="Learn English From Web series" img="" numVideos={10} />
          <Card title="Learn English From Web series" img="" numVideos={10} />
        </div>



      </div>
    </div>
  );
}

export default App;
