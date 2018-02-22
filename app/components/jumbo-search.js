import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({

  typedStrings: [
    "Hi there, do you have 10 seconds?",
    "We're a new company.",
    "Current phase = market feasibility.",
    "We need your help.",
    "Please create a simulated travel trip.",
    "Your clicks are a vital metric.",
    "Thank you!"
  ],

  search: 'az_search',

  introMsg: true,

  bckimg: computed('search', function () {
    return this.get('search');
  }),

  init() {
    this._super();

    let timer = 11;

    setTimeout(() => {
      Ember.$('#timer').show();
      setInterval(() => {
        timer -= 1;
        Ember.$('#timer').text(timer);
        if (timer === -1) {
          Ember.$('#timer').hide();
          $('.element').fadeOut('slow');
          this.set('introMsg', false);
        }
      }, 1500);
    }, 3000);

  },

  actions: {

    changeBackground(bigSmall) {
      console.log('changeBackground', bigSmall);
      this.set('bigSmall', bigSmall);
    },

    skipIntro() {
      this.set('introMsg', false);
    }

  }

});
