# Presentations.Add

创建一个演示文稿。返回一个代表新演示文稿的 **[Presentation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentation/obj)** 对象。



## 语法

express.**Add(WithWindow)**

express   一个代表 **Presentations** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| WithWindow | 可选 | MsoTriState | 是否在可视窗口中创建演示文稿。 |

## 返回值

Presentation

## 说明


*WithWindow* 参数值可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| --- | --- |
| msoFalse | 新演示文稿不可见。 |
| msoTrue | 默认值。在可视窗口中创建演示文稿。 |



## 示例


```JavaScript
/*本示例创建一个演示文稿，并在其中添加一张幻灯片，然后保存该演示文稿。*/
function test() {
    let presentation = Application.Presentations.Add()
    presentation.Slides.Add(1, ppLayoutTitle)
    presentation.SaveAs("D:\\Sample.ppt")
}
```


```JavaScript
/*本示例新建一篇演示文稿，并将该演示文稿设置为不可见，然后显示该演示文稿的名称。*/
function test() {
    let presentation = Presentations.Add(msoFalse)
    alert(presentation.Name)
}
```
