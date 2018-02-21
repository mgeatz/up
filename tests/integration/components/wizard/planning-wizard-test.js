import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('wizard/planning-wizard', 'Integration | Component | wizard/planning wizard', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{wizard/planning-wizard}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#wizard/planning-wizard}}
      template block text
    {{/wizard/planning-wizard}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
