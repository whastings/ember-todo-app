import Ember from 'ember';

var FORM_CLASS = 'todo-list__form';

export default Ember.Component.extend({
  classNames: [FORM_CLASS],
  tagName: 'form',
  title: '',

  actions: {
    cancel() {
      this.attrs['on-cancel']();
    }
  },

  didInsertElement() {
    this.focus(`.${FORM_CLASS}__title-input`);
  },

  submit(event) {
    var todoData = {title: this.get('title')};
    event.preventDefault();
    this.attrs['on-submit'](todoData);
    this.set('title', '');
  }
});
