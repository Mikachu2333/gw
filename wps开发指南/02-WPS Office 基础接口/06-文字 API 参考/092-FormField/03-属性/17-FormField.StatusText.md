# FormField.StatusText

返回或设置当窗体域具有焦点时状态栏中显示的文本。 **String** 类型，可读写。



## 语法

express.**StatusText**

express   一个代表 **FormField** 对象的变量。

## 类型

string

## 说明


如果 **[OwnStatus](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormField/member/OwnStatus)** 属性设置为 **True** ，则 **StatusText** 属性指定状态栏文本。如果 **OwnStatus** 属性设置为 **False** ，则 **StatusText** 属性指定包含窗体域状态栏文本的“自动图文集”词条的名称。



## 示例


```JavaScript
/*本示例设置名为“DropDown4”的窗体域的状态栏中显示的文本。*/
function test() {
    let formField = ActiveDocument.FormFields.Item("DropDown4")
    formField.OwnStatus = true
    formField.StatusText = "Type your Favorite animals."
}
```


```JavaScript
/*本示例显示活动文档中每个窗体域的状态栏中展示的文本。*/
function test() {
    let formFields = Application.ActiveDocument.FormFields
    let str = ""
    for (let i = 1; i <= formFields.Count; i++) {
        str += formFields.Item(i).StatusText + "\n"
    }
    alert(str)
}
```
