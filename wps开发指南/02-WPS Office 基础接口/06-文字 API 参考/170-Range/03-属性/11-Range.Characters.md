# Range.Characters

返回一个 **[Characters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Characters/obj)** 集合，该集合代表区域中的字符。只读。



## 语法

express.**Characters**

express   一个代表 **Range** 对象的变量。

## 类型

Characters

## 示例


```JavaScript
/*本示例将活动文档的主文章文档的第一个字符设置为加粗倾斜格式。*/
function test() {
    let range = ActiveDocument.Content.Characters.First
    range.Bold = msoTrue
    range.Italic = msoTrue
}
```


```JavaScript
/*本示例将所选内容中第三个字符字体颜色设置为红色。*/
function test() {
    Selection.Range.Characters.Item(3).Font.Color = RGB(255, 0, 0)
}
```
