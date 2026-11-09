# Shape.MediaType

返回 OLE 媒体类型。只读。 **PpMediaType** 类型。



## 语法

express.**MediaType**

express   一个代表 **Shape** 对象的变量。

## 类型

PpMediaType

## 说明


 **MediaType** 属性的值可以是下列 **PpMediaType** 常量之一：

| 常量 |
| ----------------------------------- |
| **ppMediaTypeMixed**                |
| **ppMediaTypeMovie**                |
| **ppMediaTypeOther**                |
| **ppMediaTypeSound**                |



## 示例


```JavaScript
/*本示例设置在放映幻灯片时，当前演示文稿内第一张幻灯片上的所有原始声音对象循环播放直到被手动停止。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        if (shapes.Item(i).Type == msoMedia) {
            if (shapes.Item(i).MediaType == ppMediaTypeSound) {
                shapes.Item(i).AnimationSettings.PlaySettings.LoopUntilStopped = msoTrue
            }
        }
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿内第一张幻灯片上第一个形状的 OLE 媒体类型是否为ppMediaTypeMixed。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    alert(shape.MediaType == ppMediaTypeMixed)
}
```
