# RulerLevel 对象

包含大纲级别的首行缩进和悬挂缩进信息。

## 说明


 **RulerLevel** 对象是 **[RulerLevels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/RulerLevels/obj)** 集合的成员。 **RulerLevels** 集合包含五个可用的大纲级别中每个级别的 **RulerLevel** 对象。

使用 **RulerLevels** (_index_) 返回单个 **RulerLevel** 对象，其中 _index_ 代表大纲级别。


## 示例


```JavaScript
/*本示例设置活动窗口所选的第一张幻灯片的第一个形状中文本的第一个大纲级别的首行缩进值和左缩进值。*/
function test() {
    let rulerLevel = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1).TextFrame.Ruler.Levels.Item(1)
    rulerLevel.FirstMargin = 9
    rulerLevel.LeftMargin = 54
}
```


```JavaScript
/*本示例设置活动演示文稿的幻灯片母版的第二个形状中文本的第一个大纲级别的首行缩进值和左缩进值。*/
function test() {
    let rulerLevel = ActivePresentation.SlideMaster.Shapes.Item(2).TextFrame.Ruler.Levels.Item(1)
    rulerLevel.FirstMargin = 9
    rulerLevel.LeftMargin = 54
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [FirstMargin](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/RulerLevel/member/FirstMargin) | 返回或设置指定大纲级别的首行缩进（以磅为单位）。可读/写。 |
| [LeftMargin](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/RulerLevel/member/LeftMargin) | 返回或设置指定大纲级别的左缩进（以磅为单位）。可读/写。 |