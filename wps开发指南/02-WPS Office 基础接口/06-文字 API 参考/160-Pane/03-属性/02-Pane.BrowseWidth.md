# Pane.BrowseWidth

返回指定窗格中正文换行区域的宽度（以磅为单位）。 **Long** 类型，只读。



## 语法

express.**BrowseWidth**

express   一个代表 **Pane** 对象的变量。

## 类型

number（int4 精度）

## 说明


此属性仅用于 Web 版式视图。



## 示例


```JavaScript
/*本示例显示活动窗格的正文换行区域的宽度。*/
function test() {
    alert(ActiveWindow.ActivePane.BrowseWidth)
}
```


```JavaScript
/*本示例显示第二个窗格的正文换行区域的宽度。*/
function test() {
    alert(ActiveWindow.Panes.Item(2).BrowseWidth)
}
```
