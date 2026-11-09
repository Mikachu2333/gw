# Shapes.Count

返回指定集合中的对象数目。只读。



## 语法

express.**Count**

express   一个代表 **Shapes** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片中形状的数量。*/
function test() {
    alert(ActivePresentation.Slides.Item(1).Shapes.Count)
}
```
