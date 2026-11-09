# BuildingBlock.InsertOptions

返回或设置一个 **Long** 类型的值，该值代表如何在文档中插入构建基块的内容。可读写。



## 语法

express.**InsertOptions**

express   一个代表 **BuildingBlock** 对象的变量。

## 类型

number（int4 精度）

## 说明


 **InsertOptions** 属性的值可以是任意 **[WdDocPartInsertOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdDocPartInsertOptions)** 常量。



## 示例


```JavaScript
/*本示例将第一个模板的第三个构建基块的内容插入到文档的方式设置为wdInsertParagraph。*/
function test() {
    let buildingBlock = Application.Templates.Item(1).BuildingBlockEntries.Item(3)
    buildingBlock.InsertOptions = wdInsertParagraph
}
```


```JavaScript
/*本示例判断附加到第一个文档的模板的第二个构建基块的内容插入到文档的方式，并通知用户。*/
function test() {
    let buildingBlock = Documents.Item(1).AttachedTemplate.BuildingBlockEntries.Item(2)
    switch (buildingBlock.InsertOptions) {
        case wdInsertContent:
            alert("嵌入型构建基块")
            break
        case wdInsertPage:
            alert("页面级构建基块")
            break
        case wdInsertParagraph:
            alert("段落级构建基块")
            break
    }
}
```
