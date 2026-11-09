# Range.ShowDependents

绘制从指定区域指向直接从属单元格的追踪箭头。



## 语法

express.**ShowDependents(Remove)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Remove | 可选 | any | 如果为 **True** ，则去掉指向直接从属单元格的一个级别的追踪箭头。如果为 **False** ，则扩充一个级别的追踪箭头。默认值为 **False** 。 |

## 返回值

Variant

## 示例


```JavaScript
/*本示例绘制工作表 Sheet1 上从活动单元格指向其从属单元格的追踪箭头。*/
function test() {
    Worksheets.Item("Sheet1").Activate()
    ActiveCell.ShowDependents()
}
```


```JavaScript
/*本示例去掉工作表 Sheet1 上活动单元格指向其从属单元格的一个级别的追踪箭头。*/
function test() {
    Worksheets.Item("Sheet1").Activate()
    ActiveCell.ShowDependents(true)
}
```
