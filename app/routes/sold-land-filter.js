module.exports = function (router) {


//  router.get( '/register/secure-register-filter', function ( req, res ) {
//		var soldLand = req.query.soldLand;
//		if ( soldLand == "all") {
//			res.redirect( "/register/cannot-use" );
//		} else {
//			res.render( 'register/secure-register-filter' );
//		}
//	} );
//
//}

// post method for routing, doesn't make use of query strings rather we're identifying by discreet variable as set by 'name' in the component
router.post('/register/sold-land-filter', function(req, res) {
    if (req.session.data['soldLand'] == 'all') {
		console.log('sold-land-fiter.js ALL'); // print to console to show which radio has been chosen
        res.redirect('/register/cannot-use');
    } else {
		console.log('sold-land-filter.js NO or SOME (ELSE)'); // print to console to show which radio has been chosen
        res.render('register/secure-register-filter');
		}
	} );
}
