module.exports = function (router) {
  router.get( '/register/beneficial-owner-statements', function ( req, res ) {
    var boStatements = boStatements

  	res.render( 'register/beneficial-owner-statements', {
      boStatements: boStatements
    });
  })
  router.post('/register/beneficial-owner-statements', function (req, res) {
    var boStatements = req.session.data['bo-statements']
    var errors = []
    var boStatementsHasError = false

    if (typeof boStatements === 'undefined') {
      boStatementsHasError = true
      errors.push({
        text: 'Select which beneficial owner types have been identified',
        href: '#statements'
      })
    }

    if (boStatementsHasError) {
      res.render('register/beneficial-owner-statements', {
        boStatements: boStatements,
        errorBoStatements: boStatementsHasError,
        errorList: errors
      })
    } else {
      res.redirect('/register/beneficial-owner-type-alt')
    }
  })
}
