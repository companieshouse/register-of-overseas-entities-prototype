module.exports = function (router) {


//  router.post( '/register/trusts/check-answers-trusts-alt', function ( req, res ) {
//		var soldLand = req.query.soldLand;
//		if ( soldLand == "no" ) {
//			res.redirect( "/register/check-answers" );
//		} else {
//			res.render( 'register/disposals/disposed-land' );
//		}
//	} );
//
//}

// post method for routing, in this instance we're checking a variable that has already been set/deeclared elsewhere
router.post('/register/trusts/check-answers-trusts-alt', function(req, res) {
    if (req.session.data['soldLand'] == 'no') {
		console.log('disposals.js NO');
        res.redirect('/register/check-answers');
    } else {
		console.log('disposals.js SOME or ALL (the YES answers)');
        res.render('register/disposals/disposed-land');
    }
})

}
