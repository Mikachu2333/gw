# Fonts.Replace

替换 **Fonts** 集合中的一种字体。



## 语法

express.**Replace(Original, Replacement)**

express   一个代表 **Fonts** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Original | 必选 | string | 要替换的字体的名称。 |
| Replacement | 必选 | string | 替换字体的名称。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将当前演示文稿中的 Times New Roman 字体替换为 Courier 字体。*/
function test() {
    Application.ActivePresentation.Fonts.Replace("Times New Roman", "Courier")
}
```


```JavaScript
/*本示例将第一篇演示文稿中的黑体替换为宋体，并通知用户。*/
function test() {
    Presentations.Item(1).Fonts.Replace("黑体", "宋体")
    alert("已将黑体替换为宋体")
}
```
