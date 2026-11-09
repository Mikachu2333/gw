# TextStyleLevels.Count

返回指定集合中的对象数。只读。



## 语法

express.**Count**

express   一个代表 **TextStyleLevels** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿的幻灯片母版的正文样式中大纲级别的数量。*/
function test() {
    let textStyleLevels = ActivePresentation.SlideMaster.TextStyles.Item(ppBodyStyle).Levels
    alert(textStyleLevels.Count)
}
```
