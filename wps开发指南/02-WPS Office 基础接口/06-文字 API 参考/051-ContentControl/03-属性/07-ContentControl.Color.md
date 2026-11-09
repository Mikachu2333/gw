# ContentControl.Color

返回或设置内容控件的颜色。可读/写 **WdColor** 类型。



## 语法

express.**Color**

express   一个代表 **ContentControl** 对象的变量。

## 类型

WdColor

## 示例


```JavaScript
/*本示例设置活动文档上第一个内容控件的颜色。*/
function test() {
    ActiveDocument.ContentControls.Item(1).Color = wdColorRed
}
```


```JavaScript
/*本示例显示所选内容中第二个内容控件的颜色是否为黄色。*/
function test() {
    let control = Selection.ContentControls.Item(2)
    alert(control.Color == wdColorYellow)
}
```
