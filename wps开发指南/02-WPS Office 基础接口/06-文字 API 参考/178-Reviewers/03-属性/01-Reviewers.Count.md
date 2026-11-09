# Reviewers.Count

返回一 个 **Long** ，代表集合中审阅者的数量。此为只读属性。



## 语法

express.**Count**

express   一个代表 **Reviewers** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动窗口中审阅者的数量。*/
function test() {
    alert(Application.ActiveWindow.View.RevisionsFilter.Reviewers.Count)
}
```
