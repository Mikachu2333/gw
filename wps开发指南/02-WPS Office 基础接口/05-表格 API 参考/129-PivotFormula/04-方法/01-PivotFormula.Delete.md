# PivotFormula.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **PivotFormula** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除第一张工作表中数据透视表的第一个公式。*/
function test() {
    let pvtFormula = Worksheets.Item(1).Range("I1").PivotTable.PivotFormulas(1)
    pvtFormula.Delete()
}
```


```JavaScript
/*本示例删除活动工作表的第一张数据透视表中名为“示例数据”的公式。*/
function test() {
    let pvtFormula = ActiveSheet.PivotTables(1).PivotFormulas("示例数据")
    pvtFormula.Delete()
}
```
