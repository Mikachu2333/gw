# Outline.SummaryColumn

返回或设置分级显示中的汇总列的位置。 **XlSummaryColumn** 类型，可读写。



## 语法

express.**SummaryColumn**

express   一个代表 **Outline** 对象的变量。

## 类型

XlSummaryColumn

## 说明


| XlSummaryColumn 可为以下 常量之一。            |
| ------------------------------------- |
| xlSummaryOnRight 分级显示中的汇总列位于明细数据列的右侧。 |
| xlSummaryOnLeft 分级显示中的汇总列位于明细数据列的左侧。  |



## 示例


```JavaScript
/*本示例创建一个使用自动样式的分级显示，汇总行位于明细数据行的上方，汇总列位于明细数据列的右侧。*/
function test() {
    Worksheets.Item("Sheet1").Activate()
    Selection.AutoOutline()
    let outline = ActiveSheet.Outline
    outline.SummaryRow = xlSummaryAbove
    outline.SummaryColumn = xlSummaryOnRight
    outline.AutomaticStyles = true
}
```


```JavaScript
/*本示例显示活动工作表中分级显示中的汇总列的位置是否位于明细数据列的左侧。*/
function test() {
    alert(ActiveSheet.Outline.SummaryColumn == xlSummaryOnLeft)
}
```
