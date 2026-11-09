# Presentation.SnapToGrid

该属性值为 **msoTrue** 时，在指定的演示文稿中将形状与网格线对齐。可读/写， **MsoTriState** 类型。



## 语法

express.**SnapToGrid**

express   一个代表 **Presentation** 对象的变量。

## 类型

MsoTriState

## 说明


 **SnapToGrid** 可以是下列 **MsoTriState** 常量之一：

|                                     |
| ----------------------------------- |
| **msoFalse**                        |
| **msoTrue**                         |



## 示例


```JavaScript
/*本示例切换在活动演示文稿中形状与网格线的对齐设置。*/
function test() {
    let presentation = Application.ActivePresentation
    if (presentation.SnapToGrid == msoTrue) {
        presentation.SnapToGrid = msoFalse
    } else {
        presentation.SnapToGrid = msoTrue
    }
}
```


```JavaScript
/*本示例判断第一篇演示文稿中网格线的对齐状态，并通知用户。*/
function test() {
    if (Presentations(1).SnapToGrid == msoTrue) {
        alert("该演示文稿中形状与网格线对齐。")
    } else {
        alert("该演示文稿中形状未与网格线对齐。")
    }
}
```
