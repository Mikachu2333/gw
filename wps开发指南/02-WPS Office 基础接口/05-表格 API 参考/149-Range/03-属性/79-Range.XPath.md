# Range.XPath

返回一个 **[XPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XPath/obj)** 对象，它代表映射到指定 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象的元素的 XPath。该区域的上下文确定操作是否成功，或返回空对象。只读。



## 语法

express.**XPath**

express   一个代表 **Range** 对象的变量。

## 类型

XPath

## 说明


当 **XPath** 属性包含的区域满足以下条件时，该属性有效：

* 区域中仅有一个单元格。
* 如果区域中包含两个或更多个单元格，那么必须满足以下条件之一：
   1. 如果单元格包含 XPath 信息，区域内的所有单元格都必须包含 XPath 信息（也即，每个单元格与一个或多个数据映射关联），所有单元格还必须具有相同的 XPath 内容（也即，每个单元格向同一组数据映射提供数据）。  
   2. 所有单元格都不包含 XPath 信息。
* 区域内没有不连续的区域。
表格的标题和总计行被视为包含 XPath 信息。

任何不满足上述条件的区域将返回运行时错误。

如果区域选择有效，但未映射任何单元格，ET 将返回一个 **XPath** 对象，这样您就能通过访问 **SetValue** 方法来创建映射。



## 示例


```JavaScript
/*本示例显示 A2 单元格 Xpath 属性的值*/
function test() {
    alert(Range("A2").XPath.Value)
}
```


```JavaScript
/*本示例清除 A1 单元格的所有 XPath 架构信息*/
function test() {
    Range("A1").XPath.Clear()
}
```
