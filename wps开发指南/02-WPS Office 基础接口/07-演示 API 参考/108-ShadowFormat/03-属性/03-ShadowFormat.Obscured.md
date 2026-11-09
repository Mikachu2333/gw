# ShadowFormat.Obscured

确定指定形状的阴影是否显示填充且由形状遮盖。可读/写。



## 语法

express.**Obscured**

express   一个代表 **ShadowFormat** 对象的变量。

## 类型

MsoTriState

## 说明


 **Obscured** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量           | 说明                              |
| ------------ | ------------------------------- |
| **msoFalse** | 阴影没有填充，当形状没有填充时可以透过形状看见阴影的轮廓。   |
| **msoTrue**  | 指定形状的阴影显示填充且由形状遮盖，即使形状没有填充也是如此。 |



## 示例


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片的第一个形状阴影是否没有填充。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    alert(shape.Shadow.Obscured == msoFalse)
}
```


```JavaScript
/*本示例判断活动窗口中选定的第一张幻灯片的标题阴影是否显示填充且由形状遮盖，并通知用户。*/
function test() {
    let shape = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Title
    if (shape.Shadow.Obscured == msoTrue) {
        alert("指定形状的阴影显示填充且由形状遮盖。")
    } else {
        alert("指定形状的阴影没有填充。")
    }
}
```
