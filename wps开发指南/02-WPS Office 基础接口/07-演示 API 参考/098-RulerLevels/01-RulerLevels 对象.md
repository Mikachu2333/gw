# RulerLevels 对象

指定的标尺上所有 **[RulerLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/RulerLevel/obj)** 对象的集合。

## 说明


每个 **RulerLevel** 对象代表特定大纲级别上文本的首行缩进和左缩进。本集合通常包含五个成员（每个可用的大纲级别对应一个）。

使用 [ **Levels** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Ruler/member/Levels) 属性返回 **RulerLevels** 集合。


## 示例


```JavaScript
/*本示例设置活动演示文稿的幻灯片母版的第一个形状中文本的五个大纲级别的边距。*/
function test() {
    let textFrame = ActivePresentation.SlideMaster.Shapes.Item(1).TextFrame
    let rulerLevels = textFrame.Ruler.Levels
    rulerLevels.Item(1).FirstMargin = 0
    rulerLevels.Item(1).LeftMargin = 40
    rulerLevels.Item(2).FirstMargin = 60
    rulerLevels.Item(2).LeftMargin = 100
    rulerLevels.Item(3).FirstMargin = 120
    rulerLevels.Item(3).LeftMargin = 160
    rulerLevels.Item(4).FirstMargin = 180
    rulerLevels.Item(4).LeftMargin = 220
    rulerLevels.Item(5).FirstMargin = 240
    rulerLevels.Item(5).LeftMargin = 280
}
```


```JavaScript
/*本示例显示活动窗口所选形状中文本的最后一个大纲级别的左缩进值。*/
function test() {
    let textFrame = ActiveWindow.Selection.ShapeRange.TextFrame
    let rulerLevels = textFrame.Ruler.Levels
    alert(rulerLevels.Item(rulerLevels.Count).LeftMargin + " 磅")
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/RulerLevels/member/Item) | 从指定的 **RulerLevels** 集合中返回单个 **RulerLevel** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/RulerLevels/member/Count) | 返回指定集合中的对象数。只读。 |