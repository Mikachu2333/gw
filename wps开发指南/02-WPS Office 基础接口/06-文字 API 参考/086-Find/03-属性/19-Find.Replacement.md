# Find.Replacement

返回一个 **[Replacement](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Replacement/obj)** 对象，该对象包含了一次替换操作所需的条件。



## 语法

express.**Replacement**

express   一个代表 **Find** 对象的变量。

## 类型

Replacement

## 示例


```JavaScript
/*本示例取消活动文档中的加粗格式，对于Find对象，Font对象的Bold属性为msoTrue；对于Replacement对象，该属性为msoFalse。*/
function test() {
    let find = ActiveDocument.Content.Find
    find.ClearFormatting()
    find.Font.Bold = msoTrue
    find.Replacement.ClearFormatting()
    find.Replacement.Font.Bold = msoFalse
    find.Execute("", null, null, null, null, null, null, null, true, "", wdReplaceAll)
}
```


```JavaScript
/*本示例将在活动文档中查找到的“Start”替换为“End”。查找操作忽略查找文字的格式，但大小写需要匹配（“Start”）。*/
function test() {
    let find = ActiveDocument.Range().Find
    find.ClearFormatting()
    find.Text = "Start"
    find.Replacement.ClearFormatting()
    find.Replacement.Text = "End"
    find.Execute(null, true, true, null, null, null, null, null, true, null, wdReplaceAll)
}
```
