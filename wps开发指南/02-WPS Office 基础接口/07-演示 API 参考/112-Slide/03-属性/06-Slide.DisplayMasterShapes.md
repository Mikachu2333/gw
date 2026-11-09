# Slide.DisplayMasterShapes

确定指定的幻灯片是否显示幻灯片母版中的背景对象。可读/写。



## 语法

express.**DisplayMasterShapes**

express   一个代表 **Slide** 对象的变量。

## 类型

MsoTriState

## 说明


 **DisplayMasterShapes** 属性的值可以是下列 **MsoTriState** 常量之一。

| 常量           | 说明                                                                 |
| ------------ | ------------------------------------------------------------------ |
| **msoFalse** | 指定的幻灯片不显示幻灯片母版中的背景对象。                                              |
| **msoTrue**  | 指定的幻灯片显示幻灯片母版中的背景对象。这些背景对象可以包括添加到幻灯片母版中的文本、图形、OLE 对象和剪贴画。不包括页眉和页脚。 |

创建新幻灯片时此项属性的默认值是 **msoTrue** 类型。如果从其他演示文稿中复制幻灯片，将保留原始幻灯片中的设置。即如果该幻灯片忽略了原始幻灯片中幻灯片母版的背景对象，则新幻灯片中也将忽略该对象。

请注意，幻灯片背景的外观由配色方案、背景对象和背景本身共同决定。如果单独设置 **DisplayMasterShapes** 属性没有达到预期的效果，请尝试同时设置 **FollowMasterBackground** 和 **ColorScheme** 属性。



## 示例


```JavaScript
/*本示例复制第二个演示文稿的第一张幻灯片，将该幻灯片粘贴在第一个演示文稿的末尾，并使该幻灯片的背景、配色方案和背景对象与第一个演示文稿的其他幻灯片匹配。*/
function test() {
    Presentations.Item(2).Slides.Item(1).Copy()
    let slide = Presentations.Item(1).Slides.Paste().Item(1)
    slide.FollowMasterBackground = msoTrue
    slide.ColorScheme = Presentations.Item(1).SlideMaster.ColorScheme
    slide.DisplayMasterShapes = msoTrue
}
```


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片是否显示幻灯片母版中的背景对象。*/
function test() {
    alert(ActivePresentation.Slides.Item(1).DisplayMasterShapes == msoTrue)
}
```
