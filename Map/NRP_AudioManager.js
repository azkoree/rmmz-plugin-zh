//=============================================================================
// NRP_AudioManager.js
// -------------------------------------------------
// 【中文化】本项目本地化版本 2026/09/12
// 仅翻译注释与编辑器显示文本，未改动任何代码逻辑、参数键名与加载顺序。
// -------------------------------------------------
//=============================================================================
/*:
 * @target MV MZ
 * @plugindesc v1.061 音频文件管理
 * @author Takeshi Sunagawa (http://newrpg.seesaa.net/)
 * @url http://newrpg.seesaa.net/article/483999181.html
 *
 * @help 管理音频文件。
 * 
 * -------------------------------------------------------------------
 * 【功能】
 * -------------------------------------------------------------------
 * ◆变更当前BGM设定（MZ用插件指令）
 * 可对当前正在播放的 BGM，
 * 通过插件指令变更其音量、音调与声像。
 * 
 * 与 Maker 自带指令不同，无需指定文件名，
 * 因此可以更自由地进行操作。
 * 例如，可以在发动大招时
 * 降低 BGM 的音量。
 * 
 * 此外，变更音调时
 * 当前播放位置会被保持。
 * 
 * ◆音频替换功能
 * 例如，在 Maker 中设定 Boss 战音乐时，
 * 通常会使用「战斗BGM的变更」指令
 * 设定 Boss 战音乐，并在战斗结束后
 * 切回普通战斗音乐。
 * 
 * 问题在于，之后若想修改
 * Boss 战音乐或普通战斗音乐，
 * 就必须对所有 Boss 战事件逐个进行修改。
 * 
 * 使用本插件时，只要事先设定一个占位文件，
 * 就能把该曲目替换为其他文件进行播放。
 * 无需再逐个修改全部事件指令。
 * 
 * 另外，若想在游戏后半段
 * 更换普通战斗音乐，
 * 也可以通过开关进行分支。
 * 
 * ◆音频调整功能
 * 例如，播放作为素材导入的 ogg 文件时，
 * 有时会与其他素材的音量不均衡。
 * 虽然可以在每次播放时调整音量，
 * 但之后想统一修改时会很麻烦。
 * 
 * 此时若使用本插件设定音量，
 * 就无需每次播放都进行设定。
 * 尤其可以设定通常无法实现的
 * 超过 100 的音量。
 * 
 * 还可以变更 BGM 与 BGS 的开始位置。
 * 对于开头含有较长空白的 ogg，把开始位置向后移，
 * 即可消除不自然的空白。
 * 
 * ※与音频替换功能并用时，
 * 　请针对替换后的文件进行设定。
 * 
 * -------------------------------------------------------------------
 * 【使用条款】
 * -------------------------------------------------------------------
 * 无特别限制。
 * 修改、再发布自由，可用于商业用途，
 * 署名亦为可选。
 * 作者不承担责任，
 * 但会在可能范围内处理缺陷。
 * 
 * @-----------------------------------------------------
 * @ 【插件指令】
 * @-----------------------------------------------------
 * 
 * @command ChangeCurrentBgmSetting
 * @text 变更当前BGM设定
 * @desc 变更当前正在播放的 BGM 的音量、音调与声像。
 * 
 * @arg Volume
 * @text 音量
 * @type number
 * @max 400
 * @default 90
 * @desc BGM 的音量。
 * 90 为初始值。
 * 
 * @arg Pitch
 * @text 音调
 * @type number
 * @default 100
 * @desc BGM 的音调。
 * 100 为初始值。
 * 
 * @arg Pan
 * @text 声像
 * @type number
 * @max 100 @min -100
 * @default 0
 * @desc BGM 的声像。
 * 0 为初始值。
 * 
 * @-----------------------------------------------------
 * 
 * @command ChangeCurrentBgsSetting
 * @text 变更当前BGS设定
 * @desc 变更当前正在播放的 BGS 的音量、音调与声像。
 * 
 * @arg Volume
 * @text 音量
 * @type number
 * @max 400
 * @default 90
 * @desc BGS 的音量。
 * 90 为初始值。
 * 
 * @arg Pitch
 * @text 音调
 * @type number
 * @default 100
 * @desc BGS 的音调。
 * 100 为初始值。
 * 
 * @arg Pan
 * @text 声像
 * @type number
 * @max 100 @min -100
 * @default 0
 * @desc BGS 的声像。
 * 0 为初始值。
 * 
 * @-----------------------------------------------------
 * @ 【插件参数】
 * @-----------------------------------------------------
 * 
 * @param <BGM>
 * @text ＜BGM＞
 * 
 * @param BgmSettings
 * @text BGM设定列表
 * @parent <BGM>
 * @type struct<BgmSetting>[]
 * @desc 对每个 BGM 文件单独设定音量等参数。
 * 
 * @param BgmAliases
 * @text BGM替换设定
 * @parent <BGM>
 * @type struct<BgmAlias>[]
 * @desc 替换 BGM 文件后播放。
 * 位置越靠上，优先级越高。
 * 
 * @param <BGS>
 * @text ＜BGS＞
 * 
 * @param BgsSettings
 * @text BGS设定列表
 * @parent <BGS>
 * @type struct<BgsSetting>[]
 * @desc 对每个 BGS 文件单独设定音量等参数。
 * 
 * @param BgsAliases
 * @text BGS替换设定
 * @parent <BGS>
 * @type struct<BgsAlias>[]
 * @desc 替换 BGS 文件后播放。
 * 位置越靠上，优先级越高。
 * 
 * @param <ME>
 * @text ＜ME＞
 * 
 * @param MeSettings
 * @text ME设定列表
 * @parent <ME>
 * @type struct<MeSetting>[]
 * @desc 对每个 ME 文件单独设定音量等参数。
 * 
 * @param MeAliases
 * @text ME替换设定
 * @parent <ME>
 * @type struct<MeAlias>[]
 * @desc 替换 ME 文件后播放。
 * 位置越靠上，优先级越高。
 * 
 * @param <SE>
 * @text ＜SE＞
 * 
 * @param SeSettings
 * @text SE设定列表
 * @parent <SE>
 * @type struct<SeSetting>[]
 * @desc 对每个 SE 文件单独设定音量等参数。
 * 
 * @param SeAliases
 * @text SE替换设定
 * @parent <SE>
 * @type struct<SeAlias>[]
 * @desc 替换 SE 文件后播放。
 * 位置越靠上，优先级越高。
 * 
 * @param <Other>
 * @text ＜其他＞
 * 
 * @param DisabledAutoplaySwitch
 * @text 禁用自动演奏的开关
 * @parent <Other>
 * @type switch
 * @desc 该开关开启期间，禁用地图切换与乘坐载具时的自动演奏。
 */

