# ListLevel.StartAt

返回或设置指定 **ListLevel** 对象的起始编号。 **Long** 类型，可读写。



## 语法

express.**StartAt**

express   一个代表 **ListLevel** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例为第三个多级符号列表模板设置编号样式和起始编号。在本示例中，因为编号样式使用大写字母且起始编号为 4，所以第一个字母为 D。*/
function test() {
    let listLevel = Application.ListGalleries.Item(wdOutlineNumberGallery).ListTemplates.Item(3).ListLevels.Item(1)
    listLevel.NumberStyle = wdListNumberStyleUppercaseLetter
    listLevel.StartAt = 4
}
```


```JavaScript
/*本示例显示第一个文档上第一个列表模板的第一个列表级别的起始编号。*/
function test() {
    let listLevel = Documents.Item(1).ListTemplates.Item(1).ListLevels.Item(1)
    alert(listLevel.StartAt)
}
```
