/*=============================================================================
 SceneCustomMenu.js
----------------------------------------------------------------------------
 (C)2020 Triacontane
 This software is released under the MIT License.
 http://opensource.org/licenses/mit-license.php
----------------------------------------------------------------------------
 Version
 1.53.1 2025/06/19 加算合成を使用しない設定をデフォルトに変更
 1.53.0 2025/06/10 drawItemNameのコメント修正
 1.52.2 2025/05/14 加算合成を使用しない場合の処理を1.50と同様になるよう修正
 1.52.1 2025/03/01 ピクチャの表示優先度を「すべてのウィンドウの下」にしたとき背景よりは上に表示されるよう変更
 1.52.0 2025/02/11 1.51.0でサポートした加算合成を無効にすることで競合回避できる設定を追加
 1.51.5 2025/02/07 アクター変更イベントではフォーカス移動しないよう仕様変更
 1.51.4 2025/02/03 マップ画面でロードしたときに色調やピクチャの情報がロードされない問題を修正
 1.51.3 2025/02/01 セーブデータ作成のプリセットを一覧に指定したとき、本来の数より多くファイル数が表示される問題を修正
 1.51.2 2025/01/18 1.51.0用の競合対策コードを追加
 1.51.1 2025/01/16 1.51.0の修正で公式プラグインExtraImage.jsと併用できなくなっていた問題を修正
 1.51.0 2025/01/11 AnimationByPoint.jsと組み合わせてカスタムメニューでアニメーションを表示できる機能を追加
                   ピクチャを加算合成で表示したとき、背景やウィンドウに対して加算合成されない問題を修正
 1.50.1 2024/11/26 drawEnemyのメソッドで正しく敵キャラ画像が描画されない場合があった問題を修正
 1.50.0 2024/10/25 ボタンイベントのokとcancelがタッチ操作の決定とキャンセルにも反応するよう修正
 1.49.1 2024/10/13 遷移先ウィンドウ識別子が指定されていない場合でも元ウィンドウ選択解除の設定が機能するよう修正
 1.49.0 2024/07/05 スクリプトからセーブを実行して成功したとき自動でウィンドウを再描画するよう修正
 1.48.0 2024/07/04 共通ヘルプテキストが設定されたウィンドウは優先表示するよう仕様変更
 1.47.0 2024/06/09 ウィンドウがアクティブでないときに暗くできる機能を追加
 1.46.1 2024/04/11 戦闘画面以外でもplaceGaugeでTPゲージを表示できるよう修正
 1.46.0 2023/12/07 データ一覧のソートスクリプトを設定する機能を追加
 1.45.0 2023/11/25 セーブファイルの一覧取得と項目描画のプリセットを追加
 1.44.0 2023/11/13 ウィンドウのカーソルを全選択あるいは選択固定状態にできるスイッチを追加
 1.43.0 2023/11/09 すべてのスクリプトでv(n) s(n)が使えるよう修正
 1.42.0 2023/10/03 ヘルプウィンドウを画面上部に設定できる機能を追加
 1.41.0 2023/09/07 メッセージオブジェクトをカスタムシーンごとに保持する仕様に変更
 1.40.1 2023/08/11 1.40.0で追加した機能で、制御文字が使えない問題を修正
 1.40.0 2023/08/08 複数行入力できる項目描画スクリプトのパラメータを別に追加
 1.39.1 2023/08/08 タイトル画面を差し替えた画面でコモンイベントを実行すると初期位置のマップに場所移動してしまう問題を修正
 1.39.0 2023/08/03 タイトル画面やゲームオーバー画面を差し替えたとき、キャンセルボタンは表示されないよう修正
                   ウィンドウ位置のX原点を中央もしくは右にできる機能を追加
                   コマンドウィンドウの選択肢ごとに別々のイベントを設定できる機能を追加
                   ウィンドウのフレームを非表示にできる機能を追加
 1.38.0 2023/06/14 カスタムメニュー表示中、コモンイベントを並列実行できる機能を追加
 1.37.0 2023/06/14 ウィンドウを操作(再描画やフォーカスなど)するプラグインコマンドを追加
 1.36.4 2023/06/14 ウィンドウリフレッシュ時にインデックスが項目数を上回っていたら自動で補正するよう修正
 1.36.3 2023/01/01 PartyCommandScene.jsで戦闘シーンから遷移して戻ると戦闘終了処理が正しく行われない不具合を修正
 1.36.2 2022/12/08 アクティブでないウィンドウのボタンイベントが実行されていた問題を修正
                   パッド操作を考慮しボタン名のオプションをescapeからcancelおよびmenuに変更
 1.36.1 2022/12/06 空のウィンドウリストで決定ボタンを押したときにエラーになる問題を修正
 1.36.0 2022/11/28 ウィンドウのフォントを変更できる機能を追加
 1.35.2 2022/11/26 コマンドリスト、一覧ウィンドウ識別子、一覧取得スクリプトをすべて空にして画面表示するとエラーになる問題を修正
 1.35.1 2022/11/22 1.35.0で戦闘テストを終了したときにエラーになる問題を修正
 1.35.0 2022/11/14 既存シーンをカスタムメニューシーンに自由に差し替えられる機能を追加
 1.34.0 2022/11/03 ピクチャ描画メソッドでピクチャの拡大率を設定できるよう修正
 1.33.3 2022/11/01 1.33.0の修正で空の項目を選択したときにエラーになる可能性がある問題を修正
 1.33.2 2022/10/16 データスクリプトとコマンドリストを併用したウィンドウを一覧ウィンドウに指定した詳細情報ウィンドウでは、コマンドリストの詳細は表示しないよう仕様変更
 1.33.1 2022/10/13 MOG_Weather_EX.jsとの併用で発生しうるエラーに対処
 1.33.0 2022/10/12 データスクリプトとコマンドリストを併用したウィンドウを作成できるよう修正
 1.32.0 2022/09/29 コマンドウィンドウで選択肢ごとに異なる決定SEを演奏できる機能を追加
 1.31.1 2022/09/12 スクリプト「$gameParty.reserveMembers();」を戦闘中に実行すると控えメンバーが取得できない問題を修正
 1.31.0 2022/09/01 項目描画スクリプトの実行結果が文字列を返したとき、その文字列を描画するよう修正
 1.30.1 2022/08/24 カスタムシーン中にコモンイベント等で場所移動が実行された場合は、即座にマップ画面に移動するよう修正
 1.30.0 2022/08/12 背景として表示するスナップ画像のぼかしを無効化する設定を追加
                   ウィンドウごとのアクター切り替えがボタン表示も含めて正常に動作するよう修正
 1.29.1 2022/07/09 1.29.0でページボタンを考慮できていなかったので対応
 1.29.0 2022/07/09 アクター変更時にイベント発火できる機能を追加
 1.28.3 2022/06/05 カスタムメニュー用のシーンクラス、ウィンドウクラスを外部から参照できるよう変更
 1.28.2 2022/05/20 メモ欄の内容を右寄せで描画する凡例を追加
 1.28.1 2022/04/25 前バージョンで追加したカレントシーンの判定方法を変更
 1.28.0 2022/04/20 カスタムシーンクラスをSceneManager配下に保持するよう変更
 1.27.1 2022/04/06 空の項目を選択できるよう仕様変更
 1.27.0 2022/01/05 ウィンドウのテキストカラーを設定できる機能を追加
 1.26.0 2021/12/16 ウィンドウごとに項目の黒い背景を非表示にできる機能を追加
 1.25.0 2021/12/14 ウィンドウ選択中に任意のボタンが押されたときに発生するイベントを登録できる機能を追加
 1.24.1 2021/11/01 描画内容がnullの場合に描画をスキップするよう修正
 1.24.0 2021/09/19 カーソル位置を記憶して画面を開き直したときに復元できる機能を追加
 1.23.0 2021/09/19 ウィンドウカーソルを項目の上に表示できる機能を追加
 1.22.3 2021/09/08 メモ欄から値を取得してピクチャを表示するとき、制御文字を変換するよう修正
 1.22.2 2021/09/07 ウィンドウに角度を付けるパラメータについて制約事項をヘルプに記載
 1.21.1 2021/09/01 メニュー画面にメッセージ表示するタイプのプラグインとの競合対策
 1.20.0 2021/08/26 ウィンドウ選択時の効果音を独自に指定できる機能を追加
                   $gameScreen.update()を呼ぶように変更。画面のフラッシュなど一部画面効果が有効になります。
 1.19.1 2021/08/12 1.19.0の修正の一部が反映されていなかった問題を修正
 1.19.0 2021/08/12 敵キャラの画像を取得するとき、フロントビュー用とサイドビュー用とで取得元が逆になっていた不具合を修正
                   敵キャラやピクチャの画像を表示する際、縦と横の揃えを指定できるパラメータを追加
 1.18.1 2021/08/11 DBのパラメータをウィンドウに表示できる機能を追加
 1.18.0 2021/08/11 敵キャラの画像をウィンドウに表示できる機能を追加
                   メモ欄から取得したテキストをウィンドウに表示できる機能を追加
 1.17.0 2021/06/19 ウィンドウに角度を付けられる機能を追加
 1.16.0 2021/05/29 シーンごとにピクチャの表示優先度を変更できる機能を追加
 1.15.0 2021/05/22 コマンドリストの揃えを指定できる機能を追加
 1.14.4 2021/05/18 一覧ウィンドウを指定しなかった場合やnullで返した場合、単項目表示ウィンドウとして機能するよう修正
 1.14.3 2021/05/15 コマンド直接入力かつフォントサイズを変更した場合に項目の表示位置が不整合になる場合がある問題を修正
 1.14.2 2021/05/15 廃止された一部のプリセットを削除
 1.14.1 2021/05/15 初期表示時にアクターのフェイスグラフィックを表示しようとしたとき、うまく表示されない場合がある問題を修正
 1.14.0 2021/05/14 決定時のイベントで元ウィンドウの選択状態を解除できる機能を追加
 1.13.3 2021/05/12 ウィンドウリストで下にあるウィンドウを『一覧ウィンドウ』に指定するとエラーになる問題を修正
 1.13.2 2021/05/10 ウィンドウ開閉が無効な場合、初期状態で非表示のウィンドウが一瞬表示されてしまう問題を修正
 1.13.1 2021/05/09 ヘルプの誤記、分かりにくい表現の修正
 1.13.0 2021/05/07 戦闘画面からカスタムメニューを呼び出して戻ったときに戦闘状況が初期化されないよう修正
 1.12.2 2021/05/07 メインフォントや項目の高さを変更した場合に項目の表示位置が不整合になる場合がある問題を修正
 1.12.1 2021/05/07 パラメータのシーン20が正常に読み込まれていなかった問題を修正
 1.12.0 2021/05/06 カスタムメニュー画面の呼び出しをプラグインコマンド化
                   ウィンドウが重なったときに背後をマスキングしない設定を追加
                   ヘルプの表示揺れ等修正
 1.11.6 2021/04/18 プリセットのスクリプトをMZ向けに修正
 1.11.5 2021/04/11 1.10.4で解消した問題をキャラクターとフェイスグラフィックにも適用
 1.11.4 2021/04/08 キャッシュされていないピクチャを表示しようとしたとき、表示順序がずれる場合がある問題を修正
 1.11.3 2021/04/08 orderAfterアノテーションを追加
                   コマンドウィンドウの文字列の縦の揃えを中央に変更
                   ヘルプウィンドウの行数変更が反映されない問題を修正
                   相対Y座標ウィンドウを指定したウィンドウの表示位置がズレる場合がある問題を修正
 1.11.2 2021/04/07 シーン情報が歯抜けになっていると以後の情報を読み込まない問題を修正
 1.11.1 2021/04/03 スクリプトに凡例を追加
 1.10.0 2021/03/31 MZで動作するよう修正
 1.9.0 2020/09/21 ウィンドウで選択中の項目オブジェクトを変数に格納できる機能を追加
 1.8.0 2020/08/02 利用可能なシーン数を20に増やした
 1.7.5 2020/07/28 NobleMushroom.jsとの競合を解消
 1.7.4 2020/07/23 1.7.3で修正した一部のリファクタリングを元に戻す
 1.7.3 2020/07/19 1.7.2の修正でパラメータの設定次第で初期ウィンドウから前の画面に戻れなくなる場合がある問題を修正
 1.7.2 2020/07/19 初期ウィンドウでキャンセルしたとき、別のウィンドウ識別子が指定されていたら前の画面に戻らないよう仕様変更
 1.7.1 2020/07/12 1.7.0の修正でパラメータの再設定をしないとコマンドウィンドウの項目が表示されなくなる問題を修正
 1.7.0 2020/07/12 再描画に同一のスイッチを指定した場合に、すべてのウィンドウが再描画されるよう修正
                  通常コマンドリストにも非表示、選択不可でスクリプトを使用できる機能を追加
                  スクリプト実行でエラーになったときにゲームを停止せずエラーログを出力するよう変更
 1.6.2 2020/07/08 マップ画面にピクチャを表示できるスクリプトを追加
 1.6.1 2020/07/06 任意のウィンドウのインデックスをコモンイベントなどから変更できるスクリプトを追加
 1.6.0 2020/06/21 項目描画で指定したメモ欄のピクチャを表示できる機能を追加
 1.5.0 2020/06/21 遷移元シーンの情報を破棄するスクリプトを追加
 1.4.0 2020/06/21 別の一覧ウィンドウの詳細情報を表示するウィンドウの作成を支援する機能を追加
 1.3.0 2020/05/01 各画面に背景画像を指定できる機能を追加
 1.2.2 2020/03/28 プリセットのスクリプトに1件追加
 1.2.1 2020/03/26 スイッチによる再描画実行後、当該スイッチにfalseではなく0が入っていたので修正
 1.2.0 2020/03/26 マスキング機能と使用禁止機能を分離し、代わりにフィルタ機能に統合
                  ヘルプの行数を指定できる機能を追加
                  スクリプトからフォーカスを変更できる機能を追加
                  未キャッシュのフェイスとキャラクターを表示できるよう修正
 1.1.1 2020/03/25 マスキング機能をヘルプ欄にも適用
                  一部のスクリプトのプリセットを修正
 1.1.0 2020/03/24 カーソルが動いたときに発生する「カーソルイベント」を追加
                  選択不可能項目を専用の文字列でマスキングできる機能を追加
                  ヘルプテキストに改行「\n」が使えるよう修正
 1.0.1 2020/03/21 スクリプトの凡例追加とヘルプの微修正
 1.0.0 2020/03/21 初版
----------------------------------------------------------------------------
 [Blog]   : https://triacontane.blogspot.jp/
 [Twitter]: https://twitter.com/triacontane/
 [GitHub] : https://github.com/triacontane/
=============================================================================*/
/*:zh
 * @plugindesc 自定义菜单创建插件
 * @target MZ
 * @url https://github.com/triacontane/RPGMakerMV/tree/mz_master/SceneCustomMenu.js
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 * @author トリアコンタン
 *
 * @param Scene1
 * @text 场景1
 * @desc 用于生成自定义菜单的场景信息。
 * @default {"Id":"Scene_ActorList","UseHelp":"true","HelpRows":"0","InitialEvent":"","WindowList":"[\"{\\\"Id\\\":\\\"member_window\\\",\\\"x\\\":\\\"0\\\",\\\"RelativeWindowIdX\\\":\\\"\\\",\\\"y\\\":\\\"0\\\",\\\"RelativeWindowIdY\\\":\\\"\\\",\\\"width\\\":\\\"480\\\",\\\"height\\\":\\\"0\\\",\\\"ColumnNumber\\\":\\\"1\\\",\\\"RowNumber\\\":\\\"4\\\",\\\"ItemHeight\\\":\\\"111\\\",\\\"CommandList\\\":\\\"\\\",\\\"DataScript\\\":\\\"\\\",\\\"ListWindowId\\\":\\\"\\\",\\\"ListScript\\\":\\\"$gameParty.members(); // パーティメンバー\\\",\\\"FilterScript\\\":\\\"\\\",\\\"MappingScript\\\":\\\"\\\",\\\"ItemDrawScript\\\":\\\"[\\\\\\\"this.drawActorSimpleStatus(item, r.x, r.y, r.width); // アクターのステータス\\\\\\\"]\\\",\\\"IsEnableScript\\\":\\\"\\\",\\\"CommonHelpText\\\":\\\"アクターを選択してください。\\\",\\\"DecisionEvent\\\":\\\"{\\\\\\\"CommandId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"FocusWindowId\\\\\\\":\\\\\\\"confirm\\\\\\\",\\\\\\\"FocusWindowIndex\\\\\\\":\\\\\\\"-1\\\\\\\",\\\\\\\"Script\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchId\\\\\\\":\\\\\\\"\\\\\\\"}\\\",\\\"CancelEvent\\\":\\\"{}\\\",\\\"CursorEvent\\\":\\\"{}\\\",\\\"FontSize\\\":\\\"0\\\",\\\"WindowSkin\\\":\\\"\\\",\\\"VisibleSwitchId\\\":\\\"0\\\",\\\"ShowOpenAnimation\\\":\\\"false\\\",\\\"RefreshSwitchId\\\":\\\"0\\\",\\\"IndexVariableId\\\":\\\"0\\\",\\\"ItemVariableId\\\":\\\"0\\\",\\\"Cancelable\\\":\\\"true\\\",\\\"ActorChangeable\\\":\\\"false\\\",\\\"HiddenNoFocus\\\":\\\"false\\\",\\\"MaskingText\\\":\\\"\\\"}\",\"{\\\"Id\\\":\\\"detail_window\\\",\\\"x\\\":\\\"0\\\",\\\"RelativeWindowIdX\\\":\\\"member_window\\\",\\\"y\\\":\\\"0\\\",\\\"RelativeWindowIdY\\\":\\\"\\\",\\\"width\\\":\\\"0\\\",\\\"height\\\":\\\"300\\\",\\\"ColumnNumber\\\":\\\"1\\\",\\\"RowNumber\\\":\\\"0\\\",\\\"ItemHeight\\\":\\\"0\\\",\\\"CommandList\\\":\\\"\\\",\\\"DataScript\\\":\\\"\\\",\\\"ListWindowId\\\":\\\"member_window\\\",\\\"ListScript\\\":\\\"\\\",\\\"FilterScript\\\":\\\"\\\",\\\"MappingScript\\\":\\\"\\\",\\\"ItemDrawScript\\\":\\\"[\\\\\\\"this.drawFace(item.faceName(), item.faceIndex(), r.x, r.y); // フェイスグラフィック\\\\\\\"]\\\",\\\"IsEnableScript\\\":\\\"\\\",\\\"CommonHelpText\\\":\\\"\\\",\\\"DecisionEvent\\\":\\\"{}\\\",\\\"CancelEvent\\\":\\\"{}\\\",\\\"CursorEvent\\\":\\\"{}\\\",\\\"FontSize\\\":\\\"0\\\",\\\"WindowSkin\\\":\\\"\\\",\\\"VisibleSwitchId\\\":\\\"0\\\",\\\"ShowOpenAnimation\\\":\\\"true\\\",\\\"RefreshSwitchId\\\":\\\"0\\\",\\\"IndexVariableId\\\":\\\"0\\\",\\\"ItemVariableId\\\":\\\"0\\\",\\\"Cancelable\\\":\\\"true\\\",\\\"ActorChangeable\\\":\\\"false\\\",\\\"HiddenNoFocus\\\":\\\"false\\\",\\\"MaskingText\\\":\\\"\\\"}\",\"{\\\"Id\\\":\\\"confirm\\\",\\\"x\\\":\\\"0\\\",\\\"RelativeWindowIdX\\\":\\\"member_window\\\",\\\"y\\\":\\\"0\\\",\\\"RelativeWindowIdY\\\":\\\"detail_window\\\",\\\"width\\\":\\\"130\\\",\\\"height\\\":\\\"0\\\",\\\"ColumnNumber\\\":\\\"1\\\",\\\"RowNumber\\\":\\\"2\\\",\\\"ItemHeight\\\":\\\"36\\\",\\\"CommandList\\\":\\\"[\\\\\\\"{\\\\\\\\\\\\\\\"Text\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"はい\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"VisibleSwitchId\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"EnableSwitchId\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"HelpText\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"CancelChoice\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"false\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"{\\\\\\\\\\\\\\\"Text\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"いいえ\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"VisibleSwitchId\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"EnableSwitchId\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"HelpText\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"CancelChoice\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"true\\\\\\\\\\\\\\\"}\\\\\\\"]\\\",\\\"DataScript\\\":\\\"\\\",\\\"ListScript\\\":\\\"\\\",\\\"FilterScript\\\":\\\"\\\",\\\"MappingScript\\\":\\\"\\\",\\\"ItemDrawScript\\\":\\\"\\\",\\\"IsEnableScript\\\":\\\"\\\",\\\"CommonHelpText\\\":\\\"本当によろしいですか？\\\",\\\"DecisionEvent\\\":\\\"{\\\\\\\"CommandId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"FocusWindowId\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FocusWindowIndex\\\\\\\":\\\\\\\"-1\\\\\\\",\\\\\\\"Script\\\\\\\":\\\\\\\"SceneManager.callCustomMenu('Scene_ActorListNext'); //\\\\\\\",\\\\\\\"SwitchId\\\\\\\":\\\\\\\"\\\\\\\"}\\\",\\\"CancelEvent\\\":\\\"{}\\\",\\\"CursorEvent\\\":\\\"{}\\\",\\\"FontSize\\\":\\\"0\\\",\\\"WindowSkin\\\":\\\"\\\",\\\"VisibleSwitchId\\\":\\\"0\\\",\\\"ShowOpenAnimation\\\":\\\"true\\\",\\\"RefreshSwitchId\\\":\\\"0\\\",\\\"IndexVariableId\\\":\\\"0\\\",\\\"Cancelable\\\":\\\"true\\\",\\\"ActorChangeable\\\":\\\"false\\\",\\\"HiddenNoFocus\\\":\\\"true\\\",\\\"MaskingText\\\":\\\"\\\"}\"]","Panorama":""}
 * @type struct<Scene>
 *
 * @param Scene2
 * @text 场景2
 * @desc 用于生成自定义菜单的场景信息。
 * @default {"Id":"Scene_ActorListNext","UseHelp":"true","InitialEvent":"","WindowList":"[\"{\\\"Id\\\":\\\"window1\\\",\\\"x\\\":\\\"0\\\",\\\"RelativeWindowIdX\\\":\\\"\\\",\\\"y\\\":\\\"0\\\",\\\"RelativeWindowIdY\\\":\\\"\\\",\\\"width\\\":\\\"0\\\",\\\"height\\\":\\\"0\\\",\\\"ColumnNumber\\\":\\\"2\\\",\\\"RowNumber\\\":\\\"0\\\",\\\"ItemHeight\\\":\\\"0\\\",\\\"CommandList\\\":\\\"\\\",\\\"DataScript\\\":\\\"\\\",\\\"ListScript\\\":\\\"$dataClasses.filter(data => !!data); // データベースの職業\\\",\\\"FilterScript\\\":\\\"\\\",\\\"MappingScript\\\":\\\"\\\",\\\"ItemDrawScript\\\":\\\"\\\",\\\"IsEnableScript\\\":\\\"item.meta['value']; // メモ欄に<value>の記述がある\\\",\\\"CommonHelpText\\\":\\\"メモ欄に<value>と書いた職業だけ選択できます。\\\",\\\"DecisionEvent\\\":\\\"{\\\\\\\"CommandId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"FocusWindowId\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FocusWindowIndex\\\\\\\":\\\\\\\"-1\\\\\\\",\\\\\\\"Script\\\\\\\":\\\\\\\"this.popScene(); // 元のシーンに戻る\\\\\\\",\\\\\\\"SwitchId\\\\\\\":\\\\\\\"\\\\\\\"}\\\",\\\"CancelEvent\\\":\\\"{}\\\",\\\"FontSize\\\":\\\"0\\\",\\\"WindowSkin\\\":\\\"\\\",\\\"VisibleSwitchId\\\":\\\"0\\\",\\\"ShowOpenAnimation\\\":\\\"true\\\",\\\"RefreshSwitchId\\\":\\\"0\\\",\\\"IndexVariableId\\\":\\\"0\\\",\\\"Cancelable\\\":\\\"true\\\",\\\"ActorChangeable\\\":\\\"false\\\",\\\"HiddenNoFocus\\\":\\\"false\\\"}\"]"}
 * @type struct<Scene>
 *
 * @param Scene3
 * @text 场景3
 * @desc 用于生成自定义菜单的场景信息。
 * @default {"Id":"Scene_ActorDetail","UseHelp":"true","InitialEvent":"","WindowList":"[\"{\\\"Id\\\":\\\"actor_name\\\",\\\"x\\\":\\\"0\\\",\\\"RelativeWindowIdX\\\":\\\"\\\",\\\"y\\\":\\\"0\\\",\\\"RelativeWindowIdY\\\":\\\"\\\",\\\"width\\\":\\\"420\\\",\\\"height\\\":\\\"0\\\",\\\"ColumnNumber\\\":\\\"1\\\",\\\"RowNumber\\\":\\\"1\\\",\\\"ItemHeight\\\":\\\"0\\\",\\\"CommandList\\\":\\\"\\\",\\\"DataScript\\\":\\\"\\\",\\\"ListScript\\\":\\\"[this._actor]; // メインメニューで選択したアクター\\\",\\\"FilterScript\\\":\\\"\\\",\\\"MappingScript\\\":\\\"\\\",\\\"ItemDrawScript\\\":\\\"[\\\\\\\"this.drawActorSimpleStatus(item, r.x, r.y, r.width); // アクターのステータス\\\\\\\"]\\\",\\\"IsEnableScript\\\":\\\"\\\",\\\"CommonHelpText\\\":\\\"PgUp, PgDnキーでアクターを変更できます。\\\",\\\"DecisionEvent\\\":\\\"{\\\\\\\"CommandId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"FocusWindowId\\\\\\\":\\\\\\\"actor_name\\\\\\\",\\\\\\\"FocusWindowIndex\\\\\\\":\\\\\\\"-1\\\\\\\",\\\\\\\"Script\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchId\\\\\\\":\\\\\\\"\\\\\\\"}\\\",\\\"CancelEvent\\\":\\\"{}\\\",\\\"FontSize\\\":\\\"0\\\",\\\"WindowSkin\\\":\\\"\\\",\\\"VisibleSwitchId\\\":\\\"0\\\",\\\"ShowOpenAnimation\\\":\\\"true\\\",\\\"RefreshSwitchId\\\":\\\"0\\\",\\\"IndexVariableId\\\":\\\"0\\\",\\\"Cancelable\\\":\\\"true\\\",\\\"ActorChangeable\\\":\\\"true\\\",\\\"HiddenNoFocus\\\":\\\"false\\\"}\",\"{\\\"Id\\\":\\\"slot\\\",\\\"x\\\":\\\"0\\\",\\\"RelativeWindowIdX\\\":\\\"\\\",\\\"y\\\":\\\"0\\\",\\\"RelativeWindowIdY\\\":\\\"actor_name\\\",\\\"width\\\":\\\"200\\\",\\\"height\\\":\\\"0\\\",\\\"ColumnNumber\\\":\\\"1\\\",\\\"RowNumber\\\":\\\"0\\\",\\\"ItemHeight\\\":\\\"0\\\",\\\"CommandList\\\":\\\"\\\",\\\"DataScript\\\":\\\"\\\",\\\"ListScript\\\":\\\"this._actor.equipSlots(); // メインメニューで選択したアクターの装備スロット\\\",\\\"FilterScript\\\":\\\"\\\",\\\"MappingScript\\\":\\\"$dataSystem.equipTypes[item]; // 装備スロットIDを装備スロット名称に変換\\\",\\\"ItemDrawScript\\\":\\\"\\\",\\\"IsEnableScript\\\":\\\"\\\",\\\"CommonHelpText\\\":\\\"\\\",\\\"DecisionEvent\\\":\\\"\\\",\\\"CancelEvent\\\":\\\"{}\\\",\\\"FontSize\\\":\\\"0\\\",\\\"WindowSkin\\\":\\\"\\\",\\\"VisibleSwitchId\\\":\\\"0\\\",\\\"ShowOpenAnimation\\\":\\\"true\\\",\\\"RefreshSwitchId\\\":\\\"0\\\",\\\"IndexVariableId\\\":\\\"0\\\",\\\"Cancelable\\\":\\\"true\\\",\\\"ActorChangeable\\\":\\\"true\\\",\\\"HiddenNoFocus\\\":\\\"false\\\"}\",\"{\\\"Id\\\":\\\"equip\\\",\\\"x\\\":\\\"0\\\",\\\"RelativeWindowIdX\\\":\\\"slot\\\",\\\"y\\\":\\\"0\\\",\\\"RelativeWindowIdY\\\":\\\"actor_name\\\",\\\"width\\\":\\\"400\\\",\\\"height\\\":\\\"0\\\",\\\"ColumnNumber\\\":\\\"1\\\",\\\"RowNumber\\\":\\\"0\\\",\\\"ItemHeight\\\":\\\"0\\\",\\\"CommandList\\\":\\\"\\\",\\\"DataScript\\\":\\\"\\\",\\\"ListScript\\\":\\\"this._actor.equips(); // メインメニューで選択したアクターの装備スロットID\\\",\\\"FilterScript\\\":\\\"\\\",\\\"MappingScript\\\":\\\"\\\",\\\"ItemDrawScript\\\":\\\"\\\",\\\"IsEnableScript\\\":\\\"\\\",\\\"CommonHelpText\\\":\\\"\\\",\\\"DecisionEvent\\\":\\\"\\\",\\\"CancelEvent\\\":\\\"{}\\\",\\\"FontSize\\\":\\\"0\\\",\\\"WindowSkin\\\":\\\"\\\",\\\"VisibleSwitchId\\\":\\\"0\\\",\\\"ShowOpenAnimation\\\":\\\"true\\\",\\\"RefreshSwitchId\\\":\\\"0\\\",\\\"IndexVariableId\\\":\\\"0\\\",\\\"Cancelable\\\":\\\"true\\\",\\\"ActorChangeable\\\":\\\"true\\\",\\\"HiddenNoFocus\\\":\\\"false\\\"}\"]"}
 * @type struct<Scene>
 *
 * @param Scene4
 * @text 场景4
 * @desc 用于生成自定义菜单的场景信息。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene5
 * @text 场景5
 * @desc 用于生成自定义菜单的场景信息。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene6
 * @text 场景6
 * @desc 用于生成自定义菜单的场景信息。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene7
 * @text 场景7
 * @desc 用于生成自定义菜单的场景信息。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene8
 * @text 场景8
 * @desc 用于生成自定义菜单的场景信息。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene9
 * @text 场景9
 * @desc 用于生成自定义菜单的场景信息。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene10
 * @text 场景10
 * @desc 用于生成自定义菜单的场景信息。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene11
 * @text 场景11
 * @desc 用于生成自定义菜单的场景信息。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene12
 * @text 场景12
 * @desc 用于生成自定义菜单的场景信息。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene13
 * @text 场景13
 * @desc 用于生成自定义菜单的场景信息。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene14
 * @text 场景14
 * @desc 用于生成自定义菜单的场景信息。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene15
 * @text 场景15
 * @desc 用于生成自定义菜单的场景信息。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene16
 * @text 场景16
 * @desc 用于生成自定义菜单的场景信息。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene17
 * @text 场景17
 * @desc 用于生成自定义菜单的场景信息。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene18
 * @text 场景18
 * @desc 用于生成自定义菜单的场景信息。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene19
 * @text 场景19
 * @desc 用于生成自定义菜单的场景信息。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene20
 * @text 场景20
 * @desc 用于生成自定义菜单的场景信息。
 * @default {}
 * @type struct<Scene>
 *
 * @param ReplacementList
 * @text 场景替换列表
 * @desc 将主菜单替换为指定标识符的自定义菜单。
 * @default []
 * @type struct<ReplacementScene>[]
 *
 * @param NoUseBlendAdd
 * @text 不使用加算合成
 * @desc 图片和动画显示中将无法使用加算合成。启用此设置可能有助于避免冲突。
 * @default true
 * @type boolean
 *
 * @command CALL_SCENE
 * @text 调用场景
 * @desc 调用指定标识符的场景。
 *
 * @arg id
 * @text 场景标识符
 * @desc 要调用的场景标识符。
 * @default Scene_ActorList
 *
 * @command CONTROL_WINDOW
 * @text 窗口操作
 * @desc 通过指定ID来操作窗口。
 *
 * @arg id
 * @text 窗口ID
 * @desc 要操作的窗口ID。
 * @default
 * @type string
 *
 * @arg type
 * @text 操作类型
 * @desc 操作类型。
 * @default refresh
 * @type select
 * @option 重新绘制窗口
 * @value refresh
 * @option 聚焦窗口
 * @value activate
 * @option 更改索引
 * @value select
 *
 * @arg index
 * @text 索引
 * @desc 当操作类型为更改索引时使用的索引值。
 * @default 0
 * @type number
 *
 * @help SceneCustomMenu.js
 *
 * 通过插件参数来定义窗口信息，从而创建独立的菜单界面。
 * 插件预设了一些范例和丰富的脚本预设，可以迅速上手并确认功能。
 * 脚本出错会在开发者工具中显示报错信息。
 * 除此之外，可以通过公共事件来满足更为详细的要求。
 *
 * 创建自定义菜单画面，大概需要遵循以下的步骤。
 * 
 * 1. 定义窗口
 *  在插件参数中对窗口和窗口内容进行定义。
 *  项目内容可以是固定的字符串，也可以从角色数据或数据库中进行读取。
 * 
 * 2. 定义窗口之间的连接
 *  在窗口按下确定键或取消键时，是移动到其他窗口，还是离开界面，
 *  定义类似于这样的窗口联系。
 * 
 * 3. 定义行为
 *  定义在窗口按下确定键或取消键后，执行的脚本或者调用的公共事件。
 *
 * 调用自定义菜单，需要执行以下脚本。也可以使用插件命令进行调用。
 * 
 * SceneManager.callCustomMenu('Scene_ActorList');
 * Scene_ActorList部分为场景设置的场景标识符。
 * 并没有为主菜单的菜单命令加入自定义界面的命令，请配合其他的插件使用。
 *
 * ・脚本
 *
 * 舍弃原场景中的信息。
 * SceneManager.trashScene();
 *
 * 获取指定的窗口实例（进阶向）
 * SceneManager.findCustomMenuWindow('window1');
 *
 * 在地图界面显示图片。
 * SceneManager.showMapPicture(1, '文件名', 0, 0, 0, 100, 100, 255, 1);
 *
 * 判断当前的场景是否为具有指定标识符的自定义场景。
 * SceneManager.isCustomScene('Scene_ActorList')
 *
 * 判断指定ID的窗口是否处于激活状态。
 * SceneManager.isCustomMenuActiveWindow('window1')
 *
 * 获取指定编号的开关或变量值。
 * v(1)
 * s(1)
 *
 * 使用条款：
 * 您可以自由修改和重新分发此插件，无需获得作者许可，且其使用没有任何限制（例如商业用途、成人内容等）。
 * 此插件现在归您所有。
 */

