import Component from '@ember/component';

export default Component.extend({

  showSeats: false,

  actions: {


    selectFlight() {

    },


    selectSeat(event, seat) {
      console.log('seat ', event, seat);
    },


    showSeats() {
      this.set('showSeats', true);
      // wrap in zero timeout to ensure seats image has rendered
      setTimeout(() => {
        imageMapResize();
      });
    }

  }

});
