import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({

	typedStrings: [
		"Hello there . . . We're a new air travel option, and we need your help! " +
    "Market feasibility relies on simulated trip data . . . " +
    "The analytics gathered are vital to our startup success!",
	],

	search: 'mn_search',

	introMsg: true,

	bckimg: computed('search', function () {
		return this.get('search');
	}),


	init() {
		this._super();

		let timer = 16;

		if (sessionStorage.getItem('alreadyDisplayedIntroMsg') &&
        location.search !== '?dev=1') {
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
			}, 1200);
			sessionStorage.setItem('alreadyDisplayedIntroMsg', true);
		});

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
