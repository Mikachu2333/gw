# Dictionaries.Item

返回集合中的单个 **Dictionary** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Dictionaries** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的单个对象。可以是代表序号位置的 **Long** 类型值，或代表单个对象名称的 **String** 类型值。 |

## 返回值

Dictionary

## 示例


```JavaScript
/*本示例显示第一个自定义词典的名称。*/
function test() {
    let dictionary = Application.CustomDictionaries.Item(1)
    alert(dictionary.Name)
}
```


```JavaScript
/*本示例将所选内容的文本替换为所有自定义词典的名称和路径。*/
function test() {
    let str = ""
    for (let i = 1; i <= Application.CustomDictionaries.Count; i++) {
        let dictionary = Application.CustomDictionaries.Item(i)
        str += dictionary.Name + "\t" + dictionary.Path + "\n"
    }
    Selection.Range.Text = str
}
```
