# PivotTable.RepeatAllLabels

指定是否要对指定数据透视表中的所有透视字段重复项目标签。



## 语法

express.**RepeatAllLabels(Repeat)**

express   一个代表 **PivotTable** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Repeat | 必选 | XlPivotFieldRepeatLabels | 指定是否重复数据透视表中的所有字段项目标签。 |

## 返回值

void

## 说明


使用 **RepeatAllLabels** 方法对应于 **“数据透视表工具设计”** 选项卡的 **“报表布局”** 下拉列表中的 **“重复所有项目标签”** 和 **“不重复项目标签”** 命令。

若要指定是否要对单个数据透视表重复项目标签，请使用 **RepeatLabels** 属性。



## 示例


```JavaScript
/*本示例将第一张工作表第一张数据透视表设置为不重复数据透视表中的所有字段项目标签。*/
function test() {
    Worksheets.Item(1).PivotTables(1).RepeatAllLabels(xlDoNotRepeatLabels)
}
```


```JavaScript
/*本示例将活动工作表第一张数据透视表设置为重复数据透视表中的所有字段项目标签。*/
function test() {
    ActiveSheet.PivotTables(1).RepeatAllLabels(xlRepeatLabels)
}
```
