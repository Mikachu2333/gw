# ListLevel.Index

返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。



## 语法

express.**Index**

express   一个代表 **ListLevel** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档上第一个列表模板的最后一个列表级别的索引。*/
function test() {
    let listLevels = ActiveDocument.ListTemplates.Item(1).ListLevels
    alert(listLevels.Item(listLevels.Count).Index)
}
```


```JavaScript
/*本示例将所选内容替换为“项目符号和编号”对话框中“多级符号”选项卡上第四个列表模板（不包括“无”选项）中最后一个列表级别的索引。*/
function test() {
    let listLevels = Application.ListGalleries.Item(wdOutlineNumberGallery).ListTemplates.Item(4).ListLevels
    Selection.Range.Text = listLevels.Item(listLevels.Count).Index
}
```
