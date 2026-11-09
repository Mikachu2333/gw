# ContentControl.RepeatingSectionItems

返回指定重复节内容控件中重复节项的集合。只读。



## 语法

express.**RepeatingSectionItems**

express   一个代表 **ContentControl** 对象的变量。

## 类型

RepeatingSectionItemColl

## 说明


仅对重复节内容控件使用此属性。将它与其他内容控件一起使用将导致错误。



## 示例


```JavaScript
/*本示例显示活动文档上第八个（重复节）内容控件中重复节项的数量。*/
function test() {
    let control = ActiveDocument.ContentControls.Item(8)
    alert(control.RepeatingSectionItems.Count)
}
```


```JavaScript
/*本示例删除所选内容中第一个（重复节）内容控件的第一个重复节项。*/
function test() {
    let control = Selection.ContentControls.Item(1)
    control.RepeatingSectionItems.Item(1).Delete()
}
```
