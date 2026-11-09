# ListLevels 对象

 **ListLevel** 对象的集合，该集合代表列表模板中的所有列表级别，其中的列表级别可以是项目符号或编号列表的唯一级别，也可以是多级符号列表中的九个级别之一。

## 说明


使用 **ListLevels** 属性可返回 **ListLevels** 集合。


## 示例


```JavaScript
/*本示例将变量 listTemplate 设置为活动文档中的第一个列表模板，并对每一级别进行修改，使其编号样式采用小写字母。*/
function test() {
    let listTemplate = ActiveDocument.ListTemplates.Item(1)
    for (let i = 1; i <= listTemplate.ListLevels.Count; i++) {
        listTemplate.ListLevels.Item(i).NumberStyle = wdListNumberStyleLowercaseLetter
    }
}
```
使用 **ListLevels** (_Index_) 可返回一个 **[ListLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListLevel/obj)** 对象，其中 _Index_ 是从 1 到 9 的数字。



```JavaScript
/*本示例将活动文档中第一个列表模板的第一个列表级别的起始编号设置为4。*/
function test() {
    ActiveDocument.ListTemplates.Item(1).ListLevels.Item(1).StartAt = 4
}
```
不能在列表模板中添加新级别。

要应用列表级别，请首先标识范围或列表，然后使用 **ApplyListTemplate** 方法。段落开头的每个制表符转换为一个列表级别。例如，在使用 **ApplyListTemplate** 方法后，以三个制表符开头的段落将成为三级列表段落。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListLevels/member/Item) | 返回集合中的单个 **ListLevel** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListLevels/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中列表级别的数目。只读。 |