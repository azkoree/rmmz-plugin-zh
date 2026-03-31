//=============================================================================
// Bluemoon Plugins - MZ - "RING" from Menu Collection for RPG MAKER MZ
// Blue_MenuRing.js   VERSION 1.0.1
//=============================================================================

var Imported = Imported || {};
Imported.Blue_MenuRing = true;

var Bluemoon = Bluemoon || {};
Bluemoon.MenuRing = Bluemoon.MenuRing || {};

//=============================================================================
 /*:zh
 * @target MZ
 * @URL 
 * @plugindesc v1.0.1 "RING" - #3 Release for Menu Collection
 * @author Bluemoon || Nebula Games
 * @help
 * CHANGELOG:
 * VERSION 1.0.0: Plugin Released!
 * VERSION 1.0.1: Small bug fix related to help window.
 *
 * @param 菜单速度
 * @desc 菜单动画的速度
 * @decimals 1
 * @default 0.2
 * 
 * @param 打开半径
 * @desc 菜单打开时的默认半径值
 * @type number
 * @default 100
 * 
 * @param 关闭半径
 * @desc 菜单关闭时的默认半径值
 * @type number
 * @default 240
 * 
 * @param 命令缩放倍数
 * @desc 当前索引命令的默认缩放倍数
 * @type number
 * @decimals 1
 * @default 1.2
 * 
 * @param 帮助窗口描述
 * @desc 帮助窗口描述的数组
 * @type struct<HelpWindowDescription>[]
 * @default ["{\"Symbol Name\":\"item\",\"Description\":\"%1 - The pocket containing all your items.\"}","{\"Symbol Name\":\"skill\",\"Description\":\"%1 - Edit your party skills and abilities.\"}","{\"Symbol Name\":\"equip\",\"Description\":\"%1 - Edit party's equipment.\"}","{\"Symbol Name\":\"status\",\"Description\":\"%1 - Check party's members status.\"}","{\"Symbol Name\":\"formation\",\"Description\":\"%1 - Edit party's formation.\"}","{\"Symbol Name\":\"options\",\"Description\":\"%1 - Change game options.\"}","{\"Symbol Name\":\"save\",\"Description\":\"%1 - Save the game.\"}","{\"Symbol Name\":\"gameEnd\",\"Description\":\"%1 - Exit game or go back to titlescreen.\"}"]
 * 
 * @param 角色帮助窗口字符串格式
 * @desc 选中角色时帮助窗口的字符串格式。%1 -> 角色名称；%2 -> 角色描述
 * @type text
 * @default %1 - %2
 * 
 * @param 环形菜单图标
 * @desc 环形菜单的图标。它们按照命令顺序分配。
 * @type struct<CommandIcon>[]
 * @default ["{\"Symbol Name\":\"item\",\"IconIndex\":\"208\"}","{\"Symbol Name\":\"skill\",\"IconIndex\":\"76\"}","{\"Symbol Name\":\"equip\",\"IconIndex\":\"132\"}","{\"Symbol Name\":\"status\",\"IconIndex\":\"222\"}","{\"Symbol Name\":\"formation\",\"IconIndex\":\"75\"}","{\"Symbol Name\":\"options\",\"IconIndex\":\"242\"}","{\"Symbol Name\":\"save\",\"IconIndex\":\"186\"}","{\"Symbol Name\":\"gameEnd\",\"IconIndex\":\"16\"}"]
 * 
 * @param 自定义命令符号（Symbol）
 * @desc [高级] 您可以添加 Rpg Maker 中默认不可用的命令符号
 * @type note
 * @default "if(symbol === \"mysymbol\") {\n//my code...\n}"
 * 
 * @param 自定义个人命令符号（Symbol）
 * @desc [高级] 您可以添加 Rpg Maker 中默认不可用的个人命令符号
 * @type note
 * @default "if(symbol === \"mysymbol\") {\n//my code...\n}"
 */
 /*~struct~HelpWindowDescription:zh
 * @param 符号名称
 * @desc 要分配描述的符号。
 * @type text
 * @default 
 * 
 * @param 描述
 * @desc 应该在帮助窗口中显示的命令描述。
 * @type text
 * @default
 */
 /*~struct~CommandIcon:zh
 * @param 关键字名称
 * @desc 要分配图标的符号。
 * @type text
 * @default 
 * 
 * @param 图标索引
 * @desc 应该在帮助窗口中显示的命令描述。
 * @type number
 * @min 0
 * @default 16
 */
