var app = angular.module('app', ['ngRoute','ngResource','ui.bootstrap','ngCookies']);

app.run(['$rootScope','$interval',
    function($rootScope,$interval) {
        $rootScope.cargandoHttp=true;
        $rootScope.uid={};
        //$rootScope.splashes = splashes;
    }]);

app.config(function($routeProvider, $locationProvider, $httpProvider ) {
    $locationProvider.html5Mode(true);
    $routeProvider

//        .when('/', {
//            templateUrl: 'views/home.html',
//            controller: 'mainController'
//        })

        .when('/', {
            templateUrl: 'views/bienvenida.html',
            controller: 'bienvenidaController'
        })

        .when('/app/login', {
            templateUrl: 'views/login.html',
            controller: 'loginController'
        })

        .when('/app/registro', {
            templateUrl: 'views/registro.html',
            controller: 'registroController'
        })

        .when('/app/passrecovery', {
            templateUrl: 'views/passrecovery.html',
            controller: 'passrecoveryController'
        })

        .when('/app/editor', {
            templateUrl: 'views/editor.html',
            controller: 'editorController'
        })

        .when('/app/editor/:id', {
            templateUrl: 'views/editor.html',
            controller: 'editorController'
        })

        .when('/app/galeria', {
            templateUrl: 'views/galeria.html',
            controller: 'galeriaController'
        })

        .when('/app/reproductor/:id', {
            templateUrl: 'views/reproductor.html',
            controller: 'reproductorController'
        })

        .when('/app/reproductor/', {
            templateUrl: 'views/reproductor.html',
            controller: 'reproductorController'
        })
        .when('/app/preview/:id', {
            templateUrl: 'views/preview.html',
            controller: 'previewController'
        })
         .when('/app/resultado', {
                    templateUrl: 'views/resultado.html',
                    controller: 'resultadoController'
                })
        .when('/app/resultado/:id', {
            templateUrl: 'views/resultado.html',
            controller: 'resultadoController'
        })
        .when('/app/preview/', {
            templateUrl: 'views/preview.html',
            controller: 'previewController'
        });
});

app.factory("Mapa", ["$resource",function($resource){
    return  $resource("/_ah/api/intelligentsemaphore/v1/map/:id", null,
        {
            'query': { method:'GET', isArray: false }

        });
}]);

app.factory("MapaUpdate", ["$resource",function($resource){
    return  $resource("/_ah/api/intelligentsemaphore/v1/mapState", null,
        {
            'query': { method:'GET', isArray: false }
        });
}]);

app.factory("NodoBorde", ["$resource",function($resource){
    return  $resource("/_ah/api/intelligentsemaphore/v1/nodoBorde", null,
        {
            'query': { method:'GET', isArray: false }
        });
}]);

app.factory("Simulacion", ["$resource",function($resource){
    return  $resource("/_ah/api/intelligentsemaphore/v1/simulacionUpdate", null,
        {
            'query': { method:'GET', isArray: false }
        });
}]);

app.factory("ModoUpdate", ["$resource",function($resource){
    return  $resource("/_ah/api/intelligentsemaphore/v1/modoUpdate", null,
        {
            'query': { method:'GET', isArray: false },
            'put':{ method:'PUT' }
        });
}]);



app.factory("Tef", ["$resource",function($resource){
    return  $resource("/_ah/api/intelligentsemaphore/v1/tef", null,
        {
            'query': { method:'GET', isArray: false }
        });
}]);


app.factory("Rna", ["$resource",function($resource){
    return  $resource("/_ah/api/intelligentsemaphore/v1/rna", null,
        {
            'query': { method:'GET', isArray: false }
        });
}]);

app.factory("Resultados", ["$resource",function($resource){
    return  $resource("/_ah/api/intelligentsemaphore/v1/resultados", null,
        {
            'query': { method:'GET', isArray: false }
        });
}]);