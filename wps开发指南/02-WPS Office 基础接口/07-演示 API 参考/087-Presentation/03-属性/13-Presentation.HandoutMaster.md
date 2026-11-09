# Presentation.HandoutMaster

返回一个代表讲义母版的 **[Master](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Master/obj)** 对象。只读。



## 语法

express.**HandoutMaster**

express   一个代表 **Presentation** 对象的变量。

## 类型

Master

## 示例


```JavaScript
/*本示例设置活动演示文稿的讲义母版的背景图案和背景填充颜色。*/
function test() {
    let fill = Application.ActivePresentation.HandoutMaster.Background.Fill
    fill.Patterned(msoPatternDarkHorizontal)
    fill.ForeColor.RGB = RGB(127, 255, 212)
}
```


```JavaScript
/*本示例显示第一篇演示文稿的讲义母版的名称。*/
function test() {
    alert(Presentations.Item(1).HandoutMaster.Name)
}
```
