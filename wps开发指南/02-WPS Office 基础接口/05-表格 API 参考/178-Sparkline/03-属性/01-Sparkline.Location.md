# Sparkline.Location

返回或设置单个迷你图的位置。可读/写。



## 语法

express.**Location**

express   一个代表 **Sparkline** 对象的变量。

## 类型

[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)

## 示例


```JavaScript
/*本示例显示单元格 I1 中第一个迷你图组的第一个迷你图的位置的地址。*/
function test() {
    alert(Range("I1").SparklineGroups(1).Item(1).Location.Address())
}
```


```JavaScript
/*本示例选中活动工作表上单元格 I1 中第一个迷你图组的第一个迷你图的位置。*/
function test() {
    let sparkline = ActiveSheet.Range("I1").SparklineGroups(1).Item(1)
    sparkline.Location.Select()
}
```
