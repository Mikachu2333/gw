# ContentControl.Temporary

返回或设置 **Boolean** 值，该值表示当用户编辑内容控件的内容时是否从活动文档中删除该控件。可读/写。



## 语法

express.**Temporary**

express   一个代表 **ContentControl** 对象的变量。

## 类型

boolean

## 说明


默认值为 **False** 。此属性对应于 **“内容控件属性”** 对话框中的 **“内容被编辑后删除内容控件”** 复选框。  

如果 **LockContentControl** 属性设置为 **True** ，则您不能设置此属性。



## 示例


```JavaScript
/*本示例显示当用户编辑活动文档上第三个内容控件的内容时是否删除该控件。*/
function test() {
    let control = ActiveDocument.ContentControls.Item(3)
    alert(control.Temporary)
}
```


```JavaScript
/*本示例判断如果用户不能删除所选内容中第二个内容控件，则设置当用户编辑该内容控件的内容时删除该控件。*/
function test() {
    let control = Selection.ContentControls.Item(2)
    if (!control.LockContentControl) {
        control.Temporary = true
    }
}
```
