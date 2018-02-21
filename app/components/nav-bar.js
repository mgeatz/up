import Component from '@ember/component';

export default Component.extend({

  burger: null,

  hiddenxs: 'hidden-xs',

  actions: {

    toggleBurger(burger) {
      if (burger === null || burger !== 'is-active') {
        this.set('burger', 'is-active');
        this.set('hiddenxs', '');
      } else {
        this.set('burger', '');
        this.set('hiddenxs', 'hidden-xs');
      }
    }

  }

});
