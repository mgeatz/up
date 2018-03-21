import Component from '@ember/component';

export default Component.extend({

  arizona: false,

  bookIt: false,

  dateOfDeparture: null,

  dateOfReturn: null,

  departureDate: null,

  departFrom: true,

  destination: 'MINNESOTA',

  florida: false,

  minDate: new Date(),

  minnesota: false,

  numberOfTravelers: 1,

  step0: true,

  step1: false,

  step2: false,

  step3: false,


  _calculateTotal() {
    let numberOfTravelers = parseInt(this.get('numberOfTravelers')),
        returnFlight      = this.get('returnFlight'),
        tempCost          = null;

    if (Ember.isPresent(returnFlight)) {
      tempCost = numberOfTravelers * 1399 * 2;
    } else {
      tempCost = numberOfTravelers * 1399;
    }

    let cost = tempCost + (tempCost * .0725);
    this.set('totalMoney',  Number(cost.toFixed(2)).toLocaleString());
  },


  actions: {


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


    changeBackground(bigSmall) {
      let totalMoney = this.get('totalMoney');

      if (totalMoney && bigSmall == 'small' || window.innerWidth < 768) {
        console.log('changeBackground to big');
        this.sendAction('changeBackground', 'big');
      } else {
        console.log('changeBackground', bigSmall);
        this.sendAction('changeBackground', bigSmall);
      }
    },


    desiredCapacity(event) {
      this.set('numberOfTravelers', Ember.$('.numberOfTravelers').val());
      // console.log('desiredCapacity()...', event, this.get('numberOfTravelers'));
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


    selectDeparture() {

      let state = Ember.$('#origin').val();

      console.log('state ', state);
      this.set('step1', true);

      if (state === 'az') {
        this.set('arizona', true);
        this.set('florida', false);
        this.set('minnesota', false);
        this.sendAction('changeBackgroundImage', 'mn');
      } else if (state === 'fl') {
        this.set('arizona', false);
        this.set('florida', true);
        this.set('minnesota', false);
        this.sendAction('changeBackgroundImage', 'mn');
      } else {
        this.set('arizona', false);
        this.set('florida', false);
        this.set('minnesota', true);
      }

    },

    selectDestination() {

      let state = Ember.$('#destination').val();

      if (state === 'az') {
        this.set('destination', 'ARIZONA');
      } else if (state === 'fl') {
        this.set('destination', 'FLORIDA');
      } else {
        this.set('destination', 'MINNESOTA');
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
      let arizona          = this.get('arizona'),
          startingLocation = arizona !== false ? 'AZ' : 'MN',
          details          = this.get('details');

      details.numberOfTravelers = this.get('numberOfTravelers');
      details.startingLocation  = startingLocation;

      // send JSON object
      // then
      location.href = 'success';

    }

  }

});
