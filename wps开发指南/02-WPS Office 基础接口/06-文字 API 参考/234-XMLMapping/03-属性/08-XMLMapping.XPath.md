# XMLMapping.XPath

返回 **String** 值，该值表示 **XML** 映射的 **XPath** ，其计算结果是当前映射的 **XML** 节点。只读。



## 语法

express.**XPath**

express   一个代表 **XMLMapping** 对象的变量。

## 类型

string

## 说明


若要为内容控件设置映射，请使用 **[SetMapping](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLMapping/member/SetMapping)** 方法或 **[SetMappingByNode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/XMLMapping/member/SetMappingByNode)** 方法。如果映射不是活动的，则使用此属性将返回错误。



## 示例


```JavaScript
/*本示例判断活动文档中第一个内容控件是否是日期控件，以及 XPath 字符串是否设置为特定的内置文档属性。如果 XPath 不匹配并且控件是日期控件，它将设置到该控件的映射。*/
function test() {
    let blnMap = false
    let contentControl = Application.ActiveDocument.ContentControls.Item(1)
    let xmlMapping = contentControl.XMLMapping
    if ((contentControl.Type == wdContentControlDate) && (xmlMapping.XPath !== "/ns1:coreProperties[1]/ns0:createdate[1]")) {
        blnMap = xmlMapping.SetMapping("/ns1:coreProperties[1]/ns0:createdate[1]")
        if (blnMap == false) {
            alert("Unable to map the content control.")
        }
    }
}
```


```JavaScript
/*本示例将所选内容的文本替换为第一个文档上第一个内容控件的XML映射的XPath字符串。*/
function test() {
    let xmlMapping = Documents.Item(1).ContentControls.Item(1).XMLMapping
    Selection.Range.Text = xmlMapping.XPath
}
```