/*~struct~Scene:zh
 *
 * @param Id
 * @text 场景标识符
 * @desc 调用场景时使用的标识符。请指定与其他标识符不重复的字符串。
 * @default Scene_Test
 * @type string
 *
 * @param UseHelp
 * @text 使用帮助窗口
 * @desc 启用时，显示帮助窗口。
 * @default 1
 * @type select
 * @option 不使用
 * @value 0
 * @option 显示在画面下部(MZ默认)
 * @value 1
 * @option 显示在画面上部
 * @value 2
 *
 * @param HelpRows
 * @text 帮助行数
 * @desc 如果要将帮助窗口的行数从默认的2行更改，请指定。
 * @default 0
 * @type number
 *
 * @param InitialEvent
 * @text 初始事件
 * @desc 场景显示瞬间触发的事件。在初始事件指定的窗口中取消操作将退出画面。
 * @default {}
 * @type struct<Event>
 *
 * @param ParallelEventId
 * @text 并行公共事件ID
 * @desc 场景显示期间持续执行的公共事件。请注意性能影响后使用。
 * @default 0
 * @type common_event
 *
 * @param ActorChangeEvent
 * @text 角色更改事件
 * @desc 更改角色瞬间触发的事件。此事件不会更改窗口焦点。
 * @default
 * @type struct<Event>
 *
 * @param WindowList
 * @text 窗口列表
 * @desc 场景中使用的窗口列表。
 * @default []
 * @type struct<Window>[]
 *
 * @param PicturePriority
 * @text 图片显示优先级
 * @desc 设置图片相对于窗口的显示优先级。
 * @default 0
 * @type select
 * @option 最前面
 * @value 0
 * @option 消息窗口下方
 * @value 1
 * @option 所有窗口下方
 * @value 2
 *
 * @param Panorama
 * @text 全景图片
 * @desc 指定背景信息。
 * @default
 * @type struct<Panorama>
 *
 * @param UsePageButtons
 * @text 使用翻页按钮
 * @desc 启用时，显示翻页按钮。
 * @default false
 * @type boolean
 *
 * @param SnapNoFilter
 * @text 禁用背景模糊
 * @desc 指定后，背景快照将不再应用模糊效果。
 * @default false
 * @type boolean
 *
 */

/*~struct~Panorama:zh
 *
 * @param Image
 * @text 图片文件
 * @desc 指定作为背景显示的图片文件。如果未指定，将显示地图的模糊图像。
 * @default
 * @require 1
 * @dir img/parallaxes
 * @type file
 *
 * @param ScrollX
 * @text 滚动X
 * @desc 背景图片的水平滚动速度。
 * @default 0
 * @type number
 *
 * @param ScrollY
 * @text 滚动Y
 * @desc 背景图片的垂直滚动速度。
 * @default 0
 * @type number
 */

/*~struct~Window:zh
 *
 * @param Id
 * @text 窗口标识符
 * @desc 窗口的标识符(ID)。请指定在列表中不与其他标识符重复的字符串。
 * @default window1
 * @type string
 *
 * @param x
 * @text X坐标
 * @desc X坐标。
 * @default 0
 * @type number
 * @min -2000
 *
 * @param RelativeWindowIdX
 * @text 相对X坐标窗口
 * @desc 指定后，X坐标将变为相对于目标窗口的位置。
 * @default
 *
 * @param y
 * @text Y坐标
 * @desc Y坐标。
 * @default 0
 * @type number
 * @min -2000
 *
 * @param RelativeWindowIdY
 * @text 相对Y坐标窗口
 * @desc 指定后，Y坐标将变为相对于目标窗口的位置。
 * @default
 *
 * @param width
 * @text 宽度
 * @desc 宽度。指定0时会适配画面宽度。
 * @default 0
 * @type number
 *
 * @param height
 * @text 高度
 * @desc 高度。指定0时会根据『行数』的设置自动设定。
 * @default 0
 * @type number
 *
 * @param originX
 * @text X轴原点
 * @desc 决定窗口坐标的原点。指定时请同时指定宽度。
 * @default 0
 * @type select
 * @option 左
 * @value 0
 * @option 中央
 * @value 1
 * @option 右
 * @value 2
 *
 * @param ColumnNumber
 * @text 列数
 * @desc 窗口的列数。
 * @default 1
 * @type number
 * @min 1
 *
 * @param RowNumber
 * @text 行数
 * @desc 窗口的行数。用于确定高度。如果指定为 0，则会根据命令数量自动设置高度。
 * @default 0
 * @type number
 *
 * @param Rotation
 * @text 旋转角度
 * @desc 窗口的角度。使用角度制(0-360)指定。有内部滤镜失效的限制。
 * @default 0
 * @type number
 *
 * @param ItemHeight
 * @text 项目高度
 * @desc 每个项目的高度。指定0时使用窗口的默认值。
 * @default 0
 * @type number
 *
 * @param CommandList
 * @text 命令列表
 * @desc 直接指定窗口中显示的项目和显示可否。用于项目从一开始就确定的情况。
 * @type struct<Command>[]
 *
 * @param DataScript
 * @text 数据脚本
 * @desc 通过脚本构建窗口中显示的项目和显示可否。
 *
 * @param ListWindowId
 * @parent DataScript
 * @text 列表窗口标识符
 * @desc 如果是显示其他列表窗口详细信息的窗口，请指定列表的窗口标识符。
 * @default
 *
 * @param ListScript
 * @parent DataScript
 * @text 列表获取脚本
 * @desc 返回项目列表的脚本。也可以从预设中选择。指定了『列表窗口标识符』时无效。
 * @default
 * @type combo
 * @option null; // 无(单项目显示窗口用)
 * @option $gameParty.members(); // 队伍成员
 * @option $gameParty.battleMembers(); // 战斗成员
 * @option $gameParty.reserveMembers(); // 预备成员
 * @option $gameParty.items(); // 持有消耗品
 * @option $gameParty.weapons(); // 持有武器
 * @option $gameParty.armors(); // 持有防具
 * @option $gameParty.equipItems(); // 持有装备品
 * @option $gameParty.allItems(); // 持有物品
 * @option [this._actor]; // 主菜单中选择的角色
 * @option this._actor.weapons(); // 主菜单中选择的角色装备武器
 * @option $gameParty.members()[v(1)].weapons(); // 变量[1]的队伍成员装备武器
 * @option this.createSaveFiles(); // 存档文件列表
 * @option this._actor.armors(); // 主菜单中选择的角色装备防具
 * @option this._actor.equips(); // 主菜单中选择的角色装备品
 * @option this._actor.equipSlots(); // 主菜单中选择的角色装备槽ID
 * @option this._actor.skills(); // 主菜单中选择的角色持有技能
 * @option this._actor.usableSkills(); // 主菜单中选择的角色可用技能
 * @option this._actor.currentClass().learnings; //主菜单中选择角色的职业习得技能
 * @option $dataActors.filter(data => !!data); // 数据库的角色
 * @option $dataClasses.filter(data => !!data); // 数据库的职业
 * @option $dataSkills.filter(data => !!data); // 数据库的技能
 * @option $dataItems.filter(data => !!data); // 数据库的物品
 * @option $dataWeapons.filter(data => !!data); // 数据库的武器
 * @option $dataArmors.filter(data => !!data); // 数据库的防具
 * @option $dataEnemies.filter(data => !!data); // 数据库的敌角色
 * @option $dataTroops.filter(data => !!data); // 数据库的敌群组
 * @option $dataStates.filter(data => !!data); // 数据库的状态
 * @option $dataItems.concat($dataWeapons, $dataArmors).filter(data => !!data); // 物品、武器防具
 * @option $dataSystem.weaponTypes.filter((d, i) => i > 0); // 武器类型
 * @option $dataSystem.armorTypes.filter((d, i) => i > 0); // 防具类型
 * @option $dataSystem.skillTypes.filter((d, i) => i > 0); // 技能类型
 * @option $dataSystem.equipTypes.filter((d, i) => i > 0); // 装备类型
 * @option $dataSystem.elements.filter((d, i) => i > 0); // 属性
 * @option $dataSystem.switches; // 开关名
 * @option $dataSystem.variables; // 变量名
 * @option $dataSystem.params; // 能力值(术语)
 * @option $dataSystem.commands; // 命令(术语)
 * @option $dataSystem.basic; // 基本状态(术语)
 *
 * @param FilterScript
 * @parent DataScript
 * @text 过滤脚本
 * @desc 对项目列表设置显示条件。可以通过变量[item]引用各元素。
 * @default
 * @type combo
 * @option item.meta['value']; // 备注栏有<value>的描述
 * @option item.name.match('value'); // 名称包含value
 * @option item.id > v(10); // ID大于变量[10]的值
 * @option s(parseInt(item.meta['value'])); // <value:n>的开关为ON
 * @option item !== ''; // 除空字符串外
 * @option !!item; // 除null, undefined, 0, 空字符串外
 * @option item.stypeId === v(10); // 技能类型等于变量[10]的值
 * @option item.etypeId === v(10); // 装备类型等于变量[10]的值
 * @option item.wtypeId === v(10); // 武器类型等于变量[10]的值
 * @option item.atypeId === v(10); // 防具类型等于变量[10]的值
 * @option item.itypeId === 1; // 物品类型为[普通物品]
 * @option this._actor.canEquip(item); // 主菜单中选择的角色可以装备
 * @option this._actor.canUse(item); // 主菜单中选择的角色可以使用
 *
 * @param MappingScript
 * @parent DataScript
 * @text 映射脚本
 * @desc 将列表项目转换为其他值。可以通过变量[item]引用各元素。仅在必要时指定。
 * @type combo
 * @option item.actor(); // 从Game_Actor转换为数据库的Actor
 * @option $dataSkills[item.skillId]; // 将习得技能信息转换为数据库的Skill
 * @option $dataSystem.equipTypes[item]; // 将装备槽ID转换为装备槽名称
 *
 * @param SortScript
 * @parent DataScript
 * @text 排序脚本
 * @desc 对列表项目进行排序。变量[a]和变量[b]是用于比较的各元素引用。
 * @type combo
 * @option a.id - b.id; // ID顺序
 * @option a.name.localeCompare(b.name); // 名称顺序
 * @option this.intMeta(a,'order') - this.intMeta(b,'order'); // 备注栏的order顺序
 * @option a.price - b.price; // 价格顺序
 * @option a.params[0] - b.params[0]; // HP顺序
 * @option a.params[1] - b.params[1]; // MP顺序
 * @option a.params[2] - b.params[2]; // 攻击力顺序
 * @option a.params[3] - b.params[3]; // 防御力顺序
 * @option a.params[4] - b.params[4]; // 魔法力顺序
 * @option a.params[5] - b.params[5]; // 魔法防御顺序
 * @option a.params[6] - b.params[6]; // 敏捷性顺序
 * @option a.params[7] - b.params[7]; // 运气顺序
 *
 * @param ItemDrawScript
 * @parent DataScript
 * @text 项目绘制脚本
 * @desc 绘制项目的脚本。可以通过变量[item]引用各元素。省略时会自动绘制。
 * @default []
 * @type combo[]
 * @option this.drawIcon(item.iconIndex, r.x, r.y, r.width); // 图标
 * @option this.drawFace(item.faceName(), item.faceIndex(), r.x, r.y); // 立绘图形
 * @option this.drawCharacter(item.characterName(), item.characterIndex(), r.x, r.y); // 角色
 * @option this.drawActorCharacter(item, r.x + 24, r.y + 48); // 角色图形
 * @option this.drawActorCharacter(this._actor, r.x, r.y); // 主菜单中选择的角色图形
 * @option this.drawActorFace(item, r.x, r.y); // 角色立绘
 * @option this.drawActorName(item, r.x, r.y); // 角色名称
 * @option this.drawActorClass(item, r.x, r.y); // 角色职业
 * @option this.drawActorNickname(item, r.x, r.y); // 角色的称号
 * @option this.drawActorLevel(item, r.x, r.y); // 角色等级
 * @option this.drawActorIcons(item, r.x, r.y); // 角色状态图标
 * @option this.drawActorSimpleStatus(item, r.x, r.y, r.width); // 角色状态
 * @option this.drawEnemy(r.x, r.y, 'center', 'bottom'); // 敌角色图像
 * @option this.drawParam(0, r.x, r.y, 'right'); // DB参数(0:HP 1:MP...)
 * @option this.drawItemName(item, r.x, r.y, r.width); // 物品、技能名称(含图标)
 * @option this.drawText($gameParty.numItems(item), r.x, r.y, r.width, 'right'); // 物品持有数
 * @option this.drawTextEx(`Text:${item.name}`, r.x, r.y, r.width); // 任意文本绘制(含控制字符转换)
 * @option this.drawText(`Text:${item.name}`, r.x, r.y, r.width, 'right'); // 任意文本绘制(无控制字符转换。右对齐)
 * @option this.changeTextColor(ColorManager.textColor(1)); // 文本颜色更改(仅在drawText中有效)
 * @option this.drawText(this.findWindowItem('window1').name, r.x, r.y, r.width); // 在其他窗口选择的项目名
 * @option this.drawNotePicture('noteValue', r.x, r.y, 'left', 'center', 1.0, 1.0); // 绘制指定备注栏的图片
 * @option this.placeActorName(item, r.x, r.y); // 角色名称(战斗用)
 * @option this.placeStateIcon(item, r.x, r.y); // 状态图标(战斗用)
 * @option this.placeGauge(item, 'hp', r.x, r.y); // HP量表(战斗用)
 * @option this.placeBasicGauges(item, r.x, r.y); // 表量组(战斗用)
 * @option this.drawNoteText('noteValue', r.x, r.y); // 绘制指定备注栏的内容
 * @option this.drawNoteText('noteValue', r.x, r.y, 'right'); // 右对齐绘制备注栏内容
 * @option this.drawSavefileInfo(item, r.x, r.y, r.width); // 绘制存档文件内容
 *
 * @param ItemDrawMultiLineScript
 * @parent DataScript
 * @text 绘制脚本(多行)
 * @desc 绘制项目的脚本。可以通过变量[item]引用各元素。用于输入多行脚本时。
 * @default
 * @type multiline_string
 *
 * @param IsEnableScript
 * @parent DataScript
 * @text 可选择脚本
 * @desc 判断项目是否可选择的脚本。可以通过变量[item]引用各元素。
 * @default
 * @type combo
 * @option item.meta['value']; // 备注栏有<value>的描述
 * @option item.name.match('value'); // 名称包含value
 * @option item.id > v(10); // ID大于变量[10]的值
 * @option s(parseInt(item.meta['value'])); // <value:n>的开关为ON
 * @option item !== ''; // 除空字符串外
 * @option !!item; // 除null, undefined, 0, 空字符串外
 * @option item.stypeId === v(10); // 技能类型等于变量[10]的值
 * @option item.etypeId === v(10); // 装备类型等于变量[10]的值
 * @option item.wtypeId === v(10); // 武器类型等于变量[10]的值
 * @option item.atypeId === v(10); // 防具类型等于变量[10]的值
 * @option item.itypeId === 1; // 物品类型为[普通物品]
 * @option this._actor.canEquip(item); // 主菜单中选择的角色可以装备
 * @option this._actor.canUse(item); // 主菜单中选择的角色可以使用
 *
 * @param CommonHelpText
 * @text 通用帮助文本
 * @desc 与选择的项目无关而显示的帮助文本。
 * @default
 * @type multiline_string
 *
 * @param DecisionEvent
 * @text 确定事件
 * @desc 项目被确定的瞬间发生的事件。
 * @default {}
 * @type struct<Event>
 *
 * @param CancelEvent
 * @text 取消事件
 * @desc 被取消的瞬间发生的事件。
 * @default {}
 * @type struct<Event>
 *
 * @param CursorEvent
 * @text 光标事件
 * @desc 光标移动的瞬间发生的事件。此事件不会改变窗口的焦点。
 * @default {}
 * @type struct<Event>
 *
 * @param ButtonEvent
 * @text 按钮事件
 * @desc 指定按钮被按下的瞬间发生的事件。
 * @default []
 * @type struct<ButtonEvent>[]
 *
 * @param FontSize
 * @text 字体大小
 * @desc 默认字体大小。指定为0时，将与其他窗口使用相同大小。
 * @default 0
 * @type number
 *
 * @param FontFace
 * @text 字体
 * @desc 更改窗口字体。不提供字体文件加载功能，请自行准备。
 * @default
 *
 * @param OverlapOther
 * @text 覆盖其他窗口
 * @desc 当与其他窗口重叠显示时，不再对背后的窗口进行遮罩处理。
 * @default false
 * @type boolean
 *
 * @param WindowSkin
 * @text 窗口皮肤
 * @desc 窗口皮肤。未指定时将使用默认设置。
 * @default
 * @require 1
 * @dir img/system
 * @type file
 *
 * @param VisibleSwitchId
 * @text 显示开关ID
 * @desc 仅在指定开关为ON时才在画面上显示。
 * @default 0
 * @type switch
 *
 * @param ShowOpenAnimation
 * @text 显示开闭动画
 * @desc 显示窗口的开闭动画。
 * @default true
 * @type boolean
 *
 * @param RefreshSwitchId
 * @text 重绘开关
 * @desc 当指定开关变为ON时，窗口将重新绘制。重绘后，开关会自动变为OFF。
 * @default 0
 * @type switch
 *
 * @param IndexVariableId
 * @text 索引存储变量
 * @desc 始终存储光标索引的变量。
 * @default 0
 * @type variable
 *
 * @param RememberIndex
 * @text 记住索引
 * @desc 如果指定了索引存储变量，打开画面时会用变量值恢复光标的初始值。
 * @default false
 * @type boolean
 *
 * @param ItemVariableId
 * @text 选中项存储变量
 * @desc 始终存储选中项目对象的变量。由于存储的是数值以外的对象，请注意处理。
 * @default 0
 * @type variable
 *
 * @param Cancelable
 * @text 可取消
 * @desc 启用后，可以取消窗口。
 * @default true
 * @type boolean
 *
 * @param PopCancel
 * @text 返回场景取消
 * @desc 启用后，如果这是第一个窗口，取消窗口时会返回到上一个场景。
 * @default true
 * @type boolean
 *
 * @param ActorChangeable
 * @text 可更改角色
 * @desc 启用后，可以通过PageUp、PageDown来切换角色。
 * @default false
 * @type boolean
 *
 * @param HiddenNoFocus
 * @text 非焦点时隐藏
 * @desc 启用后，当窗口没有焦点时，窗口将隐藏。
 * @default false
 * @type boolean
 *
 * @param DarkNoFocus
 * @text 非焦点时变暗
 * @desc 启用后，当窗口没有焦点时，窗口内容会变暗。
 * @default false
 * @type boolean
 *
 * @param MaskingText
 * @text 遮罩文本
 * @desc 当命令被隐藏时，不会消失而是用指定字符串进行遮罩。帮助栏也会被遮罩。
 * @default
 * @type string
 *
 * @param okSound
 * @text 确定音效
 * @desc 选择后，将播放指定的SE来代替通常的确定音效。
 * @default
 * @type struct<AudioSe>
 *
 * @param cursorOverContents
 * @text 光标显示在最前
 * @desc 启用后，窗口光标将显示在项目上方。
 * @default false
 * @type boolean
 *
 * @param noItemBackground
 * @text 不显示项目背景
 * @desc 启用后，项目的黑色背景将不再显示。
 * @default false
 * @type boolean
 *
 * @param noFrame
 * @text 不显示边框
 * @desc 启用后，窗口的边框将不再显示。
 * @default false
 * @type boolean
 *
 * @param textColor
 * @text 文本颜色
 * @desc 绘制字符串的默认颜色。指定控制字符「\c[n]」中的颜色编号。
 * @default 0
 * @type color
 *
 * @param cursorAllSwitchId
 * @text 全选开关ID
 * @desc 当指定开关为ON时，光标将变为全选状态。
 * @default 0
 * @type switch
 *
 * @param cursorFixedSwitchId
 * @text 选择固定开关ID
 * @desc 当指定开关为ON时，光标选择将被固定。
 * @default 0
 * @type switch
 */

/*~struct~AudioSe:zh
 * @param name
 * @text 文件名
 * @desc 文件名称。
 * @default
 * @require 1
 * @dir audio/se/
 * @type file
 *
 * @param volume
 * @text 音量
 * @desc 音量大小。
 * @default 90
 * @type number
 * @min 0
 * @max 100
 *
 * @param pitch
 * @text 音调
 * @desc 音调高低。
 * @default 100
 * @type number
 * @min 50
 * @max 150
 *
 * @param pan
 * @text 左右平衡
 * @desc 左右声像平衡。
 * @default 0
 * @type number
 * @min -100
 * @max 100
 */

/*~struct~Command:zh
 *
 * @param Text
 * @text 项目内容
 * @desc 项目的绘制内容。可以使用图标相关的控制字符。
 * @default value01
 * @type string
 *
 * @param Align
 * @text 项目对齐
 * @desc 项目的对齐方式。
 * @default 0
 * @type select
 * @option 左对齐
 * @value 0
 * @option 居中对齐
 * @value 1
 * @option 右对齐
 * @value 2
 *
 * @param VisibleSwitchId
 * @text 显示开关ID
 * @desc 仅在指定开关为ON时才在画面上显示。
 * @default 0
 * @type switch
 *
 * @param VisibleScript
 * @text 显示脚本
 * @desc 仅在指定脚本为true时才在画面上显示。可以使用变量[item]引用『列表窗口标识符』的选中项。
 * @default
 * @type combo
 * @option item.meta['value']; // 备注栏有<value>的描述
 * @option item.name.match('value'); // 名称包含value
 * @option item.id > v(10); // ID大于变量[10]的值
 * @option s(parseInt(item.meta['value'])); // <value:n>的开关为ON
 * @option item !== ''; // 除空字符串外
 * @option !!item; // 除null, undefined, 0, 空字符串外
 * @option item.stypeId === v(10); // 技能类型等于变量[10]的值
 * @option item.etypeId === v(10); // 装备类型等于变量[10]的值
 * @option item.wtypeId === v(10); // 武器类型等于变量[10]的值
 * @option item.atypeId === v(10); // 防具类型等于变量[10]的值
 * @option item.itypeId === 1; // 物品类型为[普通物品]
 * @option this._actor.canEquip(item); // 主菜单中选择的角色可以装备
 * @option this._actor.canUse(item); // 主菜单中选择的角色可以使用
 *
 * @param EnableSwitchId
 * @text 可选开关ID
 * @desc 仅在指定开关为ON时才能选择。OFF时将禁止选择。
 * @default 0
 * @type switch
 *
 * @param IsEnableScript
 * @text 可选脚本
 * @desc 用于判断项目是否可选的脚本。可以使用变量[item]引用『列表窗口标识符』的选中项。
 * @default
 * @type combo
 * @option item.meta['value']; // 备注栏中有<value>的描述
 * @option item.name.match('value'); // 名称包含value
 * @option item.id > v(10); // ID大于变量[10]的值
 * @option s(parseInt(item.meta['value'])); // <value:n>的开关为ON
 * @option item !== ''; // 除空字符串外
 * @option !!item; // 除null、undefined、0、空字符串外
 * @option item.stypeId === v(10); // 技能类型等于变量[10]的值
 * @option item.etypeId === v(10); // 装备类型等于变量[10]的值
 * @option item.wtypeId === v(10); // 武器类型等于变量[10]的值
 * @option item.atypeId === v(10); // 防具类型等于变量[10]的值
 * @option item.itypeId === 1; // 物品类型为[普通物品]
 * @option this._actor.canEquip(item); // 主菜单中选择的角色可以装备
 * @option this._actor.canUse(item); // 主菜单中选择的角色可以使用
 *
 * @param HelpText
 * @text 帮助文本
 * @desc 如果显示帮助窗口，将显示帮助文本。
 * @default
 * @type multiline_string
 *
 * @param DecisionEvent
 * @text 确定事件
 * @desc 此项目被确定的瞬间发生的事件。如果指定，将优先于通用的确定事件。
 * @default
 * @type struct<Event>
 *
 * @param CancelChoice
 * @text 取消选项
 * @desc 选择此项目时发生的事件将变为取消事件。
 * @default false
 * @type boolean
 *
 * @param OkSound
 * @text 确定音效
 * @desc 选择后，将播放指定的SE来代替通常的确定音效。
 * @default
 * @type struct<AudioSe>
 *
 */

/*~struct~ButtonEvent:zh
 *
 * @param Name
 * @text 按钮名
 * @desc 按下时触发事件的按钮名。ok和cancel也会响应触摸操作以及确定和取消。
 * @default
 * @type combo
 * @option ok
 * @option cancel
 * @option menu
 * @option shift
 * @option control
 * @option down
 * @option left
 * @option right
 * @option up
 * @option pageup
 * @option pagedown
 * @option debug
 * @option tab
 *
 * @param Event
 * @text 事件
 * @desc 指定按钮被按下的瞬间发生的事件。
 * @default {}
 * @type struct<Event>
 */

/*~struct~Event:zh
 *
 * @param CommandId
 * @text 公共事件
 * @desc 目标事件发生时执行的公共事件。但是，退出场景时不会执行。
 * @default 0
 * @type common_event
 *
 * @param FocusWindowId
 * @text 窗口标识符
 * @desc 目标事件发生时获得焦点的窗口标识符。如果未指定，将返回到上一个窗口。
 * @default
 * @type string
 *
 * @param FocusWindowIndex
 * @text 光标索引
 * @desc 目标事件发生时获得焦点的窗口的光标索引。如果指定为-1，则不进行操作。
 * @default -1
 * @type number
 * @min -1
 *
 * @param Script
 * @text 脚本
 * @desc 目标事件发生时执行的脚本。
 * @default
 * @type combo
 * @option SceneManager.callCustomMenu('Scene___'); // 移动到另一个自定义菜单
 * @option this.popScene(); // 返回到原场景
 * @option SceneManager.goto(Scene_Map); // 转移到地图画面
 * @option SceneManager.changeWindowFocus('window1'); // 焦点移动到指定窗口
 * @option SceneManager.changeWindowIndex('window1', 1); // 更改指定窗口的索引
 * @option SceneManager.trashScene(); // 丢弃原场景信息
 * @option SceneManager.showMapPicture(1, '', 0, 0, 0, 100, 100, 255, 1); // 在地图画面显示图片
 * @option this.executeSave(v(1)); // 执行保存
 * @option this.executeLoad(v(1)); // 执行读取
 *
 * @param SwitchId
 * @text 开关
 * @desc 目标事件发生时变为ON的开关。
 * @type switch
 *
 * @param Deselect
 * @text 解除原窗口选择
 * @desc 目标事件发生时，解除原本获得焦点的窗口的选择状态。
 * @default false
 * @type boolean
 */

/*~struct~ReplacementScene:zh
 * @param scene
 * @text 替换源场景
 * @desc 要替换为自定义菜单的原始场景。也可以选择地图等，但请注意行为会发生很大变化。
 * @type select
 * @default Scene_Menu
 * @option 标题
 * @value Scene_Title
 * @option 地图
 * @value Scene_Map
 * @option 游戏结束
 * @value Scene_Gameover
 * @option 战斗
 * @value Scene_Battle
 * @option 主菜单
 * @value Scene_Menu
 * @option 物品
 * @value Scene_Item
 * @option 技能
 * @value Scene_Skill
 * @option 装备
 * @value Scene_Equip
 * @option 状态
 * @value Scene_Status
 * @option 选项
 * @value Scene_Options
 * @option 保存
 * @value Scene_Save
 * @option 读取
 * @value Scene_Load
 * @option 游戏结束
 * @value Scene_End
 * @option 商店
 * @value Scene_Shop
 * @option 名字输入
 * @value Scene_Name
 * @option 调试
 * @value Scene_Debug
 *
 * @param customScene
 * @text 自定义菜单场景
 * @desc 指定替换目标的自定义菜单场景的标识符。可以使用控制字符\v[n]。
 * @default
 */

