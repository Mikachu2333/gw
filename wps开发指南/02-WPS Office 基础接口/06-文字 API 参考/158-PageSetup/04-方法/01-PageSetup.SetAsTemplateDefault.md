# PageSetup.SetAsTemplateDefault

将指定的页面设置格式设为活动文档和所有基于活动模板的新文档的默认格式。



## 语法

express.**SetAsTemplateDefault()**

express   一个代表 **PageSetup** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例更改活动文档的左右页边距设置，然后将该页面设置格式设为默认格式。*/
function test() {
    let pagesetup = ActiveDocument.PageSetup
    pagesetup.LeftMargin = InchesToPoints(1)
    pagesetup.RightMargin = InchesToPoints(1)
    pagesetup.SetAsTemplateDefault()
}
```


```JavaScript
/*本示例将活动文档的第一节页面方向设置为横向，然后将该页面设置格式设为默认格式。*/
function test() {
    let pagesetup = ActiveDocument.Sections.Item(1).PageSetup
    pagesetup.Orientation = wdOrientLandscape
    pagesetup.SetAsTemplateDefault()
}
```
