//=============================================================================
// DynamicVariables.js
// ----------------------------------------------------------------------------
// (C)2016 Triacontane
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
// ----------------------------------------------------------------------------
// Version
// 1.4.0 2024/05/16 ゲーム変数、スイッチを参照するローカル変数の定義を追加、誤ったヘルプの記載を削除
// 1.3.0 2020/10/18 MZ版としてリファクタリング。MV版からメモ欄の仕様を変更
// 1.2.0 2020/10/18 リファクタリングとヘルプの整理
// 1.1.1 2018/09/27 テストプレー時はパラメータ「例外処理」の値に関係なくスクリプトエラーで異常終了しないよう修正
// 1.1.0 2018/08/19 イベントページの出現条件および敵キャラの行動パターンで各オブジェクトおよびデータを参照できる機能を追加
// 1.0.5 2018/01/27 1.0.4の更新でもともと入っていた値の取得方法をvalueに変更
// 1.0.4 2018/01/15 実行時に対象スイッチIDおよび代入されているもとの値を参照できる機能を追加
// 1.0.3 2017/08/12 パラメータの型指定機能に対応
// 1.0.2 2016/11/04 指定範囲外のスイッチの値を正しく返していなかった問題を修正
// 1.0.1 2016/11/01 結果が空文字の場合に0が設定されないよう修正
// 1.0.0 2016/10/27 初版
// ----------------------------------------------------------------------------
// [Blog]   : https://triacontane.blogspot.jp/
// [Twitter]: https://twitter.com/triacontane/
// [GitHub] : https://github.com/triacontane/
//=============================================================================
/*:zh
 * @plugindesc 动态变量插件
 * @target MZ
 * @url https://github.com/triacontane/RPGMakerMV/tree/mz_master/DynamicVariables.js
 * @base PluginCommonBase
 * @author トリアコンタン
 *
 * @param DynamicSwitchStart
 * @text 动态开关开始位置
 * @desc 动态开关的开始位置编号。
 * @default 0
 * @type switch
 *
 * @param DynamicSwitchEnd
 * @text 动态开关结束位置
 * @desc 动态开关的结束位置编号。
 * @default 0
 * @type switch
 *
 * @param DynamicVariableStart
 * @text 动态变量开始位置
 * @desc 动态变量的开始位置编号。
 * @default 0
 * @type variable
 *
 * @param DynamicVariableEnd
 * @text 动态变量结束位置
 * @desc 动态变量的结束位置编号。
 * @default 0
 * @type variable
 *
 * @param ValidException
 * @text 排除处理
 * @desc 运行脚本时进行排除处理，防止因脚本出错而崩溃，但会略微降低运行速度。
 * @default false
 * @type boolean
 *
 * @help 引用指定范围内的变量、开关时，
 * 将“变量名称”和“开关名称”作为脚本执行的结果。
 * 脚本中除了控制符外，还可以使用以下局部变量。
 *
 * id #作为处理对象的开关、变量ID
 * value #作为处理对象的开关、变量ID原本的值
 * 
 * 在事件页面的出现条件中引用开关时，可以使用以下变量。
 * e #事件对象的引用
 * d #事件数据的引用
 * 
 * 在敌人的行动模式中引用开关时，可以使用以下变量。
 * v #敌人对象的引用
 * s #敌人数据的引用
 * 
 * 无论在什么场景，都可以使用以下变量。
 * v #游戏变量对象的引用
 * s #游戏开关对象的引用
 *
 * 动态变量在所有引用开关和变量的地方(※)都有效。
 * 
 * ※ 变量 / 开关的引用位置示例
 * 1. 事件页面的决定处理
 * 2. 敌人的行动决定处理
 * 3. 条件分歧
 * 4. 事件命令各种操作变量
 * 5. 其他插件进行的音乐
 * 
 * 在脚本中也可以进一步引用动态变量和开关。
 * 但如果试图引用相同编号的变量（开关），会导致循环引用并报错。
 * 
 * 原本，事件页面的出现条件，只会在某个开关或变量被更改时才会执行。
 * 本插件中，只要在页面出现条件中设置了一个动态开关或动态变量，
 * 就会改为每帧进行页面决定处理。
 * 由于这一处理方式会略微降低性能，如果指定了动态开关，
 * 但不想每帧执行，请在备注栏中指定以下内容。
 * <NoRefresh>
 *
 * 本插件没有插件命令。
 *
 * 利用規約：
 *  作者に無断で改変、再配布が可能で、利用形態（商用、18禁利用等）
 *  についても制限はありません。
 *  このプラグインはもうあなたのものです。
 */

