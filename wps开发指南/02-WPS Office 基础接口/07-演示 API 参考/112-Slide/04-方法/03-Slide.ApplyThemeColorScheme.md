# Slide.ApplyThemeColorScheme

对指定幻灯片应用配色方案。



## 语法

express.**ApplyThemeColorScheme(themeColorSchemeName)**

express   一个代表 **Slide** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| themeColorSchemeName | 必选 | string | 应用于幻灯片的配色方案文件的路径和名称。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将配色方案应用于第一个演文示稿的第一张幻灯片。*/
function test() {
    let slide = Presentations.Item(1).Slides.Item(1)
    slide.ApplyThemeColorScheme("E:/blue.xml")
}
```


```JavaScript
/*本示例将配色方案应用于活动演文示稿中名为“test”的幻灯片。*/
function test() {
    let slides = ActivePresentation.Slides
    for (let i = slides.Count; i > 0; i--) {
        if (slides.Item(i).Name == "test") {
            slides.Item(i).ApplyThemeColorScheme("E:\\test.xml")
        }
    }
}
```
