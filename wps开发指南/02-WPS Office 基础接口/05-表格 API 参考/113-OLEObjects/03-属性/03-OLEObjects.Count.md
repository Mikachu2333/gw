# OLEObjects.Count

返回一个 **Long** 值，它代表集合中对象的数量。



## 语法

express.**Count**

express   一个代表 **OLEObjects** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*此示例显示工作表 Sheet1 中 OLE 对象的数量。*/
function test() {
    alert(Application.Worksheets.Item("Sheet1").OLEObjects().Count)
}
```
