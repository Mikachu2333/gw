# Find.MatchCase

如果为 **True** ，则查找操作区分大小写。默认值为 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**MatchCase**

express   一个代表 **Find** 对象的变量。

## 类型

boolean

## 说明


使用 **Find** 对象的 **[Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/Text)** 属性或将 *FindText* 参数与 **[Execute](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/Execute)** 方法一起使用，以指定要在文档中查找的文本。



## 示例


```JavaScript
/*本示例选定在选定内容中找到的下一个“library”，查找时不区分大小写。*/
function test() {
    let find = Selection.Find
    find.ClearFormatting()
    find.MatchWholeWord = true
    find.MatchCase = false
    find.Execute("library")
}
```


```JavaScript
/*此示例显示活动文档的主文档文章的搜索选项中是否区分大小写。*/
function test() {
    alert(ActiveDocument.Content.Find.MatchCase)
}
```
