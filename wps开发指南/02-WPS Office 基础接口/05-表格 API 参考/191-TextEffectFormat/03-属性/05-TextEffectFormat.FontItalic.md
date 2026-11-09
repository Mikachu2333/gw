# TextEffectFormat.FontItalic

如果指定艺术字中的字体是倾斜的，则返回 **msoTrue** 。 **MsoTriState** 类型，可读写。



## 语法

express.**FontItalic**

express   一个代表 **TextEffectFormat** 对象的变量。

## 类型

MsoTriState

## 说明


| **MsoTriState** 可以是下列 **MsoTriState** 常量之一。 |
| ------------------------------------------- |
| **msoCTrue** 不应用于该属性。                       |
| **msoFalse** 指定的艺术字对象中的文字不是倾斜的。             |
| **msoTriStateMixed** 不应用于该属性。               |
| **msoTriStateToggle** 不应用于该属性。              |
| **msoTrue** 指定的艺术字对象中的文字是倾斜的。               |



## 示例


```JavaScript
/*本示例将第一张工作表中第四个形状的字体设置为斜体。*/
function test() {
    let worksheet = Application.Worksheets.Item(1)
    worksheet.Shapes.Item(4).TextEffect.FontItalic = msoTrue
}
```


```JavaScript
/*此示例显示活动工作表的第二个艺术字是否为斜体。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    alert(shape.TextEffect.FontItalic == msoTrue)
}
```
