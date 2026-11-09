# Comment.Shape

返回一个 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象，它代表连接到指定批注的形状。



## 语法

express.**Shape**

express   一个代表 **Comment** 对象的变量。

## 类型

Shape

## 说明


确保批注未被隐藏。在“ 审阅 ”选项卡上，选择“ 批注>显示所有批注”。



## 示例


```JavaScript
/*本示例选定活动工作表上的第二条批注。*/
function test() {
    Application.ActiveSheet.Comments.Item(2).Shape.Select()
}
```


```JavaScript
/*本示例显示活动工作表上第三条批注的形状的宽度。*/
function test() {
    alert(Application.ActiveSheet.Comments.Item(3).Shape.Width)
}
```
