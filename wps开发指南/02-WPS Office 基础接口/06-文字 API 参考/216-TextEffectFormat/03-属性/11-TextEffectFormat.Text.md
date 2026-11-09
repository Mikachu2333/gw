# TextEffectFormat.Text

返回或设置指定对象中的文本。 **String** 类型，可读写。



## 语法

express.**Text**

express   一个代表 **TextEffectFormat** 对象的变量。

## 类型

string

## 说明


 **Text** 属性返回选定内容或区域的无格式纯文本。设置该属性，可替换该区域或选定内容的文本。



## 示例


```JavaScript
/*本示例将向所有的艺术字对象插入“text”文本。*/
function test() {
    for (let i = 1; i <= ActiveDocument.Shapes.Count; i++) {
        if (ActiveDocument.Shapes.Item(i).Type == msoTextEffect) {
            ActiveDocument.Shapes.Item(i).TextEffect.Text += 'text'
        }
    }
}
```


```JavaScript
/*本示例显示选中的第一个艺术字的文本。*/
function test() {
    alert(Selection.ShapeRange.Item(1).TextEffect.Text)
}
```
