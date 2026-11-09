# Worksheet.Select

选择对象。



## 语法

express.**Select(Replace)**

express   一个代表 **Worksheet** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Replace | 可选 | any | （仅用于工作表）。如果为 True，则用指定的对象替换当前所选内容。如果为 False，则扩展当前所选内容以包括以前选择的对象和指定的对象。 |

## 返回值

void

## 说明


要选择单元格或单元格区域，请使用 **Select** 方法。要使单个单元格成为活动单元格，请使用 **Activate** 方法。



## 示例


```JavaScript
/*本示例选定第3张工作表。*/
function test() {
    Worksheets.Item(3).Select()
}
```


```JavaScript
/*本示例扩展当前所选的工作表，增加选择 Sheet1 工作表。*/
function test() {
    Worksheets.Item("Sheet1").Select(false)
}
```
