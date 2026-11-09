# SparklineGroups.Count

返回关联的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象中的迷你图组的计数。只读。



## 语法

express.**Count**

express   一个代表 **SparklineGroups** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示单元格区域 A1:A4 上迷你图组的数量。*/
function test() {
    alert(Range("A1:A4").SparklineGroups.Count)
}
```
