# ContentControl.Checked

返回或设置 **Boolean** 类型的值，代表复选框的当前状态（选中/未选中）。可读/写。



## 语法

express.**Checked**

express   一个代表 **ContentControl** 对象的变量。

## 类型

boolean

## 说明


使用 **Checked** 属性获取/设置复选框内容控件的当前状态。如果该控件不是复选框，尝试访问该属性将失败，并导致运行时错误“该属性仅可用于复选框内容控件”。



## 示例


```JavaScript
/*本示例设置新建复选框内容控件的 Checked 属性。*/
function test() {
    let control = ActiveDocument.ContentControls.Add(wdContentControlCheckBox)
    control.Title = "Send Reminder"
    control.Checked = true
}
```


```JavaScript
/*本示例显示所选内容中第四个（复选框）内容控件当前是否选中。*/
function test() {
    let control = Selection.ContentControls.Item(4)
    alert(control.Checked)
}
```