/*~struct~BgmSetting:
 * @param Name
 * @text 文件名
 * @type file
 * @dir audio/bgm
 * @desc BGM 的文件名。
 * 
 * @param Volume
 * @text 音量
 * @type number
 * @max 400
 * @default 100
 * @desc BGM 的音量。
 * 请以 100 为基准进行设定。
 * 
 * @param Pitch
 * @text 音调
 * @type number
 * @desc BGM 的音调。
 * 请以 100 为基准进行设定。
 * 
 * @param Pan
 * @text 声像
 * @type number
 * @max 100 @min -100
 * @desc BGM 的声像。
 * 请以 0 为基准进行设定。
 * 
 * @param Pos
 * @text 起始位置
 * @type number
 * @max 999 @decimals 2
 * @desc BGM 的开始位置（秒）。
 */

/*~struct~BgmAlias:
 * @param FromFileName
 * @text 替换前的文件名
 * @type file
 * @dir audio/bgm
 * @desc 替换前的文件名。
 * 
 * @param ToFileName
 * @text 替换后的文件名
 * @type file
 * @dir audio/bgm
 * @desc 替换后的文件名。
 * 
 * @param Switch
 * @text 开关
 * @type switch
 * @desc 用于启用此替换设定的开关。
 */

/*~struct~BgsSetting:
 * @param Name
 * @text 文件名
 * @type file
 * @dir audio/bgs
 * @desc BGS 的文件名。
 * 
 * @param Volume
 * @text 音量
 * @type number
 * @max 400
 * @default 100
 * @desc BGS 的音量。
 * 请以 100 为基准进行设定。
 * 
 * @param Pitch
 * @text 音调
 * @type number
 * @desc BGS 的音调。
 * 请以 100 为基准进行设定。
 * 
 * @param Pan
 * @text 声像
 * @type number
 * @max 100 @min -100
 * @desc BGS 的声像。
 * 请以 0 为基准进行设定。
 * 
 * @param Pos
 * @text 起始位置
 * @type number
 * @max 999 @decimals 2
 * @desc BGS 的开始位置（秒）。
 */

/*~struct~BgsAlias:
 * @param FromFileName
 * @text 替换前的文件名
 * @type file
 * @dir audio/bgs
 * @desc 替换前的文件名。
 * 
 * @param ToFileName
 * @text 替换后的文件名
 * @type file
 * @dir audio/bgs
 * @desc 替换后的文件名。
 * 
 * @param Switch
 * @text 开关
 * @type switch
 * @desc 用于启用此替换设定的开关。
 */

