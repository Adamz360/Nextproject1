import React from 'react'

function footer() {
  return (
    <div className="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
  <div className="container py-5">
    <div className="row g-5">
      <div className="col-lg-3 col-md-6">
        <h4 className="text-white mb-4">Our Office</h4>
        <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />17 Suleman str. Victoria-island, Lagos, Nigeria</p>
        <p className="mb-2"><i className="fa fa-phone-alt me-3" />+234 345 67890</p>
        <p className="mb-2"><i className="fa fa-envelope me-3" />info@keystone.com</p>
        <div className="d-flex pt-2">
          <a className="btn btn-square btn-outline-light rounded-circle me-2" href><i className="fab fa-twitter" /></a>
          <a className="btn btn-square btn-outline-light rounded-circle me-2" href><i className="fab fa-facebook-f" /></a>
          <a className="btn btn-square btn-outline-light rounded-circle me-2" href><i className="fab fa-youtube" /></a>
          <a className="btn btn-square btn-outline-light rounded-circle me-2" href><i className="fab fa-linkedin-in" /></a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <h4 className="text-white mb-4">Industries</h4>
        <a className="btn btn-link" href="{% url 'consumer_industrial_market' %}">Financial Services Industry</a>
        <a className="btn btn-link" href="{% url 'energy_natural_resources' %}">Energy &amp; Natural Resources</a>
        <a className="btn btn-link" href="{% url 'consumer_industrial_market' %}">Consumer &amp; Industrial Markets</a>
        <a className="btn btn-link" href="{% url 'technology_media_telecommunication' %}">Technology, Media &amp; Telecommunication</a>
        <a className="btn btn-link" href="{% url 'transport_logistics' %}">Real estate &amp; Construction</a>
        <a className="btn btn-link" href="{% url 'transport_logistics' %}">Transport &amp; logistics</a>
        <a className="btn btn-link" href="{% url 'consumer_industrial_market' %}">Consumer</a>
        <a className="btn btn-link" href="{% url 'consumer_industrial_market' %}">Public &amp; social sector</a>
      </div>
      <div className="col-lg-3 col-md-6">
        <h4 className="text-white mb-4">Services</h4>
        <a className="btn btn-link" href="{% url 'audit_assurance' %}">Audit and Assurance</a>
        <a className="btn btn-link" href="{% url 'tax_regulatory_people_services' %}">Tax, Regulatory &amp; People Services</a>
        <a className="btn btn-link" href="{% url 'advisory' %}">Advisory</a>
        <a className="btn btn-link" href="{% url 'consulting' %}">Consulting</a>
        <br />
      </div>
      <div className="col-lg-3 col-md-6">
        <h4 className="text-white mb-4">Quick link</h4>
        <a className="btn btn-link" href="{% url 'career' %}">Careers</a>
        <a className="btn btn-link" href="{% url 'about' %}">About Us</a>
        <a className="btn btn-link" href="{% url 'contact' %}">Contact Us</a>
      </div>
    </div>
  </div>
</div>

  )
}

export default footer