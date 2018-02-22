import Component from '@ember/component';

export default Component.extend({

  showSeats: false,

  actions: {

    selectSeats() {
      this.set('showSeats', true);
      this.sendAction('selectSeats');
    }

  }

});
