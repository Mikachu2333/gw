# Template.NoProofing

如果拼写和语法检查程序忽略基于此模板的文档，则该属性值为 **msoTrue** 。可读写 **Long** 类型。



## 语法

express.**NoProofing**

express   一个代表 **Template** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示拼写和语法检查程序是否忽略基于第一个模板的文档。*/
function test() {
    alert(Application.Templates.Item(1).NoProofing === msoTrue)
}
```


```JavaScript
/*本示例将拼写和语法检查程序应用于基于所有模板的文档。*/
function test() {
    for (let i = 1; i <= Templates.Count; i++) {
        Templates.Item(i).NoProofing = msoFalse
    }
}
```
