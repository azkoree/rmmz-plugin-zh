// DarkPlasma_ChangeImageWithPattern 1.0.1
// Copyright (c) 2024 DarkPlasma
// This software is released under the MIT license.
// http://opensource.org/licenses/mit-license.php

/**
 * 2024/06/13 1.0.1 導入前のセーブデータをロードするとエラーになる不具合の修正
 * 2024/06/07 1.0.0 公開
 */

/*:
 * @plugindesc 在更改图像时设置方向和图案
 * @author DarkPlasma
 * @license MIT
 *
 * @target MZ
 * @url https://github.com/elleonard/DarkPlasma-MZ-Plugins/tree/release
 *
 * @command hackChangeImage
 * @text 自定义图像更改
 * @desc 自定义目标图像的更改命令。
 * @arg target
 * @desc 选择要自定义图像更改的目标。
 * @text 目标
 * @type select
 * @option 玩家
 * @value -1
 * @option 本事件
 * @value 0
 * @option 其他事件
 * @value 1
 * @default 0
 * @arg targetEventId
 * @desc 仅当目标是其他事件时，设置目标事件ID。
 * @text 目标事件ID
 * @type number
 * @default 0
 * @arg direction
 * @desc 通过图像更改设置角色的方向。
 * @text 方向
 * @type select
 * @option 不更改
 * @value 0
 * @option 下
 * @value 2
 * @option 左
 * @value 4
 * @option 右
 * @value 6
 * @option 上
 * @value 8
 * @default 0
 * @arg pattern
 * @desc 通过图像更改设置角色的图案。
 * @text 图案
 * @type select
 * @option 左
 * @value 0
 * @option 中间
 * @value 1
 * @option 右
 * @value 2
 * @default 1
 * @arg fixPattern
 * @desc 通过图像更改固定角色的图案。
 * @text 固定图案
 * @type boolean
 * @default true
 *
 * @command unfixPattern
 * @text 解除图案固定
 * @desc 解除图案固定状态。
 * @arg target
 * @desc 选择要自定义图像更改的目标。
 * @text 目标
 * @type select
 * @option 玩家
 * @value -1
 * @option 本事件
 * @value 0
 * @option 其他事件
 * @value 1
 * @default 0
 * @arg targetEventId
 * @desc 仅当目标是其他事件时，设置目标事件ID。
 * @text 目标事件ID
 * @type number
 * @default 0
 *
 * @help
 * version: 1.0.1
 * 可以在更改图像时设置方向和图案。
 */

(() => {
  'use strict';

  const pluginName = document.currentScript.src.replace(/^.*\/(.*).js$/, function () {
    return arguments[1];
  });

  function parseArgs_hackChangeImage(args) {
    return {
      target: Number(args.target || 0),
      targetEventId: Number(args.targetEventId || 0),
      direction: Number(args.direction || 0),
      pattern: Number(args.pattern || 1),
      fixPattern: String(args.fixPattern || true) === 'true',
    };
  }

  function parseArgs_unfixPattern(args) {
    return {
      target: Number(args.target || 0),
      targetEventId: Number(args.targetEventId || 0),
    };
  }

  const command_hackChangeImage = 'hackChangeImage';

  const command_unfixPattern = 'unfixPattern';

  PluginManager.registerCommand(pluginName, command_hackChangeImage, function (args) {
    const parsedArgs = parseArgs_hackChangeImage(args);
    const target =
      parsedArgs.target === 1 ? this.character(parsedArgs.targetEventId) : this.character(parsedArgs.target);
    target?.setChangeImageWith({
      direction: parsedArgs.direction,
      pattern: parsedArgs.pattern,
      fixPattern: parsedArgs.fixPattern,
    });
  });
  PluginManager.registerCommand(pluginName, command_unfixPattern, function (args) {
    const parsedArgs = parseArgs_unfixPattern(args);
    const target =
      parsedArgs.target === 1 ? this.character(parsedArgs.targetEventId) : this.character(parsedArgs.target);
    target?.unfixPattern();
  });
  function Game_Character_ChangeImageWithPatternMixIn(gameCharacter) {
    const _initMembers = gameCharacter.initMembers;
    gameCharacter.initMembers = function () {
      _initMembers.call(this);
      this._changeImageWith = this.changeImageWith();
      this._isPatternFixed = false;
    };
    gameCharacter.changeImageWith = function () {
      return (
        this._changeImageWith || {
          direction: 0,
          pattern: 1,
          fixPattern: false,
        }
      );
    };
    gameCharacter.setChangeImageWith = function (changeImageWith) {
      this._changeImageWith = changeImageWith;
    };
    gameCharacter.setChangeImageWithDirection = function (direction) {
      this._changeImageWith = this.changeImageWith();
      this._changeImageWith.direction = direction;
    };
    gameCharacter.setChangeImageWithPattern = function (pattern) {
      this._changeImageWith = this.changeImageWith();
      this._changeImageWith.pattern = pattern;
    };
    gameCharacter.setChangeImageWithFixPattern = function (fixPattern) {
      this._changeImageWith = this.changeImageWith();
      this._changeImageWith.fixPattern = fixPattern;
    };
    const _processMoveCommand = gameCharacter.processMoveCommand;
    gameCharacter.processMoveCommand = function (command) {
      _processMoveCommand.call(this, command);
      if (command.code === Game_Character.ROUTE_CHANGE_IMAGE) {
        if (this.changeImageWith().direction) {
          /**
           * 明示的に指定するため、向き固定を貫通する
           */
          const isDirectionFixed = this.isDirectionFixed();
          this.setDirectionFix(false);
          this.setDirection(this.changeImageWith().direction);
          this.setDirectionFix(isDirectionFixed);
        }
        this.setPattern(this.changeImageWith().pattern);
        if (this.changeImageWith().fixPattern) {
          this.fixPattern();
        }
      }
    };
    const _updatePattern = gameCharacter.updatePattern;
    gameCharacter.updatePattern = function () {
      if (this.isPatternFixed()) {
        return;
      }
      _updatePattern.call(this);
    };
    gameCharacter.isPatternFixed = function () {
      return this._isPatternFixed;
    };
    gameCharacter.fixPattern = function () {
      this._isPatternFixed = true;
    };
    gameCharacter.unfixPattern = function () {
      this._isPatternFixed = false;
    };
  }
  Game_Character_ChangeImageWithPatternMixIn(Game_Character.prototype);
})();