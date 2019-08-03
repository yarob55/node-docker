import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


// deploy:
//   provider: elasticbeanstalk
//   region: "us-east-2"
//   app: "node-docker"
//   env: "NodeDocker-env"
//   bucket_name: "elasticbeanstalk-us-east-2-925342842908"
//   bucket_path: "node-docker"
//   on:
//     branch: master
//   access_key_id: $AWS_ACCESS_KEY
//   secret_access_key:
//     secret: "$AWS_SECRET_KEY"

