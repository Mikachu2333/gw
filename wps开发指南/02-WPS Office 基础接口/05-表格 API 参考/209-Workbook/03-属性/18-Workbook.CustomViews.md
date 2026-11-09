# Workbook.CustomViews

返回一个 **[CustomViews](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CustomViews/obj)** 集合，该集合表示工作簿的所有自定义视图。



## 语法

express.**CustomViews**

express   一个代表 **Workbook** 对象的变量。

## 类型

CustomViews

## 示例


```JavaScript
/*本示例在活动工作簿中新建一个自定义视图，并命名为“Summary”。*/
function test() {
    ActiveWorkbook.CustomViews.Add("Summary", true, true)
}
```


```JavaScript
/*本示例在活动工作簿中新建一个取消打印设置的自定义视图Computer，并告知用户当前CustomViews的总数。*/
function test() {
    ActiveWorkbook.CustomViews.Add("Computer", false, true)
    alert("CustomViews集合中的自定义视图总数为：" + ActiveWorkbook.CustomViews.Count)
}
```
