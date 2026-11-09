# VPageBreaks.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **VPageBreaks** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 对象的索引号。 |

## 返回值

VPageBreak

## 示例


```JavaScript
/*本示例移动第一个工作表的第一个垂直分页符至E5单元格*/
function test() {
    Application.Worksheets.Item(1).VPageBreaks.Item(1).Location = Worksheets.Item(1).Range("E5")
}
```


```JavaScript
/*本示例显示活动工作表的第三个垂直分页符是否为手动插入分页符。*/
function test() {
    let type = ActiveSheet.VPageBreaks.Item(3).Type
    alert(type  == xlPageBreakManual)
}
```
