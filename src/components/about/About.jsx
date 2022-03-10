import "./about.css";
import secondMe from './secondMe.JPG'

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={secondMe}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
  <blockquote>
    When the wheels come down, when the wheels touch ground, and you feel it's all over, there's another round for you.
  </blockquote>
  <figcaption>
    &mdash; <cite>Foo Fighters</cite>  </figcaption>
        <p className="a-desc">
            I am a self-taught software developer with a passion for coding. I first discovered this passion while taking an elective in Visual Basic during college, then later while writing C++ for Arduinos in my free time. For me, the most exciting aspects of software development are its ability to be combined with almost any other hobby or passion, its intellectually challenging variety that will never let me get bored or run out of things to learn, and its capacity to dramatically change the world for the better. 
        </p>
      </div>
    </div>
  );
};

export default About;
