# GroupShapes.Count

返回指定集合中的对象数目。



## 语法

express.**Count**

express   一个代表 **GroupShapes** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片的第一个形状组中形状的数量。*/
function test() {
    let groupShapes = ActivePresentation.Slides.Item(1).Shapes.Item(1).GroupItems
    alert(groupShapes.Count)
}
```
