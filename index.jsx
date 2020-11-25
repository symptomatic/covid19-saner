import React from 'react';

import ReportingPage from './client/ReportingPage';

import { 
  ReportingButtons,
  OrganizationsButtons,
  MeasuresButtons,
  MeasureReportsButtons,  
} from './client/FooterButtons';

var DynamicRoutes = [{
  'name': 'ReportingPage',
  'path': '/reporting',
  'component': ReportingPage,
  'requireAuth': true
}];

let FooterButtons = [{
  pathname: '/reporting',
  component: <ReportingButtons />
}, {
  pathname: '/organizations',
  component: <OrganizationsButtons />
}, {
  pathname: '/measures',
  component: <MeasuresButtons />
}, {
  pathname: '/measure-reports',
  component: <MeasureReportsButtons />
}];



export { 
  DynamicRoutes, 
  ReportingPage,
  FooterButtons
};
