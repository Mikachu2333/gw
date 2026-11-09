# Shape.Title

返回或设置与指定形状关联的可选文本的标题。 读/写。



## 语法

express.**Title**

express   一个代表 **Shape** 对象的变量。

## 类型

string

## 说明


若要设置形状的可选文字的描述性文本字符串，请使用 **AlternativeText** 属性。



## 示例


```JavaScript
/*本示例显示活动工作表中第二个形状的标题。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    alert(shape.Title)
}
```


```JavaScript
/*本示例将第一张工作表中第一个形状的标题设置为"圆角矩形"。*/
function test() {
    let shape = Worksheets.Item(1).Shapes.Item(1)
    shape.Title = "圆角矩形"
}
```
