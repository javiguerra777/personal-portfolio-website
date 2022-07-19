import React from 'react';
import styled from 'styled-components';
// import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';
import '../styles/home.scss';

const HomeWrapper = styled.section`
color: white;
height: 95vh;
display: flex;
flex-direction: column;
align-items: center;
h1, h3 {
  text-align center
}
.introduction-content {
  background-color: #011307;
  color: white;
  position: relative;
  margin-top: 2em;
  padding-left: 1em;
  height: 70vh;
  display: flex;
  flex-direction: row;
  width: 100vw;
  z-index: 2;
  .about-me {
    width: 75%;
    margin-right: .5em;
    overflow-y: scroll;
  }
}
`;


const Homepage = () => {
  // const particlesInit = async (main) => {
  //   await loadFull(main)
  // }
  return (
    
    <HomeWrapper >
      <header className='terminal'>
        <h1>Hello World!</h1>
      </header>
      <section className='introduction-content webkit'>
        <div className='about-me webkit'>
          <p>Hello my name is Javier Guerra. This is my personal website. I am interested in software development and video game development. I like to attend hack-a-thon's whenever I have the time. Please take a look around my website. I built a simple chat bot, if you click on the button in the bottom right corner you can chat with the bot. Check out the about me page, and if you have questions or want to collaborate on a video game project, there is a contact form you can fill out, thank you.</p>
        </div>
        <div className='webkit'>
          <section>
            <h3>Moon Walk</h3>
          </section>
          <section className='Character'>  
          {/* <img className="Character_shadow pixelart" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacterShadow.png" alt="Shadow" /> */}
          <img className="Character_spritesheet pixelart face-left" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacter.png" alt="Character" />
          
          </section>
          <section className='Character'>  
          {/* <img className="Character_shadow pixelart" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacterShadow.png" alt="Shadow" /> */}
          <img className="Character_spritesheet2 pixelart face-left" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacter.png" alt="Character" />
        </section>
        </div>
      </section>
      {/* <Particles
      id="tsparticles"
      init={particlesInit}

      options={{
        "fullScreen": {
            "enable": true,
            "zIndex": 1
        },
        "particles": {
            "number": {
                "value": 20,
                "density": {
                    "enable": false,
                    "value_area": 700
                }
            },
            "color": {
                "value": "#FFFAFA"
            },
            "shape": {
                "type": "star",
                "options": {
                    "sides": 0
                }
            },
            "opacity": {
                "value": 1,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 4,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "rotate": {
                "value": 0,
                "random": true,
                "direction": "clockwise",
                "animation": {
                    "enable": true,
                    "speed": 5,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 600,
                "color": "#111",
                "opacity": 0.2,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": ["none"]
                },
                "onclick": {
                    "enable": false,
                    "mode": "bubble"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "background": {
          "color": "#FFFAF0",
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover",
          "opacity": 0.1
        }
    }}
    /> */}
    </HomeWrapper>
  );
};

export default Homepage;