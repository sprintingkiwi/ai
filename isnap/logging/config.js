
// A list of assignments that users can select from when using Snap
// The assignmentID will be logged with each statement
// 'test' and 'view' will not show up on the selection menu
window.assignments = {
    'none': {
        name: 'None',
        hint: 'just using Snap',
    },
//     'lightsCameraActionHW': {
//         name: 'Lights, Camera, Action!',
//         hint: 'Homework 1',
//     },
//     'polygonMakerLab': {
//         name: 'Polygon Maker',
//         hint: 'In Lab Activity 2',
//         hints: true,
//     },
//     'squiralHW': {
//         name: 'Squiral',
//         hint: 'Homework 2',
//         hints: true,
//     },
//     'guess1Lab': {
//         name: 'Guessing Game Part 1',
//         hint: 'In Lab Activity 3',
//         hints: true,
//     },
//     'guess2HW': {
//         name: 'Guessing Game Part 2',
//         hint: 'Homework 3',
//         hints: true,
//         prequel: 'guess1Lab',
//     },
//     'guess3Lab': {
//         name: 'Guessing Game Part 3',
//         hint: 'In Lab Activity 4',
//         prequel: 'guess2HW',
//     },
//     'project': {
//         name: 'SNAP Project',
//         hint: 'Project Deliverable 1',
//     },
//     'test': {
//         name: 'Testing',
//     },
//     'view': {
//         name: 'Viewing',
//     },
};

// If true, requires the Snap users to select an assignment before
// proceeding. Assignments can be pre-specified by using the url
// snap.html?assignment=id
window.requireAssignment = false;
// Allows the user to change their assignment by clicking on project title
// window.allowChangeAssignment = true;

// If true, users are required to login before they can use the system
window.requireLogin = false;

// Specify to override the default Snap cloud URL
// window.snapCloudURL = 'https://snap.apps.miosoft.com/SnapCloud';

// Specify the login header's logo and title text
window.loginHeader = {
    logo: 'login/NCStateLogoWhite.png',
    description: 'Exploring Machine Learning in Snap!'
};

const local_storage_logger = (item) => {
    const log_counter = localStorage.getItem('log counter') || 1;
    localStorage.setItem(log_counter, JSON.stringify(item));
    localStorage.setItem('log counter', +log_counter+1);
};

const fetch_logs = () => {
    // here for testing and debugging
    let last_log_counter = localStorage.getItem('log counter');
    if (!last_log_counter) {
        return "[]";
    }
    let logs = "";
    for (let i = 1; i < last_log_counter; i++) {
         logs += localStorage.getItem(i) + ",";
    }
    return "[" + logs.slice(0, logs.length-1) + "]"; // remove last comma
};

// Create the logger you want to use on this snap deployment
window.createLogger = function(assignmentID) {
    // Logs to the local storage
    return new window.ConsoleLogger(50, local_storage_logger);
};

// If this function returns true, Snap will not confirm before
// you leave the page. This is handy for debugging.
window.easyReload = function(assignmentID) {
    return (assignmentID == 'test' || assignmentID == 'view');
};
