# RulerLevels2.Count

获取一个 **Long** 类型的值，该值指示 **RulerLevels2** 集合中的项数。只读。



## 语法

express.**Count**

express   一个代表 **RulerLevels2** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例运行于表格组件，显示第一张工作表上第二个形状（文本框）中 RulerLevel2 对象的数量。*/
function test() {
    let ruler2 = Worksheets.Item(1).Shapes.Item(2).TextFrame2.Ruler
    alert(ruler2.Levels.Count)
}
```
