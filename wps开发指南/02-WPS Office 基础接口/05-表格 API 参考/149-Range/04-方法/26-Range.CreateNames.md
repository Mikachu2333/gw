# Range.CreateNames

在指定区域中依据工作表中的文本标签创建名称。

返回值类型为Variant。



## 语法

express.**CreateNames(Top, Left, Bottom, Right)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Top | 可选 | any | 如果该值为 True，则使用顶部行中的标签创建名称。默认值为 False。 |
| Left | 可选 | any | 如果该值为 True，则使用左侧列中的标签创建名称。默认值为 False。 |
| Bottom | 可选 | any | 如果该值为 True，则使用底部行中的标签创建名称。默认值为 False。 |
| Right | 可选 | any | 如果该值为 True，则使用右侧列中的标签创建名称。默认值为 False。 |

## 返回值

any

## 说明


如果未指定 *Top*、*Left*、*Bottom* 或 *Right* 之一，ET 将根据指定区域的形状猜测文本标志。



## 示例


```JavaScript
/*本示例给 A1 单元格赋值 a ，并用单元格区域 A1:A3 中的文字创建区域 B1:B3 的名称。注意，指定区域时必须包括那些含有名称文字的单元格，即便只是为单元格区域 B1:B3 创建名称。*/
function test() {
    Range("A1").Value2 = "a"
    let rangeToName = Application.Worksheets.Item("Sheet1").Range("A1:B3")
    rangeToName.CreateNames(null, true)
}
```


```JavaScript
/*本示例给 C1 单元格赋值 C ，并用 C1 单元格的文本创建 C2 单元格的名称。注意，指定区域时必须包括那些含有名称文字的单元格，即便只是为单元格 C2 创建名称。*/
function test() {
    Range("C1").Value2 = "C"
    let rangeToName = Application.Worksheets.Item("Sheet1").Range("C1:C2")
    rangeToName.CreateNames(true)
}
```
