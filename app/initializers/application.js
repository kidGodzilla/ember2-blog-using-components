export default {
  name: 'app',
    initialize: (container, application) => {
    application.inject('component', 'store', 'store:main');
  }
};