/*:
 * @plugindesc カスタムメニュー作成プラグイン
 * @target MZ
 * @url https://github.com/triacontane/RPGMakerMV/tree/mz_master/SceneCustomMenu.js
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 * @author トリアコンタン
 *
 * @param Scene1
 * @text シーン1
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {"Id":"Scene_ActorList","UseHelp":"true","HelpRows":"0","InitialEvent":"","WindowList":"[\"{\\\"Id\\\":\\\"member_window\\\",\\\"x\\\":\\\"0\\\",\\\"RelativeWindowIdX\\\":\\\"\\\",\\\"y\\\":\\\"0\\\",\\\"RelativeWindowIdY\\\":\\\"\\\",\\\"width\\\":\\\"480\\\",\\\"height\\\":\\\"0\\\",\\\"ColumnNumber\\\":\\\"1\\\",\\\"RowNumber\\\":\\\"4\\\",\\\"ItemHeight\\\":\\\"111\\\",\\\"CommandList\\\":\\\"\\\",\\\"DataScript\\\":\\\"\\\",\\\"ListWindowId\\\":\\\"\\\",\\\"ListScript\\\":\\\"$gameParty.members(); // パーティメンバー\\\",\\\"FilterScript\\\":\\\"\\\",\\\"MappingScript\\\":\\\"\\\",\\\"ItemDrawScript\\\":\\\"[\\\\\\\"this.drawActorSimpleStatus(item, r.x, r.y, r.width); // アクターのステータス\\\\\\\"]\\\",\\\"IsEnableScript\\\":\\\"\\\",\\\"CommonHelpText\\\":\\\"アクターを選択してください。\\\",\\\"DecisionEvent\\\":\\\"{\\\\\\\"CommandId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"FocusWindowId\\\\\\\":\\\\\\\"confirm\\\\\\\",\\\\\\\"FocusWindowIndex\\\\\\\":\\\\\\\"-1\\\\\\\",\\\\\\\"Script\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchId\\\\\\\":\\\\\\\"\\\\\\\"}\\\",\\\"CancelEvent\\\":\\\"{}\\\",\\\"CursorEvent\\\":\\\"{}\\\",\\\"FontSize\\\":\\\"0\\\",\\\"WindowSkin\\\":\\\"\\\",\\\"VisibleSwitchId\\\":\\\"0\\\",\\\"ShowOpenAnimation\\\":\\\"false\\\",\\\"RefreshSwitchId\\\":\\\"0\\\",\\\"IndexVariableId\\\":\\\"0\\\",\\\"ItemVariableId\\\":\\\"0\\\",\\\"Cancelable\\\":\\\"true\\\",\\\"ActorChangeable\\\":\\\"false\\\",\\\"HiddenNoFocus\\\":\\\"false\\\",\\\"MaskingText\\\":\\\"\\\"}\",\"{\\\"Id\\\":\\\"detail_window\\\",\\\"x\\\":\\\"0\\\",\\\"RelativeWindowIdX\\\":\\\"member_window\\\",\\\"y\\\":\\\"0\\\",\\\"RelativeWindowIdY\\\":\\\"\\\",\\\"width\\\":\\\"0\\\",\\\"height\\\":\\\"300\\\",\\\"ColumnNumber\\\":\\\"1\\\",\\\"RowNumber\\\":\\\"0\\\",\\\"ItemHeight\\\":\\\"0\\\",\\\"CommandList\\\":\\\"\\\",\\\"DataScript\\\":\\\"\\\",\\\"ListWindowId\\\":\\\"member_window\\\",\\\"ListScript\\\":\\\"\\\",\\\"FilterScript\\\":\\\"\\\",\\\"MappingScript\\\":\\\"\\\",\\\"ItemDrawScript\\\":\\\"[\\\\\\\"this.drawFace(item.faceName(), item.faceIndex(), r.x, r.y); // フェイスグラフィック\\\\\\\"]\\\",\\\"IsEnableScript\\\":\\\"\\\",\\\"CommonHelpText\\\":\\\"\\\",\\\"DecisionEvent\\\":\\\"{}\\\",\\\"CancelEvent\\\":\\\"{}\\\",\\\"CursorEvent\\\":\\\"{}\\\",\\\"FontSize\\\":\\\"0\\\",\\\"WindowSkin\\\":\\\"\\\",\\\"VisibleSwitchId\\\":\\\"0\\\",\\\"ShowOpenAnimation\\\":\\\"true\\\",\\\"RefreshSwitchId\\\":\\\"0\\\",\\\"IndexVariableId\\\":\\\"0\\\",\\\"ItemVariableId\\\":\\\"0\\\",\\\"Cancelable\\\":\\\"true\\\",\\\"ActorChangeable\\\":\\\"false\\\",\\\"HiddenNoFocus\\\":\\\"false\\\",\\\"MaskingText\\\":\\\"\\\"}\",\"{\\\"Id\\\":\\\"confirm\\\",\\\"x\\\":\\\"0\\\",\\\"RelativeWindowIdX\\\":\\\"member_window\\\",\\\"y\\\":\\\"0\\\",\\\"RelativeWindowIdY\\\":\\\"detail_window\\\",\\\"width\\\":\\\"130\\\",\\\"height\\\":\\\"0\\\",\\\"ColumnNumber\\\":\\\"1\\\",\\\"RowNumber\\\":\\\"2\\\",\\\"ItemHeight\\\":\\\"36\\\",\\\"CommandList\\\":\\\"[\\\\\\\"{\\\\\\\\\\\\\\\"Text\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"はい\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"VisibleSwitchId\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"EnableSwitchId\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"HelpText\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"CancelChoice\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"false\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"{\\\\\\\\\\\\\\\"Text\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"いいえ\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"VisibleSwitchId\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"EnableSwitchId\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"HelpText\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"CancelChoice\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"true\\\\\\\\\\\\\\\"}\\\\\\\"]\\\",\\\"DataScript\\\":\\\"\\\",\\\"ListScript\\\":\\\"\\\",\\\"FilterScript\\\":\\\"\\\",\\\"MappingScript\\\":\\\"\\\",\\\"ItemDrawScript\\\":\\\"\\\",\\\"IsEnableScript\\\":\\\"\\\",\\\"CommonHelpText\\\":\\\"本当によろしいですか？\\\",\\\"DecisionEvent\\\":\\\"{\\\\\\\"CommandId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"FocusWindowId\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FocusWindowIndex\\\\\\\":\\\\\\\"-1\\\\\\\",\\\\\\\"Script\\\\\\\":\\\\\\\"SceneManager.callCustomMenu('Scene_ActorListNext'); //\\\\\\\",\\\\\\\"SwitchId\\\\\\\":\\\\\\\"\\\\\\\"}\\\",\\\"CancelEvent\\\":\\\"{}\\\",\\\"CursorEvent\\\":\\\"{}\\\",\\\"FontSize\\\":\\\"0\\\",\\\"WindowSkin\\\":\\\"\\\",\\\"VisibleSwitchId\\\":\\\"0\\\",\\\"ShowOpenAnimation\\\":\\\"true\\\",\\\"RefreshSwitchId\\\":\\\"0\\\",\\\"IndexVariableId\\\":\\\"0\\\",\\\"Cancelable\\\":\\\"true\\\",\\\"ActorChangeable\\\":\\\"false\\\",\\\"HiddenNoFocus\\\":\\\"true\\\",\\\"MaskingText\\\":\\\"\\\"}\"]","Panorama":""}
 * @type struct<Scene>
 *
 * @param Scene2
 * @text シーン2
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {"Id":"Scene_ActorListNext","UseHelp":"true","InitialEvent":"","WindowList":"[\"{\\\"Id\\\":\\\"window1\\\",\\\"x\\\":\\\"0\\\",\\\"RelativeWindowIdX\\\":\\\"\\\",\\\"y\\\":\\\"0\\\",\\\"RelativeWindowIdY\\\":\\\"\\\",\\\"width\\\":\\\"0\\\",\\\"height\\\":\\\"0\\\",\\\"ColumnNumber\\\":\\\"2\\\",\\\"RowNumber\\\":\\\"0\\\",\\\"ItemHeight\\\":\\\"0\\\",\\\"CommandList\\\":\\\"\\\",\\\"DataScript\\\":\\\"\\\",\\\"ListScript\\\":\\\"$dataClasses.filter(data => !!data); // データベースの職業\\\",\\\"FilterScript\\\":\\\"\\\",\\\"MappingScript\\\":\\\"\\\",\\\"ItemDrawScript\\\":\\\"\\\",\\\"IsEnableScript\\\":\\\"item.meta['value']; // メモ欄に<value>の記述がある\\\",\\\"CommonHelpText\\\":\\\"メモ欄に<value>と書いた職業だけ選択できます。\\\",\\\"DecisionEvent\\\":\\\"{\\\\\\\"CommandId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"FocusWindowId\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FocusWindowIndex\\\\\\\":\\\\\\\"-1\\\\\\\",\\\\\\\"Script\\\\\\\":\\\\\\\"this.popScene(); // 元のシーンに戻る\\\\\\\",\\\\\\\"SwitchId\\\\\\\":\\\\\\\"\\\\\\\"}\\\",\\\"CancelEvent\\\":\\\"{}\\\",\\\"FontSize\\\":\\\"0\\\",\\\"WindowSkin\\\":\\\"\\\",\\\"VisibleSwitchId\\\":\\\"0\\\",\\\"ShowOpenAnimation\\\":\\\"true\\\",\\\"RefreshSwitchId\\\":\\\"0\\\",\\\"IndexVariableId\\\":\\\"0\\\",\\\"Cancelable\\\":\\\"true\\\",\\\"ActorChangeable\\\":\\\"false\\\",\\\"HiddenNoFocus\\\":\\\"false\\\"}\"]"}
 * @type struct<Scene>
 *
 * @param Scene3
 * @text シーン3
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {"Id":"Scene_ActorDetail","UseHelp":"true","InitialEvent":"","WindowList":"[\"{\\\"Id\\\":\\\"actor_name\\\",\\\"x\\\":\\\"0\\\",\\\"RelativeWindowIdX\\\":\\\"\\\",\\\"y\\\":\\\"0\\\",\\\"RelativeWindowIdY\\\":\\\"\\\",\\\"width\\\":\\\"420\\\",\\\"height\\\":\\\"0\\\",\\\"ColumnNumber\\\":\\\"1\\\",\\\"RowNumber\\\":\\\"1\\\",\\\"ItemHeight\\\":\\\"0\\\",\\\"CommandList\\\":\\\"\\\",\\\"DataScript\\\":\\\"\\\",\\\"ListScript\\\":\\\"[this._actor]; // メインメニューで選択したアクター\\\",\\\"FilterScript\\\":\\\"\\\",\\\"MappingScript\\\":\\\"\\\",\\\"ItemDrawScript\\\":\\\"[\\\\\\\"this.drawActorSimpleStatus(item, r.x, r.y, r.width); // アクターのステータス\\\\\\\"]\\\",\\\"IsEnableScript\\\":\\\"\\\",\\\"CommonHelpText\\\":\\\"PgUp, PgDnキーでアクターを変更できます。\\\",\\\"DecisionEvent\\\":\\\"{\\\\\\\"CommandId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"FocusWindowId\\\\\\\":\\\\\\\"actor_name\\\\\\\",\\\\\\\"FocusWindowIndex\\\\\\\":\\\\\\\"-1\\\\\\\",\\\\\\\"Script\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchId\\\\\\\":\\\\\\\"\\\\\\\"}\\\",\\\"CancelEvent\\\":\\\"{}\\\",\\\"FontSize\\\":\\\"0\\\",\\\"WindowSkin\\\":\\\"\\\",\\\"VisibleSwitchId\\\":\\\"0\\\",\\\"ShowOpenAnimation\\\":\\\"true\\\",\\\"RefreshSwitchId\\\":\\\"0\\\",\\\"IndexVariableId\\\":\\\"0\\\",\\\"Cancelable\\\":\\\"true\\\",\\\"ActorChangeable\\\":\\\"true\\\",\\\"HiddenNoFocus\\\":\\\"false\\\"}\",\"{\\\"Id\\\":\\\"slot\\\",\\\"x\\\":\\\"0\\\",\\\"RelativeWindowIdX\\\":\\\"\\\",\\\"y\\\":\\\"0\\\",\\\"RelativeWindowIdY\\\":\\\"actor_name\\\",\\\"width\\\":\\\"200\\\",\\\"height\\\":\\\"0\\\",\\\"ColumnNumber\\\":\\\"1\\\",\\\"RowNumber\\\":\\\"0\\\",\\\"ItemHeight\\\":\\\"0\\\",\\\"CommandList\\\":\\\"\\\",\\\"DataScript\\\":\\\"\\\",\\\"ListScript\\\":\\\"this._actor.equipSlots(); // メインメニューで選択したアクターの装備スロット\\\",\\\"FilterScript\\\":\\\"\\\",\\\"MappingScript\\\":\\\"$dataSystem.equipTypes[item]; // 装備スロットIDを装備スロット名称に変換\\\",\\\"ItemDrawScript\\\":\\\"\\\",\\\"IsEnableScript\\\":\\\"\\\",\\\"CommonHelpText\\\":\\\"\\\",\\\"DecisionEvent\\\":\\\"\\\",\\\"CancelEvent\\\":\\\"{}\\\",\\\"FontSize\\\":\\\"0\\\",\\\"WindowSkin\\\":\\\"\\\",\\\"VisibleSwitchId\\\":\\\"0\\\",\\\"ShowOpenAnimation\\\":\\\"true\\\",\\\"RefreshSwitchId\\\":\\\"0\\\",\\\"IndexVariableId\\\":\\\"0\\\",\\\"Cancelable\\\":\\\"true\\\",\\\"ActorChangeable\\\":\\\"true\\\",\\\"HiddenNoFocus\\\":\\\"false\\\"}\",\"{\\\"Id\\\":\\\"equip\\\",\\\"x\\\":\\\"0\\\",\\\"RelativeWindowIdX\\\":\\\"slot\\\",\\\"y\\\":\\\"0\\\",\\\"RelativeWindowIdY\\\":\\\"actor_name\\\",\\\"width\\\":\\\"400\\\",\\\"height\\\":\\\"0\\\",\\\"ColumnNumber\\\":\\\"1\\\",\\\"RowNumber\\\":\\\"0\\\",\\\"ItemHeight\\\":\\\"0\\\",\\\"CommandList\\\":\\\"\\\",\\\"DataScript\\\":\\\"\\\",\\\"ListScript\\\":\\\"this._actor.equips(); // メインメニューで選択したアクターの装備スロットID\\\",\\\"FilterScript\\\":\\\"\\\",\\\"MappingScript\\\":\\\"\\\",\\\"ItemDrawScript\\\":\\\"\\\",\\\"IsEnableScript\\\":\\\"\\\",\\\"CommonHelpText\\\":\\\"\\\",\\\"DecisionEvent\\\":\\\"\\\",\\\"CancelEvent\\\":\\\"{}\\\",\\\"FontSize\\\":\\\"0\\\",\\\"WindowSkin\\\":\\\"\\\",\\\"VisibleSwitchId\\\":\\\"0\\\",\\\"ShowOpenAnimation\\\":\\\"true\\\",\\\"RefreshSwitchId\\\":\\\"0\\\",\\\"IndexVariableId\\\":\\\"0\\\",\\\"Cancelable\\\":\\\"true\\\",\\\"ActorChangeable\\\":\\\"true\\\",\\\"HiddenNoFocus\\\":\\\"false\\\"}\"]"}
 * @type struct<Scene>
 *
 * @param Scene4
 * @text シーン4
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene5
 * @text シーン5
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene6
 * @text シーン6
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene7
 * @text シーン7
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene8
 * @text シーン8
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene9
 * @text シーン9
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene10
 * @text シーン10
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene11
 * @text シーン11
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene12
 * @text シーン12
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene13
 * @text シーン13
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene14
 * @text シーン14
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene15
 * @text シーン15
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene16
 * @text シーン16
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene17
 * @text シーン17
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene18
 * @text シーン18
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene19
 * @text シーン19
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene20
 * @text シーン20
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param ReplacementList
 * @text シーン差し替えリスト
 * @desc メインメニューを指定した識別子のカスタムメニューに差し替えます。
 * @default []
 * @type struct<ReplacementScene>[]
 *
 * @param NoUseBlendAdd
 * @text 加算合成を使用しない
 * @desc ピクチャやアニメーション表示で加算合成が使えなくなります。設定を有効にすることで競合を回避できる可能性があります。
 * @default true
 * @type boolean
 *
 * @command CALL_SCENE
 * @text シーン呼び出し
 * @desc 指定した識別子のシーンを呼び出します。
 *
 * @arg id
 * @text シーン識別子
 * @desc 呼び出すシーン識別子です。
 * @default Scene_ActorList
 *
 * @command CONTROL_WINDOW
 * @text ウィンドウ操作
 * @desc IDを指定してウィンドウを操作します。
 *
 * @arg id
 * @text ウィンドウID
 * @desc 操作するウィンドウのIDです。
 * @default
 * @type string
 *
 * @arg type
 * @text 操作タイプ
 * @desc 操作種別です。
 * @default refresh
 * @type select
 * @option ウィンドウを再描画
 * @value refresh
 * @option ウィンドウにフォーカス
 * @value activate
 * @option インデックス変更
 * @value select
 *
 * @arg index
 * @text インデックス
 * @desc 操作タイプがインデックス変更の場合に使用するインデックスです。
 * @default 0
 * @type number
 *
 * @help SceneCustomMenu.js
 *
 * パラメータからウィンドウ情報を定義して独自のメニュー画面を作れます。
 * 初期状態で動作するサンプルや豊富なスクリプトのプリセットが用意されていて
 * すぐに動作を確認できます。
 * スクリプトでエラーが発生すると開発者ツールにログが表示されます。
 * また、コモンイベントが使えるので細かい要件にも対応できます。
 *
 * カスタムメニュー画面を作成するには、大まかに以下の手順を踏みます。
 *
 * 1. ウィンドウを定義する
 * 　プラグインパラメータからウィンドウと項目内容を定義します。
 * 　項目内容は固定文字列のほか、データベースやアクターデータ等も指定可能です。
 *
 * 2. ウィンドウ間の繋がりを定義する
 * 　ウィンドウで決定やキャンセルをしたとき、別のウィンドウに移ったり
 * 　画面を出たりするよう、ウィンドウ間の繋がりを定義します。
 *
 * 3. イベントを定義する
 * 　ウィンドウで決定やキャンセルをしたときに実行されるスクリプトや
 * 　コモンイベントの情報を定義します。
 *
 * カスタムメニューを呼び出すには以下のスクリプトを実行します。
 * プラグインコマンドからも呼び出せます。
 * 『Scene_ActorList』の箇所には『シーン識別子』を設定します。
 *
 *  SceneManager.callCustomMenu('Scene_ActorList');
 *
 * メインメニュー画面にカスタムメニューの項目を追加する機能はありません。
 * 既存のプラグイン等と連携させてください。
 *
 * ・スクリプト
 *
 * 遷移元シーンの情報をひとつ破棄します。
 * SceneManager.trashScene();
 *
 * 指定したウィンドウインスタンスを取得します。（上級者向け）
 * SceneManager.findCustomMenuWindow('window1');
 *
 * マップ画面にピクチャを表示します。
 * SceneManager.showMapPicture(1, 'ファイル名', 0, 0, 0, 100, 100, 255, 1);
 *
 * 現在のシーンが指定した識別子のカスタムシーンかどうかを返します。
 * SceneManager.isCustomScene('Scene_ActorList')
 *
 * 指定したIDのウィンドウがアクティブになっているかどうかを返します。
 * SceneManager.isCustomMenuActiveWindow('window1')
 *
 * 指定した番号のスイッチや変数の値を取得します。
 * v(1)
 * s(1)
 *
 * 利用規約：
 *  作者に無断で改変、再配布が可能で、利用形態（商用、18禁利用等）
 *  についても制限はありません。
 *  このプラグインはもうあなたのものです。
 */

/*~struct~Scene:
 *
 * @param Id
 * @text シーン識別子
 * @desc シーンを呼び出す際の識別子です。他の識別子と重複しない文字列を指定してください。
 * @default Scene_Test
 * @type string
 *
 * @param UseHelp
 * @text ヘルプウィンドウ使用
 * @desc 有効にした場合、ヘルプウィンドウを表示します。
 * @default 1
 * @type select
 * @option 使用しない
 * @value 0
 * @option 画面下部に表示(MZデフォルト)
 * @value 1
 * @option 画面上部に表示
 * @value 2
 *
 * @param HelpRows
 * @text ヘルプ行数
 * @desc ヘルプウィンドウの行数をデフォルトの2から変更したい場合に指定してください。
 * @default 0
 * @type number
 *
 * @param InitialEvent
 * @text 初期イベント
 * @desc シーンが表示された瞬間に発生するイベントです。初期イベントに指定したウィンドウでキャンセルすると画面から抜けます。
 * @default {}
 * @type struct<Event>
 *
 * @param ParallelEventId
 * @text 並列コモンイベントID
 * @desc シーンが表示されている間、常に実行され続けるコモンイベントです。パフォーマンスの低下に注意して使ってください。
 * @default 0
 * @type common_event
 *
 * @param ActorChangeEvent
 * @text アクター変更イベント
 * @desc アクターを変更した瞬間に発生するイベントです。このイベントではウィンドウのフォーカスは変更されません。
 * @default
 * @type struct<Event>
 *
 * @param WindowList
 * @text ウィンドウ一覧
 * @desc シーンで使用されるウィンドウの一覧です。
 * @default []
 * @type struct<Window>[]
 *
 * @param PicturePriority
 * @text ピクチャ表示優先度
 * @desc ピクチャのウィンドウに対する表示優先度を設定します。
 * @default 0
 * @type select
 * @option 最前面
 * @value 0
 * @option メッセージウィンドウの下
 * @value 1
 * @option すべてのウィンドウの下
 * @value 2
 *
 * @param Panorama
 * @text パノラマ画像
 * @desc 背景情報を指定します。
 * @default
 * @type struct<Panorama>
 *
 * @param UsePageButtons
 * @text ページボタンの使用
 * @desc 有効にした場合、ページボタンを表示します。
 * @default false
 * @type boolean
 *
 * @param SnapNoFilter
 * @text 背景ぼかし無効化
 * @desc 指定した場合、背景スナップのぼかしが適用されなくなります。
 * @default false
 * @type boolean
 *
 */

/*~struct~Panorama:
 *
 * @param Image
 * @text 画像ファイル
 * @desc 背景として表示される画像ファイルを指定します。指定しなかった場合、マップのぼかし画像が表示されます。
 * @default
 * @require 1
 * @dir img/parallaxes
 * @type file
 *
 * @param ScrollX
 * @text スクロールX
 * @desc 背景画像の横方向のスクロール速度です。
 * @default 0
 * @type number
 *
 * @param ScrollY
 * @text スクロールY
 * @desc 背景画像の縦方向のスクロール速度です。
 * @default 0
 * @type number
 */

/*~struct~Window:
 *
 * @param Id
 * @text ウィンドウ識別子
 * @desc ウィンドウの識別子(ID)です。リスト内で他の識別子と重複しない文字列を指定してください。
 * @default window1
 * @type string
 *
 * @param x
 * @text X座標
 * @desc X座標です。
 * @default 0
 * @type number
 * @min -2000
 *
 * @param RelativeWindowIdX
 * @text 相対X座標ウィンドウ
 * @desc 指定した場合、X座標が対象ウィンドウからの相対位置になります。
 * @default
 *
 * @param y
 * @text Y座標
 * @desc Y座標です。
 * @default 0
 * @type number
 * @min -2000
 *
 * @param RelativeWindowIdY
 * @text 相対Y座標ウィンドウ
 * @desc 指定した場合、Y座標が対象ウィンドウからの相対位置になります。
 * @default
 *
 * @param width
 * @text 横幅
 * @desc 横幅です。0を指定した場合は画面の横幅に合わせられます。
 * @default 0
 * @type number
 *
 * @param height
 * @text 高さ
 * @desc 高さです。0を指定した場合は『行数』の指定をもとに自動設定されます。
 * @default 0
 * @type number
 *
 * @param originX
 * @text X軸原点
 * @desc ウィンドウの座標を決める原点です。指定する場合、横幅も指定してください。
 * @default 0
 * @type select
 * @option 左
 * @value 0
 * @option 中央
 * @value 1
 * @option 右
 * @value 2
 *
 * @param ColumnNumber
 * @text 列数
 * @desc ウィンドウの列数です。
 * @default 1
 * @type number
 * @min 1
 *
 * @param RowNumber
 * @text 行数
 * @desc ウィンドウの行数です。高さを決定するために使われます。0を指定した場合はコマンド数をもとに自動設定されます。
 * @default 0
 * @type number
 *
 * @param Rotation
 * @text 回転角度
 * @desc ウィンドウの角度です。度数法(0-360)で指定します。中身のフィルタが効かなくなる制約があります。
 * @default 0
 * @type number
 *
 * @param ItemHeight
 * @text 項目の高さ
 * @desc 1項目あたりの高さです。0を指定した場合はウィンドウのデフォルト値が使用されます。
 * @default 0
 * @type number
 *
 * @param CommandList
 * @text コマンドリスト
 * @desc ウィンドウに表示される項目や表示可否を直接指定します。項目が最初から決まっている場合に使います。
 * @type struct<Command>[]
 *
 * @param DataScript
 * @text データスクリプト
 * @desc ウィンドウに表示される項目や表示可否をスクリプトから構築します。
 *
 * @param ListWindowId
 * @parent DataScript
 * @text 列表窗口标识符
 * @desc 如果是显示其他列表窗口详细信息的窗口，请指定列表的窗口标识符。
 * @default
 *
 * @param ListScript
 * @parent DataScript
 * @text 列表获取脚本
 * @desc 返回项目列表的脚本。也可以从预设中选择。指定了『列表窗口标识符』时无效。
 * @default
 * @type combo
 * @option null; // なし(単項目表示ウィンドウ用)
 * @option $gameParty.members(); // パーティメンバー
 * @option $gameParty.battleMembers(); // 戦闘メンバー
 * @option $gameParty.reserveMembers(); // リザーブメンバー
 * @option $gameParty.items(); // 所持消耗品
 * @option $gameParty.weapons(); // 所持武器
 * @option $gameParty.armors(); // 所持防具
 * @option $gameParty.equipItems(); // 所持装備品
 * @option $gameParty.allItems(); // 所持アイテム
 * @option [this._actor]; // メインメニューで選択したアクター
 * @option this._actor.weapons(); // メインメニューで選択したアクターの装備武器
 * @option $gameParty.members()[v(1)].weapons(); // 変数[1]のPTメンバーの装備武器
 * @option this.createSaveFiles(); // セーブファイル一覧
 * @option this._actor.armors(); // メインメニューで選択したアクターの装備防具
 * @option this._actor.equips(); // メインメニューで選択したアクターの装備品
 * @option this._actor.equipSlots(); // メインメニューで選択したアクターの装備スロットID
 * @option this._actor.skills(); // メインメニューで選択したアクターの所持スキル
 * @option this._actor.usableSkills(); // メインメニューで選択したアクターの使用可能スキル
 * @option this._actor.currentClass().learnings; //メインメニューで選択したアクターの職業の習得スキル
 * @option $dataActors.filter(data => !!data); // データベースのアクター
 * @option $dataClasses.filter(data => !!data); // データベースの職業
 * @option $dataSkills.filter(data => !!data); // データベースのスキル
 * @option $dataItems.filter(data => !!data); // データベースのアイテム
 * @option $dataWeapons.filter(data => !!data); // データベースの武器
 * @option $dataArmors.filter(data => !!data); // データベースの防具
 * @option $dataEnemies.filter(data => !!data); // データベースの敵キャラ
 * @option $dataTroops.filter(data => !!data); // データベースの敵グループ
 * @option $dataStates.filter(data => !!data); // データベースのステート
 * @option $dataItems.concat($dataWeapons, $dataArmors).filter(data => !!data); // アイテム、武器防具
 * @option $dataSystem.weaponTypes.filter((d, i) => i > 0); // 武器タイプ
 * @option $dataSystem.armorTypes.filter((d, i) => i > 0); // 防具タイプ
 * @option $dataSystem.skillTypes.filter((d, i) => i > 0); // スキルタイプ
 * @option $dataSystem.equipTypes.filter((d, i) => i > 0); // 装備タイプ
 * @option $dataSystem.elements.filter((d, i) => i > 0); // 属性
 * @option $dataSystem.switches; // スイッチ名
 * @option $dataSystem.variables; // 変数名
 * @option $dataSystem.params; // 能力値(用語)
 * @option $dataSystem.commands; // コマンド(用語)
 * @option $dataSystem.basic; // 基本ステータス(用語)
 *
 * @param FilterScript
 * @parent DataScript
 * @text 过滤脚本
 * @desc 对项目列表设置显示条件。可以通过变量[item]引用各元素。
 * @default
 * @type combo
 * @option item.meta['value']; // メモ欄に<value>の記述がある
 * @option item.name.match('value'); // 名前にvalueを含む
 * @option item.id > v(10); // IDが変数[10]の値より大きい
 * @option s(parseInt(item.meta['value'])); // <value:n>のスイッチがON
 * @option item !== ''; // 空文字以外
 * @option !!item; // null, undefined, 0, 空文字以外
 * @option item.stypeId === v(10); // スキルタイプが変数[10]の値と等しい
 * @option item.etypeId === v(10); // 装備タイプが変数[10]の値と等しい
 * @option item.wtypeId === v(10); // 武器タイプが変数[10]の値と等しい
 * @option item.atypeId === v(10); // 防具タイプが変数[10]の値と等しい
 * @option item.itypeId === 1; // アイテムタイプが[通常アイテム]
 * @option this._actor.canEquip(item); // メインメニューで選択したアクターが装備可能
 * @option this._actor.canUse(item); // メインメニューで選択したアクターが使用可能
 *
 * @param MappingScript
 * @parent DataScript
 * @text 映射脚本
 * @desc 将列表项目转换为其他值。可以通过变量[item]引用各元素。仅在必要时指定。
 * @type combo
 * @option item.actor(); // Game_ActorからデータベースのActorに変換
 * @option $dataSkills[item.skillId]; // 習得スキル情報をデータベースのSkillに変換
 * @option $dataSystem.equipTypes[item]; // 装備スロットIDを装備スロット名称に変換
 *
 * @param SortScript
 * @parent DataScript
 * @text 排序脚本
 * @desc 对列表项目进行排序。变量[a]和变量[b]是用于比较的各元素引用。
 * @type combo
 * @option a.id - b.id; // ID順
 * @option a.name.localeCompare(b.name); // 名前順
 * @option this.intMeta(a,'order') - this.intMeta(b,'order'); // メモ欄のorder順
 * @option a.price - b.price; // 値段順
 * @option a.params[0] - b.params[0]; // HP順
 * @option a.params[1] - b.params[1]; // MP順
 * @option a.params[2] - b.params[2]; // 攻撃力順
 * @option a.params[3] - b.params[3]; // 防御力順
 * @option a.params[4] - b.params[4]; // 魔法力順
 * @option a.params[5] - b.params[5]; // 魔法防御順
 * @option a.params[6] - b.params[6]; // 敏捷性順
 * @option a.params[7] - b.params[7]; // 運順
 *
 * @param ItemDrawScript
 * @parent DataScript
 * @text 項目描画スクリプト
 * @desc 項目を描画するスクリプトです。変数[item]から各要素が参照できます。省略すると自働で描画されます。
 * @default []
 * @type combo[]
 * @option this.drawIcon(item.iconIndex, r.x, r.y, r.width); // アイコン
 * @option this.drawFace(item.faceName(), item.faceIndex(), r.x, r.y); // フェイスグラフィック
 * @option this.drawCharacter(item.characterName(), item.characterIndex(), r.x, r.y); // キャラクター
 * @option this.drawActorCharacter(item, r.x + 24, r.y + 48); // アクターキャラクター
 * @option this.drawActorCharacter(this._actor, r.x, r.y); // メインメニューで選択したアクターキャラクター
 * @option this.drawActorFace(item, r.x, r.y); // アクターフェイス
 * @option this.drawActorName(item, r.x, r.y); // アクター名称
 * @option this.drawActorClass(item, r.x, r.y); // アクター職業
 * @option this.drawActorNickname(item, r.x, r.y); // アクターの二つ名
 * @option this.drawActorLevel(item, r.x, r.y); // アクターのレベル
 * @option this.drawActorIcons(item, r.x, r.y); // アクターのステートアイコン
 * @option this.drawActorSimpleStatus(item, r.x, r.y, r.width); // アクターのステータス
 * @option this.drawEnemy(r.x, r.y, 'center', 'bottom'); // 敵キャラの画像
 * @option this.drawParam(0, r.x, r.y, 'right'); // DBパラメータ(0:HP 1:MP...)
 * @option this.drawItemName(item, r.x, r.y, r.width); // アイテム、スキル名称(アイコン含む)
 * @option this.drawText($gameParty.numItems(item), r.x, r.y, r.width, 'right'); // アイテムの所持数
 * @option this.drawTextEx(`Text:${item.name}`, r.x, r.y, r.width); // 任意のテキスト描画(制御文字変換あり)
 * @option this.drawText(`Text:${item.name}`, r.x, r.y, r.width, 'right'); // 任意のテキスト描画(制御文字変換なし。右揃え)
 * @option this.changeTextColor(ColorManager.textColor(1)); // テキストカラー変更(drawTextでのみ有効)
 * @option this.drawText(this.findWindowItem('window1').name, r.x, r.y, r.width); // 別ウィンドウで選択している項目名
 * @option this.drawNotePicture('noteValue', r.x, r.y, 'left', 'center', 1.0, 1.0); // 指定したメモ欄のピクチャを描画
 * @option this.placeActorName(item, r.x, r.y); // アクター名称(戦闘用)
 * @option this.placeStateIcon(item, r.x, r.y); // ステートアイコン(戦闘用)
 * @option this.placeGauge(item, 'hp', r.x, r.y); // HPゲージ(戦闘用)
 * @option this.placeBasicGauges(item, r.x, r.y); // ゲージセット(戦闘用)
 * @option this.drawNoteText('noteValue', r.x, r.y); // 指定したメモ欄の内容を描画
 * @option this.drawNoteText('noteValue', r.x, r.y, 'right'); // メモ欄の内容を右寄せ描画
 * @option this.drawSavefileInfo(item, r.x, r.y, r.width); // セーブファイルの内容を描画
 *
 * @param ItemDrawMultiLineScript
 * @parent DataScript
 * @text 描画スクリプト(複数)
 * @desc 項目を描画するスクリプトです。変数[item]から各要素が参照できます。複数行のスクリプトを入力したいときに使います。
 * @default
 * @type multiline_string
 *
 * @param IsEnableScript
 * @parent DataScript
 * @text 選択可能スクリプト
 * @desc 項目を選択可能かどうかを判定するスクリプトです。変数[item]から各要素が参照できます。
 * @default
 * @type combo
 * @option item.meta['value']; // メモ欄に<value>の記述がある
 * @option item.name.match('value'); // 名前にvalueを含む
 * @option item.id > v(10); // IDが変数[10]の値より大きい
 * @option s(parseInt(item.meta['value'])); // <value:n>のスイッチがON
 * @option item !== ''; // 空文字以外
 * @option !!item; // null, undefined, 0, 空文字以外
 * @option item.stypeId === v(10); // スキルタイプが変数[10]の値と等しい
 * @option item.etypeId === v(10); // 装備タイプが変数[10]の値と等しい
 * @option item.wtypeId === v(10); // 武器タイプが変数[10]の値と等しい
 * @option item.atypeId === v(10); // 防具タイプが変数[10]の値と等しい
 * @option item.itypeId === 1; // アイテムタイプが[通常アイテム]
 * @option this._actor.canEquip(item); // メインメニューで選択したアクターが装備可能
 * @option this._actor.canUse(item); // メインメニューで選択したアクターが使用可能
 *
 * @param CommonHelpText
 * @text 共通ヘルプテキスト
 * @desc 選択している項目とは関係なく表示されるヘルプテキストです。
 * @default
 * @type multiline_string
 *
 * @param DecisionEvent
 * @text 決定イベント
 * @desc 項目が決定された瞬間に発生するイベントです。
 * @default {}
 * @type struct<Event>
 *
 * @param CancelEvent
 * @text キャンセルイベント
 * @desc キャンセルされた瞬間に発生するイベントです。
 * @default {}
 * @type struct<Event>
 *
 * @param CursorEvent
 * @text カーソルイベント
 * @desc カーソルが動いた瞬間に発生するイベントです。このイベントではウィンドウのフォーカスは変更されません。
 * @default {}
 * @type struct<Event>
 *
 * @param ButtonEvent
 * @text ボタンイベント
 * @desc 指定されたボタンが押された瞬間に発生するイベントです。
 * @default []
 * @type struct<ButtonEvent>[]
 *
 * @param FontSize
 * @text フォントサイズ
 * @desc デフォルトのフォントサイズです。0を指定すると他のウィンドウと同じサイズになります。
 * @default 0
 * @type number
 *
 * @param FontFace
 * @text フォント
 * @desc ウィンドウのフォントを変更します。フォントファイルのロード機能は提供しないので別途用意してください。
 * @default
 *
 * @param OverlapOther
 * @text 他ウィンドウに重ねる
 * @desc 他のウィンドウと重なって表示させたときに背後のウィンドウをマスキングさせなくなります。
 * @default false
 * @type boolean
 *
 * @param WindowSkin
 * @text ウィンドウスキン
 * @desc ウィンドウスキンです。指定しなかった場合、デフォルトが使用されます。
 * @default
 * @require 1
 * @dir img/system
 * @type file
 *
 * @param VisibleSwitchId
 * @text 表示スイッチID
 * @desc 指定したスイッチがONの場合のみ画面に表示されます。
 * @default 0
 * @type switch
 *
 * @param ShowOpenAnimation
 * @text 開閉アニメ表示
 * @desc ウィンドウの開閉アニメーションを表示します。
 * @default true
 * @type boolean
 *
 * @param RefreshSwitchId
 * @text 再描画スイッチ
 * @desc 指定したスイッチがONになるとウィンドウが再描画されます。再描画の後、スイッチは自動でOFFになります。
 * @default 0
 * @type switch
 *
 * @param IndexVariableId
 * @text インデックス格納変数
 * @desc カーソルインデックスが常に格納される変数です。
 * @default 0
 * @type variable
 *
 * @param RememberIndex
 * @text インデックスを記憶
 * @desc インデックス格納変数を指定している場合、画面を開いたときにカーソルの初期値を変数値で復元します。
 * @default false
 * @type boolean
 *
 * @param ItemVariableId
 * @text 選択項目格納変数
 * @desc 選択中の項目オブジェクトが常に格納される変数です。数値以外のオブジェクトが格納されるので取り扱いに注意してください。
 * @default 0
 * @type variable
 *
 * @param Cancelable
 * @text キャンセル可能
 * @desc 有効にするとウィンドウをキャンセルできるようになります。
 * @default true
 * @type boolean
 *
 * @param PopCancel
 * @text シーン戻しキャンセル
 * @desc 有効にするとこれが最初のウィンドウである場合、ウィンドウキャンセル時に前のシーンに戻ります。
 * @default true
 * @type boolean
 *
 * @param ActorChangeable
 * @text アクター変更可能
 * @desc 有効にするとPageUp, PageDownでアクターチェンジできるようになります。
 * @default false
 * @type boolean
 *
 * @param HiddenNoFocus
 * @text 非フォーカス時は隠す
 * @desc 有効にするとウィンドウにフォーカスが当たっていないときはウィンドウが非表示になります。
 * @default false
 * @type boolean
 *
 * @param DarkNoFocus
 * @text 非フォーカス時は暗転
 * @desc 有効にするとウィンドウにフォーカスが当たっていないときはウィンドウの中身が暗くなります。
 * @default false
 * @type boolean
 *
 * @param MaskingText
 * @text マスキングテキスト
 * @desc コマンドが非表示にされたとき、消える代わりに指定文字列でマスキングされます。ヘルプ欄もマスキングされます。
 * @default
 * @type string
 *
 * @param okSound
 * @text 決定SE
 * @desc 選択すると通常の決定音の代わりに指定したSEが演奏されます。
 * @default
 * @type struct<AudioSe>
 *
 * @param cursorOverContents
 * @text カーソルを手前に表示
 * @desc 有効にすると、ウィンドウカーソルが項目の上に被せるように表示されます。
 * @default false
 * @type boolean
 *
 * @param noItemBackground
 * @text 項目背景を表示しない
 * @desc 有効にすると、項目の黒い背景が表示されなくなります。
 * @default false
 * @type boolean
 *
 * @param noFrame
 * @text 枠を表示しない
 * @desc 有効にすると、ウィンドウの枠が表示されなくなります。
 * @default false
 * @type boolean
 *
 * @param textColor
 * @text テキストカラー
 * @desc 描画文字列のデフォルトカラーです。制御文字「\c[n]」で指定する色番号を指定します。
 * @default 0
 * @type color
 *
 * @param cursorAllSwitchId
 * @text 全選択スイッチID
 * @desc 指定したスイッチがONのときカーソルが全選択状態になります。
 * @default 0
 * @type switch
 *
 * @param cursorFixedSwitchId
 * @text 選択固定スイッチID
 * @desc 指定したスイッチがONのときカーソル選択が固定されます。
 * @default 0
 * @type switch
 */

