# ListGallery.ListTemplates

返回一个 **ListTemplates** 集合，该集合代表指定列表库的所有列表格式。只读。



## 语法

express.**ListTemplates**

express   一个代表 **ListGallery** 对象的变量。

## 类型

ListTemplates

## 说明


有关返回集合的单个成员的信息，请参阅从集合中返回对象。 **ListTemplates** 属性是 **Document** 、 **ListGallery** 和 **Template** 对象的成员。



## 示例


```JavaScript
/*本示例将变量 listTemplates 设置为“项目符号和编号”对话框中“多级符号”选项卡上的第一个列表模板。将该模板的每个级别都改用小写字母，然后应用于活动文档中的第二个列表。*/
function test() {
    let listTemplates = Application.ListGalleries(wdOutlineNumberGallery).ListTemplates(1)
    for (let i = 1; i <= listTemplates.ListLevels.Count; i++) {
        listTemplates.ListLevels.Item(i).NumberStyle = wdListNumberStyleLowercaseLetter
    }
    ActiveDocument.Lists.Item(2).ApplyListTemplate(listTemplates)
}
```


```JavaScript
/*本示例显示编号列表中列表模板的数量。*/
function test() {
    alert(Application.ListGalleries(wdNumberGallery).ListTemplates.Count)
}
```
