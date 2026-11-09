# Selection.Find

返回一个 **[Find](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/obj)** 对象，该对象包含查找操作所需的条件。只读。



## 语法

express.**Find**

express   一个代表 **Selection** 对象的变量。

## 类型

Find

## 示例


```JavaScript
/*本示例在文档中向前搜索“Kingsoft”，如果找到了该单词，则自动将其选中。*/
function test() {
    let find = Selection.Find
    find.Forward = true
    find.ClearFormatting()
    find.MatchWholeWord = true
    find.MatchCase = false
    find.Wrap = wdFindContinue
    find.Execute("Kingsoft")
}
```


```JavaScript
/*本示例在文档中向前搜索指定文本“WPS Office”，如果查找成功，则为其添加批注*/
function test() {
    let find = Selection.Find
    find.Text = "WPS Office"
    find.Forward = true
    if (find.Execute()) {
        Selection.Comments.Add(Selection.Range, "这是一个批注")
    }
}
```
