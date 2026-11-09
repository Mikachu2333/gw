# Replacement.Highlight

如果将突出显示格式应用于替换文本，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。



## 语法

express.**Highlight**

express   一个代表 **Replacement** 对象的变量。

## 类型

number（int4 精度）

## 说明


可返回或设置为 **msoTrue** 、 **msoFalse** 或 **wdUndefined** 。



## 示例


```JavaScript
/*本示例查找活动文档中所有突出显示的文本，并将 Replacement 对象的 Highlight 属性设置为 msoFalse，删除突出显示格式。*/
function test() {
    let find = ActiveDocument.Range(0, 0).Find
    find.ClearFormatting()
    find.Highlight = msoTrue
    let replacement = find.Replacement
    replacement.ClearFormatting()
    replacement.Highlight = msoFalse
    find.Execute("", null, null, null, null, null, true, null, true, "", wdReplaceAll)
}
```


```JavaScript
/*本示例显示是否将突出显示格式应用于替换所选内容。*/
function test() {
    alert(Selection.Find.Replacement.Highlight === msoTrue)
}
```
