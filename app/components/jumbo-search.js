import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({

	typedStrings: [
		"Hello",
		"Do you have 10 seconds?",
		"We are new.",
		"Current phase = market feasibility.",
		"We need your help...",
		"Please create a simulated travel trip.",
		"Your clicks are vital!",
		"Thanks!"
	],

	search: 'mn_search',

	introMsg: true,

	bckimg: computed('search', function () {
		return this.get('search');
	}),


	init() {
		this._super();

		let timer = 11;

    if (sessionStorage.getItem('alreadyDisplayedIntroMsg')) {
      this.set('introMsg', false);
    }

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
			}, 1400);
      sessionStorage.setItem('alreadyDisplayedIntroMsg', true);
		}, 3000);

	},


	actions: {

		changeBackground(bigSmall) {
			console.log('changeBackground', bigSmall);
			this.set('bigSmall', bigSmall);
		},


    changeBackgroundImage(state) {
			console.log('search', state + '_search');
      this.set('search', state + '_search');
		},


		skipIntro() {
			this.set('introMsg', false);
		},


    successfullyBook() {
      this.sendAction('successfullyBook');
    }

	}

});
