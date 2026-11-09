# View.Zoom

以百分比形式返回或设置指定视图的缩放设置。可读/写 。



## 语法

express.**Zoom**

express   一个代表 **View** 对象的变量。

## 类型

number（int 精度）

## 说明


 **Zoom** 属性值可以是 10% 到 400% 之间的值。



## 示例


```JavaScript
/*本示例将第一个文档窗口的视图缩小为 30%*/
function test() {
    Windows.Item(1).View.Zoom = 30
}
```


```JavaScript
/*本示例显示活动窗口视图的缩放值。*/
function test() {
    alert(ActiveWindow.View.Zoom)
}
```