/*:
 * @target MZ
 * @URL 
 * @plugindesc v1.0.1 "RING" - #3 Release for Menu Collection
 * @author Bluemoon || Nebula Games
 * @help
 * CHANGELOG:
 * VERSION 1.0.0: Plugin Released!
 * VERSION 1.0.1: Small bug fix related to help window.
 *
 * @param Menu Speed
 * @desc The speed of menu animations
 * @decimals 1
 * @default 0.2
 * 
 * @param Open Radius
 * @desc The default value of the radius when the menu is opened
 * @type number
 * @default 100
 * 
 * @param Closed Radius
 * @desc The default value of the radius when the menu is closed
 * @type number
 * @default 240
 * 
 * @param Command Scale Factor
 * @desc The default scale factor of the current index command
 * @type number
 * @decimals 1
 * @default 1.2
 * 
 * @param Help Window Descriptions
 * @desc The array of help window descriptions
 * @type struct<HelpWindowDescription>[]
 * @default ["{\"Symbol Name\":\"item\",\"Description\":\"%1 - The pocket containing all your items.\"}","{\"Symbol Name\":\"skill\",\"Description\":\"%1 - Edit your party skills and abilities.\"}","{\"Symbol Name\":\"equip\",\"Description\":\"%1 - Edit party's equipment.\"}","{\"Symbol Name\":\"status\",\"Description\":\"%1 - Check party's members status.\"}","{\"Symbol Name\":\"formation\",\"Description\":\"%1 - Edit party's formation.\"}","{\"Symbol Name\":\"options\",\"Description\":\"%1 - Change game options.\"}","{\"Symbol Name\":\"save\",\"Description\":\"%1 - Save the game.\"}","{\"Symbol Name\":\"gameEnd\",\"Description\":\"%1 - Exit game or go back to titlescreen.\"}"]
 * 
 * @param Actor Help Window String Format
 * @desc The help window string format when an actor is selected. %1 -> Actor name; %2 -> Actor Description
 * @type text
 * @default %1 - %2
 * 
 * @param Ring Menu Icons
 * @desc This is the icons of the ring menu. They're assigned in relation to the command order.
 * @type struct<CommandIcon>[]
 * @default ["{\"Symbol Name\":\"item\",\"IconIndex\":\"208\"}","{\"Symbol Name\":\"skill\",\"IconIndex\":\"76\"}","{\"Symbol Name\":\"equip\",\"IconIndex\":\"132\"}","{\"Symbol Name\":\"status\",\"IconIndex\":\"222\"}","{\"Symbol Name\":\"formation\",\"IconIndex\":\"75\"}","{\"Symbol Name\":\"options\",\"IconIndex\":\"242\"}","{\"Symbol Name\":\"save\",\"IconIndex\":\"186\"}","{\"Symbol Name\":\"gameEnd\",\"IconIndex\":\"16\"}"]
 * 
 * @param Custom Commands Symbols
 * @desc [ADVANCED] You can add symbols of commands that are not available by default in Rpg Maker
 * @type note
 * @default "if(symbol === \"mysymbol\") {\n//my code...\n}"
 * 
 * @param Custom Personal Commands Symbols
 * @desc [ADVANCED] You can add symbols of personal commands that are not available by default in Rpg Maker
 * @type note
 * @default "if(symbol === \"mysymbol\") {\n//my code...\n}"
 */
 /*~struct~HelpWindowDescription:
 * @param Symbol Name
 * @desc The symbol to which you want to assign a description.
 * @type text
 * @default
 * 
 * @param Description
 * @desc The description for the command that should appear in the help window.
 * @type text
 * @default
 */
 /*~struct~CommandIcon:
 * @param Symbol Name
 * @desc The symbol to which you want to assign an icon.
 * @type text
 * @default
 * 
 * @param IconIndex
 * @desc The description for the command that should appear in the help window.
 * @type number
 * @min 0
 * @default 16
 */
 //=============================================================================

