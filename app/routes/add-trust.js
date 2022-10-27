module.exports = function (router) {


	router.get( '/register/check-answers', function ( req, res ) {
		  var addTrust = req.query.addTrust;
		  if ( addTrust == "yes" ) {
			  res.redirect( "/register/trusts/trust-details" );
		  } else {
			  res.render( 'register/check-answers' );
		  }
	  } );
  
  }
  

