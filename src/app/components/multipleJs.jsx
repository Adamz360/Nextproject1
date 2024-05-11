import Script from 'next/script';

function MultipleJs() {
  return (
    <div>
      <Script src="lib/wow/wow.min.js"/>
      <Script src="lib/easing/easing.min.js"/>
      <Script src="lib/waypoints/waypoints.min.js"/>
      <Script src="lib/owlcarousel/owl.carousel.min.js"/>
      <Script src="lib/counterup/counterup.min.js"/>
      <Script src="js/main.js"/>
      {/* Add more Script components as needed */}
      {/* Your page content */}
    </div>
  );
}

export default MultipleJs;
