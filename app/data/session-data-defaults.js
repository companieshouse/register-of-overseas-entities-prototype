/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  // Insert values here

  "email": [ "user@testcompany.co.uk" ],
  "trust-name": [ "Islands Trust" ],
  //remember to put the comma back at the end of line 25!
  //"contact-full-name": [ "Claire Contact" ],
  //"contact-email": [ "contact@testcompany.co.uk" ],
  // Set the "are we signed in?" variable (gSignedIn) to FALSE as its default
  "gSignedIn": [ "false" ],
  // signOutFirstTrigger is specific to the sign-out page to ensure the error messaging can come into play
  "signOutFirstTrigger": [ "yes" ],
    // Overseas entity name
  "overseas-name": [ "DA Investments Limited" ]
}
