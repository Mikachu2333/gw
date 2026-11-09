# Slicers.Count

返回集合中对象的数量。



## 语法

express.**Count**

express   一个代表 **Slicers** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动工作表上数据透视表中切片器的数量。*/
function test() {
    alert(ActiveSheet.Range("I1").PivotTable.Slicers.Count)
}
```
