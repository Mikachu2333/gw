# TextEffectFormat.KernedPairs

如果指定艺术字中的字符对是自动缩紧的，则该属性值为 **msoTrue** 。 **MsoTriState** 类型，可读写。



## 语法

express.**KernedPairs**

express   一个代表 **TextEffectFormat** 对象的变量。

## 类型

MsoTriState

## 说明


| **MsoTriState** 可以是下列 **MsoTriState** 常量之一。 |
| ------------------------------------------ |
| **msoCTrue**                               |
| **msoFalse**                               |
| **msoTriStateMixed**                       |
| **msoTriStateToggle**                      |
| **msoTrue** 指定艺术字中的字符对自动紧缩。                 |



## 示例


```JavaScript
/*本示例打开第一张工作表中第三个形状（如果该形状为艺术字）的字符对自动紧缩。*/
function test() {
    let worksheet = Application.Worksheets.Item(1)
    let shape = worksheet.Shapes.Item(3)
    if (shape.Type == msoTextEffect) {
        shape.TextEffect.KernedPairs = msoTrue
    }
}
```


```JavaScript
/*此示例显示活动工作表的第二个艺术字的字符对是否打开自动紧缩。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    alert(shape.TextEffect.KernedPairs == msoTrue)
}
```
