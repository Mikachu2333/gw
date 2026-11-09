# Languages.Item

返回集合中的单个 **Language** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Languages** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的单个对象。可以是 **WdLanguageID** 常量之一，或 **WdLanguageID** 常量对应的 **Long** 类型值，或代表单个对象名称的 **String** 类型值。 |

## 返回值

Language

## 示例


```JavaScript
/*本示例显示简体中文的名称。*/
function test() {
    alert(Application.Languages.Item(wdSimplifiedChinese).Name)
}
```


```JavaScript
/*本示例将所选内容的文本替换为以用户语言展示的简体中文的名称。*/
function test() {
    Selection.Range.Text = Application.Languages.Item(wdSimplifiedChinese).NameLocal
}
```
