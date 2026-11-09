# PictureEffects.Count

检索包含在 **[PictureEffects](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/PictureEffects/obj)** 集合中的 **PictureEffect** 对象数的计数。只读。



## 语法

express.**Count**

express   一个代表 **PictureEffects** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例运行于表格组件，显示活动工作表的第一个（图片）形状的图片效果的数量。*/
function test() {
    let pictureEffects = ActiveSheet.Shapes.Item(1).Fill.PictureEffects
    alert(pictureEffects.Count)
}
```
