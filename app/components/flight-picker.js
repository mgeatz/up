import Component from '@ember/component';

export default Component.extend({

  showSeats: false,

  outboundFlightTimes: [
    {
      takeoff: '5:00am',
      landing: '8:00am'
    },
    {
      takeoff: '6:00am',
      landing: '9:00am'
    },
    {
      takeoff: '7:00am',
      landing: '10:00am'
    },
    {
      takeoff: '8:00am',
      landing: '11:00am'
    },
    {
      takeoff: '9:00am',
      landing: '12:00pm'
    },
    {
      takeoff: '10:00am',
      landing: '1:00pm'
    },
    {
      takeoff: '11:00am',
      landing: '2:00pm'
    },
    {
      takeoff: '12:00pm',
      landing: '3:00pm'
    },
    {
      takeoff: '1:00pm',
      landing: '4:00pm'
    },
    {
      takeoff: '2:00pm',
      landing: '5:00pm'
    },
    {
      takeoff: '3:00pm',
      landing: '6:00pm'
    },
    {
      takeoff: '4:00pm',
      landing: '7:00pm'
    },
    {
      takeoff: '5:00pm',
      landing: '8:00pm'
    },
    {
      takeoff: '6:00pm',
      landing: '9:00pm'
    },
    {
      takeoff: '7:00pm',
      landing: '10:00pm'
    },
    {
      takeoff: '8:00pm',
      landing: '11:00pm'
    }
  ],

  returnFlightTimes: [
    {
      takeoff: '5:00am',
      landing: '8:00am'
    },
    {
      takeoff: '6:00am',
      landing: '9:00am'
    },
    {
      takeoff: '7:00am',
      landing: '10:00am'
    },
    {
      takeoff: '8:00am',
      landing: '11:00am'
    },
    {
      takeoff: '9:00am',
      landing: '12:00pm'
    },
    {
      takeoff: '10:00am',
      landing: '1:00pm'
    },
    {
      takeoff: '11:00am',
      landing: '2:00pm'
    },
    {
      takeoff: '12:00pm',
      landing: '3:00pm'
    },
    {
      takeoff: '1:00pm',
      landing: '4:00pm'
    },
    {
      takeoff: '2:00pm',
      landing: '5:00pm'
    },
    {
      takeoff: '3:00pm',
      landing: '6:00pm'
    },
    {
      takeoff: '4:00pm',
      landing: '7:00pm'
    },
    {
      takeoff: '5:00pm',
      landing: '8:00pm'
    },
    {
      takeoff: '6:00pm',
      landing: '9:00pm'
    },
    {
      takeoff: '7:00pm',
      landing: '10:00pm'
    },
    {
      takeoff: '8:00pm',
      landing: '11:00pm'
    }
  ],

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
