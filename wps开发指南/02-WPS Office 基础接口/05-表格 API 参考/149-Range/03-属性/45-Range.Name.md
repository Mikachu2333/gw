# Range.Name

返回或设置一个 **Variant** 值，它代表对象的名称。



## 语法

express.**Name**

express   一个代表 **Range** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例将 A1 单元格的 Name 属性设置为 test1 并显示*/
function test() {
    Range("A1").Name = 'test1'
    alert(Range("A1").Name.toString())
}
```


```JavaScript
/*本示例将 A1 单元格的 Name 属性设置为 test1 并显示工作簿中所有名称的总数。*/
function test() {
    Range("A1").Name = 'test1'
    alert(ActiveWorkbook.Names.Count)
}
```
