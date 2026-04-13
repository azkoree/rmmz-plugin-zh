# Text2Frame
将文本转换为事件对话的简易工具

![Node.js CI](https://github.com/yktsr/Text2Frame-MV/actions/workflows/nodejs.yml/badge.svg)
![CodeQL](https://github.com/yktsr/Text2Frame-MV/actions/workflows/github-code-scanning/codeql/badge.svg)

[原仓库地址](https://github.com/yktsr/Text2Frame-MV)

---



RMMV / MZ的开发辅助插件，能够将文本文件（.txt等）简单转换为“显示文章”事件命令。

## 下载最新版插件
[![Download Text2Frame](https://img.shields.io/badge/Download-Text2Frame.js-blue)](https://github.com/azkoree/rmmz-plugin-zh/blob/main/Message/Text2Frame.js)

[![Download Frame2Text](https://img.shields.io/badge/Download-Frame2Text.js-blue)](https://github.com/azkoree/rmmz-plugin-zh/blob/main/Message/Frame2Text.js)

## 说明
![./introduce_Text2Frame_MV_MZ.png](https://raw.githubusercontent.com/wiki/yktsr/Text2Frame-MV/img/introduce_Text2Frame_MV_MZ.png)

支援希望在MV/MZ**以外**的编辑器中编辑对话等内容，之后再将其作为事件命令导入的用户。

执行插件指令后，可以读取文本文件，并将其作为事件命令导入至MV/MZ的地图事件或公共事件中。

由此，便无需在RPG Maker内部编辑台词、窗口的显示方法（显示位置、背景）以及BGM等内容。

最基本的用法，请参考以下演示。
关于高级用法及插件参数的详细信息，请参照[维基（wiki）](https://github.com/yktsr/Text2Frame-MV/wiki)。

***快速入门***

1. 创建剧本文件
1. 将文件保存为text/message.txt
1. 创建执行插件命令的事件
1. 设定插件命令，包括进行导入的地图id、事件id、和事件页id，可以选择覆盖原事件页或不覆盖
1. 创建要写入对话的事件（也就是在第四步中设定的事件页，这两个可以是同一个，大概）
1. 测试执行插件命令（作者展示的截图是在事件页中直接测试，但在译者这里的环境不行，可以启动主页面的测试模式触发一下这个事件，也可以）
1. 重新载入或重新打开项目

具体顺序请参考[wiki](https://github.com/yktsr/Text2Frame-MV/wiki)

![./basic_sample.gif](https://raw.githubusercontent.com/wiki/yktsr/Text2Frame-MV/img/basic_sample.gif)


## 导入方法
1. 下载Text2Frame.js
1. 放入想要导入的工程的插件文件夹
1. 在插件管理中启用本插件


## 脸图/背景/位置/名称的设定
通过使用标签，来进行脸图、背景、位置等对话框的设定。

这里的默认值，可以在插件参数中进行更改。

### 设定脸图 <Face: Face Name>
设定在窗口中显示的脸图。

![./introduce_Face.png](https://raw.githubusercontent.com/wiki/yktsr/Text2Frame-MV/img/introduce_Face.png)

### 更改背景 <Background: Background Type>
更改对话框窗口的背景。

![./introduce_Background.png](https://raw.githubusercontent.com/wiki/yktsr/Text2Frame-MV/img/introduce_Background.png)

### 更改位置 <Position: Position Type>
变更窗口的位置。

![./introduce_WindowPosition.png](https://raw.githubusercontent.com/wiki/yktsr/Text2Frame-MV/img/introduce_WindowPosition.png)

### 设定名称(MZ用)  <Name: ○○○○>
设定窗口中显示的名称。

![./introduce_WindowPosition.png](https://raw.githubusercontent.com/wiki/yktsr/Text2Frame-MV/img/introduce_namebox.png)


## 组成事件命令的标签
除了显示文章之外，也可以使用其他的所有事件命令。

在对话框输入以下标签，就能够根据标签替换为对应事件命令。

例如：

```
<Set: 1, 2>
<CommonEvent: 3>
今天也要努力哦！
```


这样一来，在显示“今天也要努力哦！”这个对话框之前，会组成“变量操作（将1号变量代入定数2）”和“公共事件ID3”的事件命令。

所有标签的详情在[wiki的语法页面](https://github.com/yktsr/Text2Frame-MV/wiki/%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%AE%E6%9B%B8%E3%81%8D%E6%96%B9)以及插件本体的帮助中可以查阅。


### 常用事件命令快速参考指南
以下に、よく使われるイベントコマンドに絞って早見表を記載しています。ここに記載しているもの以外にも、すべてのイベントコマンドに対応しています。

以下是常用的事件命令的快速参考指南。除了以下记述之外，所有的事件命令都进行了对应。

| 事件命令             | 标签                                                         | 详细                                                         |
| :------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| 显示选项             | <ShowChoices> <When: 是> 选择了选项1时的处理 <When: 否> 选择了选项2时的处理 <End> | 显示“是”和“否”的选项。                                       |
| 开关操作(ON)         | <Switch: 1, ON>                                              | 将开关1设为ON。                                              |
| 开关操作(OFF)        | <Switch: 1, OFF>                                             | 将开关1设为OFF。                                             |
| 变量操作(代入)       | <Set: 1, 2>                                                  | 将常量2代入变量1。                                           |
| 变量操作(加法)       | <Add: 1, V[20]>                                              | 将变量20的值加到变量1上。                                    |
| 变量操作(减法)       | <Sub: 1, R5050100100>                                        | 将最小值50最大值100的随机数从变量1中减去。                   |
| 变量操作(乘法)       | <Mul: 1-10, GDItem*I**t**e**m*22>                            | 将变量1～10乘以ID为2的物品的持有数量。                       |
| 变量操作(除法)       | <Div: 1, GDBattleCount*B**a**ttl**e**C**o**u**n**t*>         | 将变量1除以战斗次数。                                        |
| 变量操作(取余)       | <Mod: 1-10, SC$dataMap.width;>                               | 将变量1～10代入"$dataMap.width"的值的余数。                  |
| 自身开关操作(ON)     | <SelfSwitch: A, ON>                                          | 将自身开关A设为ON。                                          |
| 自身开关操作(OFF)    | <SelfSwitch: A, OFF>                                         | 将自身开关A设为OFF。                                         |
| 条件分支             | <If: Switch[1], ON> 满足条件时的处理 <Else> 不满足条件时的处理 <End> | 以“开关1为ON时”为条件进行分支处理。                          |
| 循环                 | <Loop> 想要循环的处理 <RepeatAbove>                          | 循环处理。                                                   |
| 中断循环             | <BreakLoop>                                                  | 在相应位置中断循环处理。                                     |
| 公共事件             | <CommonEvent: 1>                                             | 插入ID为1的公共事件。                                        |
| 设置标签             | <Label: 示例>                                                | 设置名为“示例”的标签。                                       |
| 跳转至标签           | <JumpToLabel: 示例>                                          | 跳转至名为“示例”的标签处执行处理。                           |
| 注释                 | <comment> 今天也要加油哦！ </comment>                        | 插入“今天也要加油哦！”的注释。                               |
| 增减持有金钱         | <ChangeGold: Increase, 100>                                  | 增加持有金钱100。                                            |
| 增减物品             | <ChangeItems: 3, Increase, 4>                                | 增加ID为3的物品4个。                                         |
| 增减武器             | <ChangeWeapons: 1, Increase, 2>                              | 增加ID为1的武器2个。                                         |
| 增减防具             | <ChangeArmors: 1, Increase, 2>                               | 增加ID为1的防具2个。                                         |
| 场所移动             | <TransferPlayer: Direct[1][10][20], Retain, Black>           | 方向保持不变，淡入淡出为黑色，移动至ID为1的地图的X坐标10、Y坐标20处。 |
| 显示图片             | <ShowPicture: 1, Castle, Scale[50][55]>                      | 以宽度50%、高度55%显示编号为1的Castle.png图片。              |
| 移动图片             | <MovePicture: 1, Position[Center][200][Variables[3]]>        | 原点为中心，将编号为1的图片移动至X坐标200、Y坐标为变量3的位置。 |
| 旋转图片             | <RotatePicture: 1, -30>                                      | 以速度-30旋转编号为1的图片。                                 |
| 更改图片色调         | <TintPicture: 1, Duration[60], ColorTone[0][100][255][50]>   | 花费60帧（1秒）将编号为1的图片色调更改为红0、绿100、蓝255、灰度50。 |
| 消除图片             | <ErasePicture: 1>                                            | 删除编号为1的图片。                                          |
| 等待                 | <Wait: 60>                                                   | 插入60帧（1秒）的等待。                                      |
| 画面淡出             | <FadeOut>                                                    | 插入画面淡出。                                               |
| 画面淡入             | <FadeIn>                                                     | 插入画面淡入。                                               |
| 更改画面色调         | <TintScreen: Duration[60], ColorTone[0][100][255][50]>       | 花费60帧（1秒）将画面色调更改为红0、绿100、蓝255、灰度50。   |
| 画面闪烁             | <FlashScreen: 50, 100, 150, 170, 60>                         | 以红50、绿100、蓝150、强度170闪烁60帧（1秒）。               |
| 画面震动             | <ShakeScreen: 5, 8, 60>                                      | 以强度5、速度8震动60帧。                                     |
| 演奏BGM              | <PlayBGM: Battle1, 90, 100, 0>                               | 将BGM更改为Battle1，音量90、音调100、相位0。                 |
| 淡出BGM              | <FadeoutBGM: 10>                                             | 花费10秒淡出BGM。                                            |
| 演奏BGS              | <PlayBGS: City, 90, 100, 0>                                  | 将BGS更改为City，音量90、音调100、相位0。                    |
| 淡出BGS              | <FadeoutBGS: 20>                                             | 花费10秒淡出BGS。                                            |
| 演奏ME               | <PlayME: Curse1, 90, 100, 0>                                 | 将Curse1作为ME演奏，音量90、音调100、相位0。                 |
| 演奏SE               | <PlaySE: Attack1, 90, 100, 0>                                | 将Attack1作为SE演奏，音量90、音调100、相位0。                |
| 停止SE               | <StopSE>                                                     | 插入停止SE的事件。                                           |
| 战斗处理             | <BattleProcessing: 1>                                        | 与敌人队伍1战斗。                                            |
| 战斗处理（允许失败） | <BattleProcessing: 1> <IfWin> 胜利时的处理 <IfLose> 败北时的处理 <End> | 与敌人队伍1战斗，允许败北，触发遭遇。                        |
| 打开存档画面         | <OpenSaveScreen>                                             | 打开存档画面。                                               |
| 脚本                 | <script> console.log("ぞい！"); </script>                    | 将"console.log("ぞい！");"作为脚本事件嵌入。                 |
| 插件指令             | <PluginCommand: IMPORT_MESSAGE_TO_EVENT>                     | 将"IMPORT_MESSAGE_TO_EVENT"作为插件指令嵌入。                |


具体的其他事件命令的范例，请参考[示例页面（日语）](https://github.com/yktsr/Text2Frame-MV/wiki/動作確認テキスト)


## 其他功能
### 注释

若在想要导入的文章的行首写上「%」，则该行将被视为注释，不会被导入。

此注释符号可以通过插件参数进行更改。

操作示例请参照[wiki的相应页面](https://github.com/yktsr/Text2Frame-MV/wiki/%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%AE%E6%9B%B8%E3%81%8D%E6%96%B9)。

### 写入公共事件

不仅可以写入地图上的事件，还可以写入公共事件。

操作示例请参照[wiki的相应页面](https://github.com/yktsr/Text2Frame-MV/wiki/%E3%82%B3%E3%83%A2%E3%83%B3%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%81%B8%E3%81%AE%E6%9B%B8%E3%81%8D%E5%87%BA%E3%81%97)。

### 使用插件命令参数更改默认值（适用于MV）

当有多个文件想要导入，或者希望对每个文件应用不同选项时，可以通过使用插件命令参数进行更高级的控制。

此功能适用于RPG Maker MV。在RPG Maker MZ中，可以直接通过插件命令进行设置。

详情请参照[wiki的相应页面](https://github.com/yktsr/Text2Frame-MV/wiki/%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3%E3%82%AA%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3)。

## 逆转换插件 Frame2Text

将RPG Maker MV/MZ的事件命令，按照Text2Frame的记法导出为文本的插件——Frame2Text也已发布。

Frame2Text的下载请从[此处](https://github.com/azkoree/rmmz-plugin-zh/blob/main/Message/Frame2Text.js)进行。

另外，详细的使用方法请参照[Frame2Text的介绍页面](https://github.com/yktsr/Text2Frame-MV/wiki/%E9%80%86%E5%A4%89%E6%8F%9B%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3Frame2Text)或插件本体的帮助文档。

## 联系原作者
* [@kryptos_nv](https://twitter.com/kryptos_nv)

## 贡献者
* [@Asyun3i9t](https://twitter.com/Asyun3i9t)
  * [大海工房](http://taikai-kobo.hatenablog.com/)
* inazumasoft:Shick
  * [いなずまそふと制作支援部](https://ci-en.net/creator/12715)

## Development

以下是面向开发者的说明，所以就不翻译了。。

### Install dependencies
```
$ npm ci
$ npm run build --if-present
```

### Show help
```
Usage: Text2Frame [options]

Options:
  -V, --version                         output the version number
  -m, --mode <map|common|compile|test>  output mode
  -t, --text_path <name>                text file path
  -o, --output_path <name>              output file path
  -e, --event_id <name>                 event file id
  -p, --page_id <name>                  page id
  -c, --common_event_id <name>          common event id
  -w, --overwrite <true/false>          overwrite mode (default: "false")
  -v, --verbose                         debug mode (default: false)
  -h, --help                            display help for command

===== Manual =====
    NAME
       Text2Frame - Simple compiler to convert text to event command.
    SYNOPSIS
        node Text2Frame.js --verbose --mode map --text_path <text file path> --output_path <output file path> --event_id <event id> --page_id <page id> --overwrite <true|false>
        node Text2Frame.js --verbose --mode common --text_path <text file path> --common_event_id <common event id> --overwrite <true|false>
        node Text2Frame.js --mode compile
        node Text2Frame.js --verbose --mode test
    DESCRIPTION
        node Text2Frame.js --verbose --mode map --text_path <text file path> --output_path <output file path> --event_id <event id> --page_id <page id> --overwrite <true|false>
          マップへのイベント出力モードです。
          読み込むファイル、出力マップ、上書きの有無を引数で指定します。
          test/basic.txt を読み込み data/Map001.json に上書きするコマンド例は以下です。

          例1：$ node Text2Frame.js --mode map --text_path test/basic.txt --output_path data/Map001.json --event_id 1 --page_id 1 --overwrite true
          例2：$ node Text2Frame.js -m map -t test/basic.txt -o data/Map001.json -e 1 -p 1 -w true

        node Text2Frame.js --verbose --mode common --text_path <text file path> --common_event_id <common event id> --overwrite <true|false>
          コモンイベントへのイベント出力モードです。
          読み込むファイル、出力コモンイベント、上書きの有無を引数で指定します。
          test/basic.txt を読み込み data/CommonEvents.json に上書きするコマンド例は以下です。

          例1：$ node Text2Frame.js --mode common --text_path test/basic.txt --output_path data/CommonEvents.json --common_event_id 1 --overwrite true
          例2：$ node Text2Frame.js -m common -t test/basic.txt -o data/CommonEvents.json -c 1 -w true

        node Text2Frame.js --mode compile
          コンパイルモードです。
          変換したいテキストファイルをパイプで与えると、対応したイベントに変換されたJSONを、標準出力に出力します。
          このモードでは、Map.json / CommonEvent.jsonの形式へフォーマットされず、イベントに変換したJSONのみが出力されるため、
          Map.json/CommonEvent.json への組み込みは各自で行う必要があります。

          例1: $ cat test/basic.txt | node Text2Frame.js --mode compile

        node Text2Frame.js --mode test
          テストモードです。test/basic.txtを読み込み、data/Map001.jsonに出力します。
```

### Run Text2frame.js with command line
```
$ npm run debug -- --mode map --text_path test/basic.txt --output_path data/Map001.json --event_id 1 --overwrite true

> Text2Frame-MV@1.1.2 debug /home/yuki/github/Text2Frame-MV
> node Text2Frame.js "--mode" "map" "--text_path" "test/basic.txt" "--output_path" "data/Map001.json" "--event_id" "1" "--overwrite" "true"

Please restart RPG Maker MV(Editor) WITHOUT save.
**セーブせずに**プロジェクトファイルを開き直してください
```

### Node.jsプロジェクトでのText2Frameモジュールの使用方法

Text2FrameはNode.jsプロジェクトでライブラリとして使用することができます。
CommonJS形式とES Module形式の両方をサポートしているため、プロジェクトの環境に合わせて選択できます。

#### インストール方法

npmを使用してGitHubリポジトリから直接インストールできます：

```bash
$ npm install 'yktsr/Text2Frame-MV'
```

または、package.jsonに以下を追加してください：

```json
{
  "dependencies": {
    "Text2Frame-MV": "yktsr/Text2Frame-MV"
  }
}
```

#### CommonJSモジュールとして使用する場合

Node.jsの従来のrequire構文を使用する場合は、`.cjs.js`ファイルをインポートします。

**examples/commonjs.js:**
```javascript
const TF = require("Text2Frame-MV/Text2Frame.cjs.js")

// テキストからイベントコマンドのJSONを生成
const date = new Date().toLocaleString()
const text = `<comment>
CommonJSモジュールで使用
出力日時: ${date}
</comment>
<Wait: 60>
こんにちは、世界！`

// compile()メソッドでText2Frame記法をJSONに変換
const eventCommands = TF.compile(text)
console.log(JSON.stringify(eventCommands, null, 2))
```

**実行方法:**
```bash
$ node examples/commonjs.js
```

#### ES Moduleとして使用する場合

モダンなJavaScriptのimport構文を使用する場合は、`.es.mjs`ファイルをインポートします。
`.mjs`拡張子のファイルか、package.jsonで`"type": "module"`を指定する必要があります。

**examples/esmodules.mjs:**
```javascript
import TF from "Text2Frame-MV/Text2Frame.es.mjs"

// テキストからイベントコマンドのJSONを生成
const date = new Date().toLocaleString()
const text = `<comment>
ES Moduleで使用
出力日時: ${date}
</comment>
<PlayBGM: Theme1, 90, 100, 0>
今日も一日がんばるぞい！`

// compile()メソッドでText2Frame記法をJSONに変換
const eventCommands = TF.compile(text)
console.log(JSON.stringify(eventCommands, null, 2))
```

**実行方法:**
```bash
$ node examples/esmodules.mjs
```

#### 主要なAPI

Text2Frameモジュールは以下のメソッドを提供します：

- **`TF.compile(text)`**: Text2Frame記法のテキストをRPGツクールMV/MZのイベントコマンドJSON配列に変換します
- 戻り値: イベントコマンドのJSON配列（Map.jsonやCommonEvents.jsonに組み込み可能な形式）

#### 実用的な使用例

```javascript
import TF from "Text2Frame-MV/Text2Frame.es.mjs"
import fs from "fs"

// テキストファイルを読み込む
const scenarioText = fs.readFileSync("scenario/chapter1.txt", "utf-8")

// Text2Frame記法をイベントコマンドに変換
const eventCommands = TF.compile(scenarioText)

// 既存のマップJSONを読み込む
const mapData = JSON.parse(fs.readFileSync("data/Map001.json", "utf-8"))

// イベントコマンドを指定のイベントに組み込む
const eventId = 1
const pageId = 0
mapData.events[eventId].pages[pageId].list = eventCommands

// マップJSONを保存
fs.writeFileSync("data/Map001.json", JSON.stringify(mapData, null, 2))

console.log("イベントコマンドの組み込みが完了しました！")
```

### Lint check
```
$ npm run lint
```

### Test
```
$ npm run test
```


## ライセンス
MIT LICENSE

