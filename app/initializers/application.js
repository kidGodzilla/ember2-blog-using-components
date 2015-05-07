export default {
  name: 'app',
    initialize: function initialize(container, application) {
    application.inject('component', 'store', 'store:main');
  }
};
