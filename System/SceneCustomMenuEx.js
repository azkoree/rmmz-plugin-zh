/*=============================================================================
 SceneCustomMenuEx.js
----------------------------------------------------------------------------
 (C)2022 Triacontane, (改造したらここに作者名を追加)
 This software is released under the MIT License.
 http://opensource.org/licenses/mit-license.php
----------------------------------------------------------------------------
 Version
 1.0.1 2022/11/08 Scene_CustomMenuのテンプレートを追加
 1.0.0 2022/10/27 テンプレート作成
=============================================================================*/

/*:
 * @plugindesc 自定义菜单插件改造吗模板
 * @target MZ
 * @url https://github.com/triacontane/RPGMakerMV/tree/mz_master/SceneCustomMenuEx.js
 * @base SceneCustomMenu
 * @orderAfter SceneCustomMenu
 * @author 作者名を入れます
 *
 * @help SceneCustomMenuEx.js
 *
 * 用于改造自定义菜单插件的模板。
 * 通过向Window_CustomMenu添加方法
 * 可以在外部定义复杂的窗口绘制处理。
 *
 */
(()=> {

    /**
     * 想要重写现有方法时
     */
    const _Window_CustomMenu_drawItem = Window_CustomMenu.prototype.drawItem;
    Window_CustomMenu.prototype.drawItem = function(index) {
        _Window_CustomMenu_drawItem.apply(this, arguments);
    };

    /**
     * 想要添加方法时
     * 将[methodName]改为任意的方法名。
     * 定义的方法可以在窗口的过滤脚本或项目绘制脚本中使用。
     *
     * 调用示例:
     * this.methodName();
     */
    Window_CustomMenu.prototype.methodName = function() {
        console.log('test');
    };

    /**
     * 想要添加方法时
     * 将[methodName]改为任意的方法名。
     * 定义的方法可以在确定事件或取消事件的脚本中使用。
     *
     * 调用示例:
     * this.methodName();
     */
    Scene_CustomMenu.prototype.methodName = function () {
        console.log('test');
    };
})();