# Application.CentimetersToPoints

将度量单位由厘米转换为磅数（1 厘米=28.35 磅）。所返回的转换结果为 **Single** 类型。



## 语法

express.**CentimetersToPoints(Centimeters)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Centimeters | 必选 | number（float 精度） | 要转换为磅的厘米值。 |

## 返回值

number（float 精度）

## 示例


```JavaScript
/*本示例用于为选定内容的所有段落添加居中制表位，此制表位位于距页面左边距 1.5 厘米处。*/
function test() {
    Application.Selection.Paragraphs.TabStops.Add(Application.CentimetersToPoints(1.5), wdAlignTabCenter)
}
```


```JavaScript
/*本示例使活动文档的第一个段落首行缩进 2.5 厘米。*/
function test() {
    Application.ActiveDocument.Paragraphs.Item(1).FirstLineIndent = Application.CentimetersToPoints(2.5)
}
```
