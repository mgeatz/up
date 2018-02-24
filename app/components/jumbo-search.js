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
			}, 1400);
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
