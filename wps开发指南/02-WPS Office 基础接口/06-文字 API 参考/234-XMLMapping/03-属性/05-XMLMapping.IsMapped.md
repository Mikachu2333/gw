# XMLMapping.IsMapped

返回 **Boolean** 值，该值表示文档中的内容控件是否映射到文档的 XML 数据存储内的 XML 节点。只读。



## 语法

express.**IsMapped**

express   一个代表 **XMLMapping** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例删除活动文档内当前映射的所有内容控件的 XML 映射。*/
function test() {
    for (let i = 1; i <= ActiveDocument.ContentControls.Count; i++) {
        let xmlMapping = ActiveDocument.ContentControls.Item(i).XMLMapping
        if (xmlMapping.IsMapped) {
            xmlMapping.Delete()
        }
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
