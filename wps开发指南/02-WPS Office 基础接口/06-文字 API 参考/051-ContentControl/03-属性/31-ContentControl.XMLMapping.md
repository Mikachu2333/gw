# ContentControl.XMLMapping

返回 **XMLMapping** 对象，该对象表示内容控件到文档的数据存储中的 XML 数据的映射。只读。



## 语法

express.**XMLMapping**

express   一个代表 **ContentControl** 对象的变量。

## 类型

XMLMapping

## 示例


```JavaScript
/*本示例设置文档作者这一内置文档属性，在活动文档中插入新的内容控件，然后将此控件的 XML 映射设置为该内置文档属性。*/
function test() {
    Application.ActiveDocument.BuiltInDocumentProperties.Item("Author").Value = "David Jaffe"

    let contentControl = Application.ActiveDocument.ContentControls.Add(wdContentControlText, ActiveDocument.Paragraphs.Item(1).Range)
    let blnMap = contentControl.XMLMapping.SetMapping("/ns1:coreProperties[1]/ns0:creator[1]")
    if (blnMap == false) {
        alert("Unable to map the content control.")
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个内容控件是否映射到该文档的 XML 数据存储中的 XML 节点。*/
function test() {
    let xmlMapping = Documents.Item(1).ContentControls.Item(1).XMLMapping
    alert(xmlMapping.IsMapped)
}
```
