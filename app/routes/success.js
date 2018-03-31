import Route from '@ember/routing/route';

export default Route.extend({

  setupController(controller) {
    controller.set('regexFail', null);
    controller.set('thankyou', null);
  },

  actions : {

    thankYou(email_address) {
      let self = this,
          IP = sessionStorage.getItem('IP'),
          re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      this.controller.set('regexFail', false);

      if (re.test(email_address)) {
        ga('send', 'event', 'button', 'click', 'Sign Up');

        $.ajax({
          method: "GET",
          url: "http://drunkdumpster.com:9999/emailSignUp?email="+email_address+"&client="+IP,
        })
          .done((response) => {
            console.log('success', response);
            self.controller.set('thankyou', true);
          })
          .fail(function (response) {
            console.log('error', response);
            self.controller.set('thankyou', true);
          })
      } else {
        this.controller.set('regexFail', true);
      }
    }

  }

});