/*~struct~MeSetting:
 * @param Name
 * @text 文件名
 * @type file
 * @dir audio/me
 * @desc ME 的文件名。
 * 
 * @param Volume
 * @text 音量
 * @type number
 * @max 400
 * @default 100
 * @desc ME 的音量。
 * 请以 100 为基准进行设定。
 * 
 * @param Pitch
 * @text 音调
 * @type number
 * @desc ME 的音调。
 * 请以 100 为基准进行设定。
 * 
 * @param Pan
 * @text 声像
 * @type number
 * @max 100 @min -100
 * @desc ME 的声像。
 * 请以 0 为基准进行设定。
 */

/*~struct~MeAlias:
 * @param FromFileName
 * @text 替换前的文件名
 * @type file
 * @dir audio/me
 * @desc 替换前的文件名。
 * 
 * @param ToFileName
 * @text 替换后的文件名
 * @type file
 * @dir audio/me
 * @desc 替换后的文件名。
 * 
 * @param Switch
 * @text 开关
 * @type switch
 * @desc 用于启用此替换设定的开关。
 */

/*~struct~SeSetting:
 * @param Name
 * @text 文件名
 * @type file
 * @dir audio/se
 * @desc SE 的文件名。
 * 
 * @param Volume
 * @text 音量
 * @type number
 * @max 400
 * @default 100
 * @desc SE 的音量。
 * 请以 100 为基准进行设定。
 * 
 * @param Pitch
 * @text 音调
 * @type number
 * @desc SE 的音调。
 * 请以 100 为基准进行设定。
 * 
 * @param Pan
 * @text 声像
 * @type number
 * @max 100 @min -100
 * @desc SE 的声像。
 * 请以 0 为基准进行设定。
 */

/*~struct~SeAlias:
 * @param FromFileName
 * @text 替换前的文件名
 * @type file
 * @dir audio/se
 * @desc 替换前的文件名。
 * 
 * @param ToFileName
 * @text 替换后的文件名
 * @type file
 * @dir audio/se
 * @desc 替换后的文件名。
 * 
 * @param Switch
 * @text 开关
 * @type switch
 * @desc 用于启用此替换设定的开关。
 */

