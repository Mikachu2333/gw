# ContentControl.DefaultTextStyle

返回或设置一个 **Variant** ，它代表用于设置文本内容控件中文本格式的字符样式的名称。可读写。



## 语法

express.**DefaultTextStyle**

express   一个代表 **ContentControl** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例显示所选内容中第一个（文本）内容控件中文本的格式的字符样式的名称。*/
function test() {
    let control = Selection.ContentControls.Item(1)
    alert(control.DefaultTextStyle.toString())
}
```


```JavaScript
/*本示例设置活动文档上第一个（文本）内容控件中文本的格式的字符样式的名称。*/
function test() {
    let control = ActiveDocument.ContentControls.Item(1)
    control.DefaultTextStyle = "标题 5"
}
```
