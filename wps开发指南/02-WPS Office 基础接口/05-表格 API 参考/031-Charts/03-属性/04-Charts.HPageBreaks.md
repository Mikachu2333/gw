# Charts.HPageBreaks

返回一个 **[HPageBreaks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HPageBreaks/obj)** 集合，它代表图表上的水平分页符。只读。



## 语法

express.**HPageBreaks**

express   一个代表 **Charts** 对象的变量。

## 类型

HPageBreaks

## 示例


```JavaScript
/*本示例显示活动工作簿所有图表工作表上水平分页符的数量。*/
function test() {
    alert(Application.Charts.HPageBreaks.Count)
}
```


```JavaScript
/*本示例在活动工作簿所有图表工作表上添加水平分页符。*/
function test() {
    Application.Charts.HPageBreaks.Add(Range("A5"))
}
```
