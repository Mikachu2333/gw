# Worksheets.Add

新建工作表、图表或宏表。新建的工作表将成为活动工作表。



## 语法

express.**Add(Before, After, Count, Type)**

express   一个代表 **Worksheets** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Before | 可选 | any | 指定工作表的对象，新建的工作表将置于此工作表之前。 |
| After | 可选 | any | 指定工作表的对象，新建的工作表将置于此工作表之后。 |
| Count | 可选 | any | 要添加的工作表数。默认值为 1。 |
| Type | 可选 | any | 指定工作表类型。可以为下列 XlSheetType 常量之一：xlWorksheet、xlChart、xlExcel4MacroSheet 或 xlExcel4IntlMacroSheet。如果基于现有模板插入工作表，则指定该模板的路径。默认值为 xlWorksheet。 |

## 返回值

一个 Object 值，它代表新的工作表、图表或宏表。

## 说明


如果同时省略 *Before* 和 *After*，则新工作表插入到活动工作表之前。



## 示例


```JavaScript
/*本示例在第一张工作表前新建1张图表。*/
function test() {
    Worksheets.Add(Worksheets.Item(1), null, 1, xlChart)
}
```


```JavaScript
/*本示例在第一张工作表后新建2张工作表，并将其中一张工作表命名为成绩表。*/
function test() {
    Worksheets.Add(null, Worksheets.Item(1), 2).Name = "成绩表"
}
```
