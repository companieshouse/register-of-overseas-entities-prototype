const express = require('express')
const router = express.Router()


// Sign in
require('./routes/sign-in.js')(router)
<<<<<<< HEAD
<<<<<<< HEAD
require('./routes/presenter.js')(router)
require('./routes/due-diligence.js')(router)
require('./routes/entity.js')(router)
require('./routes/beneficial-owner-statements.js')(router)
require('./routes/beneficial-owner-type-alt.js')(router)
require('./routes/beneficial-owner-individual.js')(router)
require('./routes/beneficial-owner-other.js')(router)
require('./routes/beneficial-owner-gov.js')(router)
require('./routes/managing-officer.js')(router)
require('./routes/managing-officer-corporate.js')(router)
=======
>>>>>>> parent of 57a6828 (Validation contact and presenter commit)



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

>>>>>>> parent of 57a6828 (Validation contact and presenter commit)
// Add your routes here - above the module.exports line

module.exports = router
