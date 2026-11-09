# Style.InUse

如果为 **True** ，则指定的样式是一个已在文档中修改或应用的内置样式，或者是在文档中新建的样式。 **Boolean** 类型，只读。



## 语法

express.**InUse**

express   一个代表 **Style** 对象的变量。

## 类型

boolean

## 说明


 **InUse** 属性并不一定表明该样式当前是否已应用于文档中的任何文本。例如，删除一个应用了该样式的文本后，该样式的 **InUse** 属性仍然为 **True** 。对于尚未在文档中使用过的内置样式，该属性返回 **False** 。



## 示例


```JavaScript
/*本示例显示一个消息框，列出活动文档中当前正在使用的所有样式的名称。*/
function test() {
    let styles = ActiveDocument.Styles
    let strMessage = "Styles in use:\n"
    for (let i = 1; i <= styles.Count; i++) {
        if (styles.Item(i).InUse) {
            let find = ActiveDocument.Content.Find
            find.ClearFormatting()
            find.Text = ""
            find.Style = styles.Item(i)
            find.Execute(null, null, null, null, null, null, null, null, true)
            if (find.Found) {
                strMessage += styles.Item(i).NameLocal + "\n"
            }
        }
    }
    alert(strMessage)
}
```


```JavaScript
/*本示例显示所选区域的样式的 InUse 属性值。*/
function test() {
    alert(Selection.Range.Style.InUse)
}
```
