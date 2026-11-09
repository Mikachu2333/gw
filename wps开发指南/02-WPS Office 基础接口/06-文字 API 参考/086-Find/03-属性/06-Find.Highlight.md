# Find.Highlight

如果在查找条件中包含突出显示格式，则该属性值为 **msoCTrue** 。 **Long** 类型，可读写。



## 语法

express.**Highlight**

express   一个代表 **Find** 对象的变量。

## 类型

number（int4 精度）

## 说明


 **Highlight** 属性可返回或设置为 **msoCTrue** 、 **msoFalse** 或 **wdUndefined** 。 **wdUndefined** 值可用于 **Find** 对象，以忽略要搜索的选定内容或区域中的突出显示格式状态。



## 示例


```JavaScript
/*此示例在活动文档的主文档文章中查找高亮文本，并通过将 Replacement 对象的 Highlight 属性设置为 msoFalse 来删除高亮格式。*/
function test() {
    let find = ActiveDocument.Content.Find
    find.ClearFormatting()
    find.Highlight = msoCTrue
    find.Replacement.ClearFormatting()
    find.Replacement.Highlight = msoFalse
    find.Execute("", null, null, null, null, null, true, null, true, "", wdReplaceAll)
}
```


```JavaScript
/*本示例显示所选内容的查找操作中是否包含突出显示格式。*/
function test() {
    alert(Selection.Find.Highlight === msoCTrue)
}
```
