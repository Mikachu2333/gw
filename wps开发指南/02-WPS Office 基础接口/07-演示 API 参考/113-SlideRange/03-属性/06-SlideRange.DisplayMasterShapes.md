# SlideRange.DisplayMasterShapes

确定指定的幻灯片范围是否显示幻灯片母版中的背景对象。可读/写。



## 语法

express.**DisplayMasterShapes**

express   一个代表 **SlideRange** 对象的变量。

## 类型

MsoTriState

## 说明


 **DisplayMasterShapes** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量           | 说明                                                                   |
| ------------ | -------------------------------------------------------------------- |
| **msoFalse** | 指定的幻灯片范围不显示幻灯片母版中的背景对象。                                              |
| **msoTrue**  | 指定的幻灯片范围显示幻灯片母版中的背景对象。这些背景对象可以包括添加到幻灯片母版中的文本、图形、OLE 对象和剪贴画。不包括页眉和页脚。 |



## 示例


```JavaScript
/*本示例复制第二个演示文稿的第一张幻灯片，将该幻灯片粘贴在第一个演示文稿的末尾，并将该幻灯片的背景、配色方案和背景对象与第一个演示文稿的其他幻灯片匹配。*/
function test() {
    Presentations.Item(2).Slides.Item(1).Copy()
    let paste = Presentations.Item(1).Slides.Paste()
    paste.FollowMasterBackground = msoTrue
    paste.ColorScheme = Presentations.Item(1).SlideMaster.ColorScheme
    paste.DisplayMasterShapes = msoTrue
}
```


```JavaScript
/*本示例判断活动演示文稿中选择的幻灯片是否显示幻灯片母版中的背景对象，并通知用户。*/
function test() {
    let slideRange = ActivePresentation.Windows.Item(1).Selection.SlideRange
    if (slideRange.DisplayMasterShapes == msoTrue) {
        alert("选择的幻灯片显示幻灯片母版中的背景对象。")
    } else {
        alert("选择的幻灯片不显示幻灯片母版中的背景对象。")
    }
}
```
