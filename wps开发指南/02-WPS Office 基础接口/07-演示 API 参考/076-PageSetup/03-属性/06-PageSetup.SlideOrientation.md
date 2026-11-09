# PageSetup.SlideOrientation

返回或设置指定演示文稿中幻灯片的屏幕显示和打印方向。可读/写。



## 语法

express.**SlideOrientation**

express   一个代表 **PageSetup** 对象的变量。

## 类型

MsoOrientation

## 说明


 **SlideOrientation** 属性的值可以是下列 **MsoOrientation** 常量之一：

| **常量** |
| ----------------------------------------- |
| **msoOrientationHorizontal**              |
| **msoOrientationMixed**                   |
| **msoOrientationVertical**                |



## 示例


```JavaScript
/*本示例将活动演示文稿所有幻灯片的方向设为垂直（纵向）。*/
function test() {
    ActivePresentation.PageSetup.SlideOrientation = msoOrientationVertical
}
```


```JavaScript
/*本示例显示第一个演示文稿的所有幻灯片的展示或打印时的方向。*/
function test() {
    switch (Presentations.Item(1).PageSetup.SlideOrientation) {
        case msoOrientationHorizontal:
            alert("水平方向（横向）")
            break
        case msoOrientationMixed:
            alert("混和方向")
            break
        case msoOrientationVertical:
            alert("垂直方向（纵向）")
            break
    }
}
```
