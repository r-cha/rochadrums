import React from 'react'

import { Helmet } from 'react-helmet'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './home.css'

import favicon from '../assets/favicon.ico'
import hero_landscape from "../assets/hero_landscape.jpg"
import hero_portrait from "../assets/hero_portrait.jpg"

function PortfolioCard(props) {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer noopener"
      className="home-portfolio-card-link"
    >
      <div className="home-portfolio-card">
        <span className="home-portfolio-title card-Heading">{props.title}</span>
        <span className="home-portfolio-artist card-Text">{props.artist}</span>
      </div>
    </a>
  )
}

const ContactButton = (props) => {
  return (
    <a
    href="mailto:robert@rochadrums.com?subject=rochadrums request"
    className="home-cta-btn anchor button"
  >
    Contact
  </a>
  )
}

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>rochadrums</title>
        <meta property="og:title" content="rochadrums" />
        <link rel="icon" type="image/png" href={favicon} sizes="32x32" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <div className="home-left-side">
            <div className="home-container1">
              <h1>rochadrums🥁</h1>
            </div>
          </div>
          <div className="home-right-side">
            <div className="home-links-container">
              <a href="#home" className="home-link anchor">
                Home
              </a>
              <a href="#services" className="home-link anchor">
                Services
              </a>
              <a href="#portfolio" className="home-link anchor">
                Music
              </a>
              <a href="#contact" className="home-link-endcap anchor">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="home" className="home-hero" style={{backgroundImage: `url(${hero_landscape})`}}>
        <div className="home-content-container">
          <div className="home-hero-text">
            <h1 className="home-heading section-Heading">
              <span className="home-head-emphasis">Ro</span>
              <span>
                bert{' '}
              </span>
              <span className="home-head-emphasis">Cha</span>
              <span>ndler</span>
            </h1>
            <span className="home-hero-intro-text section-Text">
              <span>
                After 15 years of drumming experience, Robert is ready to share
                his craft with others publicly.
              </span>
              <br></br>
              <span>
                Classically trained in jazz and rock, deeply practiced in
                contemporary Christian music, and more than a little interested
                in metalcore, Robert&apos;s unique combination of influences and
                interests is sure to fit your need for a teacher, bandmate, or
                session musician.
              </span>
            </span>
            <ContactButton />
          </div>
        </div>
      </div>
      <div id="services" className="home-services">
        <div className="home-heading-container">
          <h1 className="home-section-heading section-Heading">Services</h1>
        </div>
        <div className="home-cards-container">
          <div className="home-service-card">
            <h3 className="home-service-card-heading card-Heading">Lessons</h3>
            <span className="home-service-card-text card-Text">
              <span>
                Lessons are currently available
              </span>
              <span className="home-services-emphasis">
                {' '}
                in-person
              </span>
              <span>
                {' '}
                in Phoenix, AZ.
              </span>
              <span>
                {' '}
                Robert has taught all ages — from 3 to 73 — and skill levels.
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span className="home-services-emphasis">Beginner:</span>
              <span>
                {' '}
                Looking to start a new hobby, learn another instrument, or be
                introduced to music as a whole? Come ready to learn and leave
                with an unassailable foundation in the percussive arts.
              </span>
              <br></br>
              <span className="home-services-emphasis">Intermediate:</span>
              <span>
                {' '}
                Ready to step up your skills, prepare for an audition, or
                develop your weakest areas? Come ready for a challenge and take
                your drumming to the next level.
              </span>
              <br></br>
              <span className="home-services-emphasis">Advanced:</span>
              <span>
                {' '}
                Robert is looking for a drumming partner at
                a comparable skill level to bounce ideas off,
                challenge each other, and talk nerdy about drums.
                As a mutually-beneficial arrangement
                this would be free of charge, if you are interested!
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span className="home-services-emphasis">
                Rates:
              </span>
              <span>
                {' '}
                First lesson is free, then we can discuss your needs from there!
              </span>
            </span>
          </div>
          <div className="home-service-card">
            <h3 className="home-service-card-heading card-Heading">Live</h3>
            <span className="home-service-card-text card-Text">
              <span>
                Robert has over 10 years of experience in live performance,
                including contemporary Christian worship, jazz, and concert
                percussion. He plays to the music, locks down the rhythm
                section, and loves collaborating with other musicians in real
                time.
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span className="home-services-emphasis">Churches:</span>
              <span>
                {' '}
                Sunday availability is limited, but feel free to reach out for
                last-minute relief in the Phoenix metro area.
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span className="home-services-emphasis">
                Rates:
              </span>
              <span>
                {' '}
                Variable, but a testimonial is always appreciated!
              </span>
            </span>
          </div>
          <div className="home-service-card">
            <h3 className="home-service-card-heading card-Heading">Studio</h3>
            <span className="home-service-card-text card-Text">
              <span>
                Studio recording is a secret passion for Robert. He has
                collaborated with artists in every step of the process, from
                songwriting and arrangement to recording fully-fleshed out drum
                parts.
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span className="home-services-emphasis">Demos:</span>
              <span>
                {' '}
                Need a quick scratch track on drums? Robert has a limited stereo
                overhead recording setup in his home studio and can turn around
                a track for you within 48 hours.
              </span>
              <br></br>
              <span className="home-services-emphasis">Full session:</span>
              <span>
                {' '}
                Robert&apos;s recording hardware is limited, but if you are recording
                in the Phoenix metro area, he&apos;s ready to throw in on studio time
                for your album or EP.
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span className="home-services-emphasis">
                Rates:
              </span>
              <span>
                {' '}
                A testimonial and a master of the final result.
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="home-section-separator"></div>
      <div id="portfolio" className="home-portfolio">
        <div className="home-heading-container">
          <h1 className="home-section-heading section-Heading">Music</h1>
        </div>
        <div className="home-portfolio-container">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#191919', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #191919' }}
              date="2022"
              iconStyle={{ background: '#595959', color: '#fff' }}
            >
              <iframe width="100%" height="150" src="https://odesli.co/embed/?url=https%3A%2F%2Fsong.link%2Fs%2F46IsQhIw2JAJKgGY9Z2Mce&theme=dark" frameborder="0" allowfullscreen sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox" allow="clipboard-read; clipboard-write"></iframe>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#191919', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #191919' }}
              date="2020"
              iconStyle={{ background: '#595959', color: '#fff' }}
            >
              <iframe width="100%" height="150" src="https://odesli.co/embed/?url=https%3A%2F%2Fsong.link%2Fs%2F1AyFbnFkMbtaJwPmmu5m1k&theme=dark" frameborder="0" allowfullscreen sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox" allow="clipboard-read; clipboard-write"></iframe>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#191919', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #191919' }}
              date="2019"
              iconStyle={{ background: '#595959', color: '#fff' }}
            >
              <iframe width="100%" height="150" src="https://odesli.co/embed/?url=https%3A%2F%2Falbum.link%2Fs%2F5sennetLWUcqhwXRo0dDzx&theme=dark" frameborder="0" allowfullscreen sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox" allow="clipboard-read; clipboard-write"></iframe>
            </VerticalTimelineElement>
          </VerticalTimeline>
          {/* <div className="home-portfolio-card">
            <iframe width="100%" height="150" src="https://odesli.co/embed/?url=https%3A%2F%2Fsong.link%2Fs%2F46IsQhIw2JAJKgGY9Z2Mce&theme=dark" frameborder="0" allowfullscreen sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox" allow="clipboard-read; clipboard-write"></iframe>
          </div>
          <div className="home-portfolio-card">
            <iframe width="100%" height="150" src="https://odesli.co/embed/?url=https%3A%2F%2Fsong.link%2Fs%2F1AyFbnFkMbtaJwPmmu5m1k&theme=dark" frameborder="0" allowfullscreen sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox" allow="clipboard-read; clipboard-write"></iframe>
          </div>
          <div className="home-portfolio-card">
            <iframe width="100%" height="150" src="https://odesli.co/embed/?url=https%3A%2F%2Falbum.link%2Fs%2F5sennetLWUcqhwXRo0dDzx&theme=dark" frameborder="0" allowfullscreen sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox" allow="clipboard-read; clipboard-write"></iframe>
          </div> */}
        </div>
      </div>
      <div className="home-section-separator"></div>
      <div id="contact" className="home-get-in-touch" style={{backgroundImage: `url(${hero_portrait})`}}>
        <div className="home-content-container">
          <div className="home-hero-text">
            <h1 className="home-heading section-Heading">
              <span>Get In Touch</span>
            </h1>
            <div className="home-contact-container">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <a
                href="mailto:robert@rochadrums.com?subject=rochadrums request"
                className="home-contact-method-text section-Text"
              >
                <span>robert@rochadrums.com</span>
              </a>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <a
                href="https://www.instagram.com/rochadrums/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-contact-method-text section-Text"
              >
                <span>rochadrums</span>
              </a>
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M938.667 426.667c0-117.803-47.787-224.555-124.971-301.696s-183.893-124.971-301.696-124.971-224.555 47.787-301.696 124.971-124.971 183.893-124.971 301.696c0 24.277 2.261 48.128 6.4 71.509 11.691 66.048 38.357 128.171 71.765 184.32 116.565 195.883 324.821 334.336 324.821 334.336 14.123 9.259 32.64 9.771 47.317 0 0 0 208.299-138.453 324.821-334.336 33.408-56.149 60.075-118.272 71.765-184.32 4.181-23.381 6.443-47.232 6.443-71.509zM853.333 426.667c0 18.944-1.749 37.845-5.077 56.661-9.429 53.333-31.445 105.728-61.099 155.563-83.285 139.947-220.416 249.643-275.157 290.091-54.784-40.448-191.872-150.144-275.157-290.091-29.653-49.835-51.669-102.229-61.099-155.563-3.328-18.816-5.077-37.717-5.077-56.661 0-94.251 38.144-179.541 99.968-241.365s147.115-99.968 241.365-99.968 179.541 38.144 241.365 99.968 99.968 147.115 99.968 241.365zM682.667 426.667c0-47.104-19.157-89.856-50.005-120.661s-73.557-50.005-120.661-50.005-89.856 19.157-120.661 50.005-50.005 73.557-50.005 120.661 19.157 89.856 50.005 120.661 73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661zM597.333 426.667c0 23.595-9.515 44.843-25.003 60.331s-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331 9.515-44.843 25.003-60.331 36.736-25.003 60.331-25.003 44.843 9.515 60.331 25.003 25.003 36.736 25.003 60.331z"></path>
              </svg>
              <span className="home-contact-method-text section-Text">
                <span>Phoenix, AZ</span>
              </span>
            </div>
            <ContactButton />
          </div>
        </div>
      </div>
      <div className="home-section-separator"></div>
      <div className="home-footer-container">
        <div className="home-footer">
          <div className="home-social-links"></div>
          <div className="home-copyright-container">
            <svg viewBox="0 0 1024 1024" className="home-copyright-icon">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span className="anchor">
              <span>Copyright, 2022</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
