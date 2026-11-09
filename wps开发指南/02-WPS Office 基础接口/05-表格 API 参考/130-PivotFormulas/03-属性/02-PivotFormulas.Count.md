# PivotFormulas.Count

返回一个 **Long** 值，它代表集合中对象的数量。



## 语法

express.**Count**

express   一个代表 **PivotFormulas** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动工作表中数据透视表的公式的数量。*/
function test() {
    let pvtFormulas = ActiveSheet.Range("I1").PivotTable.PivotFormulas
    alert(`公式的数量：${pvtFormulas.Count}`)
}
```
