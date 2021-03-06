import Ember from 'ember';

// A checkbox that supports actions.
// See:
// - https://github.com/emberjs/ember.js/issues/5433
// - http://emberjs.jsbin.com/rwjblue/58/edit?html,js,output
export default Ember.Component.extend({
  attributeBindings: ['aria-label', 'type', 'value'],
  checked: false,
  tagName: 'input',
  type: 'checkbox',

  change: function(){
    this.toggleProperty('is-checked');
    this._updateChecked();

    this.sendAction('action', this.get('value'), this.get('is-checked'));
  },

  _updateChecked: function() {
    this.$().prop('checked', this.get('is-checked'));
  }.on('didInsertElement')
});
