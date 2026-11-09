# SmartArtLayout.Category

检索与 SmartArt 布局关联的主类别名称。只读。



## 语法

express.**Category**

express   一个代表 **SmartArtLayout** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例运行于演示组件，显示活动演示文稿的第一张幻灯片上第一个 SmartArt 图形的 SmartArt 布局关联的主类别名称。*/
function test() {
    let smartArtLayout = ActivePresentation.Slides.Item(1).Shapes.Item(1).SmartArt.Layout
    alert(smartArtLayout.Category)
}
```


```JavaScript
/*本示例运行于各组件，显示所有 SmartArt 布局关联的主类别名称。*/
function test() {
    let smartArtLayouts = Application.SmartArtLayouts
    let str = ""
    for (let i = 1; i <= smartArtLayouts.Count; i++) {
        str += smartArtLayouts.Item(i).Category + "\n"
    }
    alert(str)
}
```
