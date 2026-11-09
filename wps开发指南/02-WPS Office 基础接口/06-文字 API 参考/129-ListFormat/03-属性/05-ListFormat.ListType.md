# ListFormat.ListType

返回指定的 **ListFormat** 对象区域中所包含的列表类型。 **WdListType** 类型，只读。



## 语法

express.**ListType**

express   一个代表 **ListFormat** 对象的变量。

## 类型

WdListType

## 说明


 **wdListListNumOnly** 常量引用 LISTNUM 域，可将该域添至段落的文本中。



## 示例


```JavaScript
/*本示例判断如果活动文档的第一个列表是一个简单的编号列表，则应用“开始”菜单上“项目符号和编号”对话框中“编号”选项卡上的第四个列表模板。*/
function test() {
    let list = ActiveDocument.Lists.Item(1)
    if (list.Range.ListFormat.ListType == wdListSimpleNumbering) {
        list.ApplyListTemplate(ListGalleries(wdNumberGallery).ListTemplates(4))
    }
}
```


```JavaScript
/*本示例显示所选段落的列表类型是否为wdListOutlineNumbering。*/
function test() {
    alert(Selection.Range.ListFormat.ListType == wdListOutlineNumbering)
}
```
