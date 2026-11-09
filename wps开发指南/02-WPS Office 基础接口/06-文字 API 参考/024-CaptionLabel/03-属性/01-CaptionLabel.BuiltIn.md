# CaptionLabel.BuiltIn

如果指定的题注标签是 WPS 的内置题注标签之一，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**BuiltIn**

express   一个代表 **CaptionLabel** 对象的变量。

## 类型

boolean

## 说明


可用 **WdBuiltinStyle** 常量指定所有语言通用的内置样式，也可用 WPS的某个语言版本的样式名来指定某种语言使用的内置样式。例如，如果在 WPS Office 的语言设置中指定美式英语，则下列语句是等效的：

```JavaScript
ActiveDocument.Styles(wdStyleHeading1)
ActiveDocument.Styles("Heading 1")
```



## 示例


```JavaScript
/*本示例显示所有非内置题注标签的名称。*/
function test() {
    for (let i = 1; i <= Application.CaptionLabels.Count; i++) {
        let captionLabel = Application.CaptionLabels.Item(i)
        if (!captionLabel.BuiltIn) {
            alert(captionLabel.Name)
        }
    }
}
```


```JavaScript
/*本示例显示内置题注标签的数量。*/
function test() {
    let num = 0
    for (let i = 1; i <= Application.CaptionLabels.Count; i++) {
        let captionLabel = Application.CaptionLabels.Item(i)
        if (captionLabel.BuiltIn) {
            num++
        }
    }
    alert(`内置题注标签的数量：${num}`)
}
```
