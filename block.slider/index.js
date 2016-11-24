import 'angular-touch';
import 'angular-swipe';

import BlockSliderController from './block.slider.controller';
import BlockSliderDirective from './block.slider.directive';

const blockSlider = angular.module('app.components.block.slider', [
    'ngTouch',
    'swipe'
])
    .controller(BlockSliderController.name, BlockSliderController)
    .directive('omcBlockSlider', BlockSliderDirective);

export default blockSlider;
