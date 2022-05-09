module.exports = function (router) {

  router.get( '/register/beneficial-owner-gov', function ( req, res ) {
		res.render( 'register/beneficial-owner-gov')
})


  router.post('/register/beneficial-owner-gov', function (req, res) {
    var corpName = req.session.data['corp-name']
    var govPrincipalAddressLine1 = req.session.data['principal-address-line-1']
    var govPrincipalCity = req.session.data['usual-residential-address-city-town']
    var country = req.session.data['country']
    var sameAddress = req.session.data['same-address']
    var serviceAddressLine1 = req.session.data['service-address-line-1']
    var serviceAddressCity = req.session.data['service-address-city-town']
    var serviceAddressCountry = req.session.data['country-2']
    var startDay = req.session.data['owner-startdate-day']
    var startMonth = req.session.data['owner-startdate-month']
    var startYear = req.session.data['owner-startdate-year']
    var trust = req.session.data['bo-noc-trust']
    var trustBox = req.session.data['more-detail']
    var sanctions = req.session.data['owner-sanctions']
    var errors = []
    var corpNameHasError = false
    var govPrincipalAddressLine1HasError = false
    var govPrincipalCityHasError = false
    var countryHasError = false
    var sameAddressHasError = false
    var serviceAddressLine1HasError = false
    var serviceAddressCityHasError = false
    var serviceAddressCountryHasError = false
    var startDayHasError = false
    var startMonthHasError = false
    var startYearHasError = false
    var trustHasError = false
    var trustBoxHasError = false
    var santionsHasError = false

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
        text: "Enter the first line of the principal or registered office address",
        href: '#principal-address-line-1'
      })
    }
    if (req.session.data['principal-address-city-town'] === '') {
      govPrincipalCityHasError = true
      errors.push({
        text: "Enter the city of the principal or registered office address",
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
  			text: "Select yes if the correspondence address is the same as the govPrincipal address",
  			href: '#same-address'
  		})
  	}
    if (req.session.data['service-address-line-1'] === '' && req.session.data['same-address'] === 'no') {
  		serviceAddressLine1HasError = true
  		errors.push({
  			text: "Enter the first line of the gov person's correspondence address",
  			href: '#service-address-line-1'
  		})
  	}
    if (req.session.data['service-address-city-town'] === '' && req.session.data['same-address'] === 'no') {
  		serviceAddressCityHasError = true
  		errors.push({
  			text: "Enter the city or town of the gov person's correspondence address",
  			href: '#service-address-city-town'
  		})
  	}
    if (req.session.data['country-2'] === '' && req.session.data['same-address'] === 'no') {
  		serviceAddressCountryHasError = true
  		errors.push({
  			text: "Enter the country of the gov person's correspondence address",
  			href: '#country-2'
  		})
  	}
    if (req.session.data['owner-startdate-day'] === '') {
      startDayHasError = true
      errors.push({
        text: "The date the gov person became a beneficial owner must include a day",
        href: '#owner-startdate-day'
      })
    }
    if (req.session.data['owner-startdate-month'] === '') {
      startMonthHasError = true
      errors.push({
        text: "The date the gov person became a beneficial owner must include a month",
        href: '#owner-startdate-month'
      })
    }
    if (req.session.data['owner-startdate-year'] === '') {
      startYearHasError = true
      errors.push({
        text: "The date the gov person became a beneficial owner must include a year",
        href: '#owner-startdate-year'
      })
    }
    if (typeof req.session.data['bo-noc-trust'] !== 'undefined' && req.session.data['more-detail'] === '') {
  		trustBoxHasError = true
  		errors.push({
  			text: "Enter trust information code in the box",
  			href: '#more-detail'
  		})
  	}
    if (typeof req.session.data['owner-sanctions'] === 'undefined') {
  		sanctionsHasError = true
  		errors.push({
  			text: "Select yes if the gov person is on the santions list",
  			href: '#owner-sanctions'
  		})
  	}
    if (corpNameHasError || govLastNameHasError || birthDayHasError || birthMonthHasError || birthYearHasError || nationalityHasError || govPrincipalAddressLine1HasError || govPrincipalCityHasError || countryHasError || sameAddressHasError || serviceAddressLine1HasError || serviceAddressCityHasError || serviceAddressCountryHasError || startDayHasError || startMonthHasError || startYearHasError || trustHasError || trustBoxHasError || sanctionsHasError) {
      res.render('register/beneficial-owner-gov', {
        corpName: corpName,
        govPrincipalAddressLine1: govPrincipalAddressLine1,
        govPrincipalCity: govPrincipalCity,
        country: country,
        sameAddress: sameAddress,
        serviceAddressLine1: serviceAddressLine1,
        serviceAddressCity: serviceAddressCity,
        serviceAddressCountry: serviceAddressCountry,
        startDay: startDay,
        startMonth: startMonth,
        startYear: startYear,
        trust: trust,
        trustBox: trustBox,
        sanctions: sanctions,
        errorCorpName: corpNameHasError,
        errorGovPrincipalAddressLine1: govPrincipalAddressLine1HasError,
        errorGovPrincipalCity: govPrincipalCityHasError,
        errorCountry: countryHasError,
        errorSameAddress: sameAddressHasError,
        errorServiceAddressLine1: serviceAddressLine1HasError,
        errorServiceAddressCity: serviceAddressCityHasError,
        errorServiceAddressCountry: serviceAddressCountryHasError,
        errorStartDay: startDayHasError,
        errorStartMonth: startMonthHasError,
        errorStartYear: startYearHasError,
        errorTrust: trustHasError,
        errorTrustBox: trustBoxHasError,
        errorSanctions: sanctionsHasError,
        errorList: errors
      })
    } else {
      res.redirect('/register/beneficial-owner-type-three-added')
    }
  })
}
