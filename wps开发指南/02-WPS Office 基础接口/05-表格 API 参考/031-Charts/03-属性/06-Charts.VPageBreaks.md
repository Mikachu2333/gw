# Charts.VPageBreaks

返回一个 **[VPageBreaks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/VPageBreaks/obj)** 集合，它代表工作表上的垂直分页符。只读。



## 语法

express.**VPageBreaks**

express   一个代表 **Charts** 对象的变量。

## 类型

VPageBreaks

## 示例


```JavaScript
/*本示例在活动工作簿所有图表工作表上添加一个垂直分页符。*/
function test() {
    Application.Charts.VPageBreaks.Add(Range("A1"))
}
```


```JavaScript
/*本示例显示活动工作簿所有图表工作表上垂直分页符的数量。*/
function test() {
    alert(Application.Charts.VPageBreaks.Count)
}
```
