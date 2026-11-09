# HPageBreaks.Count

返回一个 **Long** 值，它代表集合中对象的数量。



## 语法

express.**Count**

express   一个代表 **HPageBreaks** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示第一个工作表中水平分页符的数量。*/
function test() {
    let count = Application.Worksheets.Item(1).HPageBreaks.Count
    alert(`水平分页符的数量是 ${count}`)
}
```