(function($) {

	const Parameters = PluginManager.parameters("Blue_MenuRing");
	const _menu_speed = parseFloat(Parameters["Menu Speed"])
	const _open_radius = parseInt(Parameters["Open Radius"])
	const _closed_radius = parseInt(Parameters["Closed Radius"])
	const _command_scale_factor = parseFloat(Parameters["Command Scale Factor"])
	const _help_window_description = {}

	for(let comm of JSON.parse(Parameters["Help Window Descriptions"])) {
		const parsed_comm = JSON.parse(comm)
		_help_window_description[parsed_comm["Symbol Name"]] = parsed_comm["Description"]
	}
	
	const _actor_help_window_string_format = String(Parameters["Actor Help Window String Format"])
	const _ring_menu_icons = {}

	for(let comm of JSON.parse(Parameters["Ring Menu Icons"])) {
		const parsed_comm = JSON.parse(comm)
		_ring_menu_icons[parsed_comm["Symbol Name"]] = parseInt(parsed_comm["IconIndex"])
	}

	const _custom_process_command = JSON.parse(Parameters["Custom Commands Symbols"])
	const _custom_process_personal_command = JSON.parse(Parameters["Custom Personal Commands Symbols"])

	//###############################################################################
	//
	// SCENE MAP
	//
	//###############################################################################

	Scene_Map = class extends Scene_Map {

		createDisplayObjects() {
			super.createDisplayObjects();
			this._ringMenu = new Ring_Menu();
			this.addChild(this._ringMenu)
			this._ringMenu.createHelpWindow()
		}
		
		callMenu() {
			if(typeof $gameTemp._ringMenuOpened === "undefined") {
				SoundManager.playOk();
			}
			$gameTemp.clearDestination()
			this._mapNameWindow.hide();
			//this._waitCount = 2;
			// TODO PROCESS RING MENU
			this.callRingMenu()
			this.menuCalling = false
			this._isMenuOpened = 1
		}

		callRingMenu() {
			// Setting Player direction always down
			$gamePlayer.setDirection(2)
			this._ringMenu.call($gamePlayer.screenX(), $gamePlayer.screenY())
		}

		isRingMenuOpened() {return !!this._isMenuOpened}

		updateCallMenu() {
			if(!!this._ringMenu.isCommandPersonal()) {return;}
			if(!!this.isRingMenuOpened()) {
				if(this.isMenuCalled()) {
					SoundManager.playOk();
					this._ringMenu.dispose()
					this._isMenuOpened = undefined
					this.menuCalling = false
				}
			}
			else {
				if(typeof $gameTemp._ringMenuOpened !== "undefined") {
					this.callMenu()
					$gameTemp._ringMenuOpened = undefined
				}
				return super.updateCallMenu();
			}
		}
	}

	//###############################################################################
	//
	// GAME MAP
	//
	//###############################################################################

	const _old_Game_Map_isEventRunning = Game_Map.prototype.isEventRunning;
	Game_Map.prototype.isEventRunning = function() {
		return _old_Game_Map_isEventRunning.call(this) || SceneManager._scene.isRingMenuOpened()
	}

	//###############################################################################
	//
	// RING MENU
	//
	//###############################################################################

	class Ring_Menu extends Sprite {

		static OPEN_RADIUS = _open_radius
		static CLOSE_RADIUS = _closed_radius

		static MENU_OPENING = 0x00
		static MENU_WAITING = 0x01
		static MENU_CLOSING = 0x02
		static MENU_COMMAND_PERSONAL = 0x04

		static DELTA_DIFF = 0.01

		lerp(start, end, amt) {
			amt *= SceneManager._smoothDeltaTime 
			return (1-amt)*start+amt*end
		}

		isCommandPersonal() {
			return this._phase === Ring_Menu.MENU_COMMAND_PERSONAL
		}

		initialize(x,y) {
			super.initialize();
			this._center = new PIXI.Point(0,0)
			this._radius = Ring_Menu.CLOSE_RADIUS;
			this._globalAlpha = 0
			this._index = -1;
			this._destinationIndex = this.startIndex()
			this._actorIndex = -1
			this._angleDistance = 0
			this._phase = -1
			this._symbols = []
			this._names = {}
			this.visible = false
			this.clearBlendData()
			this.createMenuCommands();
			this.createPartyStatus()
		}

		clearBlendData() {
			this._blendingAmount = 100
			this._blendingSubract = 4
		}

		placeGauge(actor, type, x, y) {
			const key = "actor%1-gauge-%2".format(actor.actorId(), type);
			const sprite = new Sprite_Gauge()
			sprite.setup(actor, type);
			sprite.move(x, y);
			sprite.show();
			return sprite
		}

		createPartyStatus() {
			this._partyStatus = new Sprite();
			this._partyStatus.visible = false
			const space_x = (Graphics.width / $gameParty.maxBattleMembers())
			const space_y = Math.floor(Graphics.height / 1.1)
			for(let i = 0; i < $gameParty.battleMembers().length; i++) {
				const member = $gameParty.battleMembers()[i]
				const hp_gauge = this.placeGauge(member, "hp", (space_x * i) + Math.floor(Graphics.width / 20), space_y)
				const mp_gauge = this.placeGauge(member, "mp", hp_gauge.x, hp_gauge.y + hp_gauge.height)
				this._partyStatus.addChild(hp_gauge)
				this._partyStatus.addChild(mp_gauge)
				const ch_sprite = new Sprite();
				this._partyStatus.addChild(ch_sprite)
				let bit = ImageManager.loadCharacter(member.characterName())
				bit.addLoadListener(() => {
					ch_sprite.bitmap = bit; 
					const big = ImageManager.isBigCharacter(member.characterName());
					const characterIndex = member.characterIndex()
					const pw = bit.width / (big ? 3 : 12);
					const ph = bit.height / (big ? 4 : 8);
					const n = big ? 0: characterIndex;
					const sx = ((n % 4) * 3 + 1) * pw;
					const sy = Math.floor(n / 4) * 4 * ph;
					const half_ph = Math.floor(ph / 1.5)
					ch_sprite.setFrame(sx,sy,pw,half_ph)
					ch_sprite.position.set((hp_gauge.x - pw) + pw/8, space_y + half_ph/4)

				})
			}
		}

		switchBlendingConst() {
			return this._blendingSubract *= -1
		}

		createHelpWindow() {
			const rect = new Rectangle(0,0,Graphics.width, Window_Base.prototype.lineHeight.call(this) * 2)
			this._helpWindow = new Window_Help(rect);
			this._helpWindow.y = -this._helpWindow.height
			this._helpWindow.hide()
			this.parent.addChild(this._helpWindow)
			this.parent.addChild(this._partyStatus)
			this.refreshHelpWindow(this._destinationIndex)
		}

		updateCenter(x,y) {
			return this._center.set(x,y)
		}

		calculateAngleDistance() {
			return (Math.PI * 2) / this.children.length
		}

		calculateCommandAngle(index) {
			return (this._angleDistance * index)
		}

		createMenuCommands() {
			this._referenceWindow = new Window_MenuCommand(new PIXI.Rectangle(0,0,1,1));
			this._referenceWindow.refresh();
			for(let i = 0; i < this._referenceWindow._list.length; i++) {
				const comm = this._referenceWindow._list[i]
				this._symbols.push(comm.symbol)
				this._names[comm.symbol] = comm.name
				let sp = new Sprite();
				sp.alpha = this._globalAlpha
				let iconset = ImageManager.loadSystem("iconset");
				iconset.addLoadListener(() => {
					sp.bitmap = iconset;
					sp.anchor.set(0.5)
					const iconIndex = !!_ring_menu_icons[comm.symbol] ? _ring_menu_icons[comm.symbol] : 16;
					const pw = ImageManager.iconWidth;
					const ph = ImageManager.iconHeight;
					const sx = (iconIndex % 16) * pw;
					const sy = Math.floor(iconIndex / 16) * ph;
					sp.setFrame(sx,sy,pw,ph)
				})
				this.addChild(sp)
			}
			this._angleDistance = this.calculateAngleDistance()
		}

		refreshHelpWindow(index, isOpening = false) {
			if(this._phase === Ring_Menu.MENU_COMMAND_PERSONAL) {
				const actor = $gameParty.battleMembers()[index]
				this._helpWindow.setText(_actor_help_window_string_format.format(actor.name(), actor.profile()))
			}
			else {
				const symbol = !isOpening ? this.getSymbol() : this._symbols[0]
				let help = !!_help_window_description[symbol] ? _help_window_description[symbol] : "%1"
				this._helpWindow.setText(help.format(this._names[symbol]))
			}
			
		}

		actor() {
			return $gameParty.battleMembers()[this._actorIndex]
		}

		call(x,y) {
			this.updateCenter(x,y)
			this._helpWindow.show()
			this._index = this.children.length - 1
			this.visible = true
			this._phase = Ring_Menu.MENU_OPENING
			this._partyStatus.visible = true;
			this._requestHelpRefresh = true
		}

		dispose() {
			this._phase = Ring_Menu.MENU_CLOSING
			this._index = -1
			this._destinationIndex = 0;
			this._partyStatus.visible = false;
		}

		startIndex() {
			if(typeof $gameTemp._ringMenuOpened !== "undefined") {return $gameTemp._ringMenuOpened}
			return 0
		}

		updatePhase() {
			switch(this._phase) {
				case Ring_Menu.MENU_OPENING:
					
					if(this._radius > Ring_Menu.OPEN_RADIUS) {
						const new_radius = this.lerp(this._radius, Ring_Menu.OPEN_RADIUS, _menu_speed)
						const new_alpha = this.lerp(this._globalAlpha, 1, _menu_speed)
						const new_index = this.lerp(this._index, this._destinationIndex, _menu_speed)
						const help_y = this.lerp(this._helpWindow.y, 0, _menu_speed)
						this._radius = new_radius
						this._globalAlpha = new_alpha
						this._index = new_index
						this._helpWindow.y = help_y
						const cond = (Math.abs(this._radius - Ring_Menu.OPEN_RADIUS) < Ring_Menu.DELTA_DIFF && 
						Math.abs(this._globalAlpha - 1) < Ring_Menu.DELTA_DIFF &&
						Math.abs(this._index - this._destinationIndex) < Ring_Menu.DELTA_DIFF &&
						Math.abs(this._helpWindow.y - 0) < Ring_Menu.DELTA_DIFF)
						if(!!cond) {
							this._index = this._destinationIndex
							this._globalAlpha = 1
							this._radius = Ring_Menu.OPEN_RADIUS
							this._phase = Ring_Menu.MENU_WAITING
							this._helpWindow.y = 0;
						}
						if(!!this._helpWindow && this._requestHelpRefresh) {
							this.refreshHelpWindow(this._destinationIndex, true)
							this._requestHelpRefresh = undefined
						}
					}
					break;
				case Ring_Menu.MENU_WAITING:
					if(Input.isTriggered("right") || Input.isTriggered("down")) {
						SoundManager.playCursor()
						this._index = (this._index + 1) % this.children.length 
						this.refreshHelpWindow(this._index)
					}
					else if(Input.isTriggered("left") || Input.isTriggered("up")) {
						SoundManager.playCursor()
						this._index = this._index - 1 < 0 ? this.children.length - 1 : this._index - 1
						this.refreshHelpWindow(this._index)
					}
					else if(Input.isTriggered("ok")) {
						SoundManager.playOk()
						this.processSymbol()
					}
					break;
				case Ring_Menu.MENU_COMMAND_PERSONAL:
					this.updateBlendAnimation()
					if(Input.isTriggered("right") || Input.isTriggered("down")) {
						SoundManager.playCursor()
						this.clearSpriteBlending()
						this._actorIndex = this._actorIndex - 1 < 0 ? $gameParty.battleMembers().length - 1 : this._actorIndex - 1
						this.refreshHelpWindow(this._actorIndex)
					}
					else if(Input.isTriggered("left") || Input.isTriggered("up")) {
						SoundManager.playCursor()
						this.clearSpriteBlending()
						this._actorIndex = (this._actorIndex + 1) % $gameParty.battleMembers().length
						this.refreshHelpWindow(this._actorIndex)
					}
					else if(Input.isTriggered("ok")) {
						SoundManager.playOk()
						this.clearSpriteBlending()
						this.onPersonalOk()
					}
					else if(Input.isTriggered("cancel")) {
						Input.clear()
						SoundManager.playCancel();
						this.onPersonalCancel()
					}
					break;
				case Ring_Menu.MENU_CLOSING:
					if(this._radius < Ring_Menu.CLOSE_RADIUS) {
						const new_radius = this.lerp(this._radius, Ring_Menu.CLOSE_RADIUS, _menu_speed)
						const new_alpha = this.lerp(this._globalAlpha, 0, _menu_speed)
						const new_index = this.lerp(this._index, this.children.length - 1, _menu_speed)
						const help_y = this.lerp(this._helpWindow.y, -this._helpWindow.height, _menu_speed)
						this._radius = new_radius
						this._globalAlpha = new_alpha
						this._index = new_index
						this._helpWindow.y = help_y
						const cond = (Math.abs(this._radius - Ring_Menu.CLOSE_RADIUS) < Ring_Menu.DELTA_DIFF && 
						Math.abs(this._globalAlpha - 0) < Ring_Menu.DELTA_DIFF &&
						Math.abs(this._index - (this.children.length - 1)) < Ring_Menu.DELTA_DIFF &&
						Math.abs(this._helpWindow.y  + this._helpWindow.height) < Ring_Menu.DELTA_DIFF)
						if(!!cond) {
							this._radius = Ring_Menu.CLOSE_RADIUS
							this._globalAlpha = 0
							this._phase = -1
							this._index = -1
							this.visible = false
						} 
					}
					break;
			}
		}

		getSymbol() {
			return this._symbols[this._index]
		}

		processSymbol() {
			$gameTemp._ringMenuOpened = this._index
			const symbol = this.getSymbol();
			switch(symbol) {

				// Processing default symbols
				case "item":
					Scene_Menu.prototype.commandItem.call(this);
					break
				case "skill":
				case "equip":
				case "status":
				case "formation":
					this.commandPersonal();
					break
				case "options":
					Scene_Menu.prototype.commandOptions.call(this);
					break
				case "save":
					Scene_Menu.prototype.commandSave.call(this);
					break;
				case "gameEnd":
					Scene_Menu.prototype.commandGameEnd.call(this);
					break;	
				default:
					eval(_custom_process_command)
					break;
			}
		}

		commandPersonal() {
			$gameTemp._ringMenuOpened = undefined
			this._phase = Ring_Menu.MENU_COMMAND_PERSONAL
			this._actorIndex = 0;
			this._globalAlpha = 0.2
			if(this.getSymbol() === "formation") {
				this._pendingIndex = -1
			}
			// Create Sprite Array 
			this._actorSprites = SceneManager._scene._spriteset._characterSprites.filter(spr => {
				return spr._character === $gamePlayer || $gamePlayer.followers().visibleFollowers().contains(spr._character);
			})
			this._actorSprites.reverse()
		}

		clearSpriteBlending() {
			this.clearBlendData()
			for(let sprite of this._actorSprites) {
				sprite.setBlendColor([0,0,0,0])
			}
		}

		updateBlendAnimation() {
			if(Graphics.frameCount % 3 === 0) {
				const sprite = this._actorSprites[this._actorIndex]
				this._blendingAmount = (this._blendingAmount - this._blendingSubract).clamp(0,100)
				sprite.setBlendColor([255,255,255,this._blendingAmount])
				if(!!this._pendingIndex) {
					if(this._pendingIndex >= 0) {
						this._actorSprites[this._pendingIndex].setBlendColor([255,255,255,this._blendingAmount])
					}
				}
				if([0,100].contains(this._blendingAmount)) {
					this.switchBlendingConst()
				}
			}
		}

		onPersonalCancel() {
			if(!!this._pendingIndex) {
				if(this._pendingIndex >= 0) {
					this.clearSpriteBlending()
					this._pendingIndex = -1
					return;
				}
			}
			this._phase = Ring_Menu.MENU_WAITING
			this._actorIndex = -1;
			this._globalAlpha = 1
			this._pendingIndex = undefined
			this.clearSpriteBlending()
			this._actorSprites = undefined
			this.refreshHelpWindow(this._index)
		}
		
		onPersonalOk() {
			const symbol = this.getSymbol();
			if(symbol === "formation") {
				if(this._pendingIndex < 0) {
					this._pendingIndex = this._actorIndex			
				}
				else {
					$gameParty.swapOrder(this._actorIndex, this._pendingIndex);
					$gamePlayer.refresh()
					this._pendingIndex = -1
				}
				return;
			}
			$gameParty.setMenuActor(this.actor())
			$gameTemp._ringMenuOpened = this._index
			this.processPersonalSymbol()
		}

		processPersonalSymbol() {
			const symbol = this.getSymbol();
			switch(symbol) {
				case "skill":
					SceneManager.push(Scene_Skill);
					break;
				case "equip":
					SceneManager.push(Scene_Equip);
					break;
				case "status":
					SceneManager.push(Scene_Status);
					break;
				default:
					eval(_custom_process_personal_command)
					break;
			}
		}

		update() {
			super.update();
			if(!this.visible) {return}
			this.updatePhase()
			if(Graphics.frameCount % 2 !== 0) {return} // This way we lower the memory use;
			for(let i = 0; i < this.children.length; i++) {
				const child = this.children[i];
				const angle = this.calculateCommandAngle(i) - this.calculateCommandAngle(this._index + 2)
				child.alpha = this._globalAlpha
				child.position.set(Math.ceil(this._center.x + this._radius * Math.cos(angle)), Math.ceil(this._center.y + this._radius * Math.sin(angle)))
				if(this._phase === Ring_Menu.MENU_WAITING) {
					if(i === this._index && child.scale.x !== _command_scale_factor) {
						child.scale.set(_command_scale_factor)
					}
					else if(i !== this._index && child.scale.x !== 1) {child.scale.set(1)}
				}
				else {
					if(child.scale.x !== 1) {child.scale.set(1)}
				}
			}
		}
	}

})(Bluemoon.MenuRing);