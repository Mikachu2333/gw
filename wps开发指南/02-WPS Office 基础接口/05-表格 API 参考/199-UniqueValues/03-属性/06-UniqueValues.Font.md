# UniqueValues.Font

返回一个 **Font** 对象，该对象在条件格式规则的计算结果为 **True** 时指定字体格式。只读。



## 语法

express.**Font**

express   一个代表 **UniqueValues** 对象的变量。

## 类型

Font

## 说明


条件格式对象并不支持 **Font** 对象的所有属性。您可以设置字体样式、下划线、颜色和删除线属性。



## 示例


```JavaScript
/*本示例设置活动工作表上区域 C1:C10 中第二个（UniqueValues）条件格式的特定文本的字体的颜色和字号。*/
function test() {
    let uniqueValues = ActiveSheet.Range("C1:C10").FormatConditions.Item(2)
    uniqueValues.Font.ColorIndex = 4
    uniqueValues.Font.Size = 15
}
```


```JavaScript
/*本示例将活动工作表上区域 C1:C10 中第一个（UniqueValues）条件格式特定文本的字体设置为加粗和倾斜，并设置该字体的颜色。*/
function test() {
    let uniqueValues = ActiveSheet.Range("C1:C10").FormatConditions.Item(1)
    uniqueValues.Font.Bold = true
    uniqueValues.Font.Italic = true
    uniqueValues.Font.Color = RGB(255, 0, 0)
}
```
