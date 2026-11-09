# WorksheetFunction 对象

用作可从 JavaScript 中调用的 ET 工作表函数的容器。

## 说明


使用 **Application** 对象的 **WorksheetFunction** 属性可返回 **WorksheetFunction** 对象。


## 示例


```JavaScript
/*下例显示给区域 A1:C10 应用 Min 工作表函数的结果。*/
function test() {
    let range = Application.Worksheets.Item("Sheet1").Range("A1:C10")
    let min = Application.WorksheetFunction.Min(range)
    alert(min)
}
```


```JavaScript
/*本示例将对选中区域的列 A 中的每个值执行拼写检查，如果值拼写不正确，则会在列 B 中插入文本“Wrong”；否则，将在列 B 中插入。本示例使用 CountA 工作表函数确定列 A 中包含某个值的单元格数量。 在本示例中，列 A 中的值为文本。*/
function test() {
    try {
        // Go through all the cells in column A, and perform a spellcheck on the value.
        // If the value is spelled incorrectly, write "Wrong" in column B; otherwise, write "OK".
        for (let i = 1; i <= WorksheetFunction.CountA(Selection.Columns(1)); i++) {
            if (!Application.CheckSpelling(ActiveSheet.Cells(i, 1).Value2, null, true)) {
                ActiveSheet.Cells(i, 2).Value2 = "Wrong"
            } else {
                ActiveSheet.Cells(i, 2).Value2 = "OK"
            }
        }
    } catch (error) {
        // Error handling routine.
        alert("The spell check feature is not installed!")
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [AccrInt](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/AccrInt) | 返回定期付息有价证券的应计利息。 |
| [AccrIntM](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/AccrIntM) | 返回到期一次性付息有价证券的应计利息。 |
| [Acos](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Acos) | 返回数字的反余弦值。反余弦值是余弦值为 *Arg1* 的角度。返回的角度以弧度给出，范围从 0（零）到 pi。 |
| [Acosh](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Acosh) | 返回数字的反双曲余弦值。数字必须大于或等于 1。反双曲余弦值的双曲余弦值为 *Arg1*，因此 Acosh(Cosh(number)) 等于 *Arg1*。 |
| [Aggregate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Aggregate) | 返回列表或数据库中的一个聚合。 |
| [AmorDegrc](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/AmorDegrc) | 返回每个结算期的折旧值。此函数为法国会计系统提供。 |
| [AmorLinc](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/AmorLinc) | 返回每个结算期的折旧值。此函数为法国会计系统提供。 |
| [And](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/And) | 如果其所有参数都为 TRUE，则返回 TRUE；如果一个或多个参数为 FALSE，则返回 FALSE。 |
| [Asc](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Asc) | 对于双字节字符集 (DBCS) 语言，将全角（双字节）字符更改为半角（单字节）字符。 |
| [Asin](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Asin) | 返回一个数字的反正弦值。反正弦值是一个角度，这个角度的正弦值为 *Arg1*。返回的角度采用弧度的形式，其范围从 -pi/2 到 pi/2。 |
| [Asinh](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Asinh) | 返回数字的反双曲正弦值。反双曲正弦值的双曲正弦值为 *Arg1*，因此 Asinh(Sinh(number)) 等于 *Arg1*。 |
| [Atan2](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Atan2) | 返回指定的 x 和 y 坐标值的反正切值。反正切值是角度，是从 x 轴到通过原点 (0, 0) 和坐标点 (x\_num, y\_num) 的直线之间的夹角。该角度用弧度给出，介于 -pi 和 pi 之间（不包括 -pi）。 |
| [Atanh](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Atanh) | 返回数字的反双曲正切值。数字必须介于 -1 和 1 之间（不包括 -1 和 1）。 |
| [AveDev](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/AveDev) | 返回多个数据点与其平均值的绝对偏差的平均值。AveDev 是对数据集中可变性的度量。 |
| [Average](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Average) | 返回参数的平均值（算术平均值）。 |
| [AverageIf](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/AverageIf) | 返回区域内满足给定条件的所有单元格的平均值（算术平均值）。 |
| [AverageIfs](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/AverageIfs) | 返回满足多个条件的所有单元格的平均值（算术平均值）。 |
| [BesselI](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/BesselI) | 返回修正的 Bessel 函数，它等效于计算纯虚数参数值的 Bessel 函数。 |
| [BesselJ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/BesselJ) | 返回 Bessel 函数。 |
| [BesselK](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/BesselK) | 返回修正 Bessel 函数，它等效于根据纯虚数参数计算的 Bessel 函数。 |
| [BesselY](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/BesselY) | 返回 Bessel 函数，该函数也称为 Weber 函数或 Neumann 函数。 |
| [BetaDist](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/BetaDist) | 返回 Beta 累积分布函数。  此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 Beta\_Dist 方法。 |
| [BetaInv](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/BetaInv) | 返回指定的 Beta 分布的累积分布函数的反函数。即，如果 probability = BetaDist(x,...)，则 BetaInv(probability,...) = x。  此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 Beta\_Inv 方法。 |
| [Bin2Dec](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Bin2Dec) | 将二进制数转换为十进制数。 |
| [Bin2Hex](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Bin2Hex) | 将二进制数转换为十六进制数。 |
| [Bin2Oct](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Bin2Oct) | 将二进制数转换为八进制数。 |
| [BinomDist](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/BinomDist) | 返回一元二项式分布的概率。 |
| [Ceiling](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Ceiling) | 返回向上舍入（远离零）到最接近的 significance 的倍数的 number。  此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 **Ceiling\_Precise** 方法。 |
| [ChiDist](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/ChiDist) | 返回 χ2 分布的单尾概率。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 ChiSq\_Dist\_RT 和 ChiSq\_Dist 方法。 |
| [ChiInv](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/ChiInv) | 返回 χ2 分布的单尾概率的反函数。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 ChiSq\_Inv\_RT 和 ChiSq\_Inv 方法。 |
| [ChiTest](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/ChiTest) | 返回独立性检验值。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 WPS表格 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 [ChiSq\_Test](#TODO) 方法。 |
| [Choose](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Choose) | 将 _Arg1_ 作为索引使用，以返回值参数列表中的值。 |
| [Clean](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Clean) | 删除文本中的所有非打印字符。 |
| [Combin](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Combin) | 返回从给定的项目数中提取若干项目的组合数。使用 Combin 可以确定给定的项目数中所有可能的项目组合数。 |
| [Complex](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Complex) | 将实系数及虚系数转换为 x + yi 或 x + yj 形式的复数。 |
| [Confidence](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Confidence) | 返回一个值，可使用该值构造总体平均值的置信区间。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 WPS表格 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 [Confidence\_Norm](#TODO) 和 [Confidence\_T](#TODO) 方法。 |
| [Convert](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Convert) | 将数字从一个度量系统转换为另一个度量系统。例如，Convert 可以将一个以“英里”为单位的距离表转换成一个以“公里”为单位的距离表。 |
| [Correl](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Correl) | 返回单元格区域 _Arg1_ 和 _Arg2_ 的相关系数。 |
| [Cosh](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Cosh) | 返回数字的双曲余弦值。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Count) | 计算包含数字的单元格的个数，以及参数列表中的数字的个数。 |
| [CountA](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/CountA) | 计算非空单元格及参数列表中值的个数。 |
| [CountBlank](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/CountBlank) | 计算指定单元格区域中空单元格的个数。 |
| [CountIf](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/CountIf) | 计算区域中满足给定条件的单元格的个数。 |
| [CountIfs](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/CountIfs) | 计算区域中满足多个条件的单元格的个数。 |
| [CoupDayBs](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/CoupDayBs) | 返回从息票期开始到结算日的天数。 |
| [CoupDaysNc](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/CoupDaysNc) | 返回从结算日到下一个息票日之间的天数。 |
| [Covar](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Covar) | 返回协方差，即每对数据点的偏差乘积的平均数。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 WPS表格 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 [Covariance\_P](#TODO) 和 [Covariance\_S](#TODO) 方法。 |
| [CritBinom](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/CritBinom) | 返回使累积二项式分布大于或等于临界值的最小值。 |
| [CumIPmt](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/CumIPmt) | 返回一笔贷款在 start\_period 到 end\_period 期间累积支付的利息。 |
| [CumPrinc](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/CumPrinc) | 返回一笔贷款在 start\_period 到 end\_period 期间累积支付的本金。 |
| [DAverage](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/DAverage) | 计算列表或数据库的列中符合指定条件的值的平均值。 |
| [DCount](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/DCount) | 计算列表或数据库的列中符合指定条件并且包含数字的单元格的个数。 |
| [DCountA](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/DCountA) | 计算列表或数据库的列中符合指定条件的非空单元格的个数。 |
| [DGet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/DGet) | 从列表或数据库的列中提取符合指定条件的单个值。 |
| [DMax](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/DMax) | 返回列表或数据库的列中符合指定条件的最大数字。 |
| [DMin](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/DMin) | 返回列表或数据库的列中符合指定条件的最小数字。 |
| [DProduct](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/DProduct) | 计算列表或数据库的列中符合指定条件的值的乘积。 |
| [DStDev](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/DStDev) | 将列表或数据库的列中符合指定条件的数字作为样本，估算总体的标准偏差。 |
| [DStDevP](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/DStDevP) | 将列表或数据库的列中符合指定条件的数字作为整个总体，计算总体的标准偏差。 |
| [DSum](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/DSum) | 计算列表或数据库的列中符合指定条件的数字之和。 |
| [DVar](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/DVar) | 将列表或数据库的列中符合指定条件的数字作为一个样本，估算总体的方差。 |
| [DVarP](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/DVarP) | 将列表或数据库的列中符合指定条件的数字作为整个总体，计算总体的方差。 |
| [Days360](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Days360) | 按一年 360 天的算法（一年 12 个月，每月 30 天）返回两个日期之间的天数，它用于某些会计计算中。 |
| [Db](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Db) | 使用固定余额递减法返回指定周期内某项资产的折旧值。 |
| [Ddb](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Ddb) | 使用双倍余额递减法或其他指定方法返回某项资产在指定周期内的折旧值。 |
| [Dec2Bin](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Dec2Bin) | 将十进制数转换为二进制数。 |
| [Dec2Hex](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Dec2Hex) | 将十进制数转换为十六进制数。 |
| [Dec2Oct](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Dec2Oct) | 将十进制数转换为八进制数。 |
| [Degrees](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Degrees) | 将弧度转换为度。 |
| [Delta](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Delta) | 检验两个值是否相等。如果 number1 = number2，则返回 1；否则返回 0。 |
| [DevSq](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/DevSq) | 返回数据点与其样本平均值的偏差的平方和。 |
| [Dollar](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Dollar) | 本“帮助”主题中描述的函数可将数字转换为文本格式，并应用货币符号。函数的名称及其应用的货币符号取决于您的语言设置。 |
| [EDate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/EDate) | 返回表示某个数据的序列号，该数据代表指定日期 (start\_date) 之前或之后的月份数。使用函数 EDATE 可以计算与发行日处于一月中同一天的到期日的日期。 |
| [EoMonth](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/EoMonth) | 返回 start\_date 的指定月数之前或之后的月份的最后一天的序列号。用函数 EOMONTH 可计算正好在特定月份中最后一天内的到期日或发行日。 |
| [Erf](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Erf) | 返回误差函数在 lower\_limit 和 upper\_limit 之间的积分。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 **[Erf\_Precise](#TODO)** 方法。 |
| [ErfC](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/ErfC) | 返回从指定参数到无穷积分的 ERF 函数的余误差函数。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 [ErfC\_Precise](#TODO) 方法。 |
| [Even](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Even) | 返回向上舍入到最接近的偶数的数字。可以使用此函数处理成对出现的项目。例如，一个包装箱一行可容纳一宗或两宗货物。只有当这些货物的数目向上舍入到最接近的偶数，与包装箱的容量相匹配时，包装箱才会装满。 |
| [ExponDist](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/ExponDist) | 返回指数分布。使用 EXPONDIST 可以建立事件之间的时间间隔模型，如银行自动提款机支付一次现金所花费的时间。例如，可以使用函数 EXPONDIST 来确定这一过程最长持续 1 分钟的发生概率。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 [Expon\_Dist](#TODO) 方法。 |
| [FDist](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/FDist) | 返回 F 概率分布。可以使用此函数确定两个数据集是否存在变化程度上的不同。例如，可以分析进入高校的男生、女生的考试分数，确定女生分数的变化程度是否与男生不同。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 [F\_Dist\_RT](#TODO) 和 [F\_Dist](#TODO) 方法。 |
| [FInv](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/FInv) | 返回 F 概率分布的反函数。如果 p = FDIST(x,...)，则 FINV(p,...) = x。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 [F\_Inv\_RT](#TODO) 和 [F\_Inv](#TODO) 方法。 |
| [FTest](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/FTest) | 返回 F 检验的结果。F 检验返回的是当 array1 和 array2 的方差无明显不同时的双尾概率。可以使用此函数来确定两个样本的方差是否不同。例如，给定公立和私立学校的测试成绩，可以检验各学校间测试成绩的差别程度。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 [F\_Test](#TODO) 方法。 |
| [Fact](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Fact) | 返回数的阶乘。一个数的阶乘等于 1\*2\*3\*...\* 该数。 |
| [FactDouble](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/FactDouble) | 返回数字的双倍阶乘。 |
| [Find](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Find) | 在工作表中查找特定信息。 |
| [FindB](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/FindB) | FIND 与 FINDB 查找一个文本字符串内的另一个文本字符串，并返回一个数字，表示从文本字符串（从中查找另一个文本字符串）的第一个字符起开始查找的第一个文本字符串的起始位置。 |
| [Fisher](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Fisher) | 返回点 x 的 Fisher 变换。该变换生成一个正态分布而非偏斜的函数。使用此函数可以完成相关系数的假设检验。 |
| [FisherInv](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/FisherInv) | 返回 Fisher 变换的反函数值。使用此变换可以分析数据区域或数组之间的相关性。如果 y = FISHER(x)，则 FISHERINV(y) = x。 |
| [Fixed](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Fixed) | 将数字舍入到指定的小数位数，使用句点和逗号，以十进制数格式对该数进行格式设置，并以文本形式返回结果。 |
| [Floor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Floor) | 将 number 向下舍入（向零的方向），使其等于最接近的 significance 的倍数。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 **[Floor\_Precise](#TODO)** 方法。 |
| [Forecast](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Forecast) | 根据已有的数值计算或预测未来值。此预测值为基于给定的 x 值推导出的 y 值。已知的数值为已有的 x 值和 y 值，再利用线性回归对新值进行预测。可以使用该函数对未来销售额、库存需求或消费趋势进行预测。 |
| [Frequency](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Frequency) | 计算数值在某个区域内的出现频率，然后返回一个垂直数组。例如，使用函数 FREQUENCY 可以在分数区域内计算测验分数的个数。由于函数 FREQUENCY 返回一个数组，所以它必须以数组公式的形式输入。 |
| [Fv](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Fv) | 基于固定利率和等额分期付款方式，返回某项投资的未来值。 |
| [GammaDist](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/GammaDist) | 返回 γ 分布函数值。可以使用此函数来研究具有偏态分布的变量。γ 分布通常用于队列分析。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 [Gamma\_Dist](#TODO) 方法。 |
| [GammaInv](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/GammaInv) | 返回 γ 累积分布函数的反函数。如果 p = GAMMADIST(x,...)，则 GAMMAINV(p,...) = x。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 [Gamma\_Inv](#TODO) 方法。 |
| [GammaLn](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/GammaLn) | 返回 γ 函数的自然对数 Γ(x)。 |
| [GammaLn_Precise](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/GammaLn_Precise) | 返回 γ 函数的自然对数 Γ(x)。 |
| [Gcd](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Gcd) | 返回两个或多个整数的最大公约数，最大公约数是能分别将 Number1 和 Number2 除尽的最大整数。 |
| [GeStep](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/GeStep) | 如果 Number 大于等于 step，返回 1，否则返回 0（零）。使用此函数可对一组值进行筛选。例如，通过计算多个函数 GESTEP 的返回值，可以检测出数据集中超过某个临界值的数据个数。 |
| [GeoMean](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/GeoMean) | 返回正数数组或区域的几何平均值。例如，可以使用函数 GEOMEAN 计算可变复利的平均增长率。 |
| [Growth](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Growth) | 根据现有的数据预测指数增长值。根据现有的 x 值和 y 值，GROWTH 函数返回一组新的 x 值对应的 y 值。可以使用 GROWTH 工作表函数来拟合满足现有 x 值和 y 值的指数曲线。 |
| [HLookup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/HLookup) | 在表格或数值数组的首行查找某个值，然后返回表格或数组当前列中指定行中的值。当比较值位于数据表的首行，并且要向下查找指定的行数时，请使用 HLOOKUP。当比较值位于要查找的数据左边的一列中时，请使用 VLOOKUP。 |
| [HarMean](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/HarMean) | 返回一组数据的调和平均值。调和平均值与倒数的算术平均值互为倒数。 |
| [Hex2Bin](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Hex2Bin) | 将十六进制数转换为二进制数。 |
| [Hex2Dec](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Hex2Dec) | 将十六进制数转换为十进制数。 |
| [Hex2Oct](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Hex2Oct) | 将十六进制数转换为八进制数。 |
| [HypGeomDist](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/HypGeomDist) | 返回超几何分布。在给定样本容量、样本总体成功次数和样本总体容量时，HYPGEOMDIST 返回样本取得给定成功次数的概率。使用 HYPGEOMDIST 可解决有限总体的问题，其中每个观察值或为成功或为失败，且其中给定样本容量的每一个子集有相等的发生概率。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 [HypGeom\_Dist](#TODO) 方法。 |
| [IfError](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/IfError) | 如果某个公式的计算结果为错误，则返回指定的一个值；否则返回该公式的结果。可以使用 IFERROR 函数捕获和处理公式 （公式：单元格中的一系列值、单元格引用、名称或运算符的组合，可生成新的值。公式总是以等号 (=) 开始。）中的错误。 |
| [ImConjugate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/ImConjugate) | 返回以 x + yi 或 x + yj 文本格式表示的复数的共轭复数。 |
| [ImCos](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/ImCos) | 返回以 x + yi 或 x + yj 文本格式表示的复数的余弦值。 |
| [ImDiv](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/ImDiv) | 返回以 x + yi 或 x + yj 文本格式表示的两个复数的商。 |
| [ImExp](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/ImExp) | 返回以 x + yi 或 x + yj 文本格式表示的复数的指数。 |
| [ImLn](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/ImLn) | 返回以 x + yi 或 x + yj 文本格式表示的复数的自然对数。 |
| [ImLog10](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/ImLog10) | 返回以 x + yi 或 x + yj 文本格式表示的复数的常用对数（以 10 为底数）。 |
| [ImLog2](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/ImLog2) | 返回以 x + yi 或 x + yj 文本格式表示的复数的以 2 为底数的对数。 |
| [ImPower](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/ImPower) | 返回以 x + yi 或 x + yj 文本格式表示的复数的乘幂。 |
| [ImProduct](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/ImProduct) | 返回以 x + yi 或 x + yj 文本格式表示的 2 到 29 个复数的乘积。 |
| [ImReal](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/ImReal) | 返回以 x + yi 或 x + yj 文本格式表示的复数的实系数。 |
| [ImSin](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/ImSin) | 返回以 x + yi 或 x + yj 文本格式表示的复数的正弦值。 |
| [ImSqrt](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/ImSqrt) | 返回以 x + yi 或 x + yj 文本格式表示的复数的平方根。 |
| [ImSub](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/ImSub) | 返回以 x + yi 或 x + yj 文本格式表示的两个复数的差。 |
| [ImSum](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/ImSum) | 返回以 x + yi 或 x + yj 文本格式表示的两个或更多个复数的和。 |
| [Imaginary](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Imaginary) | 返回以 x + yi 或 x + yj 文本格式表示的复数的虚系数。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Index) | 返回表/区域中的值或对值的引用。INDEX 函数有两种形式：数组 （数组：用于建立可生成多个结果或可对在行和列中排列的一组参数进行运算的单个公式。数组区域共用一个公式；数组常量是用作参数的一组常量。）形式和引用形式。 |
| [Intercept](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Intercept) | 利用现有的 x 值与 y 值计算直线与 y 轴的截距。截距为穿过已知的 known x 和 known y 数据点的线性回归线与 y 轴的交点。当自变量为 0（零）时，使用 INTERCEPT 函数可以决定因变量的值。例如，当所有的数据点都是在室温或更高的温度下取得的，可以用 INTERCEPT 函数预测在 0°C 时金属的电阻。 |
| [Ipmt](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Ipmt) | 基于固定利率和等额分期付款方式，返回给定期数内对某项投资支付的利息。 |
| [Irr](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Irr) | 返回由数值代表的一组现金流的内部收益率。这些现金流不必为均衡的，但作为年金，它们必须按固定的间隔产生，如按月或按年。内部收益率为投资的回收利率，其中包含定期支付（负值）和定期收入（正值）。 |
| [IsErr](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/IsErr) | 检查值类型，并根据值是否引用 #N/A 之外的任何错误值而返回 TRUE 或 FALSE。 |
| [IsError](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/IsError) | 检查值类型，并根据值是否引用任何错误值（#N/A、#VALUE!、#REF!、#DIV/0!、#NUM!、#NAME? 或 #NULL!）而返回 TRUE 或 FALSE。 |
| [IsEven](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/IsEven) | 检查值类型，并根据值是否为偶数而返回 TRUE 或 FALSE。 |
| [IsLogical](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/IsLogical) | 检查值类型，并根据值是否引用逻辑值而返回 TRUE 或 FALSE。 |
| [IsNA](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/IsNA) | 检查值类型，并根据值是否引用错误值 #N/A（值不可用）而返回 TRUE 或 FALSE。 |
| [IsNonText](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/IsNonText) | 检查值类型，并根据值是否引用任何非文本项而返回 TRUE 或 FALSE。（请注意，如果值引用了空白单元格，则此函数将返回 TRUE。） |
| [IsNumber](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/IsNumber) | 检查值类型，并根据值是否引用数字而返回 TRUE 或 FALSE。 |
| [IsOdd](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/IsOdd) | 检查值类型，并根据值是否为奇数而返回 TRUE 或 FALSE。 |
| [IsText](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/IsText) | 检查值类型，并根据值是否引用文本而返回 TRUE 或 FALSE。 |
| [Ispmt](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Ispmt) | 计算特定投资期内要支付的利息。提供此函数是为了与 Lotus 1-2-3 兼容。 |
| [Kurt](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Kurt) | 返回一组数据的峰值。峰值反映与正态分布相比某一分布的尖锐度或平坦度。正峰值表示相对尖锐的分布。负峰值表示相对平坦的分布。 |
| [Large](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Large) | 返回数据集中第 k 个最大值。使用此函数可以根据相对标准来选择数值。例如，可以使用函数 LARGE 得到第一名、第二名或第三名的得分。 |
| [Lcm](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Lcm) | 返回整数的最小公倍数。最小公倍数是所有整数参数 number1、number2 等等的最小正整数倍数。用函数 LCM 可以将分母不同的分数相加。 |
| [LinEst](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/LinEst) | 使用最小二乘法对已知数据进行最佳直线拟合，并返回描述此直线的数组。因为此函数返回数值数组，所以必须以数组公式的形式输入。 |
| [Ln](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Ln) | 返回数字的自然对数。自然对数以常数项 e (2.71828182845904) 为底。 |
| [Log](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Log) | 按所指定的底数，返回一个数的对数。 |
| [Log10](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Log10) | 返回以 10 为底的对数。 |
| [LogEst](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/LogEst) | 在回归分析中，计算最符合数据的指数回归拟合曲线，并返回描述该曲线的数值数组。因为此函数返回数值数组，所以必须以数组公式的形式输入。 |
| [LogInv](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/LogInv) | 使用对数分布可分析经过对数变换的数据。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 [LogNorm\_Inv](#TODO) 方法。 |
| [LogNormDist](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/LogNormDist) | 返回 x 的对数累积分布函数，其中 ln(x) 是服从参数 mean 和 standard\_dev 的正态分布。使用此函数可以分析经过对数变换的数据。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 [LogNorm\_Dist](#TODO) 方法。 |
| [Lookup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Lookup) | 从单行或单列区域或者从一个数组返回值。LOOKUP 函数具有两种语法形式：向量形式和数组形式。 |
| [MDeterm](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/MDeterm) | 返回一个数组的矩阵行列式的值。 |
| [MInverse](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/MInverse) | 返回数组矩阵的逆距阵。 |
| [MIrr](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/MIrr) | 返回某一连续期间内现金流的修正内部收益率。函数 MIRR 同时考虑了投资的成本和现金再投资的收益率。 |
| [MMult](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/MMult) | 返回两数组的矩阵乘积。结果矩阵的行数与 array1 的行数相同，矩阵的列数与 array2 的列数相同。 |
| [MRound](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/MRound) | 返回参数按指定基数舍入后的数值。 |
| [Match](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Match) | 返回在指定方式下与指定数值匹配的数组 （数组：用于建立可生成多个结果或可对在行和列中排列的一组参数进行运算的单个公式。数组区域共用一个公式；数组常量是用作参数的一组常量。）中元素的相应位置。如果需要找出匹配元素的位置而不是匹配元素本身，则应该使用 MATCH 函数而不是 LOOKUP 函数。 |
| [Max](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Max) | 返回一组值中的最大值。 |
| [Median](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Median) | 返回给定数字集合的中值。中值是处于一组数字中间的数字。 |
| [Min](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Min) | 返回一组值中的最小值。 |
| [Mode](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Mode) | 返回在某一数组或数据区域中出现频率最多的数值。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 [Mode\_Sngl](#TODO) 和 [Mode\_Mult](#TODO) 方法。 |
| [MultiNomial](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/MultiNomial) | 返回参数和的阶乘与各参数阶乘乘积的比值。 |
| [NPer](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/NPer) | 基于固定利率及等额分期付款方式，返回某项投资的总期数。 |
| [NegBinomDist](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/NegBinomDist) | 返回负二项式分布。当成功概率为常量 probability\_s 时，函数 NEGBINOMDIST 返回在到达 number\_s 次成功之前，出现 number\_f 次失败的概率。此函数与二项式分布相似，只是它的成功次数固定，试验总数为变量。与二项式分布类似的是，试验次数被假设为自变量。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 [NegBinom\_Dist](#TODO) 方法。 |
| [NetworkDays](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/NetworkDays) | 返回参数 start-data 和 end-data 之间的全部工作日数值。工作日不包括周末和节假日。可以使用函数 NETWORKDAYS，根据某一特定时期内雇员的工作天数，计算其应计的报酬。 |
| [NormDist](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/NormDist) | 返回指定平均值和标准偏差的正态分布。此函数在统计方面应用范围广泛（包括假设检验）。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 [Norm\_Dist](#TODO) 方法。 |
| [NormInv](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/NormInv) | 返回指定平均值和标准偏差的正态累积分布函数的反函数。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 [Norm\_Inv](#TODO) 方法。 |
| [NormSDist](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/NormSDist) | 返回标准正态累积分布函数，该分布的平均值为 0（零），标准偏差为 1。可以使用此函数代替标准正态曲线面积表。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 [Norm\_S\_Dist](#TODO) 方法。 |
| [NormSInv](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/NormSInv) | 返回标准正态累积分布函数的反函数。该分布的平均值为 0，标准偏差为 1。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 [Norm\_S\_Inv](#TODO) 方法。 |
| [Npv](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Npv) | 通过使用贴现率以及一系列未来支出（负值）和收入（正值），计算一项投资的净现值。 |
| [NumberValue](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/NumberValue) | 以独立于区域设置的方式将文本转换为数字。 |
| [Oct2Bin](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Oct2Bin) | 将八进制数转换为二进制数。 |
| [Oct2Hex](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Oct2Hex) | 将八进制数转换为十六进制数。 |
| [Odd](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Odd) | 返回数字向上舍入到的最接近的奇数。 |
| [Or](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Or) | 在其参数组中，如果任一参数的逻辑值为 TRUE，即返回 TRUE；如果所有参数的逻辑值为 FALSE，即返回 FALSE。 |
| [Pearson](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Pearson) | 返回 Pearson（皮尔生）乘积矩相关系数 r，这是一个范围在 -1.0 到 1.0 之间（包括 -1.0 和 1.0 在内）的无量纲指数，反映了两个数据集合之间的线性相关程度。 |
| [PercentRank](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/PercentRank) | 返回特定数值在一个数据集中的百分比排位。此函数可用于计算某个值在数据集中所处的位置。例如，可以使用函数 PERCENTRANK 计算某个特定的能力测试得分在所有的能力测试得分中的位置。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 [PercentRank\_Inc](#TODO) 和 [PercentRank\_Exc](#TODO) 方法。 |
| [Percentile](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Percentile) | 返回区域中数值的第 k 个百分点的值。可以使用此函数来建立接受阈值。例如，可以确定得分排名在第 90 个百分点之上的检测侯选人。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 [Percentile\_Inc](#TODO) 和 [Percentile\_Exc](#TODO) 方法。 |
| [Permut](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Permut) | 返回从给定数目的对象集合中选取的若干对象的排列数。排列为有内部顺序的对象或事件的任意集合或子集。排列与组合不同，组合的内部顺序无意义。此函数可用于彩票抽奖的概率计算。 |
| [Pi](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Pi) | 返回数字 3.14159265358979，即数学常量 pi，精确到 15 位数字。 |
| [Pmt](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Pmt) | 基于固定利率及等额分期付款方式，计算贷款的每期付款额。 |
| [Poisson](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Poisson) | 返回泊松分布。泊松分布通常用于预测一段时间内事件发生的次数，例如一分钟内通过收费站的轿车的数量。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 [Poisson\_Dist](#TODO) 方法。 |
| [Power](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Power) | 返回某数的乘幂结果。 |
| [Ppmt](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Ppmt) | 基于固定利率及等额分期付款方式，返回投资在某一给定期间内的本金偿还额。 |
| [Price](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Price) | 返回定期付息的面值 ￥100 的债券价格。 |
| [Prob](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Prob) | 返回区域中的数值落在指定区间内的概率。如果没有给出上限 (upper\_limit)，则返回区间 x\_range 内的值等于下限 lower\_limit 的概率。 |
| [Product](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Product) | 将所有以参数形式给出的数字相乘，并返回乘积值。 |
| [Proper](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Proper) | 将文本字符串的首字母及任何非字母字符之后的首字母转换成大写。将其余的字母转换成小写。 |
| [Pv](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Pv) | 返回投资的现值。现值为一系列未来付款的当前值的累积和。例如，借入方的借入款即为贷出方贷款的现值。 |
| [Quartile](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Quartile) | 返回数据集的四分位数。四分位数通常用于在销售额和调查数据中对总体进行分组。例如，可以使用函数 QUARTILE 求得总体中前 25% 的收入值。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 [Quartile\_Inc](#TODO) 和 [Quartile\_Exc](#TODO) 方法。 |
| [Quotient](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Quotient) | 返回商的整数部分，该函数可用于舍掉商的小数部分。 |
| [RSq](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/RSq) | 返回根据 known\_y's 和 known\_x's 中数据点计算得出的 Pearson 乘积矩相关系数的平方。有关详细信息，请参阅函数 PEARSON。R 平方值可以解释为 y 方差与 x 方差的比例。 |
| [Radians](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Radians) | 将度转换为弧度。 |
| [RandBetween](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/RandBetween) | 返回介于指定的两个数字之间的一个随机整数。每次计算工作表时都将返回一个新的随机整数。 |
| [Rank](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Rank) | 返回一个数字在数字列表中的排位。数字的排位是其大小与列表中其他值的比值（如果列表已排过序，则数字的排位就是它当前的位置）。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 [Rank\_Eq](#TODO) 和 [Rank\_Avg](#TODO) 方法。 |
| [Rate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Rate) | 返回年金的各期利率。函数 RATE 通过迭代法计算得出，并且可能无解或有多个解。如果在进行 20 次迭代计算后，函数 RATE 的相邻两次结果没有收敛于 0.0000001，则函数 RATE 将返回错误值 #NUM!。 |
| [Replace](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Replace) | 根据指定的字符数，将文本字符串的部分用其他文本字符串替换。返回值是替换之后的新字符串。 |
| [ReplaceB](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/ReplaceB) | REPLACEB 根据指定的字节数用一个文本字符串替换另一个文本字符串中的部分字符。 |
| [Rept](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Rept) | 按照给定的次数重复显示文本。可以通过函数 REPT 来不断地重复显示某一文本字符串，对单元格进行填充。 |
| [Roman](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Roman) | 将阿拉伯数字转换为文本形式的罗马数字。 |
| [Round](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Round) | 将数字舍入到指定位数。 |
| [RoundDown](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/RoundDown) | 将数字向零的方向向下舍入。 |
| [RoundUp](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/RoundUp) | 将数字向远离 0（零）的方向向上舍入。 |
| [Search](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Search) | SEARCH 和 SEARCHB 查找一个文本字符串内的另一个文本字符串，并返回一个数字，表示从文本字符串（从中查找另一个文本字符串）的第一个字符起开始查找的第一个文本字符串的起始位置。 |
| [SearchB](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/SearchB) | SEARCH 和 SEARCHB 查找一个文本字符串内的另一个文本字符串，并返回一个数字，表示从文本字符串（从中查找另一个文本字符串）的第一个字符起开始查找的第一个文本字符串的起始位置。 |
| [SeriesSum](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/SeriesSum) | 返回基于以下公式的幂级数之和：SERIES(x,n,m,a) = a₁xⁿ + a₂x⁽ⁿ⁺ᵐ⁾ + a₃x⁽ⁿ⁺²ᵐ⁾ + ... + aᵢx⁽ⁿ⁺⁽ⁱ⁻¹⁾ᵐ⁾。 |
| [Sinh](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Sinh) | 返回某一数字的双曲正弦值。 |
| [Skew](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Skew) | 返回分布的不对称度。不对称度反映以其平均值为中心的分布的不对称程度。不对称度为正表示不对称部分的分布更趋向正值。不对称度为负表示不对称部分的分布更趋向负值。 |
| [Sln](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Sln) | 返回某项资产一个周期的直线折旧值。 |
| [Slope](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Slope) | 返回根据 known\_y's 和 known\_x's 中的数据点拟合的线性回归直线的斜率。斜率为直线上任意两点的垂直距离与水平距离的比值，也就是回归直线的变化率。 |
| [Small](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Small) | 返回数据集中第 k 个最小值。使用此函数可以返回数据集中特定位置上的数值。 |
| [SqrtPi](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/SqrtPi) | 返回某数与 pi 的乘积的平方根。 |
| [StDev](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/StDev) | 基于样本估算标准偏差。标准偏差反映数值相对于平均值 (mean) 的离散程度。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 [StDev\_S](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/StDev_S) 方法。 |
| [StDevP](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/StDevP) | 基于以参数形式给出的整个样本总体计算标准偏差。标准偏差反映数值相对于平均值 (mean) 的离散程度。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 [StDev\_P](#TODO) 方法。 |
| [StDev_S](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/StDev_S) | 基于样本估算标准偏差。标准偏差反映数值相对于平均值 (mean) 的离散程度。 |
| [StEyx](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/StEyx) | 返回通过线性回归法计算每个 x 的 y 预测值时所产生的标准误差。标准误差用来度量根据单个 x 变量计算出的 y 预测值的误差量。 |
| [Standardize](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Standardize) | 返回以 mean 和 standard\_dev 表示的分布的正态化数值。 |
| [Substitute](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Substitute) | 在文本字符串中用 new\_text 替代 old\_text。如果需要在某一文本字符串中替换指定的文本，请使用函数 SUBSTITUTE；如果需要在某一文本字符串中替换指定位置处的任意文本，请使用函数 REPLACE。 |
| [Subtotal](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Subtotal) | 创建分类汇总。返回 Double 表示小计。 |
| [Sum](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Sum) | 对某单元格区域中的所有数字求和。 |
| [SumIf](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/SumIf) | 根据给定条件对指定单元格求和。 |
| [SumIfs](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/SumIfs) | 对区域中满足多个条件的单元格求和。 |
| [SumProduct](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/SumProduct) | 在给定的数组中，将数组中对应的元素相乘，并返回乘积之和。 |
| [SumSq](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/SumSq) | 返回参数的平方之和。 |
| [SumX2MY2](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/SumX2MY2) | 返回两个数组中对应值的平方差之和。 |
| [SumX2PY2](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/SumX2PY2) | 返回两数组中对应数值的平方和之和，平方和之和在统计计算中经常使用。 |
| [SumXMY2](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/SumXMY2) | 返回两个数组中对应值之差的平方和。 |
| [Syd](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Syd) | 返回某项资产按年限总和折旧法计算的指定期间的折旧值。 |
| [TDist](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/TDist) | 返回学生 t 分布的百分点（概率），其中数值 (x) 是 t 的计算值（将计算其百分点）。t 分布用于小样本数据集的假设检验。使用此函数可以代替 t 分布的临界值表。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 [T\_Dist\_RT](#TODO)、[T\_Dist](#TODO) 和 [T\_Dist\_2T](#TODO) 方法。 |
| [TInv](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/TInv) | 返回作为概率和自由度函数的学生 t 分布的 t 值。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 [T\_Inv](#TODO) 和 [T\_Inv\_2T](#TODO) 方法。 |
| [TTest](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/TTest) | 返回与学生 t 检验相关的概率。可以使用函数 TTEST 判断两个样本是否可能来自两个具有相同平均值的总体。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 [T\_Test](#TODO) 方法。 |
| [Tanh](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Tanh) | 返回某一数字的双曲正切值。 |
| [Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Text) | 将数值转换为按指定数字格式表示的文本。 |
| [Transpose](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Transpose) | 返回转置单元格区域，即将一行单元格区域转置成一列单元格区域，反之亦然。在行列数分别与数组 （数组：用于建立可生成多个结果或可对在行和列中排列的一组参数进行运算的单个公式。数组区域共用一个公式；数组常量是用作参数的一组常量。）的行列数相同的区域中，必须将 TRANSPOSE 输入为数组公式 （数组公式：数组公式对一组或多组值执行多重计算，并返回一个或多个结果。数组公式括于大括号 ({ }) 中。按 Ctrl+Shift+Enter 可以输入数组公式。）。使用 TRANSPOSE 可在工作表中转置数组的垂直和水平方向。 |
| [Trend](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Trend) | 返回一条线性回归拟合线的一组纵坐标值（y 值）。即找到适合给定的数组 known\_y's 和 known\_x's 的直线（用最小二乘法），并返回指定数组 new\_x's 值在直线上对应的 y 值。 |
| [Trim](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Trim) | 删除文本中的所有空格（除了单词之间的单个空格外）。对于从其他应用程序中获取带有不规则空格的文本，可以使用 TRIM。 |
| [TrimMean](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/TrimMean) | 返回数据集的内部平均值。函数 TRIMMEAN 先从数据集的头部和尾部除去一定百分比的数据点，然后再求平均值。当希望在分析中剔除一部分数据的计算时，可以使用此函数。 |
| [USDollar](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/USDollar) | 将数字转换为文本格式并应用货币符号。方法的名称（及其应用的货币符号）取决于语言设置。 |
| [VLookup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/VLookup) | 在表格数组的首列查找值，并由此返回表格数组当前行中其他列的值。 |
| [Var](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Var) | 估算基于样本的方差。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 [Var\_S](#TODO) 方法。 |
| [VarP](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/VarP) | 计算基于整个总体的方差。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 [Var\_P](#TODO) 方法。 |
| [Vdb](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Vdb) | 使用双倍余额递减法或其他指定的方法，返回指定的任何期间内（包括部分期间）的资产折旧值。函数 VDB 代表可变余额递减法。 |
| [WeekNum](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/WeekNum) | 返回一个数字，指示一年中的第几周。 |
| [Weekday](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Weekday) | 返回与日期对应的一周中的某一天。默认情况下，其值为 1（星期日）到 7（星期六）之间的整数。 |
| [Weibull](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Weibull) | 返回韦伯分布。使用此分布可以进行可靠性分析，例如计算设备失效的平均时间。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 [Weibull\_Dist](#TODO) 方法。 |
| [WorkDay](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/WorkDay) | 返回某日期（起始日期）之前或之后相隔指定工作日的某一日期的日期值。工作日不包括周末和节假日。在计算发票到期日、预期交货时间或工作天数时，可以使用函数 WORKDAY 来扣除周末或节假日。 |
| [Xirr](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Xirr) | 返回一组现金流的内部收益率，这些现金流不一定定期发生。若要计算一组定期现金流的内部收益率，请使用函数 IRR。 |
| [Xnpv](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Xnpv) | 返回一组现金流的净现值，这些现金流不一定定期发生。可读/写 **Double** 类型。 |
| [YearFrac](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/YearFrac) | 返回 start\_date 和 end\_date 之间的天数占全年天数的百分比。使用 YEARFRAC 工作表函数可判别某一特定条件下全年效益或债务的比例。 |
| [ZTest](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/ZTest) | 返回 z 检验的单尾概率值。对于给定的假设总体平均值，ZTEST 返回样本平均值大于数据集（数组）中观察平均值（即观察样本平均值）的概率。此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。有关新函数的详细信息，请参阅 [Z\_Test](#TODO) 方法。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Application) | 如果不使用对象识别符，则该属性返回一个代表 ET 应用程序的 **Application** 对象。如果使用对象识别符，则该属性返回一个代表指定对象的创建程序的 **Application** 对象。可对一个 OLE 自动化对象使用该属性来返回该对象的应用程序。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetFunction/member/Parent) | 返回指定对象的父对象。只读。 |