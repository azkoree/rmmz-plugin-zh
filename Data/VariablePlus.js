// VariablePlus.js Ver.1.0.0
// MIT License (C) 2025 あわやまたな
// http://opensource.org/licenses/mit-license.php

/*:zh
* @target MZ
* @plugindesc 改善变量、开关的功能。
* @author あわやまたな (Awaya_Matana)
* @url https://awaya3ji.seesaa.net/article/517527057.html
* @help 「效率化」和「不刷新变量」
* 主要用于减轻并行处理的负担。
*
* 使用事件命令或setValue函数代入数值时，必定会触发地图刷新处理，重新验证所有条件。
* 如果与并行处理同时使用，每帧都会执行此操作，效率低下。
*
* 效率化：
* 可以根据用途大幅减少刷新频率。如果当前值和新值相同，则不会刷新地图。
*
* 例如，创建了常时获取区域ID的并行处理事件时，
* 以往即使获取的区域ID没有变化也会刷新，
* 使用本功能后，只要区域ID不变就不会刷新。
* 也适合用于管理角色的XY坐标。
*
* 不刷新变量：
* 完全不刷新。
* 最适合完全不用于出现条件，仅用于条件分歧或数值计算的变量。
*
* 变量的初始值：
* 可以总体的管理初始值。
* 通常在事件中进行，供需要的人使用。
*
* 在使用v[n]的损伤计算公式状态下进行战斗测试时也很有用。
* value函数会将初始值undefined修正为0后返回，
* 但v[n]直接返回变量的内容，因此undefined不会被修正为0。
* 由于undefined不是数字，计算公式会变得异常。
* 通过本功能预先设置正常数值，可以用最少的事件数进行战斗测试。
*
* [更新履歴]
* 2025/08/07：Ver.1.0.0　公開。
*
* @param optimization
* @text 效率化
* @desc 如果新代入的变量和开关的值与当前值相同，则不会刷新地图。
* @type boolean
* @default true
*
* @param noRefreshVariables
* @text 不刷新变量
* @desc 指定不刷新地图的变量。
* 范围/多重指定使用逗号、连字符或to（例：1-3,12,15,18to20）
* @type variable[]
*
* @param noRefreshSwitches
* @text 不刷新开关
* @desc 指定不刷新地图的开关。
* 范围/多重指定使用逗号、连字符或to（例：1-3,12,15,18to20）
* @type switch[]
*
* @param initialVariables
* @text 变量的初始值
* @desc 设置变量的初始值。
* @type struct<variables>[]
*
* @param initialSwitches
* @text 开关的初始值
* @desc 设置开关的初始值。
* @type struct<switches>[]
*
*/

/*:en
* @target MZ
* @plugindesc Improve variable and switch functionality.
* @author あわやまたな (Awaya_Matana)
* @url https://awaya3ji.seesaa.net/article/517527057.html
* @help Ver.1.0.0
* "Optimization" and "No-Refresh Variables" are primarily intended
* to reduce the load on parallel processing.
*
* Whenever a value is assigned using an event command or the setValue function,
* the map will be refreshed and all conditions will be re-verified.
* When used in conjunction with parallel processing this is done every frame,
* which is inefficient.
*
* Optimization:
* Reduce the refresh frequency.
* If the current and new values are the same, do not refresh the map.
*
* For example, if you created a parallel processing event that constantly
* retrieves a region ID, previously it would be refreshed even if the retrieved
* region ID did not change, but by using this function it will no longer
* be refreshed unless the region ID changes.
* I think it is also suitable for managing character XY coordinates.
*
* No-Refresh Variables:
* Not refreshing at all.
* This is ideal for variables that are not used for conditions at all,
* but are used only for conditional branching or numerical calculations.
*
* Initial Variables:
* You can manage the initial values all at once.
* This is usually done at events, but if you absolutely need it, go ahead.
*
* This is also useful when performing a battle test when using v[n]
* in the damage calculation formula.
* The value function corrects the initial value of undefined to 0
* before returning it, but v[n] returns the contents of the variable directly,
* so undefined will not be corrected to 0.
* Since undefined is not a number, the calculation formula will be incorrect.
* By using this function to enter correct values beforehand,
* you can perform a battle test with a minimum number of events.
*
* @param optimization
* @text Optimization
* @desc If the newly assigned value of a variable or switch is the same as the current value, the map will not be refreshed.
* @type boolean
* @default true
*
* @param noRefreshVariables
* @text No-Refresh Variables
* @desc Specifies variables to not refresh the map.
* For multiple entries, use ",", "-", or "to".
* @type variable[]
*
* @param noRefreshSwitches
* @text No-Refresh Switches
* @desc Specifies switches to not refresh the map.
* For multiple entries, use ",", "-", or "to".
* @type switch[]
*
* @param initialVariables
* @text Initial Variables
* @desc Set initial values of variables.
* @type struct<variables>[]
*
* @param initialSwitches
* @text Initial Switches
* @desc Set initial switches of variables.
* @type struct<switches>[]
*
*/


