module.exports = function (router) {
  router.get( '/register/trusts/trust-involved', function ( req, res ) {
  	var trustTypes = req.session.data['trustTypes']
    res.render( 'register/trusts/trust-involved', {
      trustTypes: trustTypes
    })
})
router.post('/register/trusts/trust-involved', function (req, res) {
  var trustTypes = req.session.data['trustTypes']

  switch (trustTypes) {
      case "historical":
        res.redirect('/register/trusts/trust-historical-beneficial-owner');
        console.log('historical');
        break;
      case 'individual-trusts':
        res.redirect('/register/trusts/trust-individual');
        console.log('individual');
        break;
      case 'ole-trusts':
        res.redirect('/register/trusts/trust-ole');
        console.log('ole');
        break;
  }
})

router.get( '/register/trusts/trust-historical-beneficial-owner', function ( req, res ) {
  res.render( 'register/trusts/trust-historical-beneficial-owner')
  })
}
