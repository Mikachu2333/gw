# BuildingBlock.Insert

在文档中插入构建基块的值，并返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，该对象表示文档中构建基块的内容。



## 语法

express.**Insert(Where, RichText)**

express   一个代表 **BuildingBlock** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Where | 必选 | Range | 放置构建基块内容的位置。 |
| RichText | 可选 | any | 如果为 **True** ，则将构建基块作为 RTF 格式文本插入。如果为 **False** ，则将构建基块作为纯文本插入。 |

## 返回值

Range

## 示例


```JavaScript
/*本示例在活动文档的第一段中插入第一个模板的第一个构建基块。*/
function test() {
    Application.Templates.Item(1).BuildingBlockEntries.Item(1).Insert(ActiveDocument.Paragraphs(1).Range)
}
```


```JavaScript
/*本示例将活动文档的选中内容替换为第一个模板的第一个构建基块，然后显示该构建基块的文本内容。*/
function test() {
    let range = Application.Templates.Item(1).BuildingBlockEntries.Item(1).Insert(Selection.Range, true)
    alert(range.Text)
}
```
