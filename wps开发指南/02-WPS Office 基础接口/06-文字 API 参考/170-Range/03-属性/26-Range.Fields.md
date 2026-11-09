# Range.Fields

返回一个 **[Fields](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Fields/obj)** 集合，该集合代表区域中的所有域。只读。



## 语法

express.**Fields**

express   一个代表 **Range** 对象的变量。

## 类型

Fields

## 示例


```JavaScript
/*本示例删除活动文档正文和页脚中的所有域。*/
function test() {
    let fields = ActiveDocument.Fields
    for (let i = fields.Count; i >= 1; i--) {
        fields.Item(i).Delete()
    }
    let range = ActiveDocument.Sections.Item(1).Footers.Item(wdHeaderFooterPrimary).Range
    for (let j = range.Fields.Count; j >= 1; j--) {
        range.Fields.Item(j).Delete()
    }
}
```


```JavaScript
/*本示例更新所选内容中的所有域。*/
function test() {
    Selection.Range.Fields.Update()
}
```
