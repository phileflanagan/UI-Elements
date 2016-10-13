(function(){
	'use strict';
	angular.module('app', []);
	
	angular.module('app')
		.controller('serverCtrl', serverCtrl);
	
	function serverCtrl() {
		var vm = this;
		
		vm.linuxOptions = [
			{
				name: 'VPS 512MB',
				cpu: '1 v-Core',
				ram: '512 MB',
				disk: '15 GB',
				bandwidth: 'Unlimited',
				price: '5'
			},
			{
				name: 'VPS 1',
				cpu: '1 v-Core',
				ram: '1 GB',
				disk: '30 GB',
				bandwidth: 'Unlimited',
				price: '10'
			},
			{
				name: 'VPS 2',
				cpu: '2 v-Core',
				ram: '2 GB',
				disk: '40 GB',
				bandwidth: 'Unlimited',
				price: '20'
			},
			{
				name: 'VPS 3',
				cpu: '4 v-Core',
				ram: '3 GB',
				disk: '50 GB',
				bandwidth: 'Unlimited',
				price: '40'
			},
			{
				name: 'VPS 4',
				cpu: '5 v-Core',
				ram: '4 GB',
				disk: '60 GB',
				bandwidth: 'Unlimited',
				price: '60'
			},
			{
				name: 'VPS 5',
				cpu: '6 v-Core',
				ram: '5 GB',
				disk: '70 GB',
				bandwidth: 'Unlimited',
				price: '80'
			},
			
		];
		vm.selection = 1;
		vm.selectedPlan = vm.linuxOptions[vm.selection - 1];
		
		vm.adjustSlider = function() {
			console.log()
			var adjLeft = 'calc(calc(100% - 100px) / 5 * '+ (vm.selection - 1) +')';
			angular.element('.slider span').css({'left': adjLeft})
			updateInfo();
		}
		
		function updateInfo() {
			vm.selectedPlan = vm.linuxOptions[vm.selection - 1];
		}
	}
}());