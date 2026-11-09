# RulerLevel.LeftMargin

返回或设置指定大纲级别的左缩进（以磅为单位）。可读/写。



## 语法

express.**LeftMargin**

express   一个代表 **RulerLevel** 对象的变量。

## 类型

number（float 精度）

## 说明


如果段落以一个项目符号开始，该项目符号的位置由 **FirstMargin** 属性决定，而段落中的第一个文本字符的位置由 **LeftMargin** 属性决定。

 **[RulerLevels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/RulerLevels/obj)** 集合包含五个 **RulerLevel** 对象，其中每个对象对应于一个可能的大纲级别。对应于第一个大纲级别的 **RulerLevel** 对象的 **LeftMargin** 属性值的有效范围为 -9.0 到 4095.875。与第二个到第五个大纲级别对应的 **RulerLevel** 对象的 **LeftMargin** 属性值由以下条件决定：

* 最大值始终为 4095.875。
* 最小值为上一级别的 **FirstMargin** 属性值和 **LeftMargin** 属性值二者间的最大值再加 9。

可以使用以下公式确定 **LeftMargin** 属性的最小值。 **RulerLevel** 对象中的索引编号 _Index_ 指示对象所对应的大纲级别。若要确定与第二个到第五个大纲级别对应的 **LeftMargin** 对象的最小 **RulerLevel** 属性值，请用 2、3、4 或 5 代替 _index_ 占位符。

Minimum(RulerLevel(_index_).FirstMargin) = Maximum(RulerLevel(_index_ \-1).FirstMargin, RulerLevel(_index_ \-1). **LeftMargin** ) + 9

Minimum (RulerLevel(_index_). **LeftMargin** ) = Maximum(RulerLevel(_index_ \-1).FirstMargin, RulerLevel(_index_ \-1). **LeftMargin** ) + 9



## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片的第一个形状中文本的第一个大纲级别的首行缩进值和左缩进值。*/
function test() {
    let rulerLevel = ActivePresentation.Slides.Item(1).Shapes.Item(1).TextFrame.Ruler.Levels.Item(1)
    rulerLevel.FirstMargin = 9
    rulerLevel.LeftMargin = 54
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
