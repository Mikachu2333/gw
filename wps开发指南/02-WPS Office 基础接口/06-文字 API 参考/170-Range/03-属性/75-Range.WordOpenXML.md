# Range.WordOpenXML

返回一个 **String** 类型的值，该值以 WPS Open XML 格式表示区域中包含的 XML。只读。



## 语法

express.**WordOpenXML**

express   一个代表 **Range** 对象的变量。

## 类型

string

## 说明


此属性只返回文档中为表示指定区域所需的 XML。



## 示例


```JavaScript
/*本示例显示以 WPS Open XML 格式表示的所选区域中包含的 XML。*/
function test() {
    alert(Selection.Range.WordOpenXML)
}
```


```JavaScript
/*本示例将以 WPS Open XML 格式表示的活动文档的主文章文档中包含的 XML 插入到新文档中。*/
function test() {
    let strXML = ActiveDocument.Content.WordOpenXML
    Documents.Add()
    Selection.TypeText(strXML)
}
```
