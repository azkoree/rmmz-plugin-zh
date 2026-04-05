# rmmz-plugin-zh

一些RPG Maker MZ插件的自用汉化，大部分是一些小插件，因为大插件我怕不小心乱动导致整个插件都用不了了

由于个人喜好和习惯，战斗机制类的插件较少，大多是体验优化和独立系统类型的插件

~~似乎是很多人在做的工作，但是我做了也没什么问题吧~~

本仓库汉化的插件基本都允许修改分发，付费/不允许分发插件只会提供参数和帮助文本的汉化，请自己替换

## 利用规约

请遵循原插件网站和插件说明给出的利用规约。

## 已汉化列表

### [战斗 / Battle](https://github.com/azkoree/rmmz-plugin-zh/tree/main/Battle)

和战斗机制、战斗表现等等相关的插件。

- [**DynamicMotionMZ**](https://github.com/azkoree/rmmz-plugin-zh/blob/main/Battle/DynamicMotionMZ.js) + [**DynamicAnimationMZ**](https://github.com/azkoree/rmmz-plugin-zh/blob/main/Battle/DynamicAnimationMZ.js) 作者：砂川赳

​	增强战斗的视觉表现，可以自由控制战斗动作和动画，两个插件都需要插入。[作者发布页](https://newrpg.seesaa.net/article/477190310.html)提供了不少使用方法和范例。比较多，也许以后会翻，但目前不打算。插件可能仍然需要润色。



### [数据 / Data](https://github.com/azkoree/rmmz-plugin-zh/tree/main/Data)

和数据库、开关变量这些有关的插件。


- [**DynamicVariables**](https://github.com/azkoree/rmmz-plugin-zh/blob/main/Data/DynamicVariables.js) 作者：トリアコンタン

	可以在开关或变量的名称处使用js脚本，让这一变量可以根据js脚本动态更新，实在不懂可以丢给ai让它给你解释）

- [**VariablePlus**](https://github.com/azkoree/rmmz-plugin-zh/blob/main/Data/Keke_VariablePlus.js) 作者：あわやまたな

	反正就是提升使用并行处理事件的情况下，减少变量改变而大幅刷新画面的频率，还可以给变量统一设定初始值，设定完全会不刷新画面的变量

### [事件 / Event](https://github.com/azkoree/rmmz-plugin-zh/tree/main/Event)

跟事件处理有关的插件。

### [菜单画面 / Menu](https://github.com/azkoree/rmmz-plugin-zh/tree/main/Menu)

对主菜单画面进行各种各样的改造。

- [**Blue_MenuRing**](https://github.com/azkoree/rmmz-plugin-zh/blob/main/Menu/Blue_MenuRing.js) 作者：Bluemoon

​	另一种环形菜单，会在屏幕底部显示角色的状态，，还有一些说明写在了[itch](https://bluemooncoder.itch.io/ring-menu)（利用规约不允许按原样分发，那汉化后再分发应该也没问题吧……？）

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

- [**TorigoyaMZ_NotifyMessage** ](https://github.com/azkoree/rmmz-plugin-zh/blob/main/Map/TorigoyaMZ_NotifyMessage.js)作者：Ruたん

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

​	自定义菜单创建插件，需要前置PluginCommonBase。
​	个人提示：容易和大改对话框的插件冲突，除非自定义界面中执行的公共事件永远不会用到【显示文本】指令

- **[SceneGlossary](https://github.com/azkoree/rmmz-plugin-zh/blob/main/System/SceneGlossary.js)** 作者：トリアコンタン

​	在游戏中实装一个用语辞典界面，支持自动检测词汇录入，需要前置PluginCommonBase。为方便使用，大部分注释标签使用英文版，但是英文版注释似乎版本比较落后，请以日语版注释为准

