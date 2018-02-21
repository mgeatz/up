import Component from '@ember/component';
import {computed} from '@ember/object';
import typed from 'typed';

export default Component.extend({

  typedStrings: [
    "Hi there,",
    "do you have 10 seconds?",
    "We are in start-up mode",
    "current phase = market feasibility",
    "We need your help.",
    "Please create a simulated travel trip.",
    "Your clicks are vital to our success.",
    "Thank you!"
  ],

  search: 'az_search',

  bckimg: computed('search', function () {
    return this.get('search');
  }),

  init() {
    this._super();

    let timer = 10;

    setTimeout(() => {
      Ember.$('#timer').show();
      setInterval(() => {
        timer -= 1;
        Ember.$('#timer').text(timer);
        if (timer === -1) {
          Ember.$('#timer').hide();
          $('.element').fadeOut('slow');
        }
      }, 1150);

    }, 2900);

  },

});
