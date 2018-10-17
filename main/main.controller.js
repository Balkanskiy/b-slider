class MainController {
    constructor ($scope, $rootScope, parseQuery, $timeout) {
        $rootScope.preload = true;
        this.x = '10';
        $timeout(() => {
            $rootScope.preload = false;
        }, 2500);

        parseQuery.find(
            parseQuery.new('Companies').ascending('order')
        ).then(data => data.map(slide => slide.value))
    }
}

MainController.$inject = ['$scope', '$rootScope', 'parseQuery', '$timeout'];

export default MainController;
