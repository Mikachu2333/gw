# Worksheets.Count

返回一个 **Long** 值，它代表集合中对象的数量。



## 语法

express.**Count**

express   一个代表 **Worksheets** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示当前工作簿中工作表的数量*/
function test() {
    alert("当前工作簿中工作表数量: " + Application.Worksheets.Count);
}
```
