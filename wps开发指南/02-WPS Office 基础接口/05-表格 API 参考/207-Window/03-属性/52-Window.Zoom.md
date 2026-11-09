# Window.Zoom

返回或设置一个 **Variant** 值，它代表窗口的显示大小，以百分数表示（100 表示正常大小，200 表示双倍大小，以此类推）。



## 语法

express.**Zoom**

express   一个代表 **Window** 对象的变量。

## 类型

any

## 说明


将此属性设为 **True** ，可将窗口大小设置成与当前选定区域相适应的大小。

 本功能仅对窗口中当前的活动工作表起作用。若要对其他工作表使用此属性，必须先激活工作表。



## 示例


```JavaScript
/*本示例将活动窗口的缩放比例设置为 50%。*/
function test() {
    Application.ActiveWindow.Zoom = 50
}
```


```JavaScript
/*本示例弹窗显示当前活动窗口的缩放比例。*/
function test() {
    alert(Application.ActiveWindow.Zoom)
}
```