/*:ja
 * @target MV MZ
 * @plugindesc v1.061 音声ファイルの管理を行う。
 * @author 砂川赳（http://newrpg.seesaa.net/）
 * @url http://newrpg.seesaa.net/article/483999181.html
 *
 * @help 音声ファイルの管理を行います。
 * 
 * -------------------------------------------------------------------
 * ■機能
 * -------------------------------------------------------------------
 * ◆現在のＢＧＭ設定を変更（ＭＺ用プラグインコマンド）
 * 現在演奏中のＢＧＭの音量やピッチ、位相を
 * プラグインコマンドによって変更できます。
 * 
 * ツクールのコマンドと異なりファイル名を指定する必要がないため、
 * 自由度のある操作が可能になります。
 * 例えば、大技の発動時にＢＧＭの音量を下げるなどの演出が可能です。
 * 
 * また、ピッチ変更時も現在の演奏位置が維持されます。
 * 
 * ◆音声置換機能
 * 例えば、ツクールでボス戦曲を設定する場合、
 * 『戦闘ＢＧＭの変更』コマンドによって、
 * ボス戦曲を設定し、戦闘後に通常戦闘曲に戻す
 * というような操作を行うかと思います。
 * 
 * 問題はその後、ボス戦曲や通常戦闘曲を変更したくなった場合です。
 * 全てのボス戦イベントに対して変更を行う必要があります。
 * 
 * このプラグインではあらかじめダミーのファイルを設定しておけば、
 * その曲を設定したファイルへ置換して演奏することが可能です。
 * いちいち全てのイベントを変更する必要がなくなります。
 * 
 * また、ゲーム後半は通常戦闘曲を変更したいという場合は、
 * スイッチによって分岐させることもできます。
 * 
 * ◆音声調整機能
 * 例えば、素材として取り込んだoggファイルを演奏する場合、
 * 他の素材と音量の釣り合いが取れてないことが時々あります。
 * 演奏時にいちいち音量を調整する方法もありますが、
 * 後で変更したくなった場合が大変です。
 * 
 * そんな時にこのプラグインで音量を設定してしまえば、
 * 演奏毎に設定する必要がなくなります。
 * 特に通常は不可能な100以上の音量も設定可能です。
 * 
 * また、ＢＧＭやＢＧＳの開始時点を変更できます。
 * 先頭に長めの空白が含まれているoggの開始時点を後ろにすれば、
 * 不自然な空白をなくすことができます。
 * 
 * ※音声置換機能と併用する場合は、
 * 　置換後のファイルに対して設定してください。
 * 
 * -------------------------------------------------------------------
 * ■利用規約
 * -------------------------------------------------------------------
 * 特に制約はありません。
 * 改変、再配布自由、商用可、権利表示も任意です。
 * 作者は責任を負いませんが、不具合については可能な範囲で対応します。
 * 
 * @-----------------------------------------------------
 * @ プラグインコマンド
 * @-----------------------------------------------------
 * 
 * @command ChangeCurrentBgmSetting
 * @text 現在のＢＧＭ設定を変更
 * @desc 現在演奏中のＢＧＭの音量やピッチ、位相を変更します。
 * 
 * @arg Volume
 * @text 音量
 * @type number
 * @max 400
 * @default 90
 * @desc ＢＧＭの音量です。
 * 90が初期値です。
 * 
 * @arg Pitch
 * @text ピッチ
 * @type number
 * @default 100
 * @desc ＢＧＭのピッチです。
 * 100が初期値です。
 * 
 * @arg Pan
 * @text 位相
 * @type number
 * @max 100 @min -100
 * @default 0
 * @desc ＢＧＭの位相です。
 * 0が初期値です。
 * 
 * @-----------------------------------------------------
 * 
 * @command ChangeCurrentBgsSetting
 * @text 現在のＢＧＳ設定を変更
 * @desc 現在演奏中のＢＧＳの音量やピッチ、位相を変更します。
 * 
 * @arg Volume
 * @text 音量
 * @type number
 * @max 400
 * @default 90
 * @desc ＢＧＳの音量です。
 * 90が初期値です。
 * 
 * @arg Pitch
 * @text ピッチ
 * @type number
 * @default 100
 * @desc ＢＧＳのピッチです。
 * 100が初期値です。
 * 
 * @arg Pan
 * @text 位相
 * @type number
 * @max 100 @min -100
 * @default 0
 * @desc ＢＧＳの位相です。
 * 0が初期値です。
 * 
 * @-----------------------------------------------------
 * @ プラグインパラメータ
 * @-----------------------------------------------------
 * 
 * @param <BGM>
 * @text ＜ＢＧＭ＞
 * 
 * @param BgmSettings
 * @parent <BGM>
 * @text ＢＧＭ設定
 * @type struct<BgmSetting>[]
 * @desc ＢＧＭファイル毎に音量などの設定を行います。
 * 
 * @param BgmAliases
 * @parent <BGM>
 * @text ＢＧＭ置換設定
 * @type struct<BgmAlias>[]
 * @desc ＢＧＭファイルを置換して演奏します。
 * 上の設定ほど優先されます。
 * 
 * @param <BGS>
 * @text ＜ＢＧＳ＞
 * 
 * @param BgsSettings
 * @parent <BGS>
 * @text ＢＧＳ設定
 * @type struct<BgsSetting>[]
 * @desc ＢＧＳファイル毎に音量などの設定を行います。
 * 
 * @param BgsAliases
 * @parent <BGS>
 * @text ＢＧＳ置換設定
 * @type struct<BgsAlias>[]
 * @desc ＢＧＳファイルを置換して演奏します。
 * 上の設定ほど優先されます。
 * 
 * @param <ME>
 * @text ＜ＭＥ＞
 * 
 * @param MeSettings
 * @parent <ME>
 * @text ＭＥ設定
 * @type struct<MeSetting>[]
 * @desc ＭＥファイル毎に音量などの設定を行います。
 * 
 * @param MeAliases
 * @parent <ME>
 * @text ＭＥ置換設定
 * @type struct<MeAlias>[]
 * @desc ＭＥファイルを置換して演奏します。
 * 上の設定ほど優先されます。
 * 
 * @param <SE>
 * @text ＜ＳＥ＞
 * 
 * @param SeSettings
 * @parent <SE>
 * @text ＳＥ設定
 * @type struct<SeSetting>[]
 * @desc ＳＥファイル毎に音量などの設定を行います。
 * 
 * @param SeAliases
 * @parent <SE>
 * @text ＳＥ置換設定
 * @type struct<SeAlias>[]
 * @desc ＳＥファイルを置換して演奏します。
 * 上の設定ほど優先されます。
 * 
 * @param <Other>
 * @text ＜その他＞
 * 
 * @param DisabledAutoplaySwitch
 * @parent <Other>
 * @text 自動演奏禁止スイッチ
 * @type switch
 * @desc スイッチがオンの間、マップ切替や乗物の自動演奏を無効化します。
 */

/*~struct~BgmSetting:ja
 * @param Name
 * @text ファイル名
 * @type file
 * @dir audio/bgm
 * @desc ＢＧＭのファイル名です。
 * 
 * @param Volume
 * @text 音量
 * @type number
 * @max 400
 * @default 100
 * @desc ＢＧＭの音量です。
 * 100を基準に設定してください。
 * 
 * @param Pitch
 * @text ピッチ
 * @type number
 * @desc ＢＧＭのピッチです。
 * 100を基準に設定してください。
 * 
 * @param Pan
 * @text 位相
 * @type number
 * @max 100 @min -100
 * @desc ＢＧＭの位相です。
 * 0を基準に設定してください。
 * 
 * @param Pos
 * @text 開始位置
 * @type number
 * @max 999 @decimals 2
 * @desc ＢＧＭの開始位置（秒）です。
 */

