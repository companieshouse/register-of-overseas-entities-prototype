const express = require('express')
const router = express.Router()



require('./routes/sign-in.js')(router)
require('./routes/presenter.js')(router)
require('./routes/due-diligence.js')(router)
require('./routes/entity.js')(router)
require('./routes/beneficial-owner-statements.js')(router)
require('./routes/beneficial-owner-individual.js')(router)
require('./routes/beneficial-owner-gov.js')(router)
require('./routes/sold-land-filter.js')(router)
require('./routes/secure-register-filter.js')(router)

router.post( '/register/beneficial-owner-statements', function ( req, res ) {
		res.redirect( '/register/beneficial-owner-type-alt' )
} );


router.post( '/register/beneficial-owner-type', function ( req, res ) {
		res.redirect( '/register/beneficial-owner-individual' )
} );


//   What types of individuals and organisations are involved in the trust?

router.post( '/register/trusts/trust-involved', function ( req, res ) {
	var trustTypes = req.query.trustTypes
	if ( trustTypes == 'individual-trusts' ) {
		res.redirect( '/register/trusts/trust-individual' )
	} else if ( trustTypes == "ole-trusts" ) {
		res.redirect( '/register/trusts/trust-ole' );
	} else {
		res.render( 'register/trusts/trust-historical-beneficial-owner' );
	}
} );







// Add your routes here - above the module.exports line

module.exports = router
