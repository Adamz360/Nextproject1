'use client'
import Image from 'next/image'
import React from 'react'

function HomePage2() {
  return (
    
<div>
  {/* Carousel Start */}
  <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
    <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image className="w-100" src="/img/carousel-11.jpg" height={500} width={500} alt="Image" style={{height: '100vh'}} />
          <div className="carousel-caption">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-8">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <Image className="w-100" src="/img/carousel-12.jpg" height={500} width={500} alt="Image" style={{height: '100vh'}} />
          <div className="carousel-caption">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-7">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  {/* Carousel End */}
  {/* About Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-4 align-items-end mb-4">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <Image className="Image-fluid rounded" src="/img/about.webp" height={500} width={500} />
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
          <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">About Us</p>
          <h1 className="display-5 mb-4">Discover Keystone:Where Trust and Transparency Prevail</h1>
          <p className="mb-4">At Keystone, we believe in the power of precision to drive progress. Founded on a commitment to excellence and fueled by a passion for innovation, we are your trusted partner in navigating the complexities of accounting and auditing.
            Our approach is akin to that of a symphony conductor, meticulously crafting financial harmony that resonates with integrity and clarity. With a team of seasoned professionals, each an expert in their field, we orchestrate bespoke solutions tailored to your unique needs.
            We don't just follow the trends; we set them. Embracing innovation and leveraging cutting-edge technology, we illuminate pathways to success amidst the ever-evolving landscape of finance and business.
          </p>
          <a className="btn btn-primary py-3 px-5" href>Explore More</a>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* second about section */}
  {/* About Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-4 align-items-end mb-4">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
          <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Insights</p>
          <h1 className="display-5 mb-4">Explore Our Economy Trends Briefs</h1>
          <p className="mb-4">
            Welcome to our Economy Trends Briefs page, where we delve into the latest developments shaping the economic landscape. At keystone, we understand the importance of staying informed and ahead of the curve in today's dynamic business environment.
            In this ever-changing economic climate, knowledge is power. Our team of experts at keystone is dedicated to providing you with timely insights and analysis on key economic trends, helping you make informed decisions for your business.
          </p>
          <a className="btn btn-primary py-3 px-5" href>Explore More</a>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <Image className="Image-fluid rounded" src="/img/insight.jpg" height={500} width={500} style={{height: 'fit-content'}} alt='image' />
        </div>
      </div>
    </div>
  </div>
  {/* Industries Start */}
  <div className="container-xxl service py-5">
    <div className="container">
      <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
        <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Industries</p>
        <h1 className="display-5 mb-5">Industries</h1>
      </div>
      <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
        <div className="col-lg-4">
          <div className="nav nav-pills d-flex justify-content-between w-100 h-100 me-4">
            <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4 active" data-bs-toggle="pill" data-bs-target="#tab-pane-1" type="button">
              <h5 className="m-0"><i className="fa fa-credit-card text-primary me-3" />Financial Planning</h5>
            </button>
            <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-2" type="button">
              <h5 className="m-0"><i className="fa fa-power-off text-primary me-3" />Energy</h5>
            </button>
            <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-3" type="button">
              <h5 className="m-0"><i className="fa fa-shopping-bag text-primary me-3" />Consumer Industry &amp; markets</h5>
            </button>
            <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-0" data-bs-toggle="pill" data-bs-target="#tab-pane-4" type="button">
              <h5 className="m-0"><i className="fa fa-ship text-primary me-3" />Transport and Logistics</h5>
            </button>
            <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-0" data-bs-toggle="pill" data-bs-target="#tab-pane-7" type="button">
              <h5 className="m-0"><i className="fa fa-users text-primary me-3" />Public and Social service</h5>
            </button>
            <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-0" data-bs-toggle="pill" data-bs-target="#tab-pane-6" type="button">
              <h5 className="m-0"><i className="fa fa-home text-primary me-3" />Real estate and Construction</h5>
            </button>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="tab-content w-100">
            <div className="tab-pane fade show active" id="tab-pane-1">
              <div className="row g-4">
                <div className="col-md-6" style={{minHeight: 510}}>
                  <div className="position-relative h-100">
                    <Image className="position-absolute rounded w-100 h-100" src="/img/finance.jpg" height={500} width={500} style={{objectFit: 'cover'}} alt="image" />
                  </div>
                </div>
                <div className="col-md-6">
                  <h3 className="mb-4">Financial Support</h3>
                  <p className="mb-4">Building the future of financial services with forward-thinking solutions Asset management The regulatory environment for asset management firms has intensified in recent years with a growing number of new regulations. Among these are the Markets in Financial Instruments Directive (MIFID 2), the Undertakings for Collective Investment in Transferable Securities (UCITS) directives and the Alternative Investment Fund Managers Directive (AIFMD)...</p>
                  <a href="{% url 'industries" className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-pane-2">
              <div className="row g-4">
                <div className="col-md-6" style={{minHeight: 510}}>
                  <div className="position-relative h-100">
                    <Image className="position-absolute rounded w-100 h-100" src="/img/oilpics.jpg" height={500} width={500} style={{objectFit: 'cover'}} alt="image" />
                  </div>
                </div>
                <div className="col-md-6">
                  <h3 className="mb-4">Energy &amp; Natural Resources</h3>
                  <p className="mb-4">Tailored solutions to meet global needs and manage resources in a changing environment Industry players will face a regulatory environment characterised by greater complexity, exposure to greater market risks, and new environmental expectations of consumers..</p>
                  <a href="{% url 'industries" className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-pane-3">
              <div className="row g-4">
                <div className="col-md-6" style={{minHeight: 510}}>
                  <div className="position-relative h-100">
                    <Image className="position-absolute rounded w-100 h-100" src="/img/consumers.jpeg" height={500} width={500} style={{objectFit: 'cover'}} alt="image" />
                  </div>
                </div>
                <div className="col-md-6">
                  <h3 className="mb-4">Consumer Industry &amp; markets</h3>
                  <p className="mb-4">Financial statement audits give assurance over information used by investors and the capital markets. Independent, quality financial statement audits Financial statement audits give assurance over information used by investors and the capital markets – a responsibility to the public interest KPMG Audit professionals take very seriously.</p>
                  <a href="{% url 'industries" className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-pane-4">
              <div className="row g-4">
                <div className="col-md-6" style={{minHeight: 510}}>
                  <div className="position-relative h-100">
                    <Image className="position-absolute rounded w-100 h-100" src="/img/logistics.webp" style={{objectFit: 'cover'}} height={500} width={500} alt="logistics photo" />
                  </div>
                </div>
                <div className="col-md-6" id="tab-pane-5">
                  <h3 className="mb-4">Transport and Logistics</h3>
                  <p className="mb-4">Financial statement audits give assurance over information used by investors and the capital markets. Independent, quality financial statement audits Financial statement audits give assurance over information used by investors and the capital markets .</p>
                  <a href="{% url 'industries" className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                </div>
              </div>
            </div>                       
            <div className="tab-pane fade" id="tab-pane-7">
              <div className="row g-4">
                <div className="col-md-6" style={{minHeight: 510}}>
                  <div className="position-relative h-100">
                    <Image className="position-absolute rounded w-100 h-100" src="/img/public.jpeg" style={{objectFit: 'cover'}} height={500} width={500} alt="people in public photo" />
                  </div>
                </div>
                <div className="col-md-6" id="tab-pane-5">
                  <h3 className="mb-4">Public and social sector</h3>
                  <p className="mb-4">Financial statement audits give assurance over information used by investors and the capital markets. Independent, quality financial statement audits Financial statement audits give assurance over information used by investors and the capital markets .</p>
                  <a href="{% url 'industries" className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-pane-6">
              <div className="row g-4">
                <div className="col-md-6" style={{minHeight: 510}}>
                  <div className="position-relative h-100">
                    <Image className="position-absolute rounded w-100 h-100" src="/img/real_estate.jpg" height={500} width={500} style={{objectFit: 'cover'}} alt="real_estate photo" />
                  </div>
                </div>
                <div className="col-md-6" id="tab-pane-5">
                  <h3 className="mb-4">Real estate and Construction</h3>
                  <p className="mb-4">Financial statement audits give assurance over information used by investors and the capital markets. Independent, quality financial statement audits Financial statement audits give assurance over information used by investors and the capital markets – a responsibility to the public interest Keystone Management Audit professionals take very seriously, applying powerful D&amp;A routines.</p>
                  <a href="{% url 'industries" className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Industries End */}
  {/* Service Start */}
  <div className="container-xxl service py-5">
    <div className="container">
      <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
        <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Services</p>
        <h1 className="display-5 mb-5">Services</h1>
      </div>
      <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
        <div className="col-lg-4">
          <div className="nav nav-pills d-flex justify-content-between w-100 h-100 me-4">
            <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4 active" data-bs-toggle="pill" data-bs-target="#tab-pane-11" type="button">
              <h5 className="m-0"><i className="fa fa-search text-primary me-3" />Audit and Assurance</h5>
            </button>
            <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-12" type="button">
              <h5 className="m-0"><i className="fa fa-calculator text-primary me-3" />Tax Regulatory and People service</h5>
            </button>
            <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-13" type="button">
              <h5 className="m-0"><i className="fa fa-calendar text-primary me-3" />Advisory</h5>
            </button>
            <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-0" data-bs-toggle="pill" data-bs-target="#tab-pane-14" type="button">
              <h5 className="m-0"><i className="fa fa-address-book text-primary me-3" />Consulting</h5>
            </button>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="tab-content w-100">
            <div className="tab-pane fade show active" id="tab-pane-11">
              <div className="row g-4">
                <div className="col-md-6" style={{minHeight: 350}}>
                  <div className="position-relative h-100">
                    <Image className="position-absolute rounded w-100 h-100" src="/img/audit.webp" height={500} width={500} style={{objectFit: 'cover'}} alt="image" />
                  </div>
                </div>
                <div className="col-md-6">
                  <h3 className="mb-4">Audit and Assurance</h3>
                  <p className="mb-4">Financial statement audits provide confidence in the information relied upon by investors and the financial markets. Conducted independently and with a focus on quality, these audits ensure the reliability of financial information essential for investors and the capital markets..</p>
                  <a href className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-pane-12">
              <div className="row g-4">
                <div className="col-md-6" style={{minHeight: 350}}>
                  <div className="position-relative h-100">
                    <Image className="position-absolute rounded w-100 h-100" src="/img/tax.jpeg" height={500} width={500} style={{objectFit: 'cover'}} alt="image" />
                  </div>
                </div>
                <div className="col-md-6">
                  <h3 className="mb-4">Tax Regulatory and People service</h3>
                  <p className="mb-4">The perception of taxation is evolving, with organizations facing increasing exposure to shifting tax regulations both domestically and internationally. Keystone Management leads the way in navigating this dynamic tax environment. As a prominent tax network, we believe it is our responsibility as tax professionals to actively participate in discussions regarding Tax Transparency and Responsibility...</p>
                  <a href className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-pane-13">
              <div className="row g-4">
                <div className="col-md-6" style={{minHeight: 350}}>
                  <div className="position-relative h-100">
                    <Image className="position-absolute rounded w-100 h-100" src="/img/advisory.jpg" height={500} width={500} style={{objectFit: 'cover'}} alt="image" />
                  </div>
                </div>
                <div className="col-md-6">
                  <h3 className="mb-4">Advisory</h3>
                  <p className="mb-4">The Advisory Team at Keystone Management Nigeria collaborates with global industry leaders to establish and safeguard the enduring value of their enterprises. Our professionals partner with you to navigate the intricacies of the swiftly evolving marketplace...</p>
                  <a href className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-pane-14">
              <div className="row g-4">
                <div className="col-md-6" style={{minHeight: 350}}>
                  <div className="position-relative h-100">
                    <Image className="position-absolute rounded w-100 h-100" src="/img/consultancy.webp" height={500} width={500} style={{objectFit: 'cover'}} alt="image" />
                  </div>
                </div>
                <div className="col-md-6">
                  <h3 className="mb-4">Consulting</h3>
                  <p className="mb-4">Success in companies is contingent upon the alignment of their personnel, procedures, and resources towards common goals. At Keystone, we specialize in assisting leaders throughout various departments, including top management, finance, risk management, IT, and HR, to foster alignment and enhance performance by promoting collaboration, providing strategic guidance, and offering contemporary technical and digital proficiency</p>
                  <a href className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Service End */}
  {/* Testimonial Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
        <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Testimonial</p>
        <h1 className="display-5 mb-5">What Our Clients Say!</h1>
      </div>
      <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.3s">
        <div className="testimonial-item">
          <div className="testimonial-text border rounded p-4 pt-5 mb-5">
            <div className="btn-square bg-white border rounded-circle">
              <i className="fa fa-quote-right fa-2x text-primary" />
            </div>
            Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem
            lorem magna ut et, nonumy et labore et tempor diam tempor erat.
          </div>
          <Image className="rounded-circle mb-3" src="/img/testimonial-1.jpg" height={500} width={500} alt="image" />
          <h4>Smith Julliet</h4>
          <span>Musician</span>
        </div>
        <div className="testimonial-item">
          <div className="testimonial-text border rounded p-4 pt-5 mb-5">
            <div className="btn-square bg-white border rounded-circle">
              <i className="fa fa-quote-right fa-2x text-primary" />
            </div>
            Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem
            lorem magna ut et, nonumy et labore et tempor diam tempor erat.
          </div>
          <Image className="rounded-circle mb-3" src="/img/testimonial-2.jpg" height={500} width={500} alt="image" />
          <h4>Jessy Adams</h4>
          <span>Doctor</span>
        </div>
        <div className="testimonial-item">
          <div className="testimonial-text border rounded p-4 pt-5 mb-5">
            <div className="btn-square bg-white border rounded-circle">
              <i className="fa fa-quote-right fa-2x text-primary" />
            </div>
            Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem
            lorem magna ut et, nonumy et labore et tempor diam tempor erat.
          </div>
          <Image className="rounded-circle mb-3" src="/img/testimonial-3.jpg" height={500} width={500} alt="image" />
          <h4>Kim Hoo</h4>
          <span>Professor</span>
        </div>
        <div className="testimonial-item">
          <div className="testimonial-text border rounded p-4 pt-5 mb-5">
            <div className="btn-square bg-white border rounded-circle">
              <i className="fa fa-quote-right fa-2x text-primary" />
            </div>
            Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem
            lorem magna ut et, nonumy et labore et tempor diam tempor erat.
          </div>
          <Image className="rounded-circle mb-3" src="/img/testimonial-4.jpg" height={500} width={500} alt="image" />
          <h4>Jesse Mark</h4>
          <span>Lawyer</span>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
  {/* Callback Start */}
  <div className="container-fluid callback my-5 pt-5">
    <div className="container pt-5">
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <div className="bg-white border rounded p-4 p-sm-5 wow fadeInUp" data-wow-delay="0.5s">
            <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
              <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Get In Touch
              </p>
              <h1 className="display-5 mb-5">Contact Us</h1>
            </div>
            <div className="row g-3">
              <div className="col-sm-6">
                <div className="form-floating">
                  <input type="text" className="form-control" id="name" placeholder="Your Name" />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-floating">
                  <input type="email" className="form-control" id="mail" placeholder="Your Email" />
                  <label htmlFor="mail">Your Email</label>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-floating">
                  <input type="text" className="form-control" id="mobile" placeholder="Your Mobile" />
                  <label htmlFor="mobile">Your Mobile</label>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-floating">
                  <input type="text" className="form-control" id="subject" placeholder="Subject" />
                  <label htmlFor="subject">Subject</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: 100}} defaultValue={""} />
                  <label htmlFor="message">Message</label>
                </div>
              </div>
              <div className="col-12 text-center">
                <button className="btn btn-primary w-100 py-3" type="submit">Submit Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Callback End */}
</div>

  )
}

export default HomePage2