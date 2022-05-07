module.exports = function (router) {
  router.get( '/register/entity', function ( req, res ) {
    var entityName = entityName
    var sameAddress = sameAddress
    var publicRegister = publicRegister

  	res.render( 'register/entity', {
      entityName: entityName,
      sameAddress: sameAddress,
      publicRegister: publicRegister
    });
  })

  router.post( '/register/entity', function ( req, res ) {
  	var entityName = req.session.data['entity-name']
    var countryFormed = req.session.data['country']
    var principalAddressLine1 = req.session.data['principal-address-line-1']
    var principalCity = req.session.data['principal-address-city-town']
    var sameAddress = req.session.data['same-address']
    var serviceAddressLine1 = req.session.data['service-address-line-1']
    var serviceCity = req.session.data['service-address-city-town']
    var entityEmail = req.session.data['entity-email']
    var legalForm = req.session.data['entity-legal-form']
    var governingLaw = req.session.data['entity-governing-law']
    var publicRegister = req.session.data['entity-public-register']
    var publicName = req.session.data['entity-public-register-name']
    var publicNumber = req.session.data['entity-public-register-number']
  	var errors = []
  	var nameHasError = false
    var countryHasError = false
    var principalAddressHasError = false
    var cityHasError = false
    var serivceAddressHasError = false
    var serviceCityHasError = false
    var sameAddressHasError = false
    var emailHasError = false
    var legalFormHasError = false
    var governingLawHasError = false
    var publicRegisterHasError = false
    var registerNameHasError = false
    var registerNumberHasError = false

  	if (req.session.data['entity-name'] === '') {
  		nameHasError = true
  		errors.push({
  			text: 'Enter the name of the overseas entity',
  			href: '#entity-name'
  		})
  	}
    if (req.session.data['country'] === '') {
  		countryHasError = true
  		errors.push({
  			text: 'Enter the country the entity was formed in',
  			href: '#country'
  		})
  	}
    if (req.session.data['principal-address-line-1'] === '') {
  		principalAddressHasError = true
  		errors.push({
  			text: "Enter the first line of the entity's principal address",
  			href: '#principal-address-line-1'
  		})
  	}
    if (req.session.data['principal-address-city-town'] === '') {
  		cityHasError = true
  		errors.push({
  			text: "Enter the city or town of the entity's principal address",
  			href: '#principal-address-city-town'
  		})
  	}
    if (req.session.data['service-address-line-1'] === '' && req.session.data['same-address'] === 'no') {
      serviceAddressHasError = true
      errors.push({
        text: "Enter the first line of the entity's correspondence address",
        href: '#service-address-line-1'
      })
    }
    if (req.session.data['service-address-city-town'] === '' && req.session.data['same-address'] === 'no') {
      serviceCityHasError = true
      errors.push({
        text: "Enter the city or town of the entity's service address",
        href: '#service-address-city-town'
      })
    }
    if (typeof req.session.data['same-address'] === 'undefined') {
  		sameAddressHasError = true
  		errors.push({
  			text: "Select yes if the correspondence address is the same as the principal address",
  			href: '#same-address'
  		})
  	}
    if (req.session.data['entity-email'] === '') {
  		emailHasError = true
  		errors.push({
  			text: "Enter the entity's email address",
  			href: '#entity-email'
  		})
  	}
    if (req.session.data['entity-legal-form'] === '') {
  		legalFormHasError = true
  		errors.push({
  			text: "Enter the entity's legal form",
  			href: '#entity-legal-form'
  		})
  	}
    if (req.session.data['entity-governing-law'] === '') {
      governingLawHasError = true
      errors.push({
        text: "Enter the law that the entity operates under",
        href: '#entity-governing-law'
      })
    }
    if (typeof req.session.data['entity-public-register'] === 'undefined') {
  		publicRegisterHasError = true
  		errors.push({
  			text: 'Select yes if the overseas entity is already on a public register in the country it was formed in',
  			href: '#entity-public-register'
  		})
  	}
    if (req.session.data['entity-public-register-name'] === '' && req.session.data['entity-public-register'] === 'yes') {
  		registerNameHasError = true
  		errors.push({
  			text: 'Enter the name of the register the entity operates under',
  			href: '#entity-public-register-name'
  		})
  	}
    if (req.session.data['entity-public-register-number'] === '' && req.session.data['entity-public-register'] === 'yes') {
      registerNumberHasError = true
      errors.push({
        text: "Enter the entity's registration number",
        href: '#entity-public-register-number'
      })
    }
  	if (nameHasError || countryHasError || principalAddressHasError || cityHasError || serivceAddressHasError || emailHasError || legalFormHasError || governingLawHasError || publicRegisterHasError || registerNameHasError || registerNumberHasError) {
  		res.render('register/entity', {
  			errorName: nameHasError,
        errorCountry: countryHasError,
        errorPrincipal: principalAddressHasError,
        errorCity: cityHasError,
        errorServiceAddress: serivceAddressHasError,
        errorServiceCity: serviceCityHasError,
        errorSameAddress: sameAddressHasError,
        errorEmail: emailHasError,
        errorLegalForm: legalFormHasError,
        errorGoverningLaw: governingLawHasError,
        errorPublicRegister: publicRegisterHasError,
        errorRegisterName: registerNameHasError,
        errorRegisterNumber: registerNumberHasError,
  			errorList: errors,
        entityName: entityName,
        countryFormed: countryFormed,
        principalAddressLine1: principalAddressLine1,
        principalCity: principalCity,
        sameAddress: sameAddress,
        serviceAddressLine1: serviceAddressLine1,
        serviceCity: serviceCity,
        entityEmail: entityEmail,
        legalForm: legalForm,
        governingLaw: governingLaw,
        publicRegister: publicRegister,
        publicNumber: publicNumber,
        publicName: publicName
  		})
  	} else {
  		res.redirect( '/register/beneficial-owner-statements' )
  	}
  })
}
