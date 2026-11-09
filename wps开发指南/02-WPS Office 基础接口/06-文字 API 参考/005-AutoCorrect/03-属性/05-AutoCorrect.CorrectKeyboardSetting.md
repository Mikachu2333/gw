# AutoCorrect.CorrectKeyboardSetting

如果在键入非当前键盘语言的文字时，WPS 自动将这些单词转置为其母语字母，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**CorrectKeyboardSetting**

express   一个代表 **AutoCorrect** 对象的变量。

## 类型

boolean

## 说明


 **[CheckLanguage](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/CheckLanguage)** 属性必须设置为 **True** ，才能使用 **CorrectKeyboardSetting** 属性。



## 示例


```JavaScript
/*本示例显示一个对话框，以便用户选择 WPS 是否自动将外文单词转置为其母语字母。*/
function test() {
    let reply = MsgBox("Do you want WPS to tranpose foreign words to their native alphabet?", jsYesNo)
    if (reply == jsResultYes) {
        Application.CheckLanguage = true
        Application.AutoCorrect.CorrectKeyboardSetting = true
        MsgBox("Automatic keyboard correction enabled!")
    }
}
```


```JavaScript
/*本示例显示是否自动将外文单词转置为其母语字母*/
function test() {
    alert(Application.AutoCorrect.CorrectKeyboardSetting)
}
```
