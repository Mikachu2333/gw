# Ruler2 对象

代表指定形状或指定样式中所有文本的标尺。包含大纲文本的制表位和缩进设置。

## 说明


使用 **[TextFrame2](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TextFrame2/obj)** 对象的 **Ruler2** 属性可返回代表指定形状中文本的标尺的 **Ruler2** 对象。

使用 **TabStops2** 属性可返回包含标尺上的制表位的 **[TabStops2](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TabStops2/obj)** 对象。

使用 **Levels** 属性可返回包含文本大纲级别的缩进设置的 **[RulerLevels2](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/RulerLevels2/obj)** 对象。


## 示例


```JavaScript
/*本示例运行于表格组件，向第一张工作表上第一个形状（文本框）中添加一个制表位。*/
function test() {
    let tabStops2 = Worksheets.Item(1).Shapes.Item(1).TextFrame2.Ruler.TabStops
    tabStops2.Add(msoTabStopLeft, 144)
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作表上第一个形状（文本框）中 RulerLevel2 对象的数量。*/
function test() {
    let ruler2 = ActiveSheet.Shapes.Item(1).TextFrame2.Ruler
    alert(ruler2.Levels.Count)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Levels](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Ruler2/member/Levels) | 获取一个代表大纲文本格式的 **[RulerLevels2](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/RulerLevels2/obj)** 对象。只读。 |
| [TabStops](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/Ruler2/member/TabStops) | 获取一个代表指定文本的制表位的 **TabStops2** 集合。只读。 |