/*:ja
* @target MZ
* @plugindesc 変数、スイッチの機能を改善します。
* @author あわやまたな (Awaya_Matana)
* @url https://awaya3ji.seesaa.net/article/517527057.html
* @help 「効率化」や「リフレッシュなし変数」は
* おもに並列処理での負荷軽減を目的としています。
*
* イベントコマンドやsetValue関数で数値を代入すると必ずマップにリフレッシュ処理
* が入り、全ての出現条件が検証し直されます。
* 並列処理と併用すると毎フレームこれが行われ、非効率です。
*
* 効率化：
* リフレッシュする頻度を用途次第で大幅に減らせます。
* 現在の値と新しい値が同じ場合はマップをリフレッシュしません。
*
* 例えばリージョンIDを常時取得する並列処理イベントを作った場合、
* 従来は取得されるリージョンIDが変わらないのにリフレッシュされていましたが、
* 本機能を使う事でリージョンIDが変わらない限りリフレッシュされなくなります。
* キャラクターのXY座標管理にも向いていると思います。
*
* リフレッシュなし変数：
* 全くリフレッシュしません。
* 出現条件には一切使わず、条件分岐や数値の計算のみに用いる変数に最適です。
*
* 変数の初期値：
* 初期値を一括で管理できます。
* 普通はイベントで行うと思いますが、どうしても必要という方はどうぞ。
*
* ダメージ計算式にv[n]を使っている状態で戦闘テストをする時にも役立ちます。
* value関数では初期値のundefinedを0に修正して返すようになっていますが、
* v[n]は変数の内容を直接返す為、undefinedが0に修正されません。
* undefinedは数字ではないので計算式がおかしくなります。
* 本機能であらかじめ正常な数値を入れておくことで最低限のイベント数で戦闘テスト
* が出来ます。
*
* [更新履歴]
* 2025/08/07：Ver.1.0.0　公開。
*
* @param optimization
* @text 効率化
* @desc 新しく代入した変数およびスイッチの値が現在の値と同じ場合はマップのリフレッシュをしません。
* @type boolean
* @default true
*
* @param noRefreshVariables
* @text リフレッシュなし変数
* @desc マップをリフレッシュしない変数を指定します。
* 範囲・複数指定はコンマやハイフン、to(例：1-3,12,15,18to20)
* @type variable[]
*
* @param noRefreshSwitches
* @text リフレッシュなしスイッチ
* @desc マップをリフレッシュしないスイッチを指定します。
* 範囲・複数指定はコンマやハイフン、to(例：1-3,12,15,18to20)
* @type switch[]
*
* @param initialVariables
* @text 変数の初期値
* @desc 変数の初期値を設定します。
* @type struct<variables>[]
*
* @param initialSwitches
* @text スイッチの初期値
* @desc スイッチの初期値を設定します。
* @type struct<switches>[]
*
*/
/*~struct~variables:zh
*
* @param id
* @text 变量ID
* @desc 指定变量。
* 范围/多重指定使用逗号、连字符或to（例：1-3,12,15,18to20）
* @type variable
*
* @param value
* @text 值
* @type number
* @min -999999999
* @default 0
*
* @param script
* @text 脚本
* @desc 作为脚本代入。
*
*/


