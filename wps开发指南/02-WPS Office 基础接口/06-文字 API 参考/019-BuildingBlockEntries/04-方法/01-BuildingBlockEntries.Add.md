# BuildingBlockEntries.Add

在模板中创建一个新的生成块条目，并且返回一个代表新的生成块条目的 **[BuildingBlock](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlock/obj)** 对象。



## 语法

express.**Add(Name, Type, Category, Range, Description, InsertOptions)**

express   一个代表 **BuildingBlockEntries** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 必选 | string | 指定生成块条目的名称。相当于 **BuildingBlock** 对象的 **[Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlock/member/Name)** 属性。 |
| Type | 必选 | WdBuildingBlockTypes | 指定要创建的生成块的类型。相当于 **BuildingBlock** 对象的 **[Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlock/member/Type)** 属性。 |
| Category | 必选 | string | 指定新的生成块条目的类别。相当于 **BuildingBlock** 对象的 **[Category](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlock/member/Category)** 属性。 |
| Range | 必选 | Range | 指定生成块条目的值。相当于 **BuildingBlock** 对象的 **[Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlock/member/Value)** 属性。 |
| Description | 可选 | any | 指定生成块条目的说明。相当于 **BuildingBlock** 对象的 **[Description](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlock/member/Description)** 属性。 |
| InsertOptions | 可选 | WdDocPartInsertOptions | 指定是将生成块条目作为页、段落插入还是将其内嵌。如果省略，则默认值为 **wdInsertContent** 。相当于 **BuildingBlock** 对象的 **[InsertOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/BuildingBlock/member/InsertOptions)** 属性。 |

## 返回值

BuildingBlock

## 示例


```JavaScript
/*本示例创建了一个新的生成块条目，将其添加到活动文档所附加的模板中，然后将该生成块的值设置为所选文本。*/
function test() {
    let template = ActiveDocument.AttachedTemplate
    template.BuildingBlockEntries.Add("Author Name", wdTypeCustomTextBox, "Custom", Selection.Range)
}
```


```JavaScript
/*本示例在第一个模板上创建一个新的生成块条目，并显示该模板上生成块条目的数量。*/
function test() {
    Application.Templates.Item(1).BuildingBlockEntries.Add("Example_1", wdTypeCustomTextBox, "Custom", ActiveDocument.Paragraphs.Item(1).Range, "test1", wdInsertContent)
    alert(Application.Templates.Item(1).BuildingBlockEntries.Count)
}
```
