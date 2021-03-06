import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createPost: function (model) {
      let post = this.store.createRecord('post', {
        title: model.title,
        text: model.text,
        author: model.author,
        createdDate: new Date()
      });
      post.save();
      Ember.$("#NewPost")[0].reset();
    }
  }
});
