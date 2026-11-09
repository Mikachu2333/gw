# TextEffectFormat.Text

返回或设置指定对象中的文本。 **String** 型，可读写。



## 语法

express.**Text**

express   一个代表 **TextEffectFormat** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例将第一张工作表中第三个艺术字的文本设置成“示例文本”。*/
function test() {
    let shape = Application.Worksheets.Item(1).Shapes.Item(3)
    shape.TextEffect.Text = "示例文本"
}
```


```JavaScript
/*此示例显示活动工作表的第四个艺术字的文本。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(4)
    alert(shape.TextEffect.Text)
}
```
