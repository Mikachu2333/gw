# Selection.Previous

将所选文本移动指定的单位数，并返回与折叠的所选内容相关的 **Range** 对象。



## 语法

express.**Previous(Unit, Count)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Unit | 可选 | any | 指定所选内容移动的单位的类型。可以是 **[WdUnits](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdUnits)** 常量之一。 |
| Count | 可选 | any | 要移动的单位数。默认值为 1。 |

## 返回值

Range

## 说明


如果所选内容恰好在指定的 Unit 之后，则将所选内容移动到前一个单位。



## 示例


```JavaScript
/*如果所选内容恰好在一个词之后（尾部空格之前），本示例将所选内容往回移动到前一个词。*/
function test() {
    Selection.Previous(wdWord, 1).Select()
}
```


```JavaScript
/*本示例显示当前所选内容的上一个段落的文本。*/
function test() {
    alert(Selection.Previous(wdParagraph, 1).Text)
}
```
