//инициатор миобильного устройства (почти)
var isMobile=navigator.userAgent.match(/\bmobile\b/i);

// размеры и задержки
var imgpath='http://fe.it-academy.by/Projects/Kulishov_JSE/img/mahjong_cards/';
var tilewidth=38;
var tileheight=46;
var facewidth=31;
var faceheight=39;
var borderwidth=6;
var borderheight=6;
var doubleClickDelay= (isMobile)? 1200:400;
var boardtop=90;

//для таймера
var Timer=0;

//имя для таблицы рекородов
var NameInfo
var Counter=0;
var AjaxHandlerScript="http://fe.it-academy.by/AjaxStringStorage2.php";
var MessagesA;
var UpdatePassword;

//наложения
var overlayimages={
    'none': 'space',
    'olleft': 'overlay_left',
    'olleftclipped': 'overlay_leftclipped',
    'olbottom': 'overlay_bottom',
    'olbottomclipped': 'overlay_bottomclipped',
    'olbottomleft': 'overlay_bottomleft',
    'olbottomleftclipped': 'overlay_bottomleftclipped',
    'ol': 'overlay_none'
}

//задаем число карточек  amount-число карточек, repeat-повторяются или нет
var tilefamilies = {
   // a: { amount: 7, repeat: true },
    //b: { amount: 9, repeat: true },
   //c: { amount: 9, repeat: true },
   //d: { amount: 9, repeat: true },
   //e: { amount: 4, repeat: false },
    f: { amount: 4, repeat: false }
};

//тип карточек
var tilesets = {
    'Wooden': 'http://fe.it-academy.by/Projects/Kulishov_JSE/img/mahjong_cards/'
};

//формируем поле

