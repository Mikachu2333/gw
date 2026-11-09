# Document.EmbedTrueTypeFonts

如果在保存文档时，WPS 在文档中嵌入 TrueType 字体，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**EmbedTrueTypeFonts**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 说明


通过嵌入 TrueType 字体，其他人可以使用创建文档时所用的字体来查看该文档。



## 示例


```JavaScript
/*本示例设置 WPS 在保存文档时，在文档中自动嵌入 TrueType 字体，然后保存活动文档。*/
function test() {
    ActiveDocument.EmbedTrueTypeFonts = true
    ActiveDocument.Save()
}
```


```JavaScript
/*本示例显示“选项”对话框中“常规与保存”选项卡上“保存选项”区域中“将字体嵌入文件”复选框的当前状态。*/
function test() {
    let temp = ActiveDocument.EmbedTrueTypeFonts
    alert(temp)
}
```
