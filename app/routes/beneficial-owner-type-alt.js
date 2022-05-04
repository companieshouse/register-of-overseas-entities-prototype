module.exports = function (router) {
  router.get( '/register/beneficial-owner-type-alt', function ( req, res ) {
    var boType = req.session.data['bo-type']
    var boStatements = boStatements

  	res.render( 'register/beneficial-owner-type-alt', {
      boType: boType,
      boStatements: boStatements
    });
  })
  router.post('/register/beneficial-owner-type-alt', function (req, res) {
    var boType = req.session.data['bo-type']
    var boStatements = boStatements
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
        boStatements: boStatements,
        errorBoType: boTypeHasError,
        errorList: errors
      })
    } else {
      res.redirect('/register/beneficial-owner-individual')
   switch (req.query.boType) {
    case 'beneficialTypesIndividual':
      res.redirect('/register/beneficial-owner-individual');
      break;
    case 'beneficialTypesOther':
      res.redirect('/register/beneficial-owner-other');
      break;
    case 'beneficialTypesGov':
      res.redirect('/register/beneficial-owner-gov');
      break;
    case 'moTypesIndividual':
      res.redirect('/register/managing-officer');
      break;
    case 'moTypesCorporate':
      res.redirect('/register/managing-officer-corporate');
  }
    }
  })
}
