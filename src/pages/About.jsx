import React from 'react';
import styled from 'styled-components';
const AboutWrapper = styled.section`
background: url(https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg);
background-size: cover;
display: flex;
flex-direction: column;
padding-bottom: 5%;
`;
const BodyWrapper = styled.section`
display: flex;
flex-direction: column;
align-items: center;
position: relative;
margin-top: 1em;
section {
  border-radius: 1em;
  width: 90%;
  margin-bottom: 2em;
}
h2, h3 {
  text-align: center;
}
h4 {
  margin-left: .5em;
}
p {
  margin: 0 1em 1em 1em;
}
.images{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space-evenly;
  flex-wrap: wrap;
  img {
    background-color: white;
    margin-right: 1em;
    margin-bottom: 1em;
    height: 5em;
    width: 10em;
  }
}
.professional {
  background-color: white;
}
.programming {
  background-color: #EE82EE;
  color: #F0FFF0;
}
.personal {
  background-color: #333333;
  color: #F0FFFF;
}
.fun-facts {
  background-color: #D2B48C;;
}
`;
const HeaderWrapper = styled.header`
background: #282157;
color: white;
display: flex;
flex-direction: row;
height: 12em;
position: relative;
.header-content {
  margin-left: .5em;
  overflow-y: scroll;
  width: 85%;
  margin-right: 1em;
}
h1 {
  border-bottom: .1em solid #EE82EE;
}
.selfie {
  width: 10%;
  img {
    width: 100%;
    height: 100%;
  }
}
@media (max-width: 700px){
  .header-content {
    width: 75%;
  }
  .selfie {
    width: 20%;
  }    
}
`;

