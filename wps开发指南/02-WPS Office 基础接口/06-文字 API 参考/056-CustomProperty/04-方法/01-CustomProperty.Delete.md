# CustomProperty.Delete

删除指定自定义属性。



## 语法

express.**Delete()**

express   一个代表 **CustomProperty** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将活动文档中第一个智能标记的第一个自定义属性删除。*/
function test() {
    let smartTag = ActiveDocument.SmartTags.Item(1)
    smartTag.Properties.Item(1).Delete()
}
```


```JavaScript
/*本示例判断如果第一个文档中第一个智能标记的第一个自定义属性的名称为“default”，则删除该自定义属性。*/
function test() {
    let customProperty = Documents.Item(1).SmartTags.Item(1).Properties.Item(1)
    if (customProperty.Name == "default") {
        customProperty.Delete()
    }
}
```
