import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
// import { check } from 'meteor/check';

export const Articles = new Mongo.Collection('articles');

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  Meteor.publish('articles', () => Articles.find());
}

Meteor.methods({

});