const About = () => {
  return (
    <AboutWrapper>
      <HeaderWrapper>
        <div className='header-content webkit'>
          <h1>About</h1>
          <p>My name is Javier Guerra, but I go by Javi Guerra. I graduated with my Bachelor's Degree in Business Administration in 2020 from the University of the Pacific. I also graduated in 2022 from California State University, Stanislaus. I obtained Master's Degree in Finance. In 2021 I got back into programming after taking a small break, and now I work as a React Developer because I am passionate about writing programs and software. </p>
        </div>
        <div className="selfie">
          <img src="/images/selfie.JPG" alt="headshot" />
        </div>
      </HeaderWrapper>
      <BodyWrapper>
        <section className='professional'>
          <header>
            <h2>Professional</h2>
          </header>
          <div className="images">
            <img src="https://i.pinimg.com/originals/90/7e/df/907edfcd2d73d74056d7e2cc80d63565.png" alt="University of the Pacific Logo" />
            <img src="https://www.csustan.edu/sites/default/files/groups/Alumni%20Newsletter/2015-Sept/branding-main.jpg" alt="Stanislaus State Logo" />
            <img src="https://th.bing.com/th/id/R.a1519f830de1a21bed95b66ad9212f66?rik=JNApxLQk0bPMgw&riu=http%3a%2f%2fwww.ventureacademyca.org%2fuploads%2f2%2f2%2f8%2f7%2f22875116%2f18-vafs-logo-words_1_orig.jpeg&ehk=haxey741ejrQAaEH7r8GzP%2b5Ouajzn4uUWQp9aNpWeo%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="Venture Academy Mustangs Logo" />
          </div>
          <div>
            <h3>2016-2018</h3>
            <p>I began working in 2016 as a film coordinator for Venture Academy's Basketball Team. I enjoyed this position and I did it for about 2 years. I helped the players and coaches study and prepare for their opponents. After that I was working independently until 2019 editing film for professional basketball players. The goal was to help these players get recruited and improve their careers.</p>
          </div>
          <div>
            <h3>2019</h3>
            <p>After my film coordinator roles, I worked at Best Western during the summer of 2019 to get some real world work experience. I also worked at Amazon for a few months in 2019.</p>
          </div>
          <div>
            <h3>2020</h3>
            <p>I graduated with my Bachelor's from the University of the Pacific in 2020. My first job out of college was with staffing agency called Robert Half. I did that until December of 2020. I got offered a full time position at Diversified Products where I worked there until June of 2021.</p>
          </div>
          <div>
            <h3>2021 - Current</h3>
            <p> My next stint was at Robert Half again until I got a job at Grower Direct Nut in December of 2021, through a staffing agency in Turlock. I then got offered a really good position at Cash Offers LLC in January of 2022. During March of 2022, I got an opportunity as a React Developer at Bitwise in March of 2022, and I am still with the company because the opportunity is a year long apprenticeship and it is an amazing job.</p>
          </div>
        </section>
        <section className="programming">
          <header>
            <h2>Programming</h2>
          </header>
          <div className="images">
            <img src="https://www.teahub.io/photos/full/21-217981_java-logo-wallpaper-java-logo.jpg" alt="java logo" />
            <img src="https://th.bing.com/th/id/R.5f716f71c7083e7ee4bdcaa349977956?rik=3UV0c4%2fGHRE%2fAg&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fdc7%2f6aR%2fdc76aRnpi.png&ehk=UtDzHW0xntOSi%2bPBMw1%2fyrBGoIZR%2fFQVSs2qkBe%2f9qM%3d&risl=&pid=ImgRaw&r=0" alt="Facebook Logo" />
          </div>
          <div>
            <h3>2015 - 2016</h3>
            <p>I first began how to program in 2015, I was a senior at Venture Academy High School. The first language I ever learned was Java. At first I was intimidated because of what I was told about programming. But I had an amazing teacher named Ms.Donahue, she somehow got Facebook to sponsor our class and we learned Java through CodeHS. CodeHS was very beginner-friendly, so I didn't have any issue learning Java.<br/> I had fun programming, and then the class I Was in took a field trip to Facebook's HQ in the Bay Area. I had a great time because the staff was friendly, and the staff described Facebook as being a fun company to work for. I could tell that the staff enjoyed their jobs because everyone was so happy at work. I later then attended my first hack-a-thon, which was hosted by Facebook and held at Facebook's HQ. My friends and I created a Pac-Man like clone and I learned a lot about programming through that experience. </p>
          </div>
          <div className='images'>
            <img src="https://www.logolynx.com/images/logolynx/79/7994348fe469949fbc5ebc15b543d56d.jpeg" alt="html and css logo" />
          </div>
          <div>
            <h3>2017/2018</h3>
            <p>During my sophomore year in College I took an introduction to Computer Science course. We learned about the basics of html and css. I found it interested because I was so used to developing programs in Java, I never knew how webpages were generated.</p>
          </div>
          <div className='images'>
            <img src="https://pdnchen.weebly.com/uploads/9/3/1/8/93182418/scratch-logo_orig.png" alt="scratch io logo" />
          </div>
          <div>
            <h3>2019</h3>
            <p>My friend wanted to make a video game using scratch.io and he convinced me to assist him in making a video game. I made a few small video games, but I didn't make any big games. I thought it was interesting to see how scratch worked, plus it keep my coding skills polished.</p>
          </div>
          <div className='images'>
            <img src="https://th.bing.com/th/id/OIP.c2GcuVaCRFhgRmpqlPISBAHaEi?pid=ImgDet&rs=1" alt="c++ logo" />
            <img src="https://gss-technology.com/wp-content/uploads/2021/07/04.png" alt="python logo" />
            <img src="https://snap-tech.com/wp-content/uploads/2021/08/bay-valley-tech-logo-2021.jpeg" alt="bayvalley tech logo" />
            <img src="https://www.britefish.net/wp-content/uploads/2019/06/logo-javascript-2.png" alt="javascript logo" />
          </div>
          <div>
            <h3>2021 - Current</h3>
            <p>The same friend who convinced me to make a video game with him, also then convinced me to learn c++ to make video games in the unreal engine. I ended up learning about c++, and I also started to learn a bit of Python due to how popular the language was. I applied for this coding boot camp at BayValley Tech because I read an article saying they teach people how to code, and I wanted to learn more about code. I ended up getting accepted into the coding academy. <br/>I learned more about html, css, and I started to learn javascript. At first it was kind of difficult because I was a little rusty and I never made any type of user interface before. But eventually I started to get the hang of things and writing code in javascript got easier and easier over time. After the boot camp ended I continued to work in non-related tech jobs until I got an opportunity to work as a React Apprentice for Bitwise.</p>
          </div>
        </section>
        <section className="personal">
          <header>
            <h2>Personal</h2>
          </header>
          <div>
            <h4>Family:</h4>
            <p>My mother and father are still a part of my life and I have a good relationship with both of them. I also have a younger brother. Those are the individuals who are a part of my immediate family. <br/>
            Last year I got engaged to the love of my life and we plan to get married soon. Me and my wife had our first child on May 19, 2022. Our first born child was a boy, and we named him Axel. Those are the five most important people in my life.
            </p>
          </div>
          <div>
            <h4>Hobbies:</h4>
            <ul>
              <li>Sports: I like to watch and play basketball, my favorite team is the Toronto Raptors.</li>
              <li>Movies: I enjoy watching movies with my wife and son. We pretty much watch any movie because we are open to new experiences.</li>
              <li>Video games: I like to play Mario, Zelda, Pokemon, and Metroid. My favorite type of game is the JRPG turn based games. My favorite video game of all time is Paper Mario The Thousand Year Door.</li>
              <li>Yu-Gi-Oh: I like to play the Yu-Gi-Oh trading card game for fun and I enjoy watching the TV show as well.</li>
              <li>Being Active: I also like working out and staying active because I want to live a long life for myself and loved ones.</li>
              <li>Traveling: I enjoy traveling when I have the time and money. My favorite place to go is Disneyland, and I want to take a trip to Disney World eventually.</li>
            </ul>
          </div>
        </section>
        <section className="fun-facts">
          <header>
            <h2>Fun Facts</h2>
          </header>
          <div>
            <ul>
              <li>First in my family to graduate college with a Bachelor's Degree and a Master's Degree.</li>
              <li>I won some SpiderMan shoes from "The Professor", The Professor was the creator of the SpiderMan basketball series.</li>
              <li>In 2019 I got to see the NBA defending champions in person.</li>
              <li>I have traveled outside of the country.</li>
              <li>I don't have a favorite food, I enjoy most foods.</li>
              <li>I won a free laptop from Facebook in 2016</li>
            </ul>
          </div>
        </section>
      </BodyWrapper>
    </AboutWrapper>
  );
};

export default About;