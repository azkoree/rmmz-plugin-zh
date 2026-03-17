/*
############################################
	作者: COBRA
    クレジットに「ONEONE1のCOBRA」って入れてくれたら嬉しいなぁ

	営利・非営利・18禁問わず配布可、改造も可、報告不要
	積極的に配布して皆のゲーム開発を快適にしてあげて
	https://ci-en.dlsite.com/creator/17968
	https://twitter.com/onarinin_san
############################################
*/

/*:zh
 * @target MZ
 * @plugindesc 优化输入文本体验
 * @author COBRA(ONEONE1) 
 *
 * @help
 * ver 1.0.0
 *
 * 在文本开头以【名字】的形式输入时，
 * 【】内的文本会作为名称窗口显示
 * 
 * 要指定对话窗口类型，在名称开头输入
 * □→窗口
 * ■→暗淡背景
 * 〼→透明
 * 对应的符号，即可设定
 * 
 * 默认的窗口背景类型可在插件参数中进行设定
 * 
 * 联系作者
 * https://ci-en.dlsite.com/creator/17968
 * https://twitter.com/onarinin_san
 * 
 * @param nameWindowType
 * @type select
 * @option 窗口
 * @value 0
 * @option 暗淡背景
 * @value 1
 * @option 透明
 * @value 2
 * @default 0
 * @text 存在【】时的窗口类型
 * @desc 使用【名称】的情况下，显示文章使用的窗口背景类型
 *
 * @param namelessWindowType
 * @type select
 * @option 窗口
 * @value 0
 * @option 暗淡背景
 * @value 1
 * @option 透明
 * @value 2
 * @default 1
 * @text 不存在【】时的窗口类型
 * @desc 不使用【名称】的情况下，显示文章使用的窗口背景类型
 */

/*:
 * @target MZ
 * @plugindesc 文章の入力をサポートします
 * @author COBRA(ONEONE1) 
 *
 * @help
 * ver 1.0.0
 *
 * 文章の先頭に【名前】と入力されていた場合
 * 【】の中身を名前欄に表示させます
 * 
 * 背景タイプを指定したいときは、名前より先頭に
 * □→ウィンドウ
 * ■→暗くする
 * 〼→透明
 * と記入することで設定できます
 * 
 * デフォの背景もプラグインのパラメータから設定できます
 * 
 *
 * 連絡先
 * https://ci-en.dlsite.com/creator/17968
 * https://twitter.com/onarinin_san
 * 
 * @param nameWindowType
 * @type select
 * @option ウィンドウ
 * @value 0
 * @option 暗くする
 * @value 1
 * @option 透明
 * @value 2
 * @default 0
 * @text 【】が"在る"ウィンドウタイプ
 * @desc 名前がある場合文章として表示されるウィンドウタイプ
 *
 * @param namelessWindowType
 * @type select
 * @option ウィンドウ
 * @value 0
 * @option 暗くする
 * @value 1
 * @option 透明
 * @value 2
 * @default 1
 * @text 【】が"無い"ウィンドウタイプ
 * @desc 名前がない場合文章として表示されるウィンドウタイプ
 */

Window_Message.prototype.startMessage = function() {
    var text = $gameMessage.allText();

    //背景のマッチ
    var reg = /^[□|■|〼]/;
    var m = text.match(reg);
    if(m){
        text = text.slice(1);
    }

    //文字のマッチ
    var reg = /^【([^【】]+)】/;
    var m2 = text.match(reg);
    //名前切り取り
    if(m2){
        this._nameBoxWindow.setName(m2[1]);
        text = text.slice(m2[0].length);
    }

    //背景変更がある場合
    if(m){
        if(m[0]==="■"){
            $gameMessage.setBackground(1);//黒
        }else if(m[0]==="〼"){
            $gameMessage.setBackground(2);//透明
        }else{
            $gameMessage.setBackground(0);//ウィンドウ
        }
    //背景変更がない場合はデフォを使う
    }else{
        var param = PluginManager.parameters("CBR_nameMessage");

        if(m2){
            $gameMessage.setBackground(Number(param['nameWindowType']) || 0);
        }else{
            $gameMessage.setBackground(Number(param['namelessWindowType']) || 1);
        }
    }

    const textState = this.createTextState(text, 0, 0, 0);
    textState.x = this.newLineX(textState);
    textState.startX = textState.x;
    this._textState = textState;
    this.newPage(this._textState);
    this.updatePlacement();
    this.updateBackground();
    this.open();

    //open()の後じゃないと名前欄が反映されない
    if(m2){
        this._nameBoxWindow.setName(m2[1]);
    }

    this._nameBoxWindow.start();
};






