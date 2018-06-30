import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Content = new Mongo.Collection('content');

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  Meteor.publish('content', () => Content.find());
}

Meteor.methods({
  async 'content.findOne'(name) {
    check(name, String);
    return await Content.findOne({ name });
  }
});