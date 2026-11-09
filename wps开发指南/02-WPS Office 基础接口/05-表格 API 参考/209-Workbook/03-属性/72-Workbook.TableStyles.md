# Workbook.TableStyles

返回当前工作簿的一个 **TableStyles** 集合对象，该对象引用当前工作簿中所使用的样式。只读。



## 语法

express.**TableStyles**

express   一个代表 **Workbook** 对象的变量。

## 类型

TableStyles

## 说明


您可以处理由该属性返回的表样式。



## 示例


```JavaScript
/*本示例演示向活动工作簿中新加样式 style1 。*/
function test() {
    ActiveWorkbook.TableStyles.Add("style1")
}
```


```JavaScript
/*本示例演示活动工作簿中所使用的样式总数。*/
function test() {
    alert(ActiveWorkbook.TableStyles.Count)
}
```
