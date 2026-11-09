# Window.SplitVertical

返回或设置指定窗口的垂直拆分百分比。 **Long** 类型，可读写。



## 语法

express.**SplitVertical**

express   一个代表 **Window** 对象的变量。

## 类型

number（int4 精度）

## 说明


若要取消拆分，可将该属性设置为零 (0) 或将 **Split** 属性设置为 **False** 。



## 示例


```JavaScript
/*本示例拆分活动窗口，使顶部窗格占窗口的 70%。*/
function test() {
    ActiveDocument.ActiveWindow.SplitVertical = 70
}
```


```JavaScript
/*本示例垂直均分 Document1 窗口。*/
function test() {
    Windows.Item("Document1").SplitVertical = 50
}
```
