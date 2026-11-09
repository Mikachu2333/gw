# Pane.Index

返回 **Long** 值，它代表对象在其同类对象所组成的集合内的索引号。



## 语法

express.**Index**

express   一个代表 **Pane** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动窗口中活动窗格的索引。*/
function test() {
    alert("活动窗格的索引为：" + ActiveWindow.ActivePane.Index)
}
```


```JavaScript
/*本示例获取第一个窗口中最后一个窗格的索引，并通知用户。*/
function test() {
    let paneIndex = Windows.Item(1).Panes(Windows.Item(1).Panes.Count).Index
    alert("最后一个窗格的索引为：" + paneIndex)
}
```
