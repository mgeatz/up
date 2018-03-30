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
          signUpObj = [],
          re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      signUpObj.push(IP);
      signUpObj.push(email_address);

      this.controller.set('regexFail', false);

      let dataObj = '{"blockData": "' + signUpObj + '"}';

      console.log('thank you', email_address);

      if (re.test(email_address)) {
        $.ajax({
          method: "POST",
          contentType: "application/json",
          datatype: "json",
          url: "http://drunkdumpster.com:9999/emailSignUp",
          data: dataObj
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
