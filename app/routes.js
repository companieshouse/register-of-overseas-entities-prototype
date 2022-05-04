const express = require('express')
const router = express.Router()


// Sign in
require('./routes/sign-in.js')(router)
require('./routes/presenter.js')(router)
require('./routes/due-diligence.js')(router)
require('./routes/entity.js')(router)
require('./routes/beneficial-owner-statements.js')(router)
require('./routes/beneficial-owner-type.js')(router)
require('./routes/beneficial-owner-type-alt.js')(router)
require('./routes/beneficial-owner-individual.js')(router)
require('./routes/beneficial-owner-other.js')(router)
require('./routes/beneficial-owner-gov.js')(router)
require('./routes/managing-officer.js')(router)
require('./routes/managing-officer-corporate.js')(router)
// Add your routes here - above the module.exports line

module.exports = router