/*~struct~BgmAlias:ja
 * @param FromFileName
 * @text 置換元のファイル名
 * @type file
 * @dir audio/bgm
 * @desc 置換元のファイル名です。
 * 
 * @param ToFileName
 * @text 置換先のファイル名
 * @type file
 * @dir audio/bgm
 * @desc 置換先のファイル名です。
 * 
 * @param Switch
 * @text スイッチ
 * @type switch
 * @desc 置換設定を有効にするスイッチです。
 */

/*~struct~BgsSetting:ja
 * @param Name
 * @text ファイル名
 * @type file
 * @dir audio/bgs
 * @desc ＢＧＳのファイル名です。
 * 
 * @param Volume
 * @text 音量
 * @type number
 * @max 400
 * @default 100
 * @desc ＢＧＳの音量です。
 * 100を基準に設定してください。
 * 
 * @param Pitch
 * @text ピッチ
 * @type number
 * @desc ＢＧＳのピッチです。
 * 100を基準に設定してください。
 * 
 * @param Pan
 * @text 位相
 * @type number
 * @max 100 @min -100
 * @desc ＢＧＳの位相です。
 * 0を基準に設定してください。
 * 
 * @param Pos
 * @text 開始位置
 * @type number
 * @max 999 @decimals 2
 * @desc ＢＧＳの開始位置（秒）です。
 */

/*~struct~BgsAlias:ja
 * @param FromFileName
 * @text 置換元のファイル名
 * @type file
 * @dir audio/bgs
 * @desc 置換元のファイル名です。
 * 
 * @param ToFileName
 * @text 置換先のファイル名
 * @type file
 * @dir audio/bgs
 * @desc 置換先のファイル名です。
 * 
 * @param Switch
 * @text スイッチ
 * @type switch
 * @desc 置換設定を有効にするスイッチです。
 */

/*~struct~MeSetting:ja
 * @param Name
 * @text ファイル名
 * @type file
 * @dir audio/me
 * @desc ＭＥのファイル名です。
 * 
 * @param Volume
 * @text 音量
 * @type number
 * @max 400
 * @default 100
 * @desc ＭＥの音量です。
 * 100を基準に設定してください。
 * 
 * @param Pitch
 * @text ピッチ
 * @type number
 * @desc ＭＥのピッチです。
 * 100を基準に設定してください。
 * 
 * @param Pan
 * @text 位相
 * @type number
 * @max 100 @min -100
 * @desc ＭＥの位相です。
 * 0を基準に設定してください。
 */

/*~struct~MeAlias:ja
 * @param FromFileName
 * @text 置換元のファイル名
 * @type file
 * @dir audio/me
 * @desc 置換元のファイル名です。
 * 
 * @param ToFileName
 * @text 置換先のファイル名
 * @type file
 * @dir audio/me
 * @desc 置換先のファイル名です。
 * 
 * @param Switch
 * @text スイッチ
 * @type switch
 * @desc 置換設定を有効にするスイッチです。
 */

/*~struct~SeSetting:ja
 * @param Name
 * @text ファイル名
 * @type file
 * @dir audio/se
 * @desc ＳＥのファイル名です。
 * 
 * @param Volume
 * @text 音量
 * @type number
 * @max 400
 * @default 100
 * @desc ＳＥの音量です。
 * 100を基準に設定してください。
 * 
 * @param Pitch
 * @text ピッチ
 * @type number
 * @desc ＳＥのピッチです。
 * 100を基準に設定してください。
 * 
 * @param Pan
 * @text 位相
 * @type number
 * @max 100 @min -100
 * @desc ＳＥの位相です。
 * 0を基準に設定してください。
 */

/*~struct~SeAlias:ja
 * @param FromFileName
 * @text 置換元のファイル名
 * @type file
 * @dir audio/se
 * @desc 置換元のファイル名です。
 * 
 * @param ToFileName
 * @text 置換先のファイル名
 * @type file
 * @dir audio/se
 * @desc 置換先のファイル名です。
 * 
 * @param Switch
 * @text スイッチ
 * @type switch
 * @desc 置換設定を有効にするスイッチです。
 */

