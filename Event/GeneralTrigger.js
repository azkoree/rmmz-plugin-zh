//=============================================================================
// GeneralTrigger.js
// ----------------------------------------------------------------------------
// (C)2016 Triacontane
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
// ----------------------------------------------------------------------------
// Version
// 2.1.0 2021/03/20 MZで動作するよう修正
// 2.0.0 2021/03/20 パラメータの型指定機能に対応
// 1.1.0 2016/07/06 レベルアップ時、レベルダウン時のトリガーを追加
// 1.0.2 2016/06/22 最強装備を選択した場合にエラーが発生する問題を修正
// 1.0.1 2016/06/17 ロードが失敗するバグを修正
// 1.0.0 2016/06/14 初版
// ----------------------------------------------------------------------------
// [Blog]   : https://triacontane.blogspot.jp/
// [Twitter]: https://twitter.com/triacontane/
// [GitHub] : https://github.com/triacontane/
//=============================================================================
/*:zh
* @plugindesc 开关触发插件
 * @target MZ
 * @url https://github.com/triacontane/RPGMakerMV/tree/mz_master/GeneralTrigger.js
 * @base PluginCommonBase
 * @author トリアコンタン
 *
 * @param NewGame
 * @text 新游戏
 * @desc 开始新游戏时打开的开关编号
 * @default 0
 * @type switch
 *
 * @param Continue
 * @text 继续游戏
 * @desc 继续游戏时打开的开关编号
 * @default 0
 * @type switch
 *
 * @param Options
 * @text 设置界面
 * @desc 打开设置界面时打开的开关编号。从标题画面打开时无效。
 * @default 0
 * @type switch
 *
 * @param Menu
 * @text 菜单界面
 * @desc 打开菜单界面时打开的开关编号。
 * @default 0
 * @type switch
 *
 * @param Save
 * @text 存档界面
 * @desc 打开存档画面时打开的开关编号。
 * @default 0
 * @type switch
 *
 * @param Battle
 * @text 战斗界面
 * @desc 打开战斗画面时打开的开关编号。
 * @default 0
 * @type switch
 *
 * @param Shop
 * @text 商店界面
 * @desc 打开商店界面时打开的开关编号。
 * @default 0
 * @type switch
 *
 * @param MoveMap
 * @text 移动到其他地图
 * @desc 移动到其他地图时打开的开关编号。
 * @default 0
 * @type switch
 *
 * @param GainItem
 * @text 增减道具
 * @desc 增减道具时打开的开关编号。
 * @default 0
 * @type switch
 *
 * @param GainWeapon
 * @text 增减武器
 * @desc 增减武器时打开的开关编号。
 * @default 0
 * @type switch
 *
 * @param GainArmor
 * @text 增减防具
 * @desc 增减防具时打开的开关编号。
 * @default 0
 * @type switch
 *
 * @param ItemId
 * @text 道具ID
 * @desc 增减道具、武器、防具时，用于存储ID的变量。
 * @default 0
 * @type variable
 *
 * @param ItemAmount
 * @text 道具个数
 * @desc 增减道具、武器、防具时，用于存储数量的变量。
 * @default 0
 * @type variable
 *
 * @param AddMember
 * @text 队员加入
 * @desc 队员加入时打开的开关编号。
 * @default 0
 * @type switch
 *
 * @param RemoveMember
 * @text 队员离开
 * @desc 队员离开时打开的开关编号。
 * @default 0
 * @type switch
 *
 * @param LevelUp
 * @text 升级
 * @desc 升级时打开的开关编号。
 * @default 0
 * @type switch
 *
 * @param LevelDown
 * @text 降级
 * @desc 降级时打开的开关编号。
 * @default 0
 * @type switch
 *
 * @param ActorId
 * @text 角色ID
 * @desc 存储加入、离队、升级、降级的角色ID的变量编号。
 * @default 0
 * @type variable
 *
 * @param ValidOnlyMap
 * @text 仅地图界面有效
 * @desc 关于道具增减和升级的部分设置，只有在地图界面时才会打开开关。
 * @default false
 * @type boolean
 *
 * @help 在游戏中的各种情况下打开菜单。
 * 主要配合并行处理、自动执行的公共事件使用。
 * 可以选择在以下时机打开开关。
 *
 * - 开始新游戏时
 * - 继续游戏时
 * - 关闭菜单时
 * - 关闭设置界面时
 * - 关闭存档界面时
 * - 关闭商店界面时
 * - 移动到其他地图时
 * - 获得道具时
 * - 队员加入、离队时
 * - 等级增减时
 *
 * 同时，根据触发的类型，可以在打开开关的同时为变量代入指定的值。
 * 
 *例如，获得道具时触发器开启，会将物品id存储在指定的变量中。
 * 可以创建专门的获得道具信息之类的。
 * 
 * 本插件没有插件命令。
 *
 * 使用条款：
 *您可以自由修改和重新分发此插件，无需获得作者许可，
 * 且其使用没有任何限制（例如商业用途、成人内容等）。
 * 此插件现已归您所有。
 */
