# DocumentProperty.Delete

删除自定义的文档属性。



## 语法

express.**Delete()**

express   一个代表 **DocumentProperty** 对象的变量。

## 返回值

void

## 说明


不能删除内置的文档属性。



## 示例


```JavaScript
/*本示例运行于文字组件，删除活动文档的一个自定义文档属性。为了使该示例正确运行，必须有名为“CustomNumber”的自定义 DocumentProperty 对象。*/
function test() {
    ActiveDocument.CustomDocumentProperties.Item("CustomNumber").Delete()
}
```


```JavaScript
/*本示例运行于文字组件，删除活动文档的所有自定义文档属性。*/
function test() {
    let docProperties = ActiveDocument.CustomDocumentProperties
    for (let i = docProperties.Count; i >= 1; i--) {
        docProperties.Item(i).Delete()
    }
}
```
