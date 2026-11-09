# Selection.Expand

扩展指定区域或选定内容。返回添至该区域或选定内容的字符数。 **Long** 类型。



## 语法

express.**Expand(Unit)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Unit | 可选 | any | **WdUnits** 变量，表示指定区域扩展距离的度量单位。默认值为 **wdWord** 。 |

## 返回值

number（int4 精度）

## 示例


```JavaScript
/*本示例先将选定内容的首个字符设为大写，再将选定内容扩展至整句。*/
function test() {
    Selection.Characters.Item(1).Case = wdTitleSentence
    Selection.Expand(wdSentence)
}
```


```JavaScript
/*本示例以字符为单位扩大选定内容，并显示添至所选内容的字符数。*/
function test() {
    alert(ActiveWindow.Selection.Expand(wdCharacter))
}
```
