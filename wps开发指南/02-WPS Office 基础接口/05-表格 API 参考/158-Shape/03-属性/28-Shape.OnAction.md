# Shape.OnAction

返回或设置单击指定对象时运行的宏的名称。 **String** 类型，可读写。



## 语法

express.**OnAction**

express   一个代表 **Shape** 对象的变量。

## 类型

string

## 说明


为菜单项设置该属性，该属性可取代为菜单项和指定宏设定的自定义帮助信息。



## 示例


```JavaScript
/*本示例在选择第一张工作表的第一个形状时运行 ShapeClick 过程。*/
function test() {
    Worksheets(1).Shapes(1).OnAction = "ShapeClick"
}
```


```JavaScript
/*本示例在选择活动工作表的第二个形状时运行 ShapeAction 过程。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    shape.OnAction = "ShapeAction"
}
```
