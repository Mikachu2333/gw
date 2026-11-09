# Connections.Count

返回集合中对象的数目。只读 **Long** 类型。



## 语法

express.**Count**

express   一个代表 **Connections** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动工作簿的连接的数量。*/
function test() {
    alert(`工作簿连接的数量：${ActiveWorkbook.Connections.Count}`)
}
```
