# FormField.OwnStatus

指定当窗体域具有焦点时状态栏中显示的文本的源。 **Boolean** 类型，可读写。



## 语法

express.**OwnStatus**

express   一个代表 **FormField** 对象的变量。

## 类型

boolean

## 说明


如果为 **True** ，则显示 **[StatusText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormField/member/StatusText)** 属性指定的文本。如果为 **False** ，则显示 **StatusText** 属性指定的“自动图文集”词条中的文本。



## 示例


```JavaScript
/*本示例将活动文档上名为“CheckBox1”的窗体域的状态栏文本设置为名为“Acct”的自动图文集词条的内容。*/
function test() {
    let formField = ActiveDocument.FormFields.Item("CheckBox1")
    formField.OwnStatus = false
    formField.StatusText = "Acct"
}
```


```JavaScript
/*本示例显示所选内容中第二个窗体域具有焦点时状态栏中是否展示指定文本。*/
function test() {
    let formField = Selection.FormFields.Item(2)
    alert(formField.OwnStatus)
}
```
