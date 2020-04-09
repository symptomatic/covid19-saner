# COVID19 on FHIR - Reporting - SANER (Situational Awareness for Novel Epidemic Response)  


#### Prerequisites  
This project requires the following platform libraries and projects:  

- [Meteor Javascript Framework](https://www.meteor.com/)  
- [Node on FHIR](https://github.com/symptomatic/node-on-fhir)  
- [Covid19 on FHIR](https://github.com/symptomatic/covid19-on-fhir)  
- [Synthea - Covid19 Module](https://github.com/synthetichealth/synthea/issues/679)  




#### Installation  
This project is best run on Macintosh with Chrome, and is intended to run on Linux servers in an AWS cloud environment.  Compiling to Docker is supported, but an advanced feature.

```
# install Meteor, if you don't already have it
# this is the build tool / compiler  
curl https://install.meteor.com/ | sh  

# clone the Node on FHIR boilerplate
# this boilerplate is similar to WordPress
# and supports a plugin/package architecture
git clone https://github.com/symptomatic/node-on-fhir  
cd node-on-fhir  

# clone this package into the project
cd packages
git clone https://github.com/symptomatic/covid19-on-fhir  
git clone https://github.com/symptomatic/covid19-geomapping  
git clone https://github.com/symptomatic/covid19-reporting  

# install dependencies
cd ..
meteor npm install

# run the application  
meteor run --extra-packages symptomatic:covid19-on-fhir,symptomatic:covid19-geomapping,symptomatic:covid19-reporting --settings packages/covid19-on-fhir/configs/settings.covid19.maps.json   
```

Note installation will be greatly helped if you get yourself a Google Maps API key:
https://developers.google.com/maps/documentation/javascript/get-api-key  

After getting it, put it into `configs/settings.covid19.maps.localhost.json`.  Put it under `public.google.maps.apiKey`.  

#### References  
- [CDC - Geospatial Data Resources](https://www.cdc.gov/gis/geo-spatial-data.html)  
- [USGS - National Geospatial Program](https://www.usgs.gov/core-science-systems/national-geospatial-program/national-map)  
- [Homeland Infrastructure Foundation-Level Data (HIFLD)](https://hifld-geoplatform.opendata.arcgis.com/search?groupIds=2900322cc0b14948a74dca886b7d7cfc)  
- [How Epidemics Spread and End](https://www.washingtonpost.com/graphics/2020/health/coronavirus-how-epidemics-spread-and-end/)    
- [HL7 SANER - Situation Awareness for Novel Epidemic Response - Data Sets](https://github.com/AudaciousInquiry/saner-ig/wiki/Data-Sets)   


#### Team Acknowledgements  
- Jason Walonoski, _Bioinformatics_ (Synthea)
- James Agnew, _FHIR Hosting_ (Smile CDR)
- Chris Hafey, _DBA Backup, Business Administration_, (Fomerly Nucleus.io)  
- Andrei Rusu, _Quality Control_, (Nightwatch.js)     
- Jae Brodsky, _Statistician_  
- Sarah Sims, _Business Administration_   
- David Donohue, _Medical Advisory Board_  

#### Acknowledgements (Product Development, Review, & Early Testing)    
- Ken Salyards (SAMSHA, Health and Human Services)  
- Andrea Pitkus, PhD, MLS, (UW School of Medicine and Public Health)  
- Viet Nguyen, MD, (Board Member at Health Level Seven International)   
- Brett Johnson (Personalized Medicine Strategic Planning)   
- Mohit Saigal (Customer Focused IT and PM Leader)  
- Brian Jackson (Academic Clinical Pathologist)  
- Russell Hamm (Evangalist)  
- Rex Stock (Evangalist)  
 