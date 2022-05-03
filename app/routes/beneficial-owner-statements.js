module.exports = function (router) {
  router.get( '/register/beneficial-owner-statements', function ( req, res ) {
    var statements = statements

  	res.render( 'register/beneficial-owner-statements', {
      statements: statements
    });
  })
  router.post('/register/beneficial-owner-statements', function (req, res) {
    var statements = req.session.data['statements']
    var errors = []
    var statementsHasError = false

    if (typeof statements === 'undefined') {
      statementsHasError = true
      errors.push({
        text: 'Select which beneficial owner types have been identified',
        href: '#statements'
      })
    }

    if (statementsHasError) {
      res.render('register/beneficial-owner-statements', {
        statements: statements,
        errorStatements: statementsHasError,
        errorList: errors
      })
    } else {
      res.redirect('/register/beneficial-owner-type-alt')
    }
  })
}
