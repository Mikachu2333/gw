# Options.MoveToTextColor

返回或设置一个 **[WdColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdColorIndex)** 常量，该常量代表所移动文本的颜色。可读写。



## 语法

express.**MoveToTextColor**

express   一个代表 **Options** 对象的变量。

## 类型

WdColorIndex

## 示例


```JavaScript
/*本示例将所移动文本的颜色设置为蓝色。*/
function test() {
    Options.MoveToTextColor = wdBlue
}
```


```JavaScript
/*本示例显示所移动文本的颜色是否为绿色。*/
function test() {
    alert(Options.MoveToTextColor == wdGreen)
}
```
