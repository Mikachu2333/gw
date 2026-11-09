# Selection.End

返回或设置选定内容的结束字符的位置。 **Long** 类型，可读写。



## 语法

express.**End**

express   一个代表 **Selection** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果将该属性设置为小于 **Start** 属性的值，则 **Start** 属性将设置为同一值（即 **Start** 与 **End** 属性值相等）。

 **[Selection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/obj)** 对象具有起始位置和结束位置。结束位置是距离文字部分最远的点。该属性返回相对于文字部分的开始的结束字符位置。文档主要文字部分 ( **wdMainTextStory** ) 的起始字符位置为 0。通过设置该属性可以更改选定内容的大小。



## 示例


```JavaScript
/*本示例检索选定内容的结束位置。该值用于创建一个区域，以便在选定内容之后插入一个字段。*/
function test() {
    let end = Selection.End
    let range = ActiveDocument.Range(end, end)
    ActiveDocument.Fields.Add(range, wdFieldAuthor)
}
```


```JavaScript
/*本示例设置选定内容的结束字符的位置，并显示选定内容中的文本。*/
function test() {
    Application.Selection.End = 10
    alert(Application.Selection.Text)
}
```
