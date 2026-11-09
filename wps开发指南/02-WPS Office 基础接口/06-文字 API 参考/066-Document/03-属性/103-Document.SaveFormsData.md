# Document.SaveFormsData

如果 WPS 将输入到一个窗体中的数据作为以制表位分隔的记录保存以供数据库使用，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**SaveFormsData**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 只保存活动文档中输入到一个窗体中的数据。*/
function test() {
    ActiveDocument.SaveFormsData = true
}
```


```JavaScript
/*本示例显示活动文档的 SaveFormsData 属性值。*/
function test() {
    let saveFormsData = ActiveDocument.SaveFormsData
    alert(saveFormsData)
}
```
