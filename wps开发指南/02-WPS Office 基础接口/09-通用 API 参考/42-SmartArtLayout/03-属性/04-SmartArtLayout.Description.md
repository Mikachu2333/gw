# SmartArtLayout.Description

检索 SmartArt 布局的说明。只读。



## 语法

express.**Description**

express   一个代表 **SmartArtLayout** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例运行于演示组件，显示活动演示文稿的第一张幻灯片上第一个 SmartArt 图形的 SmartArt 布局的说明。*/
function test() {
    let smartArtLayout = ActivePresentation.Slides.Item(1).Shapes.Item(1).SmartArt.Layout
    alert(smartArtLayout.Description)
}
```


```JavaScript
/*本示例运行于各组件，显示最后一个 SmartArt 布局的名称和说明。*/
function test() {
    let smartArtLayouts = Application.SmartArtLayouts
    alert(`SmartArt 布局的名称：${smartArtLayouts.Item(smartArtLayouts.Count).Name}\nSmartArt 布局的说明：${smartArtLayouts.Item(smartArtLayouts.Count).Description}`)
}
```
