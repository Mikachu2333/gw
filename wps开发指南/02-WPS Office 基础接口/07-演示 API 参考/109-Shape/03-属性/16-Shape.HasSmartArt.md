# Shape.HasSmartArt

如果当前 **Shape** 对象包含 SmartArt 图表，则返回 **True** 。只读。



## 语法

express.**HasSmartArt**

express   一个代表 **Shape** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例判断活动演示文稿中第一张幻灯片的第一个形状是否包含 SmartArt，并通知用户。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasSmartArt) {
        MsgBox("The first shape contains SmartArt.")
    } else {
        MsgBox("The first shape contains no SmartArt.")
    }
}
```


```JavaScript
/*本示例显示活动演示文稿中第一张幻灯片SmartArt的数量。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    let count = 0
    for (let i = 1; i <= shapes.Count; i++) {
        let shape = shapes.Item(i)
        if (shape.HasSmartArt) {
            count++
        }
    }
    alert("第一张幻灯片中SmartArt的数量为: " + count)
}
```
