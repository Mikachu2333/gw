# AddIn.Name

返回加载项的名称。 **String** 类型，只读。



## 语法

express.**Name**

express   一个代表 **AddIn** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示第一个加载项的名称。*/
function test() {
    alert(Application.AddIns.Item(1).Name)
}
```


```JavaScript
/*本示例将所选内容的文本替换为所有加载项的名称。*/
function test() {
    let str = ""
    for (let i = 1; i <= Application.AddIns.Count; i++) {
        str = str + Application.AddIns.Item(i).Name + "\n"
    }
    Selection.Range.Text = str
}
```
