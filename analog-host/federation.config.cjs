const {
  withNativeFederation,
  shareAll,
} = require("@angular-architects/native-federation/config");
module.exports = withNativeFederation({
  remotes: {
    mfe1: "http://localhost:4201/remoteEntry.json",
  },

  shared: {
    // ...shareAll({
    //   singleton: true,
    //   strictVersion: true,
    //   requiredVersion: "auto",
    // }),
  },

  skip: [
    // "rxjs/ajax",
    // "rxjs/fetch",
    // "rxjs/testing",
    // "rxjs/webSocket",
    // "rxjs/operators",
    // Add further packages you don't need at runtime
  ],

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
});
