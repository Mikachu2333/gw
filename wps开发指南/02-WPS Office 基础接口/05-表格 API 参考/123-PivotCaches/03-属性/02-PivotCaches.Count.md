# PivotCaches.Count

返回一个 **Long** 值，它代表集合中对象的数量。



## 语法

express.**Count**

express   一个代表 **PivotCaches** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动工作簿中的数据透视表缓存的总数。*/
function test() {
    alert("PivotCaches集合的总数:" + ActiveWorkbook.PivotCaches().Count)
}
```
