(function(){
	'use strict';
	angular.module('app', []);

	angular.module('app')
		.controller('serverCtrl', serverCtrl);

	function serverCtrl() {
		var vm = this;

		vm.linuxOptions = [
			{
				os: 'linux',
				name: 'VPS 512MB',
				cpu: '1 v-Core',
				ram: '512 MB',
				disk: '15 GB',
				bandwidth: 'Unlimited',
				price: '5'
			},
			{
				os: 'linux',
				name: 'VPS 1',
				cpu: '1 v-Core',
				ram: '1 GB',
				disk: '30 GB',
				bandwidth: 'Unlimited',
				price: '10'
			},
			{
				os: 'linux',
				name: 'VPS 2',
				cpu: '2 v-Core',
				ram: '2 GB',
				disk: '40 GB',
				bandwidth: 'Unlimited',
				price: '20'
			},
			{
				os: 'linux',
				name: 'VPS 3',
				cpu: '4 v-Core',
				ram: '3 GB',
				disk: '50 GB',
				bandwidth: 'Unlimited',
				price: '40'
			},
			{
				os: 'linux',
				name: 'VPS 4',
				cpu: '5 v-Core',
				ram: '4 GB',
				disk: '60 GB',
				bandwidth: 'Unlimited',
				price: '60'
			},
			{
				os: 'linux',
				name: 'VPS 5',
				cpu: '6 v-Core',
				ram: '5 GB',
				disk: '70 GB',
				bandwidth: 'Unlimited',
				price: '80'
			}];

		vm.windowsOptions = [
			{
				os: 'windows',
				name: 'VPS 1',
				cpu: '2 v-Core',
				ram: '1.5 GB',
				disk: '15 GB',
				bandwidth: 'Unlimited',
				price: '20'
			},
			{
				os: 'windows',
				name: 'VPS 2',
				cpu: '3 v-Core',
				ram: '2 GB',
				disk: '30 GB',
				bandwidth: 'Unlimited',
				price: '25'
			},
			{
				os: 'windows',
				name: 'VPS 3',
				cpu: '4 v-Core',
				ram: '4 GB',
				disk: '40 GB',
				bandwidth: 'Unlimited',
				price: '40'
			},
			{
				os: 'windows',
				name: 'VPS 4',
				cpu: '5 v-Core',
				ram: '6 GB',
				disk: '50 GB',
				bandwidth: 'Unlimited',
				price: '60'
			},
			{
				os: 'windows',
				name: 'VPS 5',
				cpu: '6 v-Core',
				ram: '8 GB',
				disk: '60 GB',
				bandwidth: 'Unlimited',
				price: '80'
			}];

		// Defaults and Initalization Values
		vm.os = 'linux';
		vm.selection = 1;
		vm.selectedPlan = vm.linuxOptions[vm.selection - 1];

		vm.setOS = function(os) {
			vm.os = os;
			vm.selection = 1; //avoid out of bounds index possibility
			vm.adjustSlider();
		}

		vm.adjustSlider = function() {
			var adjLeft;
			if (vm.os === 'linux') adjLeft = 'calc(calc(100% - 100px) / 5 * '+ (vm.selection - 1) +')';
			if(vm.os === 'windows') adjLeft = 'calc(calc(100% - 100px) / 4 * '+ (vm.selection - 1) +')'
			angular.element('.slider span').css({'left': adjLeft})
			updateInfo();
		}
		
		/*
		 * Goes goes here to handle the order
		 */
		vm.handleOrder = function() {
			var order = vm.selectedPlan; //JavaScript Object Literal
			var orderJSON = JSON.stringify(order); //JSON Data
			
			// Selected Plan
			console.log(orderJSON);
			
		}
		
		// Utility Functions
		function updateInfo() {
			if (vm.os === 'linux') vm.selectedPlan = vm.linuxOptions[vm.selection - 1];
			if (vm.os === 'windows') vm.selectedPlan = vm.windowsOptions[vm.selection - 1];
		}
	}
}());