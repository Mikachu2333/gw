# ListTemplate.Convert

将多级列表转换为单级列表，或将单级列表转换为多级列表。



## 语法

express.**Convert(Level)**

express   一个代表 **ListTemplate** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Level | 可选 | any | 新列表格式的级别。将多级列表转换为单级列表时，该参数可以是 1 至 9 之间的数字。将单级列表转换为多级列表时，1 是唯一的有效值。如果省略该参数，则默认值为 1。 |

## 返回值

ListTemplate

## 说明


不能在来源于 **ListGalleries** 集合的列表模板上使用 **Convert** 方法。



## 示例


```JavaScript
/*此示例转换活动文档中的第一个列表模板。如果列表模板是多级模板，则它变为单级，反之亦然。*/
function test() {
    ActiveDocument.ListTemplates.Item(1).Convert()
}
```


```JavaScript
/*此示例转换第一个文档中的最后一个列表模板。如果列表模板是多级模板，则它变为单级，反之亦然。*/
function test() {
    let listTemplates = Documents.Item(1).ListTemplates
    listTemplates.Item(listTemplates.Count).Convert()
}
```
