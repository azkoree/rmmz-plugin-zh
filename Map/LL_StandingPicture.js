//=============================================================================
// RPGツクールMZ - LL_StandingPicture.js v2.7.0
//-----------------------------------------------------------------------------
// ルルの教会 (Lulu's Church)
// https://nine-yusha.com/
//
// Please refer to the URL below for license details.
// https://nine-yusha.com/plugin/
//=============================================================================

/*:zh
 * @target MZ
 * @plugindesc 对话时显示立绘。
 * @author ルルの教会
 * @url https://nine-yusha.com/plugin-spicture/
 *
 * @help LL_StandingPicture.js
 *
 * 在对话框内输入专用的控制符，就可以显示立绘。
 *
 * ・立绘ID可以使用半角英语数字和下划线（_）
 * ・可以用变量来指定立绘ID。【例】\F1[\V[1]]
 * ・一次最多可以显示8个立绘。
 * ・立绘位5~8号的XY坐标，分别使用1~4的坐标对应显示（没看懂）
 *
 * 专用控制符:
 *   \F1[立绘ID], \F2[立绘ID], \F3[立绘ID], \F4[立绘ID]
 *   \F5[立绘ID], \F6[立绘ID], \F7[立绘ID], \F8[立绘ID]
 *     显示立绘。【例】\F1[reid]
 *   (也可以使用\F, \FF, \FFF, \FFFF)
 *
 *   \M1[动作], \M2[动作], \M3[动作], \M4[动作]
 *   \M5[动作], \M6[动作], \M7[动作], \M8[动作]
 *     播放立绘动作。【例】\M1[yes]
 *   (也可以使用\M, \MM, \MMM, \MMMM)
 *
 *   \AA[1], \AA[2], \AA[3], \AA[4], \AA[5], \AA[6], \AA[7], \AA[8]
 *     将焦点对准指定的立绘（对话时等）
 *   (也可以使用\AA[F], \AA[FF], \AA[FFF], \AA[FFFF])
 *
 *   \AA[N]  将所有立绘变暗。
 *   \AA[R]  重置立绘的焦点。
 *
 *   \FH[ON], \FH[OFF]
 *     切换保持模式的ON、OFF。
 *     将保持模式设为ON后，窗口消失后立绘也会持续显示。
 *     想要消除立绘时，请执行\FH[OFF]的控制符。
 *
 * 立绘动作列表:
 *   yes(点头), yesyes(点头两次), no(左右摇晃), noslow(缓慢左右摇晃)
 *   jump(跳跃), jumpjump(跳跃两次), jumploop(持续跳跃)
 *   shake(抖动), shakeloop(持续抖动)
 *   runleft(向画面左侧跑走), runright(向画面右侧跑走)
 *   noslowloop(持续左右摇晃), huwahuwa(飘浮)
 *
 * 插件命令:
 *   执行控制符: 在任意时机操作立绘。
 *   立绘显示ON・OFF: 批量控制立绘的显示/隐藏。(初始值: ON)
 *   色调变更: 更改立绘的色调。
 *
 * 眨眼动画:
 *   设置眨眼图像文件后，会自动播放眨眼动画。
 *   (如果不使用眨眼动画，请将图像设置为无)
 *   播放顺序: 图像1→图像2→无 (如果只想设置1张差分，请只设置「图像1」)
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
 * 作成日: 2025/1/15
 *
 * @command processChar
 * @text 执行控制符
 * @desc 在显示窗口之外的时机下显示立绘。
 *
 * @arg text
 * @text 控制符
 * @desc [例]立绘显示→\F1[s] \FH[ON]、立绘消除→\FH[OFF]
 * 像文章显示时一样输入控制符。
 * @type multiline_string
 *
 * @command setEnabled
 * @text 立绘显示ON・OFF
 * @desc 批量控制立绘的显示/隐藏。
 *
 * @arg enabled
 * @text 立绘显示
 * @desc 设为OFF后，立绘将完全不再显示。
 * @default true
 * @type boolean
 *
 * @command setTone
 * @text 色调变更
 * @desc 更改立绘的色调。
 *
 * @arg toneR
 * @text 红
 * @desc 色调的R成分。(-255～255)
 * @default 0
 * @type number
 * @min -255
 * @max 255
 *
 * @arg toneG
 * @text 绿
 * @desc 色调的G成分。(-255～255)
 * @default 0
 * @type number
 * @min -255
 * @max 255
 *
 * @arg toneB
 * @text 蓝
 * @desc 色调的B成分。(-255～255)
 * @default 0
 * @type number
 * @min -255
 * @max 255
 *
 * @arg toneC
 * @text 灰度
 * @desc 灰度强度。(0～255)
 * @default 0
 * @type number
 * @min 0
 * @max 255
 *
 * @param sPictures
 * @text 立绘列表
 * @desc 定义在消息窗口中显示的立绘。
 * @default []
 * @type struct<sPictures>[]
 *
 * @param pictureSettings1
 * @text 立绘框1(\F1 or \F)
 * @desc ※此项目不使用
 *
 * @param transition
 * @text 切换效果
 * @desc 立绘出现/消失时的切换效果。
 * @type select
 * @default 1
 * @option 无
 * @value 0
 * @option 淡入淡出
 * @value 1
 * @option 从左侧滑入
 * @value 2
 * @option 从右侧滑入
 * @value 3
 * @option 从下方滑入
 * @value 4
 * @option 从上方滑入
 * @value 5
 * @parent pictureSettings1
 *
 * @param priority
 * @text 重叠顺序
 * @desc 指定立绘显示的重叠顺序。
 * @type select
 * @default inFrontOfPicture
 * @option 普通图片后面
 * @value behindPicture
 * @option 插入普通图片
 * @value betweenPictures
 * @option 普通图片前面
 * @value inFrontOfPicture
 * @option 窗口后面（淡出时也显示）
 * @value behindWindow
 * @option 窗口前面（淡出时也显示）
 * @value inFrontOfWindow
 * @parent pictureSettings1
 *
 * @param pictureSettings2
 * @text 立绘框2(\F2 or \FF)
 * @desc ※此项目不使用
 *
 * @param transition2
 * @text 切替効果
 * @desc 立ち絵の出現・消去時の切替効果です。
 * @type select
 * @default 1
 * @option なし
 * @value 0
 * @option フェード
 * @value 1
 * @option フロートイン左
 * @value 2
 * @option フロートイン右
 * @value 3
 * @option フロートイン下
 * @value 4
 * @option フロートイン上
 * @value 5
 * @parent pictureSettings2
 *
 * @param priority2
 * @text 重叠顺序
 * @desc 指定立绘显示的重叠顺序。
 * @type select
 * @default inFrontOfPicture
 * @option 普通图片后面
 * @value behindPicture
 * @option 插入普通图片
 * @value betweenPictures
 * @option 普通图片前面
 * @value inFrontOfPicture
 * @option 窗口后面（淡出时也显示）
 * @value behindWindow
 * @option 窗口前面（淡出时也显示）
 * @value inFrontOfWindow
 * @parent pictureSettings2
 *
 * @param pictureSettings3
 * @text 立绘框3(\F3 or \FFF)
 * @desc ※此项目不使用
 *
 * @param transition3
 * @text 切替効果
 * @desc 立ち絵の出現・消去時の切替効果です。
 * @type select
 * @default 1
 * @option 无
 * @value 0
 * @option 淡入淡出
 * @value 1
 * @option 从左侧滑入
 * @value 2
 * @option 从右侧滑入
 * @value 3
 * @option 从下方滑入
 * @value 4
 * @option 从上方滑入
 * @value 5
 * @parent pictureSettings3
 *
 * @param priority3
 * @text 重叠顺序
 * @desc 指定立绘显示的重叠顺序。
 * @type select
 * @default inFrontOfPicture
 * @option 普通图片后面
 * @value behindPicture
 * @option 插入普通图片
 * @value betweenPictures
 * @option 普通图片前面
 * @value inFrontOfPicture
 * @option 窗口后面（淡出时也显示）
 * @value behindWindow
 * @option 窗口前面（淡出时也显示）
 * @value inFrontOfWindow
 * @parent pictureSettings3
 *
 * @param pictureSettings4
 * @text 立绘框4(\F4 or \FFFF)
 * @desc ※此项目不使用
 *
 * @param transition4
 * @text 切换效果
 * @desc 立绘出现/消失时的切换效果。
 * @type select
 * @default 1
 * @option 无
 * @value 0
 * @option 淡入淡出
 * @value 1
 * @option 从左侧滑入
 * @value 2
 * @option 从右侧滑入
 * @value 3
 * @option 从下方滑入
 * @value 4
 * @option 从上方滑入
 * @value 5
 * @parent pictureSettings4
 *
 * @param priority4
 * @text 重叠顺序
 * @desc 指定立绘显示的重叠顺序。
 * @type select
 * @default inFrontOfPicture
 * @option 普通图片后面
 * @value behindPicture
 * @option 插入普通图片
 * @value betweenPictures
 * @option 普通图片前面
 * @value inFrontOfPicture
 * @option 窗口后面（淡出时也显示）
 * @value behindWindow
 * @option 窗口前面（淡出时也显示）
 * @value inFrontOfWindow
 * @parent pictureSettings4
 *
 * @param pictureSettings5
 * @text 立绘框5(\F5)
 * @desc 用\F5调用的立绘框设置。
 * 用\F5调用时，会以立绘框1的坐标显示。
 * @default {"transition":"1","priority":"inFrontOfPicture"}
 * @type struct<pictureSettings>
 *
 * @param pictureSettings6
 * @text 立绘框6(\F6)
 * @desc 用\F6调用的立绘框设置。
 * 用\F6调用时，会以立绘框2的坐标显示。
 * @default {"transition":"1","priority":"inFrontOfPicture"}
 * @type struct<pictureSettings>
 *
 * @param pictureSettings7
 * @text 立绘框7(\F7)
 * @desc 用\F7调用的立绘框设置。
 * 用\F7调用时，会以立绘框3的坐标显示。
 * @default {"transition":"1","priority":"inFrontOfPicture"}
 * @type struct<pictureSettings>
 *
 * @param pictureSettings8
 * @text 立绘框8(\F8)
 * @desc 用\F8调用的立绘框设置。
 * 用\F8调用时，会以立绘框4的坐标显示。
 * @default {"transition":"1","priority":"inFrontOfPicture"}
 * @type struct<pictureSettings>
 *
 * @param blinkSettings
 * @text 眨眼动画
 * @desc ※此项目不使用
 *
 * @param blinkInterval
 * @text 眨眼间隔
 * @desc 眨眼间隔的平均帧数。(1/60秒、初始值: 180)
 * 例如设置为180时，平均3秒眨眼1次。
 * @default 180
 * @min 1
 * @max 2000
 * @type number
 * @parent blinkSettings
 *
 * @param blinkWaitCount
 * @text 眨眼显示时间
 * @desc 眨眼时的显示时间。(1/60秒、初始值: 4)
 * 数值越大，闭眼时间越长。
 * @default 4
 * @min 1
 * @max 2000
 * @type number
 * @parent blinkSettings
 *
 * @param focusToneAdjust
 * @text 焦点时的暗度
 * @desc 用AA[s]设置焦点时的暗度(-255～0)。
 * 如果太暗请调整。(初始值: -96)
 * @default -96
 * @min -255
 * @max 0
 * @type number
 *
 * @param betweenPicturesPriority
 * @text 插入时的图片编号
 * @desc 设置重叠顺序「插入普通图片」时有效。
 * 比此编号大的图片会显示在立绘上方。
 * @default 50
 * @min 0
 * @max 100
 * @type number
 *
 * @param bootCachePictures
 * @text 图片预加载
 * @desc 消除浏览器播放时的图片加载等待。
 * 如果图片数量或容量较大，建议关闭。
 * @default true
 * @type boolean
 */

