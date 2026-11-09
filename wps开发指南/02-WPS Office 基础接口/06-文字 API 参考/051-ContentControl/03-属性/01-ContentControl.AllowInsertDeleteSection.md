# ContentControl.AllowInsertDeleteSection

返回或设置用户是否可以使用用户界面在指定的重复节内容控件中添加或删除节。



## 语法

express.**AllowInsertDeleteSection**

express   一个代表 **ContentControl** 对象的变量。

## 类型

boolean

## 说明


仅对重复节内容控件使用此属性。将其与其他内容控件一起使用将导致错误消息效果。



## 示例


```JavaScript
/*本示例显示活动文档上第一个（重复节）内容控件是否允许用户在界面上进行添加和删除节。*/
function test() {
    alert(ActiveDocument.ContentControls.Item(1).AllowInsertDeleteSection)
}
```


```JavaScript
/*本示例禁止用户在界面上对所选内容中第一个（重复节）内容控件进行添加和删除节。*/
function test() {
    let control = Selection.ContentControls.Item(1)
    control.AllowInsertDeleteSection = false
}
```
