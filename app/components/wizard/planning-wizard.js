import Component from '@ember/component';

export default Component.extend({

  arizona: false,

	bookIt: false,

  dateOfDeparture: null,

  dateOfReturn: null,

  departureDate: null,

  departFrom: true,

  minDate: new Date(),

  minnesota: false,

  numberOfTravelers: 1,

  step0: true,

  step1: false,

  step2: false,

  step3: false,

	// outboundSeats: Ember.computed('outboundFlightSeats', function(){
	// 	return `${this.get('outboundFlightSeats')}`;
	// }),
	//
	// returnSeats: Ember.computed('returnFlightSeats', function(){
	// 	return `${this.get('returnFlightSeats')}`;
	// }),


	_calculateTotal() {
    let numberOfTravelers = parseInt(this.get('numberOfTravelers')),
      returnFlight = this.get('returnFlight'),
      cost = null;

    console.log('returnFlight...');
    if (Ember.isPresent(returnFlight)) {
			cost = numberOfTravelers * 725 * 2;
    } else {
      cost = numberOfTravelers * 725;
    }

    this.set('totalMoney', cost);
  },


  actions: {

    changeBackground(bigSmall) {
      this.sendAction('changeBackground', bigSmall);
    },


		desiredCapacity(event) {
			this.set('numberOfTravelers', Ember.$('.numberOfTravelers').val());
			console.log('desiredCapacity()...', event, this.get('numberOfTravelers'));
		},


		editDetails() {
			this.set('step0', true);
			this.set('step1', true);
			this.set('step2', false);
			this.set('step3', false);
			this.set('flightPicker', false);
			this.set('bookIt', false);
			this.send('changeBackground', 'small');
		},


		findFlights() {
			this.set('step0', false);
			this.set('step1', true);
			this.set('step2', true);
			this.set('step3', false);
			this.set('flightPicker', true);
			this.set('bookIt', false);
			this.send('changeBackground', 'big');
		},


		flightDetails(details) {
    	this.set('details', details);
      this.set('outboundFlight', details.outboundFlightId);
			this.set('outboundFlightTakeoff', details.outboundFlightTakeoff);
			this.set('outboundFlightLanding', details.outboundFlightLanding);
			this.set('outboundFlightSeats', details.outboundFlightSeats);

			this.set('returnFlight', details.returnFlightId);
			this.set('returnFlightTakeoff', details.returnFlightTakeoff);
			this.set('returnFlightLanding', details.returnFlightLanding);
			this.set('returnFlightSeats', details.returnFlightSeats);

			if (details.bookIt) {
				this.set('step0', false);
				this.set('step1', true);
				this.set('step2', true);
				this.set('step3', true);
				this.set('flightPicker', false);
        this.set('bookIt', true);

        this._calculateTotal();
      }
		},


		backToDetails() {
			this.set('step0', true);
			this.set('step1', true);
			this.set('step2', false);
			this.set('step3', false);
			this.set('flightPicker', false);
			this.set('bookIt', false);
			this.send('changeBackground', 'small');
    },


		backToFlights() {
			this.set('step0', false);
			this.set('step1', true);
			this.set('step2', true);
			this.set('step3', false);
			this.set('flightPicker', true);
			this.set('bookIt', false);
    },


    selectDeparture(state) {
      this.set('step1', true);

      if (state === 'az') {
        this.set('arizona', true);
        this.set('minnesota', false);
      } else {
        this.set('arizona', false);
        this.set('minnesota', true);
      }

      this.sendAction('changeBackgroundImage', state);
    },


		thankYou() {
      // submit email
      let email_address = this.get('email_address');
      console.log('email_address ', email_address);
    },


    pickDate(departOrReturn) {

      if (departOrReturn === 'depart') {
        this.set('dateOfDeparture', Ember.$('.date_picker').val());
      }

      if (departOrReturn === 'return') {
        this.set('dateOfReturn', Ember.$('.date_picker_return').val());
      }

    },


    successfullyBook() {
    	let arizona = this.get('arizona'),
				startingLocation = arizona !== false ? 'AZ' : 'MN',
				details = this.get('details');

    	details.numberOfTravelers = this.get('numberOfTravelers');
    	details.startingLocation = startingLocation;

			// send JSON object
				// then
      	location.href = 'success';

    }

  }

});
