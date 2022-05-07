const express = require('express')
const router = express.Router()


// Sign in
require('./routes/sign-in.js')(router)
require('./routes/presenter.js')(router)
require('./routes/due-diligence.js')(router)


router.post( '/register/beneficial-owner-statements', function ( req, res ) {
		res.redirect( '/register/beneficial-owner-type-alt' )
} );


router.post( '/register/beneficial-owner-type', function ( req, res ) {
		res.redirect( '/register/beneficial-owner-individual' )
} );



router.get( '/register/beneficial-owner-individual', function ( req, res ) {
	var boType = req.query.boType;
	if ( boType == "beneficialTypesOther" ) {
		res.redirect( "/register/beneficial-owner-other" );
	} else if ( boType == "beneficialTypesGov" ) {
		res.redirect( "/register/beneficial-owner-gov" );
	} else if ( boType == "moTypesIndividual" ) {
		res.redirect( "/register/managing-officer" );
	} else if ( boType == "moTypesCorporate" ) {
		res.redirect( "/register/managing-officer-corporate" );
	} else {
		res.render( 'register/beneficial-owner-individual' );
	}
} );

// Add your routes here - above the module.exports line

module.exports = router
