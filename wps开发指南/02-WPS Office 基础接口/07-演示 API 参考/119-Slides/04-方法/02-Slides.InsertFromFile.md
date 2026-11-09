# Slides.InsertFromFile

将文件中的幻灯片插入演示文稿的指定位置。返回一个 **Integer** ，表示插入的幻灯片数量。



## 语法

express.**InsertFromFile(FileName, Index, SlideStart, SlideEnd)**

express   一个代表 **Slides** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | string | 包含要插入的幻灯片的文件的名称。 |
| Index | 必选 | number（int 精度） | 要在其后插入新幻灯片的指定 **Slides** 集合中 **Slide** 对象的索引号。 |
| SlideStart | 可选 | number（int 精度） | 第一个 **Slide** 对象在 **Slides** 集合中的索引号，该集合在由 FileName 指定的文件中。 |
| SlideEnd | 可选 | number（int 精度） | 最后一个 **Slide** 对象在 **Slides** 集合中的索引号，该集合在由 FileName 指定的文件中。 |

## 返回值

Integer

## 示例


```JavaScript
/*本示例在活动演示文稿的第二张灯片后插入文件 E:\example.pptx 的第三张到第六张幻灯片。*/
function test() {
    Application.ActivePresentation.Slides.InsertFromFile("E:\\example.pptx", 2, 3, 6)
}
```


```JavaScript
/*本示例判断如果第一篇演示文稿的第一幻灯片名为“test”，则在第一张幻灯片后插入文件 E:\test.ppt 的第一和第二张幻灯片。*/
function test() {
    let slides = Presentations.Item(1).Slides
    if (slides.Item(1).Name == "test") {
        slides.InsertFromFile("E:\\test.ppt", 1, 1, 2)
    }
}
```
