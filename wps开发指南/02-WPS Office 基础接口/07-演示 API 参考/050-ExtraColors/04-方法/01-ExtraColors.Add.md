# ExtraColors.Add

如果尚未添加某颜色，则将该颜色添加到其他颜色中，使之在演示文稿中可用。



## 语法

express.**Add(Type)**

express   一个代表 **ExtraColors** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 必选 | number（int4 精度） | 要添加的颜色的红绿蓝（RGB）值。 |

## 返回值

void

## 示例


```JavaScript
/*本示例向活动演示文稿添加一个额外的颜色。*/
function test() {
    ActivePresentation.ExtraColors.Add(msoThemeAccent5)
}
```


```JavaScript
/*本示例为第一篇演示文稿添加额外的颜色，并显示该演示文稿的额外颜色的数量。*/
function test() {
    let extraColors = Presentations.Item(1).ExtraColors
    extraColors.Add(msoThemeLight1)
    alert(extraColors.Count)
}
```
