# FontNames.Item

返回一个 **String** 类型值，该值代表字体名称。



## 语法

express.**Item(Index)**

express   一个代表 **FontNames** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。可以是代表单个对象序号位置的 **Long** 类型值。 |

## 返回值

String

## 示例


```JavaScript
/*本示例显示 FontNames 集合中第一个字体名称。*/
function test() {
    alert(Application.FontNames.Item(1))
}
```


```JavaScript
/*本示例将所选内容的文本替换为 FontNames 集合中最后一个字体名称。*/
function test() {
    let num = Application.FontNames.Count
    Selection.Range.Text = Application.FontNames.Item(num)
}
```
