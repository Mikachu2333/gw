# CaptionLabels.Add

返回一个 **CaptionLabel** 对象，该对象代表画布自定义题注标签。



## 语法

express.**Add(Name)**

express   一个代表 **CaptionLabels** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 必选 | string | 自定义题注标签的名称。 |

## 返回值

CaptionLabel

## 示例


```JavaScript
/*本示例添加名为 Demo Slide 的自定义题注标签。要验证是否添加了该自定义标签，请查看“题注”对话框中的“标签”组合框（可从“引用”菜单上访问）。*/
function test() {
    Application.CaptionLabels.Add("Demo Slide")
}
```


```JavaScript
/*本示例添加名为 example 的自定义题注标签，然后显示题注标签的数量。*/
function test() {
    Application.CaptionLabels.Add("example")
    alert(Application.CaptionLabels.Count)
}
```
