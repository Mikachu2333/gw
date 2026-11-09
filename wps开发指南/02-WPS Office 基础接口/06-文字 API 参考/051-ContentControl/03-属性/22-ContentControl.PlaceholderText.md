# ContentControl.PlaceholderText

返回一个 **BuildingBlock** 对象，该对象代表内容控件的占位符文本。只读。



## 语法

express.**PlaceholderText**

express   一个代表 **ContentControl** 对象的变量。

## 类型

BuildingBlock

## 说明


可以使用 **SetPlaceholderText** 方法设置内容控件的占位符文本。



## 示例


```JavaScript
/*本示例显示活动文档上第一个内容控件的占位符文本的内容。*/
function test() {
    let control = ActiveDocument.ContentControls.Item(1)
    alert(control.PlaceholderText.Value)
}
```


```JavaScript
/*本示例显示所选内容中第二个内容控件的占位符文本的名称。*/
function test() {
    let control = Selection.ContentControls.Item(2)
    alert(control.PlaceholderText.Name)
}
```
