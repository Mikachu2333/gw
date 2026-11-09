# Worksheet.ClearCircles

清除指定工作表的无效数据项的圈释。



## 语法

express.**ClearCircles()**

express   一个代表 **Worksheet** 对象的变量。

## 返回值

void

## 说明


可用 **[CircleInvalid](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/CircleInvalid)** 方法对含有无效数据的单元格进行圈释。



## 示例


```JavaScript
/*本示例清除对第一张工作表中无效数据项的圈释。*/
function test() {
    Worksheets.Item(1).ClearCircles()
}
```


```JavaScript
/*本示例清除打开的所有工作表中无效数据项的圈释。*/
function test() {
    for (let i = 1; i <= Worksheets.Count; i++) {
        Worksheets.Item(i).ClearCircles()
    }
}
```
