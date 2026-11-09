# SlideRange.FollowMasterBackground

确定幻灯片范围是否继承幻灯片母版背景。可读/写。



## 语法

express.**FollowMasterBackground**

express   一个代表 **SlideRange** 对象的变量。

## 类型

MsoTriState

## 说明


 **FollowMasterBackground** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量           | 说明                     |
| ------------ | ---------------------- |
| **msoFalse** | 指定的幻灯片或幻灯片范围具有自定义背景。 |
| **msoTrue**  | 指定的幻灯片或幻灯片范围继承幻灯片母版背景。 |

创建新幻灯片时，该属性的默认值为 **msoTrue** 。如果从其他演示文稿中复制幻灯片，将保留原始幻灯片中的设置。即如果该幻灯片原先使用原始演示文稿中幻灯片母版的背景，则自动使用新演示文稿的幻灯片母版背景；如果该幻灯片原先使用自定义背景，则将保留该自定义背景。

请注意，幻灯片背景的外观由配色方案、背景对象和背景本身共同决定。如果单独设置 **FollowMasterBackground** 属性没有达到预期的效果，请尝试同时设置 **ColorScheme** 和 **DisplayMasterShapes** 属性。



## 示例


```JavaScript
/*本示例复制第二个演示文稿的第一张幻灯片，将该幻灯片粘贴在第一个演示文稿的末尾，并将该幻灯片的背景、配色方案和背景对象与第一个演示文稿的其他幻灯片匹配。*/
function test() {
    Presentations.Item(2).Slides.Item(1).Copy()
    let slideRange = Presentations.Item(1).Slides.Paste()
    slideRange.FollowMasterBackground = msoTrue
    slideRange.ColorScheme = Presentations.Item(1).SlideMaster.ColorScheme
    slideRange.DisplayMasterShapes = msoTrue
}
```


```JavaScript
/*本示例判断活动演示文稿中选择的幻灯片是否继承幻灯片母版背景，并通知用户。*/
function test() {
    let slideRange = ActivePresentation.Windows.Item(1).Selection.SlideRange
    if (slideRange.FollowMasterBackground == msoTrue) {
        alert("选择的幻灯片继承幻灯片母版背景。")
    } else {
        alert("选择的幻灯片具有自定义背景。")
    }
}
```
