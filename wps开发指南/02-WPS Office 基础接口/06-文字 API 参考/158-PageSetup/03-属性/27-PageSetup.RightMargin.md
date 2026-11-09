# PageSetup.RightMargin

返回或设置页面右边缘与正文右边界之间的距离（以磅为单位）。 **Single** 类型，可读写。



## 语法

express.**RightMargin**

express   一个代表 **PageSetup** 对象的变量。

## 类型

number（float 精度）

## 说明


如果将 **[MirrorMargins](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/MirrorMargins)** 属性设置为 **msoTrue** ，则 **RightMargin** 属性将控制外边距的设置，而 **[LeftMargin](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/member/LeftMargin)** 属性控制内边距的设置。



## 示例


```JavaScript
/*本示例显示活动文档的右边距。PointsToInches 方法用于将磅值转换为英寸。*/
function test() {
    alert(`The right margin is set to ${PointsToInches(ActiveDocument.PageSetup.RightMargin)} inches.`)
}
```


```JavaScript
/*本示例设置选定内容中的第二节的右边距。InchesToPoints 方法用于将英寸转换为磅。*/
function test() {
    Selection.Sections.Item(2).PageSetup.RightMargin = InchesToPoints(1)
}
```
