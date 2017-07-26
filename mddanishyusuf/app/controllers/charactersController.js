app.controller('charactersController',['$state','$http', function($state, $http){

	var vm = this;

	$http({
		method: 'GET',
		url: './jedi.json'
	}).then(function(response){
		vm.chracters = response.data
	})

	vm.showDetails = function(ch_id){
		$state.go('details',{ch_id:ch_id})
	}

}])