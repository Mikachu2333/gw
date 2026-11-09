# TableStyle 对象

代表当前表格样式。

## 说明


使用 **[Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TableStyle/member/Name)** 属性可返回表格样式的名称。

使用 **[Id](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TableStyle/member/Id)** 属性可返回表格样式的数字标识符。


## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片的第一个表格的表格样式的 Id。*/
function test() {
    let tableStyle = ActivePresentation.Slides.Item(1).Shapes.Item(1).Table.Style
    alert(tableStyle.Id)
}
```


```JavaScript
/*本示例显示活动窗口所选表格的表格样式的名称。*/
function test() {
    let tableStyle = ActiveWindow.Selection.ShapeRange.Table.Style
    alert(tableStyle.Name)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Id](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TableStyle/member/Id) | 返回一个标识表格样式的字符串。只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TableStyle/member/Name) | 返回表格样式的名称。只读。 |