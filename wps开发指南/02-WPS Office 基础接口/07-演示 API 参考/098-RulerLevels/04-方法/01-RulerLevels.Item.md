# RulerLevels.Item

从指定的 **RulerLevels** 集合中返回单个 **RulerLevel** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **RulerLevels** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int 精度） | 集合中要返回的单个 **RulerLevel** 对象的索引编号。 |

## 返回值

RulerLevel

## 示例


```JavaScript
/*本示例设置活动窗口所选的第一张幻灯片的第一个形状中文本的第一个大纲级别的首行缩进值和左缩进值。*/
function test() {
    let rulerLevel = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1).TextFrame.Ruler.Levels.Item(1)
    rulerLevel.FirstMargin = 9
    rulerLevel.LeftMargin = 54
}
```


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片的第一个形状中文本的最后一个大纲级别的首行缩进值。*/
function test() {
    let textFrame = ActivePresentation.Slides.Item(1).Shapes.Item(1).TextFrame
    let rulerLevels = textFrame.Ruler.Levels
    alert(rulerLevels.Item(rulerLevels.Count).FirstMargin + " 磅")
}
```
