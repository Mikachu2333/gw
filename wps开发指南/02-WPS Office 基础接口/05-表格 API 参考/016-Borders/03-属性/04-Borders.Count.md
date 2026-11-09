# Borders.Count

返回一个 **Long** 值，它代表集合中对象的数量。



## 语法

express.**Count**

express   一个代表 **Borders** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动工作簿的第一个样式对象的边框数量。*/
function test() {
    alert(ActiveWorkbook.Styles.Item(1).Borders.Count)
}
```
