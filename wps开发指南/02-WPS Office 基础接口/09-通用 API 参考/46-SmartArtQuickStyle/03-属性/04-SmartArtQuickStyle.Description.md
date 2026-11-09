# SmartArtQuickStyle.Description

检索 SmartArt 快速样式的说明。只读。



## 语法

express.**Description**

express   一个代表 **SmartArtQuickStyle** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例运行于演示组件，显示活动演示文稿的第一张幻灯片上第一个 SmartArt 图形的快速样式的说明。*/
function test() {
    let smartArt = ActivePresentation.Slides.Item(1).Shapes.Item(1).SmartArt
    alert(smartArt.QuickStyle.Description)
}
```


```JavaScript
/*本示例运行于各组件，显示第二个 SmartArt 快速样式的说明。*/
function test() {
    let smartArtQuickStyle = Application.SmartArtQuickStyles.Item(2)
    alert(smartArtQuickStyle.Description)
}
```
