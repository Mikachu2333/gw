# HPageBreaks.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **HPageBreaks** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 对象的索引号。 |

## 返回值

HPageBreak

## 示例


```JavaScript
/*本示例移动第一个工作表的第一个水平分页符至E5单元格*/
function test() {
    Application.Worksheets.Item(1).HPageBreaks.Item(1).Location = Application.Worksheets.Item(1).Range("E5")
}
```


```JavaScript
/*本示例显示第一个工作表的第2个水平分页符是否为全屏应用*/
function test() {
    let hPageBreak = Application.Worksheets.Item(1).HPageBreaks.Item(2)
    alert(hPageBreak.Extent == xlPageBreakFull)
}
```
