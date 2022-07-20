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
li {
  margin-right: 1em;
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
  color: white;
  background-color: #7118C4;
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
            <h3>Brief Work History</h3>
            <p>
              After graduating Venture Academy high school in 2016, I enrolled at the University of the Pacific. I worked as a film coordinator and coach for Venture Academy for about 2 years. I then started my own film editing side business to help my friends get scouted to play professional basketball. Afterwards I worked for Best Western for a few months, and then Amazon for a few months. I obtained my Bachelor's Degree in 2020. <br />
              I began an MBA program at CSU, Stanislaus in the fall of 2020. I worked at Robert Half until December of 2020. I started working for a company called Diversified Products. I left DPM and eventually found a job through Robert Half again. I then found a job through Recruit Gigs for a few months. I left Recruit Gigs and started working for Cash Offers LLC. But once I received an offer letter to work for Bitwise I left Cash Offers and began working for Bitwise/Alpha Works. I currently work at Alpha Works as a React Apprentice.  </p>
          </div>
        </section>
        <section className="programming">
          <header>
            <h2>Programming</h2>
          </header>
          <div className="images">
            <img src="https://www.teahub.io/photos/full/21-217981_java-logo-wallpaper-java-logo.jpg" alt="java logo" />
            <img src="https://th.bing.com/th/id/R.5f716f71c7083e7ee4bdcaa349977956?rik=3UV0c4%2fGHRE%2fAg&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fdc7%2f6aR%2fdc76aRnpi.png&ehk=UtDzHW0xntOSi%2bPBMw1%2fyrBGoIZR%2fFQVSs2qkBe%2f9qM%3d&risl=&pid=ImgRaw&r=0" alt="Facebook Logo" />
            <img src="https://www.logolynx.com/images/logolynx/79/7994348fe469949fbc5ebc15b543d56d.jpeg" alt="html and css logo" />
            <img src="https://pdnchen.weebly.com/uploads/9/3/1/8/93182418/scratch-logo_orig.png" alt="scratch io logo" />
            <img src="https://th.bing.com/th/id/OIP.c2GcuVaCRFhgRmpqlPISBAHaEi?pid=ImgDet&rs=1" alt="c++ logo" />
            <img src="https://gss-technology.com/wp-content/uploads/2021/07/04.png" alt="python logo" />
            <img src="https://snap-tech.com/wp-content/uploads/2021/08/bay-valley-tech-logo-2021.jpeg" alt="bayvalley tech logo" />
            <img src="https://www.britefish.net/wp-content/uploads/2019/06/logo-javascript-2.png" alt="javascript logo" />
          </div>
          <div>
            <h3>Programming History and Experience</h3>
            <p>
              I began to learn how to write code in 2015 during my senior year of high school. My first language was Java. I just want to give a shout out to Ms.Donahue because she was very supportive, she was able to get Facebook to sponsor our class, she even took our class on a field trip to Facebook. She was also able to take the top 4 students to a hack-a-thon at Facebook as well, which I took a part of.
              <br />
              In college I spent a semester learning about HTML and CSS, and then I took another semester learning more about computer information systems. I worked with scratch.io to help my friend make video games for fun. Afterwards I took a small break from coding because I had a lot going on in life. But I started learning python because my friend convinced me to get back into programming. I also learned c++ because I eventually want to learn about Unreal Engine and make a video game. I did a coding bootcamp at Bay Valley where I learned more about fullstack development. Then I eventually ended up working at Bitwise where I am learning how to use React. </p>
          </div>
        </section>
        <section className="personal">
          <header>
            <h2>Personal</h2>
          </header>
          <div>
            <h4>Family:</h4>
            <p>My mother and father are still a part of my life and I have a good relationship with both of them. I also have a younger brother. Those are the individuals who are a part of my immediate family. <br/>
            Last year I got engaged to the love of my life and we plan to get married soon. Me and my wife had our first child on May 19, 2022. Our first born child was a boy, and we named him Axel.
            </p>
          </div>
          <div>
            <h4>Hobbies:</h4>
            <ul>
              <li>Sports: I like to watch and play basketball, my favorite team is the Toronto Raptors.</li>
              <li>Movies: I enjoy watching movies with my wife and son. We pretty much watch any movie because we are open to new experiences.</li>
              <li>Video games: I like to play Mario, Zelda, Pokemon, and Metroid. My favorite type of game is the JRPG turn based games. My favorite video game of all time is Paper Mario The Thousand Year Door.</li>
              <li>Yu-Gi-Oh: I like to play the Yu-Gi-Oh trading card game for fun and I enjoy watching the TV show as well.</li>
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