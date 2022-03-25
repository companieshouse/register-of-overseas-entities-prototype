const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router


router.post( '/register/beneficial-owner-statements', function ( req, res ) {
		res.redirect( '/register/beneficial-owner-type' )
} )
