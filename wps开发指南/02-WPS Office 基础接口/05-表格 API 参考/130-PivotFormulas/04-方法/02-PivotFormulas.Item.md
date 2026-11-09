# PivotFormulas.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **PivotFormulas** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

包含在集合中的一个 PivotFormula 对象。

## 示例


```JavaScript
/*本示例显示第一张工作表中第一个数据透视表的第一个公式。*/
function test() {
    alert(Worksheets.Item(1).PivotTables(1).PivotFormulas.Item(1).Formula)
}
```


```JavaScript
/*本示例删除第一张工作表上数据透视表中名为“公式2”的公式。*/
function test() {
    let pvtFormula = Worksheets.Item(1).Range("I1").PivotTable.PivotFormulas.Item("公式2")
    pvtFormula.Delete()
}
```
