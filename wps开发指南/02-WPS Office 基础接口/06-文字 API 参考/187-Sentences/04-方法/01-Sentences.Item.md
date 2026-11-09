# Sentences.Item

返回集合中的单个 **Range** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Sentences** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。可以是代表单个对象序号位置的 **Long** 类型值。 |

## 返回值

Range

## 示例


```JavaScript
/*本示例显示活动文档中第二句的文本。*/
function test() {
    alert(ActiveDocument.Sentences.Item(2).Text)
}
```


```JavaScript
/*本示例将所选区域中第二句字体颜色设置为红色。*/
function test() {
    Selection.Sentences.Item(2).Font.Color = RGB(255, 0, 0)
}
```
