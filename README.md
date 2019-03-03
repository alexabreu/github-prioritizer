![Screenshot](demo.gif)

# GitHub Issue Prioritizer

This application is built using React, Redux, Thunk, React-Router, and the Material-UI component library. The app allows a user to view his/her GitHub repos and the issues associated with a give repo. The user can then also reorder the priority of a repo's issues via drag & drop.

### Local Storage

The application's state gets seralized to local storage for an ultra-quick user and developer experience.

### Remaining Work

Currently the priority set by the user is not persisted to a server-side store. Future work would allow the priority data structure (an array of issue ids) to be posted to an API endpoint and then retrieved in tandem with with the repo's GitHub issues.

### Installing the app
`npm install`

### Starting up the app
`npm start`

### Testing the app
`npm run test`
