# Style.BuiltIn

如果指定对象是 WPS 的内置样式或题注标签之一，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**BuiltIn**

express   一个代表 **Style** 对象的变量。

## 类型

boolean

## 说明


可用 **WdBuiltinStyle** 常量指定所有语言通用的内置样式，也可用 WPS 的某个语言版本的样式名来指定某种语言使用的内置样式。例如，如果在 WPS Office 的语言设置中指定简体中文，则下列语句是等效的：

```JavaScript
ActiveDocument.Styles.Item(wdStyleHeading1)
ActiveDocument.Styles.Item("标题 1")
```



## 示例


```JavaScript
/*本示例检查活动文档中的所有样式，当它找到非内置样式时，会显示样式的名称。*/
function test() {
    let styles = ActiveDocument.Styles
    for (let i = 1; i <= styles.Count; i++) {
        if (!styles.Item(i).BuiltIn) {
            alert(styles.Item(i).NameLocal)
        }
    }
}
```


```JavaScript
/*本示例在第一个文档中插入所有内置样式的说明。*/
function test() {
    let styles = Documents.Item(1).Styles
    for (let i = 1; i <= styles.Count; i++) {
        if (styles.Item(i).BuiltIn) {
            Selection.TypeText(styles.Item(i).Description + "\n")
        }
    }
}
```
