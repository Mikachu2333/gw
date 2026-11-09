# Template.ListTemplates

返回一个 **ListTemplates** 集合，该集合代表指定文档、模板或列表库的所有列表格式。只读。



## 语法

express.**ListTemplates**

express   一个代表 **Template** 对象的变量。

## 类型

ListTemplates

## 说明


 **ListTemplates** 属性是 **Document** 、 **ListGallery** 和 **Template** 对象的成员。



## 示例


```JavaScript
/*此示例显示附加到活动文档的模板中第一个列表模板的第一个列表级别的起始编号。*/
function test() {
    let listTemplate = ActiveDocument.AttachedTemplate.ListTemplates.Item(1)
    alert(listTemplate.ListLevels.Item(1).StartAt)
}
```


```JavaScript
/*此示例显示第一个模板的列表模板的数量。*/
function test() {
    alert(Templates.Item(1).ListTemplates.Count)
}
```
