# ContentControl.ParentContentControl

返回一个 **ContentControl** 类型的值，该值代表嵌套在格式文本控件或组控件内的内容控件的父内容控件。只读。



## 语法

express.**ParentContentControl**

express   一个代表 **ContentControl** 对象的变量。

## 类型

ContentControl

## 说明


如果内容控件未嵌套，则此属性返回错误。



## 示例


```JavaScript
/*本示例显示活动文档上第七个嵌套在格式文本控件内的内容控件的父内容控件的外观是否为wdContentControlBoundingBox。*/
function test() {
    let control = ActiveDocument.ContentControls.Item(7).ParentContentControl
    alert(control.Appearance == wdContentControlBoundingBox)
}
```


```JavaScript
/*本示例显示所选内容中第二个嵌套在格式文本控件内的内容控件的父内容控件的 ID。*/
function test() {
    let control = Selection.ContentControls.Item(2).ParentContentControl
    alert(control.ID)
}
```
