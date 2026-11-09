# Charts.Count

返回一个 **Long** 值，它代表集合中对象的数量。



## 语法

express.**Count**

express   一个代表 **Charts** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例先创建空白图表工作表，然后显示活动工作簿中图表工作表的数量。*/
function test() {
    let chats = Application.Charts
    chats.Add()
    alert(Application.Charts.Count)
}
```


```JavaScript
/*本示例显示活动工作簿中图表工作表的数量是否为 2 。*/
function test() {
    alert(Application.Charts.Count == 2)
}
```
