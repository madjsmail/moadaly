# Moadaly معدلي

محاكي حساب المعدل لطلبة نظام ل.م.د تخصص رياضيات وإعلام آلي
يستعمل لكل الجامعات التي تتابع نفس المنهاج لميدان الرياضيات والإعلام الآلي في الجزائر،

* فيه جزئية خاصة بتخصصات الماستر في الإعلام الآلي بالبويرة،

Try it : https://abdelmadjidsmail.github.io/moadaly/ 

See Moadaly android app : [moadaly-App](https://github.com/tarekDZ2019/moadaly-App)

See our design : [design](https://github.com/Sho-Oter/dynamic-grade-average-calculator)

## Moadaly

* is a web application that allow you to calculate your pass marks. The app is for computer science student " LMD "   
* تطبيق ويب لحساب المعدل الفصلي و السنوي للسنة الاولى  رياضيات وإعلام آلي وسنوات اعلام الى   نظام [LMD] الجزائر 

* التخصصات المدعومة حاليا:
  * L1 MI
  * L2 Info
  * L3 SI + ISIL
  * M1 ISIL+ GSI
  * M2 ISIL + GSI

# Calcul 
The calcul is based on :
* License:
	* [Canevas L1 MI](docs/L1MI.pdf)
	* [Canevas L2 Info](docs/L2info.pdf)
	* [Canevas L3 SI ](docs/L3SI.pdf)
	* [Canevas L3 ISIL ](docs/L3ISIL.pdf)
* Master:
	* [Canevas M1 + M2 GSI](docs/MGSI.pdf)
	* [Canevas M1 + M2 ISIL](docs/MISIL.pdf)	

* More details can be found  [here](http://dpinfo.univ-bouira.dz/?page_id=22) 

## Issues
Testing is much appreciated. Please post any issue you find in the [Issue tracker](https://github.com/Abdelmadjidsmail/moadaly/issues).



## Project Implementation by 
* [**Smail Abd El Madjid**](https://github.com/Abdelmadjidsmail/)
* [**Taha Zerrouki**](https://github.com/linuxscout/)
* [**Tarek Berkane**](https://github.com/tarekDZ2019) *mobile app*
* [**Aouf Ali**](https://github.com/Sho-Oter)  *design* 

## Built With
* [HTML/CSS]
* [bootstrap/shards] -the  css framework  used 
* [jquery ]   - java script framework

## Contribution
* Adapt this app for more specialities (ST, SM, etc..)

### How to create a new canvas
For example a new level named "L3ML"

1. make a copy of canevas template:
 a. html file: copy canevas/templates/indexL3ML.html
 b. html file: copy canevas/templates/majq_L3ML.js
 make copy and put it on canevas directory and canevas/js for js files
2. Test if it works
3. Update configuration modules and unites in majq_L3ML.js file
4. You can add an argument to  annee.create_canevas(true) as true to check your canevas
5. If it works: Add new menu item "L3ML"
into file :canevas/js/utils.js function create_menu: 










