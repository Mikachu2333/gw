# SmartArtQuickStyle.Id

检索关联的 SmartArt 快速样式的唯一 Id。只读。



## 语法

express.**Id**

express   一个代表 **SmartArtQuickStyle** 对象的变量。

## 类型

string

## 说明


与此属性关联的 ID 区分大小写。



## 示例


```JavaScript
/*本示例运行于演示组件，显示活动演示文稿的第一张幻灯片上第一个 SmartArt 图形的唯一 Id。*/
function test() {
    let smartArt = ActivePresentation.Slides.Item(1).Shapes.Item(1).SmartArt
    alert(smartArt.QuickStyle.Id)
}
```


```JavaScript
/*本示例运行于各组件，显示第一个 SmartArt 快速样式的名称和唯一 ID。*/
function test() {
    let smartArtQuickStyle = Application.SmartArtQuickStyles.Item(1)
    alert(`SmartArt 快速样式的名称：${smartArtQuickStyle.Name}\nSmartArt 快速样式的唯一 ID：${smartArtQuickStyle.Id}`)
}
```
