# XPath.Clear

清除映射区域的所有 XPath 架构信息。



## 语法

express.**Clear()**

express   一个代表 **XPath** 对象的变量。

## 返回值

void

## 说明


 **Clear** 将影响映射到 **[XPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XPath/obj)** 对象的整个区域。

此方法不从映射到指定 XPath 的单元格中清除数据。使用 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象的 **[Clear](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Clear)** 方法可从单元格中清除数据。

如果指定的 XPath 在 XML 列表中被映射，则将删除架构映射，但列表不会从工作表中删除。

如果映射的区域是单个单元格，则将删除这个单元格，但会保留数据。

如果满足以下任一条件，此方法将生成错误：

* 区域跨网格中的多个列。
* 区域的某个部分包含已经映射的单元格，剩余部分包含未映射的单元格。
* 区域的某一部分包含一个映射，而另一部分包含了不同映射或同一映射中的不同 XPath。



## 示例


```JavaScript
/*本示例清除映射到单元格B1的所有XPath架构信息。*/
function test() {
    Application.Range("B1").XPath.Clear()
}
```


```JavaScript
/*本示例判断如果映射到活动工作表上单元格C1的XPath值字符串的长度大于0，则清除该XPath架构信息。*/
function test() {
    let xPath = ActiveSheet.Range("C1").XPath
    if (xPath.Value.length > 0) {
        xPath.Clear()
    }
}
```
