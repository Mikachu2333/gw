# Range.Orientation

在启用了“文字方向”功能时返回或设置范围中文字的方向。可读写 **WdTextOrientation** 类型。



## 语法

express.**Orientation**

express   一个代表 **Range** 对象的变量。

## 类型

WdTextOrientation

## 说明


根据您所选择或安装的语言支持（例如，美国英语），某些 **WdTextOrientation** 常量可能不可用。  

您可以设置文本框架或者恰好位于文本框架内的范围的方向。有关文本框架和文本框之间的区别的信息，请参阅 **TextFrame** 对象。



## 示例


```JavaScript
/*本示例将选中区域的文档的文字的方向设置为wdTextOrientationHorizontalRotatedFarEast。*/
function test() {
    Selection.Range.Orientation = wdTextOrientationHorizontalRotatedFarEast
}
```


```JavaScript
/*本示例显示活动文档的第一个段落范围内文字的方向是否为wdTextOrientationHorizontal。*/
function test() {
    alert(ActiveDocument.Paragraphs.Item(1).Range.Orientation == wdTextOrientationHorizontal)
}
```
