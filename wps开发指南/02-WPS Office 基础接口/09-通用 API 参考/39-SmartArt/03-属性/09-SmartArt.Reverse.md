# SmartArt.Reverse

获取或设置 SmartArt 图表与（从左到右）LTR 或（从右到左）RTL（如果该图表支持反向）有关的状态。可读/写。



## 语法

express.**Reverse**

express   一个代表 **SmartArt** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例运行于演示组件，显示活动窗口中所选的第一张幻灯片的第一个 SmartArt 图形是否为从右向左的状态。*/
function test() {
    let smartArt = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1).SmartArt
    alert(smartArt.Reverse === msoTrue)
}
```


```JavaScript
/*本示例运行于演示组件，将活动演示文稿的第一张幻灯片上第一个 SmartArt 图形设置为从左向右的状态。*/
function test() {
    let smartArt = ActivePresentation.Slides.Item(1).Shapes.Item(1).SmartArt
    smartArt.Reverse = msoFalse
}
```
