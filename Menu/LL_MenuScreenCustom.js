//=============================================================================
// RPGツクールMZ - LL_MenuScreenCustom.js v1.4.4
//-----------------------------------------------------------------------------
// ルルの教会 (Lulu's Church)
// https://nine-yusha.com/
//
// URL below for license details.
// https://nine-yusha.com/plugin/
//=============================================================================
/*:zh
 * @target MZ
 * @plugindesc 自定义菜单界面的布局。
 * @author ルルの教会
 * @url https://nine-yusha.com/plugin-menuscreencustom/
 * @base LL_MenuScreenBase
 * @orderAfter LL_MenuScreenBase
 *
 * @help LL_MenuScreenCustom.js
 *
 * 自定义菜单界面的布局。
 * 可以用立绘代替脸图显示。
 * ※显示的立绘列表在 LL_MenuScreenBase 进行设定。
 *
 * 不知道怎么显示立绘：
 * 	什么也没显示时，请尝试将X、Y坐标设置为负数
 * 	确认扩大率是否设置的过小。
 * 	显示脸图时，不会联动立绘列表。
 * 	请确认已经正确地设定了立绘列表。
 * 
 * 帮助窗口：
 * 	帮助窗口的左上和右上、左下和右下可以显示任意信息。
 * 	显示的内容（数值）使用脚本进行设置。
 *
 * 没有插件命令。
 * 
 * 利用规约:
 *   ・无需注明版权信息。
 *   ・使用此素材无需提交任何报告。
 *   ・允许商业和非商业用途。
 *   ・在R18作品中使用此素材没有任何限制。
 *   ・您可以自由修改此素材以适应您的游戏。
 *   ・禁止将其作为插件素材（包括修改版本）重新分发。
 *
 * 作者: ルルの教会
 * 作成日: 2022/6/7
 *
 * @param menuSettings
 * @text 设定菜单界面
 * @desc ※不使用该项目
 *
 * @param leftInputMode
 * @text 菜单指令配置在左边
 * @desc 菜单指令配置在左边，触摸UI也会调整到左边。
 * 返回按钮在左上，翻页按钮在右上。
 * @default false
 * @type boolean
 * @parent menuSettings
 *
 * @param numVisibleRows
 * @text 角色行数
 * @desc 角色列表画面的行数。（推荐：1~2）
 * @default 2
 * @min 1
 * @max 10
 * @type number
 * @parent menuSettings
 *
 * @param maxCols
 * @text 角色列数
 * @desc 角色列表画面的列数。（推荐：1~2）
 * @default 2
 * @min 1
 * @max 10
 * @type number
 * @parent menuSettings
 *
 * @param currencyWindowPosition
 * @text 持有金钱的显示位置
 * @desc 在帮助窗口的右下显示自定义项目时，
 * 请设定为“在菜单下显示独立窗口”。
 * @default helpWindowRightBottom
 * @type select
 * @option 不显示
 * @value hidden
 * @option 显示在帮助窗口右下
 * @value helpWindowRightBottom
 * @option 在菜单下显示独立窗口
 * @value menuCommandBottom
 * @parent menuSettings
 *
 * @param backgroundImages
 * @text 设定背景图像
 * @desc 更改菜单界面的背景图
 * @default []
 * @type struct<backgroundImages>[]
 * @parent menuSettings
 *
 * @param layoutSettings
 * @text 设定显示位置
 * @desc ※不使用该项目
 *
 * @param actorNameLH
 * @text 角色名的显示位置
 * @desc 设置角色名字从上到下显示在第几行。
 * -1为不显示。（默认：0）
 * @default 0
 * @min -1
 * @max 100
 * @type number
 * @parent layoutSettings
 *
 * @param actorNameX
 * @text 角色名的显示位置(X)
 * @desc 调整角色名的显示位置X坐标。(默认: 0)
 * 正数右移，负数左移。
 * @default 0
 * @min -9999
 * @max 9999
 * @type number
 * @parent layoutSettings
 *
 * @param actorLevelLH
 * @text 等级的显示位置
 * @desc 设置等级从上到下显示在第几行。
 * -1为不显示。（默认：1）
 * @default 1
 * @min -1
 * @max 100
 * @type number
 * @parent layoutSettings
 *
 * @param actorLevelX
 * @text 等级的显示位置(X)
 * @desc 调整等级的显示位置X坐标。(默认: 0)
 * 正数右移，负数左移。
 * @default 0
 * @min -9999
 * @max 9999
 * @type number
 * @parent layoutSettings
 *
 * @param actorIconLH
 * @text 状态的显示位置
 * @desc 设置状态图标从上到下显示在第几行。
 * -1为不显示。（默认：2）
 * @default 2
 * @min -1
 * @max 100
 * @type number
 * @parent layoutSettings
 *
 * @param actorIconX
 * @text 状态的显示位置(X)
 * @desc 调整状态图标的显示位置X坐标。(默认: 0)
 * 正数右移，负数左移。
 * @default 0
 * @min -9999
 * @max 9999
 * @type number
 * @parent layoutSettings
 *
 * @param actorClassLH
 * @text 职业显示位置
 * @desc 设置职业从上到下显示在第几行。
 * -1为不显示。（默认：3）
 * @default 3
 * @min -1
 * @max 100
 * @type number
 * @parent layoutSettings
 *
 * @param actorClassX
 * @text 职业的显示位置(X)
 * @desc 调整职业的显示位置X坐标。(默认: 0)
 * 正数右移，负数左移。
 * @default 0
 * @min -9999
 * @max 9999
 * @type number
 * @parent layoutSettings
 *
 * @param actorGaugeLH
 * @text 计量条显示位置
 * @desc 设置HP・MP・TP条从上到下显示在第几行。
 * -1为不显示。（默认：4）
 * @default 4
 * @min -1
 * @max 100
 * @type number
 * @parent layoutSettings
 *
 * @param actorGaugeX
 * @text 计量条显示位置(X)
 * @desc 调整计量条的显示位置X坐标。(默认: 0)
 * 正数右移，负数左移。
 * @default 0
 * @min -9999
 * @max 9999
 * @type number
 * @parent layoutSettings
 *
 * @param lvPadding
 * @text Lv的间距调整值
 * @desc Lv标记的间距调整值。
 * 数值越小，间距越窄。 (默认: 84)
 * @default 84
 * @min 0
 * @max 2000
 * @type number
 * @parent layoutSettings
 *
 * @param gaugeWidth
 * @text 计量条长度
 * @desc 计量条长度。  (默认: 128)
 * 本设定仅适用于菜单界面。
 * @default 128
 * @min 0
 * @max 2000
 * @type number
 * @parent layoutSettings
 *
 * @param pictureSettings
 * @text 立绘显示设定
 * @desc ※不使用该项目
 *
 * @param showStandingPicture
 * @text 显示立绘
 * @desc 代替脸图显示立绘。
 * @default true
 * @type boolean
 * @parent pictureSettings
 *
 * @param menuWindowPictureX
 * @text X坐标原点
 * @desc 代替脸图显示的立绘的显示位置X
 * @default 0
 * @min -2000
 * @max 2000
 * @type number
 * @parent pictureSettings
 *
 * @param menuWindowPictureY
 * @text Y坐标原点
 * @desc 代替脸图显示的立绘的显示位置Y
 * @default 0
 * @min -2000
 * @max 2000
 * @type number
 * @parent pictureSettings
 *
 * @param menuWindowPictureScale
 * @text 扩大率
 * @desc 立绘的扩大率。 (默认: 100)
 * @default 100
 * @min -2000
 * @max 2000
 * @type number
 * @parent pictureSettings
 *
 * @param menuHelpSettings
 * @text 帮助窗口设定
 * @desc ※不使用该项目
 *
 * @param menuHelpWindowEnable
 * @text 显示帮助窗口
 * @desc 在菜单顶部显示帮助窗口。
 * @default true
 * @type boolean
 * @parent menuHelpSettings
 *
 * @param menuHelpTexts
 * @text 菜单说明文本
 * @desc 定义菜单说明文本。
 * @default ["{\"symbol\":\"アイテム\",\"helpText\":\"入手したアイテムを使用します。\"}","{\"symbol\":\"スキル\",\"helpText\":\"習得したスキルを使用します。\"}","{\"symbol\":\"装備\",\"helpText\":\"装備を変更します。\"}","{\"symbol\":\"ステータス\",\"helpText\":\"ステータスを確認します。\"}","{\"symbol\":\"並び替え\",\"helpText\":\"パーティの並び順を変更します。\"}","{\"symbol\":\"オプション\",\"helpText\":\"オプション画面を開きます。\"}","{\"symbol\":\"セーブ\",\"helpText\":\"セーブ画面を開きます。\"}","{\"symbol\":\"ゲーム終了\",\"helpText\":\"ゲームを終了します。\"}"]
 * @type struct<menuHelpTexts>[]
 * @parent menuHelpSettings
 *
 * @param leftBlockLabel
 * @text 左上项目名
 * @desc 左上显示的项目名。
 * 空白时为隐藏。
 * @default 当前地区：
 * @type string
 * @parent menuHelpSettings
 *
 * @param leftBlockValue
 * @text 左上值
 * @desc 用于显示左上值的脚本。
 * @default $gameMap.displayName()
 * @type combo
 * @option $gameVariables.value(1)   // 1号变量的值
 * @option $gameSwitches.value(1) ? "有効" : "無効"  // 1号开关的状态
 * @option $gameMap.displayName()  // 地图名
 * @option $gameParty.size()  // 队伍人数
 * @option $gameParty.steps()  // 当前步数
 * @option $gameParty.gold()  // 所持金钱
 * @option $gameParty.numItems($dataItems[1])  // 1号道具持有数
 * @option $gameParty.numItems($dataWeapons[1])  // 1号武器持有数
 * @option $gameParty.numItems($dataArmors[1])  // 1号防具持有数
 * @option $gameSystem.playtimeText()   // 游玩时间
 * @option $gameSystem.saveCount()  // 存档次数
 * @option $gameSystem.battleCount()  // 战斗次数
 * @parent menuHelpSettings
 *
 * @param leftBlockAlign
 * @text 左上文字对齐
 * @desc 左上文字的对齐方式
 * @default left
 * @type select
 * @option 居左
 * @value left
 * @option 居中
 * @value center
 * @option 居右
 * @value right
 * @parent menuHelpSettings
 *
 * @param rightBlockLabel
 * @text 右上项目名
 * @desc 左上显示的项目名。
 * 空白时为隐藏。
 * @default 游玩时间
 * @type string
 * @parent menuHelpSettings
 *
 * @param rightBlockValue
 * @text 右上值
 * @desc 用于显示右上值的脚本。
 * @default $gameSystem.playtimeText()
 * @type combo
 * @option $gameVariables.value(1)   // 1号变量的值
 * @option $gameSwitches.value(1) ? "有効" : "無効"  // 1号开关的状态
 * @option $gameMap.displayName()  // 地图名
 * @option $gameParty.size()  // 队伍人数
 * @option $gameParty.steps()  // 当前步数
 * @option $gameParty.gold()  // 所持金钱
 * @option $gameParty.numItems($dataItems[1])  // 1号道具持有数
 * @option $gameParty.numItems($dataWeapons[1])  // 1号武器持有数
 * @option $gameParty.numItems($dataArmors[1])  // 1号防具持有数
 * @option $gameSystem.playtimeText()   // 游玩时间
 * @option $gameSystem.saveCount()  // 存档次数
 * @option $gameSystem.battleCount()  // 战斗次数
 * @parent menuHelpSettings
 *
 * @param rightBlockAlign
 * @text 右上文字对齐
 * @desc 右上文字的对齐方式
 * @default right
 * @type select
 * @option 居左
 * @value left
 * @option 居中
 * @value center
 * @option 居右
 * @value right
 * @parent menuHelpSettings
 *
 * @param rightBottomBlockLabel
 * @text 右下项目名
 * @desc 右下显示的项目名。
 * ※所持金钱的显示位置为“帮助窗口的左下”时无效
 * @default
 * @type string
 * @parent menuHelpSettings
 *
 * @param rightBottomBlockValue
 * @text 右下值
 * @desc 用于显示右下值的脚本。
 * ※所持金钱的显示位置为“帮助窗口的左下”时无效
 * @default
 * @type combo
 * @option $gameVariables.value(1)   // 1号变量的值
 * @option $gameSwitches.value(1) ? "有効" : "無効"  // 1号开关的状态
 * @option $gameMap.displayName()  // 地图名
 * @option $gameParty.size()  // 队伍人数
 * @option $gameParty.steps()  // 当前步数
 * @option $gameParty.gold()  // 所持金钱
 * @option $gameParty.numItems($dataItems[1])  // 1号道具持有数
 * @option $gameParty.numItems($dataWeapons[1])  // 1号武器持有数
 * @option $gameParty.numItems($dataArmors[1])  // 1号防具持有数
 * @option $gameSystem.playtimeText()   // 游玩时间
 * @option $gameSystem.saveCount()  // 存档次数
 * @option $gameSystem.battleCount()  // 战斗次数
 * @parent menuHelpSettings
 *
 * @param rightBottomBlockAlign
 * @text 右下文字对齐
 * @desc 右下文字的对齐方式
 * ※所持金钱的显示位置为“帮助窗口的左下”时无效
 * @default left
 * @type select
 * @option 居左
 * @value left
 * @option 居中
 * @value center
 * @option 居右
 * @value right
 * @parent menuHelpSettings
 *
 * @param leftBottomBlockLabel
 * @text 左下の項目名
 * @desc 左下に表示する項目名です。
 * ※启用后不再显示菜单的说明文本
 * @default
 * @type string
 * @parent menuHelpSettings
 *
 * @param leftBottomBlockValue
 * @text 左下值
 * @desc 用于显示左下值的脚本。
 * ※启用后不再显示菜单的说明文本
 * @default
 * @type combo
 * @option $gameVariables.value(1)   // 1号变量的值
 * @option $gameSwitches.value(1) ? "有効" : "無効"  // 1号开关的状态
 * @option $gameMap.displayName()  // 地图名
 * @option $gameParty.size()  // 队伍人数
 * @option $gameParty.steps()  // 当前步数
 * @option $gameParty.gold()  // 所持金钱
 * @option $gameParty.numItems($dataItems[1])  // 1号道具持有数
 * @option $gameParty.numItems($dataWeapons[1])  // 1号武器持有数
 * @option $gameParty.numItems($dataArmors[1])  // 1号防具持有数
 * @option $gameSystem.playtimeText()   // 游玩时间
 * @option $gameSystem.saveCount()  // 存档次数
 * @option $gameSystem.battleCount()  // 战斗次数
 * @parent menuHelpSettings
 *
 * @param leftBottomBlockAlign
 * @text 左下文字对齐
 * @desc 左下文字的对齐方式
 * @default left
 * @type select
 * @option 居左
 * @value left
 * @option 居中
 * @value center
 * @option 居右
 * @value right
 * @parent menuHelpSettings
 */

/*~struct~menuHelpTexts:ja
 *
 * @param symbol
 * @text 菜单名称
 * @desc 输入菜单的名称。
 * @type string
 *
 * @param helpText
 * @text 菜单说明文本
 * @desc 输入菜单的说明文本。
 * @type string
 */

/*~struct~backgroundImages:ja
 *
 * @param sceneName
 * @text 场景名
 * @desc 要设定背景图的场景名。
 * 可以直接输入自己添加的场景名称
 * @default Scene_Menu
 * @type combo
 * @option Scene_Menu
 * @option Scene_Item
 * @option Scene_Skill
 * @option Scene_Equip
 * @option Scene_Status
 * @option Scene_Options
 * @option Scene_Save
 * @option Scene_Load
 * @option Scene_GameEnd
 *
 * @param imageName
 * @text 背景图像
 * @desc 选择作为背景图显示的图像文件
 * @dir img/system
 * @type file
 * @require 1
 */