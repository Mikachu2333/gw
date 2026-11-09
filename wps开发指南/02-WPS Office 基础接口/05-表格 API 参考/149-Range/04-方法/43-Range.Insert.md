# Range.Insert

在工作表或宏表中插入一个单元格或单元格区域，其他单元格相应移位以腾出空间。

返回值类型为Variant。



## 语法

express.**Insert(Shift, CopyOrigin)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Shift | 可选 | any | 指定单元格的调整方式。可为以下 XlInsertShiftDirection 常量之一：xlShiftToRight 或 xlShiftDown。如果省略此参数，ET 将根据区域的形状确定调整方式。 |
| CopyOrigin | 可选 | any | 复制源；即从何处复制插入单元格的格式。 可以是以下 XlInsertFormatOrigin 常量之一： xlFormatFromLeftOrAbove (默认) 或 xlFormatFromRightOrBelow。 |

## 返回值

any

## 示例


```JavaScript
/*本示例将 A1 单元格的值设置为 a1，然后在 A1 单元格位置插入一个单元格，原单元格下移*/
function test() {
    Range("A1").Value2 = 'a1'
    Range("A1").Insert(xlShiftDown)
}
```


```JavaScript
/*本示例将 A1 单元格的值设置为 a1 并加粗，在 A1 单元格位置插入一个单元格，格式参考原A1单元格，原单元格右移*/
function test() {
    Range("A1").Value2 = 'a1'
    Range("A1").Font.Bold = true
    Range("A1").Insert(xlShiftToRight, xlFormatFromRightOrBelow)
}
```
