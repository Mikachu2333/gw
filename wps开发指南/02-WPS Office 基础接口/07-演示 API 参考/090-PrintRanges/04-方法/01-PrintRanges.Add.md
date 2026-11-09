# PrintRanges.Add

返回一个 **[PrintRange](#TODO)** 对象，该对象代表要添加到 **PrintRanges** 集合的新打印区域。



## 语法

express.**Add(Start, End)**

express   一个代表 **PrintRanges** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Start | 必选 | number（int 精度） | 范围中起始幻灯片的幻灯片编号。 |
| End | 必选 | number（int 精度） | 范围中终止幻灯片的幻灯片编号。 |

## 返回值

PrintRange

## 示例


```JavaScript
/*本示例打印活动演示文稿中的第一张幻灯片、第三张到第五张幻灯片以及第八张和第九张幻灯片。*/
function test() {
    let printOptions = ActivePresentation.PrintOptions
    printOptions.RangeType = ppPrintSlideRange
    let printRanges = printOptions.Ranges
    printRanges.Add(1, 1)
    printRanges.Add(3, 5)
    printRanges.Add(8, 9)
    ActivePresentation.PrintOut()
}
```


```JavaScript
/*本示例清除第一篇演示文稿中所有已定义的打印范围，并添加新的打印区域，其中包括第一张和第二张幻灯片，然后打印新定义的幻灯片范围。*/
function test() {
    let printRanges = Presentations.Item(1).PrintOptions.Ranges
    printRanges.ClearAll()
    printRanges.Add(1, 2)
    Presentations.Item(1).PrintOut()
}
```
