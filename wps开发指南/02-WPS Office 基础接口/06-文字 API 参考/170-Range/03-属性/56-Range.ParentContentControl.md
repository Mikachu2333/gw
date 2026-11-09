# Range.ParentContentControl

返回一个 **ContentControl** 对象，该对象代表指定区域的父内容控件。只读。



## 语法

express.**ParentContentControl**

express   一个代表 **Range** 对象的变量。

## 类型

ContentControl

## 说明


如果指定区域没有父内容控件，则此属性返回 **null** 。



## 示例


```JavaScript
/*本示例显示所选区域的父内容控件的外观是否为wdContentControlBoundingBox。*/
function test() {
    let control = Selection.Range.ParentContentControl
    alert(control.Appearance == wdContentControlBoundingBox)
}
```


```JavaScript
/*本示例显示活动文档上第二个嵌套在格式文本控件内的内容控件的父内容控件的ID。*/
function test() {
    let control = ActiveDocument.ContentControls.Item(2).Range.ParentContentControl
    alert(control.ID)
}
```
