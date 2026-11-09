# TextColumns.SetCount

将文字编排为指定数量的文本栏。



## 语法

express.**SetCount(NumColumns)**

express   一个代表 **TextColumns** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| NumColumns | 必选 | number（int4 精度） | 用来编排文字的文本栏的数目。 |

## 返回值

void

## 说明


还可以使用 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextColumns/member/Add)** 方法将一栏添加到 **TextColumns** 集合。



## 示例


```JavaScript
/*本示例将活动文档中的文字排列为两个等宽的文本栏。*/
function test() {
    ActiveDocument.PageSetup.TextColumns.SetCount(2)
}
```


```JavaScript
/*本示例将文档“example.docx”的第一节中的文字排列为三个等宽的文本栏。*/
function test() {
    Documents.Item("example.docx").Sections.Item(1).PageSetup.TextColumns.SetCount(3)
}
```
