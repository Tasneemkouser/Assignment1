import React from 'react'
import "./HomePage.css";

import bannerImage from "../../images/banner-image.png"

import scheduledTribes from "../../images/scheduled-tribes.png"
import peopleWithDisabliities from "../../images/people-with-disabliities.png"
import urbanPoor from "../../images/urban-poor.png"
import scheduledCastes from "../../images/scheduled-castes.png"
import sexualGendeMinorities from "../../images/secual-gender-minorities.png"
import youthAdolescents from "../../images/youth-adolescents.png"

import healthLearning from "../../images/health-learning.png"
import toolsAndBestPractices from "../../images/tools-and-best-practices.png"
import expertsDirectory from "../../images/experts-directory.png"

const infoItems = [
  { label: 'Scheduled Tribes', image: scheduledTribes },
  { label: 'People with Disabilities', image: peopleWithDisabliities },
  { label: 'Urban Poor', image: urbanPoor },
  { label: 'Scheduled Castes', image: scheduledCastes },
  { label: 'Sexual & Gende Minorities', image: sexualGendeMinorities },
  { label: 'Youth & Adolescents ', image: youthAdolescents },
];

const downloadItems = [
  { label: 'Inclusive Health Learning Brief', image: healthLearning },
  { label: 'Inclusion Tools and Best Practices', image: toolsAndBestPractices },
  { label: 'Inclusion Experts Directory', image: expertsDirectory },
]

function HomePage() {
  return (
    <>
      <IntroSection />
      <InfoSection />
      <ProgramInfo />
    </>
  )
}

function IntroSection() {
  return <section className="section-intro bg-light py-2">
    <div className="container">
      <header className="d-flex text-capitalize justify-content-between">
        <a href="#" className="fw-bold text-primary">Inclusive Development</a>
        <a href="#">Navigate to resources</a>
      </header>


      <section className="row align-items-center">
        <div className="col-md-3 col-12 p-3">
          <h1 className='text-primary'>What is Inclusion:</h1>
          <p>Every person is essential to the transformation of their own socie-ties, and yet many are still denied full access to legal protections, social and economic participation and essential services. Social inclusion in health means accountably, affordably, and reliably expanding health care access to the poor and most vulnerable, and is essential to ensure the human right to health and achieve sustainable development.</p>
          <button className='btn btn-primary'>LEARN MORE</button>

        </div>
        <div className="col-md-9 col-12 px-5 text-center">
          <div className='p-4'>
            <img src={bannerImage} alt="Inclusion" className='w-100 mx-auto' />
          </div>
        </div>
      </section>
    </div>
  </section>
}

function InfoSection() {
  return <section className='bg-white py-5'>
    <div className="container text-center py-3">
      <h1 className='text-primary'>Who do we need to include in India ?</h1>
      <p>
        Despite substantial improvements over the past two decades, health outcomes in India continue to be closely tied to socio-economic status, social identity and geographical location. 'Excluded groups are those among whom a majority of members systematically lack access to appropriate, affordable and quality health services.
      </p>

      <div className="row pb-3">
        {infoItems.map(item => <div className='py-5 col-6 col-md-3 col-lg-2 d-flex align-items-center text-start'>
          <img src={item.image} />
          <label className='fw-bold'>{item.label}</label>
        </div>)}
      </div>

      <button className='btn btn-primary'>LEARN MORE</button>
    </div>
  </section>
}


function ProgramInfo() {
  return <section className='bg-light py-5'>
    <div className="container py-3">
      <div className="row">
        <div className="col-md-7 col-12">
          <h1 className='text-primary'>How can you make your program more inclusive:</h1>
          <p>While inclusion as an objective is inherent in development sector efforts, actors may be at different stages of their inclusion journey, and facing a diverse set of challenges. While some stakeholders may be concerned about identifying and reaching the 'last mile' or 'base of pyramid' populations, others may be struggling to recruit and retain a diverse workforce or to integrate an inclusion lens across their program cycle. Wherever you are on this inclusion journey, the Inclusive Development Resource Guide aims to support your efforts</p>
        </div>
        <div className="col-md-5 col-12">
          <div className="download-info">
            <button className='btn btn-sm btn-primary px-4 text-capitalize'>Click to download</button>
            <div className='card'>
              <div className="card-body">
                {downloadItems.map(item => <div key={item.label} className="py-3 d-flex align-items-center px-4">
                  <img src={item.image} />
                  <label className='ps-3'>{item.label}</label>
                </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default HomePage