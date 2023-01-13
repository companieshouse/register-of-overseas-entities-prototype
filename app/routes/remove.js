module.exports = function (router) {


	router.get( '/register/trusts/trust-involved-alt', function ( req, res ) {
		  var addTrust = req.query.addTrust;
		  if ( addTrust == "yes" ) {
			  res.redirect( "/register/trusts/trust-involved-alt" );
		  } else {
			  res.render( 'register/trusts/trust-involved-alt' );
		  }
	  } );
  
  }
  

