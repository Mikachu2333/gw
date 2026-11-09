# TextEffectFormat.FontName

返回或设置指定艺术字的字体名称。 **String** 类型，可读写。



## 语法

express.**FontName**

express   一个代表 **TextEffectFormat** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示第一个文档的第一个艺术字形状的字体名称。*/
function test() {
    alert(Documents.Item(1).Shapes.Item(1).TextEffect.FontName)
}
```


```JavaScript
/*本示例将活动文档中第二个形状（需要是艺术字对象）的字体设置为宋体*/
function test() {
    ActiveDocument.Shapes.Item(2).TextEffect.FontName = "宋体"
}
```
