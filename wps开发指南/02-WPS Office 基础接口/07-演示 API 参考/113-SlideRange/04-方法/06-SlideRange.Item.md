# SlideRange.Item

从指定 **SlideRange** 集合中返回单个 **Slide** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **SlideRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 集合中要返回对象的名称或单个 **Slide** 的索引号。 |

## 返回值

Slide

## 说明


如果Visual Studio解决方案包含 **Kingsoft.Office.Interop.Wppapi** 的引用，该属性将映射到以下类型:

 **Kingsoft.Office.Interop.Wppapi.SlideRange.\_Index** 



## 示例


```JavaScript
/*本示例显示活动演示文稿第一个窗口中所选的第一张幻灯片的背景的名称。*/
function test() {
    let slide = ActivePresentation.Windows.Item(1).Selection.SlideRange.Item(1)
    alert(slide.Background.Name)
}
```


```JavaScript
/*本示例删除第一篇演示文稿中的第一张幻灯片。*/
function test() {
    let slides = Presentations.Item(1).Slides
    slides.Range().Item(1).Delete()
}
```
