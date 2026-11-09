# Style.ListLevelNumber

返回指定样式的列表级别。只读 **Long** 类型。



## 语法

express.**ListLevelNumber**

express   一个代表 **Style** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示“标题 3”样式的列表级别。*/
function test() {
    alert(ActiveDocument.Styles.Item(wdStyleHeading3).ListLevelNumber)
}
```


```JavaScript
/*本示例设置所选内容的样式与“项目符号和编号”对话框中“多级符号”选项卡上第一个列表模板相链接，然后显示所选内容的样式的列表级别。*/
function test() {
    let listTemplate = Application.ListGalleries.Item(wdOutlineNumberGallery).ListTemplates.Item(1)
    Selection.Style.LinkToListTemplate(listTemplate)
    alert(Selection.Style.ListLevelNumber)
}
```
