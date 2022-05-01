module.exports = function (router) {
  router.get( '/register/beneficial-owner-type-alt', function ( req, res ) {
    var type = type
    var types = types

  	res.render( 'register/beneficial-owner-type-alt', {
      type: type,
      types: types
    });
  })
  router.post('/register/beneficial-owner-type-alt', function (req, res) {
    var type = type
    var types = types
    var errors = []
    var typeHasError = false
    var typesHasError = false

    if (typeof req.session.data['type'] === 'undefined') {
      typeHasError = true
      errors.push({
        text: 'Select which types of beneficial owners have been identified',
        href: '#type'
      })
    }
    if (typeof req.session.data['types'] === 'undefined') {
      typesHasError = true
      errors.push({
        text: 'Select which types of beneficial owners have been identified',
        href: '#types'
      })
    }

    if (typeHasError || typesHasError) {
      res.render('register/beneficial-owner-type-alt', {
        type: type,
        types: types,
        errorType: typeHasError,
        errorList: errors
      })
    } else {
      res.redirect('/register/beneficial-owner-type-alt')
    }
  })
}
