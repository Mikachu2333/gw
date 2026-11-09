# PivotFormulas.Add

新建数据透视表公式。



## 语法

express.**Add(Formula, UseStandardFormula)**

express   一个代表 **PivotFormulas** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Formula | 必选 | string | 新的数据透视表公式。 |
| UseStandardFormula | 可选 | any | 标准数据透视表公式。 |

## 返回值

一个 PivotFormula 对象，它代表新的数据透视表公式。

## 示例


```JavaScript
/*本示例为第一张工作表的第一张数据透视表添加公式。*/
function test() {
    Worksheets.Item(1).PivotTables(1).PivotFormulas.Add("公式1=张三*0.9", true)
}
```


```JavaScript
/*本示例为活动工作表的数据透视表添加公式，并显示该数据透视表的第二个公式的名称。*/
function test() {
    let pvtFormulas = ActiveSheet.Range("I1").PivotTable.PivotFormulas
    pvtFormulas.Add("示例数据=张三+15", true)
    alert(pvtFormulas.Item(2).Value)
}
```