/*~struct~AudioSe:
 * @param name
 * @text 文件名
 * @desc 文件名称。
 * @default
 * @require 1
 * @dir audio/se/
 * @type file
 *
 * @param volume
 * @text 音量
 * @desc 音量大小。
 * @default 90
 * @type number
 * @min 0
 * @max 100
 *
 * @param pitch
 * @text 音调
 * @desc 音调高低。
 * @default 100
 * @type number
 * @min 50
 * @max 150
 *
 * @param pan
 * @text 左右平衡
 * @desc 左右声像平衡。
 * @default 0
 * @type number
 * @min -100
 * @max 100
 */

/*~struct~Command:
 *
 * @param Text
 * @text 项目内容
 * @desc 项目的绘制内容。可以使用图标相关的控制字符。
 * @default value01
 * @type string
 *
 * @param Align
 * @text 項目の揃え
 * @desc 項目の揃えです。
 * @default 0
 * @type select
 * @option 左揃え
 * @value 0
 * @option 中央揃え
 * @value 1
 * @option 右揃え
 * @value 2
 *
 * @param VisibleSwitchId
 * @text 表示スイッチID
 * @desc 指定したスイッチがONの場合のみ画面に表示されます。
 * @default 0
 * @type switch
 *
 * @param VisibleScript
 * @text 表示スクリプト
 * @desc 指定したスクリプトがtrueの場合のみ画面に表示されます。変数[item]で『一覧ウィンドウ識別子』の選択項目が参照できます。
 * @default
 * @type combo
 * @option item.meta['value']; // メモ欄に<value>の記述がある
 * @option item.name.match('value'); // 名前にvalueを含む
 * @option item.id > v(10); // IDが変数[10]の値より大きい
 * @option s(parseInt(item.meta['value'])); // <value:n>のスイッチがON
 * @option item !== ''; // 空文字以外
 * @option !!item; // null, undefined, 0, 空文字以外
 * @option item.stypeId === v(10); // スキルタイプが変数[10]の値と等しい
 * @option item.etypeId === v(10); // 装備タイプが変数[10]の値と等しい
 * @option item.wtypeId === v(10); // 武器タイプが変数[10]の値と等しい
 * @option item.atypeId === v(10); // 防具タイプが変数[10]の値と等しい
 * @option item.itypeId === 1; // アイテムタイプが[通常アイテム]
 * @option this._actor.canEquip(item); // メインメニューで選択したアクターが装備可能
 * @option this._actor.canUse(item); // メインメニューで選択したアクターが使用可能
 *
 * @param EnableSwitchId
 * @text 選択可能スイッチID
 * @desc 指定したスイッチがONの場合のみ選択できます。OFFだと選択禁止になります。
 * @default 0
 * @type switch
 *
 * @param IsEnableScript
 * @text 選択可能スクリプト
 * @desc 項目を選択可能かどうかを判定するスクリプトです。変数[item]で『一覧ウィンドウ識別子』の選択項目が参照できます。
 * @default
 * @type combo
 * @option item.meta['value']; // メモ欄に<value>の記述がある
 * @option item.name.match('value'); // 名前にvalueを含む
 * @option item.id > v(10); // IDが変数[10]の値より大きい
 * @option s(parseInt(item.meta['value'])); // <value:n>のスイッチがON
 * @option item !== ''; // 空文字以外
 * @option !!item; // null, undefined, 0, 空文字以外
 * @option item.stypeId === v(10); // スキルタイプが変数[10]の値と等しい
 * @option item.etypeId === v(10); // 装備タイプが変数[10]の値と等しい
 * @option item.wtypeId === v(10); // 武器タイプが変数[10]の値と等しい
 * @option item.atypeId === v(10); // 防具タイプが変数[10]の値と等しい
 * @option item.itypeId === 1; // アイテムタイプが[通常アイテム]
 * @option this._actor.canEquip(item); // メインメニューで選択したアクターが装備可能
 * @option this._actor.canUse(item); // メインメニューで選択したアクターが使用可能
 *
 * @param HelpText
 * @text ヘルプテキスト
 * @desc ヘルプウィンドウを表示している場合、ヘルプテキストが表示されます。
 * @default
 * @type multiline_string
 *
 * @param DecisionEvent
 * @text 決定イベント
 * @desc この項目が決定された瞬間に発生するイベントです。指定した場合、共通の決定イベントより優先されます。
 * @default
 * @type struct<Event>
 *
 * @param CancelChoice
 * @text キャンセル選択肢
 * @desc この項目を選択したときに発生するイベントがキャンセルイベントになります。
 * @default false
 * @type boolean
 *
 * @param OkSound
 * @text 決定SE
 * @desc 選択すると通常の決定音の代わりに指定したSEが演奏されます。
 * @default
 * @type struct<AudioSe>
 *
 */

/*~struct~ButtonEvent:
 *
 * @param Name
 * @text 按钮名
 * @desc 按下时触发事件的按钮名。ok和cancel也会响应触摸操作以及确定和取消。
 * @default
 * @type combo
 * @option ok
 * @option cancel
 * @option menu
 * @option shift
 * @option control
 * @option down
 * @option left
 * @option right
 * @option up
 * @option pageup
 * @option pagedown
 * @option debug
 * @option tab
 *
 * @param Event
 * @text イベント
 * @desc 指定したボタンが押された瞬間に発生するイベントです。
 * @default {}
 * @type struct<Event>
 */

/*~struct~Event:
 *
 * @param CommandId
 * @text コモンイベント
 * @desc 対象のイベントが発生したときに実行されるコモンイベントです。ただし、シーンを出るときは実行されません。
 * @default 0
 * @type common_event
 *
 * @param FocusWindowId
 * @text ウィンドウ識別子
 * @desc 対象のイベントが発生したときにフォーカスされるウィンドウ識別子です。指定がなければ前のウィンドウに戻ります。
 * @default
 * @type string
 *
 * @param FocusWindowIndex
 * @text カーソルインデックス
 * @desc 対象のイベントが発生したときにフォーカスされるウィンドウのカーソルインデックスです。-1を指定した場合、操作しません。
 * @default -1
 * @type number
 * @min -1
 *
 * @param Script
 * @text スクリプト
 * @desc 対象のイベントが発生したときに実行されるスクリプトです。
 * @default
 * @type combo
 * @option SceneManager.callCustomMenu('Scene___'); // 別のカスタムメニューに移動
 * @option this.popScene(); // 元のシーンに戻る
 * @option SceneManager.goto(Scene_Map); // マップ画面に遷移
 * @option SceneManager.changeWindowFocus('window1'); // 指定ウィンドウにフォーカス
 * @option SceneManager.changeWindowIndex('window1', 1); // 指定ウィンドウのインデックス変更
 * @option SceneManager.trashScene(); // 元のシーン情報を破棄する
 * @option SceneManager.showMapPicture(1, '', 0, 0, 0, 100, 100, 255, 1); // マップ画面にピクチャを表示
 * @option this.executeSave(v(1)); // セーブ実行
 * @option this.executeLoad(v(1)); // ロード実行
 *
 * @param SwitchId
 * @text スイッチ
 * @desc 対象のイベントが発生したときにONになるスイッチです。
 * @type switch
 *
 * @param Deselect
 * @text 元ウィンドウ選択解除
 * @desc 対象のイベントが発生したときに元々フォーカスされていたウィンドウの選択状態を解除します。
 * @default false
 * @type boolean
 */

/*~struct~ReplacementScene:
 * @param scene
 * @text 差し替え元シーン
 * @desc カスタムメニューに差し替えるもとになるシーンです。マップなども選択できますが挙動が大きく変わるのでご注意ください。
 * @type select
 * @default Scene_Menu
 * @option タイトル
 * @value Scene_Title
 * @option マップ
 * @value Scene_Map
 * @option ゲームオーバー
 * @value Scene_Gameover
 * @option バトル
 * @value Scene_Battle
 * @option メインメニュー
 * @value Scene_Menu
 * @option アイテム
 * @value Scene_Item
 * @option スキル
 * @value Scene_Skill
 * @option 装備
 * @value Scene_Equip
 * @option ステータス
 * @value Scene_Status
 * @option オプション
 * @value Scene_Options
 * @option セーブ
 * @value Scene_Save
 * @option ロード
 * @value Scene_Load
 * @option ゲーム終了
 * @value Scene_End
 * @option ショップ
 * @value Scene_Shop
 * @option 名前入力
 * @value Scene_Name
 * @option デバッグ
 * @value Scene_Debug
 *
 * @param customScene
 * @text カスタムメニューシーン
 * @desc 差し替え先のカスタムメニューシーンの識別子を指定します。制御文字\v[n]が使えます。
 * @default
 */
/*:
 * @plugindesc 自定义菜单创建插件
 * @target MZ
 * @url https://github.com/triacontane/RPGMakerMV/tree/mz_master/SceneCustomMenu.js
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 * @author トリアコンタン
 *
 * @param Scene1
 * @text シーン1
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {"Id":"Scene_ActorList","UseHelp":"true","HelpRows":"0","InitialEvent":"","WindowList":"[\"{\\\"Id\\\":\\\"member_window\\\",\\\"x\\\":\\\"0\\\",\\\"RelativeWindowIdX\\\":\\\"\\\",\\\"y\\\":\\\"0\\\",\\\"RelativeWindowIdY\\\":\\\"\\\",\\\"width\\\":\\\"480\\\",\\\"height\\\":\\\"0\\\",\\\"ColumnNumber\\\":\\\"1\\\",\\\"RowNumber\\\":\\\"4\\\",\\\"ItemHeight\\\":\\\"111\\\",\\\"CommandList\\\":\\\"\\\",\\\"DataScript\\\":\\\"\\\",\\\"ListWindowId\\\":\\\"\\\",\\\"ListScript\\\":\\\"$gameParty.members(); // パーティメンバー\\\",\\\"FilterScript\\\":\\\"\\\",\\\"MappingScript\\\":\\\"\\\",\\\"ItemDrawScript\\\":\\\"[\\\\\\\"this.drawActorSimpleStatus(item, r.x, r.y, r.width); // アクターのステータス\\\\\\\"]\\\",\\\"IsEnableScript\\\":\\\"\\\",\\\"CommonHelpText\\\":\\\"アクターを選択してください。\\\",\\\"DecisionEvent\\\":\\\"{\\\\\\\"CommandId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"FocusWindowId\\\\\\\":\\\\\\\"confirm\\\\\\\",\\\\\\\"FocusWindowIndex\\\\\\\":\\\\\\\"-1\\\\\\\",\\\\\\\"Script\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchId\\\\\\\":\\\\\\\"\\\\\\\"}\\\",\\\"CancelEvent\\\":\\\"{}\\\",\\\"CursorEvent\\\":\\\"{}\\\",\\\"FontSize\\\":\\\"0\\\",\\\"WindowSkin\\\":\\\"\\\",\\\"VisibleSwitchId\\\":\\\"0\\\",\\\"ShowOpenAnimation\\\":\\\"false\\\",\\\"RefreshSwitchId\\\":\\\"0\\\",\\\"IndexVariableId\\\":\\\"0\\\",\\\"ItemVariableId\\\":\\\"0\\\",\\\"Cancelable\\\":\\\"true\\\",\\\"ActorChangeable\\\":\\\"false\\\",\\\"HiddenNoFocus\\\":\\\"false\\\",\\\"MaskingText\\\":\\\"\\\"}\",\"{\\\"Id\\\":\\\"detail_window\\\",\\\"x\\\":\\\"0\\\",\\\"RelativeWindowIdX\\\":\\\"member_window\\\",\\\"y\\\":\\\"0\\\",\\\"RelativeWindowIdY\\\":\\\"\\\",\\\"width\\\":\\\"0\\\",\\\"height\\\":\\\"300\\\",\\\"ColumnNumber\\\":\\\"1\\\",\\\"RowNumber\\\":\\\"0\\\",\\\"ItemHeight\\\":\\\"0\\\",\\\"CommandList\\\":\\\"\\\",\\\"DataScript\\\":\\\"\\\",\\\"ListWindowId\\\":\\\"member_window\\\",\\\"ListScript\\\":\\\"\\\",\\\"FilterScript\\\":\\\"\\\",\\\"MappingScript\\\":\\\"\\\",\\\"ItemDrawScript\\\":\\\"[\\\\\\\"this.drawFace(item.faceName(), item.faceIndex(), r.x, r.y); // フェイスグラフィック\\\\\\\"]\\\",\\\"IsEnableScript\\\":\\\"\\\",\\\"CommonHelpText\\\":\\\"\\\",\\\"DecisionEvent\\\":\\\"{}\\\",\\\"CancelEvent\\\":\\\"{}\\\",\\\"CursorEvent\\\":\\\"{}\\\",\\\"FontSize\\\":\\\"0\\\",\\\"WindowSkin\\\":\\\"\\\",\\\"VisibleSwitchId\\\":\\\"0\\\",\\\"ShowOpenAnimation\\\":\\\"true\\\",\\\"RefreshSwitchId\\\":\\\"0\\\",\\\"IndexVariableId\\\":\\\"0\\\",\\\"ItemVariableId\\\":\\\"0\\\",\\\"Cancelable\\\":\\\"true\\\",\\\"ActorChangeable\\\":\\\"false\\\",\\\"HiddenNoFocus\\\":\\\"false\\\",\\\"MaskingText\\\":\\\"\\\"}\",\"{\\\"Id\\\":\\\"confirm\\\",\\\"x\\\":\\\"0\\\",\\\"RelativeWindowIdX\\\":\\\"member_window\\\",\\\"y\\\":\\\"0\\\",\\\"RelativeWindowIdY\\\":\\\"detail_window\\\",\\\"width\\\":\\\"130\\\",\\\"height\\\":\\\"0\\\",\\\"ColumnNumber\\\":\\\"1\\\",\\\"RowNumber\\\":\\\"2\\\",\\\"ItemHeight\\\":\\\"36\\\",\\\"CommandList\\\":\\\"[\\\\\\\"{\\\\\\\\\\\\\\\"Text\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"はい\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"VisibleSwitchId\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"EnableSwitchId\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"HelpText\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"CancelChoice\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"false\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"{\\\\\\\\\\\\\\\"Text\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"いいえ\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"VisibleSwitchId\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"EnableSwitchId\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"HelpText\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"CancelChoice\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"true\\\\\\\\\\\\\\\"}\\\\\\\"]\\\",\\\"DataScript\\\":\\\"\\\",\\\"ListScript\\\":\\\"\\\",\\\"FilterScript\\\":\\\"\\\",\\\"MappingScript\\\":\\\"\\\",\\\"ItemDrawScript\\\":\\\"\\\",\\\"IsEnableScript\\\":\\\"\\\",\\\"CommonHelpText\\\":\\\"本当によろしいですか？\\\",\\\"DecisionEvent\\\":\\\"{\\\\\\\"CommandId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"FocusWindowId\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FocusWindowIndex\\\\\\\":\\\\\\\"-1\\\\\\\",\\\\\\\"Script\\\\\\\":\\\\\\\"SceneManager.callCustomMenu('Scene_ActorListNext'); //\\\\\\\",\\\\\\\"SwitchId\\\\\\\":\\\\\\\"\\\\\\\"}\\\",\\\"CancelEvent\\\":\\\"{}\\\",\\\"CursorEvent\\\":\\\"{}\\\",\\\"FontSize\\\":\\\"0\\\",\\\"WindowSkin\\\":\\\"\\\",\\\"VisibleSwitchId\\\":\\\"0\\\",\\\"ShowOpenAnimation\\\":\\\"true\\\",\\\"RefreshSwitchId\\\":\\\"0\\\",\\\"IndexVariableId\\\":\\\"0\\\",\\\"Cancelable\\\":\\\"true\\\",\\\"ActorChangeable\\\":\\\"false\\\",\\\"HiddenNoFocus\\\":\\\"true\\\",\\\"MaskingText\\\":\\\"\\\"}\"]","Panorama":""}
 * @type struct<Scene>
 *
 * @param Scene2
 * @text シーン2
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {"Id":"Scene_ActorListNext","UseHelp":"true","InitialEvent":"","WindowList":"[\"{\\\"Id\\\":\\\"window1\\\",\\\"x\\\":\\\"0\\\",\\\"RelativeWindowIdX\\\":\\\"\\\",\\\"y\\\":\\\"0\\\",\\\"RelativeWindowIdY\\\":\\\"\\\",\\\"width\\\":\\\"0\\\",\\\"height\\\":\\\"0\\\",\\\"ColumnNumber\\\":\\\"2\\\",\\\"RowNumber\\\":\\\"0\\\",\\\"ItemHeight\\\":\\\"0\\\",\\\"CommandList\\\":\\\"\\\",\\\"DataScript\\\":\\\"\\\",\\\"ListScript\\\":\\\"$dataClasses.filter(data => !!data); // データベースの職業\\\",\\\"FilterScript\\\":\\\"\\\",\\\"MappingScript\\\":\\\"\\\",\\\"ItemDrawScript\\\":\\\"\\\",\\\"IsEnableScript\\\":\\\"item.meta['value']; // メモ欄に<value>の記述がある\\\",\\\"CommonHelpText\\\":\\\"メモ欄に<value>と書いた職業だけ選択できます。\\\",\\\"DecisionEvent\\\":\\\"{\\\\\\\"CommandId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"FocusWindowId\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FocusWindowIndex\\\\\\\":\\\\\\\"-1\\\\\\\",\\\\\\\"Script\\\\\\\":\\\\\\\"this.popScene(); // 元のシーンに戻る\\\\\\\",\\\\\\\"SwitchId\\\\\\\":\\\\\\\"\\\\\\\"}\\\",\\\"CancelEvent\\\":\\\"{}\\\",\\\"FontSize\\\":\\\"0\\\",\\\"WindowSkin\\\":\\\"\\\",\\\"VisibleSwitchId\\\":\\\"0\\\",\\\"ShowOpenAnimation\\\":\\\"true\\\",\\\"RefreshSwitchId\\\":\\\"0\\\",\\\"IndexVariableId\\\":\\\"0\\\",\\\"Cancelable\\\":\\\"true\\\",\\\"ActorChangeable\\\":\\\"false\\\",\\\"HiddenNoFocus\\\":\\\"false\\\"}\"]"}
 * @type struct<Scene>
 *
 * @param Scene3
 * @text シーン3
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {"Id":"Scene_ActorDetail","UseHelp":"true","InitialEvent":"","WindowList":"[\"{\\\"Id\\\":\\\"actor_name\\\",\\\"x\\\":\\\"0\\\",\\\"RelativeWindowIdX\\\":\\\"\\\",\\\"y\\\":\\\"0\\\",\\\"RelativeWindowIdY\\\":\\\"\\\",\\\"width\\\":\\\"420\\\",\\\"height\\\":\\\"0\\\",\\\"ColumnNumber\\\":\\\"1\\\",\\\"RowNumber\\\":\\\"1\\\",\\\"ItemHeight\\\":\\\"0\\\",\\\"CommandList\\\":\\\"\\\",\\\"DataScript\\\":\\\"\\\",\\\"ListScript\\\":\\\"[this._actor]; // メインメニューで選択したアクター\\\",\\\"FilterScript\\\":\\\"\\\",\\\"MappingScript\\\":\\\"\\\",\\\"ItemDrawScript\\\":\\\"[\\\\\\\"this.drawActorSimpleStatus(item, r.x, r.y, r.width); // アクターのステータス\\\\\\\"]\\\",\\\"IsEnableScript\\\":\\\"\\\",\\\"CommonHelpText\\\":\\\"PgUp, PgDnキーでアクターを変更できます。\\\",\\\"DecisionEvent\\\":\\\"{\\\\\\\"CommandId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"FocusWindowId\\\\\\\":\\\\\\\"actor_name\\\\\\\",\\\\\\\"FocusWindowIndex\\\\\\\":\\\\\\\"-1\\\\\\\",\\\\\\\"Script\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchId\\\\\\\":\\\\\\\"\\\\\\\"}\\\",\\\"CancelEvent\\\":\\\"{}\\\",\\\"FontSize\\\":\\\"0\\\",\\\"WindowSkin\\\":\\\"\\\",\\\"VisibleSwitchId\\\":\\\"0\\\",\\\"ShowOpenAnimation\\\":\\\"true\\\",\\\"RefreshSwitchId\\\":\\\"0\\\",\\\"IndexVariableId\\\":\\\"0\\\",\\\"Cancelable\\\":\\\"true\\\",\\\"ActorChangeable\\\":\\\"true\\\",\\\"HiddenNoFocus\\\":\\\"false\\\"}\",\"{\\\"Id\\\":\\\"slot\\\",\\\"x\\\":\\\"0\\\",\\\"RelativeWindowIdX\\\":\\\"\\\",\\\"y\\\":\\\"0\\\",\\\"RelativeWindowIdY\\\":\\\"actor_name\\\",\\\"width\\\":\\\"200\\\",\\\"height\\\":\\\"0\\\",\\\"ColumnNumber\\\":\\\"1\\\",\\\"RowNumber\\\":\\\"0\\\",\\\"ItemHeight\\\":\\\"0\\\",\\\"CommandList\\\":\\\"\\\",\\\"DataScript\\\":\\\"\\\",\\\"ListScript\\\":\\\"this._actor.equipSlots(); // メインメニューで選択したアクターの装備スロット\\\",\\\"FilterScript\\\":\\\"\\\",\\\"MappingScript\\\":\\\"$dataSystem.equipTypes[item]; // 装備スロットIDを装備スロット名称に変換\\\",\\\"ItemDrawScript\\\":\\\"\\\",\\\"IsEnableScript\\\":\\\"\\\",\\\"CommonHelpText\\\":\\\"\\\",\\\"DecisionEvent\\\":\\\"\\\",\\\"CancelEvent\\\":\\\"{}\\\",\\\"FontSize\\\":\\\"0\\\",\\\"WindowSkin\\\":\\\"\\\",\\\"VisibleSwitchId\\\":\\\"0\\\",\\\"ShowOpenAnimation\\\":\\\"true\\\",\\\"RefreshSwitchId\\\":\\\"0\\\",\\\"IndexVariableId\\\":\\\"0\\\",\\\"Cancelable\\\":\\\"true\\\",\\\"ActorChangeable\\\":\\\"true\\\",\\\"HiddenNoFocus\\\":\\\"false\\\"}\",\"{\\\"Id\\\":\\\"equip\\\",\\\"x\\\":\\\"0\\\",\\\"RelativeWindowIdX\\\":\\\"slot\\\",\\\"y\\\":\\\"0\\\",\\\"RelativeWindowIdY\\\":\\\"actor_name\\\",\\\"width\\\":\\\"400\\\",\\\"height\\\":\\\"0\\\",\\\"ColumnNumber\\\":\\\"1\\\",\\\"RowNumber\\\":\\\"0\\\",\\\"ItemHeight\\\":\\\"0\\\",\\\"CommandList\\\":\\\"\\\",\\\"DataScript\\\":\\\"\\\",\\\"ListScript\\\":\\\"this._actor.equips(); // メインメニューで選択したアクターの装備スロットID\\\",\\\"FilterScript\\\":\\\"\\\",\\\"MappingScript\\\":\\\"\\\",\\\"ItemDrawScript\\\":\\\"\\\",\\\"IsEnableScript\\\":\\\"\\\",\\\"CommonHelpText\\\":\\\"\\\",\\\"DecisionEvent\\\":\\\"\\\",\\\"CancelEvent\\\":\\\"{}\\\",\\\"FontSize\\\":\\\"0\\\",\\\"WindowSkin\\\":\\\"\\\",\\\"VisibleSwitchId\\\":\\\"0\\\",\\\"ShowOpenAnimation\\\":\\\"true\\\",\\\"RefreshSwitchId\\\":\\\"0\\\",\\\"IndexVariableId\\\":\\\"0\\\",\\\"Cancelable\\\":\\\"true\\\",\\\"ActorChangeable\\\":\\\"true\\\",\\\"HiddenNoFocus\\\":\\\"false\\\"}\"]"}
 * @type struct<Scene>
 *
 * @param Scene4
 * @text シーン4
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene5
 * @text シーン5
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene6
 * @text シーン6
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene7
 * @text シーン7
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene8
 * @text シーン8
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene9
 * @text シーン9
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene10
 * @text シーン10
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene11
 * @text シーン11
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene12
 * @text シーン12
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene13
 * @text シーン13
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene14
 * @text シーン14
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene15
 * @text シーン15
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene16
 * @text シーン16
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene17
 * @text シーン17
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene18
 * @text シーン18
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene19
 * @text シーン19
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene20
 * @text シーン20
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param ReplacementList
 * @text シーン差し替えリスト
 * @desc メインメニューを指定した識別子のカスタムメニューに差し替えます。
 * @default []
 * @type struct<ReplacementScene>[]
 *
 * @param NoUseBlendAdd
 * @text 加算合成を使用しない
 * @desc ピクチャやアニメーション表示で加算合成が使えなくなります。設定を有効にすることで競合を回避できる可能性があります。
 * @default true
 * @type boolean
 *
 * @command CALL_SCENE
 * @text シーン呼び出し
 * @desc 指定した識別子のシーンを呼び出します。
 *
 * @arg id
 * @text シーン識別子
 * @desc 呼び出すシーン識別子です。
 * @default Scene_ActorList
 *
 * @command CONTROL_WINDOW
 * @text ウィンドウ操作
 * @desc IDを指定してウィンドウを操作します。
 *
 * @arg id
 * @text ウィンドウID
 * @desc 操作するウィンドウのIDです。
 * @default
 * @type string
 *
 * @arg type
 * @text 操作タイプ
 * @desc 操作種別です。
 * @default refresh
 * @type select
 * @option ウィンドウを再描画
 * @value refresh
 * @option ウィンドウにフォーカス
 * @value activate
 * @option インデックス変更
 * @value select
 *
 * @arg index
 * @text インデックス
 * @desc 操作タイプがインデックス変更の場合に使用するインデックスです。
 * @default 0
 * @type number
 *
 * @help SceneCustomMenu.js
 *
 * 通过插件参数来定义窗口信息，从而创建独立的菜单界面。
 * 插件预设了一些范例和丰富的脚本预设，可以迅速上手并确认功能。
 * 脚本出错会在开发者工具中显示报错信息。
 * 除此之外，可以通过公共事件来满足更为详细的要求。
 *
 * カスタムメニュー画面を作成するには、大まかに以下の手順を踏みます。
 *
 * 1. ウィンドウを定義する
 * 　プラグインパラメータからウィンドウと項目内容を定義します。
 * 　項目内容は固定文字列のほか、データベースやアクターデータ等も指定可能です。
 *
 * 2. ウィンドウ間の繋がりを定義する
 * 　ウィンドウで決定やキャンセルをしたとき、別のウィンドウに移ったり
 * 　画面を出たりするよう、ウィンドウ間の繋がりを定義します。
 *
 * 3. イベントを定義する
 * 　ウィンドウで決定やキャンセルをしたときに実行されるスクリプトや
 * 　コモンイベントの情報を定義します。
 *
 * カスタムメニューを呼び出すには以下のスクリプトを実行します。
 * プラグインコマンドからも呼び出せます。
 * 『Scene_ActorList』の箇所には『シーン識別子』を設定します。
 *
 *  SceneManager.callCustomMenu('Scene_ActorList');
 *
 * メインメニュー画面にカスタムメニューの項目を追加する機能はありません。
 * 既存のプラグイン等と連携させてください。
 *
 * ・スクリプト
 *
 * 遷移元シーンの情報をひとつ破棄します。
 * SceneManager.trashScene();
 *
 * 指定したウィンドウインスタンスを取得します。（上級者向け）
 * SceneManager.findCustomMenuWindow('window1');
 *
 * マップ画面にピクチャを表示します。
 * SceneManager.showMapPicture(1, 'ファイル名', 0, 0, 0, 100, 100, 255, 1);
 *
 * 現在のシーンが指定した識別子のカスタムシーンかどうかを返します。
 * SceneManager.isCustomScene('Scene_ActorList')
 *
 * 指定したIDのウィンドウがアクティブになっているかどうかを返します。
 * SceneManager.isCustomMenuActiveWindow('window1')
 *
 * 指定した番号のスイッチや変数の値を取得します。
 * v(1)
 * s(1)
 *
 * 利用規約：
 *  作者に無断で改変、再配布が可能で、利用形態（商用、18禁利用等）
 *  についても制限はありません。
 *  このプラグインはもうあなたのものです。
 */