(function() {
"use strict";

function toBoolean(str, def) {
    if (str === true || str === "true") {
        return true;
    } else if (str === false || str === "false") {
        return false;
    }
    return def;
}
function toNumber(str, def) {
    if (str == undefined || str == "") {
        return def;
    }
    return isNaN(str) ? def : +(str || def);
}

/**
 * ●将结构体（双重数组）转换为 JS 可处理的形式
 */
function parseStruct2(arg) {
    const ret = [];
    if (arg) {
        for (const str of JSON.parse(arg)) {
            ret.push(JSON.parse(str));
        }
    }
    return ret;
}

const PLUGIN_NAME = "NRP_AudioManager";
const parameters = PluginManager.parameters(PLUGIN_NAME);
const pBgmSettings = parseStruct2(parameters["BgmSettings"]);
const pBgmAliases = parseStruct2(parameters["BgmAliases"]);
const pBgsSettings = parseStruct2(parameters["BgsSettings"]);
const pBgsAliases = parseStruct2(parameters["BgsAliases"]);
const pMeSettings = parseStruct2(parameters["MeSettings"]);
const pMeAliases = parseStruct2(parameters["MeAliases"]);
const pSeSettings = parseStruct2(parameters["SeSettings"]);
const pSeAliases = parseStruct2(parameters["SeAliases"]);
const pDisabledAutoplaySwitch = toNumber(parameters["DisabledAutoplaySwitch"]);

//-----------------------------------------------------------------------------
// MZ 用插件指令
//-----------------------------------------------------------------------------

// MV 中不存在该方法，若不定义为空函数会报错。
if (!PluginManager.registerCommand) {
    PluginManager.registerCommand = function() {}
}

/**
 * ●变更当前 BGM 设定
 */
PluginManager.registerCommand(PLUGIN_NAME, "ChangeCurrentBgmSetting", function(args) {
    // 继承当前正在播放的 BGM 信息
    const bgmData = AudioManager.saveBgm();
    if (!bgmData) {
        return;
    }
    const oldPitch = bgmData.pitch;

    const volume = eval(args.Volume);
    if (volume != null) {
        bgmData.volume = Math.max(volume, 0);
    }

    const pitch = eval(args.Pitch);
    if (pitch != null) {
        bgmData.pitch = pitch;
    }

    const pan = eval(args.Pan);
    if (pan != null) {
        bgmData.pan = pan;
    }

    // 反映修改后的信息
    if (AudioManager._bgmBuffer) {
        // 存在音调变更时
        if (pitch && oldPitch != pitch) {
            AudioManager.updateBgmParameters(bgmData);
            AudioManager._bgmBuffer.play(true, bgmData.pos);
            AudioManager.updateCurrentBgm(bgmData, bgmData.pos);
        // 无需变更音调时则正常播放
        // ※这种方式处理似乎更稳定。
        } else {
            AudioManager.updateBgmParameters(bgmData);
            AudioManager.updateCurrentBgm(bgmData, bgmData.pos);
        }
    }
});

/**
 * ●变更当前 BGS 设定
 */
PluginManager.registerCommand(PLUGIN_NAME, "ChangeCurrentBgsSetting", function(args) {
    // 继承当前正在播放的 BGS 信息
    const bgsData = AudioManager.saveBgs();
    if (!bgsData) {
        return;
    }
    const oldPitch = bgsData.pitch;

    const volume = eval(args.Volume);
    if (volume != null) {
        bgsData.volume = Math.max(volume, 0);
    }

    const pitch = eval(args.Pitch);
    if (pitch != null) {
        bgsData.pitch = pitch;
    }

    const pan = eval(args.Pan);
    if (pan != null) {
        bgsData.pan = pan;
    }

    // 反映修改后的信息
    if (AudioManager._bgsBuffer) {
        // 存在音调变更时
        if (pitch && oldPitch != pitch) {
            AudioManager.updateBgsParameters(bgsData);
            AudioManager._bgsBuffer.play(true, bgsData.pos);
            AudioManager.updateCurrentBgs(bgsData, bgsData.pos);
        // 无需变更音调时则正常播放
        // ※这种方式处理似乎更稳定。
        } else {
            AudioManager.updateBgsParameters(bgsData);
            AudioManager.updateCurrentBgs(bgsData, bgsData.pos);
        }
    }
});

//-----------------------------------------------------------------------------
// BGM
//-----------------------------------------------------------------------------

/**
 * ●BGM 播放
 */
const _AudioManager_playBgm = AudioManager.playBgm;
AudioManager.playBgm = function(bgm, pos) {
    // 为 null 时不处理。
    if (!bgm) {
        return;
    }

    // 进行深拷贝。
    let newBgm = {...bgm};
    // 若存在别名则获取
    const aliasName = getAlias(newBgm, pBgmAliases);

    // 未能获取别名时使用原参数
    if (aliasName === undefined) {
        newBgm = bgm;
    // 别名为空则停止播放
    } else if (aliasName === "") {
        this.stopBgm();
        return;
    // 若存在别名则进行替换
    } else if (aliasName) {
        newBgm.name = aliasName;
    }

    // 调整开始位置
    if (!pos) {
        pos = getAudioPos(newBgm, pBgmSettings);
    }

    _AudioManager_playBgm.call(this, newBgm, pos);
};

/**
 * ●BGM 参数更新
 */
const _AudioManager_updateBgmParameters = AudioManager.updateBgmParameters;
AudioManager.updateBgmParameters = function(bgm) {
    // 为 null 时原样处理
    if (!bgm) {
        _AudioManager_updateBgmParameters.apply(this, arguments);
        return;
    }

    // 进行深拷贝。
    const newBgm = {...bgm};
    // 获取设定并保存到 newBgm
    if (setAudioAdjust(newBgm, pBgmSettings)) {
        _AudioManager_updateBgmParameters.call(this, newBgm);
        return;
    }
    // 没有对应设定时使用原处理
    _AudioManager_updateBgmParameters.apply(this, arguments);
};

/**
 * ●判定是否为当前 BGM
 */
const _AudioManager_isCurrentBgm = AudioManager.isCurrentBgm;
AudioManager.isCurrentBgm = function(bgm) {
    const ret = _AudioManager_isCurrentBgm.apply(this, arguments);
    if (ret) {
        return ret;
    }

    //------------------------------------
    // 为 false 时追加进一步判定
    //------------------------------------
    // 若存在别名则进行替换
    const aliasName = getAlias(bgm, pBgmAliases);

    return (
        this._currentBgm &&
        this._bgmBuffer &&
        this._currentBgm.name === aliasName
    );
};

//-----------------------------------------------------------------------------
// BGS
//-----------------------------------------------------------------------------

/**
 * ●BGS 播放
 */
const _AudioManager_playBgs = AudioManager.playBgs;
AudioManager.playBgs = function(bgs, pos) {
    // 为 null 时不处理。
    if (!bgs) {
        return;
    }

    // 进行深拷贝。
    let newBgs = {...bgs};
    // 若存在别名则获取
    const aliasName = getAlias(newBgs, pBgsAliases);

    // 未能获取别名时使用原参数
    if (aliasName === undefined) {
        newBgs = bgs;
    // 别名为空则停止播放
    } else if (aliasName === "") {
        this.stopBgs();
        return;
    // 若存在别名则进行替换
    } else if (aliasName) {
        newBgs.name = aliasName;
    }

    // 调整开始位置
    if (!pos) {
        pos = getAudioPos(newBgs, pBgsSettings);
    }

    _AudioManager_playBgs.call(this, newBgs, pos);
};

/**
 * ●BGS 参数更新
 */
const _AudioManager_updateBgsParameters = AudioManager.updateBgsParameters;
AudioManager.updateBgsParameters = function(bgs) {
    // 为 null 时原样处理
    if (!bgs) {
        _AudioManager_updateBgsParameters.apply(this, arguments);
        return;
    }

    // 进行深拷贝。
    const newBgs = {...bgs};
    // 获取设定并保存到 newBgs
    if (setAudioAdjust(newBgs, pBgsSettings)) {
        _AudioManager_updateBgsParameters.call(this, newBgs);
        return;
    }
    // 没有对应设定时使用原处理
    _AudioManager_updateBgsParameters.apply(this, arguments);
};

/**
 * ●判定是否为当前 BGS
 */
const _AudioManager_isCurrentBgs = AudioManager.isCurrentBgs;
AudioManager.isCurrentBgs = function(bgs) {
    const ret = _AudioManager_isCurrentBgs.apply(this, arguments);
    if (ret) {
        return ret;
    }

    //------------------------------------
    // 为 false 时追加进一步判定
    //------------------------------------
    // 若存在别名则进行替换
    const aliasName = getAlias(bgs, pBgsAliases);

    return (
        this._currentBgs &&
        this._bgsBuffer &&
        this._currentBgs.name === aliasName
    );
};

//-----------------------------------------------------------------------------
// ME
//-----------------------------------------------------------------------------

/**
 * ●ME 播放
 */
const _AudioManager_playMe = AudioManager.playMe;
AudioManager.playMe = function(me) {
    // 为 null 时不处理。
    if (!me) {
        return;
    }

    // 进行深拷贝。
    let newMe = {...me};
    // 获取别名
    const aliasName = getAlias(newMe, pMeAliases);

    // 未能获取别名时使用原参数
    if (aliasName === undefined) {
        newMe = me;
    // 别名为空则不播放
    } else if (aliasName === "") {
        return;
    // 若存在别名则进行替换
    } else if (aliasName) {
        newMe.name = aliasName;
    }

    _AudioManager_playMe.call(this, newMe);
};

/**
 * ●ME 参数更新
 */
const _AudioManager_updateMeParameters = AudioManager.updateMeParameters;
AudioManager.updateMeParameters = function(me) {
    // 为 null 时原样处理
    if (!me) {
        _AudioManager_updateMeParameters.apply(this, arguments);
        return;
    }

    // 进行深拷贝。
    const newMe = {...me};
    // 获取设定并保存到 newMe
    if (setAudioAdjust(newMe, pMeSettings)) {
        _AudioManager_updateMeParameters.call(this, newMe);
        return;
    }
    // 没有对应设定时使用原处理
    _AudioManager_updateMeParameters.apply(this, arguments);
};

//-----------------------------------------------------------------------------
// SE
//-----------------------------------------------------------------------------

/**
 * ●SE 播放
 */
const _AudioManager_playSe = AudioManager.playSe;
AudioManager.playSe = function(se) {
    // 为 null 时不处理。
    if (!se) {
        return;
    }

    // 进行深拷贝。
    let newSe = {...se};
    // 获取别名
    const aliasName = getAlias(newSe, pSeAliases);

    // 未能获取别名时使用原参数
    if (aliasName === undefined) {
        newSe = se;
    // 别名为空则不播放
    } else if (aliasName === "") {
        return;
    // 若存在别名则进行替换
    } else if (aliasName) {
        newSe.name = aliasName;
    }

    _AudioManager_playSe.call(this, newSe);
};

/**
 * ●SE 参数更新
 */
const _AudioManager_updateSeParameters = AudioManager.updateSeParameters;
AudioManager.updateSeParameters = function(buffer, se) {
    // 为 null 时原样处理
    if (!se) {
        _AudioManager_updateSeParameters.apply(this, arguments);
        return;
    }

    // 进行深拷贝。
    const newSe = {...se};
    // 获取设定并保存到 newSe
    if (setAudioAdjust(newSe, pSeSettings)) {
        _AudioManager_updateSeParameters.call(this, buffer, newSe);
        return;
    }
    // 没有对应设定时使用原处理
    _AudioManager_updateSeParameters.apply(this, arguments);
};

//-----------------------------------------------------------------------------
// Game_Map
//-----------------------------------------------------------------------------

/**
 * ●地图切换时的自动播放
 */
const _Game_Map_autoplay = Game_Map.prototype.autoplay;
Game_Map.prototype.autoplay = function() {
    // 开关开启时停止自动播放
    if (pDisabledAutoplaySwitch && $gameSwitches.value(pDisabledAutoplaySwitch)) {
        return;
    }
    _Game_Map_autoplay.apply(this, arguments);
};

//-----------------------------------------------------------------------------
// Game_System
//-----------------------------------------------------------------------------

/**
 * ●降下载具时的播放
 */
const _Game_System_replayWalkingBgm = Game_System.prototype.replayWalkingBgm;
Game_System.prototype.replayWalkingBgm = function() {
    // 开关开启时停止自动播放
    if (pDisabledAutoplaySwitch && $gameSwitches.value(pDisabledAutoplaySwitch)) {
        return;
    }
    _Game_System_replayWalkingBgm.apply(this, arguments);
};

//-----------------------------------------------------------------------------
// 共通处理
//-----------------------------------------------------------------------------

/**
 * ●获取别名。
 */
function getAlias(audio, aliases) {
    // 若存在别名则返回该别名。
    const alias = aliases.find(alias => isValidAlias(audio, alias));
    if (alias) {
        return alias.ToFileName;
    }
    return undefined;
}

/**
 * ●是否为有效的别名？
 */
function isValidAlias(audio, alias) {
    // 文件名一致。
    if (alias.FromFileName == audio.name) {
        const aliasSwitch = toNumber(alias.Switch);
        // 未设定开关时视为有效
        if (!aliasSwitch) {
            return true;
        }
        // 开关开启时视为有效
        return $gameSwitches.value(aliasSwitch);
    }
    // 其他情况无效
    return false;
}

/**
 * ●将调整设定保存到音频。
 */
function setAudioAdjust(audio, settings) {
    // 若存在一致的文件则获取
    const setting = settings.find(setting => setting.Name == audio.name);
    // 没有对应设定时不处理。
    if (!setting) {
        return false;
    }

    const adjustVolume = toNumber(setting.Volume);
    const adjustPitch = toNumber(setting.Pitch);
    const adjustPan = toNumber(setting.Pan);

    if (adjustVolume != undefined) {
        audio.volume = audio.volume * adjustVolume / 100;
    }
    if (adjustPitch != undefined) {
        audio.pitch = audio.pitch * adjustPitch / 100;
    }
    if (adjustPan != undefined) {
        audio.pan = audio.pan + adjustPan;
    }
    return true;
}

/**
 * ●获取音频的开始位置。
 */
function getAudioPos(audio, settings) {
    // 若存在一致的文件则获取
    const setting = settings.find(setting => setting.Name == audio.name);
    // 没有对应设定时不处理。
    if (!setting) {
        return;
    }

    const adjustPos = toNumber(setting.Pos);

    if (adjustPos != undefined) {
        return adjustPos;
    }
    return undefined;
}

})();
