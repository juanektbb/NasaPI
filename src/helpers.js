//CONVERT TO FANCY DATE
export function convertDate(yyyymmdd){
  if(yyyymmdd == undefined)
    return "Loading..."

  let day = yyyymmdd.substring(8,10)
  let month = yyyymmdd.substring(5,7)
  let year = yyyymmdd.substring(0,4)

  let months = []
  months["01"] = "Jan"
  months["02"] = "Feb"
  months["03"] = "Mar"
  months["04"] = "Apr"
  months["05"] = "May"
  months["06"] = "Jun"
  months["07"] = "Jul"
  months["08"] = "Aug"
  months["09"] = "Sep"
  months["10"] = "Oct"
  months["11"] = "Nov"
  months["12"] = "Dec"

  if(day.substring(0,1) == "0")
    day = day.substring(1,2)

  return months[month] + " " + day + ", " + year
}

//PROVIDE YYYY-MM-DD FORMAT FOR DAYS AGO
export function getPreviousDates(days_ago){
  var today = new Date()
  var on_date = new Date(today.setDate(today.getDate() - days_ago))

  var date = ("0" + on_date.getDate()).slice(-2)
  var month = ("0" + (on_date.getMonth() + 1)).slice(-2)
  var year = on_date.getFullYear()

  return year + "-" + month + "-" + date
}