/*~struct~Scene:
 *
 * @param Id
 * @text シーン識別子
 * @desc シーンを呼び出す際の識別子です。他の識別子と重複しない文字列を指定してください。
 * @default Scene_Test
 * @type string
 *
 * @param UseHelp
 * @text ヘルプウィンドウ使用
 * @desc 有効にした場合、ヘルプウィンドウを表示します。
 * @default 1
 * @type select
 * @option 使用しない
 * @value 0
 * @option 画面下部に表示(MZデフォルト)
 * @value 1
 * @option 画面上部に表示
 * @value 2
 *
 * @param HelpRows
 * @text ヘルプ行数
 * @desc ヘルプウィンドウの行数をデフォルトの2から変更したい場合に指定してください。
 * @default 0
 * @type number
 *
 * @param InitialEvent
 * @text 初期イベント
 * @desc シーンが表示された瞬間に発生するイベントです。初期イベントに指定したウィンドウでキャンセルすると画面から抜けます。
 * @default {}
 * @type struct<Event>
 *
 * @param ParallelEventId
 * @text 並列コモンイベントID
 * @desc シーンが表示されている間、常に実行され続けるコモンイベントです。パフォーマンスの低下に注意して使ってください。
 * @default 0
 * @type common_event
 *
 * @param ActorChangeEvent
 * @text アクター変更イベント
 * @desc アクターを変更した瞬間に発生するイベントです。このイベントではウィンドウのフォーカスは変更されません。
 * @default
 * @type struct<Event>
 *
 * @param WindowList
 * @text ウィンドウ一覧
 * @desc シーンで使用されるウィンドウの一覧です。
 * @default []
 * @type struct<Window>[]
 *
 * @param PicturePriority
 * @text ピクチャ表示優先度
 * @desc ピクチャのウィンドウに対する表示優先度を設定します。
 * @default 0
 * @type select
 * @option 最前面
 * @value 0
 * @option メッセージウィンドウの下
 * @value 1
 * @option すべてのウィンドウの下
 * @value 2
 *
 * @param Panorama
 * @text パノラマ画像
 * @desc 背景情報を指定します。
 * @default
 * @type struct<Panorama>
 *
 * @param UsePageButtons
 * @text ページボタンの使用
 * @desc 有効にした場合、ページボタンを表示します。
 * @default false
 * @type boolean
 *
 * @param SnapNoFilter
 * @text 背景ぼかし無効化
 * @desc 指定した場合、背景スナップのぼかしが適用されなくなります。
 * @default false
 * @type boolean
 *
 */

/*~struct~Panorama:
 *
 * @param Image
 * @text 画像ファイル
 * @desc 背景として表示される画像ファイルを指定します。指定しなかった場合、マップのぼかし画像が表示されます。
 * @default
 * @require 1
 * @dir img/parallaxes
 * @type file
 *
 * @param ScrollX
 * @text スクロールX
 * @desc 背景画像の横方向のスクロール速度です。
 * @default 0
 * @type number
 *
 * @param ScrollY
 * @text スクロールY
 * @desc 背景画像の縦方向のスクロール速度です。
 * @default 0
 * @type number
 */

/*~struct~Window:
 *
 * @param Id
 * @text ウィンドウ識別子
 * @desc ウィンドウの識別子(ID)です。リスト内で他の識別子と重複しない文字列を指定してください。
 * @default window1
 * @type string
 *
 * @param x
 * @text X座標
 * @desc X座標です。
 * @default 0
 * @type number
 * @min -2000
 *
 * @param RelativeWindowIdX
 * @text 相対X座標ウィンドウ
 * @desc 指定した場合、X座標が対象ウィンドウからの相対位置になります。
 * @default
 *
 * @param y
 * @text Y座標
 * @desc Y座標です。
 * @default 0
 * @type number
 * @min -2000
 *
 * @param RelativeWindowIdY
 * @text 相対Y座標ウィンドウ
 * @desc 指定した場合、Y座標が対象ウィンドウからの相対位置になります。
 * @default
 *
 * @param width
 * @text 横幅
 * @desc 横幅です。0を指定した場合は画面の横幅に合わせられます。
 * @default 0
 * @type number
 *
 * @param height
 * @text 高さ
 * @desc 高さです。0を指定した場合は『行数』の指定をもとに自動設定されます。
 * @default 0
 * @type number
 *
 * @param originX
 * @text X軸原点
 * @desc ウィンドウの座標を決める原点です。指定する場合、横幅も指定してください。
 * @default 0
 * @type select
 * @option 左
 * @value 0
 * @option 中央
 * @value 1
 * @option 右
 * @value 2
 *
 * @param ColumnNumber
 * @text 列数
 * @desc ウィンドウの列数です。
 * @default 1
 * @type number
 * @min 1
 *
 * @param RowNumber
 * @text 行数
 * @desc ウィンドウの行数です。高さを決定するために使われます。0を指定した場合はコマンド数をもとに自動設定されます。
 * @default 0
 * @type number
 *
 * @param Rotation
 * @text 回転角度
 * @desc ウィンドウの角度です。度数法(0-360)で指定します。中身のフィルタが効かなくなる制約があります。
 * @default 0
 * @type number
 *
 * @param ItemHeight
 * @text 項目の高さ
 * @desc 1項目あたりの高さです。0を指定した場合はウィンドウのデフォルト値が使用されます。
 * @default 0
 * @type number
 *
 * @param CommandList
 * @text コマンドリスト
 * @desc ウィンドウに表示される項目や表示可否を直接指定します。項目が最初から決まっている場合に使います。
 * @type struct<Command>[]
 *
 * @param DataScript
 * @text データスクリプト
 * @desc ウィンドウに表示される項目や表示可否をスクリプトから構築します。
 *
 * @param ListWindowId
 * @parent DataScript
 * @text 一覧ウィンドウ識別子
 * @desc 別の一覧ウィンドウの詳細情報を表示するウィンドウの場合、一覧のウィンドウ識別子を指定します。
 * @default
 *
 * @param ListScript
 * @parent DataScript
 * @text 一覧取得スクリプト
 * @desc 項目の一覧を返すスクリプトです。プリセットから選ぶこともできます。『一覧ウィンドウ識別子』を指定した場合は無効です。
 * @default
 * @type combo
 * @option null; // なし(単項目表示ウィンドウ用)
 * @option $gameParty.members(); // パーティメンバー
 * @option $gameParty.battleMembers(); // 戦闘メンバー
 * @option $gameParty.reserveMembers(); // リザーブメンバー
 * @option $gameParty.items(); // 所持消耗品
 * @option $gameParty.weapons(); // 所持武器
 * @option $gameParty.armors(); // 所持防具
 * @option $gameParty.equipItems(); // 所持装備品
 * @option $gameParty.allItems(); // 所持アイテム
 * @option [this._actor]; // メインメニューで選択したアクター
 * @option this._actor.weapons(); // メインメニューで選択したアクターの装備武器
 * @option $gameParty.members()[v(1)].weapons(); // 変数[1]のPTメンバーの装備武器
 * @option this.createSaveFiles(); // セーブファイル一覧
 * @option this._actor.armors(); // メインメニューで選択したアクターの装備防具
 * @option this._actor.equips(); // メインメニューで選択したアクターの装備品
 * @option this._actor.equipSlots(); // メインメニューで選択したアクターの装備スロットID
 * @option this._actor.skills(); // メインメニューで選択したアクターの所持スキル
 * @option this._actor.usableSkills(); // メインメニューで選択したアクターの使用可能スキル
 * @option this._actor.currentClass().learnings; //メインメニューで選択したアクターの職業の習得スキル
 * @option $dataActors.filter(data => !!data); // データベースのアクター
 * @option $dataClasses.filter(data => !!data); // データベースの職業
 * @option $dataSkills.filter(data => !!data); // データベースのスキル
 * @option $dataItems.filter(data => !!data); // データベースのアイテム
 * @option $dataWeapons.filter(data => !!data); // データベースの武器
 * @option $dataArmors.filter(data => !!data); // データベースの防具
 * @option $dataEnemies.filter(data => !!data); // データベースの敵キャラ
 * @option $dataTroops.filter(data => !!data); // データベースの敵グループ
 * @option $dataStates.filter(data => !!data); // データベースのステート
 * @option $dataItems.concat($dataWeapons, $dataArmors).filter(data => !!data); // アイテム、武器防具
 * @option $dataSystem.weaponTypes.filter((d, i) => i > 0); // 武器タイプ
 * @option $dataSystem.armorTypes.filter((d, i) => i > 0); // 防具タイプ
 * @option $dataSystem.skillTypes.filter((d, i) => i > 0); // スキルタイプ
 * @option $dataSystem.equipTypes.filter((d, i) => i > 0); // 装備タイプ
 * @option $dataSystem.elements.filter((d, i) => i > 0); // 属性
 * @option $dataSystem.switches; // スイッチ名
 * @option $dataSystem.variables; // 変数名
 * @option $dataSystem.params; // 能力値(用語)
 * @option $dataSystem.commands; // コマンド(用語)
 * @option $dataSystem.basic; // 基本ステータス(用語)
 *
 * @param FilterScript
 * @parent DataScript
 * @text フィルタスクリプト
 * @desc 項目の一覧に対して表示条件を設定します。変数[item]から各要素が参照できます。
 * @default
 * @type combo
 * @option item.meta['value']; // メモ欄に<value>の記述がある
 * @option item.name.match('value'); // 名前にvalueを含む
 * @option item.id > v(10); // IDが変数[10]の値より大きい
 * @option s(parseInt(item.meta['value'])); // <value:n>のスイッチがON
 * @option item !== ''; // 空文字以外
 * @option !!item; // null, undefined, 0, 空文字以外
 * @option item.stypeId === v(10); // スキルタイプが変数[10]の値と等しい
 * @option item.etypeId === v(10); // 装備タイプが変数[10]の値と等しい
 * @option item.wtypeId === v(10); // 武器タイプが変数[10]の値と等しい
 * @option item.atypeId === v(10); // 防具タイプが変数[10]の値と等しい
 * @option item.itypeId === 1; // アイテムタイプが[通常アイテム]
 * @option this._actor.canEquip(item); // メインメニューで選択したアクターが装備可能
 * @option this._actor.canUse(item); // メインメニューで選択したアクターが使用可能
 *
 * @param MappingScript
 * @parent DataScript
 * @text マッピングスクリプト
 * @desc 一覧の項目を別の値に変換します。変数[item]から各要素が参照できます。必要な場合にのみ指定してください。
 * @type combo
 * @option item.actor(); // Game_ActorからデータベースのActorに変換
 * @option $dataSkills[item.skillId]; // 習得スキル情報をデータベースのSkillに変換
 * @option $dataSystem.equipTypes[item]; // 装備スロットIDを装備スロット名称に変換
 *
 * @param SortScript
 * @parent DataScript
 * @text ソートスクリプト
 * @desc 一覧の項目をソートします。変数[a] 変数[b]が比較用の各要素の参照です。
 * @type combo
 * @option a.id - b.id; // ID順
 * @option a.name.localeCompare(b.name); // 名前順
 * @option this.intMeta(a,'order') - this.intMeta(b,'order'); // メモ欄のorder順
 * @option a.price - b.price; // 値段順
 * @option a.params[0] - b.params[0]; // HP順
 * @option a.params[1] - b.params[1]; // MP順
 * @option a.params[2] - b.params[2]; // 攻撃力順
 * @option a.params[3] - b.params[3]; // 防御力順
 * @option a.params[4] - b.params[4]; // 魔法力順
 * @option a.params[5] - b.params[5]; // 魔法防御順
 * @option a.params[6] - b.params[6]; // 敏捷性順
 * @option a.params[7] - b.params[7]; // 運順
 *
 * @param ItemDrawScript
 * @parent DataScript
 * @text 項目描画スクリプト
 * @desc 項目を描画するスクリプトです。変数[item]から各要素が参照できます。省略すると自働で描画されます。
 * @default []
 * @type combo[]
 * @option this.drawIcon(item.iconIndex, r.x, r.y, r.width); // アイコン
 * @option this.drawFace(item.faceName(), item.faceIndex(), r.x, r.y); // フェイスグラフィック
 * @option this.drawCharacter(item.characterName(), item.characterIndex(), r.x, r.y); // キャラクター
 * @option this.drawActorCharacter(item, r.x + 24, r.y + 48); // アクターキャラクター
 * @option this.drawActorCharacter(this._actor, r.x, r.y); // メインメニューで選択したアクターキャラクター
 * @option this.drawActorFace(item, r.x, r.y); // アクターフェイス
 * @option this.drawActorName(item, r.x, r.y); // アクター名称
 * @option this.drawActorClass(item, r.x, r.y); // アクター職業
 * @option this.drawActorNickname(item, r.x, r.y); // アクターの二つ名
 * @option this.drawActorLevel(item, r.x, r.y); // アクターのレベル
 * @option this.drawActorIcons(item, r.x, r.y); // アクターのステートアイコン
 * @option this.drawActorSimpleStatus(item, r.x, r.y, r.width); // アクターのステータス
 * @option this.drawEnemy(r.x, r.y, 'center', 'bottom'); // 敵キャラの画像
 * @option this.drawParam(0, r.x, r.y, 'right'); // DBパラメータ(0:HP 1:MP...)
 * @option this.drawItemName(item, r.x, r.y, r.width); // アイテム、スキル名称(アイコン含む)
 * @option this.drawText($gameParty.numItems(item), r.x, r.y, r.width, 'right'); // アイテムの所持数
 * @option this.drawTextEx(`Text:${item.name}`, r.x, r.y, r.width); // 任意のテキスト描画(制御文字変換あり)
 * @option this.drawText(`Text:${item.name}`, r.x, r.y, r.width, 'right'); // 任意のテキスト描画(制御文字変換なし。右揃え)
 * @option this.changeTextColor(ColorManager.textColor(1)); // テキストカラー変更(drawTextでのみ有効)
 * @option this.drawText(this.findWindowItem('window1').name, r.x, r.y, r.width); // 別ウィンドウで選択している項目名
 * @option this.drawNotePicture('noteValue', r.x, r.y, 'left', 'center', 1.0, 1.0); // 指定したメモ欄のピクチャを描画
 * @option this.placeActorName(item, r.x, r.y); // アクター名称(戦闘用)
 * @option this.placeStateIcon(item, r.x, r.y); // ステートアイコン(戦闘用)
 * @option this.placeGauge(item, 'hp', r.x, r.y); // HPゲージ(戦闘用)
 * @option this.placeBasicGauges(item, r.x, r.y); // ゲージセット(戦闘用)
 * @option this.drawNoteText('noteValue', r.x, r.y); // 指定したメモ欄の内容を描画
 * @option this.drawNoteText('noteValue', r.x, r.y, 'right'); // メモ欄の内容を右寄せ描画
 * @option this.drawSavefileInfo(item, r.x, r.y, r.width); // セーブファイルの内容を描画
 *
 * @param ItemDrawMultiLineScript
 * @parent DataScript
 * @text 描画スクリプト(複数)
 * @desc 項目を描画するスクリプトです。変数[item]から各要素が参照できます。複数行のスクリプトを入力したいときに使います。
 * @default
 * @type multiline_string
 *
 * @param IsEnableScript
 * @parent DataScript
 * @text 選択可能スクリプト
 * @desc 項目を選択可能かどうかを判定するスクリプトです。変数[item]から各要素が参照できます。
 * @default
 * @type combo
 * @option item.meta['value']; // メモ欄に<value>の記述がある
 * @option item.name.match('value'); // 名前にvalueを含む
 * @option item.id > v(10); // IDが変数[10]の値より大きい
 * @option s(parseInt(item.meta['value'])); // <value:n>のスイッチがON
 * @option item !== ''; // 空文字以外
 * @option !!item; // null, undefined, 0, 空文字以外
 * @option item.stypeId === v(10); // スキルタイプが変数[10]の値と等しい
 * @option item.etypeId === v(10); // 装備タイプが変数[10]の値と等しい
 * @option item.wtypeId === v(10); // 武器タイプが変数[10]の値と等しい
 * @option item.atypeId === v(10); // 防具タイプが変数[10]の値と等しい
 * @option item.itypeId === 1; // アイテムタイプが[通常アイテム]
 * @option this._actor.canEquip(item); // メインメニューで選択したアクターが装備可能
 * @option this._actor.canUse(item); // メインメニューで選択したアクターが使用可能
 *
 * @param CommonHelpText
 * @text 共通ヘルプテキスト
 * @desc 選択している項目とは関係なく表示されるヘルプテキストです。
 * @default
 * @type multiline_string
 *
 * @param DecisionEvent
 * @text 決定イベント
 * @desc 項目が決定された瞬間に発生するイベントです。
 * @default {}
 * @type struct<Event>
 *
 * @param CancelEvent
 * @text キャンセルイベント
 * @desc キャンセルされた瞬間に発生するイベントです。
 * @default {}
 * @type struct<Event>
 *
 * @param CursorEvent
 * @text カーソルイベント
 * @desc カーソルが動いた瞬間に発生するイベントです。このイベントではウィンドウのフォーカスは変更されません。
 * @default {}
 * @type struct<Event>
 *
 * @param ButtonEvent
 * @text ボタンイベント
 * @desc 指定されたボタンが押された瞬間に発生するイベントです。
 * @default []
 * @type struct<ButtonEvent>[]
 *
 * @param FontSize
 * @text フォントサイズ
 * @desc デフォルトのフォントサイズです。0を指定すると他のウィンドウと同じサイズになります。
 * @default 0
 * @type number
 *
 * @param FontFace
 * @text フォント
 * @desc ウィンドウのフォントを変更します。フォントファイルのロード機能は提供しないので別途用意してください。
 * @default
 *
 * @param OverlapOther
 * @text 他ウィンドウに重ねる
 * @desc 他のウィンドウと重なって表示させたときに背後のウィンドウをマスキングさせなくなります。
 * @default false
 * @type boolean
 *
 * @param WindowSkin
 * @text ウィンドウスキン
 * @desc ウィンドウスキンです。指定しなかった場合、デフォルトが使用されます。
 * @default
 * @require 1
 * @dir img/system
 * @type file
 *
 * @param VisibleSwitchId
 * @text 表示スイッチID
 * @desc 指定したスイッチがONの場合のみ画面に表示されます。
 * @default 0
 * @type switch
 *
 * @param ShowOpenAnimation
 * @text 開閉アニメ表示
 * @desc ウィンドウの開閉アニメーションを表示します。
 * @default true
 * @type boolean
 *
 * @param RefreshSwitchId
 * @text 再描画スイッチ
 * @desc 指定したスイッチがONになるとウィンドウが再描画されます。再描画の後、スイッチは自動でOFFになります。
 * @default 0
 * @type switch
 *
 * @param IndexVariableId
 * @text インデックス格納変数
 * @desc カーソルインデックスが常に格納される変数です。
 * @default 0
 * @type variable
 *
 * @param RememberIndex
 * @text インデックスを記憶
 * @desc インデックス格納変数を指定している場合、画面を開いたときにカーソルの初期値を変数値で復元します。
 * @default false
 * @type boolean
 *
 * @param ItemVariableId
 * @text 選択項目格納変数
 * @desc 選択中の項目オブジェクトが常に格納される変数です。数値以外のオブジェクトが格納されるので取り扱いに注意してください。
 * @default 0
 * @type variable
 *
 * @param Cancelable
 * @text キャンセル可能
 * @desc 有効にするとウィンドウをキャンセルできるようになります。
 * @default true
 * @type boolean
 *
 * @param PopCancel
 * @text シーン戻しキャンセル
 * @desc 有効にするとこれが最初のウィンドウである場合、ウィンドウキャンセル時に前のシーンに戻ります。
 * @default true
 * @type boolean
 *
 * @param ActorChangeable
 * @text アクター変更可能
 * @desc 有効にするとPageUp, PageDownでアクターチェンジできるようになります。
 * @default false
 * @type boolean
 *
 * @param HiddenNoFocus
 * @text 非フォーカス時は隠す
 * @desc 有効にするとウィンドウにフォーカスが当たっていないときはウィンドウが非表示になります。
 * @default false
 * @type boolean
 *
 * @param DarkNoFocus
 * @text 非フォーカス時は暗転
 * @desc 有効にするとウィンドウにフォーカスが当たっていないときはウィンドウの中身が暗くなります。
 * @default false
 * @type boolean
 *
 * @param MaskingText
 * @text マスキングテキスト
 * @desc コマンドが非表示にされたとき、消える代わりに指定文字列でマスキングされます。ヘルプ欄もマスキングされます。
 * @default
 * @type string
 *
 * @param okSound
 * @text 決定SE
 * @desc 選択すると通常の決定音の代わりに指定したSEが演奏されます。
 * @default
 * @type struct<AudioSe>
 *
 * @param cursorOverContents
 * @text カーソルを手前に表示
 * @desc 有効にすると、ウィンドウカーソルが項目の上に被せるように表示されます。
 * @default false
 * @type boolean
 *
 * @param noItemBackground
 * @text 項目背景を表示しない
 * @desc 有効にすると、項目の黒い背景が表示されなくなります。
 * @default false
 * @type boolean
 *
 * @param noFrame
 * @text 枠を表示しない
 * @desc 有効にすると、ウィンドウの枠が表示されなくなります。
 * @default false
 * @type boolean
 *
 * @param textColor
 * @text テキストカラー
 * @desc 描画文字列のデフォルトカラーです。制御文字「\c[n]」で指定する色番号を指定します。
 * @default 0
 * @type color
 *
 * @param cursorAllSwitchId
 * @text 全選択スイッチID
 * @desc 指定したスイッチがONのときカーソルが全選択状態になります。
 * @default 0
 * @type switch
 *
 * @param cursorFixedSwitchId
 * @text 選択固定スイッチID
 * @desc 指定したスイッチがONのときカーソル選択が固定されます。
 * @default 0
 * @type switch
 */

/*~struct~AudioSe:
 * @param name
 * @text 文件名
 * @desc 文件名称。
 * @default
 * @require 1
 * @dir audio/se/
 * @type file
 *
 * @param volume
 * @text 音量
 * @desc ボリュームです。
 * @default 90
 * @type number
 * @min 0
 * @max 100
 *
 * @param pitch
 * @text ピッチ
 * @desc ピッチです。
 * @default 100
 * @type number
 * @min 50
 * @max 150
 *
 * @param pan
 * @text 左右バランス
 * @desc 左右バランスです。
 * @default 0
 * @type number
 * @min -100
 * @max 100
 */

/*~struct~Command:
 *
 * @param Text
 * @text 項目内容
 * @desc 項目の描画内容です。アイコン系の制御文字が使用できます。
 * @default value01
 * @type string
 *
 * @param Align
 * @text 項目の揃え
 * @desc 項目の揃えです。
 * @default 0
 * @type select
 * @option 左揃え
 * @value 0
 * @option 中央揃え
 * @value 1
 * @option 右揃え
 * @value 2
 *
 * @param VisibleSwitchId
 * @text 表示スイッチID
 * @desc 指定したスイッチがONの場合のみ画面に表示されます。
 * @default 0
 * @type switch
 *
 * @param VisibleScript
 * @text 表示スクリプト
 * @desc 指定したスクリプトがtrueの場合のみ画面に表示されます。変数[item]で『一覧ウィンドウ識別子』の選択項目が参照できます。
 * @default
 * @type combo
 * @option item.meta['value']; // メモ欄に<value>の記述がある
 * @option item.name.match('value'); // 名前にvalueを含む
 * @option item.id > v(10); // IDが変数[10]の値より大きい
 * @option s(parseInt(item.meta['value'])); // <value:n>のスイッチがON
 * @option item !== ''; // 空文字以外
 * @option !!item; // null, undefined, 0, 空文字以外
 * @option item.stypeId === v(10); // スキルタイプが変数[10]の値と等しい
 * @option item.etypeId === v(10); // 装備タイプが変数[10]の値と等しい
 * @option item.wtypeId === v(10); // 武器タイプが変数[10]の値と等しい
 * @option item.atypeId === v(10); // 防具タイプが変数[10]の値と等しい
 * @option item.itypeId === 1; // アイテムタイプが[通常アイテム]
 * @option this._actor.canEquip(item); // メインメニューで選択したアクターが装備可能
 * @option this._actor.canUse(item); // メインメニューで選択したアクターが使用可能
 *
 * @param EnableSwitchId
 * @text 選択可能スイッチID
 * @desc 指定したスイッチがONの場合のみ選択できます。OFFだと選択禁止になります。
 * @default 0
 * @type switch
 *
 * @param IsEnableScript
 * @text 選択可能スクリプト
 * @desc 項目を選択可能かどうかを判定するスクリプトです。変数[item]で『一覧ウィンドウ識別子』の選択項目が参照できます。
 * @default
 * @type combo
 * @option item.meta['value']; // メモ欄に<value>の記述がある
 * @option item.name.match('value'); // 名前にvalueを含む
 * @option item.id > v(10); // IDが変数[10]の値より大きい
 * @option s(parseInt(item.meta['value'])); // <value:n>のスイッチがON
 * @option item !== ''; // 空文字以外
 * @option !!item; // null, undefined, 0, 空文字以外
 * @option item.stypeId === v(10); // スキルタイプが変数[10]の値と等しい
 * @option item.etypeId === v(10); // 装備タイプが変数[10]の値と等しい
 * @option item.wtypeId === v(10); // 武器タイプが変数[10]の値と等しい
 * @option item.atypeId === v(10); // 防具タイプが変数[10]の値と等しい
 * @option item.itypeId === 1; // アイテムタイプが[通常アイテム]
 * @option this._actor.canEquip(item); // メインメニューで選択したアクターが装備可能
 * @option this._actor.canUse(item); // メインメニューで選択したアクターが使用可能
 *
 * @param HelpText
 * @text ヘルプテキスト
 * @desc ヘルプウィンドウを表示している場合、ヘルプテキストが表示されます。
 * @default
 * @type multiline_string
 *
 * @param DecisionEvent
 * @text 決定イベント
 * @desc この項目が決定された瞬間に発生するイベントです。指定した場合、共通の決定イベントより優先されます。
 * @default
 * @type struct<Event>
 *
 * @param CancelChoice
 * @text キャンセル選択肢
 * @desc この項目を選択したときに発生するイベントがキャンセルイベントになります。
 * @default false
 * @type boolean
 *
 * @param OkSound
 * @text 決定SE
 * @desc 選択すると通常の決定音の代わりに指定したSEが演奏されます。
 * @default
 * @type struct<AudioSe>
 *
 */

/*~struct~ButtonEvent:
 *
 * @param Name
 * @text ボタン名
 * @desc 押したときにイベントが発生するボタン名です。okとcancelはタッチ操作と決定とキャンセルにも反応します。
 * @default
 * @type combo
 * @option ok
 * @option cancel
 * @option menu
 * @option shift
 * @option control
 * @option down
 * @option left
 * @option right
 * @option up
 * @option pageup
 * @option pagedown
 * @option debug
 * @option tab
 *
 * @param Event
 * @text イベント
 * @desc 指定したボタンが押された瞬間に発生するイベントです。
 * @default {}
 * @type struct<Event>
 */

/*~struct~Event:
 *
 * @param CommandId
 * @text コモンイベント
 * @desc 対象のイベントが発生したときに実行されるコモンイベントです。ただし、シーンを出るときは実行されません。
 * @default 0
 * @type common_event
 *
 * @param FocusWindowId
 * @text ウィンドウ識別子
 * @desc 対象のイベントが発生したときにフォーカスされるウィンドウ識別子です。指定がなければ前のウィンドウに戻ります。
 * @default
 * @type string
 *
 * @param FocusWindowIndex
 * @text カーソルインデックス
 * @desc 対象のイベントが発生したときにフォーカスされるウィンドウのカーソルインデックスです。-1を指定した場合、操作しません。
 * @default -1
 * @type number
 * @min -1
 *
 * @param Script
 * @text スクリプト
 * @desc 対象のイベントが発生したときに実行されるスクリプトです。
 * @default
 * @type combo
 * @option SceneManager.callCustomMenu('Scene___'); // 別のカスタムメニューに移動
 * @option this.popScene(); // 元のシーンに戻る
 * @option SceneManager.goto(Scene_Map); // マップ画面に遷移
 * @option SceneManager.changeWindowFocus('window1'); // 指定ウィンドウにフォーカス
 * @option SceneManager.changeWindowIndex('window1', 1); // 指定ウィンドウのインデックス変更
 * @option SceneManager.trashScene(); // 元のシーン情報を破棄する
 * @option SceneManager.showMapPicture(1, '', 0, 0, 0, 100, 100, 255, 1); // マップ画面にピクチャを表示
 * @option this.executeSave(v(1)); // セーブ実行
 * @option this.executeLoad(v(1)); // ロード実行
 *
 * @param SwitchId
 * @text スイッチ
 * @desc 対象のイベントが発生したときにONになるスイッチです。
 * @type switch
 *
 * @param Deselect
 * @text 元ウィンドウ選択解除
 * @desc 対象のイベントが発生したときに元々フォーカスされていたウィンドウの選択状態を解除します。
 * @default false
 * @type boolean
 */

