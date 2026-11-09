# Range.PhoneticGuide

将拼音指南添加到指定区域。



## 语法

express.**PhoneticGuide(Text, Alignment, Raise, FontSize, FontName)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Text | 必选 | string | 要添加的拼音文字。 |
| Alignment | 可选 | WdPhoneticGuideAlignmentType | 添加的拼音文字的对齐方式。 |
| Raise | 可选 | number（int4 精度） | 从指定区域内文字的顶端到拼音文字顶端的距离（以磅为单位）。如果未指定任何值，则 WPS 自动将拼音文字与指定区域的距离设置为最优值。 |
| FontSize | 可选 | number（int4 精度） | 拼音文字的字体大小。如果未指定任何值，则 WPS 将拼音字体的大小设置为指定区域内文字大小的一半。 |
| FontName | 可选 | string | 用于拼音文字的字体的名称。如果未指定任何值，则 WPS 将其设置为与指定区域内文字相同的字体。 |

## 返回值

void

## 说明


有关在 WPS 中使用东亚语言的详细信息，请参阅“用于东亚语言的 WPS 功能”。



## 示例


```JavaScript
/*本示例将拼音指南“tres chic”添加到所选区域。*/
function test() {
    Selection.Range.PhoneticGuide("tray sheek", wdPhoneticGuideAlignmentCenter, 11, 7)
}
```


```JavaScript
/*本示例将拼音指南添加到活动文档的第一个段落。*/
function test() {
    let range = ActiveDocument.Paragraphs.Item(1).Range
    range.PhoneticGuide("example", wdPhoneticGuideAlignmentLeft, 10, 10, "黑体")
}
```
