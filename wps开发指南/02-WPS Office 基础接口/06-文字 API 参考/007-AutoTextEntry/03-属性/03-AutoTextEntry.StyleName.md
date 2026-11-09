# AutoTextEntry.StyleName

返回应用于指定的“自动图文集”词条的样式名称。 **String** 类型，只读。



## 语法

express.**StyleName**

express   一个代表 **AutoTextEntry** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例创建一个“自动图文集”词条并显示该词条的样式名称。*/
function test() {
    let autoTextEntry = NormalTemplate.AutoTextEntries.Add("rsvp", Selection.Range)
    alert(autoTextEntry.StyleName)
}
```


```JavaScript
/*本示例显示 Normal 模板中第一个“自动图文集”词条的样式名称。*/
function test() {
    alert(Application.NormalTemplate.AutoTextEntries.Item(1).StyleName)
}
```
