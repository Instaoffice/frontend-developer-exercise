app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	var loginRoute = {
		name: 'login',
		url: '/login',
		templateUrl: 'partials/pages/login.html',
		controller: 'loginController as vm'
	}

	var characterRoute = {
		name: 'characters',
		url: '/characters',
		templateUrl: 'partials/pages/characters.html',
		controller: 'charactersController as vm'
	}

	var contentRoute = {
		name: 'details',
		url: '/details/:ch_id',
		templateUrl: 'partials/pages/details.html',
		controller: 'detailsController as vm'
	}

	$stateProvider.state(loginRoute);
	$stateProvider.state(characterRoute);
	$stateProvider.state(contentRoute);
	$urlRouterProvider.otherwise('/login');

}])