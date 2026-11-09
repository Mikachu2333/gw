# Window.Index

返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。



## 语法

express.**Index**

express   一个代表 **Window** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动窗口在 Windows 集合中的位置。*/
function test() {
    alert(ActiveDocument.ActiveWindow.Index)
}
```


```JavaScript
/*本示例显示最后一个窗口的 Index 属性值。*/
function test() {
    alert(Windows.Item(Windows.Count).Index)
}
```
