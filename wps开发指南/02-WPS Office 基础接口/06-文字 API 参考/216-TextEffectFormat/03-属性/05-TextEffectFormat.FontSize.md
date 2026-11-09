# TextEffectFormat.FontSize

以磅为单位返回或设置指定的艺术字字体大小。 **Single** 类型，可读写。



## 语法

express.**FontSize**

express   一个代表 **TextEffectFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动文档中名为“Text1”的艺术字形状的字体大小设置为 16 磅。*/
function test() {
    ActiveDocument.Shapes("Text1").TextEffect.FontSize = 16
}
```


```JavaScript
/*本示例显示活动文档中第三个形状（需要是艺术字对象）的字体大小。*/
function test() {
    alert(ActiveDocument.Shapes(3).TextEffect.FontSize)
}
```
