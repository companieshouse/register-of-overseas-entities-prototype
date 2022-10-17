module.exports = function (router) {

// router.get( '/register/starting-new', function ( req, res ) {
//		var startingNew = req.query.startingNew;
//		if ( startingNew == "no" ) {
//			console.log('starting-new.js NO');
//			res.redirect( "/register/sold-land-filter" );
//		} else {
//			console.log('starting-new.js ELSE');
//			res.render( 'register/who-is-making-filing' );
//		}
//	} );
//
//}

// post method for routing, doesn't make use of query strings rather we're identifying by discreet variable as set by 'name' in the component
router.post('/register/starting-new', function(req, res) {
    if (req.session.data['startingNew'] == 'no') {
		console.log('starting-new.js NO'); // print to console to show which radio has been chosen
        res.redirect('/register/sold-land-filter');
    } else {
		console.log('starting-new.js ELSE'); // print to console to show which radio has been chosen
        //res.render('register/who-is-making-filing');
        // Route to Your filings page
        res.render('users/transactions');
    }
})
}
