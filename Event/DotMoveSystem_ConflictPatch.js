/*:
@target MZ
@plugindesc 像素级移动系统 冲突回避补丁 v1.2.0
@author うなぎおおとろ
@url https://raw.githubusercontent.com/unagiootoro/RPGMZ/master/DotMoveSystem_ConflictPatch.js
@help
这是像素级移动系统的冲突回避补丁。

【使用方法】
请按以下顺序导入插件。
・DotMoveSystem.js
・OverpassTile.js
・RegionBase.js
・DotMoveSystem_ConflictPatch.js

【授权协议】
本插件可在 MIT 许可证的条件下使用。
*/

(() => {
    "use strict";

    const { CharacterCollisionCheckProcess } = DotMoveSystem;

    Game_Follower.prototype.findCollisionData = function(x, y) {
        return $gameMap.findArrayDataRegionAndTerrain(x, y, 'collisionForPlayer');
    };

    // 由 OverpassTile.js 重新定义
    Game_CharacterBase.prototype.isHigherPriority = function() {
        return undefined;
    };

    const CharacterCollisionCheckProcess_checkCharacter = CharacterCollisionCheckProcess.prototype.checkCharacter;
    CharacterCollisionCheckProcess.prototype.checkCharacter = function(x, y, d, character) {
        if (this._character.isHigherPriority() !== character.isHigherPriority()) return null;
        return CharacterCollisionCheckProcess_checkCharacter.call(this, x, y, d, character);
    };
})();
