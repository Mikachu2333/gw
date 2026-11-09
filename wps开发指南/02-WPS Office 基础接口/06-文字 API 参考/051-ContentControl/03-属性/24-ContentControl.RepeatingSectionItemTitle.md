# ContentControl.RepeatingSectionItemTitle

返回或设置与指定的重复节内容控件关联的上下文菜单中使用的重复节项的名称。



## 语法

express.**RepeatingSectionItemTitle**

express   一个代表 **ContentControl** 对象的变量。

## 类型

string

## 说明


仅对重复节内容控件使用此属性。将它与其他内容控件一起使用将导致错误。



## 示例


```JavaScript
/*本示例显示活动文档上第八个（重复节）内容控件使用的重复节项的名称。*/
function test() {
    let control = ActiveDocument.ContentControls.Item(8)
    alert(control.RepeatingSectionItemTitle)
}
```


```JavaScript
/*本示例设置所选内容中第一个（重复节）内容控件使用的重复节项的名称。*/
function test() {
    let control = Selection.ContentControls.Item(1)
    control.RepeatingSectionItemTitle = "example1"
}
```
