# ListTemplate.ListLevels

返回一个 **[ListLevels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListLevels/obj)** 集合，该集合代表指定的 **ListTemplate** 的所有级别。



## 语法

express.**ListLevels**

express   一个代表 **ListTemplate** 对象的变量。

## 类型

ListLevels

## 示例


```JavaScript
/*本示例将变量 listTemplate 设置为“格式”菜单上“项目符号和编号”对话框中“多级符号”选项卡上的第一个列表模板（不包括“无”选项）。该列表中的每一级别都有与其链接的匹配标题样式。*/
function test() {
    let listTemplate = Application.ListGalleries.Item(wdOutlineNumberGallery).ListTemplates.Item(1)
    for (let i = 1; i <= listTemplate.ListLevels.Count; i++) {
        let listLevel = listTemplate.ListLevels.Item(i)
        listLevel.LinkedStyle = "Heading" + listLevel.Index
    }
}
```


```JavaScript
/*此示例将活动文档中的第一个列表模板的第一个列表级别的起始编号设置为3。*/
function test() {
    ActiveDocument.ListTemplates.Item(1).ListLevels.Item(1).StartAt = 3
}
```
