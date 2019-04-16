
Accounts.onCreateUser(function(options, user) {
    console.log(options)
    let customizedUser

    let network = Object.keys(user.services);
    console.log(`${network} network`)
      if ( network == 'google' ) {
        var userData =  user.services.google
        customizedUser = Object.assign({
          dexterity: '1',
          email : userData.email,
          network : network,
          name : userData.name,
          locale : userData.locale,
          picture : userData.picture,
          "verify-email" : userData.verified_email,
          accessToken : userData.accessToken
        }, user);
    } else{
      var firstname = options.profile.firstName
      var lastname = options.profile.lastName
      customizedUser = Object.assign({
        dexterity: '1',
        email : options.email,
        name :  `${firstname.charAt(0).toUpperCase() +firstname.slice(1)} ${lastname.charAt(0).toUpperCase() +lastname.slice(1)}`
      }, user);
    }
  
    return customizedUser;
  })

