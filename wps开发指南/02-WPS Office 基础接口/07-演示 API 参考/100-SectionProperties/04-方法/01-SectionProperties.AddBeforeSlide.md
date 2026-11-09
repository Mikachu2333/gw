# SectionProperties.AddBeforeSlide

在紧挨指定幻灯片索引的前面添加一节，并返回新节的索引。



## 语法

express.**AddBeforeSlide(SlideIndex, sectionName)**

express   一个代表 **SectionProperties** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| SlideIndex | 必选 | number（int 精度） | 要在前面添加节的幻灯片的索引。 |
| sectionName | 必选 | string | 新节的名称。 |

## 返回值

Integer

## 说明


新插入的节之后的各节索引会自动加 1 。

如果紧挨指定幻灯片索引的前面存在分节符，则新节将放置在该分节符之后，其结果是前导节现在为空，指定幻灯片索引现在为新节的第一张幻灯片。

如果演示文稿不包含任何节，并且您在调用此方法时传递了一个大于 1 的 SlideIndex 值，则会在第一张幻灯片前面创建一个新节并为其给定默认的节名称。



## 示例


```JavaScript
/*本示例在活动演示文稿第一张幻灯片的前面添加名为“test”的节。*/
function test() {
    ActivePresentation.SectionProperties.AddBeforeSlide(1, "test")
}
```


```JavaScript
/*本示例在第一篇演示文稿第二张幻灯片的位置新建一个跟第一张幻灯片格式一样的幻灯片，并在其前面添加一个名为“test”的节。*/
function test() {
    let customLayout = Presentations.Item(1).Slides.Item(1).CustomLayout
    Presentations.Item(1).Slides.AddSlide(2, customLayout)
    Presentations.Item(1).SectionProperties.AddBeforeSlide(2, "test")
}
```
