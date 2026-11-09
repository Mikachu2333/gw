# Range.FindNext

继续由 **[Find](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Find)** 方法开始的搜索。查找匹配相同条件的下一个单元格，并返回表示该单元格的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象。该操作不影响选定内容和活动单元格。

返回值类型为Range。



## 语法

express.**FindNext(After)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| After | 可选 | any | 指定一个单元格，查找将从该单元格之后开始。此单元格对应于从用户界面搜索时的活动单元格位置。注意，After 必须是查找区域中的单个单元格。注意，搜索是从该单元格之后开始的；直到本方法环绕到此单元格时，才检测其内容。如果未指定本参数，查找将从区域的左上角单元格之后开始。 |

## 返回值

Range

## 说明


当查找到指定查找区域的末尾时，本方法将环绕至区域的开始继续搜索。发生环绕后，为停止查找，可保存第一次找到的单元格地址，然后测试下一个查找到的单元格地址是否与其相同。



## 示例


```JavaScript
/*本示例在单元格区域 A1:A500 中查找值为 2 的单元格，并将这些单元格的值变为 5。*/
function test() {
    let add = Application.Worksheets.Item(1).Range("A1:A500")
    let c = add.Find(2, undefined, xlValues)
    if (c != null) {
        let firstAddress = c.Address()
        do {
            c.Value2 = 5
            c = add.FindNext(c)
        } while (c != null && c.Address() != firstAddress)
    }
}
```


```JavaScript
/*本示例搜索 A1:E15 区域中第二个含有 12 的单元格，并将它的值设置为 200*/
function test() {
    let c = Range("A1:E15").Find(12, undefined, xlValues)
    c = Range("A1:E15").FindNext(c)
    c.Value2 = 200
}
```
