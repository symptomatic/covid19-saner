import React from 'react';

import ReportingPage from './client/ReportingPage';

import { 
  ReportingButtons
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
}];



export { 
  DynamicRoutes, 

  ReportingPage,

  FooterButtons
};
