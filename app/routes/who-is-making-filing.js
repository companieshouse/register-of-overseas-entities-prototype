module.exports = function (router) {


  router.get( '/register/overseas-entity-due-diligence', function ( req, res ) {
		var whoIsFiling = req.query.whoIsFiling;
		if ( whoIsFiling == "agent" ) {
			res.redirect( "/register/due-diligence" );
		} else {
			res.render( 'register/overseas-entity-due-diligence' );
		}
	} );

}
