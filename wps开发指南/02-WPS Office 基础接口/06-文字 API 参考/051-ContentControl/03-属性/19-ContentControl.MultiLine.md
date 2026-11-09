# ContentControl.MultiLine

返回或设置 **Boolean** 值，该值表示文本内容控件是否允许多行文本。可读/写。



## 语法

express.**MultiLine**

express   一个代表 **ContentControl** 对象的变量。

## 类型

boolean

## 说明


此属性只应用于文本内容控件和格式文本内容控件。



## 示例


```JavaScript
/*本示例显示活动文档上第一个（文本）内容控件是否允许多行文本。*/
function test() {
    alert(ActiveDocument.ContentControls.Item(1).MultiLine)
}
```


```JavaScript
/*本示例将所选内容中第一个（文本）内容控件设置为不允许多行文本。*/
function test() {
    let control = Selection.ContentControls.Item(1)
    control.MultiLine = false
}
```
