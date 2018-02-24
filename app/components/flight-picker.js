import Component from '@ember/component';

export default Component.extend({

	bookIt: false,

	showSeats: false,

	outboundFlightId: null,

	outboundFlightTime: null,

	returnFlightId: null,

	returnFlightTime: null,

	outboundFlightTimes: [
		{
			id: '341',
			takeoff: '5:00am',
			landing: '8:00am'
		},
		{
			id: '342',
			takeoff: '6:00am',
			landing: '9:00am'
		},
		{
			id: '343',
			takeoff: '7:00am',
			landing: '10:00am'
		},
		{
			id: '344',
			takeoff: '8:00am',
			landing: '11:00am'
		},
		{
			id: '345',
			takeoff: '9:00am',
			landing: '12:00pm'
		},
		{
			id: '346',
			takeoff: '10:00am',
			landing: '1:00pm'
		},
		{
			id: '347',
			takeoff: '11:00am',
			landing: '2:00pm'
		},
		{
			id: '348',
			takeoff: '12:00pm',
			landing: '3:00pm'
		},
		{
			id: '349',
			takeoff: '1:00pm',
			landing: '4:00pm'
		},
		{
			id: '350',
			takeoff: '2:00pm',
			landing: '5:00pm'
		},
		{
			id: '351',
			takeoff: '3:00pm',
			landing: '6:00pm'
		},
		{
			id: '352',
			takeoff: '4:00pm',
			landing: '7:00pm'
		},
		{
			id: '353',
			takeoff: '5:00pm',
			landing: '8:00pm'
		},
		{
			id: '354',
			takeoff: '6:00pm',
			landing: '9:00pm'
		},
		{
			id: '355',
			takeoff: '7:00pm',
			landing: '10:00pm'
		},
		{
			id: '356',
			takeoff: '8:00pm',
			landing: '11:00pm'
		}
	],

	returnFlightTimes: [
		{
			id: '357',
			takeoff: '5:00am',
			landing: '8:00am'
		},
		{
			id: '358',
			takeoff: '6:00am',
			landing: '9:00am'
		},
		{
			id: '359',
			takeoff: '7:00am',
			landing: '10:00am'
		},
		{
			id: '360',
			takeoff: '8:00am',
			landing: '11:00am'
		},
		{
			id: '361',
			takeoff: '9:00am',
			landing: '12:00pm'
		},
		{
			id: '362',
			takeoff: '10:00am',
			landing: '1:00pm'
		},
		{
			id: '363',
			takeoff: '11:00am',
			landing: '2:00pm'
		},
		{
			id: '364',
			takeoff: '12:00pm',
			landing: '3:00pm'
		},
		{
			id: '365',
			takeoff: '1:00pm',
			landing: '4:00pm'
		},
		{
			id: '366',
			takeoff: '2:00pm',
			landing: '5:00pm'
		},
		{
			id: '367',
			takeoff: '3:00pm',
			landing: '6:00pm'
		},
		{
			id: '368',
			takeoff: '4:00pm',
			landing: '7:00pm'
		},
		{
			id: '369',
			takeoff: '5:00pm',
			landing: '8:00pm'
		},
		{
			id: '370',
			takeoff: '6:00pm',
			landing: '9:00pm'
		},
		{
			id: '371',
			takeoff: '7:00pm',
			landing: '10:00pm'
		},
		{
			id: '372',
			takeoff: '8:00pm',
			landing: '11:00pm'
		}
	],

	actions: {


		backToOutboudFlights() {
			this.set('outboundFlight', false);
		},


		flightDetails() {
			let details = {
				outboundFlightId: this.get('outboundFlightId'),
				outboundFlightTakeoff: this.get('outboundFlightTakeoff'),
				outboundFlightLanding: this.get('outboundFlightLanding'),
				returnFlightId: this.get('returnFlightId'),
				returnFlightTakeoff: this.get('returnFlightTakeoff'),
				returnFlightLanding: this.get('returnFlightLanding'),
				bookIt: this.get('bookIt')
			};

			this.sendAction('flightDetails', details);
		},


		selectOutboundFlight(flight) {
			this.set('outboundFlight', true);
			this.set('outboundFlightId', flight.id);
			this.set('outboundFlightTakeoff', flight.takeoff);
			this.set('outboundFlightLanding', flight.landing);

			if (this.get('dateOfReturn') === null) {
				this.set('bookIt', true);
			}

			this.send('flightDetails');
		},


		selectReturnFlight(flight) {
			this.set('returnFlightId', flight.id);
			this.set('returnFlightTakeoff', flight.takeoff);
			this.set('returnFlightLanding', flight.landing);
			this.set('bookIt', true);

			this.send('flightDetails')
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