/*:
 * @plugindesc 動的変数プラグイン
 * @target MZ
 * @url https://github.com/triacontane/RPGMakerMV/tree/mz_master/DynamicVariables.js
 * @base PluginCommonBase
 * @author トリアコンタン
 *
 * @param DynamicSwitchStart
 * @text 動的スイッチ開始位置
 * @desc 動的スイッチの開始位置番号です。
 * @default 0
 * @type switch
 *
 * @param DynamicSwitchEnd
 * @text 動的スイッチ終了位置
 * @desc 動的スイッチの終了位置番号です。
 * @default 0
 * @type switch
 *
 * @param DynamicVariableStart
 * @text 動的変数開始位置
 * @desc 動的変数の開始位置番号です。
 * @default 0
 * @type variable
 *
 * @param DynamicVariableEnd
 * @text 動的変数終了位置
 * @desc 動的変数の終了位置番号です。
 * @default 0
 * @type variable
 *
 * @param ValidException
 * @text 例外処理
 * @desc スクリプト実行時に例外処理を行います。不正なスクリプトで強制終了しなくなる代わりに実行速度が僅かに低下します。
 * @default false
 * @type boolean
 *
 * @help 指定範囲内の変数、スイッチを参照したとき
 * 「変数名称」及び「スイッチ名称」をスクリプトとして評価した結果を返します。
 * スクリプト中では制御文字のほか以下のローカル変数が利用できます。
 *
 * id    # 処理対象のスイッチ、変数ID
 * value # 処理対象のスイッチ、変数IDにもともと入っていた値
 *
 * イベントページの出現条件でスイッチを参照する場合、以下の変数が使えます。
 * e # イベントオブジェクトへの参照
 * d # イベントデータへの参照
 *
 * 敵キャラの行動パターンでスイッチを参照する場合、以下の変数が使えます。
 * e # 敵キャラオブジェクトへの参照
 * d # 敵キャラデータへの参照
 *
 * 使用する局面を問わず、以下の変数が使えます。
 * v # ゲーム変数オブジェクトへの参照
 * s # ゲームスイッチオブジェクトへの参照
 *
 * 動的変数は、変数およびスイッチを参照するすべての箇所(※)で有効です。
 *
 * ※ 変数・スイッチを参照する例
 * 1. イベントページの決定処理
 * 2. 敵キャラの行動決定処理
 * 3. 条件分岐
 * 4. イベントコマンドの各種オペランド
 * 5. その他プラグインによる参照
 *
 * スクリプト中でさらに動的変数およびスイッチを参照することもできますが
 * 同じ番号の変数(スイッチ)を参照しようとすると循環参照となりエラーが発生します。
 *
 * 本来、イベントのページを決定する処理は、いずれかのスイッチもしくは変数が
 * 変更されたときにのみ実行されます。
 * 本プラグインではページの出現条件に動的スイッチ、動的変数をひとつでも
 * 設定するとページ決定処理を毎フレーム実行するよう変更します。
 * この処理は僅かながらパフォーマンスを低下させるため、動的スイッチを指定した
 * 場合も毎フレーム実行したくない場合は、以下のメモ欄を指定してください。
 * <NoRefresh>
 *
 * このプラグインにはプラグインコマンドはありません。
 *
 * 利用規約：
 *  作者に無断で改変、再配布が可能で、利用形態（商用、18禁利用等）
 *  についても制限はありません。
 *  このプラグインはもうあなたのものです。
 */