/*~struct~ReplacementScene:
 * @param scene
 * @text 差し替え元シーン
 * @desc カスタムメニューに差し替えるもとになるシーンです。マップなども選択できますが挙動が大きく変わるのでご注意ください。
 * @type select
 * @default Scene_Menu
 * @option タイトル
 * @value Scene_Title
 * @option マップ
 * @value Scene_Map
 * @option ゲームオーバー
 * @value Scene_Gameover
 * @option バトル
 * @value Scene_Battle
 * @option メインメニュー
 * @value Scene_Menu
 * @option アイテム
 * @value Scene_Item
 * @option スキル
 * @value Scene_Skill
 * @option 装備
 * @value Scene_Equip
 * @option ステータス
 * @value Scene_Status
 * @option オプション
 * @value Scene_Options
 * @option セーブ
 * @value Scene_Save
 * @option ロード
 * @value Scene_Load
 * @option ゲーム終了
 * @value Scene_End
 * @option ショップ
 * @value Scene_Shop
 * @option 名前入力
 * @value Scene_Name
 * @option デバッグ
 * @value Scene_Debug
 *
 * @param customScene
 * @text カスタムメニューシーン
 * @desc 差し替え先のカスタムメニューシーンの識別子を指定します。制御文字\v[n]が使えます。
 * @default
 */

/*:
 * @plugindesc カスタムメニュー作成プラグイン
 * @target MZ
 * @url https://github.com/triacontane/RPGMakerMV/tree/mz_master/SceneCustomMenu.js
 * @base PluginCommonBase
 * @orderAfter PluginCommonBase
 * @author トリアコンタン
 *
 * @param Scene1
 * @text シーン1
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {"Id":"Scene_ActorList","UseHelp":"true","HelpRows":"0","InitialEvent":"","WindowList":"[\"{\\\"Id\\\":\\\"member_window\\\",\\\"x\\\":\\\"0\\\",\\\"RelativeWindowIdX\\\":\\\"\\\",\\\"y\\\":\\\"0\\\",\\\"RelativeWindowIdY\\\":\\\"\\\",\\\"width\\\":\\\"480\\\",\\\"height\\\":\\\"0\\\",\\\"ColumnNumber\\\":\\\"1\\\",\\\"RowNumber\\\":\\\"4\\\",\\\"ItemHeight\\\":\\\"111\\\",\\\"CommandList\\\":\\\"\\\",\\\"DataScript\\\":\\\"\\\",\\\"ListWindowId\\\":\\\"\\\",\\\"ListScript\\\":\\\"$gameParty.members(); // パーティメンバー\\\",\\\"FilterScript\\\":\\\"\\\",\\\"MappingScript\\\":\\\"\\\",\\\"ItemDrawScript\\\":\\\"[\\\\\\\"this.drawActorSimpleStatus(item, r.x, r.y, r.width); // アクターのステータス\\\\\\\"]\\\",\\\"IsEnableScript\\\":\\\"\\\",\\\"CommonHelpText\\\":\\\"アクターを選択してください。\\\",\\\"DecisionEvent\\\":\\\"{\\\\\\\"CommandId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"FocusWindowId\\\\\\\":\\\\\\\"confirm\\\\\\\",\\\\\\\"FocusWindowIndex\\\\\\\":\\\\\\\"-1\\\\\\\",\\\\\\\"Script\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchId\\\\\\\":\\\\\\\"\\\\\\\"}\\\",\\\"CancelEvent\\\":\\\"{}\\\",\\\"CursorEvent\\\":\\\"{}\\\",\\\"FontSize\\\":\\\"0\\\",\\\"WindowSkin\\\":\\\"\\\",\\\"VisibleSwitchId\\\":\\\"0\\\",\\\"ShowOpenAnimation\\\":\\\"false\\\",\\\"RefreshSwitchId\\\":\\\"0\\\",\\\"IndexVariableId\\\":\\\"0\\\",\\\"ItemVariableId\\\":\\\"0\\\",\\\"Cancelable\\\":\\\"true\\\",\\\"ActorChangeable\\\":\\\"false\\\",\\\"HiddenNoFocus\\\":\\\"false\\\",\\\"MaskingText\\\":\\\"\\\"}\",\"{\\\"Id\\\":\\\"detail_window\\\",\\\"x\\\":\\\"0\\\",\\\"RelativeWindowIdX\\\":\\\"member_window\\\",\\\"y\\\":\\\"0\\\",\\\"RelativeWindowIdY\\\":\\\"\\\",\\\"width\\\":\\\"0\\\",\\\"height\\\":\\\"300\\\",\\\"ColumnNumber\\\":\\\"1\\\",\\\"RowNumber\\\":\\\"0\\\",\\\"ItemHeight\\\":\\\"0\\\",\\\"CommandList\\\":\\\"\\\",\\\"DataScript\\\":\\\"\\\",\\\"ListWindowId\\\":\\\"member_window\\\",\\\"ListScript\\\":\\\"\\\",\\\"FilterScript\\\":\\\"\\\",\\\"MappingScript\\\":\\\"\\\",\\\"ItemDrawScript\\\":\\\"[\\\\\\\"this.drawFace(item.faceName(), item.faceIndex(), r.x, r.y); // フェイスグラフィック\\\\\\\"]\\\",\\\"IsEnableScript\\\":\\\"\\\",\\\"CommonHelpText\\\":\\\"\\\",\\\"DecisionEvent\\\":\\\"{}\\\",\\\"CancelEvent\\\":\\\"{}\\\",\\\"CursorEvent\\\":\\\"{}\\\",\\\"FontSize\\\":\\\"0\\\",\\\"WindowSkin\\\":\\\"\\\",\\\"VisibleSwitchId\\\":\\\"0\\\",\\\"ShowOpenAnimation\\\":\\\"true\\\",\\\"RefreshSwitchId\\\":\\\"0\\\",\\\"IndexVariableId\\\":\\\"0\\\",\\\"ItemVariableId\\\":\\\"0\\\",\\\"Cancelable\\\":\\\"true\\\",\\\"ActorChangeable\\\":\\\"false\\\",\\\"HiddenNoFocus\\\":\\\"false\\\",\\\"MaskingText\\\":\\\"\\\"}\",\"{\\\"Id\\\":\\\"confirm\\\",\\\"x\\\":\\\"0\\\",\\\"RelativeWindowIdX\\\":\\\"member_window\\\",\\\"y\\\":\\\"0\\\",\\\"RelativeWindowIdY\\\":\\\"detail_window\\\",\\\"width\\\":\\\"130\\\",\\\"height\\\":\\\"0\\\",\\\"ColumnNumber\\\":\\\"1\\\",\\\"RowNumber\\\":\\\"2\\\",\\\"ItemHeight\\\":\\\"36\\\",\\\"CommandList\\\":\\\"[\\\\\\\"{\\\\\\\\\\\\\\\"Text\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"はい\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"VisibleSwitchId\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"EnableSwitchId\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"HelpText\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"CancelChoice\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"false\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"{\\\\\\\\\\\\\\\"Text\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"いいえ\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"VisibleSwitchId\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"EnableSwitchId\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"HelpText\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"CancelChoice\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"true\\\\\\\\\\\\\\\"}\\\\\\\"]\\\",\\\"DataScript\\\":\\\"\\\",\\\"ListScript\\\":\\\"\\\",\\\"FilterScript\\\":\\\"\\\",\\\"MappingScript\\\":\\\"\\\",\\\"ItemDrawScript\\\":\\\"\\\",\\\"IsEnableScript\\\":\\\"\\\",\\\"CommonHelpText\\\":\\\"本当によろしいですか？\\\",\\\"DecisionEvent\\\":\\\"{\\\\\\\"CommandId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"FocusWindowId\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FocusWindowIndex\\\\\\\":\\\\\\\"-1\\\\\\\",\\\\\\\"Script\\\\\\\":\\\\\\\"SceneManager.callCustomMenu('Scene_ActorListNext'); //\\\\\\\",\\\\\\\"SwitchId\\\\\\\":\\\\\\\"\\\\\\\"}\\\",\\\"CancelEvent\\\":\\\"{}\\\",\\\"CursorEvent\\\":\\\"{}\\\",\\\"FontSize\\\":\\\"0\\\",\\\"WindowSkin\\\":\\\"\\\",\\\"VisibleSwitchId\\\":\\\"0\\\",\\\"ShowOpenAnimation\\\":\\\"true\\\",\\\"RefreshSwitchId\\\":\\\"0\\\",\\\"IndexVariableId\\\":\\\"0\\\",\\\"Cancelable\\\":\\\"true\\\",\\\"ActorChangeable\\\":\\\"false\\\",\\\"HiddenNoFocus\\\":\\\"true\\\",\\\"MaskingText\\\":\\\"\\\"}\"]","Panorama":""}
 * @type struct<Scene>
 *
 * @param Scene2
 * @text シーン2
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {"Id":"Scene_ActorListNext","UseHelp":"true","InitialEvent":"","WindowList":"[\"{\\\"Id\\\":\\\"window1\\\",\\\"x\\\":\\\"0\\\",\\\"RelativeWindowIdX\\\":\\\"\\\",\\\"y\\\":\\\"0\\\",\\\"RelativeWindowIdY\\\":\\\"\\\",\\\"width\\\":\\\"0\\\",\\\"height\\\":\\\"0\\\",\\\"ColumnNumber\\\":\\\"2\\\",\\\"RowNumber\\\":\\\"0\\\",\\\"ItemHeight\\\":\\\"0\\\",\\\"CommandList\\\":\\\"\\\",\\\"DataScript\\\":\\\"\\\",\\\"ListScript\\\":\\\"$dataClasses.filter(data => !!data); // データベースの職業\\\",\\\"FilterScript\\\":\\\"\\\",\\\"MappingScript\\\":\\\"\\\",\\\"ItemDrawScript\\\":\\\"\\\",\\\"IsEnableScript\\\":\\\"item.meta['value']; // メモ欄に<value>の記述がある\\\",\\\"CommonHelpText\\\":\\\"メモ欄に<value>と書いた職業だけ選択できます。\\\",\\\"DecisionEvent\\\":\\\"{\\\\\\\"CommandId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"FocusWindowId\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"FocusWindowIndex\\\\\\\":\\\\\\\"-1\\\\\\\",\\\\\\\"Script\\\\\\\":\\\\\\\"this.popScene(); // 元のシーンに戻る\\\\\\\",\\\\\\\"SwitchId\\\\\\\":\\\\\\\"\\\\\\\"}\\\",\\\"CancelEvent\\\":\\\"{}\\\",\\\"FontSize\\\":\\\"0\\\",\\\"WindowSkin\\\":\\\"\\\",\\\"VisibleSwitchId\\\":\\\"0\\\",\\\"ShowOpenAnimation\\\":\\\"true\\\",\\\"RefreshSwitchId\\\":\\\"0\\\",\\\"IndexVariableId\\\":\\\"0\\\",\\\"Cancelable\\\":\\\"true\\\",\\\"ActorChangeable\\\":\\\"false\\\",\\\"HiddenNoFocus\\\":\\\"false\\\"}\"]"}
 * @type struct<Scene>
 *
 * @param Scene3
 * @text シーン3
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {"Id":"Scene_ActorDetail","UseHelp":"true","InitialEvent":"","WindowList":"[\"{\\\"Id\\\":\\\"actor_name\\\",\\\"x\\\":\\\"0\\\",\\\"RelativeWindowIdX\\\":\\\"\\\",\\\"y\\\":\\\"0\\\",\\\"RelativeWindowIdY\\\":\\\"\\\",\\\"width\\\":\\\"420\\\",\\\"height\\\":\\\"0\\\",\\\"ColumnNumber\\\":\\\"1\\\",\\\"RowNumber\\\":\\\"1\\\",\\\"ItemHeight\\\":\\\"0\\\",\\\"CommandList\\\":\\\"\\\",\\\"DataScript\\\":\\\"\\\",\\\"ListScript\\\":\\\"[this._actor]; // メインメニューで選択したアクター\\\",\\\"FilterScript\\\":\\\"\\\",\\\"MappingScript\\\":\\\"\\\",\\\"ItemDrawScript\\\":\\\"[\\\\\\\"this.drawActorSimpleStatus(item, r.x, r.y, r.width); // アクターのステータス\\\\\\\"]\\\",\\\"IsEnableScript\\\":\\\"\\\",\\\"CommonHelpText\\\":\\\"PgUp, PgDnキーでアクターを変更できます。\\\",\\\"DecisionEvent\\\":\\\"{\\\\\\\"CommandId\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"FocusWindowId\\\\\\\":\\\\\\\"actor_name\\\\\\\",\\\\\\\"FocusWindowIndex\\\\\\\":\\\\\\\"-1\\\\\\\",\\\\\\\"Script\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"SwitchId\\\\\\\":\\\\\\\"\\\\\\\"}\\\",\\\"CancelEvent\\\":\\\"{}\\\",\\\"FontSize\\\":\\\"0\\\",\\\"WindowSkin\\\":\\\"\\\",\\\"VisibleSwitchId\\\":\\\"0\\\",\\\"ShowOpenAnimation\\\":\\\"true\\\",\\\"RefreshSwitchId\\\":\\\"0\\\",\\\"IndexVariableId\\\":\\\"0\\\",\\\"Cancelable\\\":\\\"true\\\",\\\"ActorChangeable\\\":\\\"true\\\",\\\"HiddenNoFocus\\\":\\\"false\\\"}\",\"{\\\"Id\\\":\\\"slot\\\",\\\"x\\\":\\\"0\\\",\\\"RelativeWindowIdX\\\":\\\"\\\",\\\"y\\\":\\\"0\\\",\\\"RelativeWindowIdY\\\":\\\"actor_name\\\",\\\"width\\\":\\\"200\\\",\\\"height\\\":\\\"0\\\",\\\"ColumnNumber\\\":\\\"1\\\",\\\"RowNumber\\\":\\\"0\\\",\\\"ItemHeight\\\":\\\"0\\\",\\\"CommandList\\\":\\\"\\\",\\\"DataScript\\\":\\\"\\\",\\\"ListScript\\\":\\\"this._actor.equipSlots(); // メインメニューで選択したアクターの装備スロット\\\",\\\"FilterScript\\\":\\\"\\\",\\\"MappingScript\\\":\\\"$dataSystem.equipTypes[item]; // 装備スロットIDを装備スロット名称に変換\\\",\\\"ItemDrawScript\\\":\\\"\\\",\\\"IsEnableScript\\\":\\\"\\\",\\\"CommonHelpText\\\":\\\"\\\",\\\"DecisionEvent\\\":\\\"\\\",\\\"CancelEvent\\\":\\\"{}\\\",\\\"FontSize\\\":\\\"0\\\",\\\"WindowSkin\\\":\\\"\\\",\\\"VisibleSwitchId\\\":\\\"0\\\",\\\"ShowOpenAnimation\\\":\\\"true\\\",\\\"RefreshSwitchId\\\":\\\"0\\\",\\\"IndexVariableId\\\":\\\"0\\\",\\\"Cancelable\\\":\\\"true\\\",\\\"ActorChangeable\\\":\\\"true\\\",\\\"HiddenNoFocus\\\":\\\"false\\\"}\",\"{\\\"Id\\\":\\\"equip\\\",\\\"x\\\":\\\"0\\\",\\\"RelativeWindowIdX\\\":\\\"slot\\\",\\\"y\\\":\\\"0\\\",\\\"RelativeWindowIdY\\\":\\\"actor_name\\\",\\\"width\\\":\\\"400\\\",\\\"height\\\":\\\"0\\\",\\\"ColumnNumber\\\":\\\"1\\\",\\\"RowNumber\\\":\\\"0\\\",\\\"ItemHeight\\\":\\\"0\\\",\\\"CommandList\\\":\\\"\\\",\\\"DataScript\\\":\\\"\\\",\\\"ListScript\\\":\\\"this._actor.equips(); // メインメニューで選択したアクターの装備スロットID\\\",\\\"FilterScript\\\":\\\"\\\",\\\"MappingScript\\\":\\\"\\\",\\\"ItemDrawScript\\\":\\\"\\\",\\\"IsEnableScript\\\":\\\"\\\",\\\"CommonHelpText\\\":\\\"\\\",\\\"DecisionEvent\\\":\\\"\\\",\\\"CancelEvent\\\":\\\"{}\\\",\\\"FontSize\\\":\\\"0\\\",\\\"WindowSkin\\\":\\\"\\\",\\\"VisibleSwitchId\\\":\\\"0\\\",\\\"ShowOpenAnimation\\\":\\\"true\\\",\\\"RefreshSwitchId\\\":\\\"0\\\",\\\"IndexVariableId\\\":\\\"0\\\",\\\"Cancelable\\\":\\\"true\\\",\\\"ActorChangeable\\\":\\\"true\\\",\\\"HiddenNoFocus\\\":\\\"false\\\"}\"]"}
 * @type struct<Scene>
 *
 * @param Scene4
 * @text シーン4
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene5
 * @text シーン5
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene6
 * @text シーン6
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene7
 * @text シーン7
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene8
 * @text シーン8
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene9
 * @text シーン9
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene10
 * @text シーン10
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene11
 * @text シーン11
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene12
 * @text シーン12
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene13
 * @text シーン13
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene14
 * @text シーン14
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene15
 * @text シーン15
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene16
 * @text シーン16
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene17
 * @text シーン17
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene18
 * @text シーン18
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene19
 * @text シーン19
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param Scene20
 * @text シーン20
 * @desc 生成するカスタムメニュー用のシーン情報です。
 * @default {}
 * @type struct<Scene>
 *
 * @param ReplacementList
 * @text シーン差し替えリスト
 * @desc メインメニューを指定した識別子のカスタムメニューに差し替えます。
 * @default []
 * @type struct<ReplacementScene>[]
 *
 * @param NoUseBlendAdd
 * @text 加算合成を使用しない
 * @desc ピクチャやアニメーション表示で加算合成が使えなくなります。設定を有効にすることで競合を回避できる可能性があります。
 * @default true
 * @type boolean
 *
 * @command CALL_SCENE
 * @text シーン呼び出し
 * @desc 指定した識別子のシーンを呼び出します。
 *
 * @arg id
 * @text シーン識別子
 * @desc 呼び出すシーン識別子です。
 * @default Scene_ActorList
 *
 * @command CONTROL_WINDOW
 * @text ウィンドウ操作
 * @desc IDを指定してウィンドウを操作します。
 *
 * @arg id
 * @text ウィンドウID
 * @desc 操作するウィンドウのIDです。
 * @default
 * @type string
 *
 * @arg type
 * @text 操作タイプ
 * @desc 操作種別です。
 * @default refresh
 * @type select
 * @option ウィンドウを再描画
 * @value refresh
 * @option ウィンドウにフォーカス
 * @value activate
 * @option インデックス変更
 * @value select
 *
 * @arg index
 * @text インデックス
 * @desc 操作タイプがインデックス変更の場合に使用するインデックスです。
 * @default 0
 * @type number
 *
 * @help SceneCustomMenu.js
 *
 * パラメータからウィンドウ情報を定義して独自のメニュー画面を作れます。
 * 初期状態で動作するサンプルや豊富なスクリプトのプリセットが用意されていて
 * すぐに動作を確認できます。
 * スクリプトでエラーが発生すると開発者ツールにログが表示されます。
 * また、コモンイベントが使えるので細かい要件にも対応できます。
 *
 * カスタムメニュー画面を作成するには、大まかに以下の手順を踏みます。
 *
 * 1. ウィンドウを定義する
 * 　プラグインパラメータからウィンドウと項目内容を定義します。
 * 　項目内容は固定文字列のほか、データベースやアクターデータ等も指定可能です。
 *
 * 2. ウィンドウ間の繋がりを定義する
 * 　ウィンドウで決定やキャンセルをしたとき、別のウィンドウに移ったり
 * 　画面を出たりするよう、ウィンドウ間の繋がりを定義します。
 *
 * 3. イベントを定義する
 * 　ウィンドウで決定やキャンセルをしたときに実行されるスクリプトや
 * 　コモンイベントの情報を定義します。
 *
 * カスタムメニューを呼び出すには以下のスクリプトを実行します。
 * プラグインコマンドからも呼び出せます。
 * 『Scene_ActorList』の箇所には『シーン識別子』を設定します。
 *
 *  SceneManager.callCustomMenu('Scene_ActorList');
 *
 * メインメニュー画面にカスタムメニューの項目を追加する機能はありません。
 * 既存のプラグイン等と連携させてください。
 *
 * ・スクリプト
 *
 * 遷移元シーンの情報をひとつ破棄します。
 * SceneManager.trashScene();
 *
 * 指定したウィンドウインスタンスを取得します。（上級者向け）
 * SceneManager.findCustomMenuWindow('window1');
 *
 * マップ画面にピクチャを表示します。
 * SceneManager.showMapPicture(1, 'ファイル名', 0, 0, 0, 100, 100, 255, 1);
 *
 * 現在のシーンが指定した識別子のカスタムシーンかどうかを返します。
 * SceneManager.isCustomScene('Scene_ActorList')
 *
 * 指定したIDのウィンドウがアクティブになっているかどうかを返します。
 * SceneManager.isCustomMenuActiveWindow('window1')
 *
 * 指定した番号のスイッチや変数の値を取得します。
 * v(1)
 * s(1)
 *
 * 利用規約：
 *  作者に無断で改変、再配布が可能で、利用形態（商用、18禁利用等）
 *  についても制限はありません。
 *  このプラグインはもうあなたのものです。
 */

/*~struct~Scene:
 *
 * @param Id
 * @text シーン識別子
 * @desc シーンを呼び出す際の識別子です。他の識別子と重複しない文字列を指定してください。
 * @default Scene_Test
 * @type string
 *
 * @param UseHelp
 * @text ヘルプウィンドウ使用
 * @desc 有効にした場合、ヘルプウィンドウを表示します。
 * @default 1
 * @type select
 * @option 使用しない
 * @value 0
 * @option 画面下部に表示(MZデフォルト)
 * @value 1
 * @option 画面上部に表示
 * @value 2
 *
 * @param HelpRows
 * @text ヘルプ行数
 * @desc ヘルプウィンドウの行数をデフォルトの2から変更したい場合に指定してください。
 * @default 0
 * @type number
 *
 * @param InitialEvent
 * @text 初期イベント
 * @desc シーンが表示された瞬間に発生するイベントです。初期イベントに指定したウィンドウでキャンセルすると画面から抜けます。
 * @default {}
 * @type struct<Event>
 *
 * @param ParallelEventId
 * @text 並列コモンイベントID
 * @desc シーンが表示されている間、常に実行され続けるコモンイベントです。パフォーマンスの低下に注意して使ってください。
 * @default 0
 * @type common_event
 *
 * @param ActorChangeEvent
 * @text アクター変更イベント
 * @desc アクターを変更した瞬間に発生するイベントです。このイベントではウィンドウのフォーカスは変更されません。
 * @default
 * @type struct<Event>
 *
 * @param WindowList
 * @text ウィンドウ一覧
 * @desc シーンで使用されるウィンドウの一覧です。
 * @default []
 * @type struct<Window>[]
 *
 * @param PicturePriority
 * @text ピクチャ表示優先度
 * @desc ピクチャのウィンドウに対する表示優先度を設定します。
 * @default 0
 * @type select
 * @option 最前面
 * @value 0
 * @option メッセージウィンドウの下
 * @value 1
 * @option すべてのウィンドウの下
 * @value 2
 *
 * @param Panorama
 * @text パノラマ画像
 * @desc 背景情報を指定します。
 * @default
 * @type struct<Panorama>
 *
 * @param UsePageButtons
 * @text ページボタンの使用
 * @desc 有効にした場合、ページボタンを表示します。
 * @default false
 * @type boolean
 *
 * @param SnapNoFilter
 * @text 背景ぼかし無効化
 * @desc 指定した場合、背景スナップのぼかしが適用されなくなります。
 * @default false
 * @type boolean
 *
 */

/*~struct~Panorama:
 *
 * @param Image
 * @text 画像ファイル
 * @desc 背景として表示される画像ファイルを指定します。指定しなかった場合、マップのぼかし画像が表示されます。
 * @default
 * @require 1
 * @dir img/parallaxes
 * @type file
 *
 * @param ScrollX
 * @text スクロールX
 * @desc 背景画像の横方向のスクロール速度です。
 * @default 0
 * @type number
 *
 * @param ScrollY
 * @text スクロールY
 * @desc 背景画像の縦方向のスクロール速度です。
 * @default 0
 * @type number
 */

