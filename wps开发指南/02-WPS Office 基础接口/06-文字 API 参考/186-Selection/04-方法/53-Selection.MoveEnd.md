# Selection.MoveEnd

移动范围或所选内容的结束字符位置。



## 语法

express.**MoveEnd(Unit, Count)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Unit | 可选 | any | 结束字符位置要移动的单位。默认值为 wdCharacter。 |
| Count | 可选 | any | 要移动的单位数。如果该值为正，则结束字符在文档中向前移动；如果该值为负，则结束字符向后移动。如果结束位置超过了起始位置，则折叠该范围并将首末两个字符的位置移至同一位置。默认值为 1。 |

## 返回值

number（int4 精度）

## 说明


此方法如果返回一个整数，表示范围或所选内容实际移动的单位数；如果返回 0（零），则移动失败。



## 示例


```JavaScript
/*本示例将所选内容结尾后移一个字符（即将所选内容缩小一个字符）。空格算作一个字符。*/
function test() {
    Application.Selection.MoveEnd(wdCharacter, -1)
}
```


```JavaScript
/*本示例将所选内容的结尾移至行尾（即将所选内容扩展到行尾）。*/
function test() {
    Application.Selection.MoveEnd(wdLine, 1)
}
```
