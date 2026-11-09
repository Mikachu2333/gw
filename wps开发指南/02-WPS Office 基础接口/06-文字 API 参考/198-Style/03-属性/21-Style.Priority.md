# Style.Priority

返回或设置一个 **Long** 类型的值，该值代表 **“样式”** 任务窗格中排序样式的优先级。可读写。



## 语法

express.**Priority**

express   一个代表 **Style** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例将活动文档中名为“标题 1”的样式的优先级设置为2。*/
function test() {
    ActiveDocument.Styles.Item("标题 1").Priority = 2
}
```


```JavaScript
/*本示例显示所选区域的样式的优先级。*/
function test() {
    alert(Selection.Range.Style.Priority)
}
```
