# Moadaly معدلي

محاكي حساب المعدل لطلبة نظام ل.م.د تخصص رياضيات وإعلام آلي
يستعمل لكل الجامعات التي تتابع نفس المنهاج لميدان الرياضيات والإعلام الآلي في الجزائر،

* فيه جزئية خاصة بتخصصات الماستر في الإعلام الآلي بالبويرة،

Try it : [moadaly-WebApp](https://moadaly.vercel.app)

See Moadaly android app : [moadaly-App](https://github.com/tarek-berkane/moadaly_v2)

See our design : [design](https://github.com/Sho-Oter/dynamic-grade-average-calculator)

See  : [SourceCode](https://github.com/madjsmail/moadaly)

## Moadaly

* is a web application that allow you to calculate your pass marks. The app is for computer science student " LMD "   
* تطبيق ويب لحساب المعدل الفصلي و السنوي للسنة الأولى  رياضيات وإعلام آلي وسنوات إعلام آلى   نظام [LMD] الجزائر 

* التخصصات المدعومة حاليا:
  * L1 MI
  * L2 Info
  * L3 SI + ISIL
  * M1 ISIL+ GSI + IA (جامعة البويرة)
  * M2 ISIL + GSI + IA (جامعة البويرة)
* تمت إضافة السنة الأولى في ميداني العلوم والتكنولوجيا وميدان علوم المادة ST/SM

# Calcul 
The calcul is based on :
* License:
    * [Canevas L1 MI](docs/L1MI.pdf)
    * [Canevas L2 Info](docs/L2info.pdf)
    * [Canevas L3 SI ](docs/L3SI.pdf)
    * [Canevas L3 ISIL ](docs/L3ISIL.pdf)
* Master:
    * [Canevas M1 + M2 GSI](docs/MGSI.pdf)  (Update 2023-2024) [ updated Canevas M1 + M2 GSI](docs/MGSI-bouira-2023-2024.pdf)
    * [Canevas M1 + M2 ISIL](docs/MISIL.pdf)    (Update 2023-2024) [Canevas M1 + M2 ISIL](docs/MISIL-bouira-2023-2024.pdf)    
    * [Canvas M1+ M2 IA](docs/MIA-bouira-2023-2024.pdf) (Introduced on 2023-2024)
* Domaine ST [Canevas L1 ST](docs/L1ST.pdf)
* Domaine SM [Canevas L1 SM](docs/L1SM.pdf)
* More details can be found  [here](http://dpinfo.univ-bouira.dz/?page_id=22) 

## Issues
Testing is much appreciated. Please post any issue you find in the [Issue tracker](https://github.com/Abdelmadjidsmail/moadaly/issues).



## Project Implementation by 
* [**Smail Abd El Madjid**](https://github.com/madjsmail/)
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


1. Make a copy of canevas/templates/L1Info.json  as L3ML.json
2. Modify the JSON file as you need.
3. copy the file into : canevas/json-pure/L3ML.json
4. Re-build canevas_data.js using, requires pyhton:
 ```sh
     make build_data
 ```
5. Test if it works
6. The menu must be updated automatically









