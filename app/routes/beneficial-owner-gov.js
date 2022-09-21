module.exports = function (router) {

  router.get( '/register/beneficial-owner-gov', function ( req, res ) {
    var corpName = req.session.data['corp-name']
    var govPrincipalAddressLine1 = req.session.data['principal-address-line-1']
    var govPrincipalCity = req.session.data['usual-residential-address-city-town']
    var country = req.session.data['country']
    var sameAddress = req.session.data['same-address']
    var serviceAddressLine1 = req.session.data['service-address-line-1']
    var serviceAddressCity = req.session.data['service-address-city-town']
    var boGovLegalForm = req.session.data['bo-gov-legal-form']
    var boGovGoverningLaw = req.session.data['bo-gov-governing-law']
		res.render( 'register/beneficial-owner-gov', {
      corpName: corpName,
      govPrincipalAddressLine1: govPrincipalAddressLine1,
      govPrincipalCity: govPrincipalCity,
      country: country,
      sameAddress: sameAddress,
      serviceAddressLine1: serviceAddressLine1,
      serviceAddressCity: serviceAddressCity,
      boGovLegalForm: boGovLegalForm,
      boGovGoverningLaw: boGovGoverningLaw,
    })
})


  router.post('/register/beneficial-owner-gov', function (req, res) {
    var corpName = req.session.data['corp-name']
    var govPrincipalAddressLine1 = req.session.data['principal-address-line-1']
    var govPrincipalCity = req.session.data['usual-residential-address-city-town']
    var country = req.session.data['country']
    var sameAddress = req.session.data['same-address']
    var serviceAddressLine1 = req.session.data['service-address-line-1']
    var serviceAddressCity = req.session.data['service-address-city-town']
    var boGovLegalForm = req.session.data['bo-gov-legal-form']
    var boGovGoverningLaw = req.session.data['bo-gov-governing-law']
    var errors = []
    var corpNameHasError = false
    var govPrincipalAddressLine1HasError = false
    var govPrincipalCityHasError = false
    var countryHasError = false
    var sameAddressHasError = false
    var serviceAddressLine1HasError = false
    var serviceAddressCityHasError = false
    var boGovLegalFormHasError = false
    var boGovGoverningLawHasError = false

    if (req.session.data['corp-name'] === '') {
      corpNameHasError = true
      errors.push({
        text: "Enter the name of the government or public authority",
        href: '#corp-name'
      })
    }
      if (req.session.data['principal-address-line-1'] === '') {
      govPrincipalAddressLine1HasError = true
      errors.push({
        text: "Enter an address",
        href: '#principal-address-line-1'
      })
    }
    if (req.session.data['principal-address-city-town'] === '') {
      govPrincipalCityHasError = true
      errors.push({
        text: "Enter a city or town",
        href: '#principal-address-city-town'
      })
    }
    if (req.session.data['country'] === '') {
      countryHasError = true
      errors.push({
        text: "Enter the gov person's govPrincipal country",
        href: '#country'
      })
    }
    if (typeof req.session.data['same-address'] === 'undefined') {
  		sameAddressHasError = true
  		errors.push({
  			text: "Select yes if the correspondence address is the same as the principal or registered office address",
  			href: '#same-address'
  		})
  	}
    if (req.session.data['service-address-line-1'] === '' && req.session.data['same-address'] === 'no') {
  		serviceAddressLine1HasError = true
  		errors.push({
  			text: "Enter an address",
  			href: '#service-address-line-1'
  		})
  	}
    if (req.session.data['service-address-city-town'] === '' && req.session.data['same-address'] === 'no') {
  		serviceAddressCityHasError = true
  		errors.push({
  			text: "Enter a city or town",
  			href: '#service-address-city-town'
  		})
  	}
    if (req.session.data['bo-gov-legal-form'] === '') {
  		serviceAddressCountryHasError = true
  		errors.push({
  			text: "Enter the legal form",
  			href: '#bo-gov-legal-form'
  		})
  	}
    if (req.session.data['bo-gov-governing-law'] === '') {
  		boGovGoverningLawHasError = true
  		errors.push({
  			text: "Enter the governing law",
  			href: '#bo-gov-governing-law'
  		})
  	}
    if (corpNameHasError || govPrincipalAddressLine1HasError || govPrincipalCityHasError || countryHasError || sameAddressHasError || serviceAddressLine1HasError || serviceAddressCityHasError || boGovLegalFormHasError || boGovGoverningLawHasError) {
      res.render('register/beneficial-owner-gov', {
        corpName: corpName,
        govPrincipalAddressLine1: govPrincipalAddressLine1,
        govPrincipalCity: govPrincipalCity,
        country: country,
        sameAddress: sameAddress,
        serviceAddressLine1: serviceAddressLine1,
        serviceAddressCity: serviceAddressCity,
        boGovLegalForm: boGovLegalForm,
        boGovGoverningLaw: boGovGoverningLaw,
        errorCorpName: corpNameHasError,
        errorGovPrincipalAddressLine1: govPrincipalAddressLine1HasError,
        errorGovPrincipalCity: govPrincipalCityHasError,
        errorCountry: countryHasError,
        errorSameAddress: sameAddressHasError,
        errorServiceAddressLine1: serviceAddressLine1HasError,
        errorServiceAddressCity: serviceAddressCityHasError,
        errorBoGovLegalForm: boGovLegalFormHasError,
        errorBoGovGoverningLaw: boGovGoverningLawHasError,
        errorList: errors
      })
    } else {
      res.redirect('/register/beneficial-owner-type-one-added')
    }
  })
}
