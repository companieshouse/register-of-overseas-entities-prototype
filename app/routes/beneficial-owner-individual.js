module.exports = function (router) {

  router.get( '/register/beneficial-owner-individual', function ( req, res ) {
	var boType = req.query.boType;
  var individualFirstName = req.session.data['bo-individual-first-name']
  var individualLastName = req.session.data['bo-individual-last-name']
  var birthDay = req.session.data['owner-dob-day']
  var birthMonth = req.session.data['owner-dob-month']
  var birthYear = req.session.data['owner-dob-year']
  var nationality = req.session.data['nationality']
  var homeAddressLine1 = req.session.data['usual-residential-address-line-1']
  var homeCity = req.session.data['usual-residential-address-city-town']
  var country = req.session.data['country']
  var sameAddress = req.session.data['same-address']
  var serviceAddressLine1 = req.session.data['service-address-line-1']
  var serviceAddressCity = req.session.data['service-address-city-town']

	if ( boType == "beneficialTypesOther" ) {
		res.redirect( "/register/beneficial-owner-other" );
	} else if ( boType == "beneficialTypesGov" ) {
		res.redirect( "/register/beneficial-owner-gov" );
	} else if ( boType == "moTypesIndividual" ) {
		res.redirect( "/register/managing-officer" );
	} else if ( boType == "moTypesCorporate" ) {
		res.redirect( "/register/managing-officer-corporate" );
	} else {
		res.render( 'register/beneficial-owner-individual', {
    individualFirstName: individualFirstName,
    individualLastName: individualLastName,
    birthDay: birthDay,
    birthMonth: birthMonth,
    birthYear: birthYear,
    nationality: nationality,
    homeAddressLine1: homeAddressLine1,
    homeCity: homeCity,
    country: country,
    sameAddress: sameAddress,
    serviceAddressLine1: serviceAddressLine1,
    serviceAddressCity: serviceAddressCity
  } );
}})


  router.post('/register/beneficial-owner-individual', function (req, res) {
    var individualFirstName = req.session.data['bo-individual-first-name']
    var individualLastName = req.session.data['bo-individual-last-name']
    var birthDay = req.session.data['owner-dob-day']
    var birthMonth = req.session.data['owner-dob-month']
    var birthYear = req.session.data['owner-dob-year']
    var nationality = req.session.data['nationality']
    var homeAddressLine1 = req.session.data['usual-residential-address-line-1']
    var homeCity = req.session.data['usual-residential-address-city-town']
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
    var individualFirstNameHasError = false
    var individualLastNameHasError = false
    var birthDayHasError = false
    var birthMonthHasError = false
    var birthYearHasError = false
    var nationalityHasError = false
    var homeAddressLine1HasError = false
    var homeCityHasError = false
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

    if (req.session.data['bo-individual-first-name'] === '') {
      individualFirstNameHasError = true
      errors.push({
        text: "Enter the individual person's first name",
        href: '#bo-individual-first-name'
      })
    }
    if (req.session.data['bo-individual-last-name'] === '') {
      individualLastNameHasError = true
      errors.push({
        text: "Enter the individual person's last name",
        href: '#bo-individual-last-name'
      })
    }
    if (req.session.data['owner-dob-day'] === '') {
      birthDayHasError = true
      errors.push({
        text: "The date of birth must include a day",
        href: '#owner-dob-day'
      })
    }
    if (req.session.data['owner-dob-month'] === '') {
      birthMonthHasError = true
      errors.push({
        text: "The date of birth must include a month",
        href: '#owner-dob-month'
      })
    }
    if (req.session.data['owner-dob-year'] === '') {
      birthYearHasError = true
      errors.push({
        text: "The date of birth must include a year",
        href: '#owner-dob-year'
      })
    }
    if (req.session.data['nationality'] === '') {
      nationalityHasError = true
      errors.push({
        text: "Enter the individual person's nationality",
        href: '#nationality'
      })
    }
    if (req.session.data['usual-residential-address-line-1'] === '') {
      homeAddressLine1HasError = true
      errors.push({
        text: "Enter the first line of the individual person's home address",
        href: '#usual-residential-address-line-1'
      })
    }
    if (req.session.data['usual-residential-address-city-town'] === '') {
      homeCityHasError = true
      errors.push({
        text: "Enter the first line of the individual person's home address",
        href: '#usual-residential-address-city-town'
      })
    }
    if (req.session.data['country'] === '') {
      countryHasError = true
      errors.push({
        text: "Enter the individual person's home country",
        href: '#country'
      })
    }
    if (typeof req.session.data['same-address'] === 'undefined') {
  		sameAddressHasError = true
  		errors.push({
  			text: "Select yes if the correspondence address is the same as the home address",
  			href: '#same-address'
  		})
  	}
    if (req.session.data['service-address-line-1'] === '' && req.session.data['same-address'] === 'no') {
  		serviceAddressLine1HasError = true
  		errors.push({
  			text: "Enter the first line of the individual person's correspondence address",
  			href: '#service-address-line-1'
  		})
  	}
    if (req.session.data['service-address-city-town'] === '' && req.session.data['same-address'] === 'no') {
  		serviceAddressCityHasError = true
  		errors.push({
  			text: "Enter the city or town of the individual person's correspondence address",
  			href: '#service-address-city-town'
  		})
  	}
    if (req.session.data['country-2'] === '' && req.session.data['same-address'] === 'no') {
  		serviceAddressCountryHasError = true
  		errors.push({
  			text: "Enter the country of the individual person's correspondence address",
  			href: '#country-2'
  		})
  	}
    if (req.session.data['owner-startdate-day'] === '') {
      startDayHasError = true
      errors.push({
        text: "The date the individual person became a beneficial owner must include a day",
        href: '#owner-startdate-day'
      })
    }
    if (req.session.data['owner-startdate-month'] === '') {
      startMonthHasError = true
      errors.push({
        text: "The date the individual person became a beneficial owner must include a month",
        href: '#owner-startdate-month'
      })
    }
    if (req.session.data['owner-startdate-year'] === '') {
      startYearHasError = true
      errors.push({
        text: "The date the individual person became a beneficial owner must include a year",
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
  			text: "Select yes if the individual person is on the santions list",
  			href: '#owner-sanctions'
  		})
  	}
    if (individualFirstNameHasError || individualLastNameHasError || birthDayHasError || birthMonthHasError || birthYearHasError || nationalityHasError || homeAddressLine1HasError || homeCityHasError || countryHasError || sameAddressHasError || serviceAddressLine1HasError || serviceAddressCityHasError || serviceAddressCountryHasError || startDayHasError || startMonthHasError || startYearHasError || trustHasError || trustBoxHasError || sanctionsHasError) {
      res.render('register/beneficial-owner-individual', {
        individualFirstName: individualFirstName,
        individualLastName: individualLastName,
        birthDay: birthDay,
        birthMonth: birthMonth,
        birthYear: birthYear,
        nationality: nationality,
        homeAddressLine1: homeAddressLine1,
        homeCity: homeCity,
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
        errorIndividualFirstName: individualFirstNameHasError,
        errorIndividualLastName: individualLastNameHasError,
        errorBirthDay: birthDayHasError,
        errorBirthMonth: birthMonthHasError,
        errorBirthYear: birthYearHasError,
        errorHomeAddressLine1: homeAddressLine1HasError,
        errorHomeCity: homeCityHasError,
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
      res.redirect('/register/beneficial-owner-type-one-added')
    }
  })
}
