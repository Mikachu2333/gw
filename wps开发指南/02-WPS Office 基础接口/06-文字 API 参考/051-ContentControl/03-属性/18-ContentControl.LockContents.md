# ContentControl.LockContents

返回或设置 **Boolean** 值，该值表示用户能否编辑内容控件的内容。可读/写。



## 语法

express.**LockContents**

express   一个代表 **ContentControl** 对象的变量。

## 类型

boolean

## 说明


此属性的默认值为 **False** 。此属性对应于 **“内容控制属性”** 对话框中的 **“不能编辑内容”** 复选框。



## 示例


```JavaScript
/*本示例在活动文档中插入日期内容控件，然后设置内容控件的内容，并指定用户不能编辑这些内容或将该控件从文档中删除。*/
function test() {
    let control = Application.ActiveDocument.ContentControls.Add(wdContentControlDate)
    control.Range.Text = "January 1, 2007"
    control.LockContents = true
    control.LockContentControl = true
}
```


```JavaScript
/*本示例显示用户是否可以编辑所选内容中第一个内容控件的内容。*/
function test() {
    let control = Selection.ContentControls.Item(1)
    alert(!control.LockContents)
}
```
