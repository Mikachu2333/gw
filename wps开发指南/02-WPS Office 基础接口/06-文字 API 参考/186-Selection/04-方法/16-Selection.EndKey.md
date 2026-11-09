# Selection.EndKey

将选定内容移动或扩展到指定单位的末尾。



## 语法

express.**EndKey(Unit, Extend)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Unit | 可选 | any | 移动或扩展选定内容时基于的单位。可以是 **[WdUnits](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdUnits)** 常量之一。默认值为 **wdLine** 。 |
| Extend | 可选 | any | 指定移动所选内容的方式。可以是任意 **[WdMovementType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdMovementType)** 常量。如果该参数值为 *wdMove*，则所选内容折叠到一个插入点中并移至指定单位的末尾。如果该参数值为 **wdExtend** ，则所选内容的末尾扩展到指定单位的末尾。默认值为 **wdMove** 。 |

## 返回值

number（int4 精度）

## 说明


该方法返回表明选定内容或活动结尾实际移动的字符数的整数；如果移动不成功，则返回 0（零）。



## 示例


```JavaScript
/*本示例将选定内容移动到当前行末尾，然后把移动的字符数赋给 pos 变量。*/
function test() {
    let pos = Application.Selection.EndKey(wdLine, wdMove)
}
```


```JavaScript
/*本示例将所选内容扩展到当前文字部分的末尾。如果所选内容位于文档正文部分，则本示例将所选内容扩展到文档的末尾。*/
function test() {
    ActiveWindow.Selection.EndKey(wdStory, wdExtend)
}
```
