# TextEffectFormat.FontBold

如果指定艺术字中的字体格式为加粗，则该属性值为 **msoTrue** 。 **MsoTriState** 类型，可读写。



## 语法

express.**FontBold**

express   一个代表 **TextEffectFormat** 对象的变量。

## 类型

MsoTriState

## 说明


| **MsoTriState** 可以是下列 **MsoTriState** 常量之一。 |
| ------------------------------------------- |
| **msoCTrue**                                |
| **msoFalse**                                |
| **msoTriStateMixed**                        |
| **msoTriStateToggle**                       |
| **msoTrue** 指定的艺术字为粗体。                      |



## 示例


```JavaScript
/*如果第一张工作表上的第三个形状为艺术字，本示例将该形状的字体加粗。*/
function test() {
    let worksheet = Application.Worksheets.Item(1)
    let shape = worksheet.Shapes.Item(3)
    if (shape.Type == msoTextEffect) {
        shape.TextEffect.FontBold = msoTrue
    }
}
```


```JavaScript
/*此示例显示活动工作表的第二个艺术字的字体是否加粗。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    alert(shape.TextEffect.FontBold == msoTrue)
}
```
