module.exports = function (router) {


  router.get( '/register/disposals/remove', function ( req, res ) {
		var removeLand = req.query.removeLand;
		if ( removeLand == "yes" ) {
			res.redirect( "/register/disposals/added-so-far" );
		} else {
			res.render( "javascript:window.history.back()" );
		}
	} );
