
angular.module('primeiraApp').component('valueBox', {
  bindings: {
    grid: '@',
    colorClass: '@',
    value: '@',
    text: '@',
    iconClass: '@'
  },
  controller: [
    'gridSystem',
    function(gridSystem) {
      this.$onInit = () => this.gridClasses = gridSystem.toCssClasses(this.grid)
    }
  ],
  template: `
  <div class="{{ $ctrl.gridClasses }}">
    <div class="small-box {{ $ctrl.colorClass }}">
      <div class="inner">
        <h3 class = "display-4">{{ $ctrl.value }}</h3>
        <p class = "lead">{{ $ctrl.text }}</p>
      </div>
      <div class="icon">
        <i class="{{ $ctrl.iconClass }}"></i>
      </div>
    </div>
  </div>
  `
});
