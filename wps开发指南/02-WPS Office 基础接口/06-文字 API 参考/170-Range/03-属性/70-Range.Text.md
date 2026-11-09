# Range.Text

返回或设置指定区域中的文本。 **String** 类型，可读写。



## 语法

express.**Text**

express   一个代表 **Range** 对象的变量。

## 类型

string

## 说明


 **Text** 属性返回该区域的无格式纯文本。如果设置该属性，则将替换该区域中的现有文本。



## 示例


```JavaScript
/*本示例用“Dear”替换活动文档的第一个词。*/
function test() {
    let range = ActiveDocument.Words.Item(1)
    range.Text = 'Dear '
}
```


```JavaScript
/*本示例显示活动文档的所有段落的文本。*/
function test() {
    let paragraphs = ActiveDocument.Paragraphs
    let str = ""
    for (let i = 1; i <= paragraphs.Count; i++) {
        str += paragraphs.Item(i).Range.Text + "\n"
    }
    alert(str)
}
```
