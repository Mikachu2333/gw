# Workbook.TemplateRemoveExtData

如果工作簿保存为模板时删除外部数据引用，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**TemplateRemoveExtData**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将指定工作簿保存为不包含外部数据的模板。*/
function test() {
    ActiveWorkbook.TemplateRemoveExtData = true
    ActiveWorkbook.SaveAs("current", xlTemplate)
    ActiveWorkbook.TemplateRemoveExtData = false
}
```


```JavaScript
/*本示例将指定工作簿追加.xlt后缀另存为包含外部数据的模板，并告知用户TemplateRemoveExtData属性的数据类型。*/
function test() {
    ActiveWorkbook.TemplateRemoveExtData = false
    ActiveWorkbook.SaveAs(ActiveWorkbook.FullName + ".xlt", xlTemplate)
    alert(typeof ActiveWorkbook.TemplateRemoveExtData)
}
```
