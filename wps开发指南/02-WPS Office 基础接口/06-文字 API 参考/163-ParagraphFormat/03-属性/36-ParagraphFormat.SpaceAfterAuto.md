# ParagraphFormat.SpaceAfterAuto

如果 WPS 自动设置指定段落的段后间距，则该属性为 **msoTrue** 。可读/写 **Long** 类型。



## 语法

express.**SpaceAfterAuto**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果仅将部分指定段落的 **SpaceAfterAuto** 属性设置为 **msoTrue** ，则返回 **wdUndefined** 。该属性可被设置为 **msoTrue** 或 **msoFalse** 。

如果将 **SpaceAfterAuto** 设置为 **msoTrue** ，则 **SpaceAfter** 属性将被忽略。



## 示例


```JavaScript
/*本示例显示活动文档的 SpaceAfterAuto 属性设置的报告。*/
function test() {
    switch (ActiveDocument.Range().ParagraphFormat.SpaceAfterAuto) {
        case msoTrue:
            alert("Spacing after paragraphs is handled automatically for all paragraphs.")
            break
        case msoFalse:
            alert("Spacing after paragraphs is handled manually for all paragraphs.")
            break
        case wdUndefined:
            alert("Spacing after paragraphs is handled automatically for some paragraphs,manually for some paragraphs.")
            break
    }
}
```


```JavaScript
/*本示例关闭 WPS 自动设置所选段落的段后间距。*/
function test() {
    Selection.ParagraphFormat.SpaceAfterAuto = msoFalse
}
```
