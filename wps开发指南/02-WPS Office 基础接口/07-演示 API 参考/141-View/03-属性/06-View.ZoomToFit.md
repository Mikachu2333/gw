# View.ZoomToFit

确定每当对文档窗口大小进行调整后，是否缩放视图以适应文档窗口的尺寸。可读/写。



## 语法

express.**ZoomToFit**

express   一个代表 **View** 对象的变量。

## 类型

MsoTriState

## 说明


此属性仅适用于幻灯片视图、备注页视图或母版视图。

如果明确地设置了 **[Zoom](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/View/member/Zoom)** 属性的值，则 **ZoomToFit** 属性的值会自动设置为 **msoFalse** 。

 **ZoomToFit** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量           | 说明                           |
| ------------ | ---------------------------- |
| **msoFalse** | 对文档窗口大小进行调整后不为适应文档窗口尺寸而缩放视图。 |
| **msoTrue**  | 对文档窗口大小进行调整后缩放视图以适应文档窗口尺寸。   |



## 示例


```JavaScript
/*本示例将第一个窗口的视图设为幻灯片视图，并自动设置为适应该窗口大小。*/
function test() {
    Windows.Item(1).ViewType = ppViewSlide
    Windows.Item(1).View.ZoomToFit = msoTrue
}
```


```JavaScript
/*本示例显示活动窗口的视图是否自动调整缩放视图以适应该窗口大小。*/
function test() {
    alert(ActiveWindow.View.ZoomToFit == msoTrue)
}
```
