import React from 'react';

import ReportingPage from './client/ReportingPage';

import { 
  ReportingButtons
} from './client/FooterButtons';

import { HeaderNavigation } from './client/HeaderNavigation';

var DynamicRoutes = [{
  'name': 'ReportingPage',
  'path': '/reporting',
  'component': ReportingPage,
  'requireAuth': true
}];

let FooterButtons = [{
  pathname: '/reporting',
  component: <ReportingButtons />
}];



export { 
  DynamicRoutes, 

  ReportingPage,
  
  HeaderNavigation,
  FooterButtons
};
