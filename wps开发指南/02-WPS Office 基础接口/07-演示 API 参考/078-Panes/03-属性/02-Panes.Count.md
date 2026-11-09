# Panes.Count

返回指定集合中的对象数目。只读。



## 语法

express.**Count**

express   一个代表 **Panes** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动窗口中窗格的数量。*/
function test() {
    alert(ActiveWindow.Panes.Count)
}
```
