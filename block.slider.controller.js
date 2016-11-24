class BlockSliderController {
    constructor ($scope, $timeout) {
        this.$timeout = $timeout;
        this.$scope = $scope;

        this.busy = false;
        this.activeSlideId = 0;

        this._scroll();

        this.$timeout(() => {
            this.ready = true;
        }, 1000);

        this.ready = true;
    }

    _scroll () {
        // Firefox
        $(window).bind('DOMMouseScroll', (e) => {
            if (e.originalEvent.detail > 0) {
                // scroll down
                this._goToNext();
            } else {
                // scroll up
                this._goToPrev();
            }
            // prevent page from scrolling
            return false;
        });

        // IE, Opera, Safari
        $(window).bind('mousewheel', (e) => {
            e.preventDefault();

            if (this.isMoving) {
                return;
            }

            if (e.originalEvent.wheelDelta < 0) {
                this._goToNext();
            } else {
                this._goToPrev();
            }
        });
    }

    _goToSlide (index) {
        this.isMoving = true;
        this.up = index < this.activeSlideId ? index : null;
        this.activeSlideId = index;
        setTimeout(() => {
            this.isMoving = false;
        }, 1000);
    }

    _goToNext () {
        if (this.activeSlideId < (this.slides.length - 1)) {
            this._goToSlide(this.activeSlideId + 1);
        } else {
            return;
        }
    }

    _goToPrev () {
        if (this.activeSlideId > 0) {
            this._goToSlide(this.activeSlideId - 1);
        } else {
            return;
        }
    }
}

BlockSliderController.$inject = ['$scope', '$timeout'];

export default BlockSliderController;

// ***hdata***

// parseQuery.new('Companies').find((companies) => {
//     this.company = companies[0].attributes;
//
//     for (const company of companies) {
//         const service = company.relation('Services');
//
//         /* eslint-disable */
//         service.query().find((name) => {
//             this.name = name;
//         });
//         /* eslint-enable */
//     }
// }).then(() => {});

// get companies

// this.slides = [{
//     image: require('../../assets/images/01.jpg'),
//     title: 'Инвестиции в здравоохранение',
//     description: `
//           Реализация инвестиционных проектов любого масштаба,
//           используя уникальные возможности привлечения финансирования.`
// }, {
//     image: require('../../assets/images/4.jpg'),
//     title: 'Группа компаний "ОМК"',
//     text: `
//             Объединяет четыре компании, востребованных на всех этапах
//             функционирования медицинских учреждений и других объектов социальной сферы.
//             Вдохновляясь инновациями в медицине и IT, мы объединяем усилия медиков, фармацевтов,
//             проектировщиков, строителей, финансистов, программистов для комплексной работы
//             с медицинскими объектами. Мы проектируем, строим, ремонтируем, реконструируем больницы
//             и поликлиники.
//           `
// }, {
//     image: require('../../assets/images/01.jpg'),
//     title: 'Объединенная медицинская корпорация',
//     description: `
//             Интеграция мирового опыта для развития системы российского
//             здравоохранения. Финансирование проектов государственно.`,
//     services: [{
//         title: 'Разработка идеи концепции проекта'
//     }, {
//         title: 'Разработка финансовых моделей'
//     }, {
//         title: 'Финансирование проектов'
//     }, {
//         title: 'Стратегический консалтинг'
//     }, {
//         title: 'Изучение и анализ рынка здравоохранения'
//     }, {
//         title: 'Подготовка ТЭО'
//     }, {
//         title: 'Консультации по IT в здравоохранении'
//     }, {
//         title: 'Функциональное и оперативное планирование'
//     }, {
//         title: 'Управление проектами планирование затрат'
//     }],
//     link: 'https://www.yandex.ru/'
// }, {
//     image: require('../../assets/images/235981.jpg'),
//     title: 'ОМК Строй',
//     description: `
//             Проектирование, строительство, реконструкция, реставрация,
//             ремонт объектов здравоохранения и образования.`
// }, {
//     image: require('../../assets/images/DSCF3367_1_o.jpg'),
//     title: 'ОМК-Энергосервис',
//     description: `
//             Комплексное техническое обслуживание зданий и сооружений
//             с использованием передового мирового опыта в целях
//             минимизации стоимости владения основными фондами.`,
//     link: 'https://www.yandex.ru/'
// }, {
//     image: require('../../assets/images/4.jpg'),
//     title: 'ТехМедикал Групп',
//     description: `
//             Поставки и долгосрочные сервисные контракты высокотехнологичного медицинского оборудования.
//             Полностью исключающие риск простоя и повышающие
//             экономическую эффективность эксплуатации оборудования.`,
//     services: [{
//         title: 'Разработка идеи концепции проекта'
//     }, {
//         title: 'Разработка финансовых моделей'
//     }, {
//         title: 'Финансирование проектов'
//     }, {
//         title: 'Стратегический консалтинг'
//     }, {
//         title: 'Изучение и анализ рынка здравоохранения'
//     }],
//     link: 'https://www.yandex.ru/'
// }];
