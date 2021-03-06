module.exports = function (router) {
  router.post('/register/sign-in', function (req, res) {
    var errors = []
    var emailHasError = false
    var passwordHasError = false
    if (req.session.data['email'] === '') {
      emailHasError = true
      errors.push({
        text: 'Enter your email address',
        href: '#email'
      })
    }
    if (req.session.data['password'] === '') {
      passwordHasError = true
      errors.push({
        text: 'Enter your password',
        href: '#password'
      })
    }
    if (emailHasError || passwordHasError) {
      res.render('register/sign-in', {
        errorEmail: emailHasError,
        errorPassword: passwordHasError,
        errorList: errors
      })
    } else {
      res.redirect('/register/presenter')
    }
  })
}
