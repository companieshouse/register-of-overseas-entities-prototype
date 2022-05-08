const express = require('express')
const router = express.Router()


// Sign in
require('./routes/sign-in.js')(router)
require('./routes/presenter.js')(router)
require('./routes/due-diligence.js')(router)
require('./routes/entity.js')(router)
require('./routes/beneficial-owner-statements.js')(router)
require('./routes/beneficial-owner-individual.js')(router)

router.post( '/register/beneficial-owner-statements', function ( req, res ) {
		res.redirect( '/register/beneficial-owner-type-alt' )
} );


router.post( '/register/beneficial-owner-type', function ( req, res ) {
		res.redirect( '/register/beneficial-owner-individual' )
} );







// Add your routes here - above the module.exports line

module.exports = router
