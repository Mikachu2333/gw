# LegendEntries.Item

从集合中返回一个对象。
  


## 语法

express.**Item(Index)**

express   一个代表 **LegendEntries** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的索引号。 |

## 返回值

集合中包含的一个 **[LegendEntry](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LegendEntry/obj)** 对象。

## 示例


```JavaScript
/*本示例更改活动演示文稿的第一张幻灯片中第一个图表的第一个图例项的文字字体。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.Legend.LegendEntries().Item(1).Font.Italic = true
    }
}
```


```JavaScript
/*本示例删除活动演示文稿的第一张幻灯片上第一个图表的第一个图例项。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Legend.LegendEntries().Item(1).Delete()
}
```
