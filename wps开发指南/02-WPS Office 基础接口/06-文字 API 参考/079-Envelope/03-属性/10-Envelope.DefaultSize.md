# Envelope.DefaultSize

返回或设置默认信封尺寸。 **String** 类型，可读写。



## 语法

express.**DefaultSize**

express   一个代表 **Envelope** 对象的变量。

## 类型

string

## 说明


返回的字符串与 **“信封选项”** 对话框的 **“信封尺寸”** 框中右侧的字符串相对应。如果设置 **[DefaultHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/DefaultHeight)** 或 **[DefaultWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/member/DefaultWidth)** 属性，则信封尺寸会自动更改为 **“信封选项”** 对话框（通过 **“工具”** 菜单访问）中 **“自定义尺寸”** 的值，并且该属性返回“自定义尺寸”。



## 示例


```JavaScript
/*本示例将默认信封尺寸设为 C4（229 x 324 毫米）。*/
function test() {
    ActiveDocument.Envelope.DefaultSize = "C4"
}
```


```JavaScript
/*本示例提示用户是否将默认信封尺寸设为“C4”。如果回答为“确定”，则默认尺寸将进行相应的更改。如果活动文档中没有添加此信封，则会显示一个消息框。*/
function test() {
    try {
        let reply = MsgBox("Do you want to set the default envelope to ordinary 1?", jsOKCancel)
        if (reply == jsResultOK) {
            ActiveDocument.Envelope.DefaultSize = "C4"
        }
    } catch (error) {
        alert("An envelope isn't part of this document")
    }
}
```
