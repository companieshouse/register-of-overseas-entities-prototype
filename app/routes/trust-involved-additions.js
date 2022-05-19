

module.exports = function (router) {
  router.get( '/register/trusts/trust-involved-additions', function ( req, res ) {
  	var trustTypesAdditions = req.session.data['trustTypesAdditions']
    res.render( 'register/trusts/trust-involved-additions', {
      trustTypesAdditions: trustTypesAdditions
    })
})
router.post('/register/trusts/trust-involved-additions', function (req, res) {
  var trustTypesAdditions = req.session.data['trustTypesAdditions']

  switch (trustTypesAdditions) {
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
