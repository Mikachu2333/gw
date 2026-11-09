# TableStyles 对象

代表可应用于表格的样式。

## 说明


表格样式提供了一种为整个表格或数据透视图设置格式的方式。表格样式取代了用于为整个表格设置格式的现有的自动套用格式功能。

表格样式与自动套用格式在以下几个方面不同：

* 可以创建和重用自定义表格样式。
* 表格样式可处理主题。
* 如果更改文档主题的配色方案和/或字体方案，则将更改内置表格样式的外观。
* 当对象发生变化时，表格样式可以将样式重新应用于像数据透视表和表格之类的对象。该表格将记住应用于对象的样式，在添加、删除、隐藏和显示单元格时，表格将相应地进行重新显示。
* 表格样式在功能区中具有可见的用户界面。


## 示例


```JavaScript
/*本示例显示第一张工作簿中所使用的样式数量。*/
function test() {
    alert(Workbooks.Item(1).TableStyles.Count)
}
```


```JavaScript
/*本示例向活动工作簿的表格样式中添加“样式1”。*/
function test() {
    ActiveWorkbook.TableStyles.Add("样式1")
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyles/member/Add) | 创建新的 **TableStyle** 对象，并将其添加到集合中。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyles/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyles/member/Application) | 如果不与对象识别符一起使用，则此属性返回代表 ET 应用程序的 **Application** 对象。如果与对象识别符一起使用，则此属性返回代表指定对象的创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyles/member/Count) | 返回集合中对象的数目。只读 **Long** 类型。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyles/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyles/member/Parent) | 返回指定对象的父对象。只读 |