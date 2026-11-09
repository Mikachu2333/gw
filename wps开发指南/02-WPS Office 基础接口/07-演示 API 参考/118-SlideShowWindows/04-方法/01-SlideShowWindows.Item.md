# SlideShowWindows.Item

从指定的 **SlideShowWindows** 集合中返回一个 **SlideShowWindow** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **SlideShowWindows** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int 精度） | 集合中要返回的单个 **SlideShowWindow** 对象的索引号。 |

## 返回值

SlideShowWindow

## 示例


```JavaScript
/*本示例运行第一篇演示文稿的幻灯片放映，显示第一个幻灯片放映的窗口被创建的演示文稿中第一张幻灯片的幻灯片编号。*/
function test() {
    Presentations.Item(1).SlideShowSettings.Run()
    let presentation = Application.SlideShowWindows.Item(1).Presentation
    alert(presentation.PageSetup.FirstSlideNumber)
}
```


```JavaScript
/*本示例运行活动演示文稿的幻灯片放映，然后显示最后一个幻灯片放映的窗口被创建的演示文稿的名称。*/
function test() {
    ActivePresentation.SlideShowSettings.Run()
    let presentation = Application.SlideShowWindows.Item(SlideShowWindows.Count).Presentation
    alert(presentation.Name)
}
```
