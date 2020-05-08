import React from 'react';

import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { HTTP } from 'meteor/http';

import { Button } from '@material-ui/core';

import { get } from 'lodash';
import JSON5 from 'json5';

import ReportingMethods from '../lib/ReportingMethods';



// =========================================================================================
// HELPER FUNCTIONS


// function isFhirServerThatRequiresApiKey(){
//   if(["https://syntheticmass.mitre.org/v1/fhir"].includes(get(Meteor, 'settings.public.interfaces.default.channel.endpoint'))){
//     return true;
//   } else {
//     return false
//   }
// }


//========================================================================================================

import {
  fade,
  ThemeProvider,
  MuiThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
  useTheme
} from '@material-ui/core/styles';

  // Global Theming 
  // This is necessary for the Material UI component render layer
  let theme = {
    appBarColor: "#f5f5f5 !important",
    appBarTextColor: "rgba(0, 0, 0, 1) !important",
  }

  // if we have a globally defined theme from a settings file
  if(get(Meteor, 'settings.public.theme.palette')){
    theme = Object.assign(theme, get(Meteor, 'settings.public.theme.palette'));
  }

  const muiTheme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      appBar: {
        main: theme.appBarColor,
        contrastText: theme.appBarTextColor
      },
      contrastThreshold: 3,
      tonalOffset: 0.2
    }
  });


  const buttonStyles = makeStyles(theme => ({
    west_button: {
      cursor: 'pointer',
      justifyContent: 'left',
      color: theme.palette.appBar.contrastText,
      marginLeft: '20px',
      marginTop: '15px'
    },
    east_button: {
      cursor: 'pointer',
      justifyContent: 'left',
      color: theme.palette.appBar.contrastText,
      right: '20px',
      marginTop: '15px',
      position: 'absolute'
    }
  }));


//============================================================================================================================
// FETCH






export function ReportingButtons(props){
  const buttonClasses = buttonStyles();

  function initializeMeasures(){
    console.log('Initializing Measures');

    ReportingMethods.initializeSampleMeasure();
    ReportingMethods.initializeSampleMeasureReport();
    // LocationMethods.initializeHospitals();
  }
  return (
    <MuiThemeProvider theme={muiTheme} >
      <Button onClick={ initializeMeasures.bind() } className={ buttonClasses.west_button }>
        Initialize Measures
      </Button>      
    </MuiThemeProvider>
  );
}





//============================================================================================================================
// Organizations

export function OrganizationsButtons(props){
  const buttonClasses = buttonStyles();

  function toggleLayout(){
    console.log('toggleLayout!');

    Session.toggle('OrganizationsPage.onePageLayout')
  }
  function initializeOrganizations(){
    console.log('Initialize Medicare Hospitals!');

    ReportingMethods.initializeMedicareInpatientFacilities();
  }
  return (
    <div>
      <Button className={buttonClasses.west_button} onClick={ initializeOrganizations.bind(this) } >
        Initialize Medicare Hospitals
      </Button>
      <Button className={buttonClasses.west_button} onClick={ toggleLayout.bind(this) } >
        Toggle Layout Screen
      </Button>
    </div>
  );
}




//============================================================================================================================
// Measures

export function MeasuresButtons(props){
  const buttonClasses = buttonStyles();

  function toggleLayout(){
    console.log('toggleLayout!');

    Session.toggle('MeasuresPage.onePageLayout')
  }
  function initializeMeasures(){
    console.log('Initializing Measures!');

    ReportingMethods.initializeSampleMeasures();
  }
  return (
    <div>
      <Button className={buttonClasses.west_button} onClick={ initializeMeasures.bind(this) } >
        Initialize CDC & FEMA Measures
      </Button>
      <Button className={buttonClasses.west_button} onClick={ toggleLayout.bind(this) } >
        Toggle Layout Screen
      </Button>
    </div>
  );
}


//============================================================================================================================
// Measure Reports

export function MeasureReportsButtons(props){
  const buttonClasses = buttonStyles();

  function toggleLayout(){
    console.log('toggleLayout!');

    Session.toggle('MeasureReportsPage.onePageLayout')
  }
  function clearMeasureReports(){
    MeasureReports.remove({});
  }
  function initializeSampleReports(){
    console.log('Initializing Sample Reports!');

    ReportingMethods.initializeSampleMeasureReports();
  }
  return (
    <div>
      <Button className={buttonClasses.west_button} onClick={ initializeSampleReports.bind(this) } >
        Initialize Sample Reports
      </Button>
      <Button className={buttonClasses.west_button} onClick={ clearMeasureReports.bind(this) } >
        Clear
      </Button>
      <Button className={buttonClasses.west_button} onClick={ toggleLayout.bind(this) } >
        Toggle Layout Screen
      </Button>
    </div>
  );
}



//============================================================================================================================
// Tasks

export function TasksButtons(props){
  const buttonClasses = buttonStyles();

  function toggleLayout(){
    console.log('toggleLayout!');

    Session.toggle('TasksPage.onePageLayout')
  }
  function clearTasks(){
    Tasks.remove({});
  }
  function initializeSampleReports(){
    console.log('Initializing Sample Tasks!');

    //ReportingMethods.initializeSampleMeasureReports();
  }
  return (
    <div>
      <Button className={buttonClasses.west_button} onClick={ initializeSampleReports.bind(this) } >
        Initialize Sample Tasks
      </Button>
      <Button className={buttonClasses.west_button} onClick={ clearTasks.bind(this) } >
        Clear
      </Button>
      <Button className={buttonClasses.west_button} onClick={ toggleLayout.bind(this) } >
        Toggle Layout Screen
      </Button>
    </div>
  );
}


