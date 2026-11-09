# Shape.Duplicate

复制对象，并返回对新复制对象的引用。



## 语法

express.**Duplicate()**

express   一个代表 **Shape** 对象的变量。

## 返回值

Shape

## 示例


```JavaScript
/*此示例复制工作表 Sheet1 上第一个形状，然后选择新复制的形状。*/
function test() {
    let duplicate = Worksheets("Sheet1").Shapes.Item(1).Duplicate()
    duplicate.Select()
}
```


```JavaScript
/*此示例复制活动工作表上第二个形状并调整大小。*/
function test() {
    let duplicate = ActiveSheet.Shapes.Item(2).Duplicate()
    duplicate.Width *= 2
    duplicate.Height *= 2
}
```
