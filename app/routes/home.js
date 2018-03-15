import Route from '@ember/routing/route';

export default Route.extend({

  setupController(controller) {
    if (window.innerWidth <= 768) {
      controller.set('bigSmall', 'big');
    } else {
      controller.set('bigSmall', 'small');
    }
  }

});
