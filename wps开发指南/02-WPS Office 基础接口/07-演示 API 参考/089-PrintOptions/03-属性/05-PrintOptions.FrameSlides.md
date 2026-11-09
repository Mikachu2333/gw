# PrintOptions.FrameSlides

决定是否在打印的幻灯片的边框周围放置窄框架。可读/写。



## 语法

express.**FrameSlides**

express   一个代表 **PrintOptions** 对象的变量。

## 类型

MsoTriState

## 说明


 **FrameSlides** 属性适用于打印的幻灯片、讲义和备注页。

 **FrameSlides** 属性的值可以是下列 MsoTriState 常量之一：

| 常量 | 说明 |
| ------------ | ------------- |
| **msoFalse**  | 默认值。在打印的幻灯片的边框周围不放置窄框架。 |
| **msoTrue** | 在打印的幻灯片的边框周围放置窄框架。 |



## 示例


```JavaScript
/*本示例打印活动演示文稿，其中每张幻灯片周围都有一个框架。*/
function test() {
    ActivePresentation.PrintOptions.FrameSlides = msoTrue
    ActivePresentation.PrintOut()
}
```


```JavaScript
/*本示例显示是否在打印第一篇演示文稿的幻灯片的边框周围放置窄框架。*/
function test() {
    let printOptions = Presentations.Item(1).PrintOptions
    alert(printOptions.FrameSlides == msoTrue)
}
```
