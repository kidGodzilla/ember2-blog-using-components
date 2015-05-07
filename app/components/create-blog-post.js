import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createPost: function (model) {
      var post = this.store.createRecord('post', {
        title: model.title,
        text: model.text,
        author: model.author,
        createdDate: new Date()
      });
      post.save();
      $("#NewPost")[0].reset();
    }
  }
});
