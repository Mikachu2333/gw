# Speech.Speak

ET 回放作为参数传递的文本字符串。



## 语法

express.**Speak(Text, SpeakAsync, SpeakXML, Purge)**

express   一个代表 **Speech** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Text | 必选 | string | 要朗读的文本。 |
| SpeakAsync | 可选 | any | 如果为 **True** ，则会异步朗读 _Text_（该方法不会等待要朗读的 Text）。如果为 **False** ，则会同步朗读 _Text_（该方法在继续之前会等待要朗读的 _Text_）。默认值是 **False** 。 |
| SpeakXML | 可选 | any | 如果为 **True** ，则 _Text_ 会解释为 XML。如果为 **False** ，则 _Text_ 不会解释为 XML，因此，会读取所有 XML 标记但不会对其进行解释。默认值是 **False** 。 |
| Purge | 可选 | any | 如果为 **True** ，则当前语音会终止，任何缓冲的文本在 _Text_ 朗读之前会清除。如果为 **False** ，则当前语音不会终止，缓冲的文本在 _Text_ 朗读之前也不会清除。默认值是 **False** 。 |

## 返回值

void

## 示例


```JavaScript
/*此示例ET将朗读“Hello”。*/
function test() {
    Application.Speech.Speak("Hello")
}
```


```JavaScript
/*此示例ET将朗读单元格E1中的文本。*/
function test() {
    Application.Speech.Speak(Range("E1").Text, true, false, true)
}
```