(function() {
    'use strict';
    const script = document.currentScript;
    const param = PluginManagerEx.createParameter(script);

    // eval参照用
    let e = null;
    let d = null;

    //=============================================================================
    // Game_Variables
    //  動的変数の取得処理を追加定義します。
    //=============================================================================
    const _Game_Variables_value      = Game_Variables.prototype.value;
    Game_Variables.prototype.value = function(variableId) {
        const value = _Game_Variables_value.apply(this, arguments);
        if (this.isDynamic(variableId)) {
            return this.getDynamicValue($dataSystem.variables[variableId], variableId, value);
        } else {
            return value;
        }
    };

    Game_Variables.prototype.isDynamic = function(variableId) {
        return variableId >= param.DynamicVariableStart && variableId <= param.DynamicVariableEnd;
    };

    Game_Variables.prototype.getOriginalValue = function(variableId) {
        return _Game_Variables_value.apply(this, arguments);
    };

    Game_Variables.prototype.getDynamicValue = function(dynamicScript, id, value) {
        if (!dynamicScript) {
            return value;
        }
        const v = $gameVariables.value.bind($gameVariables);
        const s = $gameSwitches.value.bind($gameSwitches);
        if (param.ValidException || $gameTemp.isPlaytest()) {
            try {
                return eval(dynamicScript);
            } catch (e) {
                console.error(e.message);
                return 0;
            }
        } else {
            return eval(dynamicScript);
        }
    };

    //=============================================================================
    // Game_Switches
    //  動的スイッチの取得処理を追加定義します。
    //=============================================================================
    const _Game_Switches_value      = Game_Switches.prototype.value;
    Game_Switches.prototype.value = function(switchId) {
        const value = _Game_Switches_value.apply(this, arguments);
        if (this.isDynamic(switchId)) {
            return !!this.getDynamicValue($dataSystem.switches[switchId], switchId, value);
        } else {
            return value;
        }
    };

    Game_Switches.prototype.isDynamic = function(switchId) {
        return switchId >= param.DynamicSwitchStart && switchId <= param.DynamicSwitchEnd;
    };

    Game_Switches.prototype.getOriginalValue = function(switchId) {
        return _Game_Switches_value.apply(this, arguments);
    };

    Game_Switches.prototype.getDynamicValue = Game_Variables.prototype.getDynamicValue;

    //=============================================================================
    // Game_Event
    //  必要な場合、イベントページを毎フレームリフレッシュします。
    //=============================================================================
    const _Game_Event_initialize      = Game_Event.prototype.initialize;
    Game_Event.prototype.initialize = function(mapId, eventId) {
        _Game_Event_initialize.apply(this, arguments);
        this._needsAlwaysRefresh = this.isNeedAlwaysRefresh();
    };

    Game_Event.prototype.isNeedAlwaysRefresh = function() {
        if (PluginManagerEx.findMetaValue(this.event(), 'NoRefresh')) {
            return false;
        }
        const pages = this.event().pages;
        if (!pages) {
            return false;
        }
        return pages.some(page => this.isDynamicConditionPage(page));
    };

    Game_Event.prototype.isDynamicConditionPage = function(page) {
        const c = page.conditions;
        if (c.switch1Valid && $gameSwitches.isDynamic(c.switch1Id)) {
            return true;
        } else if (c.switch2Valid && $gameSwitches.isDynamic(c.switch2Id)) {
            return true;
        } else if (c.variableValid && $gameVariables.isDynamic(c.variableId)) {
            return true;
        }
        return false;
    };

    const _Game_Event_update      = Game_Event.prototype.update;
    Game_Event.prototype.update = function() {
        if (this._needsAlwaysRefresh) {
            this.refresh();
        }
        _Game_Event_update.apply(this, arguments);
    };

    const _Game_Event_meetsConditions      = Game_Event.prototype.meetsConditions;
    Game_Event.prototype.meetsConditions = function(page) {
        e          = this;
        d          = this.event();
        const result = _Game_Event_meetsConditions.apply(this, arguments);
        e          = null;
        d          = null;
        return result;
    };

    /**
     * Game_Enemy
     * 敵キャラ情報をスクリプト実行用に記憶します。
     */
    const _Game_Enemy_meetsSwitchCondition      = Game_Enemy.prototype.meetsSwitchCondition;
    Game_Enemy.prototype.meetsSwitchCondition = function(param) {
        e          = this;
        d          = this.enemy();
        const result = _Game_Enemy_meetsSwitchCondition.apply(this, arguments);
        e          = null;
        d          = null;
        return result;
    };
})();

