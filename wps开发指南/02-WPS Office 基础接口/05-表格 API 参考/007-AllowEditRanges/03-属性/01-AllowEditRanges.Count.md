# AllowEditRanges.Count

返回一个 **Long** 值，它代表集合中对象的数量。



## 语法

express.**Count**

express   一个代表 **AllowEditRanges** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示第一张工作表上 AllowEditRange 对象的数量。*/
function test() {
    alert(Worksheets.Item(1).Protection.AllowEditRanges.Count)
}
```
