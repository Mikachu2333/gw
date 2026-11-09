# PivotTable.ShowTableStyleRowStripes

 **ShowTableStyleRowStripes** 属性显示镶边行，这些行中的偶数行和奇数行的格式互不相同。这样使数据透视表更易于阅读。可读/写 **Boolean** 类型。



## 语法

express.**ShowTableStyleRowStripes**

express   一个代表 **PivotTable** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示数据透视表镶边行*/
function test() {
    Worksheets.Item(1).PivotTables(1).ShowTableStyleRowStripes = true
}
```


```JavaScript
/*本示例显示数据透视表 ShowTableStyleRowStripes 属性的数据类型，并设置为 false*/
function test() {
    alert(typeof ActiveSheet.PivotTables(1).ShowTableStyleRowStripes)
    ActiveSheet.PivotTables(1).ShowTableStyleRowStripes = false
}
```
