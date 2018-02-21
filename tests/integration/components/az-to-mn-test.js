import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('az-to-mn', 'Integration | Component | az to mn', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{az-to-mn}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#az-to-mn}}
      template block text
    {{/az-to-mn}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
