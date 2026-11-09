# XPath.Repeating

如果指定的 **[XPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XPath/obj)** 对象被映射到 XML 列表，则返回 **True** ；如果 **XPath** 对象被映射到单个的单元格，则返回 **False** 。 **Boolean** 类型，只读。



## 语法

express.**Repeating**

express   一个代表 **XPath** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示映射到第一张工作表上单元格C2的XPath是否被映射到XML列表。*/
function test() {
    let xPath = Worksheets.Item(1).Range("C2").XPath
    alert(xPath.Repeating)
}
```


```JavaScript
/*本示例判断如果映射到活动工作表上单元格A2的XPath被映射到XML列表，则清除该XPath架构信息。*/
function test() {
    let xPath = ActiveSheet.Range("A2").XPath
    if (xPath.Repeating) {
        xPath.Clear()
    }
}
```
