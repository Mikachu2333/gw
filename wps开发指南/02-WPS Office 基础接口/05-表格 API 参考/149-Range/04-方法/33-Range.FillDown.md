# Range.FillDown

从指定区域的顶部单元格开始向下填充，直至该区域的底部。区域中首行单元格的内容和格式将复制到区域中其他行内。



## 语法

express.**FillDown()**

express   一个代表 **Range** 对象的变量。

## 返回值

Variant

## 说明

- 如果目标区域中包含数组公式（通过 [**FormulaArray**](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/FormulaArray) 设置的公式），调用此方法将失败并抛出错误，因为数组公式所占据的单元格区域是一个不可分割的整体，不能对其中的部分单元格进行修改。
- 使用前应确保选区的首行已包含需要填充的内容或公式，否则填充结果为空。

## 示例


```JavaScript
/*本示例基于单元格 A1 的内容填写工作表 Sheet1 的单元格区域 A1:A10。*/
function test() {
    Worksheets.Item("Sheet1").Range("A1:A10").FillDown()
}
```


```JavaScript
/*本示例将 A1 单元格字体加粗，A1:B1 单元格区域设置值为 2，基于顶部单元格内容填充单元格区域 A1:B5。*/
function test() {
    Range("A1").Font.Bold = true
    Range("A1:B1").Value2 = 2
    Range("A1:B5").FillDown()
}
```
