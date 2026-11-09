# GradientStops 对象

包含由 **[GradientStop](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/GradientStop/obj)** 对象组成的集合。

## 说明


渐变是指从一种颜色状态到另一种颜色状态的平缓过渡。这些部分的端点称为光圈。


## 示例


```JavaScript
/*本示例运行于表格组件，为活动工作表的第一个形状设置前景填充色，并为该形状添加三个渐变颜色光圈。*/
function test() {
    let fillFormat = ActiveSheet.Shapes.Item(1).Fill
    fillFormat.ForeColor.RGB = RGB(0, 128, 128)
    let gradientStops = fillFormat.GradientStops
    gradientStops.Insert2(msoThemeAccent1, 0.25, null, 1)
    gradientStops.Insert2(msoThemeLight1, 0.5, null, 2)
    gradientStops.Insert2(msoThemeLight2, 0.75, null, 3)
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作表的第一个形状渐变填充的最后一个渐变光圈的 Transparency 属性值。*/
function test() {
    let gradientStops = ActiveSheet.Shapes.Item(1).Fill.GradientStops
    alert(gradientStops.Item(gradientStops.Count).Transparency)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/GradientStops/member/Delete) | 删除渐变光圈。 |
| [Insert2](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/GradientStops/member/Insert2) | 在渐变中添加一个光圈，并指定颜色亮度和透明度。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/GradientStops/member/Item) | 获取 **GradientStop** 集合中的 **GradientStops** 对象。只读。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/GradientStops/member/Count) | 获取一个 **Long** 类型的值，该值指示 **GradientStops** 集合中的项数。只读。 |