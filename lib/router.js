Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.map(function(){
  this.route('tempIntro', {path: '/'});

  this.route('postPage', {
    path: '/posts/:_id',
    data: function() { return Posts.findOne(this.params._id); }
  });

  this.route('who', {path: '/who'});
  this.route('what', {path: '/what'});
  this.route('when', {path: '/when'});
});
Router.onBeforeAction('loading');