/*:
 * @plugindesc トリガープラグイン
 * @target MZ
 * @url https://github.com/triacontane/RPGMakerMV/tree/mz_master/GeneralTrigger.js
 * @base PluginCommonBase
 * @author トリアコンタン
 *
 * @param NewGame
 * @text ニューゲーム
 * @desc ニューゲーム時にONになるスイッチ番号
 * @default 0
 * @type switch
 *
 * @param Continue
 * @text コンティニュー
 * @desc コンティニュー時にONになるスイッチ番号
 * @default 0
 * @type switch
 *
 * @param Options
 * @text オプション画面
 * @desc オプション画面を出た時にONになるスイッチ番号。ただしタイトル画面の場合は無効です。
 * @default 0
 * @type switch
 *
 * @param Menu
 * @text メニュー画面
 * @desc メニュー画面を出た時にONになるスイッチ番号
 * @default 0
 * @type switch
 *
 * @param Save
 * @text セーブ画面
 * @desc セーブ画面を出た時にONになるスイッチ番号
 * @default 0
 * @type switch
 *
 * @param Battle
 * @text 戦闘画面
 * @desc 戦闘画面を出た時にONになるスイッチ番号
 * @default 0
 * @type switch
 *
 * @param Shop
 * @text ショップ画面
 * @desc ショップ画面を出た時にONになるスイッチ番号
 * @default 0
 * @type switch
 *
 * @param MoveMap
 * @text 別マップ移動
 * @desc 別マップ移動時にONになるスイッチ番号
 * @default 0
 * @type switch
 *
 * @param GainItem
 * @text アイテム増減
 * @desc アイテム増減時にONになるスイッチ番号
 * @default 0
 * @type switch
 *
 * @param GainWeapon
 * @text 武器増減
 * @desc 武器増減時にONになるスイッチ番号
 * @default 0
 * @type switch
 *
 * @param GainArmor
 * @text 防具増減
 * @desc 防具増減時にONになるスイッチ番号
 * @default 0
 * @type switch
 *
 * @param ItemId
 * @text アイテムID
 * @desc アイテム、武器、防具入手時に格納されるアイテムIDを格納する変数番号
 * @default 0
 * @type variable
 *
 * @param ItemAmount
 * @text アイテム個数
 * @desc アイテム、武器、防具入手時に格納されるアイテム増減数を格納する変数番号
 * @default 0
 * @type variable
 *
 * @param AddMember
 * @text メンバー加入
 * @desc メンバー加入時にONになるスイッチ番号
 * @default 0
 * @type switch
 *
 * @param RemoveMember
 * @text メンバー離脱
 * @desc メンバー離脱時にONになるスイッチ番号
 * @default 0
 * @type switch
 *
 * @param LevelUp
 * @text レベルアップ
 * @desc レベルアップ時にONになるスイッチ番号
 * @default 0
 * @type switch
 *
 * @param LevelDown
 * @text レベルダウン
 * @desc レベルダウン時にONになるスイッチ番号
 * @default 0
 * @type switch
 *
 * @param ActorId
 * @text アクターID
 * @desc 加入・離脱、レベルアップ、レベルダウンしたアクターIDを格納する変数番号
 * @default 0
 * @type variable
 *
 * @param ValidOnlyMap
 * @text マップ画面でのみ有効
 * @desc アイテムの増減やレベルアップについて、マップ画面でのみスイッチをONにします。(ON/OFF)
 * @default false
 * @type boolean
 *
 * @help ゲーム中、様々な局面でスイッチをONにします。
 * 主に並列処理、自動実行のコモンイベントと組み合わせて使用します。
 * 以下のタイミングでスイッチをONにできます。
 *
 * ・ニューゲーム
 * ・コンティニュー
 * ・メニュー画面を閉じたとき
 * ・オプション画面を閉じたとき
 * ・セーブ画面を閉じたとき
 * ・ショップ画面を閉じたとき
 * ・別マップに移動したとき
 * ・アイテムを入手したとき
 * ・メンバーが加入、離脱したとき
 * ・レベルが増減したとき
 *
 * また、トリガーの種類によっては、スイッチがONになると同時に変数に
 * 所定の値が代入されます。
 *
 * 例えば、アイテム入手のトリガーがONになったときに指定された変数に
 * アイテムIDが格納されます。
 * 専用の入手インフォメーション等が作成できます。
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

    //=============================================================================
    // SceneManager
    //  トリガースイッチを設定処理を追加定義します。
    //=============================================================================
    const _SceneManager_pop = SceneManager.pop;
    SceneManager.pop      = function() {
        if (this._stack.length > 0) {
            this._scene.setPopTrigger();
        }
        _SceneManager_pop.apply(this, arguments);
    };

    SceneManager.setTriggerSwitch = function(switchNumber) {
        if ($gameSwitches && switchNumber > 0) {
            $gameSwitches.setValue(switchNumber, true);
        }
    };

    SceneManager.setTriggerVariable = function(variableNumber, value) {
        if ($gameVariables && variableNumber > 0) {
            $gameVariables.setValue(variableNumber, value);
        }
    };

    SceneManager.isTriggerValid = function() {
        return !param.ValidOnlyMap || this._scene instanceof Scene_Map;
    };

    //=============================================================================
    // DataManager
    //  ニューゲーム、コンティニューのトリガースイッチを設定します。
    //=============================================================================
    const _DataManager_setupNewGame = DataManager.setupNewGame;
    DataManager.setupNewGame      = function() {
        _DataManager_setupNewGame.apply(this, arguments);
        SceneManager.setTriggerSwitch(param.NewGame);
    };

    const _DataManager_extractSaveContents = DataManager.extractSaveContents;
    DataManager.extractSaveContents = function(contents) {
        const result = _DataManager_extractSaveContents.apply(this, arguments);
        SceneManager.setTriggerSwitch(param.Continue);
        return result;
    };

    //=============================================================================
    // Game_Player
    //  場所移動時にトリガースイッチを設定します。
    //=============================================================================
    const _Game_Player_reserveTransfer      = Game_Player.prototype.reserveTransfer;
    Game_Player.prototype.reserveTransfer = function(mapId, x, y, d, fadeType) {
        _Game_Player_reserveTransfer.apply(this, arguments);
        SceneManager.setTriggerSwitch(param.MoveMap);
    };

    const _Game_Party_addActor      = Game_Party.prototype.addActor;
    Game_Party.prototype.addActor = function(actorId) {
        const length = this._actors.length;
        _Game_Party_addActor.apply(this, arguments);
        if (length !== this._actors.length && SceneManager.isTriggerValid()) {
            SceneManager.setTriggerSwitch(param.AddMember);
            SceneManager.setTriggerVariable(param.ActorId, actorId);
        }
    };

    const _Game_Party_removeActor      = Game_Party.prototype.removeActor;
    Game_Party.prototype.removeActor = function(actorId) {
        const length = this._actors.length;
        _Game_Party_removeActor.apply(this, arguments);
        if (length !== this._actors.length && SceneManager.isTriggerValid()) {
            SceneManager.setTriggerSwitch(param.RemoveMember);
            SceneManager.setTriggerVariable(param.ActorId, actorId);
        }
    };

    const _Game_Party_gainItem      = Game_Party.prototype.gainItem;
    Game_Party.prototype.gainItem = function(item, amount, includeEquip) {
        _Game_Party_gainItem.apply(this, arguments);
        if (!item || !SceneManager.isTriggerValid()) return;
        switch (this.itemContainer(item)) {
            case this._items:
                SceneManager.setTriggerSwitch(param.GainItem);
                break;
            case this._weapons:
                SceneManager.setTriggerSwitch(param.GainWeapon);
                break;
            case this._armors:
                SceneManager.setTriggerSwitch(param.GainArmor);
                break;
        }
        SceneManager.setTriggerVariable(param.ItemId, item.id);
        SceneManager.setTriggerVariable(param.ItemAmount, amount);
    };

    const _Game_Actor_levelUp = Game_Actor.prototype.levelUp;
    Game_Actor.prototype.levelUp = function() {
        _Game_Actor_levelUp.apply(this, arguments);
        if (SceneManager.isTriggerValid()) {
            SceneManager.setTriggerSwitch(param.LevelUp);
            SceneManager.setTriggerVariable(param.ActorId, this.actorId());
        }
    };

    const _Game_Actor_levelDown = Game_Actor.prototype.levelDown;
    Game_Actor.prototype.levelDown = function() {
        _Game_Actor_levelDown.apply(this, arguments);
        if (SceneManager.isTriggerValid()) {
            SceneManager.setTriggerSwitch(param.LevelDown);
            SceneManager.setTriggerVariable(param.ActorId, this.actorId());
        }
    };

    //=============================================================================
    // Scene_Base
    //  各クラス用のトリガースイッチを設定します。
    //=============================================================================
    Scene_Base.prototype.setPopTrigger = function() {
    };

    Scene_Options.prototype.setPopTrigger = function() {
        SceneManager.setTriggerSwitch(param.Options);
    };

    Scene_Menu.prototype.setPopTrigger = function() {
        SceneManager.setTriggerSwitch(param.Menu);
    };

    Scene_Save.prototype.setPopTrigger = function() {
        SceneManager.setTriggerSwitch(param.Save);
    };

    Scene_Shop.prototype.setPopTrigger = function() {
        SceneManager.setTriggerSwitch(param.Shop);
    };

    Scene_Battle.prototype.setPopTrigger = function() {
        SceneManager.setTriggerSwitch(param.Battle);
    };
})();

