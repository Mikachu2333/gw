# Document.EmbedLinguisticData

如果为 **True** ，则 WPS 会嵌入语音识别和手写输入功能，以便数据可以转换回语音或手写。 **Boolean** 类型，可读写。



## 语法

express.**EmbedLinguisticData**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 说明


使用 **EmbedLinguisticData** 属性还能保存东亚 IME 键击，以便使用 Windows 文本服务框架应用程序编程接口提高对文本服务数据（源自与 WPS Office连接的设备）的更正和控制能力。



## 示例


```JavaScript
/*本示例将文档中可能出现的任何语音和手写输入嵌入活动文档中。*/
function test() {
    ActiveDocument.EmbedLinguisticData = true
}
```


```JavaScript
/*本示例显示第一个文档是否嵌入语音识别和手写输入功能。*/
function test() {
    if (Documents.Item(1).EmbedLinguisticData) {
        alert("文档嵌入语音识别和手写输入功能")
    } else {
        alert("文档未嵌入语音识别和手写输入功能")
    }
}
```
