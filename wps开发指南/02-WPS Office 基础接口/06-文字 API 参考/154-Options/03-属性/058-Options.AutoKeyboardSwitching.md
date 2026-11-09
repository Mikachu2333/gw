# Options.AutoKeyboardSwitching

如果 WPS 随时自动切换键盘语言并与键入的内容匹配，则该属性值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**AutoKeyboardSwitching**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


若要使用该属性，必须将 **[CheckLanguage](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/CheckLanguage)** 属性设为 **True** 。



## 示例


```JavaScript
/*本示例请用户选择是否启用多语言文档的键盘自动切换功能。*/
function test() {
    let response = MsgBox("Enable automatic keyboard switching?", jsYesNo)
    if (response == jsResultYes) {
        Application.CheckLanguage = true
        Options.AutoKeyboardSwitching = true
        alert("Automatic keyboard switching enabled!")
    }
}
```


```JavaScript
/*本示例判断如果启用多语言文档的键盘自动切换功能，则通知用户。*/
function test() {
    Application.CheckLanguage = true
    if (Options.AutoKeyboardSwitching) {
        alert("启用多语言文档的键盘自动切换功能。")
    }
}
```
