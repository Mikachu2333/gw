# TextEffectFormat.FontSize

以磅为单位返回或设置指定艺术字的字体大小。 **Single** 类型，可读写。



## 语法

express.**FontSize**

express   一个代表 **TextEffectFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将第一张工作表中第四个艺术字的字号设置为 16 磅。*/
function test() {
    let worksheet = Application.Worksheets.Item(1)
    worksheet.Shapes.Item(4).TextEffect.FontSize = 16
}
```


```JavaScript
/*此示例显示活动工作表的第二个艺术字的字号。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    alert(shape.TextEffect.FontSize)
}
```
