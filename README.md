# rmmz-plugin-zh

一些RPG Maker MZ插件的自用汉化，大部分是一些小插件，因为大插件我怕不小心乱动导致整个插件都用不了了

由于个人喜好和习惯，战斗机制类的插件较少，大多是体验优化和独立系统类型的插件

~~似乎是很多人在做的工作，但是我做了也没什么问题吧~~

本仓库汉化的插件基本都允许修改分发，付费/不允许分发插件只会提供参数和帮助文本的汉化，请自己替换

## 利用规约

请参考原插件网站和插件说明给出的利用规约。

## 已汉化列表

### [菜单画面 / Menu](https://github.com/azkoree/rmmz-plugin-zh/tree/main/Menu)

对主菜单画面进行各种各样的改造。

- [**Keke_MenuFreeSpace**](https://github.com/azkoree/rmmz-plugin-zh/blob/main/Menu/Keke_MenuFreeSpace.js) 作者：ケケー

​	在状态界面追加一个自由栏或显示立绘，也可以在菜单画面顶部显示一个内容轮换的文本窗口

- [**LL_MenuScreenBase**](https://github.com/azkoree/rmmz-plugin-zh/blob/main/Menu/LL_MenuScreenBase.js) 作者：ルルの教会

​	菜单画面设定立绘的基础插件，仅提供注释和文本汉化，[本体](https://nine-yusha.com/plugin-menuscreencustom/)

- [**LL_MenuScreenCustom**](https://github.com/azkoree/rmmz-plugin-zh/blob/main/Menu/LL_MenuScreenCustom.js) 作者：ルルの教会

​	自定义菜单界面的布局，为Window_actorStatus窗口调整布局，并附带了一个显示在顶部的帮助窗口，显示立绘需要上一个插件。仅提供注释和文本汉化，[本体](https://nine-yusha.com/plugin-menuscreen/)

- [**MenuSubCommand**](https://github.com/azkoree/rmmz-plugin-zh/blob/main/Menu/MenuSubCommand.js) 作者：トリアコンタン

​	可以在主菜单画面中添加任意名称的命令以及树形显示的子命令，数量不限，需要前置PluginCommonBase

- [**PANDA_ProgressTextWindow**](https://github.com/azkoree/rmmz-plugin-zh/blob/main/Menu/PANDA_ProgressTextWindow.js) 作者：panda

​	在菜单显示一个文本框，用于显示当前游戏进度，兼容MV

### [地图界面 / Map](https://github.com/azkoree/rmmz-plugin-zh/tree/main/Map)

地图特效、对话窗口等都算在这一类，只要是能在地图上显示的都算。

- [**DTextPicture**](https://github.com/azkoree/rmmz-plugin-zh/blob/main/Map/DTextPicture.js) 作者：トリアコンタン

​	将字符串作为图片显示在画面上，可以绘制窗口背景，需要前置PluginCommonBase

- **[TorigoyaMZ_NotifyMessage ](https://github.com/azkoree/rmmz-plugin-zh/blob/main/Map/TorigoyaMZ_NotifyMessage.js)**作者：Ruたん

​	在画面显示通知信息，是个人比较喜欢的样式，需要[Torigoya_FrameTween](https://torigoya-plugin.rutan.dev/base/tween/)

- [**TorigoyaMZ_NotifyMessage_AddonGetItem**](https://github.com/azkoree/rmmz-plugin-zh/blob/main/Map/TorigoyaMZ_NotifyMessage_AddonGetItem.js) 作者：Ruたん

​	上面这个插件的追加功能，获得道具时自动提示，  需要TorigoyaMZ_NotifyMessage

### 对话相关 / Message

一些优化和美化对话框样式效果的插件。

- [**CBR_nameMessage**](https://github.com/azkoree/rmmz-plugin-zh/blob/main/Message/CBR_nameMessage.js) 作者：COBRA(ONEONE1)

​	在对话开头输入【】，【】内会作为姓名框显示

- [**DarkPlasma_TextLog**](https://github.com/azkoree/rmmz-plugin-zh/blob/main/Message/DarkPlasma_TextLog.js) 作者：DarkPlasma

​	在显示一个随时可以开闭的对话日志窗口，默认按键是tab键

- [**LL_StandingPictures**](https://github.com/azkoree/rmmz-plugin-zh/blob/main/Message/LL_StandingPictures.js) 作者：ルルの教会

​	可以用控制符在对话中显示立绘的插件，一次可以显示8个立绘，内置了多种动效。[本体地址](https://nine-yusha.com/plugin-spicture/)

- **[NRP_MessageWindow](https://github.com/azkoree/rmmz-plugin-zh/blob/main/Message/NRP_MessageWindow.js)** 作者：砂川赳

  调整对话框的样式，添加遮罩等等




### [外观美化 / Visual](https://github.com/azkoree/rmmz-plugin-zh/tree/main/Visual)

各种各样的视觉上的美化。

- **[DarkPlasma_ChangeImageWithPattern](https://github.com/azkoree/rmmz-plugin-zh/blob/main/Visual/DarkPlasma_ChangeImageWithPattern.js)** 作者：DarkPlasma

​	变更角色图像时，可以设定朝向和行走图帧数

- **[DrawGaugeMaxValue](https://github.com/azkoree/rmmz-plugin-zh/blob/main/Visual/DrawGaugeMaxValue.js)** 作者：あわやまたな

​	在菜单等画面显示计量条的最大值

- **[WindowBackImage](https://github.com/azkoree/rmmz-plugin-zh/blob/main/Visual/WindowBackImage.js)** 作者：トリアコンタン

​	将窗口的背景替换为任意图像，也可以换为任意窗口皮肤，需要前置PluginCommonBase


### [独立系统 / System](https://github.com/azkoree/rmmz-plugin-zh/tree/main/System)

引入一个新的独立系统的插件。

- **[AbilityBoard](https://github.com/azkoree/rmmz-plugin-zh/blob/main/System/AbilityBoard.js)** 作者：Basu

​	实装一个能力值提升面板，消耗点数学习技能、提升能力等

- **[CBR_EroStatus](https://github.com/azkoree/rmmz-plugin-zh/blob/main/System/CBR_EroStatus.js)** 作者：COBRA(ONEONE1)

​	增加一个可显示各种状态的界面，作者网站有范例参考

- **[SceneCustomMenu](https://github.com/azkoree/rmmz-plugin-zh/blob/main/System/SceneCustomMenu.js)** 作者：トリアコンタン

​	自定义菜单创建插件，需要前置PluginCommonBase

- **[SceneGlossary](https://github.com/azkoree/rmmz-plugin-zh/blob/main/System/SceneGlossary.js)** 作者：トリアコンタン

​	在游戏中实装一个用语辞典界面，支持自动检测词汇录入，需要前置PluginCommonBase

## 关于投稿插件

其实我不太懂用github（，好像是可以发discussions。如果发现了不错的rmmz插件，可以留言，但是原则上需要满足如下条件：

- 必须可以在rmmz中使用，能不能兼容mv无所谓
- 结构不会太过复杂
- 不把@param当@text用（并非硬性要求，主要是这种翻译起来有点麻烦）
- **利用规约明确允许修改分发**
- **非付费/赞助专属插件**

其实也可以只放注释翻译来规避风险，不过大伙肯定是希望即插即用对吧（

