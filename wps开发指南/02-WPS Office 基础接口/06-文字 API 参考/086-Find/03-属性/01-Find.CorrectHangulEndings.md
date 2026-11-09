# Find.CorrectHangulEndings

如果 WPS 在替换朝鲜文字文本时，自动更正朝鲜文字结尾，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**CorrectHangulEndings**

express   一个代表 **Find** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例设置所选内容在替换朝鲜文字文本时WPS自动更正朝鲜文字结尾。*/
function test() {
    let find = Selection.Find
    find.Forward = true
    find.Wrap = wdFindContinue
    find.Format = false
    find.CorrectHangulEndings = true
}
```


```JavaScript
/*本示例显示活动文档的主文档文章在替换朝鲜文字文本时WPS是否自动更正朝鲜文字结尾。*/
function test() {
    alert(ActiveDocument.Content.Find.CorrectHangulEndings)
}
```