/*~struct~variables:en
*
* @param id
* @text Variable ID
* @desc Specify the variable(s).
* For multiple entries, use ",", "-", or "to".
* @type variable
*
* @param value
* @text Value
* @type number
* @min -999999999
* @default 0
*
* @param script
* @text Script
* @desc Assign it as a script.
*
*/


/*~struct~variables:ja
*
* @param id
* @text 変数ID
* @desc 変数を指定します。
* 範囲・複数指定はコンマやハイフン、to(例：1-3,12,15,18to20)
* @type variable
*
* @param value
* @text 値
* @type number
* @min -999999999
* @default 0
*
* @param script
* @text 脚本
* @desc 作为脚本代入。
*
*/

/*~struct~switches:zh
*
* @param id
* @text 开关ID
* @desc 指定开关。
* 范围/多重指定使用逗号、连字符或to（例：1-3,12,15,18to20）
* @type switch
*
* @param value
* @text 値
* @type boolean
* @default false
*
* @param script
* @text 脚本
* @desc 作为脚本代入。
*
*/

/*~struct~switches:en
*
* @param id
* @text Switch ID
* @desc Specifies the switch(es).
* For multiple entries, use ",", "-", or "to".
* @type switch
*
* @param value
* @text Value
* @type boolean
* @default false
*
* @param script
* @text Script
* @desc Assign it as a script.
*
*/


/*~struct~switches:ja
*
* @param id
* @text スイッチID
* @desc スイッチを指定します。
* 範囲・複数指定はコンマやハイフン、to(例：1-3,12,15,18to20)
* @type switch
*
* @param value
* @text 値
* @type boolean
* @default false
*
* @param script
* @text スクリプト
* @desc スクリプトとして代入します。
*
*/


