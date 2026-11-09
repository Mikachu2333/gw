# Style.ListTemplate

返回一个 **ListTemplate** 对象，该对象代表指定 **Style** 对象的列表格式。



## 语法

express.**ListTemplate**

express   一个代表 **Style** 对象的变量。

## 类型

ListTemplate

## 说明


一个列表模板包含定义特定列表的所有格式。 **“项目符号和编号”** 对话框（ **“格式”** 菜单）中的每个选项卡上有七种格式（不包括 **“无”** ），每一种格式对应于一个列表模板。文档和模板也可以包含列表模板的集合。



## 示例


```JavaScript
/*本示例显示活动文档上名为“标题 1”的样式的列表模板的第一个列表级别的对齐方式是否为wdListLevelAlignLeft。*/
function test() {
    let listLevel = ActiveDocument.Styles.Item("标题 1").ListTemplate.ListLevels.Item(1)
    alert(listLevel.Alignment == wdListLevelAlignLeft)
}
```


```JavaScript
/*本示例显示所选内容的样式的列表模板是否为多级符号列表。*/
function test() {
    alert(Selection.Style.ListTemplate.OutlineNumbered)
}
```
