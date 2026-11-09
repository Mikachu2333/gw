# Application.Speech

返回一个 **[Speech](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Speech/obj)** 对象。



## 语法

express.**Speech**

express   一个代表 **Application** 对象的变量。

## 类型

Speech

## 示例


```JavaScript
/*本示例为ET播放Hello。本示例假定已在主机系统上安装了语音功能。*/
function test() {
    Application.Speech.Speak("Hello")
}
```


```JavaScript
/*本示例显示ET朗读单元格的次序是否为xlSpeakByRows。*/
function test() {
    alert(Application.Speech.Direction == xlSpeakByRows)
}
```
