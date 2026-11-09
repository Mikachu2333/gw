# Workbook.DoNotPromptForConvert

返回或设置一个值，该值表示在工作簿包含 ET 2007 以前的 ET 版本所不支持的功能时，是否应该提示用户转换工作簿。可读/写 **Boolean** 类型。



## 语法

express.**DoNotPromptForConvert**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例演示DoNotPromptForConvert属性的值。*/
function test() {
    alert(ActiveWorkbook.DoNotPromptForConvert)
}
```


```JavaScript
/*本示例演示如果DoNotPromptForConvert属性为false，将其设置为true。*/
function test() {
    if (!ActiveWorkbook.DoNotPromptForConvert) {
        alert(`当前DoNotPromptForConvert属性为：${ActiveWorkbook.DoNotPromptForConvert}\n点击"确定"后将设置为：true`)
        ActiveWorkbook.DoNotPromptForConvert = true
    }
}
```
