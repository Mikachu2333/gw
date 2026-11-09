# SmartArtLayout.Id

检索关联的 SmartArt 布局的唯一 Id。只读。



## 语法

express.**Id**

express   一个代表 **SmartArtLayout** 对象的变量。

## 类型

string

## 说明


与此属性关联的 ID 区分大小写。



## 示例


```JavaScript
/*本示例运行于演示组件，显示活动窗口上所选的第一张幻灯片上第一个 SmartArt 图形的 SmartArt 布局的唯一 Id。*/
function test() {
    let smartArtLayout = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1).SmartArt.Layout
    alert(smartArtLayout.Id)
}
```


```JavaScript
/*本示例运行于各组件，显示第一个 SmartArt 布局的名称和唯一 Id。*/
function test() {
    let smartArtLayouts = Application.SmartArtLayouts
    alert(`SmartArt 布局的名称：${smartArtLayouts.Item(1).Name}\nSmartArt 布局的唯一 Id：${smartArtLayouts.Item(1).Id}`)
}
```
