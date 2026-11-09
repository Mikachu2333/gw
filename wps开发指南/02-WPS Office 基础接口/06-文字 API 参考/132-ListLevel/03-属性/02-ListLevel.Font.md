# ListLevel.Font

返回或设置 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/obj)** 对象，该对象代表指定对象的字符格式。 **Font** 类型，可读写。



## 语法

express.**Font**

express   一个代表 **ListLevel** 对象的变量。

## 类型

Font

## 说明


要设置该属性，需指定一个返回 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/obj)** 对象的表达式。



## 示例


```JavaScript
/*本示例创建一个新的多级列表模板，并将多级列表的编号的样式设置为粗体和红色，然后为所选内容使用新列表模板。*/
function test() {
    let listGallery = Application.ListGalleries.Item(wdOutlineNumberGallery)
    let listTemplate = listGallery.ListTemplates.Add(true)
    for (let i = 1; i <= 9; i++) {
        let listLevel = listTemplate.ListLevels.Item(i)
        listLevel.Font.Bold = true
        listLevel.Font.Color = wdColorRed
    }
    Selection.Range.ListFormat.ApplyListTemplate(listTemplate)
}
```


```JavaScript
/*本示例显示“项目符号和编号”对话框中“多级符号”选项卡上第三个列表模板（不包括“无”选项）中第二个列表级别的字体的字号。*/
function test() {
    let listTemplate = Application.ListGalleries.Item(wdOutlineNumberGallery).ListTemplates.Item(3)
    alert(listTemplate.ListLevels.Item(2).Font.Size)
}
```
