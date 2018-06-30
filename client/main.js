import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.js';

Meteor.startup(async () => {
  await render(<App/>, document.getElementById('root'));
  await document.body.children[1].classList.remove('loading');
});
