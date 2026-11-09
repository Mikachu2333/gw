# Slide.ApplyTemplate

将设计模板应用于指定的幻灯片。



## 语法

express.**ApplyTemplate(FileName)**

express   一个代表 **Slide** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | string | 指定设计模板的名称。 |

## 返回值

void

## 说明


如果在字符串中引用未安装的演示文稿设计模板，则将产生运行时错误。无论 **[FeatureInstall](#TODO)** 属性设置是什么，该模板都不自动安装。要对当前未安装的模板使用 **ApplyTemplate** 方法，必须先安装附加设计模板。



## 示例


```JavaScript
/*本示例将设计模板应用于第一个演文示稿的第一张幻灯片。*/
function test() {
    let slide = Presentations.Item(1).Slides.Item(1)
    slide.ApplyTemplate("E:/test.potx")
}
```


```JavaScript
/*本示例将设计模板应用于活动演文示稿中名为“test”的幻灯片。*/
function test() {
    let slides = ActivePresentation.Slides
    for (let i = slides.Count; i > 0; i--) {
        if (slides.Item(i).Name == "test") {
            slides.Item(i).ApplyTemplate("E:/example.potx")
        }
    }
}
```
