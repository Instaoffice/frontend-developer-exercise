app.controller('loginController',['$state','$http', function($state, $http){

	var vm = this;
	vm.set_username = 'yoda'
	vm.set_password = 'dogbah'
	vm.login = function(){
		if(vm.username == vm.set_username && vm.password == vm.set_password){
			$state.go('characters');
		}else{
			console.log('Please Enter username : yoda && password : dogbah')
			vm.error = "open developer console to know the credentials"
		}
	}

}])