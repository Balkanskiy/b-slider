class MainController {
    constructor ($scope, $rootScope, parseQuery, $timeout) {
        $rootScope.preload = true;
        this.x = '10';
        $timeout(() => {
            $rootScope.preload = false;
        }, 2500);

        parseQuery.find(
            parseQuery.new('Companies').ascending('order')
        ).then((data) => {
            this.slides = data;
            let i = 0;

            for (const slide of data) {
                const x = slide.relation('servicesID');

                /* eslint-disable */
                x.query().find().then((data) => {
                    this.slides[i].services = data;
                    i++;
                });
                /* eslint-enable */
            }
        });

        // parseQuery.find(
        //     parseQuery.new('Services')
        // ).then((data) => {
        //     this.services = data;
        // });
    }
}

MainController.$inject = ['$scope', '$rootScope', 'parseQuery', '$timeout'];

export default MainController;
