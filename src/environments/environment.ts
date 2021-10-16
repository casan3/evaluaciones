// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  apiUrl: 'http://us-central1-evaluaciones-b9259.cloudfunctions.net/api/',
  firebase: {
    projectId: 'evaluaciones-b9259',
    appId: '1:989911190097:web:f3988494aea16ee9b54670',
    storageBucket: 'evaluaciones-b9259.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyCAxjy0464M1_QsxV6SCHpG645WQsFxV8U',
    authDomain: 'evaluaciones-b9259.firebaseapp.com',
    messagingSenderId: '989911190097',
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
