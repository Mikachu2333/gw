# Range.Speak

按行或列的顺序朗读单元格区域。



## 语法

express.**Speak(SpeakDirection, SpeakFormulas)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| SpeakDirection | 可选 | any | 朗读的方向，按行或按列。 |
| SpeakFormulas | 可选 | any | 如果为 **True** ，对那些有公式的单元格来说，公式将被发送到“文本到语音”(TTS) 引擎。如果单元格没有公式，则发送值。如果为 **False** （默认值），则始终将值发送到 TTS 引擎。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将朗读 A1:C5 单元格*/
function test() {
    Range("A1:C5").Speak()
}
```


```JavaScript
/*本示例将逐列阅读 A1:C5 单元格，并识别单元格中的公式*/
function test() {
    Range("A1:C5").Speak(xlSpeakByColumns, true)
}
```
