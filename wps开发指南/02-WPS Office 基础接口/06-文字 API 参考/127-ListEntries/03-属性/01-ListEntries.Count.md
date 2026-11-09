# ListEntries.Count

返回一个 **Long** 类型的值，该值代表集合中列表条目的数量。只读。



## 语法

express.**Count**

express   一个代表 **ListEntries** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档上第一个下拉型窗体域中项目的数量。*/
function test() {
    let listEntries = ActiveDocument.FormFields.Item(1).DropDown.ListEntries
    alert(listEntries.Count)
}
```