/*~struct~sPictures:ja
 *
 * @param id
 * @text 立绘ID
 * @desc 立绘ID。用控制符调用立绘时使用。
 * 请用半角英数字(_)输入。
 * @type string
 *
 * @param imageName
 * @text 图片文件名
 * @desc 请选择要作为立绘显示的图片文件。
 * @dir img/pictures
 * @type file
 * @require 1
 *
 * @param imageNameBlink
 * @text 眨眼图片文件名1
 * @desc 请选择眨眼时的差分图片文件。
 * 图片尺寸请与基本立绘图片统一。
 * @dir img/pictures
 * @type file
 * @require 1
 *
 * @param imageNameBlink2
 * @text 眨眼图片文件名2
 * @desc 请选择眨眼时的差分图片文件2。
 * 图片尺寸请与基本立绘图片统一。
 * @dir img/pictures
 * @type file
 * @require 1
 *
 * @param origin
 * @text 原点
 * @desc 立绘的原点。
 * @default 0
 * @type select
 * @option 左上
 * @value 0
 * @option 中央
 * @value 1
 *
 * @param x
 * @text X坐标 (立绘框1)
 * @desc 用立绘框1(F1)调用时的显示位置(X)。
 * @default 464
 * @min -2000
 * @max 2000
 * @type number
 *
 * @param y
 * @text Y坐标 (立绘框1)
 * @desc 用立绘框1(F)调用时的显示位置(Y)。
 * @default 96
 * @min -2000
 * @max 2000
 * @type number
 *
 * @param x2
 * @text X坐标 (立绘框2)
 * @desc 用立绘框2(F2)调用时的显示位置(X)。
 * @default 20
 * @min -2000
 * @max 2000
 * @type number
 *
 * @param y2
 * @text Y坐标 (立绘框2)
 * @desc 用立绘框2(F2)调用时的显示位置(Y)。
 * @default 96
 * @min -2000
 * @max 2000
 * @type number
 *
 * @param x3
 * @text X坐标 (立绘框3)
 * @desc 用立绘框3(F3)调用时的显示位置(X)。
 * @default 364
 * @min -2000
 * @max 2000
 * @type number
 *
 * @param y3
 * @text Y坐标 (立绘框3)
 * @desc 用立绘框3(F3)调用时的显示位置(Y)。
 * @default 96
 * @min -2000
 * @max 2000
 * @type number
 *
 * @param x4
 * @text X坐标 (立绘框4)
 * @desc 用立绘框4(F4)调用时的显示位置(X)。
 * @default 120
 * @min -2000
 * @max 2000
 * @type number
 *
 * @param y4
 * @text Y坐标 (立绘框4)
 * @desc 用立绘框4(F4)调用时的显示位置(Y)。
 * @default 96
 * @min -2000
 * @max 2000
 * @type number
 *
 * @param reverse
 * @text 立绘框2, 4的左右翻转
 * @desc 用立绘框2(F2)、立绘框4(F4)调用时
 * 是否左右翻转立绘的设置。
 * @default 1
 * @type select
 * @option 不左右翻转
 * @value 1
 * @option 左右翻转
 * @value -1
 *
 * @param scaleX
 * @text X放大率
 * @desc 立绘的放大率(X)。
 * @default 100
 * @min -2000
 * @max 2000
 * @type number
 *
 * @param scaleY
 * @text Y放大率
 * @desc 立绘的放大率(Y)。
 * @default 100
 * @min -2000
 * @max 2000
 * @type number
 *
 * @param opacity
 * @text 不透明度
 * @desc 立绘的不透明度(0～255)。
 * 设置眨眼图片时请设为255。
 * @default 255
 * @type number
 * @min 0
 * @max 255
 *
 * @param blendMode
 * @text 合成方法
 * @desc 立绘的合成方法。
 * @default 0
 * @type select
 * @option 正常
 * @value 0
 * @option 加算
 * @value 1
 * @option 除算
 * @value 2
 * @option 滤色
 * @value 3
 */

/*~struct~pictureSettings:ja
 *
 * @param transition
 * @text 切换效果
 * @desc 立绘出现/消失时的切换效果。
 * @type select
 * @default 1
 * @option 无
 * @value 0
 * @option 淡入淡出
 * @value 1
 * @option 从左侧滑入
 * @value 2
 * @option 从右侧滑入
 * @value 3
 * @option 从下方滑入
 * @value 4
 * @option 从上方滑入
 * @value 5
 *
 * @param priority
 * @text 重叠顺序
 * @desc 指定立绘图像的重叠顺序。
 * @type select
 * @default inFrontOfPicture
 * @option 普通图片后面
 * @value behindPicture
 * @option 插入普通图片
 * @value betweenPictures
 * @option 普通图片前面
 * @value inFrontOfPicture
 * @option 窗口后面（淡出时也显示）
 * @value behindWindow
 * @option 窗口前面（淡出时也显示）
 * @value inFrontOfWindow
 */