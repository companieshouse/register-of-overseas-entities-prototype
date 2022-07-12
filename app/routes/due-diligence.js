module.exports = function (router) {
  router.get( '/register/due-diligence', function ( req, res ) {
    var dueDiligenceName = req.session.data['due-diligence-name']
    var agentAddressLine1 = req.session.data['agent-address-line-1']
    var agentCity = req.session.data['agent-address-city-town']
    var agentCounty = req.session.data['agent-address-state']
    var agentCountry = req.session.data['where-do-you-live']
    var agentPostcode = req.session.data['agent-address-postcode']
    var agentEmail = req.session.data['due-diligence-email']
    var agentSupervisor = req.session.data['supervisory-name']
    var agentCode = req.session.data['agent-code']
    var partnerName = req.session.data['partner-name']
  	res.render( 'register/due-diligence', {
      dueDiligenceName: dueDiligenceName,
      agentAddressLine1: agentAddressLine1,
      agentCity: agentCity,
      agentCounty: agentCounty,
      agentCountry: agentCountry,
      agentPostcode: agentPostcode,
      agentEmail: agentEmail,
      agentSupervisor: agentSupervisor,
      agentCode: agentCode,
      partnerName: partnerName
    } );
  })

  router.post( '/register/due-diligence', function ( req, res ) {
  	var dueDiligenceName = req.session.data['due-diligence-name']
    var agentAddressLine1 = req.session.data['agent-address-line-1']
    var agentCity = req.session.data['agent-address-city-town']
    var agentCounty = req.session.data['agent-address-state']
    var agentCountry = req.session.data['where-do-you-live']
    var agentPostcode = req.session.data['agent-address-postcode']
    var agentEmail = req.session.data['due-diligence-email']
    var agentSupervisor = req.session.data['supervisory-name']
    var agentCode = req.session.data['agent-code']
    var partnerName = req.session.data['partner-name']
  	var errors = []
  	var nameHasError = false
  	var propertyNameHasError = false
    var propertyAddressHasError = false
    var cityHasError = false
    var countyHasError = false
    var countryHasError = false
    var postcodeHasError = false
    var emailHasError = false
    var supervisorHasError = false
    var agentCodeHasError = false
    var identityCheckHasError = false
    var statementHasError = false

  	if (req.session.data['due-diligence-name'] === '') {
  		nameHasError = true
  		errors.push({
  			text: 'Enter the name of the agent',
  			href: '#due-diligence-name'
  		})
  	}
    if (req.session.data['agent-address-line-1'] === '') {
  		propertyAddressHasError = true
  		errors.push({
  			text: "Enter an address",
  			href: '#agent-address-line-1'
  		})
  	}
    if (req.session.data['agent-address-city-town'] === '') {
  		cityHasError = true
  		errors.push({
  			text: "Enter a city or town",
  			href: '#agent-address-city-town'
  		})
  	}
    if (req.session.data['agent-address-state'] === '') {
  		countyHasError = true
  		errors.push({
  			text: "Enter a county",
  			href: '#agent-address-state'
  		})
  	}
  	if (typeof req.session.data['where-do-you-live'] === 'undefined') {
  		countryHasError = true
  		errors.push({
  			text: 'Select a country',
  			href: '#where-do-you-live'
  		})
  	}
    if (req.session.data['agent-address-postcode'] === '') {
  		postcodeHasError = true
  		errors.push({
  			text: "Enter a postcode",
  			href: '#agent-address-postcode'
  		})
  	}
    if (req.session.data['due-diligence-email'] === '') {
  		emailHasError = true
  		errors.push({
  			text: "Enter an email address",
  			href: '#due-diligence-email'
  		})
  	}
    if (req.session.data['supervisory-name'] === '') {
  		supervisorHasError = true
  		errors.push({
  			text: "Enter the name of the agent's supervisory body",
  			href: '#supervisory-name'
  		})
  	}
    if (req.session.data['agent-code'] === '') {
  		agentCodeHasError = true
  		errors.push({
  			text: "Enter the agent code",
  			href: '#agent-code'
  		})
  	}
    if (req.session.data['partner-name'] === '') {
      identityCheckHasError = true
      errors.push({
        text: "Enter the name of the person with overall responsibility for verification checks",
        href: '#partner-name'
      })
    }
    if (typeof req.session.data['diligence'] === 'undefined') {
  		statementHasError = true
  		errors.push({
  			text: 'Check and confirm the statement of compliance',
  			href: '#diligence'
  		})
  	}
  	if (nameHasError || propertyNameHasError || propertyAddressHasError || cityHasError || countyHasError || countryHasError || postcodeHasError || emailHasError || supervisorHasError || agentCodeHasError || identityCheckHasError || statementHasError) {
  		res.render('register/due-diligence', {
        dueDiligenceName: dueDiligenceName,
        agentAddressLine1: agentAddressLine1,
        agentCity: agentCity,
        agentCounty: agentCounty,
        agentCountry: agentCountry,
        agentPostcode: agentPostcode,
        agentEmail: agentEmail,
        agentSupervisor: agentSupervisor,
        agentCode: agentCode,
        partnerName: partnerName,
  			errorName: nameHasError,
        errorPropertyName: propertyNameHasError,
        errorPropertyAddress: propertyAddressHasError,
        errorCity: cityHasError,
        errorCounty: countyHasError,
        errorCountry: countryHasError,
        errorPostcode: postcodeHasError,
  			errorEmail: emailHasError,
        errorSupervisor: supervisorHasError,
        errorAgentCode: agentCodeHasError,
        errorIdentityCheck: identityCheckHasError,
        errorStatement: statementHasError,
  			errorList: errors
  		})
  	} else {
  		res.redirect( '/register/entity' )
  	}
  })
}
