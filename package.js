Package.describe({
    name: 'symptomatic:covid19-saner',
<<<<<<< HEAD
    version: '0.4.9',
=======
    version: '0.4.8',
>>>>>>> bb89e4d44608b9319b039ad3331a0d97ed35d3e5
    summary: 'Covid19 - Reporting - SANER (Situational Awareness of Novel Epidemic Response',
    git: 'https://github.com/symptomatic/covid19-saner',
    documentation: 'README.md'
});
  

Package.onUse(function(api) {
    api.versionsFrom('1.4');
    
    api.use('meteor-base@1.4.0');
    api.use('ecmascript@0.13.0');
    api.use('react-meteor-data@2.1.2');
    api.use('session');
    api.use('mongo');
    api.use('http');
    api.use('ejson');
    api.use('random');
    api.use('fourseven:scss');

<<<<<<< HEAD
    api.use('clinical:hl7-fhir-data-infrastructure@6.8.4');
=======
    api.use('clinical:hl7-fhir-data-infrastructure@6.8.2');
>>>>>>> bb89e4d44608b9319b039ad3331a0d97ed35d3e5
    
    api.mainModule('index.jsx', 'client');
});