//============================================================================================================================
// Lists

export function ListsButtons(props){
  const buttonClasses = buttonStyles();

  function toggleLayout(){
    console.log('toggleLayout!');

    Session.toggle('ListsPage.onePageLayout')
  }
  function clearLists(){
    Lists.remove({});
  }
  function initializeSampleLists(){
    console.log('Initializing Sample Lists!');

    //ReportingMethods.initializeSampleMeasureReports();
  }
  return (
    <div>
      <Button className={buttonClasses.west_button} onClick={ initializeSampleLists.bind(this) } >
        Initialize Sample Lists
      </Button>
      <Button className={buttonClasses.west_button} onClick={ clearLists.bind(this) } >
        Clear
      </Button>
      <Button className={buttonClasses.west_button} onClick={ toggleLayout.bind(this) } >
        Toggle Layout Screen
      </Button>
    </div>
  );
}


//============================================================================================================================
// Questionnaires

export function QuestionnairesButtons(props){
  const buttonClasses = buttonStyles();

  function toggleLayout(){
    console.log('toggleLayout!');

    Session.toggle('QuestionnairesPage.onePageLayout')
  }
  function clearQuestionnaires(){
    Questionnaires.remove({});
  }
  function initializeSampleQuestionnaires(){
    console.log('Initializing Sample Questionnaires!');

    //ReportingMethods.initializeSampleMeasureReports();
  }
  return (
    <div>
      <Button className={buttonClasses.west_button} onClick={ initializeSampleQuestionnaires.bind(this) } >
        Initialize Sample Questionnaires
      </Button>
      <Button className={buttonClasses.west_button} onClick={ clearQuestionnaires.bind(this) } >
        Clear
      </Button>
      <Button className={buttonClasses.west_button} onClick={ toggleLayout.bind(this) } >
        Toggle Layout Screen
      </Button>
    </div>
  );
}


//============================================================================================================================
// Questionnaire Responses

export function QuestionnaireResponsesButtons(props){
  const buttonClasses = buttonStyles();

  function toggleLayout(){
    console.log('toggleLayout!');

    Session.toggle('QuestionnaireResponsesPage.onePageLayout')
  }
  function clearQuestionnaireResponses(){
    QuestionnaireResponses.remove({});
  }
  function initializeSampleQuestionnaireResponses(){
    console.log('Initializing Sample QuestionnaireResponses!');

    //ReportingMethods.initializeSampleMeasureReports();
  }
  return (
    <div>
      <Button className={buttonClasses.west_button} onClick={ initializeSampleQuestionnaireResponses.bind(this) } >
        Initialize Sample QuestionnaireResponses
      </Button>
      <Button className={buttonClasses.west_button} onClick={ clearQuestionnaireResponses.bind(this) } >
        Clear
      </Button>
      <Button className={buttonClasses.west_button} onClick={ toggleLayout.bind(this) } >
        Toggle Layout Screen
      </Button>
    </div>
  );
}


//============================================================================================================================
// Valuesets

export function ValueSetsButtons(props){
  const buttonClasses = buttonStyles();

  function toggleLayout(){
    console.log('toggleLayout!');

    Session.toggle('ValueSetsPage.onePageLayout')
  }
  function clearValueSets(){
    // ValueSets.remove({});
  }
  function initializeSampleValueSets(){
    console.log('Initializing Sample ValueSets!');

    //ReportingMethods.initializeSampleMeasureReports();
  }
  return (
    <div>
      <Button className={buttonClasses.west_button} onClick={ initializeSampleValueSets.bind(this) } >
        Initialize Sample ValueSets
      </Button>
      <Button className={buttonClasses.west_button} onClick={ clearValueSets.bind(this) } >
        Clear
      </Button>
      <Button className={buttonClasses.west_button} onClick={ toggleLayout.bind(this) } >
        Toggle Layout Screen
      </Button>
    </div>
  );
}


//============================================================================================================================
// Explanation Of Benefits

export function ExplanationOfBenefitsButtons(props){
  const buttonClasses = buttonStyles();

  function toggleLayout(){
    console.log('toggleLayout!');

    Session.toggle('ExplanationOfBenefitsPage.onePageLayout')
  }
  function clearExplanationOfBenefits(){
    ExplanationOfBenefits.remove({});
  }
  function initializeSampleExplanationOfBenefits(){
    console.log('Initializing Sample ExplanationOfBenefits!');

    //ReportingMethods.initializeSampleMeasureReports();
  }
  return (
    <div>
      <Button className={buttonClasses.west_button} onClick={ initializeSampleExplanationOfBenefits.bind(this) } >
        Initialize Sample ExplanationOfBenefits
      </Button>
      <Button className={buttonClasses.west_button} onClick={ clearExplanationOfBenefits.bind(this) } >
        Clear
      </Button>
      <Button className={buttonClasses.west_button} onClick={ toggleLayout.bind(this) } >
        Toggle Layout Screen
      </Button>
    </div>
  );
}