# AutoTextEntries.Add

返回一个 **AutoTextEntry** 对象，该对象代表添加到可用的“自动图文集”词条列表中的“自动图文集”词条。



## 语法

express.**Add(Name, Range)**

express   一个代表 **AutoTextEntries** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 必选 | string | 在键入时启用“自动图文集”词条的文本。 |
| Range | 必选 | Range | 在键入Name时插入的文本区域。 |

## 返回值

AutoTextEntry

## 示例


```JavaScript
/*本示例添加名为Sample Text的“自动图文集”词条，它包含所选区域的文本。本示例假定用户在活动文档中选择了文本。*/
function test() {
    Application.NormalTemplate.AutoTextEntries.Add("Sample Text", Selection.Range)
}
```


```JavaScript
/*本示例添加名为example的“自动图文集”词条。*/
function test() {
    Application.NormalTemplate.AutoTextEntries.Add("example", ActiveDocument.Range(1, 5))
}
```
