# Selection.Orientation

在启用“文字方向”功能后返回或设置选定内容中文字的方向。 **WdTextOrientation** 类型，可读写。



## 语法

express.**Orientation**

express   一个代表 **Selection** 对象的变量。

## 类型

WdTextOrientation

## 说明


某些 **WdTextOrientation** 常量可能不可用，具体取决于所选择或安装的语言支持（例如，美国英语）。  

您可以设置文本框架或者恰好位于文本框架内的选定内容的方向。有关文本框架和文本框之间的区别的信息，请参阅 **[TextFrame](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextFrame/obj)** 对象。



## 示例


```JavaScript
/*本示例设置选定内容中的文字排列方向。*/
function test() {
    Selection.Orientation = wdTextOrientationDownward
}
```


```JavaScript
/*本示例显示选定内容的文字排列方向是否为wdTextOrientationHorizontal。*/
function test() {
    alert(Selection.Orientation == wdTextOrientationHorizontal)
}
```
