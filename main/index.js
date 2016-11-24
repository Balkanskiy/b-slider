import MainController from './main.controller';

import blockSlider from '../../components/block.slider';

export default angular.module('app.pages.main', [
    blockSlider.name
])
    .controller(MainController.name, MainController);
