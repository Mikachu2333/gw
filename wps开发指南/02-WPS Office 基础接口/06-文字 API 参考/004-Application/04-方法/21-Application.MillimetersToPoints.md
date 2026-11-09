# Application.MillimetersToPoints

把度量单位从毫米转换为磅值（1 毫米 = 2.85 磅）。以 **Single** 类型返回转换结果。



## 语法

express.**MillimetersToPoints(Millimeters)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Millimeters | 必选 | number（float 精度） | 要转换为磅值的毫米值。 |

## 返回值

Single

## 示例


```JavaScript
/*本示例将活动文档的断字区设置为 8.8 毫米。*/
function test() {
    ActiveDocument.HyphenationZone = Application.MillimetersToPoints(8.8)
}
```


```JavaScript
/*本示例将选定字符的间距扩至 2.85 磅。*/
function test() {
    Selection.Font.Spacing = Application.MillimetersToPoints(1)
}
```