var mahjongLayouts = {
    'Пирамида': [
        [	// layer 0
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
            [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [	// layer 1
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [	// layer 2
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [	// layer 3
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [	// layer 4
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    ],
    'Змея': [
        [	// layer 0
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [	// layer 1
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [	// layer 2
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [	// layer 3
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    ],
    'Демо': [
        [	// layer 0
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
    ]
}


var tilesetName, layoutName, boardLayout, maxcols, maxrows, maxlayers, layoutWritten, isCompatible, matchingPairs, matchingPairsIndex, lastMoves;
var tiles, tilecount, imgref, selectionIndex, selection, isClicked, clickedTimer;
var isLocked=true;
var appInited=false;


var defaultLayout='Пирамида';
var defaultTileset='Wooden';


//рисуем кнопку с выбором схемы раскладки карточек
function writeLayoutSelector() {
    var s='<select name="layout" class="settingsSelect" onchange="changeLayout(this.options[this.selectedIndex].value)">\n';
    for (var ts in mahjongLayouts) {
        if (ts==layoutName) s+='<option value="'+ts+'" selected class="settingsOption">'+ts+'</option>\n'
        else s+='<option value="'+ts+'" class="settingsOption">'+ts+'</option>\n';
    }
    s+='</select>';
    document.getElementById('selectionLay').innerHTML=s
    isLocked=true;
}

//рисуем поле с карточками
setLayout(defaultLayout);

function setLayout(layout) {
    layoutName=layout;
    boardLayout=mahjongLayouts[layoutName];
    maxcols=boardLayout[0][0].length-1;
    maxrows=boardLayout[0].length-1;
    maxlayers=boardLayout.length-1;
    layoutWritten=false;
}

function preLoad() {
    imgref=new Array();
    loadTileset(defaultTileset);
    for (var i in overlayimages) preLoadImg(i,imgpath+overlayimages[i]+'.gif');
}

function loadTileset(setname) {
    tilesetName=setname;
    var path=tilesets[setname];
    for (var f in tilefamilies) {
        var tf=tilefamilies[f];
        for (var n=1; n<=tf.amount; n++)  {
            var fn=f+n;
            preLoadImg(fn, path+fn+'.gif');
        }
    }
    preLoadImg('tile', path+'tile.gif');
    preLoadImg('tileclipped', path+'tileclipped.gif');
}

preLoad();

function preLoadImg(iname,imgpath) {
    imgref[iname]=new Image();
    imgref[iname].src=imgpath;
}

function mahjongInit() {
    if (!appInited) {
        appInited=true;
        setTimeout('setUp()', 0);
    }
}


function setUp() {
    isLoaded=true;
    resetSettingsForm();
    RefreshMessages()
    if (isCompatible) {
        if (!layoutWritten) {
            writeLayout();
        }
        var obj=(document.getElementById)?
            document.getElementById('mahjong_overlay2'):
            document.all.mahjong_overlay2;
        if ((obj) && (document.images.tile_overlay2)) setTimeout('newGame()',1)
        else setTimeout('setUp()',100);
    }
}

function resetSettingsForm() {
    var dfs=document.forms.mahjongsettings;
    var opts=dfs.layout.options;
    for (var i=0; i<opts.length; i++) {
        if (opts[i].value==layoutName) {
            opts.selectedIndex=i;
            break;
        }
    }
}


function changeLayout(layout) {

    if (
        (tilecount==144) || (tilecount==0) ||
        (confirm('Изменить раскладку на "'+layout+'"?\nТекущая игра будет прервана.'))
    ) {
        setLayout(layout);
        setUp();
    }
    else {
        resetSettingsForm();
    }
}


function newGame() {

    if (!layoutWritten) {
        setUp();
        return;
    }
    selectionIndex=0;
    selection=new Array();
    tilecount=0;
    tiles=new Array();
    isClicked=false;
    lastMoves=new Array();
    if (clickedTimer) clearTimeout(clickedTimer);
    var pile=new TilePile();
    var tl,tr;
    setVisible('mahjong_overlay1',false);
    setVisible('mahjong_overlay2',false);
    centerBoard();
    for (var i=0; i<boardLayout.length; i++) {
        var sl=boardLayout[i];
        tl=tiles[i]=new Array();
        for (var r=0; r<sl.length; r++) {
            var sr=sl[r];
            tr=tl[r]=new Array();
            for (var c=0; c<sr.length; c++) {
                if (sr[c]) {
                    var t=pile.get();
                    var f=t.charAt(0);
                    tr[c]= (tilefamilies[f].repeat)? t: f;
                    var id=getTileId(i,r,c);
                    setTile('tile'+id,t);
                    setTile('tileBG'+id, getTileBg(i,r,c));
                    setVisible('mahjongBG'+id,true);
                    setVisible('mahjong'+id,true);
                    tilecount++;
                }
                else {
                    tr[c]=null;
                }
            }
        }
    }
    showScore();
    RefreshMessages()
    showTime();
    Countdown()
    if (pairsLeft()) isLocked=false
    else {
        if (confirm('Больше ходов нет!\nНачаль новую игру?')) setTimeout('newGame()',1);
    }
}

function getTileBg(l,r,c) {
    if ((r>0) && (c>1)) {
        if (tiles[l][r-1][c-2]) return 'tileclipped';
    }
    return 'tile';
}

function resetBgOnTile(l,r,c) {
    var bl=boardLayout[l];
    var r2=r+1;
    var c2=c+2;
    if ((bl[r2]) && (bl[r2][c2])) {
        setTile('tileBG'+getTileId(l,r2,c2), (tiles[l][r][c])? 'tileclipped':'tile');
    }
}

function TilePile(tileArray) {
    if (tileArray) {
        this.tiles=tileArray;
    }
    else {
        this.tiles=new Array();
        for (var f in tilefamilies) {
            var tf=tilefamilies[f];
            if (tf.repeat) {
                for (var i=0; i<4; i++) {
                    for (var n=1; n<=tf.amount; n++) this.tiles.push(f+n);
                }
            }
            else {
                for (var n=1; n<=tf.amount; n++) this.tiles.push(f+n);
            }
        }
    }
    this.min=0;
    this.max=this.tiles.length-1;
    this.get = function () {
        var i=Math.floor(Math.random()*(1+this.max-this.min))+this.min;
        while ((this.tiles[i]==null) && (i<this.max)) i++;
        var v=this.tiles[i];
        this.tiles[i]=null;
        if (i==this.min)  {
            while ((this.tiles[this.min]==null) && (this.min<this.tiles.length)) this.min++;
        }
        if (i==this.max) {
            while ((this.tiles[this.max]==null) && (this.max>0)) this.max--;
        }
        return v;
    }
}

function tileIsFree(l,r,c) {
    return ((tileIsFreeAbove(l,r,c)) && ((tileIsFreeLeft(l,r,c)) || (tileIsFreeRight(l,r,c))));
}

function tileIsFreeAbove(l,r,c) {
    l++;
    if ((l>maxlayers) || (r==0) || (r==maxrows) || (c==0) || (c==maxcols)) return true;
    for (var ri=r-1; ri<=r+1; ri++) {
        for (var ci=c-1; ci<=c+1; ci++) {
            if (tiles[l][ri][ci]) return false;
        }
    }
    return true;
}


function tileIsFreeBottom(l,r,c) {
    r+=2;
    if ((r>maxrows) || (c==0) || (c==maxcols)) return true;
    for (var ci=c-1; ci<=c+1; ci++) {
        if (tiles[l][r][ci]) return false;
    }
    return true;
}

function tileIsFreeLeft(l,r,c) {
    c-=2;
    if ((c<0) || (r==0) || (r==maxrows)) return true;
    for (var ri=r-1; ri<=r+1;ri++) {
        if (tiles[l][ri][c]) return false;
    }
    return true;
}

function tileIsFreeRight(l,r,c) {
    c+=2;
    if ((c>maxcols) || (r==0) || (r==maxrows)) return true;
    for (var ri=r-1; ri<=r+1;ri++) {
        if (tiles[l][ri][c]) return false;
    }
    return true;
}

function setTile(t,i) {
    document.images[t].src=imgref[i].src;
}

function getTileId(l,r,c) {
    return '_'+l+'_'+r+'_'+c;
}

function tileClick(l,r,c) {
    stopEventPropagation();
    if (clickedTimer) window.clearTimeout(clickedTimer);
    if (isLocked) return;
    var y=(tileheight-borderheight)/2*r-l*(borderheight-1);
    var x=(tilewidth-borderwidth)/2*c+l*(borderwidth-1);
    var z=l*3+2;
    var freeleft=tileIsFreeLeft(l,r,c);
    var freeright=tileIsFreeRight(l,r,c);
    var freebottom=tileIsFreeBottom(l,r,c);
    var freeabove=tileIsFreeAbove(l,r,c);
    var t='ol';
    var free = (freeabove && (freeleft || freeright));
    if (!free) return;
    if (selectionIndex==0) {
        selectionIndex=1;
        selection[0]={
            tile: tiles[l][r][c],
            l: l,
            r: r,
            c: c,
            x: x,
            y: y,
            z: z
        };
    }
    else {
        var thetile=tiles[l][r][c];
        if (thetile==selection[0].tile) {
            if (selectionIndex==1) {
                selectionIndex=2;
                selection[1]={
                    tile: tiles[l][r][c],
                    l: l,
                    r: r,
                    c: c,
                    x: x,
                    y: y,
                    z: z
                };
            }
            else if (isClicked) {
                hideSelectedTiles();
                return;
            }
            isClicked=true;
            clickedTimer=window.setTimeout('releaseClick()', doubleClickDelay);
        }
        else return;
    }
    if (freeleft && freebottom) {
        if ((r<maxrows-1) && (c>1) && (tiles[l][r+2][c-2])) t+='bottomleftclipped'
        else t+='bottomleft'
    }
    else if (freeleft) {
        if ((r<maxrows-1) && (c>1) && ((tiles[l][r+2][c-2]) || (tiles[l][r+2][c-1]))) t+='leftclipped'
        else t+='left';
    }
    else if (freebottom) {
        if (((r<maxrows-1) && (c>1) && (tiles[l][r+2][c-2])) ||
            ((r<maxrows) && (c>0) && (tiles[l][r+1][c-2]))) t+='bottomclipped'
        else t+='bottom';
    }
    selection[selectionIndex-1].img=t;
    setElementPos('mahjong_overlay'+selectionIndex, x, y, z);
    setTile('tile_overlay'+selectionIndex, t);
    setVisible('mahjong_overlay'+selectionIndex, true);
}

function overlayClick(n) {
    stopEventPropagation();
    if (clickedTimer) window.clearTimeout(clickedTimer);
    if (isLocked) return;
    setVisible('mahjong_overlay'+n, false);
    if (selectionIndex>1) {
        if (n==1) {
            selection[0]=selection[1];
            with (selection[0]) {
                setElementPos('mahjong_overlay1', x, y, z);
                setTile('tile_overlay1', img);
                setVisible('mahjong_overlay1', true);
                setVisible('mahjong_overlay2', false);
            }
        }
        else if ((n==2) && (isClicked)) {
            hideSelectedTiles();
            return;
        }
    }
    isClicked=true;
    clickedTimer=window.setTimeout('releaseClick()', doubleClickDelay);
    selectionIndex--;
}

function tileDblClick(l,r,c) {
    stopEventPropagation();
    if (clickedTimer) window.clearTimeout(clickedTimer);
    if (isLocked) return;
    if ((selectionIndex==2) && (tiles[l][r][c]==selection[0].tile)) hideSelectedTiles();
}

function overlayDblClick(n) {
    stopEventPropagation();
    if (clickedTimer) window.clearTimeout(clickedTimer);
    if (isLocked) return;
    if (selectionIndex==2) hideSelectedTiles();
}

function stopEventPropagation() {
    if (window.event) {
        if (window.event.preventDefault) window.event.preventDefault();
        if (window.event.stopPropagation) window.event.stopPropagation();
        window.event.cancleBubble=true;
    }
}

function hideSelectedTiles() {
    isClicked=false;
    setVisible('mahjong_overlay1', false);
    setVisible('mahjong_overlay2', false);
    var tileValue=tiles[selection[0].l][selection[0].r][selection[0].c];
    var id;
    with (selection[0]) {
        tiles[l][r][c]=null;
        id=getTileId(l,r,c);
        resetBgOnTile(l,r,c);
        setVisible('mahjong'+id, false);
        setVisible('mahjongBG'+id, false);
    }
    with (selection[1]) {
        tiles[l][r][c]=null;
        id=getTileId(l,r,c);
        resetBgOnTile(l,r,c);
        setVisible('mahjong'+id, false);
        setVisible('mahjongBG'+id, false);
    }
    tilecount-=2;
    selectionIndex=0;
    ClickSound()
    Vibro(false)
    showScore();
    lastMoves.push([[selection[0].l, selection[0].r, selection[0].c], [selection[1].l, selection[1].r, selection[1].c], tileValue]);
    if (tilecount==0) {
        Vibro(true)
        isLocked=true;
        // ClickAudio.stop()
        confirm('Победа!!!')
        clearInterval(Timer)
        Save_Score()
        LoadFire()

    }
    else if (!pairsLeft()) {
        isLocked=true;
        alert('Oops!\nДоступных ходов больше нет.');
    }
}

function undoMove() {
    if ((lastMoves) && (lastMoves.length)) {
        isLocked=false;
        var lm=lastMoves[lastMoves.length-1];
        tiles[lm[0][0]][lm[0][1]][lm[0][2]]=lm[2];
        tiles[lm[1][0]][lm[1][1]][lm[1][2]]=lm[2];
        var id=getTileId(lm[0][0],lm[0][1],lm[0][2]);
        setVisible('mahjong'+id, true);
        setVisible('mahjongBG'+id, true);
        resetBgOnTile(lm[0][0],lm[0][1],lm[0][2]);
        id=getTileId(lm[1][0],lm[1][1],lm[1][2]);
        setVisible('mahjong'+id, true);
        setVisible('mahjongBG'+id, true);
        resetBgOnTile(lm[1][0],lm[1][1],lm[1][2]);
        lastMoves.length--;
        matchingPairs=[lm];
        matchingPairsIndex=0;
        tilecount+=2;
        hilitePairs();
        showScore();
    }
}

function Countdown()
{
    if ( Timer )
    {
        clearInterval(Timer);
        Timer=0;
    }
    console.log('Игра Началась');
    Counter=0;
    Timer=setInterval(NextTick,1000);
}

function NextTick()
{
    Counter++;
    showTime()
    if ( !Counter )
    {
        clearInterval(Timer);
        Timer=0;
    }
}


function showScore() {
    writeElement('mahjong_score', '<table border="0" cellspacing="0" cellpadding="0"><tr><td nowrap class="score">Осталось карточек: '+tilecount+'</td></tr></table>');
}

function showTime() {
    writeElement('mahjong_gametime', '<table border="0" cellspacing="0" cellpadding="0"><tr><td nowrap class="score">Ваш счет: '+Counter+'</td></tr></table>');
}


function pairsLeft(store) {
    var found=new Object();
    for (var l=tiles.length-1; l>=0; l--) {
        var sl=tiles[l];
        for (var r=0; r<sl.length; r++) {
            var sr=sl[r];
            for (var c=sr.length-1; c>=0; c--) {
                if ((sr[c]) && (tileIsFree(l,r,c))) {
                    if (found[sr[c]]) return true;
                    found[sr[c]]=true;
                }
            }
        }
    }
    return false;
}

function hilitePairs() {
    if ((matchingPairs) && (matchingPairs.length) && (matchingPairsIndex<matchingPairs.length)) {
        var p=matchingPairs[matchingPairsIndex];
        var t1=p[0];
        var t2=p[1];
        hiliteTile(1, t1[0], t1[1], t1[2]);
        hiliteTile(2, t2[0], t2[1], t2[2]);
        matchingPairsIndex++;
        setTimeout('hilitePairs()', 1500);
    }
    else {
        setVisible('mahjong_overlay1', false);
        setVisible('mahjong_overlay2', false);
        selectionIndex=0;
        isLocked=false;
        matchingPairs=null;
    }
}

function hiliteTile(n,l,r,c) {
    var y=(tileheight-borderheight)/2*r-l*(borderheight-1);
    var x=(tilewidth-borderwidth)/2*c+l*(borderwidth-1);
    var z=l*3+2;
    var freeleft=tileIsFreeLeft(l,r,c);
    var freebottom=tileIsFreeBottom(l,r,c);
    var t='ol';
    if (freeleft && freebottom) {
        if ((r<maxrows-1) && (c>1) && (tiles[l][r+2][c-2])) t+='bottomleftclipped'
        else t+='bottomleft'
    }
    else if (freeleft) {
        if ((r<maxrows-1) && (c>1) && ((tiles[l][r+2][c-2]) || (tiles[l][r+2][c-1]))) t+='leftclipped'
        else t+='left';
    }
    else if (freebottom) {
        if (((r<maxrows-1) && (c>1) && (tiles[l][r+2][c-2])) ||
            ((r<maxrows) && (c>0) && (tiles[l][r+1][c-2]))) t+='bottomclipped'
        else t+='bottom';
    }
    setElementPos('mahjong_overlay'+n, x, y, z);
    setTile('tile_overlay'+n, t);
    setVisible('mahjong_overlay'+n, true);
}

function releaseClick() {
    isClicked=false;
}

function reshuffle() {
    if (tilecount) {
        if (tilecount<144)  return;
        setVisible('mahjong_overlay1', false);
        setVisible('mahjong_overlay2', false);
        selectionIndex=0;
        isLocked=false;
        var tileArray=new Array();
        for (var l=0; l<tiles.length; l++) {
            var tl=tiles[l];
            for (var r=0; r<tl.length; r++) {
                var tr=tl[r];
                for (var c=0; c<tr.length; c++) {
                    if (tr[c]) {
                        tileArray.push(getTileCode(getTileId(l,r,c)));
                    }
                }
            }
        }
        var pile=new TilePile(tileArray);
        for (var l=0; l<tiles.length; l++) {
            var tl=tiles[l];
            for (var r=0; r<tl.length; r++) {
                var tr=tl[r];
                for (var c=0; c<tr.length; c++) {
                    if (tr[c]) {
                        var t=pile.get();
                        var f=t.charAt(0);
                        tr[c]= (tilefamilies[f].repeat)? t: f;
                        var id=getTileId(l,r,c);
                        setTile('tile'+id,t);
                    }
                }
            }
        }
              if (pairsLeft()) isLocked=false
        else {
            if (confirm('В этой раскладке нет доступных ходов!\nПеремешать опять?')) setTimeout('reshuffle()',1);
        }
    }
}

function getTileCode(id) {
    var s=document.images['tile'+id].src;
    var ofs=s.lastIndexOf('.')-2;
    return s.substring(ofs, ofs+2);
}

function setVisible(d,v) {
    if (document.getElementById) {
        var obj=document.getElementById(d);
        obj.style.visibility= (v)? 'visible':'hidden';
    }
    else if (document.all) {
        document.all[d].style.visibility= (v)? 'visible':'hidden';
    }
}

function setElementPos(d,x,y,z) {
    if (document.getElementById) {
        var obj=document.getElementById(d);
        obj.style.left=x+'px';
        obj.style.top=y+'px';
        obj.style.zIndex=z;
    }
    else if (document.all) {
        document.all[d].style.left=x+'px';
        document.all[d].style.top=y+'px';
        document.all[d].style.zIndex=z;
    }
}

function setElementOpacity(d,v) {
    var obj;
    if (document.getElementById) {
        obj=document.getElementById(d);
    }
    else if (document.all) {
        document.all[d]
    }
    if ((obj) && (obj.style)) {
        if (typeof obj.style.opacity != 'undefined') {
            obj.style.opacity=v;
        }
        if (typeof obj.style.filter != 'undefined') {
            obj.style.filter='Alpha(Opacity='+(v*100)+')';
        }
        else if (typeof obj.style.MozOpacity != 'undefined') {
            obj.style.MozOpacity=v;
        }
        else if (typeof obj.style.KhtmlOpacity != 'undefined') {
            obj.style.KhtmlOpacity=v;
        }
    }
}

function writeElement(d,t) {
    if (document.getElementById) {
        var obj=document.getElementById(d);
        if (obj) obj.innerHTML=t;
    }
    else if (document.all) {
        if (document.all[d]) document.all[d].innerHTML=t;
    }
}

function getElementDimensions(d) {
    var w=0;
    var h=0;
    if (document.layers) {
        if (document.layers[d]) {
            w=document.layers[d].clip.right;
            h=document.layers[d].clip.bottom;
        }
    }
    else if (document.getElementById) {
        var obj=document.getElementById(d);
        if ((obj) && (obj.firstChild)) {
            w=parseInt(obj.firstChild.offsetWidth,10);
            h=parseInt(obj.firstChild.offsetHeight,10);
        }
        else if ((obj) && (obj.children) && (obj.children[0])) {
            w=parseInt(obj.children[0].offsetWidth,10);
            h=parseInt(obj.children[0].offsetHeight,10);
        }
    }
    else if (document.all) {
        var obj=document.all[d];
        if ((obj) && (obj.children) && (obj.children[0])) {
            w=parseInt(obj.children[0].offsetWidth,10);
            h=parseInt(obj.children[0].offsetHeight,10);
        }
    }
    return { width: w, height: h };
}

function centerBoard() {
    var boardwidth=(tilewidth-borderwidth)/2*maxcols+tilewidth;
    var winwidth =
        (window.innerWidth) ? window.innerWidth :
            ((document.body) && (document.body.clientWidth)) ? parseInt(document.body.clientWidth) :
                window.width;
    if (winwidth) setElementPos('mahjongboard', Math.floor((winwidth-boardwidth)/2), boardtop, 1);
}

function writeBoard() {
    isCompatible=((document.getElementById) || (document.all))? true:false;
    if (isCompatible) {
        // check for MSIE Mac
        if ((navigator) && (navigator.appVersion) &&
            (navigator.appVersion.indexOf('MSIE')>0) && (navigator.appVersion.indexOf('Macintosh')>0) &&
            (!window.opera)) {
            document.write('<div id="mahjongboard" style="position:absolute;left:40px;top:100px;" class="textflow"><b>Sorry!<br><br>\nThe layout engine of MSIE for Macintosh is to buggy for this game.</b><br><br>\nTry a stable browser like &quot;Netsape 7&quot;, &quot;Mozilla&quot; or &quot;Apple Safari&quot;.</div>');
            isCompatible=false;
            return;
        }
        document.getElementById('IPage2').innerHTML='<div id="mahjongboard" style="position:absolute;left:0px;top:'+boardtop+'px;"></div>';
    }
}

function writeLayout() {
    var ofs_h=(tilewidth-borderwidth)/2;
    var ofs_v=(tileheight-borderheight)/2;
    var boardwidth=ofs_h*maxcols+tilewidth;
    var boardheight=ofs_v*maxrows+tileheight;
    var z=0;
    var bgimgattr='src="'+imgpath+overlayimages.none+'.gif" width="'+tilewidth+'" height="'+tileheight+'"';
    var imgattr='src="'+imgpath+overlayimages.none+'.gif" width="'+facewidth+'" height="'+faceheight+'"';
    var s='';
    for (var l=0; l<boardLayout.length; l++) {
        z++;
        var sl=boardLayout[l];
        var ofs_zy=l*(borderheight-1);
        var ofs_zx=l*(borderwidth-1);
        for (var r=0; r<sl.length; r++) {
            var ofs_y=ofs_v*r-ofs_zy;
            var sr=sl[r];
            for (var c=sr.length-1; c>=0; c--) {
                if (sr[c]) {
                    var ofs_x=ofs_h*c+ofs_zx;
                    var id=getTileId(l,r,c);
                    s+='<div id="mahjongBG'+id+'" style="position:absolute;top:'+ofs_y+'px;left:'+ofs_x+'px;z-index:'+z+';"><img id="tileBG'+id+'" '+bgimgattr+'></div>\n';
                }
            }
        }
        z++;
        for (var r=0; r<sl.length; r++) {
            var ofs_y=ofs_v*r-ofs_zy+1;
            var sr=sl[r];
            for (var c=sr.length-1; c>=0; c--) {
                if (sr[c]) {
                    var ofs_x=ofs_h*c+ofs_zx+borderwidth;
                    var id=getTileId(l,r,c);
                    s+='<div id="mahjong'+id+'" style="position:absolute;top:'+ofs_y+'px;left:'+ofs_x+'px;z-index:'+z+';" onclick="tileClick('+l+','+r+','+c+'); return false" ondblclick="tileDblClick('+l+','+r+','+c+'); return false"><img id="tile'+id+'" '+imgattr+'></div>\n';
                }
            }
        }
        z++;
    }
    s+='<div id="mahjong_overlay1" style="position:absolute;top:0px;left:0px;z-index:'+z+';visibility:hidden;opacity:0.6;" onclick="overlayClick(1); return false"  ondblclick="overlayDblClick(1); return false"><img id="tile_overlay1" '+bgimgattr+'></div>\n';
    s+='<div id="mahjong_overlay2" style="position:absolute;top:0px;left:0px;z-index:opacity:0.6;'+z+';visibility:hidden;" onclick="overlayClick(2); return false" ondblclick="overlayDblClick(2); return false"><img id="tile_overlay2" '+bgimgattr+'></div>\n';
    s+='<div id="mahjong_score" style="position:absolute;top:'+(boardheight+2)+'px;left:'+Math.floor(boardwidth/2-40)+'px;z-index:1;" class="score"></div>\n';
    s+='<div id="mahjong_gametime" style="position:absolute;top:'+(boardheight+20)+'px;left:'+Math.floor(boardwidth/2-40)+'px;z-index:1;" class="scoretime"></div>\n'
    writeElement('mahjongboard', s);
    layoutWritten=true;
    centerBoard();
    if (!isMobile) window.onresize=centerBoard;
    setElementOpacity('mahjong_overlay1', 0.65);
    setElementOpacity('mahjong_overlay2', 0.65);
}





//звуки и вибрация

var ClickAudio=new Audio('http://fe.it-academy.by/Projects/Kulishov/media/Beigne5.wav')

function ClickSoundInit()
{
    ClickAudio.play()
    ClickAudio.pause();
}

ClickSoundInit()

function ClickSound()
{
    ClickAudio.currentTime=0;
    ClickAudio.play();
}



function Vibro(LongFlag)
{
    if ( navigator.vibrate ) // есть поддержка Vibration API?
    {
        if ( !LongFlag )
            window.navigator.vibrate(100); // вибрация 300мс
        else
            window.navigator.vibrate([300,50,300,50,300]); // вибрация 3 раза по 100мс с паузами 50мс
    }
}



function MusicControl()
{
    var myaudio=document.getElementById('player')

    if(myaudio.paused == true)
    {
        myaudio.scr='http://fe.it-academy.by/Projects/Kulishov/media/Chines_health_liver.mp3'
        document.getElementById("player").play();
        MusicButton.src="http://fe.it-academy.by/Projects/Kulishov_JSE/img/icons/NoMute.png"
    }
    else if (myaudio.paused == false)
    {
        document.getElementById("player").pause();
        MusicButton.src="http://fe.it-academy.by/Projects/Kulishov_JSE/img/icons/Mute.png"
    }
}



// сохранение счета
function Save_Score(){
    do {
        NameInfo=prompt('Ваш результат: '+Counter+'\nВведите Ваше имя, для сохранения в таблице рекордов', '');
    } while (!NameInfo);
    SendMessage()
}

RefreshMessages()

function ShowMessages()
{
    MessagesA.sort(function (a, b) {
        if (a.mess > b.mess) {
            return 1;
        }
        if (a.mess < b.mess) {
            return -1;
        }
        // a должно быть равным b
        return 0;
    });

    var Str='';
    for ( var M=0; M<MessagesA.length; M++ )
    {
        var MessageH=MessagesA[M];
        Str+="<span class='ScoreName'>"+EscapeHTML(MessageH.name)+":</span><span class='ScoreScore'>"
            +EscapeHTML(MessageH.mess)+"</span><br />";
    }
    document.getElementById('IPage2').innerHTML=Str;
}

function EscapeHTML(text)
{
    if ( !text )
        return text;
    text=text.toString()
        .split("&").join("&amp;")
        .split("<").join("&lt;")
        .split(">").join("&gt;")
        .split('"').join("&quot;")
        .split("'").join("&#039;");
    return text;
}

// получает сообщения с сервера и потом показывает
function RefreshMessages()
{
    $.ajax(
        {
            url : AjaxHandlerScript,
            type : 'POST',
            data : { f : 'READ', n : 'KULISHOV_MAHJONG_TEST' },
            cache : false,
            success : ReadReady,
            error : ErrorHandler
        }
    );
}

function ReadReady(ResultH) // сообщения получены - показывает
{
    if ( ResultH.error!=undefined )
        alert(ResultH.error);
    else
    {
        MessagesA=[];
        if ( ResultH.result!="" ) // либо строка пустая - сообщений нет
        {
            MessagesA=JSON.parse(ResultH.result);
            if ( !Array.isArray(MessagesA) )
                MessagesA=[];
        }
    }
}

// получает сообщения с сервера, добавляет новое,
// показывает и сохраняет на сервере
function SendMessage()
{
    UpdatePassword=Math.random();
    $.ajax(
        {
            url : AjaxHandlerScript,
            type : 'POST',
            data : { f : 'LOCKGET', n : 'KULISHOV_MAHJONG_TEST',
                p : UpdatePassword },
            cache : false,
            success : LockGetReady,
            error : ErrorHandler
        }
    );
}

// сообщения получены, добавляет, показывает, сохраняет
function LockGetReady(ResultH)
{
    if ( ResultH.error!=undefined )
        alert(ResultH.error);
    else
    {
        MessagesA=[];
        if ( ResultH.result!="" ) // либо строка пустая - сообщений нет
        {
            // либо в строке - JSON-представление массива сообщений
            MessagesA=JSON.parse(ResultH.result);
            if ( !Array.isArray(MessagesA) )
                MessagesA=[];
        }


        MessagesA.push( { name:NameInfo, mess:Counter } );
        if ( MessagesA.length>10 )
            MessagesA=MessagesA.slice(MessagesA.length-10)


        $.ajax(
            {
                url : AjaxHandlerScript,
                type : 'POST',
                data : { f : 'UPDATE', n : 'KULISHOV_MAHJONG_TEST',
                    v : JSON.stringify(MessagesA), p : UpdatePassword },
                cache : false,
                success : UpdateReady,
                error : ErrorHandler
            }
        );
    }
}

// сообщения вместе с новым сохранены на сервере
function UpdateReady(ResultH)
{
    if ( ResultH.error!=undefined )
        alert(ResultH.error);
}

function ErrorHandler(jqXHR,StatusStr,ErrorStr)
{
    alert(StatusStr+' '+ErrorStr);
}

RefreshMessages();



//загрузка canvas салюта
function LoadFire()
{
    $.ajax("script/BOOM.js",
        { type:'GET', dataType:'script', success:DataLoadedFire, error:ErrorHandlerFire }
    );
}

function DataLoadedFire(data)
{
    console.log('загруженные через AJAX данные:');
}


//сохранение и продолжение игры
function ErrorHandlerFire(jqXHR,StatusStr,ErrorStr)
{
    alert(StatusStr+' '+ErrorStr);
}

function SaveGame(){
    localStorage["myKey"] = JSON.stringify($("#mahjongboard").html());
}


function LoadLastGame(){
    if (localStorage["myKey"] != null) {
        var SaveContent = JSON.parse(localStorage["myKey"]);
        $("#mahjongboard").html(SaveContent);
    }
}