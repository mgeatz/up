import Component from '@ember/component';

export default Component.extend({

  arizona: false,

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

  actions: {

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

    pickDate(departOrReturn) {

      if (departOrReturn === 'depart') {
        this.set('dateOfDeparture', Ember.$('.date_picker').val());
      }

      if (departOrReturn === 'return') {
        this.set('dateOfReturn', Ember.$('.date_picker_return').val());
      }

    },

    desiredCapacity(event) {
      this.set('numberOfTravelers', Ember.$('.numberOfTravelers').val());
      console.log('desiredCapacity()...', event, this.get('numberOfTravelers'));
    },

    editDetails() {
      this.set('step0', true);
      this.set('step1', true);
      this.set('step2', false);
    },

    findFlights() {
      this.set('step0', false);
      this.set('step2', true);
    }

  }

});
