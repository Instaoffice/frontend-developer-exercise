app.controller('detailsController',['$http','$state', function($http, $state){

	var vm = this;

	$http({
		method: 'GET',
		url: './jedi.json'
	}).then(function(response){
		var ch_list = response.data;
		for (var i = 0; i < ch_list.length; i++) {
			if(ch_list[i].id == $state.params.ch_id){
				vm.ch_details = ch_list[i]
				vm.ch_img = '/app/images/starwars-' + ch_list[i].image + '.png';
			}
		}
	})

}])