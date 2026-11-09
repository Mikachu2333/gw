# RulerLevels.Count

返回指定集合中的对象数。只读。



## 语法

express.**Count**

express   一个代表 **RulerLevels** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片的第一个形状中文本的大纲级别的数量。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let rulerLevels = shape.TextFrame.Ruler.Levels
    alert(rulerLevels.Count)
}
```
