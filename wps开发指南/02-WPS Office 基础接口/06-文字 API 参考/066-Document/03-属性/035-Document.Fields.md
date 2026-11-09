# Document.Fields

返回一个 **[Fields](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Fields/obj)** 集合，该集合代表文档中的所有域。只读。



## 语法

express.**Fields**

express   一个代表 **Document** 对象的变量。

## 类型

Fields

## 示例


```JavaScript
/*本示例更新活动文档中所有的域。*/
function test() {
    ActiveDocument.Fields.Update()
}
```


```JavaScript
/*本示例删除活动文档正文和页脚中的所有域。*/
function test() {
    for (let i = ActiveDocument.Fields.Count; i >= 1; i--) {
        ActiveDocument.Fields.Item(i).Delete()
    }
    let range = ActiveDocument.Sections.Item(1).Footers(wdHeaderFooterPrimary).Range
    for (let j = range.Fields.Count; j >= 1; j--) {
        range.Fields.Item(j).Delete()
    }
}
```
