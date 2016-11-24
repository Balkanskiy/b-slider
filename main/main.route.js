
import angular from 'angular';

appMainStates.$inject = ['$stateProvider'];

function appMainStates ($stateProvider) {
    $stateProvider
      .state('root.main', {
          url: '/',
          views: {
              content: {
                  controller: 'MainController as vm',
                  templateProvider: ['$q', ($q) => {
                      return $q((resolve) => {
                          require.ensure([], () => {
                              resolve(require('./main.jade'));
                          }, 'main');
                      });
                  }]
              }
          },
          resolve: {
              loadModule: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
                  return $q((resolve) => {
                      require.ensure([], () => {
                          $ocLazyLoad.load({name: require('./index').name});
                          resolve();
                      }, 'main');
                  });
              }]
          }
      });
}

export default angular.module('app.routes.main', [])
    .config(appMainStates);
