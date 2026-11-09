# Templates.Item

返回集合中的单个 **Template** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Templates** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的单个对象。可以是代表序号位置的 **Long** 类型值，或代表单个对象名称的 **String** 类型值。 |

## 返回值

Template

## 示例


```JavaScript
/*本示例显示第一个模板的名称。*/
function test() {
    alert(Application.Templates.Item(1).Name)
}
```


```JavaScript
/*本示例将所选内容的文本替换为第一个模板的路径。*/
function test() {
    Selection.Range.Text = Application.Templates.Item(1).Path
}
```
