# Options.MoveFromTextMark

返回或设置一个 **[WdMoveFromTextMark](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdMoveFromTextMark)** 常量，该常量代表要用于所移动文本的修订标记的类型。可读写。



## 语法

express.**MoveFromTextMark**

express   一个代表 **Options** 对象的变量。

## 类型

WdMoveFromTextMark

## 示例


```JavaScript
/*本示例将所移动文本的修订标记的类型设置为粗体。*/
function test() {
    Options.MoveFromTextMark = wdMoveFromTextMarkBold
}
```


```JavaScript
/*本示例显示所移动文本的修订标记的类型是否为下划线。*/
function test() {
    alert(Options.MoveFromTextMark == wdMoveFromTextMarkUnderline)
}
```
