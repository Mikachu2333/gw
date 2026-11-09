# Placeholders.Count

返回指定集合中的对象数目。



## 语法

express.**Count**

express   一个代表 **Placeholders** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中占位符的数量。*/
function test() {
    let placeholders = ActivePresentation.Slides.Item(1).Shapes.Placeholders
    alert(placeholders.Count)
}
```
