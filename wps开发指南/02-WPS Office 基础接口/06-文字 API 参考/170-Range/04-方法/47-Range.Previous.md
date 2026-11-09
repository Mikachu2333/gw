# Range.Previous

返回相对于指定范围的前一个范围。



## 语法

express.**Previous(Unit, Count)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Unit | 可选 | any | 要计算的单位类型。可以是任意 **[WdUnits](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdUnits)** 常量。 |
| Count | 可选 | any | 要向后移动的单位数。默认值为 1。 |

## 返回值

Range

## 说明


如果 **Range** 对象恰好在指定的 _Unit_ 之后，则将 **Range** 对象移动到前一个单位。例如，如果 **Range** 对象恰好在一个词之后（尾部空格之前），则以下指令将 **Range** 对象往回移动到前一个词。

```JavaScript
ActiveDocument.Words.Item(2).Previous(wdWord, 1).Select()
```



## 示例


```JavaScript
/*本示例对活动文档中的第一个单词应用加粗格式。*/
function test() {
    ActiveDocument.Words.Item(2).Previous(wdWord, 1).Bold = msoTrue
}
```


```JavaScript
/*本示例将所选范围向后移动两个字符，并为移动后的范围的字体设置字号。*/
function test() {
    Selection.Range.Previous(wdCharacter, 2).Font.Size = 15
}
```
