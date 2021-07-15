import {$} from '../../core/Dom'


export class Excel {
  constructor(selector, options) {
    this.$el = $(selector);
    this.components = options.components || [];
  }

  getRoot() {
    // const $root = document.createElement('div');
    // $root.classList.add('excel');
    const $root = $.create('div', 'excel')

    this.components.forEach(Component => {
      // const $el = document.createElement('div');
      // $el.classList.add(Component.className);
      const $el = $.create('div', Component.className)
      const component = new Component($el);
      $el.innerHTML = component.toHTML();
      $root.append($el);
    })
    return $root;
  }

  render() {
    console.log(11111111, this.getRoot());
    console.log(2222222, this.$el);
    console.log(3333333, this);
    this.$el.append(this.getRoot())
  }
}
