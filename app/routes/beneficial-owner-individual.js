module.exports = function (router) {
  router.get( '/register/beneficial-owner-individual', function ( req, res ) {

  	res.render( 'register/beneficial-owner-individual', {
    });
  })
  router.post('/register/beneficial-owner-individual', function (req, res) {
    var boType = req.session.data['bo-type']
    var errors = []
    var boTypeHasError = false

    if (typeof boType === 'undefined') {
      boTypeHasError = true
      errors.push({
        text: 'Select which types of beneficial owners have been identified',
        href: '#bo-type'
      })
    }

    if (boTypeHasError) {
      res.render('register/beneficial-owner-type-alt', {
        boType: boType,
        errorBoType: boTypeHasError,
        errorList: errors
      })
    } else {
      switch (boType) {
    case 'beneficialTypesIndividual':
      res.redirect('/register/beneficial-owner-individual')
      break
    case 'beneficialTypesOther':
      res.redirect('/register/beneficial-owner-other')
      break
    case 'beneficialTypesGov':
      res.redirect('/register/beneficial-owner-gov')
      break
    case 'moTypesIndividual':
      res.redirect('/register/managing-officer')
      break
    case 'moTypesCorporate':
      res.redirect('/register/managing-officer-corporate')
      break
  }
    }
  })
}
