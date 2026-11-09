# Row.SetLeftIndent

设置表格中行的缩进。



## 语法

express.**SetLeftIndent(LeftIndent, RulerStyle)**

express   一个代表 **Row** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| LeftIndent | 必选 | number（float 精度） | 指定的一行或多行的当前左边缘与所需左边缘之间的距离（以磅为单位）。 |
| RulerStyle | 必选 | WdRulerStyle | 改变左缩进时，用来控制 WPS 调整表格的方式。 |

## 返回值

void

## 说明


参数 **RulerStyle** 的行为适用于左对齐的表格。居中和右对齐的表格的 **WdRulerStyle** 行为不可预测；在这些情况下，请谨慎使用 **SetLeftIndent** 方法。



## 示例


```JavaScript
/*本示例在新文档中创建一张表格，第一行缩进 0.5 英寸（36 磅）。改变左缩进时，单元格宽度将调整以保持表格的右边缘。*/
function test() {
    let document = Documents.Add()
    let table = document.Tables.Add(Selection.Range, 3, 3)
    table.Rows.Item(1).SetLeftIndent(InchesToPoints(0.5), wdAdjustSameWidth)
}
```


```JavaScript
/*本示例将活动文档第一个表格的第二行缩进 18 磅。改变左缩进时，只调整第一列的左边缘。*/
function test() {
    ActiveDocument.Tables.Item(1).Rows.Item(2).SetLeftIndent(18, wdAdjustFirstColumn)
}
```
