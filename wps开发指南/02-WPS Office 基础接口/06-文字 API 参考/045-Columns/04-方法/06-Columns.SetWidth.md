# Columns.SetWidth

设置表格列的宽度。



## 语法

express.**SetWidth(ColumnWidth, RulerStyle)**

express   一个代表 **Columns** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ColumnWidth | 必选 | number（float 精度） | 指定列的宽度，以磅为单位。 |
| RulerStyle | 必选 | WdRulerStyle | 控制 WPS 调整单元格宽度的方式。 |

## 返回值

void

## 说明


参数 *RulerStyle* 的行为适用于左对齐的表格。居中和右对齐的表格的 **WdRulerStyle** 行为不可预测；在这些情况下，请谨慎使用 **SetWidth** 方法。



## 示例


```JavaScript
/*本示例将活动文档第一张表格所有列的宽度设置为 50 磅。*/
function test() {
    ActiveDocument.Tables.Item(1).Columns.SetWidth(50, wdAdjustNone)
}
```


```JavaScript
/*本示例将所选表格列的宽度设置为 60 磅，且其他列的位置保持不变。*/
function test() {
    Selection.Columns.SetWidth(60, wdAdjustFirstColumn)
}
```
