# Worksheet.XmlMapQuery

返回一个代表映射到特定 XPath 的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象。如果指定的 XPath 路径尚未映射到工作表，则返回 **null** 。



## 语法

express.**XmlMapQuery(XPath, SelectionNamespaces, Map)**

express   一个代表 **Worksheet** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| XPath | 必选 | string | 要查询的 XPath。 |
| SelectionNamespaces | 可选 | any | 以空格分隔的 **String** 类型，包含在 XPath 参数中引用的命名空间。如果无法解析某个指定的命名空间，将产生运行时错误。 |
| Map | 可选 | any | 如果希望在特定的映射中查询 XPath，请指定 XML 映射。 |

## 返回值

Range

## 说明


与 **[XmlDataQuery](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/XmlDataQuery)** 方法不同， **XmlMapQuery** 方法返回 XML 列表的整个列，其中包括标题行。

利用 **XmlMapQuery** ，开发人员可以查询是否存在具体的映射。该方法无法用于查询映射中的数据片段。例如，映射区域的 XPath 为“/root/People\[@Age="23"\]/FirstName”是有效的。查询此 XPath 位置路径的 XmlMapQuery 将返回正确区域。但为在以上映射区域中找到“Joe”而对“/root/People\[FirstName="Joe"\]”进行的查询将失败，原因是映射区域的 XPath 定义不同。



## 示例


```JavaScript
/*此示例分别使用两个不同的XPath通过XmlMapQuery查询相应映射，并分别显示映射对应的Range地址。*/
function test() {
    let r1 = ActiveSheet.XmlMapQuery("/catalog/book/@id")
    alert(r1.Address())
    let r2 = ActiveSheet.XmlMapQuery("/catalog/book/description")
    alert(r2.Address())
}
```


```JavaScript
/*此示例使用特定的XPath，并且在活动工作簿的第一项映射中通过XmlMapQuery查询相应的映射，再显示结果映射对应Range中第二项的文本内容。*/
function test() {
    let r1 = ActiveSheet.XmlMapQuery("/catalog/book/publish_date", null, ActiveWorkbook.XmlMaps.Item(1))
    alert(r1.Item(2).Text)
}
```
