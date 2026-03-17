//=============================================================================
// RPGツクールMZ - LL_MenuScreenBase.js v1.1.0
//-----------------------------------------------------------------------------
// ルルの教会 (Lulu's Church)
// https://nine-yusha.com/
//
// URL below for license details.
// https://nine-yusha.com/plugin/
//=============================================================================
/*:zh
 * @target MZ
 * @plugindesc 菜单画面设定立绘的基础插件。
 * @author ルルの教会
 * @url https://nine-yusha.com/plugin-menuscreen/
 *
 * @help LL_MenuScreenBase.js
 * 
 * 可定义多个如下的状态、开关、变量条件下显示的立绘。
 *   - 打开1号开关且在中毒状态下显示的立绘
 *   - 1号变量在10以上在中毒状态下显示的立绘
 *   - 1号开关打开时显示的立绘
 *   - 中毒状态显示的立绘
 *   - 无需开关、变量、状态的普通立绘（最低限度）
 * 
 * 剩余HP%时切换立绘：
 * 	首先在立绘列表创建剩余HP%为100的立绘。
 * 	复制上面创建的立绘，将复制的立绘的剩余HP%改为50。
 * 	那么在HP降低到一半以下后，就会调用50设定的立绘。
 * 	可以为每个剩余HP%的情况定义多个立绘。
 *
 * 图像文件显示的优先顺序：
 * 	1. 状态ID、开关ID、变量条件全部符合
 *  2. 状态ID、开关ID两方符合
 * 	3. 状态ID、变量条件两方符合
 * 	4. 只有状态ID符合
 *  5. 开关ID、变量条件两方符合
 * 	6. 只有开关ID符合
 * 	7. 只有变量条件符合
 *  8. 无条件（没有设定状态ID、开关ID和变量条件）
 * （以上设定中，剩余HP%的显示优先度最低）
 * 
 *
 *
 * 联动战斗中立绘插件：
 * 	导入LL_StandingPictureBattle的情况下，
 * 	可以联动战斗中的立绘列表。
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
 * 
 * 作者: ルルの教会
 * 作成日: 2022/3/7
 *
 * @param menuPictures
 * @text 立绘列表
 * @desc 定义在菜单画面中显示的立绘。
 * 可以定义在特定状态、开关打开时的多个立绘。
 * @default []
 * @type struct<menuPictures>[]
 *
 * @param onSpbPlugin
 * @text 联动战斗状态立绘插件
 * @desc ※不使用该项目
 *
 * @param onSpbPluginEnable
 * @text 联动立绘列表
 * @desc 联动LL_StandingPictureBattle中的立绘列表
 * 启用后无视本插件的立绘设定。
 * @default false
 * @type boolean
 * @parent onSpbPlugin
 */

/*~struct~menuPictures:ja
 *
 * @param actorId
 * @text 角色ID
 * @desc 选择定义立绘的角色ID。
 * @type actor
 *
 * @param stateId
 * @text 状态ID
 * @desc 用于变更立绘的状态。
 * 通常的立绘请设定为无。
 * @type state
 *
 * @param switchId
 * @text 开关ID
 * @desc 用于变更立绘的开关ID。
 * 通常的立绘请设定为无。
 * @type switch
 *
 * @param variableCase
 * @text 变量条件
 * @desc 用于变更立绘的变量。
 * @default
 * @type struct<variableCase>
 *
 * @param hpPercentage
 * @text 剩余HP%
 * @desc 用于剩余HP%时变更立绘。
 * 通常的立绘请设定为100.
 * @default 100
 * @min 0
 * @max 100
 * @type number
 *
 * @param imageName
 * @text 图片文件名
 * @desc 选择显示为立绘的图片文件名。
 * @dir img/pictures
 * @type file
 * @require 1
 *
 * @param x
 * @text X坐标
 * @desc 调整立绘显示位置的x坐标偏移，
 * +向右，-向左 (默认: 0)
 * @default 0
 * @min -9999
 * @max 9999
 * @type number
 *
 * @param y
 * @text Y坐标
 * @desc 调整立绘显示位置的y坐标偏移，
 * +向下，-向上 (默认: 0)
 * @default 0
 * @min -9999
 * @max 9999
 * @type number
 *
 * @param scaleX
 * @text X扩大率
 * @desc 立绘的X扩大率
 * @default 100
 * @min -2000
 * @max 2000
 * @type number
 *
 * @param scaleY
 * @text Y扩大率
 * @desc 立绘的Y扩大率
 * @default 100
 * @min -2000
 * @max 2000
 * @type number
 */

/*~struct~variableCase:ja
 *
 * @param id
 * @text 变量ID
 * @desc 作为条件使用的变量ID。
 * @type variable
 *
 * @param type
 * @text 变量条件
 * @desc 变量ID的比较条件。
 * @default equal
 * @type select
 * @option 等于
 * @value equal
 * @option 以上
 * @value higher
 * @option 以下
 * @value lower
 *
 * @param value
 * @text 变量比较值
 * @desc 变量ID的比较数值。
 * @default 0
 * @min -99999999
 * @max 99999999
 * @type number
 */