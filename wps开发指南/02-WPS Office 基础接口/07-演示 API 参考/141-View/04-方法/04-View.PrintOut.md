# View.PrintOut

打印指定的演示文稿。



## 语法

express.**PrintOut(From, To, PrintToFile, Copies, Collate)**

express   一个代表 **View** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| From | 可选 | number（int 精度） | 要打印的第一页的页码。如果忽略此参数，则从演示文稿的开头开始打印。指定 **To** 和 **From** 参数会设置 **[PrintRanges](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintRanges/obj)** 对象的内容，并设置演示文稿的 **RangeType** 属性的值。 |
| To | 可选 | number（int 精度） | 要打印的最后一页的页码。如果忽略此参数，则一直打印到演示文稿的末尾。指定 **To** 和 **From** 参数会设置 **[PrintRanges](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintRanges/obj)** 对象的内容，并设置演示文稿的 **RangeType** 属性的值。 |
| PrintToFile | 可选 | string | 要输出到的文件名。如果指定此参数，则文件将输出到某个文件，而不是发送到打印机。如果忽略此参数，文件将发送至打印机。 |
| Copies | 可选 | number（int 精度） | 要打印的份数。如果忽略此参数，则只打印一份。指定此参数会设置 **[NumberOfCopies](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintOptions/member/NumberOfCopies)** 属性的值。 |
| Collate | 可选 | MsoTriState | 如果忽略此参数，将逐份打印多份。指定此参数会设置 **[Collate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PrintOptions/member/Collate)** 属性的值。 |

## 返回值

void

## 说明


_Collate_ 参数值可以是下列 **MsoTriState** 常量之一：

| 常量           | 说明                           |
| ------------ | ---------------------------- |
| **msoFalse** | 打印一页的所有副本，然后再打印下一页的第一个副本。    |
| **msoTrue**  | 先打印该演示文稿的完整副本，然后再打印下一副本的第一页。 |



## 示例


```JavaScript
/*本示例打印第一个窗口视图的演示文稿。*/
function test() {
    Windows.Item(1).View.PrintOut()
}
```


```JavaScript
/*本示例将活动窗口的视图中当前展示的演示文稿的第二页到第五页逐份打印两份。*/
function test() {
    ActiveWindow.View.PrintOut(2, 5, null, 2, msoTrue)
}
```
