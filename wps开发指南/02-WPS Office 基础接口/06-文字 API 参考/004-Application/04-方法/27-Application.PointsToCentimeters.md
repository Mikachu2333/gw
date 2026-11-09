# Application.PointsToCentimeters

将度量单位由磅转换为厘米（1 厘米 = 28.35 磅）。以 **Single** 类型返回转换结果。



## 语法

express.**PointsToCentimeters(Points)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Points | 必选 | number（float 精度） | 以磅为单位的度量值。 |

## 返回值

Single

## 示例


```JavaScript
/*本示例将 30 磅的度量数值转换为相应的厘米值。*/
function test() {
    alert(Application.PointsToCentimeters(30) + " centimeters")
}
```


```JavaScript
/*本示例根据用户输入的 intUnit 变量的值（从 1 到 5 的值，表明结果的度量单位），将 100 磅转换为厘米、英寸、行、毫米或十二点活字。*/
function test() {
    let intUnit = Number(InputBox("请输入 1 到 5 的值，以转换指定磅值为\n厘米、英寸、行、毫米或十二点活字："))
    switch (intUnit) {
        case 1:
            alert(PointsToCentimeters(100))
            break
        case 2:
            alert(PointsToInches(100))
            break
        case 3:
            alert(PointsToLines(100))
            break
        case 4:
            alert(PointsToMillimeters(100))
            break
        case 5:
            alert(PointsToPicas(100))
            break
        default:
            alert("无效的过程调用")
    }
}
```
