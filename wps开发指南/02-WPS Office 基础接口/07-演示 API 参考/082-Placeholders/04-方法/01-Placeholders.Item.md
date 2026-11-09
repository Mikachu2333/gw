# Placeholders.Item

从指定的 **Placeholders** 集合中返回单个 **Shape** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Placeholders** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int 精度） | 集合中要返回的单个 **Shape** 对象的索引号。 |

## 返回值

Shape

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片的第一个占位符的类型是否为ppPlaceholderCenterTitle。*/
function test() {
    let placeholders = ActivePresentation.Slides.Item(1).Shapes.Placeholders
    let format = placeholders.Item(1).PlaceholderFormat
    alert(format.Type == ppPlaceholderCenterTitle)
}
```


```JavaScript
/*本示例显示活动窗口所选的第一张幻灯片的最后一个占位符形状的名称。*/
function test() {
    let placeholders = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Placeholders
    alert(placeholders.Item(placeholders.Count).Name)
}
```
