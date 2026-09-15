"use strict";
/*:
@target MV MZ
@plugindesc 像素级移动系统 功能扩展 v2.2.1
@author unagi ootoro
@url https://raw.githubusercontent.com/unagiootoro/RPGMZ/master/DotMoveSystem_FunctionEx.js
@base DotMoveSystem
@help
这是一个扩展像素级移动系统功能的插件。
新增以下功能。
・更改玩家大小
・移动速度的调整
・加速度的追加
・惯性的追加
・斜向移动时墙壁滑行许可/禁止的切换
・推动事件
・陷入事件时行为的更改
・带当判定的跳跃
・地形半格的通行判定
・地形三角格的通行判定

※ 导入本插件时，需要「DotMoveSystem.js v2.2.1」或更高版本。

【使用方法】
■ 更改玩家大小
通过设置插件参数「玩家信息」来更改玩家的大小。

■ 移动速度的调整
可以指定任意的移动速度。
还可以为移动附加加速度与惯性。
・移动速度的调整
在移动路线的设置中
this.setDpf(移动速度);
这样指定。移动速度指定的是每帧的移动量。

（例）每帧移动 0.01 格时
this.setDpf(0.01);

如果要取消移动速度的调整、改为反映事件指令指定的移动速度，
this.setDpf(undefined);
这样指定。

■ 加速度的追加
加速度仅在调整了移动速度时有效。
要指定加速度，
this.setAcc(最大加速度, 影响程度);
这样指定。

（例）在 20 帧之间加速，最大加速度为 3 倍速
this.setAcc(20, 3);

■ 惯性的追加
要指定惯性，
this.setInertia;
这样指定。
惯性请指定 1 以上的值。
该值会每帧从当前加速度中按指定的值持续递减。
设为 1 时，加速度与惯性的增减幅度相同。

（例）在 1 帧内减速 2 倍时
this.setInertia(2);

■ 斜向移动时墙壁滑行的许可/禁止
在移动路线的脚本中
this.setEnableWallSlide(false);
这样指定，即可禁止因斜向移动导致的墙壁滑行。

也可以通过以下设置重新允许墙壁滑行。
this.setEnableWallSlide(true);

■ 推动事件
追加推动事件的功能。
在被推动事件的备注栏，或该事件第0页的注释中
<PushableEvent>
请如此记载。

■ 带当判定的跳跃
执行带当判定的跳跃。
在移动路线的设置中记载以下脚本。
this.smartJump(X轴方向的增加值, Y轴方向的增加值, 最大跳跃高度(可省略), 是否穿行(可省略));
※最大跳跃高度可以省略。省略时适用 10。
※是否穿行也可以省略。省略时不适用穿行。

（例1）向左跳 2、向上跳 3.5 时
this.smartJump(2, -3.5);

（例2）以高度 20 向左跳 2、向上跳 3.5 并穿行时
this. smartJump(2, -3.5, 20, true);

■ 以绝对坐标进行的带当判定跳跃
在移动路线的设置中记载以下脚本。
this.smartJumpAbs(X坐标, Y坐标, 最大跳跃高度(可省略), 是否穿行(可省略));

（例）跳跃到 X=5、Y=10 的坐标时
this.smartJumpAbs(5, 10);

■ 以指定角度与距离进行的带当判定跳跃
在移动路线的设置中记载以下脚本。
this.smartJumpByDeg(角度, 距离, 最大跳跃高度(可省略), 是否穿行(可省略));

（例）朝 30 度角的方向跳跃 2.5 格时
this.smartJumpByDeg(30, 2.5);

■ 地形半格的通行判定
通过编辑插件参数「HalfCollisionMassInfo」
基于区域或地形标记，设置地形半格的当判定。

■ 地形三角格的当判定
通过编辑插件参数「TriangleCollisionMassInfo」
基于区域或地形标记，设置地形三角格的当判定。

【授权协议】
本插件可在 MIT 许可证的条件下使用。


@param PlayerInfo
@text 玩家信息
@type struct<CharacterInfo>
@default {"Width":"1","Height":"1","OffsetX":"0","OffsetY":"0","SlideLengthX":"0.5","SlideLengthY":"0.5","TransferOffsetX":"0","TransferOffsetY":"0"}
@desc
指定玩家的各种信息。

@param FollowerInfo
@text 跟随者信息
@type struct<CharacterInfo>
@default {"Width":"1","Height":"1","OffsetX":"0","OffsetY":"0","SlideLengthX":"0.75","SlideLengthY":"0.75","TransferOffsetX":"0","TransferOffsetY":"0"}
@desc
指定跟随者的各种信息。

@param HalfCollisionMassInfo
@text 每半格的当判定信息
@type struct<HalfCollisionMassInfo>
@default {"UpCollisionRegionId":"0","RightCollisionRegionId":"0","DownCollisionRegionId":"0","LeftCollisionRegionId":"0","UpRightCollisionRegionId":"0","RightDownCollisionRegionId":"0","DownLeftCollisionRegionId":"0","LeftUpCollisionRegionId":"0","UpRightOpenCollisionRegionId":"0","RightDownOpenCollisionRegionId":"0","DownLeftOpenCollisionRegionId":"0","LeftUpOpenCollisionRegionId":"0","UpCollisionTerrainTagId":"0","RightCollisionTerrainTagId":"0","DownCollisionTerrainTagId":"0","LeftCollisionTerrainTagId":"0","UpRightCollisionTerrainTagId":"0","RightDownCollisionTerrainTagId":"0","DownLeftCollisionTerrainTagId":"0","LeftUpCollisionTerrainTagId":"0","UpRightOpenCollisionTerrainTagId":"0","RightDownOpenCollisionTerrainTagId":"0","DownLeftOpenCollisionTerrainTagId":"0","LeftUpOpenCollisionTerrainTagId":"0"}
@desc
指定半格当判定的各种信息。所有类型的信息共通，若设为 0，则该设置无效。

@param TriangleCollisionMassInfo
@text 三角格当判定信息
@type struct<TriangleCollisionMassInfo>
@default {"LeftUpTriangleRegionId": "0", "DownLeftTriangleRegionId": "0", "RightDownTriangleRegionId": "0", "UpRightTriangleRegionId": "0", "LeftUpTriangleTerrainTagId": "0", "DownLeftTriangleTerrainTagId": "0" , "RightDownTriangleTerrainTagId": "0", "UpRightTriangleTerrainTagId": "0"}
@desc
指定三角格当判定的各种信息。所有类型的信息共通，若设为 0，则该设置无效。
*/
/*~struct~CharacterInfo:
@param Width
@text 宽度
@type number
@decimals 2
@default 1
@desc
指定角色的宽度。

@param Height
@text 高度
@type number
@decimals 2
@default 1
@desc
指定角色的宽度。

@param OffsetX
@text X偏移
@type number
@decimals 2
@min -1000
@default 0
@desc
指定角色在 X 轴方向的显示偏移。

@param OffsetY
@text Y偏移
@type number
@decimals 2
@min -1000
@default 0
@desc
指定角色在 Y 轴方向的显示偏移。

@param SlideLengthX
@text X轴滑动长度
@type number
@decimals 2
@default 0.5
@desc
指定角色在 X 轴方向的滑动长度。

@param SlideLengthY
@text Y轴滑动长度
@type number
@decimals 2
@default 0.5
@desc
指定角色在 Y 轴方向的滑动长度。

@param TransferOffsetX
@text 移动地点时的X偏移
@type number
@decimals 2
@min -1000
@default 0
@desc
指定移动到指定地点时的 X 坐标偏移。

@param TransferOffsetY
@text 移动地点时的Y偏移
@type number
@decimals 2
@min -1000
@default 0
@desc
指定移动到指定地点时的 Y 坐标偏移。
*/
/*~struct~HalfCollisionMassInfo:
@param UpCollisionRegionId
@text 上方当判定的区域ID
@type number
@min 0
@default 0
@desc
设置上方当判定所用的区域ID。

@param RightCollisionRegionId
@text 右方当判定的区域ID
@type number
@min 0
@default 0
@desc
设置右方格当判定所用的区域ID。

@param DownCollisionRegionId
@text 下方当判定的区域ID
@type number
@min 0
@default 0
@desc
设置下方格当判定所用的区域ID。

@param LeftCollisionRegionId
@text 左方当判定的区域ID
@type number
@min 0
@default 0
@desc
设置左方格当判定所用的区域ID。

@param UpRightCollisionRegionId
@text 右上方当判定的区域ID
@type number
@min 0
@default 0
@desc
设置右上方格当判定所用的区域ID。

@param RightDownCollisionRegionId
@text 右下方当判定的区域ID
@type number
@min 0
@default 0
@desc
设置右下方格当判定所用的区域ID。

@param DownLeftCollisionRegionId
@text 左下方当判定的区域ID
@type number
@min 0
@default 0
@desc
设置左下方格当判定所用的区域ID。

@param LeftUpCollisionRegionId
@text 左上方当判定的区域ID
@type number
@min 0
@default 0
@desc
设置左上方格当判定所用的区域ID。

@param UpRightOpenCollisionRegionId
@text 右上方空隙当判定的区域ID
@type number
@min 0
@default 0
@desc
设置右上方空隙当判定所用的区域ID。

@param RightDownOpenCollisionRegionId
@text 右下方当判定的区域ID
@type number
@min 0
@default 0
@desc
设置右下方当判定所用的区域ID。

@param DownLeftOpenCollisionRegionId
@text 左下方当判定的区域ID
@type number
@min 0
@default 0
@desc
设置左下方当判定所用的区域ID。

@param LeftUpOpenCollisionRegionId
@text 左上方当判定的区域ID
@type number
@min 0
@default 0
@desc
设置左上方空隙当判定所用的区域ID。

@param UpCollisionRegionId
@text 上方当判定的区域ID
@type number
@min 0
@default 0
@desc
设置上方当判定所用的区域ID。

@param RightCollisionRegionId
@text 右方当判定的区域ID
@type number
@min 0
@default 0
@desc
设置右方格当判定所用的区域ID。

@param DownCollisionRegionId
@text 下方当判定的区域ID
@type number
@min 0
@default 0
@desc
设置下方格当判定所用的区域ID。

@param LeftCollisionRegionId
@text 左方当判定的区域ID
@type number
@min 0
@default 0
@desc
设置左方格当判定所用的区域ID。

@param UpRightCollisionRegionId
@text 右上方当判定的区域ID
@type number
@min 0
@default 0
@desc
设置右上方格当判定所用的区域ID。

@param RightDownCollisionRegionId
@text 右下方当判定的区域ID
@type number
@min 0
@default 0
@desc
设置右下方格当判定所用的区域ID。

@param DownLeftCollisionRegionId
@text 左下方当判定的区域ID
@type number
@min 0
@default 0
@desc
设置左下方格当判定所用的区域ID。

@param LeftUpCollisionRegionId
@text 左上方当判定的区域ID
@type number
@min 0
@default 0
@desc
设置左上方格当判定所用的区域ID。

@param UpRightOpenCollisionRegionId
@text 右上方空隙当判定的区域ID
@type number
@min 0
@default 0
@desc
设置右上方空隙当判定所用的区域ID。

@param RightDownOpenCollisionRegionId
@text 右下方当判定的区域ID
@type number
@min 0
@default 0
@desc
设置右下方当判定所用的区域ID。

@param DownLeftOpenCollisionRegionId
@text 左下方当判定的区域ID
@type number
@min 0
@default 0
@desc
设置左下方当判定所用的区域ID。

@param LeftUpOpenCollisionRegionId
@text 左上方当判定的区域ID
@type number
@min 0
@default 0
@desc
设置左上方空隙当判定所用的区域ID。


@param UpCollisionTerrainTagId
@text 上方当判定的地形标记ID
@type number
@min 0
@default 0
@desc
设置上方当判定所用的地形标记ID。

@param RightCollisionTerrainTagId
@text 右方当判定的地形标记ID
@type number
@min 0
@default 0
@desc
设置右方当判定所用的地形标记ID。

@param DownCollisionTerrainTagId
@text 下方当判定的地形标记ID
@type number
@min 0
@default 0
@desc
设置下方格当判定所用的地形标记ID。

@param LeftCollisionTerrainTagId
@text 左方当判定的地形标记ID
@type number
@min 0
@default 0
@desc
设置左方当判定所用的地形标记ID。

@param UpRightCollisionTerrainTagId
@text 右上方当判定的地形标记ID
@type number
@min 0
@default 0
@desc
设置右上方格当判定所用的地形标记ID。

@param RightDownCollisionTerrainTagId
@text 右下方当判定的地形标记ID
@type number
@min 0
@default 0
@desc
设置右下方格当判定所用的地形标记ID。

@param DownLeftCollisionTerrainTagId
@text 左下方当判定的地形标记ID
@type number
@min 0
@default 0
@desc
设置左下方格当判定所用的地形标记ID。

@param LeftUpCollisionTerrainTagId
@text 左上方当判定的地形标记ID
@type number
@min 0
@default 0
@desc
设置左上方格当判定所用的地形标记ID。

@param UpRightOpenCollisionTerrainTagId
@text 右上方空隙当判定的地形标记ID
@type number
@min 0
@default 0
@desc
设置右上方当判定所用的地形标记ID。

@param RightDownOpenCollisionTerrainTagId
@text 右下方当判定的地形标记ID
@type number
@min 0
@default 0
@desc
设置右下方当判定所用的地形标记ID。

@param DownLeftOpenCollisionTerrainTagId
@text 左下方当判定的地形标记ID
@type number
@min 0
@default 0
@desc
设置左下方当判定所用的地形标记ID。

@param LeftUpOpenCollisionTerrainTagId
@text 左上方当判定的地形标记ID
@type number
@min 0
@default 0
@desc
设置左上方当判定所用的地形标记ID。
*/
/*~struct~TriangleCollisionMassInfo:
@param LeftUpTriangleRegionId
@text 左上方三角当判定的区域ID
@type number
@min 0
@default 0
@desc
设置左上方当判定所用的区域ID。

@param DownLeftTriangleRegionId
@text 左下方三角当判定的区域ID
@type number
@min 0
@default 0
@desc
设置左下方当判定所用的区域ID。

@param RightDownTriangleRegionId
@text 右下方三角当判定的区域ID
@type number
@min 0
@default 0
@desc
设置右下方当判定所用的区域ID。

@param UpRightTriangleRegionId
@text 右上方三角当判定的区域ID
@type number
@min 0
@default 0
@desc
设置右上方三角当判定所用的区域ID。


@param LeftUpTriangleTerrainTagId
@text 左上方当判定的地形标记ID
@type number
@min 0
@default 0
@desc
设置左上方当判定所用的地形标记ID。

@param DownLeftTriangleTerrainTagId
@text 左下方当判定的地形标记ID
@type number
@min 0
@default 0
@desc
设置左下方当判定所用的地形标记ID。

@param RightDownTriangleTerrainTagId
@text 右下方当判定的地形标记ID
@type number
@min 0
@default 0
@desc
设置右下方当判定所用的地形标记ID。

@param UpRightTriangleTerrainTagId
@text 右上方三角当判定的地形标记ID
@type number
@min 0
@default 0
@desc
设置右上方三角当判定所用的地形标记ID。
*/
/*:ja
@target MV MZ
@plugindesc ドット移動システム機能拡張 v2.2.1
@author うなぎおおとろ
@url https://raw.githubusercontent.com/unagiootoro/RPGMZ/master/DotMoveSystem_FunctionEx.js
@base DotMoveSystem
@help
ドット移動システムの機能を拡張するプラグインです。
次の機能を追加します。
・プレイヤーサイズの変更
・移動速度の調整
・加速度の追加
・慣性の追加
・斜め移動時の壁スライド許可/禁止切り替え
・イベントを押す
・当たり判定付きジャンプ
・地形の半マス当たり判定
・地形の三角マス当たり判定

※ 本プラグインを導入する場合、「DotMoveSystem.js v2.2.1」以降が必要になります。

【使用方法】
■ プレイヤーサイズの変更
プラグインパラメータ「プレイヤー情報」の設定によりプレイヤーのサイズを変更します。

■ 移動速度の調整
任意の移動速度を指定できるようになります。
また、移動に加速度と慣性をつけることができます。
・移動速度の調整
移動ルートの設定で
this.setDpf(移動速度);
と指定します。移動速度は1フレーム当たりの移動速度を指定します。

(例) 1フレーム当たり0.01マス移動する場合
this.setDpf(0.01);

なお、移動速度の調整をキャンセルしてイベントコマンドで指定する移動速度を反映する場合、
this.setDpf(undefined);
と指定します。

■ 加速度の追加
加速度は移動速度の調整を行っている場合のみ有効になります。
加速度を指定するには、
this.setAcc(最大加速度, 影響度);
と指定します。

(例) 20フレーム間加速、最高加速で3倍速の場合
this.setAcc(20, 3);

■ 慣性の追加
慣性を指定するには
this.setInertia(慣性);
と指定します。
慣性には1以上の値を指定してください。
この値が現在の加速度から指定した値だけ毎フレーム減り続けることになります。
1を設定した場合は加速と慣性の増減は同じになります。

(例) 1フレームに2減速する場合
this.setInertia(2);

■ 斜め移動時の壁スライド許可/禁止切り替え
移動ルートのスクリプトで
this.setEnableWallSlide(false);
を指定すると斜め移動による壁ずりを禁止することができます。

また、以下の設定で壁ずりを再度許可することも可能です。
this.setEnableWallSlide(true);

■ イベントを押す
イベントを押す機能を追加します。
押される側のイベントのメモ欄またはイベント0ページ目の注釈に
<PushableEvent>
と記載してください。

■ 当たり判定付きジャンプ
当たり判定付きでジャンプを行います。
移動ルートの設定で以下のスクリプトを記述します。
this.smartJump(X軸方向の加算値, Y軸方向の加算値, 最大のジャンプする高さ(省略可), すり抜け有無(省略可));
※最大のジャンプする高さは省略可能です。省略した場合、10が適用されます。
※すり抜け有無は省略可能です。省略した場合、すり抜け無しが適用されます。

(例1) 左方向に2、上方向に3.5ジャンプさせる場合
this.smartJump(2, -3.5);

(例2) 左方向に2、上方向に3.5高さ20でジャンプさせ、すり抜けを行う場合
this.smartJump(2, -3.5, 20, true);

■ 絶対座標での当たり判定付きジャンプ
移動ルートの設定で以下のスクリプトを記述します。
this.smartJumpAbs(X座標, Y座標, 最大のジャンプする高さ(省略可), すり抜け有無(省略可));

(例) X=5, Y=10の座標にジャンプする場合
this.smartJumpAbs(5, 10);

■ 指定した角度と距離による当たり判定付きジャンプ
移動ルートの設定で以下のスクリプトを記述します。
this.smartJumpByDeg(角度, 距離, 最大のジャンプする高さ(省略可), すり抜け有無(省略可));

(例) 角度30度の方向へ2.5マス分ジャンプ留守場合
this.smartJumpByDeg(30, 2.5);

■ 地形の半マス当たり判定
プラグインパラメータ「HalfCollisionMassInfo」を編集することで、
リージョンまたは地形タグをもとに地形の半マスに当たり判定を設定します。

■ 地形の三角マス当たり判定
プラグインパラメータ「TriangleCollisionMassInfo」を編集することで、
リージョンまたは地形タグをもとに地形の三角マスに当たり判定を設定します。

【ライセンス】
このプラグインは、MITライセンスの条件の下で利用可能です。


@param PlayerInfo
@text プレイヤー情報
@type struct<CharacterInfo>
@default {"Width":"1","Height":"1","OffsetX":"0","OffsetY":"0","SlideLengthX":"0.5","SlideLengthY":"0.5","TransferOffsetX":"0","TransferOffsetY":"0"}
@desc
プレイヤーの各種情報を指定します。

@param FollowerInfo
@text フォロワー情報
@type struct<CharacterInfo>
@default {"Width":"1","Height":"1","OffsetX":"0","OffsetY":"0","SlideLengthX":"0.75","SlideLengthY":"0.75","TransferOffsetX":"0","TransferOffsetY":"0"}
@desc
フォロワーの各種情報を指定します。

@param HalfCollisionMassInfo
@text 半マス当たり判定情報
@type struct<HalfCollisionMassInfo>
@default {"UpCollisionRegionId":"0","RightCollisionRegionId":"0","DownCollisionRegionId":"0","LeftCollisionRegionId":"0","UpRightCollisionRegionId":"0","RightDownCollisionRegionId":"0","DownLeftCollisionRegionId":"0","LeftUpCollisionRegionId":"0","UpRightOpenCollisionRegionId":"0","RightDownOpenCollisionRegionId":"0","DownLeftOpenCollisionRegionId":"0","LeftUpOpenCollisionRegionId":"0","UpCollisionTerrainTagId":"0","RightCollisionTerrainTagId":"0","DownCollisionTerrainTagId":"0","LeftCollisionTerrainTagId":"0","UpRightCollisionTerrainTagId":"0","RightDownCollisionTerrainTagId":"0","DownLeftCollisionTerrainTagId":"0","LeftUpCollisionTerrainTagId":"0","UpRightOpenCollisionTerrainTagId":"0","RightDownOpenCollisionTerrainTagId":"0","DownLeftOpenCollisionTerrainTagId":"0","LeftUpOpenCollisionTerrainTagId":"0"}
@desc
半マス当たり判定の各種情報を指定します。各種情報共通で、0が設定された場合は設定を無効化します。

@param TriangleCollisionMassInfo
@text 三角マス当たり判定情報
@type struct<TriangleCollisionMassInfo>
@default {"LeftUpTriangleRegionId":"0","DownLeftTriangleRegionId":"0","RightDownTriangleRegionId":"0","UpRightTriangleRegionId":"0","LeftUpTriangleTerrainTagId":"0","DownLeftTriangleTerrainTagId":"0","RightDownTriangleTerrainTagId":"0","UpRightTriangleTerrainTagId":"0"}
@desc
三角マス当たり判定の各種情報を指定します。各種情報共通で、0が設定された場合は設定を無効化します。
*/
/*~struct~CharacterInfo:ja
@param Width
@text 横幅
@type number
@decimals 2
@default 1
@desc
キャラクターの横幅を指定します。

@param Height
@text 縦幅
@type number
@decimals 2
@default 1
@desc
キャラクターの横幅を指定します。

@param OffsetX
@text オフセットX
@type number
@decimals 2
@min -1000
@default 0
@desc
キャラクターのX軸方向の表示オフセットを指定します。

@param OffsetY
@text オフセットY
@type number
@decimals 2
@min -1000
@default 0
@desc
キャラクターのY軸方向の表示オフセットを指定します。

@param SlideLengthX
@text X軸スライド長
@type number
@decimals 2
@default 0.5
@desc
キャラクターのX軸方向のスライド長を指定します。

@param SlideLengthY
@text Y軸スライド長
@type number
@decimals 2
@default 0.5
@desc
キャラクターのY軸方向のスライド長を指定します。

@param TransferOffsetX
@text 場所移動時X座標オフセット
@type number
@decimals 2
@min -1000
@default 0
@desc
場所移動時のX座標オフセットを指定します。

@param TransferOffsetY
@text 場所移動時Y座標オフセット
@type number
@decimals 2
@min -1000
@default 0
@desc
場所移動時のY座標オフセットを指定します。
*/
/*~struct~HalfCollisionMassInfo:ja
@param UpCollisionRegionId
@text 上方向当たり判定リージョンID
@type number
@min 0
@default 0
@desc
上方向のマス当たり判定のリージョンIDを設定します。

@param RightCollisionRegionId
@text 右方向当たり判定リージョンID
@type number
@min 0
@default 0
@desc
右方向のマス当たり判定のリージョンIDを設定します。

@param DownCollisionRegionId
@text 下方向当たり判定リージョンID
@type number
@min 0
@default 0
@desc
下方向のマス当たり判定のリージョンIDを設定します。

@param LeftCollisionRegionId
@text 左方向当たり判定リージョンID
@type number
@min 0
@default 0
@desc
左方向のマス当たり判定のリージョンIDを設定します。

@param UpRightCollisionRegionId
@text 右上方向当たり判定リージョンID
@type number
@min 0
@default 0
@desc
右上方向のマス当たり判定のリージョンIDを設定します。

@param RightDownCollisionRegionId
@text 右下方向当たり判定リージョンID
@type number
@min 0
@default 0
@desc
右下方向のマス当たり判定のリージョンIDを設定します。

@param DownLeftCollisionRegionId
@text 左下方向当たり判定リージョンID
@type number
@min 0
@default 0
@desc
左下方向のマス当たり判定のリージョンIDを設定します。

@param LeftUpCollisionRegionId
@text 左上方向当たり判定リージョンID
@type number
@min 0
@default 0
@desc
左上方向のマス当たり判定のリージョンIDを設定します。

@param UpRightOpenCollisionRegionId
@text 右上方向空き当たり判定リージョンID
@type number
@min 0
@default 0
@desc
右上方向の空きマス当たり判定のリージョンIDを設定します。

@param RightDownOpenCollisionRegionId
@text 右下方向当たり判定リージョンID
@type number
@min 0
@default 0
@desc
右下方向の空きマス当たり判定のリージョンIDを設定します。

@param DownLeftOpenCollisionRegionId
@text 左下方向当たり判定リージョンID
@type number
@min 0
@default 0
@desc
左下方向の空きマス当たり判定のリージョンIDを設定します。

@param LeftUpOpenCollisionRegionId
@text 左上方向当たり判定リージョンID
@type number
@min 0
@default 0
@desc
左上方向の空きマス当たり判定のリージョンIDを設定します。

@param UpCollisionRegionId
@text 上方向当たり判定リージョンID
@type number
@min 0
@default 0
@desc
上方向のマス当たり判定のリージョンIDを設定します。

@param RightCollisionRegionId
@text 右方向当たり判定リージョンID
@type number
@min 0
@default 0
@desc
右方向のマス当たり判定のリージョンIDを設定します。

@param DownCollisionRegionId
@text 下方向当たり判定リージョンID
@type number
@min 0
@default 0
@desc
下方向のマス当たり判定のリージョンIDを設定します。

@param LeftCollisionRegionId
@text 左方向当たり判定リージョンID
@type number
@min 0
@default 0
@desc
左方向のマス当たり判定のリージョンIDを設定します。

@param UpRightCollisionRegionId
@text 右上方向当たり判定リージョンID
@type number
@min 0
@default 0
@desc
右上方向のマス当たり判定のリージョンIDを設定します。

@param RightDownCollisionRegionId
@text 右下方向当たり判定リージョンID
@type number
@min 0
@default 0
@desc
右下方向のマス当たり判定のリージョンIDを設定します。

@param DownLeftCollisionRegionId
@text 左下方向当たり判定リージョンID
@type number
@min 0
@default 0
@desc
左下方向のマス当たり判定のリージョンIDを設定します。

@param LeftUpCollisionRegionId
@text 左上方向当たり判定リージョンID
@type number
@min 0
@default 0
@desc
左上方向のマス当たり判定のリージョンIDを設定します。

@param UpRightOpenCollisionRegionId
@text 右上方向空き当たり判定リージョンID
@type number
@min 0
@default 0
@desc
右上方向の空きマス当たり判定のリージョンIDを設定します。

@param RightDownOpenCollisionRegionId
@text 右下方向当たり判定リージョンID
@type number
@min 0
@default 0
@desc
右下方向の空きマス当たり判定のリージョンIDを設定します。

@param DownLeftOpenCollisionRegionId
@text 左下方向当たり判定リージョンID
@type number
@min 0
@default 0
@desc
左下方向の空きマス当たり判定のリージョンIDを設定します。

@param LeftUpOpenCollisionRegionId
@text 左上方向当たり判定リージョンID
@type number
@min 0
@default 0
@desc
左上方向の空きマス当たり判定のリージョンIDを設定します。



@param UpCollisionTerrainTagId
@text 上方向当たり判定地形タグID
@type number
@min 0
@default 0
@desc
上方向のマス当たり判定の地形タグIDを設定します。

@param RightCollisionTerrainTagId
@text 右方向当たり判定地形タグID
@type number
@min 0
@default 0
@desc
右方向のマス当たり判定の地形タグIDを設定します。

@param DownCollisionTerrainTagId
@text 下方向当たり判定地形タグID
@type number
@min 0
@default 0
@desc
下方向のマス当たり判定の地形タグIDを設定します。

@param LeftCollisionTerrainTagId
@text 左方向当たり判定地形タグID
@type number
@min 0
@default 0
@desc
左方向のマス当たり判定の地形タグIDを設定します。

@param UpRightCollisionTerrainTagId
@text 右上方向当たり判定地形タグID
@type number
@min 0
@default 0
@desc
右上方向のマス当たり判定の地形タグIDを設定します。

@param RightDownCollisionTerrainTagId
@text 右下方向当たり判定地形タグID
@type number
@min 0
@default 0
@desc
右下方向のマス当たり判定の地形タグIDを設定します。

@param DownLeftCollisionTerrainTagId
@text 左下方向当たり判定地形タグID
@type number
@min 0
@default 0
@desc
左下方向のマス当たり判定の地形タグIDを設定します。

@param LeftUpCollisionTerrainTagId
@text 左上方向当たり判定地形タグID
@type number
@min 0
@default 0
@desc
左上方向のマス当たり判定の地形タグIDを設定します。

@param UpRightOpenCollisionTerrainTagId
@text 右上方向空き当たり判定地形タグID
@type number
@min 0
@default 0
@desc
右上方向の空きマス当たり判定の地形タグIDを設定します。

@param RightDownOpenCollisionTerrainTagId
@text 右下方向当たり判定地形タグID
@type number
@min 0
@default 0
@desc
右下方向の空きマス当たり判定の地形タグIDを設定します。

@param DownLeftOpenCollisionTerrainTagId
@text 左下方向当たり判定地形タグID
@type number
@min 0
@default 0
@desc
左下方向の空きマス当たり判定の地形タグIDを設定します。

@param LeftUpOpenCollisionTerrainTagId
@text 左上方向当たり判定地形タグID
@type number
@min 0
@default 0
@desc
左上方向の空きマス当たり判定の地形タグIDを設定します。
*/
/*~struct~TriangleCollisionMassInfo:ja
@param LeftUpTriangleRegionId
@text 左上三角当たり判定リージョンID
@type number
@min 0
@default 0
@desc
左上方向の三角マス当たり判定のリージョンIDを設定します。

@param DownLeftTriangleRegionId
@text 左下三角当たり判定リージョンID
@type number
@min 0
@default 0
@desc
左下方向の三角マス当たり判定のリージョンIDを設定します。

@param RightDownTriangleRegionId
@text 右下三角当たり判定リージョンID
@type number
@min 0
@default 0
@desc
右下方向の三角マス当たり判定のリージョンIDを設定します。

@param UpRightTriangleRegionId
@text 右上三角当たり判定リージョンID
@type number
@min 0
@default 0
@desc
右上方向の三角マス当たり判定のリージョンIDを設定します。


@param LeftUpTriangleTerrainTagId
@text 左上方向当たり判定地形タグID
@type number
@min 0
@default 0
@desc
左上方向の三角マス当たり判定の地形タグIDを設定します。

@param DownLeftTriangleTerrainTagId
@text 左下方向当たり判定地形タグID
@type number
@min 0
@default 0
@desc
左下方向の三角マス当たり判定の地形タグIDを設定します。

@param RightDownTriangleTerrainTagId
@text 右下方向当たり判定地形タグID
@type number
@min 0
@default 0
@desc
右下方向の三角マス当たり判定の地形タグIDを設定します。

@param UpRightTriangleTerrainTagId
@text 右上三角当たり判定地形タグID
@type number
@min 0
@default 0
@desc
右上三角方向の三角マス当たり判定の地形タグIDを設定します。
*/
const DotMoveSystem_FunctionExPluginName = document.currentScript ? decodeURIComponent(document.currentScript.src.match(/^.*\/(.+)\.js$/)[1]) : "DotMoveSystem_FunctionEx";
var DotMoveSystem;
(function (DotMoveSystem) {
    var FunctionEx;
    (function (FunctionEx) {
        class PluginParamsParser {
            constructor(predictEnable = true) {
                this._predictEnable = predictEnable;
            }
            static parse(params, typeData = {}, predictEnable = true) {
                return new PluginParamsParser(predictEnable).parse(params, typeData);
            }
            parse(params, typeData = {}) {
                const result = {};
                for (const name in params) {
                    const expandedParam = this.expandParam(params[name]);
                    result[name] = this.convertParam(expandedParam, typeData[name]);
                }
                return result;
            }
            expandParam(strParam, loopCount = 0) {
                if (++loopCount > 255)
                    throw new Error("endless loop error");
                if (strParam.match(/^\s*\[.*\]\s*$/)) {
                    const aryParam = JSON.parse(strParam);
                    return aryParam.map((data) => this.expandParam(data), loopCount + 1);
                }
                else if (strParam.match(/^\s*\{.*\}\s*$/)) {
                    const result = {};
                    const objParam = JSON.parse(strParam);
                    for (const name in objParam) {
                        result[name] = this.expandParam(objParam[name], loopCount + 1);
                    }
                    return result;
                }
                return strParam;
            }
            convertParam(param, type, loopCount = 0) {
                if (++loopCount > 255)
                    throw new Error("endless loop error");
                if (typeof param === "string") {
                    return this.cast(param, type);
                }
                else if (typeof param === "object" && param instanceof Array) {
                    if (!((param == null) || (typeof param === "object" && param instanceof Array))) {
                        throw new Error(`Invalid array type: ${type}`);
                    }
                    return param.map((data, i) => {
                        const dataType = type == null ? undefined : type[i];
                        return this.convertParam(data, dataType, loopCount + 1);
                    });
                }
                else if (typeof param === "object") {
                    if (!((param == null) || (typeof param === "object"))) {
                        throw new Error(`Invalid object type: ${type}`);
                    }
                    const result = {};
                    for (const name in param) {
                        const dataType = type == null ? undefined : type[name];
                        result[name] = this.convertParam(param[name], dataType, loopCount + 1);
                    }
                    return result;
                }
                else {
                    throw new Error(`Invalid param: ${param}`);
                }
            }
            cast(param, type) {
                if (param == null || param === "")
                    return undefined;
                if (type == null)
                    type = "any";
                switch (type) {
                    case "any":
                        if (!this._predictEnable)
                            throw new Error("Predict mode is disable");
                        return this.cast(param, this.predict(param));
                    case "string":
                        return param;
                    case "number":
                        if (param.match(/^\-?\d+\.\d+$/))
                            return parseFloat(param);
                        return parseInt(param);
                    case "boolean":
                        return param === "true";
                    default:
                        throw new Error(`Unknow type: ${type}`);
                }
            }
            predict(param) {
                if (param.match(/^\-?\d+$/) || param.match(/^\-?\d+\.\d+$/)) {
                    return "number";
                }
                else if (param === "true" || param === "false") {
                    return "boolean";
                }
                else {
                    return "string";
                }
            }
        }
        FunctionEx.PluginParamsParser = PluginParamsParser;
        const typeDefine = {
            PlayerInfo: {},
            FollowerInfo: {},
            HalfCollisionMassInfo: {},
            TriangleCollisionMassInfo: {},
        };
        const PP = PluginParamsParser.parse(PluginManager.parameters(DotMoveSystem_FunctionExPluginName), typeDefine);
        /*
         * ● 定数定義
         */
        const LEFT_UP_TRIANGLE_ID = 13;
        const DOWN_LEFT_TRIANGLE_ID = 14;
        const RIGHT_DOWN_TRIANGLE_ID = 15;
        const UP_RIGHT_TRIANGLE_ID = 16;
        const START_TRIANGLE_ID = 13;
        const END_TRIANGLE_ID = 16;
        /*
         * ● 初期化処理
         */
        const _CharacterMover_initialize = DotMoveSystem.CharacterMover.prototype.initialize;
        DotMoveSystem.CharacterMover.prototype.initialize = function (character) {
            _CharacterMover_initialize.call(this, character);
            this._lastDirection = character.direction();
            this._changeDirectionCount = 0;
            this._direction8 = this._character.direction();
        };
        const _Game_CharacterBase_initMembers = Game_CharacterBase.prototype.initMembers;
        Game_CharacterBase.prototype.initMembers = function () {
            _Game_CharacterBase_initMembers.call(this);
            this._acceleration = 0;
            this._inertia = 1;
            this._accelerationPlus = 0;
            this._maxAcceleration = 0;
            this._enableWallSlide = true;
        };
        const _Game_Player_initMembers = Game_Player.prototype.initMembers;
        Game_Player.prototype.initMembers = function () {
            _Game_Player_initMembers.call(this);
            this._width = PP.PlayerInfo.Width;
            this._height = PP.PlayerInfo.Height;
            this._offsetX = PP.PlayerInfo.OffsetX;
            this._offsetY = PP.PlayerInfo.OffsetY;
            this._slideLengthX = PP.PlayerInfo.SlideLengthX;
            this._slideLengthY = PP.PlayerInfo.SlideLengthY;
            this._transferOffsetX = PP.PlayerInfo.TransferOffsetX == null ? 0 : PP.PlayerInfo.TransferOffsetX;
            this._transferOffsetY = PP.PlayerInfo.TransferOffsetX == null ? 0 : PP.PlayerInfo.TransferOffsetX;
            this._enableTransferOffset = true;
        };
        if (!Game_Follower.prototype.hasOwnProperty("initMembers")) {
            Game_Follower.prototype.initMembers = function () {
                Game_Character.prototype.initMembers.call(this);
            };
        }
        const _Game_Follower_initMembers = Game_Follower.prototype.initMembers;
        Game_Follower.prototype.initMembers = function () {
            _Game_Follower_initMembers.call(this);
            this._width = PP.FollowerInfo.Width;
            this._height = PP.FollowerInfo.Height;
            this._offsetX = PP.FollowerInfo.OffsetX;
            this._offsetY = PP.FollowerInfo.OffsetY;
            this._slideLengthX = PP.FollowerInfo.SlideLengthX;
            this._slideLengthY = PP.FollowerInfo.SlideLengthY;
            this._transferOffsetX = PP.FollowerInfo.TransferOffsetX == null ? 0 : PP.FollowerInfo.TransferOffsetX;
            this._transferOffsetY = PP.FollowerInfo.TransferOffsetX == null ? 0 : PP.FollowerInfo.TransferOffsetX;
        };
        /*
         * ● 更新処理
         */
        const _CharacterMover_updateMove = DotMoveSystem.CharacterMover.prototype.updateMove;
        DotMoveSystem.CharacterMover.prototype.updateMove = function () {
            _CharacterMover_updateMove.call(this);
            // TODO: 实现斜向惯性处理
            // this.updateChangeDirection();
        };
        const _Game_CharacterBase_update = Game_CharacterBase.prototype.update;
        Game_CharacterBase.prototype.update = function () {
            if (this.isJumping() && this.isSmartJumping())
                this.updateSmartJump();
            if (this.isNeedUpdateAcceleration())
                this.updateAcceleration();
            this.updateCurrentDpf();
            _Game_CharacterBase_update.call(this);
        };
        /*
         * ● 玩家大小更改功能
         */
        Game_Player.prototype.setEnableTransferOffset = function (bool) {
            this._enableTransferOffset = bool;
        };
        const _Game_Player_reserveTransfer = Game_Player.prototype.reserveTransfer;
        Game_Player.prototype.reserveTransfer = function (mapId, x, y, d, fadeType) {
            _Game_Player_reserveTransfer.call(this, mapId, x, y, d, fadeType);
            this._newX = x + this._transferOffsetX;
            this._newY = y + this._transferOffsetY;
        };
        /*
         * ● 移动速度的调整
         */
        DotMoveSystem.CharacterMover.prototype.updateChangeDirection = function () {
            if (!this._reserveChangeDirection)
                return;
            const direction = this._lastDirection;
            if (direction !== this._character.direction()) {
                this._changeDirectionCount++;
                if (this._changeDirectionCount >= 3) {
                    this._reserveChangeDirection = false;
                    const deg = DotMoveSystem.Degree.fromDirection(direction);
                    const direction4 = deg.toDirection4(this._character.direction());
                    this.setDirection8(direction);
                    this.setDirection(direction4);
                    this._reserveSetDirection = undefined;
                }
            }
        };
        DotMoveSystem.CharacterMover.prototype.setDirection8 = function (direction8) {
            this._direction8 = direction8;
        };
        DotMoveSystem.CharacterMover.prototype.direction8 = function () {
            return this._direction8;
        };
        const _CharacterMover_dotMoveByDeg = DotMoveSystem.CharacterMover.prototype.dotMoveByDeg;
        DotMoveSystem.CharacterMover.prototype.dotMoveByDeg = function (deg, dpf = this._character.distancePerFrame(), opt = { changeDir: true }) {
            if (opt.changeDir) {
                this.changeDirectionWhenDotMove(deg.toDirection8());
            }
            _CharacterMover_dotMoveByDeg.call(this, deg, dpf);
        };
        const _CharacterMover_dotMoveByDirection = DotMoveSystem.CharacterMover.prototype.dotMoveByDirection;
        DotMoveSystem.CharacterMover.prototype.dotMoveByDirection = function (direction, dpf = this._character.distancePerFrame(), opt = {}) {
            const changeDir = opt.changeDir == null ? true : opt.changeDir;
            if (changeDir) {
                this.changeDirectionWhenDotMove(direction);
            }
            _CharacterMover_dotMoveByDirection.call(this, direction, dpf);
        };
        DotMoveSystem.CharacterMover.prototype.changeDirectionWhenDotMove = function (direction) {
            if (this._lastDirection !== direction) {
                this._lastDirection = direction;
                this._changeDirectionCount = 0;
                this._reserveChangeDirection = true;
                this.setDirection8(direction);
                const deg = DotMoveSystem.Degree.fromDirection(direction);
                const direction4 = deg.toDirection4(this._character.direction());
                this.setDirection(direction4);
            }
        };
        Game_CharacterBase.prototype.originDistancePerFrame = Game_CharacterBase.prototype.distancePerFrame;
        Game_CharacterBase.prototype.distancePerFrame = function () {
            if (this._dpf == null)
                return this.originDistancePerFrame();
            return this._currentDpf;
        };
        Game_CharacterBase.prototype.updateCurrentDpf = function () {
            const dpf = this.realDpf();
            if (this.isNeedUpdateAcceleration()) {
                const acc = 1 + this._acceleration / this._maxAcceleration * this._accelerationPlus;
                this._currentDpf = dpf * acc;
            }
            else {
                this._currentDpf = dpf;
            }
        };
        Game_CharacterBase.prototype.setDpf = function (dpf) {
            this._dpf = dpf;
        };
        Game_CharacterBase.prototype.setAcc = function (maxAcc, accPlus) {
            this._maxAcceleration = maxAcc;
            this._accelerationPlus = accPlus;
        };
        Game_CharacterBase.prototype.setInertia = function (inertia) {
            this._inertia = inertia;
        };
        Game_CharacterBase.prototype.isNeedUpdateAcceleration = function () {
            return this._dpf != null && this._maxAcceleration !== 0 && this._accelerationPlus !== 0;
        };
        Game_CharacterBase.prototype.updateAcceleration = function () {
            if ($gameMap.isEventRunning()) {
                this.cancelAcceleration();
            }
            else {
                if (this.isMoved()) {
                    if (this._acceleration < this._maxAcceleration) {
                        this._acceleration++;
                    }
                }
                else {
                    if (!this.isMoving() && this._acceleration > 0) {
                        this.inertiaMoveProcess();
                    }
                }
            }
        };
        Game_CharacterBase.prototype.inertiaMoveProcess = function () {
            this._acceleration -= this._inertia;
            if (this._acceleration < 0)
                this._acceleration = 0;
            // TODO: 暫定
            // this.mover().dotMoveByDirection(this.mover().direction8(), { changeDir: false });
            this.mover().dotMoveByDirection(this.direction(), undefined, { changeDir: false });
        };
        Game_CharacterBase.prototype.cancelAcceleration = function () {
            this._acceleration = 0;
        };
        Game_CharacterBase.prototype.realDpf = function () {
            if (this._dpf == null)
                return 0;
            return this._dpf;
        };
        Game_Player.prototype.distancePerFrame = function () {
            if (this.isInVehicle())
                return this.originDistancePerFrame();
            return Game_CharacterBase.prototype.distancePerFrame.call(this);
        };
        Game_Player.prototype.isNeedUpdateAcceleration = function () {
            if (this.isInVehicle())
                return false;
            return Game_CharacterBase.prototype.isNeedUpdateAcceleration.call(this);
        };
        Game_Player.prototype.realDpf = function () {
            if (this._dpf == null)
                return 0;
            if (this.isDashing())
                return this._dpf * 2;
            return this._dpf;
        };
        Game_Player.prototype.inertiaMoveProcess = function () {
            Game_Character.prototype.inertiaMoveProcess.call(this);
            this.checkEventTriggerHere([1, 2]);
            $gameMap.setupStartingEvent();
        };
        Game_Follower.prototype.distancePerFrame = function () {
            if ($gamePlayer.isInVehicle())
                return this.originDistancePerFrame();
            return Game_CharacterBase.prototype.distancePerFrame.call(this);
        };
        Game_Follower.prototype.isNeedUpdateAcceleration = function () {
            if ($gamePlayer.isInVehicle())
                return false;
            return Game_CharacterBase.prototype.isNeedUpdateAcceleration.call(this);
        };
        Game_Follower.prototype.changeFollowerSpeed = function (precedingCharacterFar) {
            if ($gamePlayer.distancePerFrame()) {
                this.setDpf(this.calcFollowerDpf(precedingCharacterFar));
            }
            else {
                this.setDpf(undefined);
                this.setMoveSpeed(this.calcFollowerSpeed(precedingCharacterFar));
            }
        };
        Game_Follower.prototype.calcFollowerDpf = function (precedingCharacterFar) {
            if (precedingCharacterFar >= 2) {
                return $gamePlayer.distancePerFrame() * 2;
            }
            else if (precedingCharacterFar >= 1.5) {
                return $gamePlayer.distancePerFrame();
            }
            else if (precedingCharacterFar >= 1) {
                return $gamePlayer.distancePerFrame() / 2;
            }
            else {
                return 0;
            }
        };
        const _Scene_Map_callMenu = Scene_Map.prototype.callMenu;
        Scene_Map.prototype.callMenu = function () {
            _Scene_Map_callMenu.call(this);
            $gamePlayer.cancelAcceleration();
        };
        /*
         * ● 墙壁滑行许可/禁止切换
         */
        DotMoveSystem.CharacterDotMoveProcess.prototype.dotMoveByDeg = function (deg, dpf = this._character.distancePerFrame()) {
            this._dpf = dpf;
            const direction = deg.toDirection8();
            const distance = this.calcDistance(deg);
            let movedPoint = this.calcMovedPoint(direction, distance);
            const realPoint = this._character.positionPoint();
            const margin = this._character.distancePerFrame() / DotMoveSystem.DotMoveUtils.MOVED_MARGIN_UNIT;
            let moved = true;
            if (this.reachPoint(realPoint, movedPoint, margin))
                moved = false;
            if (moved && !this._character.isEnabledWallSlide()) {
                const targetPoint = realPoint.add(distance);
                if (!this.reachPoint(targetPoint, movedPoint, margin)) {
                    // 执行了坐标修正时，将未修正的轴视为发生了墙壁滑动，取消坐标更新。
                    if (Math.abs(targetPoint.x - movedPoint.x) <= margin) {
                        movedPoint.x = realPoint.x;
                    }
                    if (Math.abs(targetPoint.y - movedPoint.y) <= margin) {
                        movedPoint.y = realPoint.y;
                    }
                    if (this.reachPoint(realPoint, movedPoint, margin))
                        moved = false;
                }
            }
            movedPoint.x = $gameMap.roundX(movedPoint.x);
            movedPoint.y = $gameMap.roundY(movedPoint.y);
            this._character.setPositionPoint(movedPoint);
            return moved;
        };
        Game_CharacterBase.prototype.isEnabledWallSlide = function () {
            return this._enableWallSlide;
        };
        Game_CharacterBase.prototype.setEnableWallSlide = function (bool) {
            this._enableWallSlide = bool;
        };
        /*
         * ● 推动事件
         */
        const _CharacterMover_continuousMoveProcess = DotMoveSystem.CharacterMover.prototype.continuousMoveProcess;
        DotMoveSystem.CharacterMover.prototype.continuousMoveProcess = function () {
            // 在玩家移动之前先移动事件，之后再移动玩家
            this.eventPushProcess();
            _CharacterMover_continuousMoveProcess.call(this);
        };
        const _CharacterMover_dotMoveByDeg_2 = DotMoveSystem.CharacterMover.prototype.dotMoveByDeg;
        DotMoveSystem.CharacterMover.prototype.dotMoveByDeg = function (deg, dpf = this._character.distancePerFrame()) {
            if (this._moverData.stopping)
                return;
            this.eventPushProcess();
            _CharacterMover_dotMoveByDeg_2.call(this, deg, dpf);
        };
        DotMoveSystem.CharacterMover.prototype.eventPushProcess = function () {
            if (!this._character.canPushEvent())
                return;
            const pos = this._character.positionPoint();
            const dpf = this._character.distancePerFrame();
            const margin = dpf / 2;
            const dir = this._character.direction();
            for (const result of this.checkHitCharactersStepDir(pos.x, pos.y, dir, Game_Event)) {
                const event = result.targetObject;
                if (event.isPushableEvent()) {
                    if (!(result.collisionLengthX() >= margin && result.collisionLengthY() >= margin))
                        continue;
                    event.mover().dotMoveByDirection(dir);
                }
            }
        };
        Game_CharacterBase.prototype.canPushEvent = function () {
            return false;
        };
        Game_Player.prototype.canPushEvent = function () {
            return true;
        };
        Game_Event.prototype.isPushableEvent = function () {
            if (this._pushableEvent == null)
                return false;
            return this._pushableEvent;
        };
        const _Game_Event_initialize = Game_Event.prototype.initialize;
        Game_Event.prototype.initialize = function (mapId, eventId) {
            _Game_Event_initialize.call(this, mapId, eventId);
            if (this.event().meta.PushableEvent) {
                this._pushableEvent = true;
            }
            else {
                const values = this.getAnnotationValues(0);
                if (values.PushableEvent) {
                    this._pushableEvent = true;
                }
            }
        };
        /*
         * ● 带当判定的跳跃
         */
        Game_CharacterBase.prototype.smartJump = function (xPlus, yPlus, baseJumpPeak = 10, through = false) {
            this._jumpXPlus = xPlus;
            this._jumpYPlus = yPlus;
            this._smartJumpLastThrough = this._through;
            // 如果已经处于穿行状态，则不将穿行设为无效。
            if (!(this._through && !through)) {
                this._through = through;
            }
            if (Math.abs(xPlus) > Math.abs(yPlus)) {
                if (xPlus !== 0) {
                    this.setDirection(xPlus < 0 ? 4 : 6);
                }
            }
            else {
                if (yPlus !== 0) {
                    this.setDirection(yPlus < 0 ? 8 : 2);
                }
            }
            const distance = Math.round(Math.sqrt(xPlus ** 2 + yPlus ** 2));
            this._jumpPeak = baseJumpPeak + distance - this._moveSpeed;
            this._jumpCount = this._jumpPeak * 2;
            this.resetStopCount();
            this.straighten();
        };
        Game_CharacterBase.prototype.smartJumpByDeg = function (deg, far, baseJumpPeak = 10, through = false) {
            const dis = DotMoveSystem.DotMoveUtils.calcDistance(new DotMoveSystem.Degree(deg), far);
            this.smartJump(dis.x, dis.y, baseJumpPeak, through);
        };
        Game_CharacterBase.prototype.smartJumpAbs = function (x, y, baseJumpPeak = 10, through = false) {
            const xPlus = x - this._realX;
            const yPlus = y - this._realY;
            this.smartJump(xPlus, yPlus, baseJumpPeak, through);
        };
        Game_CharacterBase.prototype.isSmartJumping = function () {
            return this._jumpXPlus != null || this._jumpYPlus != null;
        };
        const _Game_CharacterBase_updateJump = Game_CharacterBase.prototype.updateJump;
        Game_CharacterBase.prototype.updateJump = function () {
            if (!this.isSmartJumping())
                _Game_CharacterBase_updateJump.call(this);
        };
        Game_CharacterBase.prototype.updateSmartJump = function () {
            this._jumpCount--;
            if (this._jumpXPlus !== 0 || this._jumpYPlus !== 0) {
                const x = this._realX + this._jumpXPlus / (this._jumpPeak * 2);
                const y = this._realY + this._jumpYPlus / (this._jumpPeak * 2);
                const dis = new DotMoveSystem.DotMovePoint(x - this._realX, y - this._realY);
                const zero = new DotMoveSystem.DotMovePoint();
                this.mover().dotMoveByDeg(zero.calcDeg(dis), zero.calcFar(dis));
            }
            if (this._jumpCount === 0) {
                this._jumpXPlus = undefined;
                this._jumpYPlus = undefined;
                this._through = this._smartJumpLastThrough;
                this.setPosition(this._realX, this._realY);
            }
        };
        Game_Player.prototype.smartJump = function (xPlus, yPlus, baseJumpPeak = 10, through = false) {
            Game_Character.prototype.smartJump.call(this, xPlus, yPlus, baseJumpPeak, through);
            for (const follower of this.followers().data()) {
                const targetX = this._realX + xPlus;
                const targetY = this._realY + yPlus;
                follower.smartJumpAbs(targetX, targetY, baseJumpPeak, through);
            }
        };
        Game_Player.prototype.smartJumpAbs = function (x, y, baseJumpPeak = 10, through = false) {
            Game_Character.prototype.smartJumpAbs.call(this, x, y, baseJumpPeak, through);
            for (const follower of this.followers().data()) {
                follower.smartJumpAbs(x, y, baseJumpPeak, through);
            }
        };
        Game_Player.prototype.updateSmartJump = function () {
            Game_Character.prototype.updateSmartJump.call(this);
            if (!this.isSmartJumping())
                this.setupCollideTriggerEventIds();
        };
        /*
         * ● 半格通行判定设置
         */
        DotMoveSystem.CharacterCollisionChecker.prototype.getMassRects = function (x, y) {
            switch (this.getMassCollisionType(x, y)) {
                case 1:
                    return [new DotMoveSystem.DotMoveRectangle(x, y, 1, 0.5)];
                case 2:
                    return [new DotMoveSystem.DotMoveRectangle(x + 0.5, y, 0.5, 1)];
                case 3:
                    return [new DotMoveSystem.DotMoveRectangle(x, y + 0.5, 1, 0.5)];
                case 4:
                    return [new DotMoveSystem.DotMoveRectangle(x, y, 0.5, 1)];
                case 5:
                    return [new DotMoveSystem.DotMoveRectangle(x + 0.5, y, 0.5, 0.5)];
                case 6:
                    return [new DotMoveSystem.DotMoveRectangle(x + 0.5, y + 0.5, 0.5, 0.5)];
                case 7:
                    return [new DotMoveSystem.DotMoveRectangle(x, y + 0.5, 0.5, 0.5)];
                case 8:
                    return [new DotMoveSystem.DotMoveRectangle(x, y, 0.5, 0.5)];
                case 9:
                    return [new DotMoveSystem.DotMoveRectangle(x, y, 0.5, 1), new DotMoveSystem.DotMoveRectangle(x + 0.5, y + 0.5, 0.5, 0.5)];
                case 10:
                    return [new DotMoveSystem.DotMoveRectangle(x, y, 0.5, 1), new DotMoveSystem.DotMoveRectangle(x + 0.5, y, 0.5, 0.5)];
                case 11:
                    return [new DotMoveSystem.DotMoveRectangle(x + 0.5, y, 0.5, 1), new DotMoveSystem.DotMoveRectangle(x, y, 0.5, 0.5)];
                case 12:
                    return [new DotMoveSystem.DotMoveRectangle(x + 0.5, y, 0.5, 1), new DotMoveSystem.DotMoveRectangle(x, y + 0.5, 0.5, 0.5)];
            }
            return [new DotMoveSystem.DotMoveRectangle(x, y, 1, 1)];
        };
        DotMoveSystem.CharacterCollisionChecker.prototype.getMassCollisionType = function (x, y) {
            const regionId = $gameMap.regionId(x, y);
            const terrainTag = $gameMap.terrainTag(x, y);
            if (regionId > 0) {
                switch (regionId) {
                    case PP.HalfCollisionMassInfo.UpCollisionRegionId:
                        return 1;
                    case PP.HalfCollisionMassInfo.RightCollisionRegionId:
                        return 2;
                    case PP.HalfCollisionMassInfo.DownCollisionRegionId:
                        return 3;
                    case PP.HalfCollisionMassInfo.LeftCollisionRegionId:
                        return 4;
                    case PP.HalfCollisionMassInfo.UpRightCollisionRegionId:
                        return 5;
                    case PP.HalfCollisionMassInfo.RightDownCollisionRegionId:
                        return 6;
                    case PP.HalfCollisionMassInfo.DownLeftCollisionRegionId:
                        return 7;
                    case PP.HalfCollisionMassInfo.LeftUpCollisionRegionId:
                        return 8;
                    case PP.HalfCollisionMassInfo.UpRightOpenCollisionRegionId:
                        return 9;
                    case PP.HalfCollisionMassInfo.RightDownOpenCollisionRegionId:
                        return 10;
                    case PP.HalfCollisionMassInfo.DownLeftOpenCollisionRegionId:
                        return 11;
                    case PP.HalfCollisionMassInfo.LeftUpOpenCollisionRegionId:
                        return 12;
                    case PP.TriangleCollisionMassInfo.LeftUpTriangleRegionId:
                        return LEFT_UP_TRIANGLE_ID;
                    case PP.TriangleCollisionMassInfo.DownLeftTriangleRegionId:
                        return DOWN_LEFT_TRIANGLE_ID;
                    case PP.TriangleCollisionMassInfo.RightDownTriangleRegionId:
                        return RIGHT_DOWN_TRIANGLE_ID;
                    case PP.TriangleCollisionMassInfo.UpRightTriangleRegionId:
                        return UP_RIGHT_TRIANGLE_ID;
                }
            }
            if (terrainTag > 0) {
                switch (terrainTag) {
                    case PP.HalfCollisionMassInfo.UpCollisionTerrainTagId:
                        return 1;
                    case PP.HalfCollisionMassInfo.RightCollisionTerrainTagId:
                        return 2;
                    case PP.HalfCollisionMassInfo.DownCollisionTerrainTagId:
                        return 3;
                    case PP.HalfCollisionMassInfo.LeftCollisionTerrainTagId:
                        return 4;
                    case PP.HalfCollisionMassInfo.UpRightCollisionTerrainTagId:
                        return 5;
                    case PP.HalfCollisionMassInfo.RightDownCollisionTerrainTagId:
                        return 6;
                    case PP.HalfCollisionMassInfo.DownLeftCollisionTerrainTagId:
                        return 7;
                    case PP.HalfCollisionMassInfo.LeftUpCollisionTerrainTagId:
                        return 8;
                    case PP.HalfCollisionMassInfo.UpRightOpenCollisionTerrainTagId:
                        return 9;
                    case PP.HalfCollisionMassInfo.RightDownOpenCollisionTerrainTagId:
                        return 10;
                    case PP.HalfCollisionMassInfo.DownLeftOpenCollisionTerrainTagId:
                        return 11;
                    case PP.HalfCollisionMassInfo.LeftUpOpenCollisionTerrainTagId:
                        return 12;
                    case PP.TriangleCollisionMassInfo.LeftUpTriangleTerrainTagId:
                        return LEFT_UP_TRIANGLE_ID;
                    case PP.TriangleCollisionMassInfo.DownLeftTriangleTerrainTagId:
                        return DOWN_LEFT_TRIANGLE_ID;
                    case PP.TriangleCollisionMassInfo.RightDownTriangleTerrainTagId:
                        return RIGHT_DOWN_TRIANGLE_ID;
                    case PP.TriangleCollisionMassInfo.UpRightTriangleTerrainTagId:
                        return UP_RIGHT_TRIANGLE_ID;
                }
            }
            return 0;
        };
        const _CharacterCollisionChecker_isNoTargetMass = DotMoveSystem.CharacterCollisionChecker.prototype.isNoCheckMass;
        DotMoveSystem.CharacterCollisionChecker.prototype.isNoCheckMass = function (ix, iy, d, massRange) {
            if (this.getMassCollisionType(ix, iy) >= 1 && this.getMassCollisionType(ix, iy) <= END_TRIANGLE_ID) {
                return false;
            }
            return _CharacterCollisionChecker_isNoTargetMass.call(this, ix, iy, d, massRange);
        };
        DotMoveSystem.CharacterCollisionChecker.prototype.checkCollisionMass = function (subjectRect, d, ix, iy) {
            const results = [];
            if (!this.checkPassMass(ix, iy, d)) {
                const massRects = this.getMassRects(ix, iy);
                for (const massRect of massRects) {
                    const result = this.checkCollidedRect(d, subjectRect.clone(), massRect, new DotMoveSystem.MassInfo(ix, iy));
                    if (result)
                        results.push(result);
                }
            }
            return results;
        };
        DotMoveSystem.CharacterCollisionChecker.prototype.checkPassMass = function (ix, iy, d) {
            if (!$gameMap.isValid(ix, iy)) {
                return false;
            }
            if (this._character.isThrough() || this._character.isDebugThrough()) {
                return true;
            }
            if (this.getMassCollisionType(ix, iy) >= 1 && this.getMassCollisionType(ix, iy) <= END_TRIANGLE_ID) {
                return false;
            }
            const prevPoint = DotMoveSystem.DotMoveUtils.prevPointWithDirection(new DotMoveSystem.DotMovePoint(ix, iy), d);
            if (this.getMassCollisionType(prevPoint.x, prevPoint.y) >= 1 && this.getMassCollisionType(prevPoint.x, prevPoint.y) <= END_TRIANGLE_ID) {
                return true;
            }
            if (!this._character.isMapPassable(prevPoint.x, prevPoint.y, d)) {
                return false;
            }
            return true;
        };
        const _CharacterCollisionChecker_checkCollisionXCliff = DotMoveSystem.CharacterCollisionChecker.prototype.checkCollisionXCliff;
        DotMoveSystem.CharacterCollisionChecker.prototype.checkCollisionXCliff = function (subjectRect, x1, x2, iy, d) {
            if (this.getMassCollisionType(x1, iy) >= 1 && this.getMassCollisionType(x1, iy) <= END_TRIANGLE_ID && this.getMassCollisionType(x2, iy) >= 1 && this.getMassCollisionType(x2, iy) <= END_TRIANGLE_ID) {
                return [];
            }
            return _CharacterCollisionChecker_checkCollisionXCliff.call(this, subjectRect, x1, x2, iy, d);
        };
        const _CharacterCollisionChecker_checkCollisionYCliff = DotMoveSystem.CharacterCollisionChecker.prototype.checkCollisionYCliff;
        DotMoveSystem.CharacterCollisionChecker.prototype.checkCollisionYCliff = function (subjectRect, y1, y2, ix, d) {
            if (this.getMassCollisionType(ix, y1) >= 1 && this.getMassCollisionType(ix, y1) <= END_TRIANGLE_ID && this.getMassCollisionType(ix, y2) >= 1 && this.getMassCollisionType(ix, y2) <= END_TRIANGLE_ID) {
                return [];
            }
            return _CharacterCollisionChecker_checkCollisionYCliff.call(this, subjectRect, y1, y2, ix, d);
        };
        /*
         * ● 三角格通行判定设置
         */
        class TriangleMassInfo extends DotMoveSystem.MassInfo {
            get type() { return this._type; }
            set type(_type) { this._type = _type; }
            initialize(x, y) {
                super.initialize(x, y);
                this._type = 0;
            }
        }
        FunctionEx.TriangleMassInfo = TriangleMassInfo;
        DotMoveSystem.CharacterCollisionChecker.prototype.calcMassTriangle = function (id, characterRect, direction, ix, iy) {
            switch (id) {
                case LEFT_UP_TRIANGLE_ID:
                    if (direction === 8) {
                        const dx = characterRect.x - ix;
                        const h = 1 - dx;
                        return new DotMoveSystem.DotMoveRectangle(ix, iy, 1, h);
                    }
                    else if (direction === 4) {
                        const dy = characterRect.y - iy;
                        let w = 1 - dy;
                        return new DotMoveSystem.DotMoveRectangle(ix, iy, w, 1);
                    }
                    break;
                case DOWN_LEFT_TRIANGLE_ID:
                    if (direction === 2) {
                        const dx = characterRect.x - ix;
                        const h = 1 - dx;
                        return new DotMoveSystem.DotMoveRectangle(ix, iy + (1 - h), 1, h);
                    }
                    else if (direction === 4) {
                        const dy = characterRect.y2 - iy;
                        const w = dy;
                        return new DotMoveSystem.DotMoveRectangle(ix, iy, w, 1);
                    }
                    break;
                case RIGHT_DOWN_TRIANGLE_ID:
                    if (direction === 6) {
                        const dy = characterRect.y2 - iy;
                        const w = dy;
                        return new DotMoveSystem.DotMoveRectangle(ix + (1 - w), iy, w, 1);
                    }
                    else if (direction === 2) {
                        const dx = characterRect.x2 - ix;
                        const h = dx;
                        return new DotMoveSystem.DotMoveRectangle(ix, iy + (1 - h), 1, h);
                    }
                    break;
                case UP_RIGHT_TRIANGLE_ID:
                    if (direction === 8) {
                        const dx = characterRect.x2 - ix;
                        const h = dx;
                        return new DotMoveSystem.DotMoveRectangle(ix, iy, 1, h);
                    }
                    else if (direction === 6) {
                        const dy = characterRect.y - iy;
                        const w = 1 - dy;
                        return new DotMoveSystem.DotMoveRectangle(ix + (1 - w), iy, w, 1);
                    }
                    break;
            }
            throw new Error(`Calc triangle failed. (id=${id}, direction=${direction})`);
        };
        const _CharacterCollisionChecker_checkCollisionCliff = DotMoveSystem.CharacterCollisionChecker.prototype.checkCollisionCliff;
        DotMoveSystem.CharacterCollisionChecker.prototype.checkCollisionCliff = function (subjectRect, massRange, d) {
            for (let ix = massRange.x; ix < massRange.x2; ix++) {
                for (let iy = massRange.y; iy < massRange.y2; iy++) {
                    const ix2 = $gameMap.roundX(ix);
                    const iy2 = $gameMap.roundX(iy);
                    const id = $gameMap.regionId(ix2, iy2);
                    if (id >= START_TRIANGLE_ID && id <= END_TRIANGLE_ID)
                        return [];
                }
            }
            return _CharacterCollisionChecker_checkCollisionCliff.call(this, subjectRect, massRange, d);
        };
        const _CharacterCollisionChecker_checkCollisionMass = DotMoveSystem.CharacterCollisionChecker.prototype.checkCollisionMass;
        DotMoveSystem.CharacterCollisionChecker.prototype.checkCollisionMass = function (subjectRect, d, ix, iy) {
            const id = this.getMassCollisionType(ix, iy);
            if (this.checkPassMass(ix, iy, d))
                return [];
            // 在三角格的冲突判定中，将 throughIfCollided 设为无效。
            const tmpThroughIfCollided = this._throughIfCollided;
            this._throughIfCollided = false;
            if (id === LEFT_UP_TRIANGLE_ID) {
                return this.checkCollisionMassLeftUp(subjectRect, d, ix, iy);
            }
            else if (id === DOWN_LEFT_TRIANGLE_ID) {
                return this.checkCollisionMassDownLeft(subjectRect, d, ix, iy);
            }
            else if (id === RIGHT_DOWN_TRIANGLE_ID) {
                return this.checkCollisionMassRightDown(subjectRect, d, ix, iy);
            }
            else if (id === UP_RIGHT_TRIANGLE_ID) {
                return this.checkCollisionMassUpRight(subjectRect, d, ix, iy);
            }
            this._throughIfCollided = tmpThroughIfCollided;
            return _CharacterCollisionChecker_checkCollisionMass.call(this, subjectRect, d, ix, iy);
        };
        DotMoveSystem.CharacterCollisionChecker.prototype.checkCollisionMassLeftUp = function (subjectRect, d, ix, iy) {
            const massRect = new DotMoveSystem.DotMoveRectangle(ix, iy, 1, 1);
            const pos = new DotMoveSystem.DotMovePoint(this._origX, this._origY);
            const triangleMassInfo = new TriangleMassInfo(ix, iy);
            const result = this.checkCollidedRect(d, subjectRect.clone(), massRect, triangleMassInfo);
            if (!result)
                return [];
            if (d === 8) {
                if (pos.x < ix) {
                    triangleMassInfo.type = LEFT_UP_TRIANGLE_ID;
                    return [result];
                }
                else {
                    const rect = this.calcMassTriangle(LEFT_UP_TRIANGLE_ID, subjectRect, d, ix, iy);
                    const result2 = this.checkCollidedRect(d, subjectRect.clone(), rect, triangleMassInfo);
                    if (!result2)
                        return [];
                    triangleMassInfo.type = LEFT_UP_TRIANGLE_ID;
                    return [result2];
                }
            }
            else if (d === 6) {
                if (pos.x < ix) {
                    return [result];
                }
                else {
                    return [];
                }
            }
            else if (d === 2) {
                if (pos.y < iy) {
                    return [result];
                }
                else {
                    return [];
                }
            }
            else if (d === 4) {
                if (pos.y < iy) {
                    triangleMassInfo.type = LEFT_UP_TRIANGLE_ID;
                    return [result];
                }
                else {
                    const rect = this.calcMassTriangle(LEFT_UP_TRIANGLE_ID, subjectRect, d, ix, iy);
                    const result2 = this.checkCollidedRect(d, subjectRect.clone(), rect, triangleMassInfo);
                    if (!result2)
                        return [];
                    triangleMassInfo.type = LEFT_UP_TRIANGLE_ID;
                    return [result2];
                }
            }
            return [];
        };
        DotMoveSystem.CharacterCollisionChecker.prototype.checkCollisionMassDownLeft = function (subjectRect, d, ix, iy) {
            const massRect = new DotMoveSystem.DotMoveRectangle(ix, iy, 1, 1);
            const pos = new DotMoveSystem.DotMovePoint(this._origX, this._origY);
            const triangleMassInfo = new TriangleMassInfo(ix, iy);
            const result = this.checkCollidedRect(d, subjectRect.clone(), massRect, triangleMassInfo);
            if (!result)
                return [];
            if (d === 8) {
                if (pos.y + this._character.height() < iy + 1) {
                    return [];
                }
                else {
                    return [result];
                }
            }
            else if (d === 6) {
                if (pos.x < ix) {
                    return [result];
                }
                else {
                    return [];
                }
            }
            else if (d === 2) {
                if (pos.x < ix) {
                    triangleMassInfo.type = DOWN_LEFT_TRIANGLE_ID;
                    return [result];
                }
                else {
                    const rect = this.calcMassTriangle(DOWN_LEFT_TRIANGLE_ID, subjectRect, d, ix, iy);
                    const result2 = this.checkCollidedRect(d, subjectRect.clone(), rect, triangleMassInfo);
                    if (!result2)
                        return [];
                    triangleMassInfo.type = DOWN_LEFT_TRIANGLE_ID;
                    return [result2];
                }
            }
            else if (d === 4) {
                if (pos.y + this._character.height() > iy + 1) {
                    triangleMassInfo.type = DOWN_LEFT_TRIANGLE_ID;
                    return [result];
                }
                else {
                    const rect = this.calcMassTriangle(DOWN_LEFT_TRIANGLE_ID, subjectRect, d, ix, iy);
                    const result2 = this.checkCollidedRect(d, subjectRect.clone(), rect, triangleMassInfo);
                    if (!result2)
                        return [];
                    triangleMassInfo.type = DOWN_LEFT_TRIANGLE_ID;
                    return [result2];
                }
            }
            return [];
        };
        DotMoveSystem.CharacterCollisionChecker.prototype.checkCollisionMassRightDown = function (subjectRect, d, ix, iy) {
            const massRect = new DotMoveSystem.DotMoveRectangle(ix, iy, 1, 1);
            const pos = new DotMoveSystem.DotMovePoint(this._origX, this._origY);
            const triangleMassInfo = new TriangleMassInfo(ix, iy);
            const result = this.checkCollidedRect(d, subjectRect.clone(), massRect, triangleMassInfo);
            if (!result)
                return [];
            if (d === 8) {
                if (pos.y + this._character.height() < iy + 1) {
                    return [];
                }
                else {
                    return [result];
                }
            }
            else if (d === 6) {
                if (pos.y + this._character.height() > iy + 1) {
                    triangleMassInfo.type = RIGHT_DOWN_TRIANGLE_ID;
                    return [result];
                }
                else {
                    const rect = this.calcMassTriangle(RIGHT_DOWN_TRIANGLE_ID, subjectRect, d, ix, iy);
                    const result2 = this.checkCollidedRect(d, subjectRect.clone(), rect, triangleMassInfo);
                    if (!result2)
                        return [];
                    triangleMassInfo.type = RIGHT_DOWN_TRIANGLE_ID;
                    return [result2];
                }
            }
            else if (d === 2) {
                if (pos.x + this._character.width() > ix + 1) {
                    triangleMassInfo.type = RIGHT_DOWN_TRIANGLE_ID;
                    return [result];
                }
                else {
                    const rect = this.calcMassTriangle(RIGHT_DOWN_TRIANGLE_ID, subjectRect, d, ix, iy);
                    const result2 = this.checkCollidedRect(d, subjectRect.clone(), rect, triangleMassInfo);
                    if (!result2)
                        return [];
                    triangleMassInfo.type = RIGHT_DOWN_TRIANGLE_ID;
                    return [result2];
                }
            }
            else if (d === 4) {
                if (pos.x + this._character.width() > ix + 1) {
                    return [result];
                }
                else {
                    return [];
                }
            }
            return [];
        };
        DotMoveSystem.CharacterCollisionChecker.prototype.checkCollisionMassUpRight = function (subjectRect, d, ix, iy) {
            const massRect = new DotMoveSystem.DotMoveRectangle(ix, iy, 1, 1);
            const pos = new DotMoveSystem.DotMovePoint(this._origX, this._origY);
            const triangleMassInfo = new TriangleMassInfo(ix, iy);
            const result = this.checkCollidedRect(d, subjectRect.clone(), massRect, triangleMassInfo);
            if (!result)
                return [];
            if (d === 8) {
                if (pos.x + this._character.width() >= ix + 1) {
                    triangleMassInfo.type = UP_RIGHT_TRIANGLE_ID;
                    return [result];
                }
                else {
                    const rect = this.calcMassTriangle(UP_RIGHT_TRIANGLE_ID, subjectRect, d, ix, iy);
                    const result2 = this.checkCollidedRect(d, subjectRect.clone(), rect, triangleMassInfo);
                    if (!result2)
                        return [];
                    triangleMassInfo.type = UP_RIGHT_TRIANGLE_ID;
                    return [result2];
                }
            }
            else if (d === 6) {
                if (pos.y < iy) {
                    triangleMassInfo.type = UP_RIGHT_TRIANGLE_ID;
                    return [result];
                }
                else {
                    const rect = this.calcMassTriangle(UP_RIGHT_TRIANGLE_ID, subjectRect, d, ix, iy);
                    const result2 = this.checkCollidedRect(d, subjectRect.clone(), rect, triangleMassInfo);
                    if (!result2)
                        return [];
                    triangleMassInfo.type = UP_RIGHT_TRIANGLE_ID;
                    return [result2];
                }
            }
            else if (d === 2) {
                if (pos.y > iy) {
                    return [];
                }
                else {
                    return [result];
                }
            }
            else if (d === 4) {
                if (pos.x + this._character.width() > ix + 1) {
                    return [result];
                }
                else {
                    return [];
                }
            }
            return [];
        };
        DotMoveSystem.CharacterDotMoveProcess.prototype.calcUp = function (dis) {
            const pos = this._character.positionPoint();
            const collisionResults = this.checkCollision(pos.x, pos.y + dis.y, 8);
            if (collisionResults.length >= 1) {
                if (this.checkCollisionResultIsAllTriangleMass(collisionResults, LEFT_UP_TRIANGLE_ID)) {
                    const dis2 = this.calcDistance(DotMoveSystem.Degree.UP_RIGHT);
                    return this.calcUpRight(dis2);
                }
                else if (this.checkCollisionResultIsAllTriangleMass(collisionResults, UP_RIGHT_TRIANGLE_ID)) {
                    const dis2 = this.calcDistance(DotMoveSystem.Degree.LEFT_UP);
                    return this.calcLeftUp(dis2);
                }
            }
            if (this.canSlide(collisionResults, 4)) {
                return this.calcSlideLeftWhenUp(pos, dis, collisionResults);
            }
            else if (this.canSlide(collisionResults, 6)) {
                return this.calcSlideRightWhenUp(pos, dis, collisionResults);
            }
            if (dis.x < 0) {
                return this.calcLeftUpWithoutSlide(dis);
            }
            else {
                return this.calcUpRightWithoutSlide(dis);
            }
        };
        DotMoveSystem.CharacterDotMoveProcess.prototype.calcRight = function (dis) {
            const pos = this._character.positionPoint();
            const collisionResults = this.checkCollision(pos.x + dis.x, pos.y, 6);
            if (collisionResults.length >= 1) {
                if (this.checkCollisionResultIsAllTriangleMass(collisionResults, UP_RIGHT_TRIANGLE_ID)) {
                    const dis2 = this.calcDistance(DotMoveSystem.Degree.RIGHT_DOWN);
                    return this.calcRightDown(dis2);
                }
                else if (this.checkCollisionResultIsAllTriangleMass(collisionResults, RIGHT_DOWN_TRIANGLE_ID)) {
                    const dis2 = this.calcDistance(DotMoveSystem.Degree.UP_RIGHT);
                    return this.calcUpRight(dis2);
                }
            }
            if (this.canSlide(collisionResults, 8)) {
                return this.calcSlideUpWhenRight(pos, dis, collisionResults);
            }
            else if (this.canSlide(collisionResults, 2)) {
                return this.calcSlideDownWhenRight(pos, dis, collisionResults);
            }
            if (dis.y < 0) {
                return this.calcUpRightWithoutSlide(dis);
            }
            else {
                return this.calcRightDownWithoutSlide(dis);
            }
        };
        DotMoveSystem.CharacterDotMoveProcess.prototype.calcDown = function (dis) {
            const pos = this._character.positionPoint();
            const collisionResults = this.checkCollision(pos.x, pos.y + dis.y, 2);
            if (collisionResults.length >= 1) {
                if (this.checkCollisionResultIsAllTriangleMass(collisionResults, DOWN_LEFT_TRIANGLE_ID)) {
                    const dis2 = this.calcDistance(DotMoveSystem.Degree.RIGHT_DOWN);
                    return this.calcRightDown(dis2);
                }
                else if (this.checkCollisionResultIsAllTriangleMass(collisionResults, RIGHT_DOWN_TRIANGLE_ID)) {
                    const dis2 = this.calcDistance(DotMoveSystem.Degree.DOWN_LEFT);
                    return this.calcDownLeft(dis2);
                }
            }
            if (this.canSlide(collisionResults, 4)) {
                return this.calcSlideLeftWhenDown(pos, dis, collisionResults);
            }
            else if (this.canSlide(collisionResults, 6)) {
                return this.calcSlideRightWhenDown(pos, dis, collisionResults);
            }
            if (dis.x < 0) {
                return this.calcDownLeftWithoutSlide(dis);
            }
            else {
                return this.calcRightDownWithoutSlide(dis);
            }
        };
        DotMoveSystem.CharacterDotMoveProcess.prototype.calcLeft = function (dis) {
            const pos = this._character.positionPoint();
            const collisionResults = this.checkCollision(pos.x + dis.x, pos.y, 4);
            if (collisionResults.length >= 1) {
                if (this.checkCollisionResultIsAllTriangleMass(collisionResults, LEFT_UP_TRIANGLE_ID)) {
                    const dis2 = this.calcDistance(DotMoveSystem.Degree.DOWN_LEFT);
                    return this.calcDownLeft(dis2);
                }
                else if (this.checkCollisionResultIsAllTriangleMass(collisionResults, DOWN_LEFT_TRIANGLE_ID)) {
                    const dis2 = this.calcDistance(DotMoveSystem.Degree.LEFT_UP);
                    return this.calcLeftUp(dis2);
                }
            }
            if (this.canSlide(collisionResults, 8)) {
                return this.calcSlideUpWhenLeft(pos, dis, collisionResults);
            }
            else if (this.canSlide(collisionResults, 2)) {
                return this.calcSlideDownWhenLeft(pos, dis, collisionResults);
            }
            if (dis.y < 0) {
                return this.calcLeftUpWithoutSlide(dis);
            }
            else {
                return this.calcDownLeftWithoutSlide(dis);
            }
        };
        DotMoveSystem.CharacterDotMoveProcess.prototype.checkCollisionResultIsAllTriangleMass = function (collisionResults, type) {
            return collisionResults.every(res => {
                return (res.targetObject instanceof TriangleMassInfo) && res.targetObject.type === type;
            });
        };
    })(FunctionEx = DotMoveSystem.FunctionEx || (DotMoveSystem.FunctionEx = {}));
})(DotMoveSystem || (DotMoveSystem = {}));
