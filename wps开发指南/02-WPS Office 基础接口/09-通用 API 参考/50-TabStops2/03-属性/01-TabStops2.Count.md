# TabStops2.Count

获取一个 **Long** 类型的值，指示 **TabStops2** 集合中的项数。只读。



## 语法

express.**Count**

express   一个代表 **TabStops2** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例运行于表格组件，显示第一张工作表上第一个形状（文本框）中制表位的数量。*/
function test() {
    let tabStops2 = Worksheets.Item(1).Shapes.Item(1).TextFrame2.Ruler.TabStops
    alert(tabStops2.Count)
}
```
