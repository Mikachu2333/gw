# TextStyles.Item

从指定的 **[TextStyles](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextStyles/obj)** 集合中返回单个文本样式。



## 语法

express.**Item(Type)**

express   一个代表 **TextStyles** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 必选 | PpTextStyleType | 文本样式的类型。 |

## 返回值

TextStyle

## 说明


 **Item** 方法是集合的默认成员。例如，下面两行代码是等价的：

```JavaScript
ActivePresentation.Slides.Item(1)
ActivePresentation.Slides(1)
```

_Type_ 参数值可以是下列 **PpTextStyleType** 常量之一：

| 常量 |
| ------------------ |
| **ppBodyStyle**    |
| **ppDefaultStyle** |
| **ppTitleStyle**   |



## 示例


```JavaScript
/*本示例设置活动演示文稿的幻灯片母版的正文样式的文本框中的内容。*/
function test() {
    let textStyles = ActivePresentation.SlideMaster.TextStyles
    textStyles.Item(ppBodyStyle).TextFrame.TextRange.Text = "example"
}
```


```JavaScript
/*本示例显示活动演示文稿的幻灯片母版的标题样式中第一个大纲级别的字体的名称。*/
function test() {
    let textStyle = ActivePresentation.SlideMaster.TextStyles.Item(ppTitleStyle)
    alert(textStyle.Levels.Item(1).Font.Name)
}
```
