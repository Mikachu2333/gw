# Paragraph.SpaceBeforeAuto

如果 WPS 自动设置指定段落的段前间距，则该属性为 **msoTrue** 。可读/写 **Long** 类型。



## 语法

express.**SpaceBeforeAuto**

express   一个代表 **Paragraph** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果仅将部分指定段落的 **SpaceBeforeAuto** 属性设置为 **msoTrue** ，则该属性返回 **wdUndefined** 。该属性可被设置为 **msoTrue** 或 **msoFalse** 。

如果将 **SpaceBeforeAuto** 设置为 **msoTrue** ，则 **SpaceBefore** 属性将被忽略。



## 示例


```JavaScript
/*本示例显示活动文档中第一段的 SpaceBeforeAuto 属性设置的报告。*/
function test() {
    let spaceBeforeAuto = ActiveDocument.Paragraphs.Item(1).SpaceBeforeAuto
    switch (spaceBeforeAuto) {
        case msoTrue:
            alert("Spacing before paragraphs is handled automatically for all paragraphs.")
            break
        case msoFalse:
            alert("Spacing before paragraphs is handled manually for all paragraphs.")
            break
        case wdUndefined:
            alert("Spacing before paragraphs is handled automatically for some paragraphs, manually for some paragraphs.")
            break
    }
}
```


```JavaScript
/*本示例自动设置活动文档的第二段的段前间距。*/
function test() {
    ActiveDocument.Paragraphs.Item(2).SpaceBeforeAuto = msoTrue
}
```
