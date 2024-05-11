import React from 'react'

function Navbar() {
  return (
    <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
  <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
    {/* <div class="col-lg-6 px-5 text-start">
          <small><i class="fa fa-map-marker-alt text-primary me-2"></i>123 Street, New York, USA</small>
          <small class="ms-4"><i class="fa fa-clock text-primary me-2"></i>9.00 am - 9.00 pm</small>
      </div> */}
    {/* <div class="col-lg-6 px-5 text-end">
          <small><i class="fa fa-envelope text-primary me-2"></i>info@mazars.com</small>
          <small class="ms-4"><i class="fa fa-phone-alt text-primary me-2"></i>+012 345 6789</small>
      </div> */}
  </div>
  <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
    <a href="{% url 'home' %}" className="navbar-brand ms-4 ms-lg-0">
      <h1 className="display-5 text-primary m-0">Keystone</h1>
    </a>
    <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto p-4 p-lg-0">
        <a href="{% url 'home' %}" className="nav-item nav-link">Home</a>
        <a href="{% url 'posts' %}" className="nav-item nav-link">Insights</a>
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Industries</a>
          <div className="dropdown-menu border-light m-0">
            <a href="{% url 'financial_service_industry' %}" className="dropdown-item">Financial Services Industry</a>
            <a href="{% url 'energy_natural_resources' %}" className="dropdown-item">Energy &amp; Natural Resources</a>
            <a href="{% url 'consumer_industrial_market' %}" className="dropdown-item">Consumer &amp; Industrial Markets</a>
            <a href="{% url 'technology_media_telecommunication' %}" className="dropdown-item">Technology, Media &amp; Telecommunication</a>
            <a href="{% url 'real_estate_construction' %}" className="dropdown-item">Real estate &amp; Construction</a>
            <a href="{% url 'transport_logistics' %}" className="dropdown-item">Transport &amp; logistics</a>
            <a href="{% url 'public_social_sector' %}" className="dropdown-item">Public &amp; social sector</a>
          </div>
        </div>
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</a>
          <div className="dropdown-menu border-light m-0">
            <a href="{% url 'audit_assurance' %}" className="dropdown-item">Audit and Assurance</a>
            <a href="{% url 'tax_regulatory_people_services' %}" className="dropdown-item">Tax, Regulatory &amp; People Services</a>
            <a href="{% url 'advisory' %}" className="dropdown-item">Advisory</a>
            <a href="{% url 'consulting' %}" className="dropdown-item">Consulting</a>
          </div>
        </div>
        <a href="{% url 'career' %}" className="nav-item nav-link">Careers</a>
        <a href="{% url 'about' %}" className="nav-item nav-link">About Us</a>
        <a href="{% url 'contact' %}" className="nav-item nav-link">Contact Us</a>
      </div>
      <div className="d-none d-lg-flex ms-2">
        {/* <a class="btn btn-light btn-sm-square rounded-circle ms-3" href="">
                  <small class="fab fa-facebook-f text-primary"></small>
              </a> */}
        {/* <a class="btn btn-light btn-sm-square rounded-circle ms-3" href="">
                  <small class="fab fa-twitter text-primary"></small>
              </a> */}
        {/* <a class="btn btn-light btn-sm-square rounded-circle ms-3" href="">
                  <small class="fab fa-linkedin-in text-primary"></small>
              </a> */}
      </div>
    </div>
  </nav>
</div>

  )
}

export default Navbar