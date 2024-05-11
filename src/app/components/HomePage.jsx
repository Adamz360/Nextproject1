import React from 'react'
import Image from 'next/image'


function HomePage() {
  return (
<div>
  <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
    <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image width={1000} height={500}   src="/img/carousel_1.jpg" 
          alt="carousel1" />
          <div className="carousel-caption">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-8  ">
                  <h1 className="display-1 mb-4 animated slideInDown">Your Financial Status Is Our Goal
                  </h1>
                  <a href className="btn btn-primary py-3 px-5 animated slideInDown">Explore More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <Image className="w-100" src="/img/carousel-2.jpg" alt="<Image" width={1000}
      height={500} />
          <div className="carousel-caption">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-7">
                  
                  <h1 className="display-1 mb-4 animated slideInDown">True Financial Support For You</h1>
                  <a href className="btn btn-primary py-3 px-5 animated slideInDown">Explore More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <Image className="w-100" src="/img/carousel-2.jpg" alt="<Image" width={1000}
      height={500} />
          <div className="carousel-caption">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-7">
                 
                  <h1 className="display-1 mb-4 animated slideInDown">trusted in financial management </h1>
                  <a href className="btn btn-primary py-3 px-5 animated slideInDown">Explore More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true">
          <span className="visually-hidden">Previous</span>
        </span></button>
      <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true">
          <span className="visually-hidden">Next</span>
        </span></button>
    </div>
  </div>
  {/* // End of the first section */}
  {/* // About Start  */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-4 align-items-end mb-4">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <Image className="img-fluid rounded" src="/img/about.jpg"width={1000}
      height={500}  />
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
          <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">About Us</p>
          <h1 className="display-5 mb-4">We Help Our Clients To Grow Their Business</h1>
          <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
            eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
          </p>
          <div className="border rounded p-4">
            <nav>
              <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                <button className="nav-link fw-semi-bold active" id="nav-story-tab" data-bs-toggle="tab" data-bs-target="#nav-story" type="button" role="tab" aria-controls="nav-story" aria-selected="true">Story</button>
                <button className="nav-link fw-semi-bold" id="nav-mission-tab" data-bs-toggle="tab" data-bs-target="#nav-mission" type="button" role="tab" aria-controls="nav-mission" aria-selected="false">Mission</button>
                <button className="nav-link fw-semi-bold" id="nav-vision-tab" data-bs-toggle="tab" data-bs-target="#nav-vision" type="button" role="tab" aria-controls="nav-vision" aria-selected="false">Vision</button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-story" role="tabpanel" aria-labelledby="nav-story-tab">
                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                  amet diam et eos labore.</p>
                <p className="mb-0">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.
                  Clita erat ipsum et lorem et sit</p>
              </div>
              <div className="tab-pane fade" id="nav-mission" role="tabpanel" aria-labelledby="nav-mission-tab">
                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                  amet diam et eos labore.</p>
                <p className="mb-0">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.
                  Clita erat ipsum et lorem et sit</p>
              </div>
              <div className="tab-pane fade" id="nav-vision" role="tabpanel" aria-labelledby="nav-vision-tab">
                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                  amet diam et eos labore.</p>
                <p className="mb-0">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.
                  Clita erat ipsum et lorem et sit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border rounded p-4 wow fadeInUp" data-wow-delay="0.1s">
        <div className="row g-4">
          <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
            <div className="h-100">
              <div className="d-flex">
                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                  <i className="fa fa-times text-white" />
                </div>
                <div className="ps-3">
                  <h4>No Hidden Cost</h4>
                  <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                </div>
                <div className="border-end d-none d-lg-block" />
              </div>
              <div className="border-bottom mt-4 d-block d-lg-none" />
            </div>
          </div>
          <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
            <div className="h-100">
              <div className="d-flex">
                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                  <i className="fa fa-users text-white" />
                </div>
                <div className="ps-3">
                  <h4>Dedicated Team</h4>
                  <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                </div>
                <div className="border-end d-none d-lg-block" />
              </div>
              <div className="border-bottom mt-4 d-block d-lg-none" />
            </div>
          </div>
          <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
            <div className="h-100">
              <div className="d-flex">
                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                  <i className="fa fa-phone text-white" />
                </div>
                <div className="ps-3">
                  <h4>24/7 Available</h4>
                  <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* // About End  */}
  {/* // Facts Start  */}
  <div className="container-fluid facts my-2 py-2">
    <div className="container py-1">
      <div className="row g-5">
        <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
          <i className="fa fa-users fa-2x text-white mb-3" />
          <h5 className="display-4 text-white" data-toggle="counter-up">556</h5>
          <span className="fs-5 text-white">Happy Clients</span>
          <hr className="bg-white w-25 mx-auto mb-0" />
        </div>
        <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
          <i className="fa fa-check fa-2x text-white mb-3" />
          <h5 className="display-4 text-white" data-toggle="counter-up">600</h5>
          <span className="fs-5 text-white">Projects Completed</span>
          <hr className="bg-white w-25 mx-auto mb-0" />
        </div>
        <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
          <i className="fa fa-users-cog fa-2x text-white mb-3" />
          <h5 className="display-4 text-white" data-toggle="counter-up">895</h5>
          <span className="fs-5 text-white">Dedicated Staff</span>
          <hr className="bg-white w-25 mx-auto mb-0" />
        </div>
        <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
          <i className="fa fa-award fa-2x text-white mb-3" />
          <h5 className="display-4 text-white" data-toggle="counter-up">234</h5>
          <span className="fs-5 text-white">Awards Achieved</span>
          <hr className="bg-white w-25 mx-auto mb-0" />
        </div>
      </div>
    </div>
  </div>
   {/* Facts End  */}
   {/* Features Start  */}
  <div className="container-xxl feature py-5">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Why Choosing Us!</p>
          <h1 className="display-5 mb-4">Few Reasons Why People Choosing Us!</h1>
          <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
            eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
          </p>
          <a className="btn btn-primary py-3 px-5" href>Explore More</a>
        </div>
        <div className="col-lg-6">
          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              <div className="row g-4">
                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                  <div className="feature-box border rounded p-4">
                    <i className="fa fa-check fa-3x text-primary mb-3" />
                    <h4 className="mb-3">Fast Executions</h4>
                    <p className="mb-3">Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
                      justo erat amet</p>
                    <a className="fw-semi-bold" href>Read More <i className="fa fa-arrow-right ms-1" /></a>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                  <div className="feature-box border rounded p-4">
                    <i className="fa fa-check fa-3x text-primary mb-3" />
                    <h4 className="mb-3">Guide &amp; Support</h4>
                    <p className="mb-3">Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
                      justo erat amet</p>
                    <a className="fw-semi-bold" href>Read More <i className="fa fa-arrow-right ms-1" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.7s">
              <div className="feature-box border rounded p-4">
                <i className="fa fa-check fa-3x text-primary mb-3" />
                <h4 className="mb-3">Financial Secure</h4>
                <p className="mb-3">Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
                  erat amet</p>
                <a className="fw-semi-bold" href>Read More <i className="fa fa-arrow-right ms-1" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  // Service Start 
  <div className="container-xxl service py-5">
    <div className="container">
      <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
        <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Our Services</p>
        <h1 className="display-5 mb-5">Awesome Financial Services For Business</h1>
      </div>
      <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
        <div className="col-lg-4">
          <div className="nav nav-pills d-flex justify-content-between w-100 h-100 me-4">
            <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4 active" data-bs-toggle="pill" data-bs-target="#tab-pane-1" type="button">
              <h5 className="m-0"><i className="fa fa-bars text-primary me-3" />Financial Planning</h5>
            </button>
            <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-2" type="button">
              <h5 className="m-0"><i className="fa fa-bars text-primary me-3" />Cash Investment</h5>
            </button>
            <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-3" type="button">
              <h5 className="m-0"><i className="fa fa-bars text-primary me-3" />Financial Consultancy</h5>
            </button>
            <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-0" data-bs-toggle="pill" data-bs-target="#tab-pane-4" type="button">
              <h5 className="m-0"><i className="fa fa-bars text-primary me-3" />Business Loans</h5>
            </button>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="tab-content w-100">
            <div className="tab-pane fade show active" id="tab-pane-1">
              <div className="row g-4">
                <div className="col-md-6" style={{minHeight: 350}}>
                  <div className="position-relative h-100">
                    <Image className="position-absolute rounded w-100 h-100" src="/img/service-1.jpg" style={{objectFit: 'cover'}} alt="" width={1000}
      height={500}  />
                  </div>
                </div>
                <div className="col-md-6">
                  <h3 className="mb-4">25 Years Of Experience In Financial Support</h3>
                  <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                    diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                    clita duo justo erat amet.</p>
                  <p><i className="fa fa-check text-primary me-3" />Secured Loans</p>
                  <p><i className="fa fa-check text-primary me-3" />Credit Facilities</p>
                  <p><i className="fa fa-check text-primary me-3" />Cash Advanced</p>
                  <a href className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-pane-2">
              <div className="row g-4">
                <div className="col-md-6" style={{minHeight: 350}}>
                  <div className="position-relative h-100">
                    <Image className="position-absolute rounded w-100 h-100" src="/img/service-2.jpg" style={{objectFit: 'cover'}} alt="" width={1000}
      height={500}  />
                  </div>
                </div>
                <div className="col-md-6">
                  <h3 className="mb-4">25 Years Of Experience In Financial Support</h3>
                  <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                    diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                    clita duo justo erat amet.</p>
                  <p><i className="fa fa-check text-primary me-3" />Secured Loans</p>
                  <p><i className="fa fa-check text-primary me-3" />Credit Facilities</p>
                  <p><i className="fa fa-check text-primary me-3" />Cash Advanced</p>
                  <a href className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-pane-3">
              <div className="row g-4">
                <div className="col-md-6" style={{minHeight: 350}}>
                  <div className="position-relative h-100">
                    <Image className="position-absolute rounded w-100 h-100" src="/img/service-3.jpg" style={{objectFit: 'cover'}} alt="" width={1000}
      height={500} />
                  </div>
                </div>
                <div className="col-md-6">
                  <h3 className="mb-4">25 Years Of Experience In Financial Support</h3>
                  <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                    diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                    clita duo justo erat amet.</p>
                  <p><i className="fa fa-check text-primary me-3" />Secured Loans</p>
                  <p><i className="fa fa-check text-primary me-3" />Credit Facilities</p>
                  <p><i className="fa fa-check text-primary me-3" />Cash Advanced</p>
                  <a href className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-pane-4">
              <div className="row g-4">
                <div className="col-md-6" style={{minHeight: 350}}>
                  <div className="position-relative h-100">
                    <Image className="position-absolute rounded w-100 h-100" src="/img/service-4.jpg" style={{objectFit: 'cover'}} alt="" width={1000}
      height={500}  />
                  </div>
                </div>
                <div className="col-md-6">
                  <h3 className="mb-4">25 Years Of Experience In Financial Support</h3>
                  <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                    diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                    clita duo justo erat amet.</p>
                  <p><i className="fa fa-check text-primary me-3" />Secured Loans</p>
                  <p><i className="fa fa-check text-primary me-3" />Credit Facilities</p>
                  <p><i className="fa fa-check text-primary me-3" />Cash Advanced</p>
                  <a href className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* // Callback Start  */}
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
  {/* // Projects Start  */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
        <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Our Projects</p>
        <h1 className="display-5 mb-5">We Have Completed Latest Projects</h1>
      </div>
      <div className="owl-carousel project-carousel wow fadeInUp" data-wow-delay="0.3s">
        <div className="project-item pe-5 pb-5">
          <div className="project-img mb-3">
            <Image className="img-fluid rounded"   src="/img/service-1.jpg" alt="" width={1000}
      height={500}  />
            <a href><i className="fa fa-link fa-3x text-primary" /></a>
          </div>
          <div className="project-title">
            <h4 className="mb-0">Financial Planning</h4>
          </div>
        </div>
        <div className="project-item pe-5 pb-5">
          <div className="project-img mb-3">
            <Image className="img-fluid rounded"   src="/img/service-2.jpg" alt="" width={1000}
      height={500}  />
            <a href><i className="fa fa-link fa-3x text-primary" /></a>
          </div>
          <div className="project-title">
            <h4 className="mb-0">Cash Investment</h4>
          </div>
        </div>
        <div className="project-item pe-5 pb-5">
          <div className="project-img mb-3">
            <Image className="img-fluid rounded"   src="/img/service-3.jpg" alt="" width={1000}  height={500}/>
            <a href><i className="fa fa-link fa-3x text-primary" /></a>
          </div>
          <div className="project-title">
            <h4 className="mb-0">Financial Consultancy</h4>
          </div>
        </div>
        <div className="project-item pe-5 pb-5">
          <div className="project-img mb-3">
            <Image className="img-fluid rounded"   src="/img/service-4.jpg" alt="" width={1000}  height={500}  />
            <a href><i className="fa fa-link fa-3x text-primary" /></a>
          </div>
          <div className="project-title">
            <h4 className="mb-0">Business Loans</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* // Team Start  */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
        <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Our Team</p>
        <h1 className="display-5 mb-5">Exclusive Team</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item">
            <Image className="img-fluid rounded"   src="/img/team-1.jpg" alt="" width={1000}  height={500} />
            <div className="team-text">
              <h4 className="mb-0">Kate Winslet</h4>
              <div className="team-social d-flex">
                <a className="btn btn-square rounded-circle mx-1" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square rounded-circle mx-1" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square rounded-circle mx-1" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item">
            <Image className="img-fluid rounded"   src="/img/team-2.jpg" alt="" width={1000}  height={500}  />
            <div className="team-text">
              <h4 className="mb-0">Jac Jacson</h4>
              <div className="team-social d-flex">
                <a className="btn btn-square rounded-circle mx-1" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square rounded-circle mx-1" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square rounded-circle mx-1" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="team-item">
            <Image className="img-fluid rounded"   src="/img/team-3.jpg" alt="" width={1000}  height={500}  />
            <div className="team-text">
              <h4 className="mb-0">Doris Jordan</h4>
              <div className="team-social d-flex">
                <a className="btn btn-square rounded-circle mx-1" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square rounded-circle mx-1" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square rounded-circle mx-1" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* // Testimonial Start  */}
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
          <Image className="rounded-circle mb-3"   src="/img/testimonial-1.jpg" alt="" width={1000}  height={500}  />
          <h4>Client Name</h4>
          <span>Profession</span>
        </div>
        <div className="testimonial-item">
          <div className="testimonial-text border rounded p-4 pt-5 mb-5">
            <div className="btn-square bg-white border rounded-circle">
              <i className="fa fa-quote-right fa-2x text-primary" />
            </div>
            Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem
            lorem magna ut et, nonumy et labore et tempor diam tempor erat.
          </div>
          <Image className="rounded-circle mb-3" src="/img/testimonial-2.jpg" alt="" width={1000}  height={500}  />
          <h4>Client Name</h4>
          <span>Profession</span>
        </div>
        <div className="testimonial-item">
          <div className="testimonial-text border rounded p-4 pt-5 mb-5">
            <div className="btn-square bg-white border rounded-circle">
              <i className="fa fa-quote-right fa-2x text-primary" />
            </div>
            Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem
            lorem magna ut et, nonumy et labore et tempor diam tempor erat.
          </div>
          <Image className="rounded-circle mb-3" src="/img/testimonial-3.jpg" alt="" width={1000}  height={500}  />
          <h4>Client Name</h4>
          <span>Profession</span>
        </div>
        <div className="testimonial-item">
          <div className="testimonial-text border rounded p-4 pt-5 mb-5">
            <div className="btn-square bg-white border rounded-circle">
              <i className="fa fa-quote-right fa-2x text-primary" />
            </div>
            Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem
            lorem magna ut et, nonumy et labore et tempor diam tempor erat.
          </div>
          <Image className="rounded-circle mb-3"   src="/img/testimonial-4.jpg" alt="" width={1000}  height={500}  />
          <h4>Client Name</h4>
          <span>Profession</span>
        </div>
      </div>
    </div>
  </div>
</div>



  )
}

export default HomePage