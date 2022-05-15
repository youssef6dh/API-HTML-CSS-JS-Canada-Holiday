window.onload = function() {
    const form = document.getElementById("myform")
    form.addEventListener('submit', function(e) {
        e.preventDefault()
        var provinceselect = document.getElementById("provinceselect").value
        var url = " https://canada-holidays.ca/api/v1/provinces/" + provinceselect
        holidaydata(url)
    })

    async function holidaydata(url) {
        const response = await fetch(url)
        console.log(response)
        const data = await response.json()
        console.log(data.province.holidays)

        let length = data.province.holidays.length
        let index = length 
        let ProvinceVar = document.getElementById("province")
        let holidayNbr = document.getElementById("Holidays numbers per year")

        let holidayName = document.getElementById("Last holiday")
        let holidayDate = document.getElementById("Date last Holiday")
        
        let nextholiday = document.getElementById("Next Holiday name")
        let nextholidayDate = document.getElementById("Date of Next holiday")

       let holNames =" "
       let holDates =" "
   

        ProvinceVar.innerHTML = " "
        holidayNbr.innerHTML = " "

        holidayName.innerHTML = " "
        holidayDate.innerHTML = " "

        nextholiday.innerHTML = " "
        nextholidayDate.innerHTML = " "

       
     
        
        ProvinceVar.append("1- Province Name : " + data.province.nameFr)
       
        holidayNbr.append("2- Holidays numbers per year: "+ index)
        

       // holidayName.append("Last holiday name : " + data.province.holidays[0].nameFr)
      // holidayDate.append("Date of Last Holiday: " + data.province.holidays[0].date)

        for (i=0, index; i< index; i++)
       {      
        //holidayName.append("--|-- " + data.province.holidays[i].nameFr)  
       holNames += "--|--" + data.province.holidays[i].nameFr
       //document.getElementById("Last holiday").innerHTML = document.getElementById("Last holiday").innerHTML + data.province.holidays[i].nameFr;
       holDates += "--|--" + data.province.holidays[i].date
       }

       holidayName.append("3- List holidays name : " + holNames)
      holidayDate.append("4- Date list of all  Holidays: " + holDates)



        nextholiday.append("5- Next holiday name: " + data.province.nextHoliday.nameFr)
        nextholidayDate.append("6- Date next holiday: " + data.province.nextHoliday.date)
        
        

    }
}