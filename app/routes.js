const express = require('express')
const router = express.Router()

require('./routes/sign-in.js')(router)
require('./routes/presenter.js')(router)
require('./routes/who-is-making-filing.js')(router)
require('./routes/due-diligence.js')(router)
require('./routes/overseas-entity-due-diligence.js')(router)
require('./routes/entity.js')(router)
require('./routes/beneficial-owner-statements.js')(router)
require('./routes/beneficial-owner-individual.js')(router)
require('./routes/beneficial-owner-gov.js')(router)
require('./routes/sold-land-filter.js')(router)
require('./routes/secure-register-filter.js')(router)
require('./routes/trust-involved.js')(router)
require('./routes/trust-involved-additions.js')(router)
require('./routes/relevant-person.js')(router)
require('./routes/starting-new.js')(router)
require('./routes/trust-involved-alt.js')(router)
require('./routes/disposals.js')(router)
require('./routes/alt-disposed-land.js')(router)
require('./routes/changes-filter.js')(router)





router.post( '/register/beneficial-owner-statements', function ( req, res ) {
		res.redirect( '/register/beneficial-owner-type-alt' )
} );


router.post( '/register/beneficial-owner-type', function ( req, res ) {
		res.redirect( '/register/beneficial-owner-individual' )
} );





// Add your routes here - above the module.exports line

module.exports = router
