import BlockSliderController from './block.slider.controller';
import blockSliderHtml from './block.slider.jade';

function BlockSliderDirective () {
    return {
        restrict: 'AE',
        scope: {
            slides: '=',
            services: '='
        },
        controller: BlockSliderController.name,
        controllerAs: 'sliderCtrl',
        bindToController: true,
        template: blockSliderHtml
    };
}

BlockSliderDirective.$inject = [];

export default BlockSliderDirective;