/*~struct~Window:
 *
 * @param Id
 * @text ウィンドウ識別子
 * @desc ウィンドウの識別子(ID)です。リスト内で他の識別子と重複しない文字列を指定してください。
 * @default window1
 * @type string
 *
 * @param x
 * @text X座標
 * @desc X座標です。
 * @default 0
 * @type number
 * @min -2000
 *
 * @param RelativeWindowIdX
 * @text 相対X座標ウィンドウ
 * @desc 指定した場合、X座標が対象ウィンドウからの相対位置になります。
 * @default
 *
 * @param y
 * @text Y座標
 * @desc Y座標です。
 * @default 0
 * @type number
 * @min -2000
 *
 * @param RelativeWindowIdY
 * @text 相対Y座標ウィンドウ
 * @desc 指定した場合、Y座標が対象ウィンドウからの相対位置になります。
 * @default
 *
 * @param width
 * @text 横幅
 * @desc 横幅です。0を指定した場合は画面の横幅に合わせられます。
 * @default 0
 * @type number
 *
 * @param height
 * @text 高さ
 * @desc 高さです。0を指定した場合は『行数』の指定をもとに自動設定されます。
 * @default 0
 * @type number
 *
 * @param originX
 * @text X軸原点
 * @desc ウィンドウの座標を決める原点です。指定する場合、横幅も指定してください。
 * @default 0
 * @type select
 * @option 左
 * @value 0
 * @option 中央
 * @value 1
 * @option 右
 * @value 2
 *
 * @param ColumnNumber
 * @text 列数
 * @desc ウィンドウの列数です。
 * @default 1
 * @type number
 * @min 1
 *
 * @param RowNumber
 * @text 行数
 * @desc ウィンドウの行数です。高さを決定するために使われます。0を指定した場合はコマンド数をもとに自動設定されます。
 * @default 0
 * @type number
 *
 * @param Rotation
 * @text 回転角度
 * @desc ウィンドウの角度です。度数法(0-360)で指定します。中身のフィルタが効かなくなる制約があります。
 * @default 0
 * @type number
 *
 * @param ItemHeight
 * @text 項目の高さ
 * @desc 1項目あたりの高さです。0を指定した場合はウィンドウのデフォルト値が使用されます。
 * @default 0
 * @type number
 *
 * @param CommandList
 * @text コマンドリスト
 * @desc ウィンドウに表示される項目や表示可否を直接指定します。項目が最初から決まっている場合に使います。
 * @type struct<Command>[]
 *
 * @param DataScript
 * @text データスクリプト
 * @desc ウィンドウに表示される項目や表示可否をスクリプトから構築します。
 *
 * @param ListWindowId
 * @parent DataScript
 * @text 一覧ウィンドウ識別子
 * @desc 別の一覧ウィンドウの詳細情報を表示するウィンドウの場合、一覧のウィンドウ識別子を指定します。
 * @default
 *
 * @param ListScript
 * @parent DataScript
 * @text 一覧取得スクリプト
 * @desc 項目の一覧を返すスクリプトです。プリセットから選ぶこともできます。『一覧ウィンドウ識別子』を指定した場合は無効です。
 * @default
 * @type combo
 * @option null; // なし(単項目表示ウィンドウ用)
 * @option $gameParty.members(); // パーティメンバー
 * @option $gameParty.battleMembers(); // 戦闘メンバー
 * @option $gameParty.reserveMembers(); // リザーブメンバー
 * @option $gameParty.items(); // 所持消耗品
 * @option $gameParty.weapons(); // 所持武器
 * @option $gameParty.armors(); // 所持防具
 * @option $gameParty.equipItems(); // 所持装備品
 * @option $gameParty.allItems(); // 所持アイテム
 * @option [this._actor]; // メインメニューで選択したアクター
 * @option this._actor.weapons(); // メインメニューで選択したアクターの装備武器
 * @option $gameParty.members()[v(1)].weapons(); // 変数[1]のPTメンバーの装備武器
 * @option this.createSaveFiles(); // セーブファイル一覧
 * @option this._actor.armors(); // メインメニューで選択したアクターの装備防具
 * @option this._actor.equips(); // メインメニューで選択したアクターの装備品
 * @option this._actor.equipSlots(); // メインメニューで選択したアクターの装備スロットID
 * @option this._actor.skills(); // メインメニューで選択したアクターの所持スキル
 * @option this._actor.usableSkills(); // メインメニューで選択したアクターの使用可能スキル
 * @option this._actor.currentClass().learnings; //メインメニューで選択したアクターの職業の習得スキル
 * @option $dataActors.filter(data => !!data); // データベースのアクター
 * @option $dataClasses.filter(data => !!data); // データベースの職業
 * @option $dataSkills.filter(data => !!data); // データベースのスキル
 * @option $dataItems.filter(data => !!data); // データベースのアイテム
 * @option $dataWeapons.filter(data => !!data); // データベースの武器
 * @option $dataArmors.filter(data => !!data); // データベースの防具
 * @option $dataEnemies.filter(data => !!data); // データベースの敵キャラ
 * @option $dataTroops.filter(data => !!data); // データベースの敵グループ
 * @option $dataStates.filter(data => !!data); // データベースのステート
 * @option $dataItems.concat($dataWeapons, $dataArmors).filter(data => !!data); // アイテム、武器防具
 * @option $dataSystem.weaponTypes.filter((d, i) => i > 0); // 武器タイプ
 * @option $dataSystem.armorTypes.filter((d, i) => i > 0); // 防具タイプ
 * @option $dataSystem.skillTypes.filter((d, i) => i > 0); // スキルタイプ
 * @option $dataSystem.equipTypes.filter((d, i) => i > 0); // 装備タイプ
 * @option $dataSystem.elements.filter((d, i) => i > 0); // 属性
 * @option $dataSystem.switches; // スイッチ名
 * @option $dataSystem.variables; // 変数名
 * @option $dataSystem.params; // 能力値(用語)
 * @option $dataSystem.commands; // コマンド(用語)
 * @option $dataSystem.basic; // 基本ステータス(用語)
 *
 * @param FilterScript
 * @parent DataScript
 * @text フィルタスクリプト
 * @desc 項目の一覧に対して表示条件を設定します。変数[item]から各要素が参照できます。
 * @default
 * @type combo
 * @option item.meta['value']; // メモ欄に<value>の記述がある
 * @option item.name.match('value'); // 名前にvalueを含む
 * @option item.id > v(10); // IDが変数[10]の値より大きい
 * @option s(parseInt(item.meta['value'])); // <value:n>のスイッチがON
 * @option item !== ''; // 空文字以外
 * @option !!item; // null, undefined, 0, 空文字以外
 * @option item.stypeId === v(10); // スキルタイプが変数[10]の値と等しい
 * @option item.etypeId === v(10); // 装備タイプが変数[10]の値と等しい
 * @option item.wtypeId === v(10); // 武器タイプが変数[10]の値と等しい
 * @option item.atypeId === v(10); // 防具タイプが変数[10]の値と等しい
 * @option item.itypeId === 1; // アイテムタイプが[通常アイテム]
 * @option this._actor.canEquip(item); // メインメニューで選択したアクターが装備可能
 * @option this._actor.canUse(item); // メインメニューで選択したアクターが使用可能
 *
 * @param MappingScript
 * @parent DataScript
 * @text マッピングスクリプト
 * @desc 一覧の項目を別の値に変換します。変数[item]から各要素が参照できます。必要な場合にのみ指定してください。
 * @type combo
 * @option item.actor(); // Game_ActorからデータベースのActorに変換
 * @option $dataSkills[item.skillId]; // 習得スキル情報をデータベースのSkillに変換
 * @option $dataSystem.equipTypes[item]; // 装備スロットIDを装備スロット名称に変換
 *
 * @param SortScript
 * @parent DataScript
 * @text ソートスクリプト
 * @desc 一覧の項目をソートします。変数[a] 変数[b]が比較用の各要素の参照です。
 * @type combo
 * @option a.id - b.id; // ID順
 * @option a.name.localeCompare(b.name); // 名前順
 * @option this.intMeta(a,'order') - this.intMeta(b,'order'); // メモ欄のorder順
 * @option a.price - b.price; // 値段順
 * @option a.params[0] - b.params[0]; // HP順
 * @option a.params[1] - b.params[1]; // MP順
 * @option a.params[2] - b.params[2]; // 攻撃力順
 * @option a.params[3] - b.params[3]; // 防御力順
 * @option a.params[4] - b.params[4]; // 魔法力順
 * @option a.params[5] - b.params[5]; // 魔法防御順
 * @option a.params[6] - b.params[6]; // 敏捷性順
 * @option a.params[7] - b.params[7]; // 運順
 *
 * @param ItemDrawScript
 * @parent DataScript
 * @text 項目描画スクリプト
 * @desc 項目を描画するスクリプトです。変数[item]から各要素が参照できます。省略すると自働で描画されます。
 * @default []
 * @type combo[]
 * @option this.drawIcon(item.iconIndex, r.x, r.y, r.width); // アイコン
 * @option this.drawFace(item.faceName(), item.faceIndex(), r.x, r.y); // フェイスグラフィック
 * @option this.drawCharacter(item.characterName(), item.characterIndex(), r.x, r.y); // キャラクター
 * @option this.drawActorCharacter(item, r.x + 24, r.y + 48); // アクターキャラクター
 * @option this.drawActorCharacter(this._actor, r.x, r.y); // メインメニューで選択したアクターキャラクター
 * @option this.drawActorFace(item, r.x, r.y); // アクターフェイス
 * @option this.drawActorName(item, r.x, r.y); // アクター名称
 * @option this.drawActorClass(item, r.x, r.y); // アクター職業
 * @option this.drawActorNickname(item, r.x, r.y); // アクターの二つ名
 * @option this.drawActorLevel(item, r.x, r.y); // アクターのレベル
 * @option this.drawActorIcons(item, r.x, r.y); // アクターのステートアイコン
 * @option this.drawActorSimpleStatus(item, r.x, r.y, r.width); // アクターのステータス
 * @option this.drawEnemy(r.x, r.y, 'center', 'bottom'); // 敵キャラの画像
 * @option this.drawParam(0, r.x, r.y, 'right'); // DBパラメータ(0:HP 1:MP...)
 * @option this.drawItemName(item, r.x, r.y, r.width); // アイテム、スキル名称(アイコン含む)
 * @option this.drawText($gameParty.numItems(item), r.x, r.y, r.width, 'right'); // アイテムの所持数
 * @option this.drawTextEx(`Text:${item.name}`, r.x, r.y, r.width); // 任意のテキスト描画(制御文字変換あり)
 * @option this.drawText(`Text:${item.name}`, r.x, r.y, r.width, 'right'); // 任意のテキスト描画(制御文字変換なし。右揃え)
 * @option this.changeTextColor(ColorManager.textColor(1)); // テキストカラー変更(drawTextでのみ有効)
 * @option this.drawText(this.findWindowItem('window1').name, r.x, r.y, r.width); // 別ウィンドウで選択している項目名
 * @option this.drawNotePicture('noteValue', r.x, r.y, 'left', 'center', 1.0, 1.0); // 指定したメモ欄のピクチャを描画
 * @option this.placeActorName(item, r.x, r.y); // アクター名称(戦闘用)
 * @option this.placeStateIcon(item, r.x, r.y); // ステートアイコン(戦闘用)
 * @option this.placeGauge(item, 'hp', r.x, r.y); // HPゲージ(戦闘用)
 * @option this.placeBasicGauges(item, r.x, r.y); // ゲージセット(戦闘用)
 * @option this.drawNoteText('noteValue', r.x, r.y); // 指定したメモ欄の内容を描画
 * @option this.drawNoteText('noteValue', r.x, r.y, 'right'); // メモ欄の内容を右寄せ描画
 * @option this.drawSavefileInfo(item, r.x, r.y, r.width); // セーブファイルの内容を描画
 *
 * @param ItemDrawMultiLineScript
 * @parent DataScript
 * @text 描画スクリプト(複数)
 * @desc 項目を描画するスクリプトです。変数[item]から各要素が参照できます。複数行のスクリプトを入力したいときに使います。
 * @default
 * @type multiline_string
 *
 * @param IsEnableScript
 * @parent DataScript
 * @text 選択可能スクリプト
 * @desc 項目を選択可能かどうかを判定するスクリプトです。変数[item]から各要素が参照できます。
 * @default
 * @type combo
 * @option item.meta['value']; // メモ欄に<value>の記述がある
 * @option item.name.match('value'); // 名前にvalueを含む
 * @option item.id > v(10); // IDが変数[10]の値より大きい
 * @option s(parseInt(item.meta['value'])); // <value:n>のスイッチがON
 * @option item !== ''; // 空文字以外
 * @option !!item; // null, undefined, 0, 空文字以外
 * @option item.stypeId === v(10); // スキルタイプが変数[10]の値と等しい
 * @option item.etypeId === v(10); // 装備タイプが変数[10]の値と等しい
 * @option item.wtypeId === v(10); // 武器タイプが変数[10]の値と等しい
 * @option item.atypeId === v(10); // 防具タイプが変数[10]の値と等しい
 * @option item.itypeId === 1; // アイテムタイプが[通常アイテム]
 * @option this._actor.canEquip(item); // メインメニューで選択したアクターが装備可能
 * @option this._actor.canUse(item); // メインメニューで選択したアクターが使用可能
 *
 * @param CommonHelpText
 * @text 共通ヘルプテキスト
 * @desc 選択している項目とは関係なく表示されるヘルプテキストです。
 * @default
 * @type multiline_string
 *
 * @param DecisionEvent
 * @text 決定イベント
 * @desc 項目が決定された瞬間に発生するイベントです。
 * @default {}
 * @type struct<Event>
 *
 * @param CancelEvent
 * @text キャンセルイベント
 * @desc キャンセルされた瞬間に発生するイベントです。
 * @default {}
 * @type struct<Event>
 *
 * @param CursorEvent
 * @text カーソルイベント
 * @desc カーソルが動いた瞬間に発生するイベントです。このイベントではウィンドウのフォーカスは変更されません。
 * @default {}
 * @type struct<Event>
 *
 * @param ButtonEvent
 * @text ボタンイベント
 * @desc 指定されたボタンが押された瞬間に発生するイベントです。
 * @default []
 * @type struct<ButtonEvent>[]
 *
 * @param FontSize
 * @text フォントサイズ
 * @desc デフォルトのフォントサイズです。0を指定すると他のウィンドウと同じサイズになります。
 * @default 0
 * @type number
 *
 * @param FontFace
 * @text フォント
 * @desc ウィンドウのフォントを変更します。フォントファイルのロード機能は提供しないので別途用意してください。
 * @default
 *
 * @param OverlapOther
 * @text 他ウィンドウに重ねる
 * @desc 他のウィンドウと重なって表示させたときに背後のウィンドウをマスキングさせなくなります。
 * @default false
 * @type boolean
 *
 * @param WindowSkin
 * @text ウィンドウスキン
 * @desc ウィンドウスキンです。指定しなかった場合、デフォルトが使用されます。
 * @default
 * @require 1
 * @dir img/system
 * @type file
 *
 * @param VisibleSwitchId
 * @text 表示スイッチID
 * @desc 指定したスイッチがONの場合のみ画面に表示されます。
 * @default 0
 * @type switch
 *
 * @param ShowOpenAnimation
 * @text 開閉アニメ表示
 * @desc ウィンドウの開閉アニメーションを表示します。
 * @default true
 * @type boolean
 *
 * @param RefreshSwitchId
 * @text 再描画スイッチ
 * @desc 指定したスイッチがONになるとウィンドウが再描画されます。再描画の後、スイッチは自動でOFFになります。
 * @default 0
 * @type switch
 *
 * @param IndexVariableId
 * @text インデックス格納変数
 * @desc カーソルインデックスが常に格納される変数です。
 * @default 0
 * @type variable
 *
 * @param RememberIndex
 * @text インデックスを記憶
 * @desc インデックス格納変数を指定している場合、画面を開いたときにカーソルの初期値を変数値で復元します。
 * @default false
 * @type boolean
 *
 * @param ItemVariableId
 * @text 選択項目格納変数
 * @desc 選択中の項目オブジェクトが常に格納される変数です。数値以外のオブジェクトが格納されるので取り扱いに注意してください。
 * @default 0
 * @type variable
 *
 * @param Cancelable
 * @text キャンセル可能
 * @desc 有効にするとウィンドウをキャンセルできるようになります。
 * @default true
 * @type boolean
 *
 * @param PopCancel
 * @text シーン戻しキャンセル
 * @desc 有効にするとこれが最初のウィンドウである場合、ウィンドウキャンセル時に前のシーンに戻ります。
 * @default true
 * @type boolean
 *
 * @param ActorChangeable
 * @text アクター変更可能
 * @desc 有効にするとPageUp, PageDownでアクターチェンジできるようになります。
 * @default false
 * @type boolean
 *
 * @param HiddenNoFocus
 * @text 非フォーカス時は隠す
 * @desc 有効にするとウィンドウにフォーカスが当たっていないときはウィンドウが非表示になります。
 * @default false
 * @type boolean
 *
 * @param DarkNoFocus
 * @text 非フォーカス時は暗転
 * @desc 有効にするとウィンドウにフォーカスが当たっていないときはウィンドウの中身が暗くなります。
 * @default false
 * @type boolean
 *
 * @param MaskingText
 * @text マスキングテキスト
 * @desc コマンドが非表示にされたとき、消える代わりに指定文字列でマスキングされます。ヘルプ欄もマスキングされます。
 * @default
 * @type string
 *
 * @param okSound
 * @text 決定SE
 * @desc 選択すると通常の決定音の代わりに指定したSEが演奏されます。
 * @default
 * @type struct<AudioSe>
 *
 * @param cursorOverContents
 * @text カーソルを手前に表示
 * @desc 有効にすると、ウィンドウカーソルが項目の上に被せるように表示されます。
 * @default false
 * @type boolean
 *
 * @param noItemBackground
 * @text 項目背景を表示しない
 * @desc 有効にすると、項目の黒い背景が表示されなくなります。
 * @default false
 * @type boolean
 *
 * @param noFrame
 * @text 枠を表示しない
 * @desc 有効にすると、ウィンドウの枠が表示されなくなります。
 * @default false
 * @type boolean
 *
 * @param textColor
 * @text テキストカラー
 * @desc 描画文字列のデフォルトカラーです。制御文字「\c[n]」で指定する色番号を指定します。
 * @default 0
 * @type color
 *
 * @param cursorAllSwitchId
 * @text 全選択スイッチID
 * @desc 指定したスイッチがONのときカーソルが全選択状態になります。
 * @default 0
 * @type switch
 *
 * @param cursorFixedSwitchId
 * @text 選択固定スイッチID
 * @desc 指定したスイッチがONのときカーソル選択が固定されます。
 * @default 0
 * @type switch
 */

/*~struct~AudioSe:
 * @param name
 * @text ファイル名
 * @desc ファイル名称です。
 * @default
 * @require 1
 * @dir audio/se/
 * @type file
 *
 * @param volume
 * @text 音量
 * @desc ボリュームです。
 * @default 90
 * @type number
 * @min 0
 * @max 100
 *
 * @param pitch
 * @text ピッチ
 * @desc ピッチです。
 * @default 100
 * @type number
 * @min 50
 * @max 150
 *
 * @param pan
 * @text 左右バランス
 * @desc 左右バランスです。
 * @default 0
 * @type number
 * @min -100
 * @max 100
 */

/*~struct~Command:
 *
 * @param Text
 * @text 項目内容
 * @desc 項目の描画内容です。アイコン系の制御文字が使用できます。
 * @default value01
 * @type string
 *
 * @param Align
 * @text 項目の揃え
 * @desc 項目の揃えです。
 * @default 0
 * @type select
 * @option 左揃え
 * @value 0
 * @option 中央揃え
 * @value 1
 * @option 右揃え
 * @value 2
 *
 * @param VisibleSwitchId
 * @text 表示スイッチID
 * @desc 指定したスイッチがONの場合のみ画面に表示されます。
 * @default 0
 * @type switch
 *
 * @param VisibleScript
 * @text 表示スクリプト
 * @desc 指定したスクリプトがtrueの場合のみ画面に表示されます。変数[item]で『一覧ウィンドウ識別子』の選択項目が参照できます。
 * @default
 * @type combo
 * @option item.meta['value']; // メモ欄に<value>の記述がある
 * @option item.name.match('value'); // 名前にvalueを含む
 * @option item.id > v(10); // IDが変数[10]の値より大きい
 * @option s(parseInt(item.meta['value'])); // <value:n>のスイッチがON
 * @option item !== ''; // 空文字以外
 * @option !!item; // null, undefined, 0, 空文字以外
 * @option item.stypeId === v(10); // スキルタイプが変数[10]の値と等しい
 * @option item.etypeId === v(10); // 装備タイプが変数[10]の値と等しい
 * @option item.wtypeId === v(10); // 武器タイプが変数[10]の値と等しい
 * @option item.atypeId === v(10); // 防具タイプが変数[10]の値と等しい
 * @option item.itypeId === 1; // アイテムタイプが[通常アイテム]
 * @option this._actor.canEquip(item); // メインメニューで選択したアクターが装備可能
 * @option this._actor.canUse(item); // メインメニューで選択したアクターが使用可能
 *
 * @param EnableSwitchId
 * @text 選択可能スイッチID
 * @desc 指定したスイッチがONの場合のみ選択できます。OFFだと選択禁止になります。
 * @default 0
 * @type switch
 *
 * @param IsEnableScript
 * @text 選択可能スクリプト
 * @desc 項目を選択可能かどうかを判定するスクリプトです。変数[item]で『一覧ウィンドウ識別子』の選択項目が参照できます。
 * @default
 * @type combo
 * @option item.meta['value']; // メモ欄に<value>の記述がある
 * @option item.name.match('value'); // 名前にvalueを含む
 * @option item.id > v(10); // IDが変数[10]の値より大きい
 * @option s(parseInt(item.meta['value'])); // <value:n>のスイッチがON
 * @option item !== ''; // 空文字以外
 * @option !!item; // null, undefined, 0, 空文字以外
 * @option item.stypeId === v(10); // スキルタイプが変数[10]の値と等しい
 * @option item.etypeId === v(10); // 装備タイプが変数[10]の値と等しい
 * @option item.wtypeId === v(10); // 武器タイプが変数[10]の値と等しい
 * @option item.atypeId === v(10); // 防具タイプが変数[10]の値と等しい
 * @option item.itypeId === 1; // アイテムタイプが[通常アイテム]
 * @option this._actor.canEquip(item); // メインメニューで選択したアクターが装備可能
 * @option this._actor.canUse(item); // メインメニューで選択したアクターが使用可能
 *
 * @param HelpText
 * @text ヘルプテキスト
 * @desc ヘルプウィンドウを表示している場合、ヘルプテキストが表示されます。
 * @default
 * @type multiline_string
 *
 * @param DecisionEvent
 * @text 決定イベント
 * @desc この項目が決定された瞬間に発生するイベントです。指定した場合、共通の決定イベントより優先されます。
 * @default
 * @type struct<Event>
 *
 * @param CancelChoice
 * @text キャンセル選択肢
 * @desc この項目を選択したときに発生するイベントがキャンセルイベントになります。
 * @default false
 * @type boolean
 *
 * @param OkSound
 * @text 決定SE
 * @desc 選択すると通常の決定音の代わりに指定したSEが演奏されます。
 * @default
 * @type struct<AudioSe>
 *
 */

/*~struct~ButtonEvent:
 *
 * @param Name
 * @text ボタン名
 * @desc 押したときにイベントが発生するボタン名です。okとcancelはタッチ操作と決定とキャンセルにも反応します。
 * @default
 * @type combo
 * @option ok
 * @option cancel
 * @option menu
 * @option shift
 * @option control
 * @option down
 * @option left
 * @option right
 * @option up
 * @option pageup
 * @option pagedown
 * @option debug
 * @option tab
 *
 * @param Event
 * @text イベント
 * @desc 指定したボタンが押された瞬間に発生するイベントです。
 * @default {}
 * @type struct<Event>
 */

/*~struct~Event:
 *
 * @param CommandId
 * @text コモンイベント
 * @desc 対象のイベントが発生したときに実行されるコモンイベントです。ただし、シーンを出るときは実行されません。
 * @default 0
 * @type common_event
 *
 * @param FocusWindowId
 * @text ウィンドウ識別子
 * @desc 対象のイベントが発生したときにフォーカスされるウィンドウ識別子です。指定がなければ前のウィンドウに戻ります。
 * @default
 * @type string
 *
 * @param FocusWindowIndex
 * @text カーソルインデックス
 * @desc 対象のイベントが発生したときにフォーカスされるウィンドウのカーソルインデックスです。-1を指定した場合、操作しません。
 * @default -1
 * @type number
 * @min -1
 *
 * @param Script
 * @text スクリプト
 * @desc 対象のイベントが発生したときに実行されるスクリプトです。
 * @default
 * @type combo
 * @option SceneManager.callCustomMenu('Scene___'); // 別のカスタムメニューに移動
 * @option this.popScene(); // 元のシーンに戻る
 * @option SceneManager.goto(Scene_Map); // マップ画面に遷移
 * @option SceneManager.changeWindowFocus('window1'); // 指定ウィンドウにフォーカス
 * @option SceneManager.changeWindowIndex('window1', 1); // 指定ウィンドウのインデックス変更
 * @option SceneManager.trashScene(); // 元のシーン情報を破棄する
 * @option SceneManager.showMapPicture(1, '', 0, 0, 0, 100, 100, 255, 1); // マップ画面にピクチャを表示
 * @option this.executeSave(v(1)); // セーブ実行
 * @option this.executeLoad(v(1)); // ロード実行
 *
 * @param SwitchId
 * @text スイッチ
 * @desc 対象のイベントが発生したときにONになるスイッチです。
 * @type switch
 *
 * @param Deselect
 * @text 元ウィンドウ選択解除
 * @desc 対象のイベントが発生したときに元々フォーカスされていたウィンドウの選択状態を解除します。
 * @default false
 * @type boolean
 */

/*~struct~ReplacementScene:
 * @param scene
 * @text 差し替え元シーン
 * @desc カスタムメニューに差し替えるもとになるシーンです。マップなども選択できますが挙動が大きく変わるのでご注意ください。
 * @type select
 * @default Scene_Menu
 * @option タイトル
 * @value Scene_Title
 * @option マップ
 * @value Scene_Map
 * @option ゲームオーバー
 * @value Scene_Gameover
 * @option バトル
 * @value Scene_Battle
 * @option メインメニュー
 * @value Scene_Menu
 * @option アイテム
 * @value Scene_Item
 * @option スキル
 * @value Scene_Skill
 * @option 装備
 * @value Scene_Equip
 * @option ステータス
 * @value Scene_Status
 * @option オプション
 * @value Scene_Options
 * @option セーブ
 * @value Scene_Save
 * @option ロード
 * @value Scene_Load
 * @option ゲーム終了
 * @value Scene_End
 * @option ショップ
 * @value Scene_Shop
 * @option 名前入力
 * @value Scene_Name
 * @option デバッグ
 * @value Scene_Debug
 *
 * @param customScene
 * @text カスタムメニューシーン
 * @desc 差し替え先のカスタムメニューシーンの識別子を指定します。制御文字\v[n]が使えます。
 * @default
 */

