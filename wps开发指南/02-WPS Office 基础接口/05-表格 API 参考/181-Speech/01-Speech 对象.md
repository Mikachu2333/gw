# Speech 对象

包括与语音相关的方法和属性。

## 说明


使用 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象的 **[Speech](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Speech)** 属性可返回一个 **[Speech](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Speech/obj)** 对象。

一旦返回了 **Speech** 对象，您就可以使用 **Speech** 对象的 **[Speak](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Speech/member/Speak)** 方法来播放字符串的内容。

语音功能位于从属于“口述”的安装树结构中，并且没有安装“命令与控件”。


## 示例


```JavaScript
/*此示例ET将朗读“Hello”。本示例假定主机系统上已安装了语音功能。*/
function test() {
    Application.Speech.Speak("Hello")
}
```


```JavaScript
/*此示例为A1单元格赋值，并朗读单元格A1中的值。*/
function test() {
    Range("A1").Value2 = "Hello WPS"
    Application.Speech.Speak(Range("A1").Value2)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Speak](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Speech/member/Speak) | ET 回放作为参数传递的文本字符串。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Direction](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Speech/member/Direction) | 返回或设置朗读单元格的次序。 **Direction** 属性的值为一个 **[XlSpeakDirection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlSpeakDirection)** 常量。可读写。 |
| [SpeakCellOnEnter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Speech/member/SpeakCellOnEnter) | 当按下 Enter 或完成了对活动单元格的编辑时，ET 支持朗读活动单元格的模式。如果 **SpeakCellOnEnter** 属性为 **True** ，则打开此模式。如果为 **False** ，则关闭此模式。 **Boolean** 类型，可读写。 |