# Workbook.Styles

返回一个 **[Styles](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Styles/obj)** 集合，该集合表示指定工作簿中的所有样式。只读。



## 语法

express.**Styles**

express   一个代表 **Workbook** 对象的变量。

## 类型

Styles

## 示例


```JavaScript
/*本示例演示活动工作簿中样式的总数。*/
function test() {
    alert("活动工作簿中样式的总数：" + ActiveWorkbook.Styles.Count)
}
```


```JavaScript
/*本示例演示活动工作簿中第三个样式的 Name 。*/
function test() {
    alert(ActiveWorkbook.Styles.Item(3).Name)
}
```


```JavaScript
/*本示例从活动工作簿中删除用户定义的“Stock Quote Style”样式。*/
function test() {
    ActiveWorkbook.Styles.Item("Stock Quote Style").Delete()
}
```