(() => {
    'use strict';
    const script = document.currentScript;
    const param = PluginManagerEx.createParameter(script);

    param.SceneList = [];
    for (let i = 1; i < 21; i++) {
        if (param[`Scene${i}`]) {
            param.SceneList.push(param[`Scene${i}`]);
        }
    }
    if (!param.ReplacementList) {
        param.ReplacementList = [];
    }

    PluginManagerEx.registerCommand(script, 'CALL_SCENE', args => {
        SceneManager.callCustomMenu(args.id);
    });

    PluginManagerEx.registerCommand(script, 'CONTROL_WINDOW', args => {
        const id = args.id;
        switch (args.type) {
            case 'activate':
                SceneManager.changeWindowFocus(id);
                break;
            case 'select':
                SceneManager.changeWindowIndex(id, args.index);
                break;
            case 'refresh':
                SceneManager.refreshWindow(id);
                break;
        }
    });

    const outputError = function (e, script = null) {
        SoundManager.playBuzzer();
        if (script) {
            console.error(`Script Error:${script}`);
        }
        console.error(e);
        if (Utils.isNwjs()) {
            nw.Window.get().showDevTools();
        }
    };

    const _Scene_Boot_startNormalGame = Scene_Boot.prototype.startNormalGame;
    Scene_Boot.prototype.startNormalGame = function() {
        _Scene_Boot_startNormalGame.apply(this, arguments);
        $gamePlayer.clearTransferInfo();
    };

    const _Scene_Battle_start = Scene_Battle.prototype.start;
    Scene_Battle.prototype.start = function() {
        if (SceneManager.isCalledCustomMenuFromBattle()) {
            this.resetCallAnotherSceneFlags();
            Scene_Base.prototype.start.call(this);
        } else {
            _Scene_Battle_start.apply(this);
        }
    };

    const _Scene_Battle_resetCallAnotherSceneFlags = Scene_Battle.prototype.resetCallAnotherSceneFlags;
    Scene_Battle.prototype.resetCallAnotherSceneFlags = function () {
        if (_Scene_Battle_resetCallAnotherSceneFlags) {
            _Scene_Battle_resetCallAnotherSceneFlags.call(this);
        }
        SceneManager.resetCalledCustomMenuFromBattle();
    };

    const _Scene_Battle_terminate = Scene_Battle.prototype.terminate;
    Scene_Battle.prototype.terminate = function() {
        if (SceneManager.isCalledCustomMenuFromBattle()) {
            Scene_Base.prototype.terminate.call(this);
        } else {
            _Scene_Battle_terminate.apply(this, arguments);
        }
    };

    const _Scene_Battle_stop = Scene_Battle.prototype.stop;
    Scene_Battle.prototype.stop = function() {
        if (SceneManager.isCalledCustomMenuFromBattle()) {
            Scene_Base.prototype.stop.call(this);
        } else {
            _Scene_Battle_stop.apply(this, arguments);
        }
    };

    const _Sprite_Actor_initMembers = Sprite_Actor.prototype.initMembers;
    Sprite_Actor.prototype.initMembers = function() {
        _Sprite_Actor_initMembers.apply(this, arguments);
        if (SceneManager.isCalledCustomMenuFromBattle()) {
            this._alreadyEntry = true;
        }
    }

    const _Sprite_Actor_startEntryMotion = Sprite_Actor.prototype.startEntryMotion;
    Sprite_Actor.prototype.startEntryMotion = function() {
        if (this._alreadyEntry) {
            this.startMove(0, 0, 0);
            this._alreadyEntry = false;
        } else {
            _Sprite_Actor_startEntryMotion.apply(this, arguments);
        }
    };

    const _SceneManager_initialize = SceneManager.initialize;
    SceneManager.initialize = function() {
        _SceneManager_initialize.apply(this, arguments);
        this._customScene = {};
    };

    SceneManager.callCustomMenu = function (sceneId) {
        if (!this.findSceneData(sceneId)) {
            throw new Error(`Scene data '${sceneId}' is not found`);
        }
        if (this._scene instanceof Scene_Battle) {
            this._callCustomMenuFromBattle = true;
        }
        this.push(this.createCustomMenuClass(sceneId));
    };

    SceneManager.isCalledCustomMenuFromBattle = function() {
        return this._callCustomMenuFromBattle;
    };

    SceneManager.resetCalledCustomMenuFromBattle = function() {
        this._callCustomMenuFromBattle = false;
    };

    const _SceneManager_goto = SceneManager.goto;
    SceneManager.goto = function (sceneClass) {
        if (this._scene instanceof Scene_Map) {
            this._mapGameScreen = $gameScreen;
        }
        if (!sceneClass) {
            return _SceneManager_goto.apply(this, arguments);
        }
        const sceneName = PluginManagerEx.findClassName(new sceneClass());
        const customScene = param.ReplacementList.find(item => item.scene === sceneName)?.customScene;
        if (customScene) {
            if (this._stack[this._stack.length - 1] === this._scene.constructor) {
                this._stack.pop();
            }
            SceneManager.callCustomMenu(customScene);
            return;
        }
        _SceneManager_goto.apply(this, arguments);
    };

    SceneManager.showMapPicture = function (pictureId, name, origin, x, y,
                                            scaleX, scaleY, opacity, blendMode) {
        if (this._mapGameScreen) {
            this._mapGameScreen.showPicture(pictureId, name, origin, x, y,
                scaleX, scaleY, opacity, blendMode);
        }
    };

    SceneManager.createCustomMenuClass = function (sceneId) {
        let sceneClass = {};
        const createClassEval = `sceneClass = function ${sceneId}(){\n this.initialize.apply(this, arguments)};`;
        eval(createClassEval);
        sceneClass.prototype = Object.create(Scene_CustomMenu.prototype);
        sceneClass.prototype.constructor = sceneClass;
        this._customScene[sceneId] = sceneClass;
        return sceneClass;
    };

    SceneManager.trashScene = function () {
        if (this._stack.length > 1) {
            this._stack.pop()
        }
    };

    SceneManager.findSceneData = function (sceneId) {
        return param.SceneList.filter(data => data.Id === sceneId)[0];
    };

    const _SceneManager_pop = SceneManager.pop;
    SceneManager.pop = function () {
        _SceneManager_pop.apply(this, arguments);
        this._sceneIndex = 0;
    };

    SceneManager.changeWindowFocus = function (windowId) {
        this._focusWindowId = windowId;
    };

    SceneManager.changeWindowIndex = function (windowId, index) {
        const win = this.findCustomMenuWindow(windowId);
        if (win) {
            win.select(index);
        }
    };

    SceneManager.refreshWindow = function (windowId) {
        const win = this.findCustomMenuWindow(windowId);
        if (win) {
            win.refresh();
        }
    }

    SceneManager.isCustomScene = function(id) {
        return this._scene && this._scene.constructor === this._customScene[id];
    };

    SceneManager.findChangeWindowFocus = function () {
        const id = this._focusWindowId;
        if (id) {
            this._focusWindowId = null;
        }
        return id;
    };

    SceneManager.findCustomMenuWindow = function (windowId) {
        return this._scene.findWindow ? this._scene.findWindow(windowId) : null;
    };

    SceneManager.isCustomMenuActiveWindow = function (windowId) {
        if (this._scene.findActiveWindowId) {
            return this._scene.findActiveWindowId() === windowId;
        }
        return false;
    };

    Game_Party.prototype.reserveMembers = function () {
        const battleMembers = this.battleMembers();
        return this.allMembers().filter(function (actor) {
            return !battleMembers.contains(actor);
        });
    };

    class Game_CustomMenuComonnEvent extends Game_CommonEvent {
        constructor(commonEventId) {
            super(commonEventId);
        }

        isActive() {
            return !!this.event();
        }
    }

    class Scene_CustomMenu extends Scene_MenuBase {
        create() {
            // super.createのneedsPageButtonsで参照できるように、this._customDataの取得を一番上にする
            this._customData = SceneManager.findSceneData(PluginManagerEx.findClassName(this));
            super.create();
            this.swapGameObject();
            this._interpreter = new Game_Interpreter();
            if (this._customData.ParallelEventId) {
                this._parallelCommon = new Game_CustomMenuComonnEvent(this._customData.ParallelEventId);
            }
            this.createAllObjects();
        }

        needsCancelButton() {
            const sceneName = PluginManagerEx.findClassName(this);
            const scene = param.ReplacementList.find(item => item.customScene === sceneName)?.scene;
            if (['Scene_Boot', 'Scene_Title', 'Scene_Gameover', 'Scene_Map', 'Scene_Battle'].includes(scene)) {
                return false;
            } else {
                return super.needsCancelButton();
            }
        }

        start() {
            super.start();
            this.refresh();
            this.fireEvent(this._customData.InitialEvent);
        }

        terminate() {
            super.terminate();
            if (this._loadSuccess) {
                $gameSystem.onAfterLoad();
            } else {
                this.restoreGameObject();
            }
        }

        stop() {
            super.stop();
            if (SceneManager.isNextScene(Scene_Battle) &&
                !SceneManager.isPreviousScene(Scene_Battle)) {
                this.launchBattle();
            }
        }

        swapGameObject() {
            this._previousGameScreen = $gameScreen;
            this._previousGameMessage = $gameMessage;
            window.$gameScreen = new Game_Screen();
            window.$gameMessage = new Game_Message();
        }

        restoreGameObject() {
            window.$gameScreen = this._previousGameScreen;
            window.$gameMessage = this._previousGameMessage;
        }

        needsPageButtons() {
            // ウィンドウのアクター切り替えを有効にしている場合に、マウスやタッチでも操作可能にするために
            // プラグインパラメータUsePageButtonsがオンの場合ページボタンを作成する
            return this._customData.UsePageButtons;
        }

        createBackground() {
            super.createBackground();
            this._panorama = new TilingSprite();
            this._panorama.move(0, 0, Graphics.width, Graphics.height);
            this.addChild(this._panorama);
            if (this._customData.SnapNoFilter) {
                this._backgroundSprite.filters = [];
                this.setBackgroundOpacity(255);
            }
        }

        createAllObjects() {
            if (this._customData.UseHelp) {
                this.createHelpWindow();
            }
            this.createCustomMenuWindowList();
            this.createAllMessageWindow();
            this.createSpriteset();
            if (this._customData.Panorama) {
                this.setPanoramaBitmap();
            }
        }

        isBottomHelpMode() {
            if (this._customData.UseHelp === 2) {
                return false;
            } else {
                return super.isBottomHelpMode();
            }
        }

        createCustomMenuWindowList() {
            this._customWindowMap = new Map();
            const list = this._customData.WindowList;
            list.forEach(windowData => this.createCustomMenuWindow(windowData));
            this.refresh();
            list.forEach(windowData => this.setPlacement(windowData));
        }

        refresh() {
            this._customWindowMap.forEach(win => win.refresh());
        }

        createCustomMenuWindow(data) {
            const win = this.createCustomWindowInstance(data);
            win.setHandler('ok', () => this.fireEvent(win.findDecisionEvent()));
            if (this._helpWindow) {
                win.setHelpWindow(this._helpWindow);
            }
            if (data.Cancelable) {
                win.setHandler('cancel', () => {
                    const prevActive = this._activeWindowId;
                    this.fireEvent(data.CancelEvent);
                    if (data.Id === this.findFirstWindowId() && prevActive === this._activeWindowId) {
                        // ウィンドウが一番上にあり、かつキャンセルボタンにpopSceneが設定されている場合二重に戻ってしまう
                        // プラグインパラメータPopCancelをオフにすることで無効化できるようにする
                        if (data.PopCancel === undefined || data.PopCancel) {
                            this.popScene();
                        }
                    }
                    win.select(-1);
                });
            }
            if (data.CursorEvent) {
                win.setHandler('select', () => {
                    this.fireEvent(data.CursorEvent, false);
                });
            }
            win.setHandler('pagedown', this.nextActor.bind(this));
            win.setHandler('pageup', this.previousActor.bind(this));
            if (data.ButtonEvent) {
                data.ButtonEvent.forEach(buttonEvent => {
                    win.setHandler('trigger:' + buttonEvent.Name, () => {
                        this.fireEvent(buttonEvent.Event, true);
                    });
                });
                win.registerButton(data.ButtonEvent.map(buttonEvent => buttonEvent.Name));
            }
            this.addWindow(win);
            this._customWindowMap.set(data.Id, win);
        }

        nextActor() {
            if (!this.canActorChange()) {
                return;
            }
            super.nextActor();
            if (this._customData.ActorChangeEvent) {
                this.fireEvent(this._customData.ActorChangeEvent, false);
            }
        }

        previousActor() {
            if (!this.canActorChange()) {
                return;
            }
            super.previousActor();
            if (this._customData.ActorChangeEvent) {
                this.fireEvent(this._customData.ActorChangeEvent, false);
            }
        }

        canActorChange() {
            const changeable = this.findWindow(this._activeWindowId).canActorChange();
            if (!changeable) {
                this.changeWindowFocus(this._activeWindowId, -1);
            }
            return changeable;
        }

        arePageButtonsEnabled() {
            return super.arePageButtonsEnabled() && this.canActorChange();
        }

        setPanoramaBitmap() {
            const panorama = this._customData.Panorama;
            this._panorama.bitmap = ImageManager.loadParallax(panorama.Image);
        }

        setPlacement(data) {
            const win = this.findWindow(data.Id);
            const parentX = this.findWindow(data.RelativeWindowIdX);
            if (parentX) {
                win.x += parentX.x + parentX.width;
                if (!data.width) {
                    win.width = Graphics.boxWidth - win.x;
                }
            }
            if (data.originX === 1) {
                win.x -= Math.floor(win.width / 2);
            } else if (data.originX === 2) {
                win.x -= win.width;
            }
            const parentY = this.findWindow(data.RelativeWindowIdY);
            if (parentY) {
                win.y += parentY.y + parentY.height;
            } else {
                win.y += this.mainAreaTop();
            }
        }

        createCustomWindowInstance(data) {
            if (!data.ListScript && !data.ListWindowId) {
                return new Window_CustomMenuCommand(data, this._actor, this._customWindowMap);
            } else {
                return new Window_CustomMenuDataList(data, this._actor, this._customWindowMap);
            }
        }

        findFirstWindowId() {
            const event = this._customData.InitialEvent;
            if (event && event.FocusWindowId) {
                return event.FocusWindowId;
            }
            const windowList = this._customData.WindowList;
            if (windowList && windowList.length > 0) {
                return windowList[0].Id;
            }
            return null;
        }

        findWindow(id) {
            return this._customWindowMap.get(id);
        }

        findActiveWindowId() {
            return this._activeWindowId;
        }

        update() {
            super.update();
            if (this._interpreter.isRunning()) {
                this.updateInterpreter();
            }
            if (this._parallelCommon) {
                this._parallelCommon.update();
            }
            const focusId = SceneManager.findChangeWindowFocus();
            if (focusId) {
                this.changeWindowFocus(focusId, -1);
            }
            if (this._customData.Panorama) {
                this.updatePanorama();
            }
            this.refreshWindowIfNeed();
            $gameScreen.update();
        }

        updatePanorama() {
            const panorama = this._customData.Panorama;
            this._panorama.origin.x += panorama.ScrollX;
            this._panorama.origin.y += panorama.ScrollY;
        }

        refreshWindowIfNeed() {
            this._customWindowMap.forEach(win => {
                win.refreshIfNeed();
            });
            this._customWindowMap.forEach(win => {
                win.resetRefreshSwitch();
            });
        };

        fireEvent(event, moveWindowFocus = true) {
            if (event.SwitchId) {
                $gameSwitches.setValue(event.SwitchId, true);
            }
            if (event.Script) {
                try {
                    const v = $gameVariables.value.bind($gameVariables); // used by eval
                    const s = $gameSwitches.value.bind($gameSwitches); // used by eval
                    eval(event.Script);
                } catch (e) {
                    outputError(e, event.Script);
                }
            }
            if (!this._active) {
                return;
            }
            if (moveWindowFocus) {
                if (event.FocusWindowId) {
                    this.changeWindowFocus(event.FocusWindowId, event.FocusWindowIndex);
                } else if (this._previousActiveWindowId && this._activeWindowId !== this.findFirstWindowId()) {
                    this.changeWindowFocus(this._previousActiveWindowId, -1);
                } else {
                    this.changeWindowFocus(this._activeWindowId || this.findFirstWindowId(), -1);
                }
                if (event.Deselect) {
                    const id = this._previousActiveWindowId || this._activeWindowId;
                    if (id) {
                        const blurWindow = this._customWindowMap.get(id);
                        blurWindow.deselect();
                    }
                }
            }
            if (event.CommandId) {
                this.setupMenuCommonEvent(event.CommandId);
            }
        }

        changeWindowFocus(windowId, index) {
            if (this._activeWindowId !== windowId) {
                this._previousActiveWindowId = this._activeWindowId;
            }
            this._activeWindowId = windowId;
            this._customWindowMap.forEach((win, id) => {
                if (id === windowId) {
                    win.activate();
                    if (index !== -1) {
                        win.select(index || 0);
                    }
                } else {
                    win.deactivate();
                }
            });
        }

        setupMenuCommonEvent(commonEventId) {
            const common = $dataCommonEvents[commonEventId];
            if (!common) {
                return;
            }
            this._interpreter.setup(common.list, 0);
            this.blurAllWindow();
        }

        updateInterpreter() {
            this._interpreter.update();
            if ($gamePlayer.isTransferring()) {
                SceneManager.goto(Scene_Map);
            }
            if (!this._interpreter.isRunning()) {
                this.changeWindowFocus(this._activeWindowId, -1);
                this._interpreter.terminate();
            }
        }

        blurAllWindow() {
            this._customWindowMap.forEach(win => {
                win.deactivate();
            });
        }

        // 競合したら直す
        createAllMessageWindow() {
            this._messageWindowAdd = true;
            this.createMessageWindowLayer();
            Scene_Message.prototype.createMessageWindow.call(this);
            Scene_Message.prototype.createScrollTextWindow.call(this);
            Scene_Message.prototype.createGoldWindow.call(this);
            Scene_Message.prototype.createNameBoxWindow.call(this);
            Scene_Message.prototype.createChoiceListWindow.call(this);
            Scene_Message.prototype.createNumberInputWindow.call(this);
            Scene_Message.prototype.createEventItemWindow.call(this);
            Scene_Message.prototype.associateWindows.call(this);
            this._messageWindowAdd = false;
        }

        createMessageWindowLayer() {
            this._messageWindowLayer = new WindowLayer();
            this._messageWindowLayer.x = (Graphics.width - Graphics.boxWidth) / 2;
            this._messageWindowLayer.y = (Graphics.height - Graphics.boxHeight) / 2;
            this.addChild(this._messageWindowLayer);
        }

        addWindow(window) {
            if (this._messageWindowAdd) {
                this._messageWindowLayer.addChild(window);
            } else {
                super.addWindow(window);
            }
        }

        messageWindowRect() {
            return Scene_Message.prototype.messageWindowRect.call(this);
        }

        scrollTextWindowRect() {
            return Scene_Message.prototype.scrollTextWindowRect.call(this);
        }

        goldWindowRect() {
            return Scene_Message.prototype.goldWindowRect.call(this);
        }

        eventItemWindowRect() {
            return Scene_Message.prototype.eventItemWindowRect.call(this);
        }

        createSpriteset() {
            this._spriteset = new Spriteset_Menu();
            const index = this.findSpritesetIndex();
            if (index !== null) {
                this.addChildAt(this._spriteset, index);
            } else {
                this.addChild(this._spriteset);
            }
            if (param.NoUseBlendAdd) {
                return;
            }
            const picturePriority = this._customData.PicturePriority;
            const lowerContainers = [this._backgroundSprite, this._panorama];
            const upperContainers = [];
            // for CharacterPictureManager.js
            if (this._standSpriteContainer) {
                const priority = this._standSpriteScene.Priority;
                if (priority === 0) {
                    upperContainers.push(this._standSpriteContainer);
                } else {
                    lowerContainers.push(this._standSpriteContainer);
                }
            }
            this._spriteset.setSceneObject(lowerContainers, upperContainers, this._windowLayer, this._messageWindowLayer, picturePriority);
        }

        findSpritesetIndex() {
            switch (this._customData.PicturePriority) {
                case 2:
                    return this.getChildIndex(this._windowLayer);
                case 1:
                    return this.getChildIndex(this._messageWindowLayer);
                default:
                    return null;
            }
        }

        refreshActor() {
            this._customWindowMap.forEach(win => {
                win.setActor(this._actor);
            });
        }

        onActorChange() {
            this.refreshActor();
            this.changeWindowFocus(this._activeWindowId, -1);
            // アクター切り替え時にカーソルSEを演奏する
            super.onActorChange();
        }

        launchBattle() {
            BattleManager.saveBgmAndBgs();
            this.stopAudioOnBattleStart();
            SoundManager.playBattleStart();
        }

        stopAudioOnBattleStart() {
            Scene_Map.prototype.stopAudioOnBattleStart.apply(this, arguments);
        }

        helpAreaHeight() {
            const rows = this._customData.HelpRows;
            if (rows) {
                return this.calcWindowHeight(rows, false);
            } else {
                return super.helpAreaHeight();
            }
        }

        executeSave(index) {
            const savefileId = $gameSystem.indexToSavefileId(index);
            $gameSystem.setSavefileId(savefileId);
            $gameSystem.onBeforeSave();
            DataManager.saveGame(savefileId)
                .then(() => {
                    SoundManager.playSave();
                    this.refresh();
                })
                .catch(() => {
                    SoundManager.playBuzzer()
                });
        }

        executeLoad(index) {
            const savefileId = $gameSystem.indexToSavefileId(index);
            DataManager.loadGame(savefileId)
                .then(() => this.onLoadSuccess())
                .catch(() => SoundManager.playBuzzer());
        }

        onLoadSuccess() {
            SoundManager.playLoad();
            this.fadeOutAll();
            this.reloadMapIfUpdated();
            SceneManager.goto(Scene_Map);
            this._loadSuccess = true;
        }

        reloadMapIfUpdated() {
            if ($gameSystem.versionId() !== $dataSystem.versionId) {
                const mapId = $gameMap.mapId();
                const x = $gamePlayer.x;
                const y = $gamePlayer.y;
                const d = $gamePlayer.direction();
                $gamePlayer.reserveTransfer(mapId, x, y, d, 0);
                $gamePlayer.requestMapReload();
            }
        }
    }
    window.Scene_CustomMenu = Scene_CustomMenu;

    const _Window_StatusBase_initialize = Window_StatusBase.prototype.initialize;
    Window_StatusBase.prototype.initialize = function (rect, data) {
        if (data) {
            this._data = data;
            this._list = [];
        }
        _Window_StatusBase_initialize.apply(this, arguments);
    };

    class Window_CustomMenu extends Window_StatusBase {
        constructor(data, actor, windowMap) {
            super(new Rectangle(data.x, data.y, data.width || Graphics.boxWidth - data.x, data.height),
                data);
            this._actor = actor;
            this._windowMap = windowMap;
            if (data.OverlapOther) {
                this._isWindow = false;
            }
            if (this.isShowOpen() || !this.isValid()) {
                this.openness = 0;
            }
            if (this.height === 0) {
                this._dynamicHeight = true;
            }
            if (this._data.RememberIndex) {
                this.restoreIndexVariable();
            }
            if (this._data.noFrame) {
                this.frameVisible = false;
                this._backSprite.visible  = false;
                this._frameSprite.visible = false;
            }
        }

        _createAllParts() {
            super._createAllParts();
            if (this._data.cursorOverContents) {
                const index = this._clientArea.getChildIndex(this._contentsSprite);
                this._clientArea.addChildAt(this._cursorSprite, index);
            }
        }

        paint() {
            if (this._enemySprite) {
                this._enemySprite.bitmap.clear();
            }
            super.paint();
        }

        registerButton(buttonList) {
            this._buttonList = buttonList;
        }

        playOkSound() {
            if (this._data.okSound) {
                AudioManager.playSe(this._data.okSound);
            } else {
                super.playOkSound();
            }
        }

        update() {
            this.updateOpenClose();
            this.updateFilter();
            this.updateButtonInput();
            super.update();
            this.updateIndexVariable();
            this.updateRotation();
            this.updateCursorStatus();
        }

        updateRotation() {
            if (this._data.Rotation) {
                this.rotation = this._data.Rotation * Math.PI / 180;
            }
        }

        updateCursorStatus() {
            if (this._data.cursorFixedSwitchId) {
                this._cursorFixed = $gameSwitches.value(this._data.cursorFixedSwitchId);
            }
            if (this._data.cursorAllSwitchId) {
                const all = $gameSwitches.value(this._data.cursorAllSwitchId);
                if (this._cursorAll !== all) {
                    this._cursorAll = all;
                    this.refreshCursor();
                }
            }
        }

        _updateFilterArea() {
            super._updateFilterArea();
            if (this.rotation !== 0) {
                const filterArea = this._clientArea.filterArea;
                filterArea.x = 0;
                filterArea.y = 0;
                filterArea.width = Graphics.width;
                filterArea.height = Graphics.height;
            }
        }

        updateButtonInput() {
            if (!this._buttonList || !this.active) {
                return;
            }
            this._buttonList.forEach(buttonName => {
                if (this.isTriggered(buttonName)) {
                    this.callHandler('trigger:' + buttonName);
                }
            });
        }

        isTriggered(buttonName) {
            return Input.isTriggered(buttonName) ||
                (buttonName === 'ok' && TouchInput.isTriggered()) ||
                (buttonName === 'cancel' && TouchInput.isCancelled());
        }

        select(index) {
            const prevIndex = this._index;
            super.select(index);
            if (prevIndex >= 0 && index >= 0 && index !== prevIndex) {
                this.callHandler('select');
            }
            if (this._windowMap) {
                this.refreshDetailWindow();
            }
        }

        refreshDetailWindow() {
            this._windowMap.forEach(win => {
                if (win.isDetailWindow(this._data.Id)) {
                    win.refresh();
                }
            })
        }

        calcTextHeight(textState) {
            const height = super.calcTextHeight(textState);
            return height + $gameSystem.mainFontSize() - this.contents.fontSize;
        }

        updateOpenClose() {
            if (this.isValid()) {
                if (this.isShowOpen()) {
                    this.open();
                } else {
                    this.openness = 255;
                }
            } else {
                if (this.isShowOpen()) {
                    this.close();
                } else {
                    this.openness = 0;
                }
            }
        }

        updateFilter() {
            if (!this._data.DarkNoFocus) {
                return;
            }
            if (!this.active) {
                this._clientArea.setBlendColor([0, 0, 0, 128]);
            } else {
                this._clientArea.setBlendColor([0, 0, 0, 0]);
            }
        }

        updateIndexVariable() {
            if (this._index < 0) {
                return;
            }
            if (this._data.IndexVariableId) {
                $gameVariables.setValue(this._data.IndexVariableId, this._index);
            }
            if (this._data.ItemVariableId) {
                $gameVariables.setValue(this._data.ItemVariableId, this.getItem(this._index));
            }
        }

        restoreIndexVariable() {
            if (this._data.IndexVariableId) {
                const index = $gameVariables.value(this._data.IndexVariableId);
                if (index >= 0) {
                    this.select(index);
                }
            }
        }

        refreshIfNeed() {
            const switchId = this._data.RefreshSwitchId;
            if (!switchId) {
                return;
            }
            if ($gameSwitches.value(switchId)) {
                this.refresh();
            }
        }

        resetRefreshSwitch() {
            const switchId = this._data.RefreshSwitchId;
            if (switchId) {
                $gameSwitches.setValue(switchId, false);
            }
        }

        isShowOpen() {
            return this._data.ShowOpenAnimation;
        }

        lineHeight() {
            const fontSize = this._data.FontSize;
            return fontSize ? this._data.FontSize + 8 : super.lineHeight();
        }

        itemHeight() {
            return this._data.ItemHeight || super.itemHeight();
        }

        numVisibleRows() {
            return this._data.RowNumber || Math.ceil(this.maxItems() / this.maxCols());
        }

        resetFontSettings() {
            super.resetFontSettings();
            if (this._data.FontSize) {
                this.contents.fontSize = this._data.FontSize;
            }
            if (this._data.FontFace) {
                this.contents.fontFace = this._data.FontFace;
            }
        };

        isValid() {
            if (this._data.HiddenNoFocus && !this.active) {
                return false;
            }
            return !this._data.VisibleSwitchId || $gameSwitches.value(this._data.VisibleSwitchId);
        }

        isDetailWindow(listWindowId) {
            return this._data.ListWindowId === listWindowId;
        }

        maxCols() {
            return this._data.ColumnNumber || super.maxCols();
        }

        refresh() {
            this._list = this.makeCommandList();
            if (this._dynamicHeight) {
                this.setDynamicHeight();
            }
            super.refresh();
            if (this._data.WindowSkin) {
                this.windowskin = ImageManager.loadSystem(this._data.WindowSkin);
            }
            if (this.maxItems() <= this.index()) {
                this.select(this.maxItems() - 1);
            }
        }

        findMetaData(index) {
            const item = this.getItem(index);
            if (!item) {
                return null;
            }
            if (item.meta) {
                return item.meta;
            } else if (item.actor && item.actor().meta) {
                return item.actor().meta;
            }
            return null;
        }

        drawNotePicture(metaValue, x, y, align = 'left', valign = 'top', xScale = 1, yScale = 1) {
            const meta = this.findMetaData(this._drawingIndex);
            if (!meta || !meta[metaValue]) {
                return;
            }
            const fileName = PluginManagerEx.convertEscapeCharacters(meta[metaValue]);
            if (fileName) {
                this.drawPicture(fileName, x, y, align, valign, xScale, yScale);
            }
        };

        drawPicture(file, x, y, align = 'left', valign = 'top', xScale = 1, yScale = 1) {
            const bitmap = ImageManager.loadPicture(file);
            if (bitmap.isReady()) {
                const dw = bitmap.width * xScale;
                const dh = bitmap.height * yScale;
                x += this.findAlignX(align, dw);
                y += this.findAlignY(valign, dh);
                this.contents.blt(bitmap, 0, 0, bitmap.width, bitmap.height, x, y, dw, dh);
            } else {
                this.retryDrawItem(bitmap);
            }
        }

        drawEnemy(x, y, align = 'left', valign = 'top') {
            const item = this.getItem(this._drawingIndex);
            const bitmap = this.loadEnemyImage(item);
            if (bitmap.isReady()) {
                if (!this._enemySprite) {
                    this._enemySprite = this.createEnemyContents();
                }
                this._enemySprite.setHue(item.battlerHue);
                x += this.findAlignX(align, bitmap.width);
                y += this.findAlignY(valign, bitmap.height);
                this._enemySprite.bitmap.blt(bitmap, 0, 0, bitmap.width, bitmap.height, x, y);
            } else {
                this.retryDrawItem(bitmap);
            }
        }

        findAlignX(align, dw) {
            const width = this.itemRect(this._drawingIndex).width;
            const shiftX = width - dw;
            switch (align.toLowerCase()) {
                case 'right':
                    return shiftX;
                case 'center':
                    return shiftX / 2;
                default:
                    return 0;
            }
        }

        findAlignY(valign, dh) {
            const height = this.innerHeight;
            const shiftY = height - dh;
            switch (valign.toLowerCase()) {
                case 'bottom':
                    return shiftY;
                case 'center':
                    return shiftY / 2;
                default:
                    return 0;
            }
        }

        createEnemyContents() {
            const sprite = new Sprite();
            sprite.bitmap = new Bitmap(this.contents.width, this.contents.height);
            const area = this._clientArea;
            area.addChildAt(sprite, area.getChildIndex(this._contentsSprite));
            return sprite;
        }

        loadEnemyImage(item) {
            if ($gameSystem.isSideView()) {
                return ImageManager.loadSvEnemy(item.battlerName);
            } else {
                return ImageManager.loadEnemy(item.battlerName);
            }
        }

        drawNoteText(metaValue, x, y, align = null) {
            const meta = this.findMetaData(this._drawingIndex);
            if (meta && meta[metaValue] !== undefined) {
                if (align) {
                    const rect = this.itemRect(this._drawingIndex);
                    this.drawText(meta[metaValue], x, y, rect.width - x, align)
                } else {
                    this.drawTextEx(meta[metaValue], x, y);
                }
            }
        }

        drawParam(paramIndex, x, y, align = 'left') {
            const item = this.getItem(this._drawingIndex);
            const rect = this.itemRect(this._drawingIndex);
            this.drawText(item.params[paramIndex], x, y, rect.width - x, align);
        }

        setDynamicHeight() {
            this.height = this.fittingHeight(this.numVisibleRows());
            this.createContents();
        }

        fittingHeight(numLines) {
            return numLines * this.itemHeight() + this.padding * 2;
        }

        makeCommandList() {
        }

        maxItems() {
            return this._list.length;
        }

        drawItem(index) {
            this._drawingIndex = index;
            const item = this.getItem(index);
            const rect = this.findItemRect(index);
            this.changePaintOpacity(this.isEnabled(index));
            if (this.isMasking(index)) {
                this.drawMasking(rect);
            } else {
                this.drawItemSub(item, rect, index);
            }
            this.changePaintOpacity(1);
        }

        findItemRect(index) {
            return null;
        }

        drawItemSub(item, rect, index) {
        };

        retryDrawItem(bitmap) {
            const index = this.index();
            bitmap.addLoadListener(() => {
                if (index === this.index()) {
                    this.drawItem(this._drawingIndex);
                }
            });
        }

        drawMasking(rect) {
            this.drawTextEx(this._data.MaskingText, rect.x, rect.y);
        }

        updateHelp() {
            let text = this.findHelpText() || '';
            if (this.isMasking(this.index())) {
                text = this._data.MaskingText;
            }
            this._helpWindow.setText(text.replace(/\\n/g, '\n'));
        }

        findHelpText() {
            return this._data.CommonHelpText;
        }

        findDecisionEvent() {
            return this._data.DecisionEvent;
        }

        canActorChange() {
            return this._data.ActorChangeable;
        }

        findCurrentItem() {
            return this.getItem(this.index());
        }

        findWindowItem(windowId) {
            const win = this._windowMap.get(windowId);
            if (!win) {
                throw new Error(`Window [${windowId}] is not found.`);
            }
            return win.findCurrentItem();
        }

        findListWindowItem() {
            const listWindowId = this._data.ListWindowId;
            return listWindowId ? this.findWindowItem(listWindowId) : null;
        }

        getItem(index) {
            if (index === undefined) {
                index = this.index();
            }
            return this._list[index];
        }

        isCurrentItemEnabled() {
            return this.isEnabled(this.index());
        }

        isEnabled(index) {
            const item = this.getItem(index);
            return this.isEnabledSub(item) && !this.isMasking(index);
        }

        isMasking(index) {
            const item = this.getItem(index);
            const v = $gameVariables.value.bind($gameVariables); // used by eval
            const s = $gameSwitches.value.bind($gameSwitches); // used by eval
            return this.isUseMasking() && !this.isVisible(item, v, s);
        }

        isVisible(item, v, s) {
            return true;
        }

        isEnabledSub(item) {
        };

        activate() {
            if (this._index < 0) {
                this.select(0);
            }
            super.activate();
        }

        isUseMasking() {
            return !!this._data.MaskingText;
        }

        setActor(actor) {
        }

        drawItemBackground(index) {
            if (!this._data.ListWindowId && this._list[0] !== ' ' && !this._data.noItemBackground) {
                super.drawItemBackground(index);
            }
        }

        resetTextColor() {
            super.resetTextColor();
            if (this._data.textColor > 0) {
                this.changeTextColor(ColorManager.textColor(this._data.textColor));
            }
        }
    }

    class Window_CustomMenuCommand extends Window_CustomMenu {
        makeCommandList() {
            const list = this._data.CommandList;
            if (!list) {
                return [];
            }
            return this.isUseMasking() ? list : list.filter(data => this.isVisible(data));
        }

        isVisible(item) {
            return this.isScriptValid(item.VisibleScript) && this.isSwitchValid(item.VisibleSwitchId);
        }

        drawItemSub(item, rect, index) {
            const width = this.textSizeEx(item.Text).width;
            if (item.Align === 1) {
                rect.x += (rect.width - width) / 2;
            } else if (item.Align === 2) {
                rect.x += rect.width - width;
            }
            this.drawTextEx(item.Text, rect.x, rect.y, rect.width);
        }

        findItemRect(index) {
            return this.itemLineRect(index);
        }

        findHelpText() {
            const item = this.getItem();
            return item && item.HelpText ? item.HelpText : super.findHelpText();
        }

        isEnabledSub(item) {
            return item && this.isScriptValid(item.IsEnableScript) && this.isSwitchValid(item.EnableSwitchId);
        }

        isSwitchValid(id) {
            return !id || $gameSwitches.value(id);
        }

        isScriptValid(script) {
            if (script === '' || script === undefined) {
                return true;
            }
            const v = $gameVariables.value.bind($gameVariables); // used by eval
            const s = $gameSwitches.value.bind($gameSwitches); // used by eval
            const item = this.findListWindowItem(); // used by eval
            if (item === undefined) {
                return false;
            }
            try {
                return eval(script);
            } catch (e) {
                outputError(e, script);
                return true;
            }
        }

        findDecisionEvent() {
            const item = this.getItem();
            if (item?.CancelChoice) {
                return this._data.CancelEvent;
            } else if (item?.DecisionEvent) {
                return item.DecisionEvent;
            } else {
                return super.findDecisionEvent();
            }
        }

        playOkSound() {
            const item = this.getItem();
            if (item?.OkSound) {
                AudioManager.playSe(item.OkSound);
            } else {
                super.playOkSound();
            }
        }
    }

    class Window_CustomMenuDataList extends Window_CustomMenuCommand {
        makeCommandList() {
            if (this._data.ListWindowId) {
                const data = this.findListWindowItem();
                return data ? [data] : [];
            }
            const v = $gameVariables.value.bind($gameVariables); // used by eval
            const s = $gameSwitches.value.bind($gameSwitches); // used by eval
            let list;
            try {
                list = eval(this._data.ListScript);
            } catch (e) {
                outputError(e, this._data.ListScript);
                list = [];
            }
            if (!Array.isArray(list)) {
                list = list ? [list] : [' '];
            }
            if (this._data.FilterScript && !this.isUseMasking()) {
                list = list.filter(item => this.isVisible(item, v, s));
            }
            if (this._data.MappingScript) {
                list = list.map(item => {
                    try {
                        return eval(this._data.MappingScript)
                    } catch (e) {
                        outputError(e, this._data.MappingScript);
                        return null;
                    }
                });
            }
            if (this._data.SortScript) {
                try {
                    list.sort((a, b) => eval(this._data.SortScript) || -1);
                } catch (e) {
                    outputError(e, this._data.SortScript);
                }
            }
            if (this._data.CommandList) {
                return list.concat(super.makeCommandList());
            }
            return list;
        }

        intMeta(item, name, defaultValue = 0) {
            return parseInt(item.meta[name]) || defaultValue;
        }

        createSaveFiles() {
            const autoSave = $gameSystem.isAutosaveEnabled();
            const count =  DataManager.maxSavefiles() - (autoSave ? 0 : 1);
            const list = [];
            for (let i = 0; i < count; i++) {
                const savefileId = $gameSystem.indexToSavefileId(i);
                list.push(DataManager.savefileInfo(savefileId));
            }
            return list;
        }

        findItemRect(index) {
            const rect = this.itemRectWithPadding(index);
            rect.y += this.rowSpacing() / 2;
            return rect;
        }

        isCommandItem(item) {
            return item?.Text;
        }

        isVisible(item, v, s) {
            if (this.isCommandItem(item)) {
                return super.isVisible(item, v, s);
            }
            try {
                return eval(this._data.FilterScript)
            } catch (e) {
                outputError(e, this._data.FilterScript);
                return false;
            }
        }

        drawItemSub(item, r, index) {
            if (this.isCommandItem(item)) {
                if (!this._data.ListWindowId) {
                    super.drawItemSub(item, r, index);
                }
                return;
            }
            const v = $gameVariables.value.bind($gameVariables); // used by eval
            const s = $gameSwitches.value.bind($gameSwitches); // used by eval
            const scriptList = this._data.ItemDrawScript || [];
            scriptList.forEach(script => {
                try {
                    const itemText = eval(script);
                    if (itemText === String(itemText)) {
                        this.drawTextEx(itemText, r.x, r.y);
                    }
                } catch (e) {
                    outputError(e, script);
                }
            });
            const multiScript = this._data.ItemDrawMultiLineScript;
            if (multiScript) {
                try {
                    eval(multiScript);
                } catch (e) {
                    outputError(e, script);
                }
            }
            if (scriptList.length === 0 && !multiScript && item !== undefined && item !== null) {
                this.drawItemSubAuto(item, r, index);
            }
        }

        drawItemSubAuto(item, r, index) {
            if (item === String(item)) {
                this.drawTextEx(item, r.x, r.y);
            } else if (item.hasOwnProperty('iconIndex')) {
                this.drawItemName(item, r.x, r.y, r.width);
            } else if (item instanceof Game_Actor) {
                this.drawActorName(item, r.x, r.y, r.width);
            } else if (item.hasOwnProperty('name')) {
                this.drawTextEx(item.name, r.x, r.y);
            } else {
                this.drawTextEx(item.toString(), r.x, r.y);
                console.warn(item);
            }
        }

        findHelpText() {
            const text = super.findHelpText();
            if (text) {
                return text;
            }
            const item = this.getItem();
            return item && item.description ? item.description : '';
        }

        isEnabledSub(item) {
            if (this.isCommandItem(item)) {
                return super.isEnabledSub(item);
            }
            const v = $gameVariables.value.bind($gameVariables); // used by eval
            const s = $gameSwitches.value.bind($gameSwitches); // used by eval
            const script = this._data.IsEnableScript;
            try {
                return script ? eval(script) : true;
            } catch (e) {
                outputError(e, script);
                return false;
            }

        }

        setActor(actor) {
            if (this._actor !== actor) {
                this._actor = actor;
                this.refresh();
            }
        }

        drawFace(faceName, faceIndex, x, y, width, height) {
            const bitmap = ImageManager.loadFace(faceName);
            if (bitmap.isReady()) {
                super.drawFace(faceName, faceIndex, x, y, width, height);
            } else {
                this.retryDrawItem(bitmap);
            }
        }

        drawCharacter(characterName, characterIndex, x, y) {
            const bitmap = ImageManager.loadCharacter(characterName);
            if (bitmap.isReady()) {
                super.drawCharacter(characterName, characterIndex, x, y);
            } else {
                this.retryDrawItem(bitmap);
            }
        }

        drawSavefileInfo(info, x, y, width) {
            const index = this._drawingIndex;
            const savefileId = $gameSystem.indexToSavefileId(index);
            const rect = this.itemRectWithPadding(index);
            this.resetTextColor();
            this.changePaintOpacity(this.isEnabled(savefileId));
            this.drawSaveTitle(savefileId, rect.x, rect.y + 4, width);
            if (info) {
                this.drawSaveContents(info, rect);
            }
        }

        drawSaveTitle(savefileId, x, y, width) {
            if (savefileId === 0) {
                this.drawText(TextManager.autosave, x, y, width);
            } else {
                this.drawText(TextManager.file + " " + savefileId, x, y, width);
            }
        }

        drawSaveContents(info, rect) {
            const bottom = rect.y + rect.height;
            if (rect.width >= 420) {
                this.drawPartyCharacters(info, rect.x + 220, bottom - 8);
            }
            const lineHeight = this.lineHeight();
            const y2 = bottom - lineHeight - 4;
            if (y2 >= lineHeight) {
                this.drawPlaytime(info, rect.x, y2, rect.width);
            }
        }

        drawPartyCharacters(info, x, y) {
            if (info.characters) {
                let characterX = x;
                for (const data of info.characters) {
                    this.drawCharacter(data[0], data[1], characterX, y);
                    characterX += 48;
                }
            }
        }

        drawPlaytime(info, x, y, width) {
            if (info.playtime) {
                this.drawText(info.playtime, x, y, width, "right");
            }
        }
    }

    Game_System.prototype.indexToSavefileId = function(index) {
        return index + (this.isAutosaveEnabled() ? 0 : 1);
    };

    const _Sprite_Gauge_isValid = Sprite_Gauge.prototype.isValid;
    Sprite_Gauge.prototype.isValid = function() {
        const valid = _Sprite_Gauge_isValid.apply(this, arguments);
        if (SceneManager._scene instanceof Scene_CustomMenu) {
            return true;
        } else {
            return valid;
        }
    };

    window.Window_CustomMenu = Window_CustomMenu;
    window.Window_CustomMenuCommand = Window_CustomMenuCommand;
    window.Window_CustomMenuDataList = Window_CustomMenuDataList;

    class Spriteset_Menu extends Spriteset_Base {
        createBaseSprite() {
            super.createBaseSprite();
            this._blackScreen.opacity = 0;
            this._effectsContainer = this;
        }

        setSceneObject(lowerContainers, upperContainers, windowLayer, messageWindowLayer, picturePriority) {
            lowerContainers.forEach(container => this.addChild(container));
            if (picturePriority === 2) {
                this.addChild(this._pictureContainer);
            }
            this.addChild(windowLayer);
            if (picturePriority === 1) {
                this.addChild(this._pictureContainer);
            }
            this.addChild(messageWindowLayer);
            if (picturePriority === 0) {
                this.addChild(this._pictureContainer);
            }
            upperContainers.forEach(container => this.addChild(container));
        };

        createToneChanger() {
        };

        updateToneChanger() {
        };

        // for MOG_Weather_EX.js
        createWeatherEX() {
        };

        findTargetSprite(target) {
            if (this.findPointTargetSprite) {
                return this.findPointTargetSprite(target);
            } else {
                return null;
            }
        }
    }
})();