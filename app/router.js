import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('hosts');

  this.resource('frontends', function(){
    this.resource('frontend', { path: ':frontendId' }, function() {});
  });

  this.resource('backends', function(){
    this.resource('backend', { path: ':backendId' }, function() {});
  })
});
