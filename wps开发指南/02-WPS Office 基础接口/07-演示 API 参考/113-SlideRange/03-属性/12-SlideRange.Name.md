# SlideRange.Name

向一个演示文稿插入幻灯片时，WPP 会自动为幻灯片分配“幻灯片 n”形式的名称，其中 n 是一个整数，代表幻灯片在演示文稿中创建的顺序。例如，在某个演示文稿中插入的第一张幻灯片被自动命名为“幻灯片 1”。如果将幻灯片从一个演示文稿复制到另一个演示文稿，则该幻灯片会失去它在第一个演示文稿中的名称并在第二个演示文稿中被自动分配新名称。幻灯片范围必须至少包含一张幻灯片。可读/写。



## 语法

express.**Name**

express   一个代表 **SlideRange** 对象的变量。

## 类型

string

## 说明


如果包含某对象的集合的 **Item** 方法采用 **Variant** 类型的参数，则可以将该对象的名称与 **Item** 方法联合使用来返回对该对象的引用。例如，如果某个形状的 **Name** 属性值为“Rectangle 2”，则 .Shapes.Item("Rectangle 2") 将返回对该形状的引用。



## 示例


```JavaScript
/*本示例将活动演示文稿第一个窗口中选定的幻灯片的名称设置为“test”。*/
function test() {
    let slideRange = ActivePresentation.Windows.Item(1).Selection.SlideRange
    slideRange.Name = "test"
}
```


```JavaScript
/*本示例显示第一篇演示文稿中第一张幻灯片的名称。*/
function test() {
    alert(Presentations.Item(1).Slides.Range(1).Name)
}
```
