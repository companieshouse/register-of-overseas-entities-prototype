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
require('./routes/alt-disposed-more.js')(router)
require('./routes/changes-filter.js')(router)
require('./routes/add-trust.js')(router)
require('./routes/remove.js')(router)


// Sign-out routing to be imported, together with ensuring the signOut value is NULL (not set)
var signOut = null;
require('./routes/sign-out.js')(router)

router.post( '/register/beneficial-owner-statements', function ( req, res ) {
		res.redirect( '/register/beneficial-owner-type-alt' )
} );

router.post( '/register/beneficial-owner-type', function ( req, res ) {
		res.redirect( '/register/beneficial-owner-individual' )
} );

// SET GLOBAL PREVIOUS PAGE
router.use('/', (req, res, next) => {
    req.session.data.gPreviousLocation = req.get('Referrer');
    req.session.data.gCurrentLocation = req.originalUrl;
    console.log('gPreviousLocation was : ' + req.session.data.gPreviousLocation);
    console.log('gCurrentLocation is   : ' + req.session.data.gCurrentLocation);
    next();
  });

// GET SPRINT NAME - useful for relative templates
router.use('/', (req, res, next) => {
    res.locals.currentURL = req.originalUrl; //current screen
    res.locals.prevURL = req.get('Referrer'); // previous screen
    console.log('previous page is: ' + res.locals.prevURL + " and current page is " + req.url + " " + res.locals.currentURL );
    next();
  });

// Add your routes here - above the module.exports line

module.exports = router
