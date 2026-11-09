# Range.Merge

由指定的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象创建合并单元格。



## 语法

express.**Merge(Across)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Across | 可选 | any | 如果为 True，则将指定区域中每一行的单元格合并为一个单独的合并单元格。默认值是 False。 |

## 返回值

void

## 说明


合并区域的值在该区域左上角的单元格中指定。



## 示例


```JavaScript
/*本示例将 A1:B3 单元格区域合并*/
function test() {
    Range("A1:B3").Merge()
}
```


```JavaScript
/*本示例将 A1:B3 单元格区域内单元格逐行合并*/
function test() {
    Range("A1:B3").Merge(true)
}
```
