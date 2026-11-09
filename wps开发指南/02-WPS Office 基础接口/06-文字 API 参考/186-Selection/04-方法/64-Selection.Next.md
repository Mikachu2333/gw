# Selection.Next

返回一个 **Range** 对象，该对象代表相对于指定的选择范围的下一个单位。



## 语法

express.**Next(Unit, Count)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Unit | 可选 | any | 要计算的单位类型。可以是任意 **[WdUnits](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdUnits)** 常量。 |
| Count | 可选 | any | 要向前移动的单位数。默认值为 1。 |

## 返回值

Range

## 说明


如果选择范围恰好在指定的 *Unit* 之前，则选择范围移至下一个单位。



## 示例


```JavaScript
/*如果选择范围恰好在一个单词之前，本示例将选择范围向前移至后面的单词。*/
function test() {
    Selection.Next(wdWord, 1).Select()
}
```


```JavaScript
/*本示例显示当前所选内容的下一个段落的文本。*/
function test() {
    alert(Selection.Next(wdParagraph, 1).Text)
}
```
