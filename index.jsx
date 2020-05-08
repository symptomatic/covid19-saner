import React from 'react';

import ReportingPage from './client/ReportingPage';

import { 
  ReportingButtons,
  OrganizationsButtons,
  MeasuresButtons,
  MeasureReportsButtons,
  TasksButtons,
  ListsButtons,
  QuestionnairesButtons,
  QuestionnaireResponsesButtons,
  ValueSetsButtons,
  ExplanationOfBenefitsButtons
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
}, {
  pathname: '/tasks',
  component: <TasksButtons />
}, {
  pathname: '/lists',
  component: <ListsButtons />
}, {
  pathname: '/questionnaires',
  component: <QuestionnairesButtons />
}, {
  pathname: '/questionnaire-responses',
  component: <QuestionnaireResponsesButtons />
}, {
  pathname: '/valuesets',
  component: <ValueSetsButtons />
}, {
  pathname: '/explanation-of-benefits',
  component: <ExplanationOfBenefitsButtons />
}];



export { 
  DynamicRoutes, 

  ReportingPage,

  FooterButtons
};
