import { v4 } from 'uuid';

export const data = {
    food: [
        {   
            id: v4(),
            index: 0,
            slug: "spinach-and-beetroot-salad",
            category: "salads",
            title: "Spinach & Beetroot Salad",
            img: "https://static.pexels.com/photos/5928/salad-healthy-diet-spinach.jpg",
            info: "This is one of the simplest salads ever, tastes amazing and looks like you've made a real effort.",
        },

        {   
            id: v4(),
            index: 1,
            slug: "kurinoe-file-na-skovorode-gril",
            category: "dishes",
            title: "Куриное филе на сковороде гриль",
            img: "https://kedem.ru/photo/recipe/rname/kurinoe-file-na-skovorode-gril.jpg",
            info: "Куриное филе на сковороде гриль, это прекрасный выбор блюда для романтического ужина.",
            ingredients: [
                {id: v4(), name: 'Куриное филе (2 штуки)', count: '400 г'},
                {id: v4(), name: 'Помидоры черри', count: '200 г'},
                {id: v4(), name: 'Нерафинированное подсолнечное масло ТМ «Алейка»', count: '5 ст. л.'},
                {id: v4(), name: 'Красная луковица', count: '1 шт'},
                {id: v4(), name: 'Петрушка (зелень)', count: '1 пучок'},
                {id: v4(), name: 'Листья салата', count: '1 пучок'},
                {id: v4(), name: 'Розовый перец', count: '1/4 ч. л.'},
                {id: v4(), name: 'Сушеный чеснок', count: '1/4 ч. л.'},
                {id: v4(), name: 'Соль', count: '1/2 ч. л.'},
                
            ],
            steps: [
                {
                    id: v4(), 
                    step: 1,
                    instruction: 'Куриное филе промыть и обсушить.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/kurinoe-file-na-skovorode-gril-01.jpg'
                },
                {
                    id: v4(), 
                    step: 2,
                    instruction: 'Смешать в миске 1/4 чайной ложки сушеного чеснока, 1/4 чайной ложки розового перца и 1/2 чайной ложки соли.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/kurinoe-file-na-skovorode-gril-02.jpg'
                },
                {
                    id: v4(), 
                    step: 3,
                    instruction: 'Хорошо натереть куриное филе смесью, оставить на 15 минут.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/kurinoe-file-na-skovorode-gril-03.jpg'
                },
                {
                    id: v4(), 
                    step: 4,
                    instruction: 'Смазать 3 столовыми ложками натурального подсолнечного масла ТМ «Алейка» куриное филе с двух сторон.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/kurinoe-file-na-skovorode-gril-04.jpg'
                },
                {
                    id: v4(), 
                    step: 5,
                    instruction: 'Хорошо разогреть сковороду гриль. Выложить на сковороду куриное филе.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/kurinoe-file-na-skovorode-gril-05.jpg'
                },
                {
                    id: v4(), 
                    step: 6,
                    instruction: 'Обжарить с каждой стороны по 10-12 минут на среднем огне до золотистого цвета и темных полосок.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/kurinoe-file-na-skovorode-gril-06.jpg'
                },
                {
                    id: v4(), 
                    step: 7,
                    instruction: '200 г помидор черри,1 красную луковицу и зелень промыть, лук очистить.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/kurinoe-file-na-skovorode-gril-07.jpg'
                },
                {
                    id: v4(), 
                    step: 8,
                    instruction: 'В миску нарезать помидоры половинками, лук колечками и нарезать зелень.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/kurinoe-file-na-skovorode-gril-08.jpg'
                },
                {
                    id: v4(), 
                    step: 9,
                    instruction: 'Заправить 2 столовыми ложками натурального подсолнечного масла ТМ «Алейка», посолить по вкусу и перемешать.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/kurinoe-file-na-skovorode-gril-09.jpg'
                },
                {
                    id: v4(), 
                    step: 10,
                    instruction: 'На тарелки выложить листья салата и выложить куриное филе.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/kurinoe-file-na-skovorode-gril-10.jpg'
                },
                {
                    id: v4(), 
                    step: 11,
                    instruction: 'Добавить овощной салат.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/kurinoe-file-na-skovorode-gril-11.jpg'
                },
                {
                    id: v4(), 
                    step: 12,
                    instruction: 'Куриное филе на сковороде гриль готово. Можно подавать к романтическому столу.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/kurinoe-file-na-skovorode-gril-12.jpg'
                },
            ]
        },

        {   
            id: v4(),
            index: 2,
            slug: "salo-suhim-posolom",
            category: "snack",
            title: "Сало сухим посолом",
            img: "https://kedem.ru/photo/recipe/rname/salo-suhim-posolom.jpg",
            info: "Этот рецепт поможет Вам легко и просто посолить сало сухим посолом.",
            ingredients: [
                {id: v4(), name: 'Сало свиное', count: '300 г'},
                {id: v4(), name: 'Соль', count: '50 г'},
                {id: v4(), name: 'Перец черный молотый', count: '1 ч. л.'},
                {id: v4(), name: 'Лавровый лист', count: '1-2 шт'},
            ],
            steps: [
                {
                    id: v4(), 
                    step: 1,
                    instruction: '300 г свиного сала зачистить ножом.', 
                    img: 'https://kedem.ru/photo/recipe/2020/01/salo-suhim-posolom-01.jpg'
                },
                {
                    id: v4(), 
                    step: 2,
                    instruction: 'Нарезать сало ломтями повдоль.', 
                    img: 'https://kedem.ru/photo/recipe/2020/01/salo-suhim-posolom-02.jpg'
                },
                {
                    id: v4(), 
                    step: 3,
                    instruction: 'В тарелки смешать 50 г соли, 1 ч. ложку перца и 1 ч. ложку измельченного лаврового листа.', 
                    img: 'https://kedem.ru/photo/recipe/2020/01/salo-suhim-posolom-03.jpg'
                },
                {
                    id: v4(), 
                    step: 4,
                    instruction: 'Обвалять ломти салат в соли со специями со всех сторон.', 
                    img: 'https://kedem.ru/photo/recipe/2020/01/salo-suhim-posolom-04.jpg'
                },
                {
                    id: v4(), 
                    step: 5,
                    instruction: 'Положить сало в контейнер, закрыть крышкой.', 
                    img: 'https://kedem.ru/photo/recipe/2020/01/salo-suhim-posolom-05.jpg'
                },
                {
                    id: v4(), 
                    step: 6,
                    instruction: 'Убрать в холодильник на 2 суток.', 
                    img: 'https://kedem.ru/photo/recipe/2020/01/salo-suhim-posolom-06.jpg'
                },
                {
                    id: v4(), 
                    step: 7,
                    instruction: 'Готовое сало выложить из контейнера промокнуть бумажными полотенцами и убрать в пищевой пленке в морозилку на хранение.', 
                    img: 'https://kedem.ru/photo/recipe/2020/01/salo-suhim-posolom-07.jpg'
                },
                {
                    id: v4(), 
                    step: 8,
                    instruction: 'Сало сухим посолом готово. Можно подавать солёное сало к столу или брать с собой на рыбалку, охоту и отдых на свежем воздухе.', 
                    img: 'https://kedem.ru/photo/recipe/2020/01/salo-suhim-posolom-08.jpg'
                },
            ]

        },

        {   
            id: v4(),
            index: 3,
            slug: "desert-iz-morozhenogo-kivi",
            category: "dessert",
            title: "Десерт из мороженого «Киви»",
            img: "https://kedem.ru/photo/recipe/rname/desert-iz-morozhenogo-kivi.jpg",
            info: "Хотите побаловать себя вкусным десертом? Тогда обязательно приготовьте этот десерт из мороженого с киви.",
            ingredients: [
                {id: v4(), name: 'Ванильное мороженое', count: '100 г'},
                {id: v4(), name: 'Киви', count: '1 шт'},
                {id: v4(), name: 'Лепестки миндаля (жареного)', count: '10-12 шт'},
            ],
            steps: [
                {
                    id: v4(), 
                    step: 1,
                    instruction: 'Киви очистить и порезать ломтиками.', 
                    img: 'https://kedem.ru/photo/recipe/2012/07/20120705-mdesert-01.jpg'
                },
                {
                    id: v4(), 
                    step: 2,
                    instruction: 'Выложить креманку или неглубокий стакан ломтиками киви.', 
                    img: 'https://kedem.ru/photo/recipe/2012/07/20120705-mdesert-02.jpg'
                },
                {
                    id: v4(), 
                    step: 3,
                    instruction: 'Затем выложить чуть подтаявшее мороженое.', 
                    img: 'https://kedem.ru/photo/recipe/2012/07/20120705-mdesert-03.jpg'
                },
                {
                    id: v4(), 
                    step: 4,
                    instruction: 'Посыпать лепестками миндаля и украсит сверху парой ломтиков киви.', 
                    img: 'https://kedem.ru/photo/recipe/2012/07/20120705-mdesert-04.jpg'
                },
                {
                    id: v4(), 
                    step: 5,
                    instruction: 'Сразу подавать десерт к столу.', 
                    img: 'https://kedem.ru/photo/recipe/2012/07/20120705-mdesert-05.jpg'
                },
            ]
        },

        {   
            id: v4(),
            index: 4,
            slug: "shchi-c-kvashenoi-kapustoi",
            category: "soup",
            title: "Щи с квашеной капустой",
            img: "https://kedem.ru/photo/recipe/rname/shchi-s-kvashenoj-kapustoj.jpg",
            info: "Сытные, наваристые щи с квашеной капустой, это прекрасный способ собрать семью за обеденным столом или ужином.",
            ingredients: [
                {id: v4(), name: 'Вода', count: '2,5-3 л'},
                {id: v4(), name: 'Говяжья грудинка', count: '500 г'},
                {id: v4(), name: 'Капуста квашеная', count: '200 г'},
                {id: v4(), name: 'Картофель', count: '2-3 шт'},
                {id: v4(), name: 'Луковица', count: '2 шт'},
                {id: v4(), name: 'Морковь', count: '1 шт'},
                {id: v4(), name: 'Растительное масло', count: '2 ст. л.'},
                {id: v4(), name: 'Томатная паста', count: '1 ст. л.'},
                {id: v4(), name: 'Укроп (зелень)', count: '1 пучок'},
                {id: v4(), name: 'Соль', count: 'по вкусу'},
            ],
            steps: [
                {
                    id: v4(), 
                    step: 1,
                    instruction: '500 г говяжьей грудинки промыть, луковицу очистить.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/shchi-s-kvashenoj-kapustoj-01.jpg'
                },
                {
                    id: v4(), 
                    step: 2,
                    instruction: 'В кастрюлю сложить мясо с луком и залить 2,5 литра воды.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/shchi-s-kvashenoj-kapustoj-02.jpg'
                },
                {
                    id: v4(), 
                    step: 3,
                    instruction: 'Варить до закипания, снять пену. Убавить огонь и варить 1-1,5 часа.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/shchi-s-kvashenoj-kapustoj-03.jpg'
                },
                {
                    id: v4(), 
                    step: 4,
                    instruction: 'Мясо и лук вынуть, луковицу выкинуть, а бульон процедить по необходимости.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/shchi-s-kvashenoj-kapustoj-04.jpg'
                },
                {
                    id: v4(), 
                    step: 5,
                    instruction: 'Вторую луковицу и морковь очистить, лук мелко нашинковать, морковь натереть на терке.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/shchi-s-kvashenoj-kapustoj-05.jpg'
                },
                {
                    id: v4(), 
                    step: 6,
                    instruction: 'Обжарить лук с морковью на сковороде с 2 ст. ложками растительного масла.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/shchi-s-kvashenoj-kapustoj-06.jpg'
                },
                {
                    id: v4(), 
                    step: 7,
                    instruction: '2-3 картофелины очистить и нарезать кубиками. Добавить в бульон и варить 2-3 минуты.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/shchi-s-kvashenoj-kapustoj-07.jpg'
                },
                {
                    id: v4(), 
                    step: 8,
                    instruction: 'Добавить в кастрюлю 200 г квашеной капусты и варить 5-7 минут.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/shchi-s-kvashenoj-kapustoj-08.jpg'
                },
                {
                    id: v4(), 
                    step: 9,
                    instruction: 'Добавить обжаренные овощи в кастрюлю, варить 3-4 минуты.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/shchi-s-kvashenoj-kapustoj-09.jpg'
                },
                {
                    id: v4(), 
                    step: 10,
                    instruction: 'Добавить нарезанное отварное мясо.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/shchi-s-kvashenoj-kapustoj-10.jpg'
                },
                {
                    id: v4(), 
                    step: 11,
                    instruction: 'Добавить мелко нашинкованный укроп и 1 ст. ложку томатной пасты. Посолить по вкусу. Хорошо размешать.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/shchi-s-kvashenoj-kapustoj-11.jpg'
                },
                {
                    id: v4(), 
                    step: 12,
                    instruction: 'Щи с квашеной капустой готовы. Разлить щи по тарелкам и подавать к столу со сметаной.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/shchi-s-kvashenoj-kapustoj-12.jpg'
                },
            ]
        },

        {   
            id: v4(),
            index: 5,
            slug: "salat-vlyublennyj-valentin",
            category: "salads",
            title: "Салат «Влюбленный Валентин»",
            img: "https://kedem.ru/photo/recipe/rname/salat-vlyublennyj-valentin.jpg",
            info: "Этот салат «Влюбленный Валентин» станет настоящим украшением вашего романтического ужина.",
            ingredients: [
                {id: v4(), name: 'Куриное филе', count: '300 г'},
                {id: v4(), name: 'Шампиньоны', count: '200 г'},
                {id: v4(), name: 'Сыр', count: '120 г'},
                {id: v4(), name: 'Чернослив', count: '100 г'},
                {id: v4(), name: 'Зерна граната', count: '100 г'},
                {id: v4(), name: 'Яйца', count: '3 шт'},
                {id: v4(), name: 'Луковица', count: '1 шт'},
                {id: v4(), name: 'Майонез', count: '5 ст. л.'},
                {id: v4(), name: 'Растительное масло', count: '2 ст. л.'},
                {id: v4(), name: 'Соль', count: 'по вкусу'},
            ],
            steps: [
                {
                    id: v4(), 
                    step: 1,
                    instruction: '300 г куриного филе промыть.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/salat-vlyublennyj-valentin-01.jpg'
                },
                {
                    id: v4(), 
                    step: 2,
                    instruction: 'Отварить куриное филе до готовности 20-25 минут на среднем огне.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/salat-vlyublennyj-valentin-02.jpg'
                },
                {
                    id: v4(), 
                    step: 3,
                    instruction: 'Выложить куриное филе в миску и остудить.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/salat-vlyublennyj-valentin-03.jpg'
                },
                {
                    id: v4(), 
                    step: 4,
                    instruction: '3 яйца отварить, остудить и очистить.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/salat-vlyublennyj-valentin-04.jpg'
                },
                {
                    id: v4(), 
                    step: 5,
                    instruction: '200 г шампиньонов промыть, очистить и обсушить.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/salat-vlyublennyj-valentin-05.jpg'
                },
                {
                    id: v4(), 
                    step: 6,
                    instruction: 'Нарезать грибы тонкими ломтиками.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/salat-vlyublennyj-valentin-06.jpg'
                },
                {
                    id: v4(), 
                    step: 7,
                    instruction: 'Мелко нашинкованный лук обжарить на сковороде с 2 столовыми ложками растительного масла 1-2 минуты.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/salat-vlyublennyj-valentin-07.jpg'
                },
                {
                    id: v4(), 
                    step: 8,
                    instruction: 'Добавить грибы, немого посолить и обжарить 3-5 минут. Остудить.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/salat-vlyublennyj-valentin-08.jpg'
                },
                {
                    id: v4(), 
                    step: 9,
                    instruction: '100 г чернослива размочить в кипятке и обсушить.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/salat-vlyublennyj-valentin-09.jpg'
                },
                {
                    id: v4(), 
                    step: 10,
                    instruction: 'На блюдо выложить мелко нарезанное куриное филе в виде сердца.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/salat-vlyublennyj-valentin-10.jpg'
                },
                {
                    id: v4(), 
                    step: 11,
                    instruction: 'Посолить по вкусу и смазать майонезом.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/salat-vlyublennyj-valentin-11.jpg'
                },
                {
                    id: v4(), 
                    step: 12,
                    instruction: 'Сверху выложить слой обжаренных грибов.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/salat-vlyublennyj-valentin-12.jpg'
                },
                {
                    id: v4(), 
                    step: 13,
                    instruction: 'Выложить слой мелко нарезанного чернослива. Смазать майонезом.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/salat-vlyublennyj-valentin-13.jpg'
                },
                {
                    id: v4(), 
                    step: 14,
                    instruction: 'Сверху и по бокам выложить слой тертых яиц, добавить немного майонеза сеточкой.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/salat-vlyublennyj-valentin-14.jpg'
                },
                {
                    id: v4(), 
                    step: 15,
                    instruction: '120 г сыра натереть на терке и обсыпать весь салат сыром.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/salat-vlyublennyj-valentin-15.jpg'
                },
                {
                    id: v4(), 
                    step: 16,
                    instruction: 'Нанести майонезную сеточку на боковины салата и украсить салат зернами граната.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/salat-vlyublennyj-valentin-16.jpg'
                },
                {
                    id: v4(), 
                    step: 17,
                    instruction: 'Салат Влюбленный Валентин готов. Убрать в холодильник на 30 минут и подавать к столу.', 
                    img: 'https://kedem.ru/photo/recipe/2020/02/salat-vlyublennyj-valentin-17.jpg'
                },
            ]
        },

        {
            id: v4(),
            index: 6,
            slug: 'italyanskaya-picca',
            category: 'bakery',
            title: 'Итальянская пицца',
            img: 'https://kedem.ru/photo/recipe/rname/italyanskaya-picca.jpg',
            info: 'Хотели когда-нибудь приготовить настоящую итальянскую пиццу? Тогда этот рецепт вам пригодится.',
            ingredients: [
                {id: v4(), name: 'Куриная грудка (филе)', count: '1 шт'},
                {id: v4(), name: 'Моцарелла', count: '150 г'},
                {id: v4(), name: 'Маслины черные', count: '5-8 шт'},
                {id: v4(), name: 'Шампиньоны свежие', count: '2-3 шт'},
                {id: v4(), name: 'Паприка', count: ''},
                {id: v4(), name: 'Масло растительное', count: ''},
                {id: v4(), name: 'Зубчик чеснока', count: '2 шт'},
                {id: v4(), name: 'Бекон', count: '50 г'},
                {id: v4(), name: 'Болгарский перец', count: '1/2 шт'},
                {id: v4(), name: 'Мука', count: '2 стак.'},
                {id: v4(), name: 'Дрожжи сухие быстродействующие', count: '1 ч. л.'},
                {id: v4(), name: 'Оливковое масло', count: '2 ст. л.'},
                {id: v4(), name: 'Тёплая вода', count: '250 мл'},
                {id: v4(), name: 'Помидоры в собственном соку', count: '400 г'},
                {id: v4(), name: 'Сушеный базилик', count: '3 ст. л.'},
                {id: v4(), name: 'Лимон', count: '1 шт'},
                {id: v4(), name: 'Перец', count: 'по вкусу'},
                {id: v4(), name: 'Соль', count: 'по вкусу'},
            ],
            steps: [
                {
                    id: v4(), 
                    step: 1,
                    instruction: 'Куриную грудку предварительно замариновать в смеси паприки, чеснока, масла и соли. Обжарить с обеих сторон на сковороде гриль (можно обычной).', 
                    img: 'https://kedem.ru/photo/recipe/2014/04/20140415-italyyanskaya-picca-01.jpg'
                },
                {
                    id: v4(), 
                    step: 2,
                    instruction: 'В воде развести соль, дрожжи и оливковое масло. Муку просеять и сделать углубление. Налить в углубление воду с дрожжами и замесить тесто. Тесто хорошо вымесить до однородной массы. Убрать под пленку и дать подняться.', 
                    img: 'https://kedem.ru/photo/recipe/2014/04/20140415-italyyanskaya-picca-02.jpg'
                },
                {
                    id: v4(), 
                    step: 3,
                    instruction: 'Приготовить соус для пиццы. Перебить блендером 400 г помидор в собственно соку, 3 столовых ложки базилика, соль и перец по вкусу, сок 1 лимона. Выпаривать в течении 10- 15 минут.', 
                    img: 'https://kedem.ru/photo/recipe/2014/04/20140415-italyyanskaya-picca-03.jpg'
                },
                {
                    id: v4(),
                    step: 4,
                    instruction: 'Болгарский перец мелко порубить.',
                    img: 'https://kedem.ru/photo/recipe/2014/04/20140415-italyyanskaya-picca-04.jpg'
                },
                {
                    id: v4(),
                    step: 5,
                    instruction: 'Тесто раскатать в форме круга. Выложить на противень смазанный растительным или оливковым маслом.',
                    img: 'https://kedem.ru/photo/recipe/2014/04/20140415-italyyanskaya-picca-05.jpg'
                },
                {
                    id: v4(),
                    step: 6,
                    instruction: 'Смазать соусом оставляя бортики. Посыпать мелко порезанным болгарским перцем.',
                    img: 'https://kedem.ru/photo/recipe/2014/04/20140415-italyyanskaya-picca-06.jpg'
                },
                {
                    id: v4(),
                    step: 7,
                    instruction: 'Куриную грудку нарезать пластинками. Выложить на пиццу.',
                    img: 'https://kedem.ru/photo/recipe/2014/04/20140415-italyyanskaya-picca-07.jpg'
                },
                {
                    id: v4(),
                    step: 8,
                    instruction: 'Бекон порвать руками, шампиньоны нарезать пластинками, маслины разрезать пополам и равномерно распределить по пицце.',
                    img: 'https://kedem.ru/photo/recipe/2014/04/20140415-italyyanskaya-picca-08.jpg'
                },
                {
                    id: v4(),
                    step: 9,
                    instruction: 'Моцареллу натереть на тёрке и посыпать пиццу.',
                    img: 'https://kedem.ru/photo/recipe/2014/04/20140415-italyyanskaya-picca-09.jpg'
                },
                {
                    id: v4(),
                    step: 10,
                    instruction: 'Запечь в духовке при 250С около 10 мин, пока сыр не «закипит».',
                    img: 'https://kedem.ru/photo/recipe/2014/04/20140415-italyyanskaya-picca-10.jpg'
                },
            ]
        },

        {
            id: v4(),
            index: 7,
            slug: 'testo-na-manty',
            category: 'testo',
            title: 'Тесто на манты',
            img: 'https://kedem.ru/photo/recipe/rname/testo-na-manty.jpg',
            info: 'Этот рецепт теста на манты специально для тех, кто хочет приготовить вкусные манты.',
            ingredients: [
                {id: v4(), name: 'Мука', count: '500 г'},
                {id: v4(), name: 'Холодная вода', count: '200 мл'},
                {id: v4(), name: 'Яйца', count: '1 шт'},
                {id: v4(), name: 'Растительное масло', count: '2-3 ст. л.'},
                {id: v4(), name: 'Соль', count: '1 ч. л.'},
            ],
            steps: [
                {
                    id: v4(),
                    step: 1,
                    instruction: 'В миске с водой развести ¼ ч. ложки соли и добавить 2 ст. ложки растительного масла, развести яйцо в миске.',
                    img: 'https://kedem.ru/photo/recipe/2017/11/20171107-testo-na-manty-01.jpg'
                },
                {
                    id: v4(),
                    step: 2,
                    instruction: 'Хорошо все перемешать.',
                    img: 'https://kedem.ru/photo/recipe/2017/11/20171107-testo-na-manty-02.jpg'
                },
                {
                    id: v4(),
                    step: 3,
                    instruction: 'Добавить просеянную муку и замесить крутое тесто.',
                    img: 'https://kedem.ru/photo/recipe/2017/11/20171107-testo-na-manty-03.jpg'
                },
                {
                    id: v4(),
                    step: 4,
                    instruction: 'Накрыть тесто пищевой пленкой и убрать в холодильник на 30 минут.',
                    img: 'https://kedem.ru/photo/recipe/2017/11/20171107-testo-na-manty-04.jpg'
                },
                {
                    id: v4(),
                    step: 5,
                    instruction: 'Достать и немного обмять тесто.',
                    img: 'https://kedem.ru/photo/recipe/2017/11/20171107-testo-na-manty-05.jpg'
                },
                {
                    id: v4(),
                    step: 6,
                    instruction: 'Наше тесто на манты готово. Разделить на небольшие части, каждую часть раскатать в круг, выложить начинку и слепить манты.',
                    img: 'https://kedem.ru/photo/recipe/2017/11/20171107-testo-na-manty-06.jpg'
                },
            ]
        },

        {
            id: v4(),
            index: 8,
            slug: 'marinovannye-pomidory-sladko-ostrye',
            category: 'zagotovki',
            title: 'Маринованные помидоры сладко-острые',
            img: 'https://kedem.ru/photo/recipe/rname/marinovannye-pomidory-sladko-ostrye.jpg',
            info: 'Этот рецепт маринованных помидор обязательно придется по душе любителям остренького. Простой в приготовлении он не займет много времени. Маринованные помидорчики, да с жареной картошечкой, что может быть вкусней зимой.',
            ingredients: [
                {id: v4(), name: 'Помидоры (спелых и упругих)', count: '2 кг'},
                {id: v4(), name: 'Красный острый перец', count: '1 шт'},
                {id: v4(), name: 'Зубчик чеснока', count: '2-3 шт'},
                {id: v4(), name: 'Болгарский перец', count: '1 шт'},
                {id: v4(), name: 'Перец душистый горошек', count: ''},
                {id: v4(), name: 'Гвоздика', count: ''},
                {id: v4(), name: 'Сахар', count: ''},
                {id: v4(), name: 'Соль', count: ''},
                {id: v4(), name: 'Уксус 9%', count: ''},
            ],
            steps: [
                {
                    id: v4(), 
                    step: 1,
                    instruction: 'В чистые банки уложить специи, по 3-5 горошин душистого перца, 3-5 гвоздичек, по 1 зубчику чеснока порезанного ломтиками, 1/4 болгарского перца, порезанного кусочками и по небольшому кусочку острого перца.', 
                    img: 'https://kedem.ru/photo/recipe/2012/08/20120816-pomidory-01.jpg'
                },
                {
                    id: v4(), 
                    step: 2,
                    instruction: 'Помидоры вымыть и высушить. Уложить помидоры в банки.', 
                    img: 'https://kedem.ru/photo/recipe/2012/08/20120816-pomidory-02.jpg'
                },
                {
                    id: v4(), 
                    step: 3,
                    instruction: 'Залить кипятком и дать постоять 20-30 минут. Воду слить и добавить из расчета на 1 литр маринада 4 ст. ложки сахара и 2 ст .ложки соли.', 
                    img: 'https://kedem.ru/photo/recipe/2012/08/20120816-pomidory-03.jpg'
                },
                {
                    id: v4(), 
                    step: 4,
                    instruction: 'За кипятить и залить в банки. Добавить по 2 ст. ложки уксуса на литровую банку. Закатать банки и перевернуть.', 
                    img: 'https://kedem.ru/photo/recipe/2012/08/20120816-pomidory-04.jpg'
                },
                {
                    id: v4(), 
                    step: 5,
                    instruction: 'Дать остыть при комнатной температуре.', 
                    img: 'https://kedem.ru/photo/recipe/2012/08/20120816-pomidory-05.jpg'
                },
            ]
        },

        {
            id: v4(),
            index: 9,
            slug: 'goryachij-shokolad-s-marshmellou',
            category: 'drink',
            title: 'Горячий шоколад с маршмеллоу',
            img: 'https://kedem.ru/photo/recipe/rname/goryachij-shokolad-s-marshmellou.jpg',
            info: 'Горячий шоколад с маршмеллоу, это прекрасный способ согреть себя и побаловать детей после веселой зимней прогулки.',
            ingredients: [
                {id: v4(), name: 'Молоко 6%', count: '500 мл'},
                {id: v4(), name: 'Шоколад 70%', count: '100 г'},
                {id: v4(), name: 'Маршмеллоу', count: '50 г'},
            ],
            steps: [
                {
                    id: v4(), 
                    step: 1,
                    instruction: 'Плитку шоколада поломать на кусочки.', 
                    img: 'https://kedem.ru/photo/recipe/2019/12/goryachij-shokolad-s-marshmellou-01.jpg'
                },
                {
                    id: v4(), 
                    step: 2,
                    instruction: '500 мл молока перелить в сотейник и подогреть.', 
                    img: 'https://kedem.ru/photo/recipe/2019/12/goryachij-shokolad-s-marshmellou-02.jpg'
                },
                {
                    id: v4(), 
                    step: 3,
                    instruction: 'Добавить шоколад.', 
                    img: 'https://kedem.ru/photo/recipe/2019/12/goryachij-shokolad-s-marshmellou-03.jpg'
                },
                {
                    id: v4(), 
                    step: 4,
                    instruction: 'Помешивая венчиком, довести до кипения и снять с огня.', 
                    img: 'https://kedem.ru/photo/recipe/2019/12/goryachij-shokolad-s-marshmellou-04.jpg'
                },
                {
                    id: v4(), 
                    step: 5,
                    instruction: 'Разлить по бокалам.', 
                    img: 'https://kedem.ru/photo/recipe/2019/12/goryachij-shokolad-s-marshmellou-05.jpg'
                },
                {
                    id: v4(), 
                    step: 6,
                    instruction: 'Добавить маршмеллоу в каждый бокал.', 
                    img: 'https://kedem.ru/photo/recipe/2019/12/goryachij-shokolad-s-marshmellou-06.jpg'
                },
                {
                    id: v4(), 
                    step: 7,
                    instruction: 'Горячий шоколад с маршмеллоу готов. Сразу подавать к столу.', 
                    img: 'https://kedem.ru/photo/recipe/2019/12/goryachij-shokolad-s-marshmellou-07.jpg'
                },
            ]
        },
    ],

    categories: [
        {id: 1, title: 'Салаты', slug: 'salads'},
        {id: 2, title: 'Вторые', slug: 'dishes'},
        {id: 3, title: 'Закуски', slug: 'snack'},
        {id: 4, title: 'Выпечка', slug: 'bakery'},
        {id: 5, title: 'Супы', slug: 'soup'},  
        {id: 6, title: 'Десерты', slug: 'dessert'},
        {id: 7, title: 'Тесто', slug: 'testo'},
        {id: 8, title: 'Загатовки', slug: 'zagotovki'},
        {id: 9, title: 'Напитки', slug: 'drink'},
    ]
}