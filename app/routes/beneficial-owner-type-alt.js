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
res.redirect( '/register/beneficial-owner-individual' );
})


}
