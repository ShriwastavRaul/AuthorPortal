// An example configuration file.
exports.config = {
  directConnect: true,
  

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  params:{
  	user: 'authort',
  	password: 'pass+123+456',
  	baseURL: 'https://authorportal-qa.packtpub.com',

  },

  

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['./Test/A_login_spec.js','./Test/B_landingPage_spec.js', './Test/C_projectPage_spec.js'],


  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    
   defaultTimeOut: 60000,
    
  },
};