'use strict';
{


	const pluginName = document.currentScript.src.match(/^.*\/(.*).js$/)[1];
	const parameters = PluginManager.parameters(pluginName);
	const optimization = parameters.optimization === "true";
	const noRefreshVariables = noRefreshIds(parameters.noRefreshVariables);
	const noRefreshSwitches = noRefreshIds(parameters.noRefreshSwitches);
	const initialVariables = intialValues(parameters.initialVariables);
	const initialSwitches = intialValues(parameters.initialSwitches, true);


	function intialValues(str, isBool) {
		const array = JSON.parse(str || "[]").map(str => {
			const obj = JSON.parse(str || "[]");
			const ids = extractIds(obj.id);
			if (obj.script) {
				return { "ids": ids, "script": obj.script };
			} else {
				return { "ids": ids, "value": isBool ? obj.value === "true" : Number(obj.value) };
			}
		});
		return array.length ? array : null;
	}


	function noRefreshIds(str) {
		const array = JSON.parse(str || "[]").map(extractIds);
		const nrIds = [];
		for (const ids of array) {
			for (const id of ids) {
				nrIds[id] = true;
			}
		}
		return nrIds;
	}


	function extractIds(str) {
		const ids = [];
		String(str).split(",").forEach(id => {
			if (!isNaN(id)) {
				ids.push(Number(id));
				return;
			}
			const range = id.replace(/to/gi,"-").split("-").map(Number);
			if (isNaN(range[1])) {
				range[1] = range[0];
			}
			if (range[0] > range[1]) {
				for (let i = range[0]; i >= range[1]; i--) {
					ids.push(i)
				}
			} else {
				for (let i = range[0]; i <= range[1]; i++) {
					ids.push(i);
				}
			}
		});
		return ids;
	}


	//-----------------------------------------------------------------------------
	// Game_Variables


	if (initialVariables) {
		Game_Variables.prototype.setInitialValues = function() {
			for (const data of initialVariables) {
				for (const id of data.ids) {
					const value = data.script ? eval(data.script) : data.value;
					this.setValue(id, value);
				}
			}
		};


		const _DataManager_createGameObjects = DataManager.createGameObjects;
		DataManager.createGameObjects = function() {
			_DataManager_createGameObjects.call(this);
			$gameVariables.setInitialValues();
		};
	}


	if (noRefreshVariables.length || optimization) {
		let needsRefresh = true;
		const _Game_Variables_setValue = Game_Variables.prototype.setValue;
		Game_Variables.prototype.setValue = function(variableId, value) {
			const lastValue = this.value(variableId);
			needsRefresh = false;
			_Game_Variables_setValue.apply(this, arguments);
			needsRefresh = true;
			if (this.isRefreshNeeded(variableId, lastValue)) {
				this.onChange();
			}
		};


		const _Game_Variables_onChange = Game_Variables.prototype.onChange;
		Game_Variables.prototype.onChange = function() {
			if (needsRefresh) _Game_Variables_onChange.call(this);
		};


		Game_Variables.prototype.isRefreshNeeded = function(variableId, lastValue) {
			return !noRefreshVariables[variableId] && this.value(variableId) !== lastValue;
		};


		if (!optimization) {
			Game_Variables.prototype.isRefreshNeeded = function(variableId, lastValue) {
				return !noRefreshVariables[variableId];
			};
		}
	}


	//-----------------------------------------------------------------------------
	// Game_Switches


	if (initialSwitches) {
		Game_Switches.prototype.setInitialValues = function() {
			for (const data of initialSwitches) {
				for (const id of data.ids) {
					const value = data.script ? !!eval(data.script) : data.value;
					this.setValue(id, value);
				}
			}
		};


		const _DataManager_createGameObjects = DataManager.createGameObjects;
		DataManager.createGameObjects = function() {
			_DataManager_createGameObjects.call(this);
			$gameSwitches.setInitialValues();
		};
	}


	if (noRefreshSwitches.length || optimization) {
		let needsRefresh = true;
		const _Game_Switches_setValue = Game_Switches.prototype.setValue;
		Game_Switches.prototype.setValue = function(switchId, value) {
			const lastValue = this.value(switchId);
			needsRefresh = false;
			_Game_Switches_setValue.apply(this, arguments);
			needsRefresh = true;
			if (this.isRefreshNeeded(switchId, lastValue)) {
				this.onChange();
			}
		};


		const _Game_Switches_onChange = Game_Switches.prototype.onChange;
		Game_Switches.prototype.onChange = function() {
			if (needsRefresh) _Game_Switches_onChange.call(this);
		};


		Game_Switches.prototype.isRefreshNeeded = function(switchId, lastValue) {
			return !noRefreshSwitches[switchId] && this.value(switchId) !== lastValue;
		};


		if (!optimization) {
			Game_Switches.prototype.isRefreshNeeded = function(switchId, lastValue) {
				return !noRefreshSwitches[switchId];
			};
		}
	}


	//-----------------------------------------------------------------------------
	// Game_SelfSwitches


	if (optimization) {
		let needsRefresh = true;
		const _Game_SelfSwitches_setValue = Game_SelfSwitches.prototype.setValue;
		Game_SelfSwitches.prototype.setValue = function(key, value) {
			const lastValue = this.value(key);
			needsRefresh = false;
			_Game_SelfSwitches_setValue.apply(this, arguments);
			needsRefresh = true;
			if (this.isRefreshNeeded(key, lastValue)) {
				this.onChange();
			}
		};


		const _Game_SelfSwitches_onChange = Game_SelfSwitches.prototype.onChange;
		Game_SelfSwitches.prototype.onChange = function() {
			if (needsRefresh) _Game_SelfSwitches_onChange.call(this);
		};


		Game_SelfSwitches.prototype.isRefreshNeeded = function(key, lastValue) {
			return this.value(key) !== lastValue;
		};
	}
}