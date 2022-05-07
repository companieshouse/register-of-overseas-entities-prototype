module.exports = function (router) {
  router.get( '/register/presenter', function ( req, res ) {
    var contactName = req.session.data['contact-full-name']
    var contactEmail = req.session.data['contact-email']
  	res.render( 'register/presenter', {
    contactName: contactName,
    contactEmail: contactEmail
  })
  })

  router.post( '/register/presenter', function ( req, res ) {
  	var contactName = req.session.data['contact-full-name']
    var contactEmail = req.session.data['contact-email']
  	var errors = []
  	var nameHasError = false
  	var emailHasError = false
  	if (req.session.data['contact-full-name'] === '') {
  		nameHasError = true
  		errors.push({
  			text: 'Enter your full name',
  			href: '#contact-full-name'
  		})
  	}
  	if (req.session.data['contact-email'] === '') {
  		emailHasError = true
  		errors.push({
  			text: 'Enter your email',
  			href: '#contact-email'
  		})
  	}
  	if (nameHasError || emailHasError) {
  		res.render('register/presenter', {
        contactName: contactName,
        contactEmail: contactEmail,
  			errorName: nameHasError,
  			errorEmail: emailHasError,
  			errorList: errors
  		})
  	} else {
  		res.redirect( '/register/due-diligence' )
  	}
  })
}
