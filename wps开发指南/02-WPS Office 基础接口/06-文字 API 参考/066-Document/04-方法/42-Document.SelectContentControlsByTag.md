# Document.SelectContentControlsByTag

返回一个 **[ContentControls](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControls/obj)** 集合，该集合代表文档中具有 *Tag* 参数中指定标记值的所有内容控件。只读。



## 语法

express.**SelectContentControlsByTag(Tag)**

express   一个代表 **Document** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Tag | 必选 | string | 要返回的内容控件的标记值。 |

## 返回值

ContentControls

## 示例


```JavaScript
/*本示例显示活动文档上标记值为“example1”的第一个内容控件的类型是否为wdContentControlComboBox。*/
function test() {
    let contentControl = ActiveDocument.SelectContentControlsByTag("example1").Item(1)
    alert(contentControl.Type == wdContentControlComboBox)
}
```


```JavaScript
/*本示例设置第一个文档上标记值为“example2”的第一个内容控件的颜色。*/
function test() {
    let contentControl = Documents.Item(1).SelectContentControlsByTag("example2").Item(1)
    contentControl.Color = wdColorBlue
}
```
